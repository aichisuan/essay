<template>
  <a-upload
    v-model:file-list="fileList"
    list-type="picture"
    :show-upload-list="false"
    :before-upload="beforeUpload"
    :customRequest="handleUpload"
    @preview="handlePreview"
    :maxCount="maxCount"
  >
    <a-button>
      <upload-outlined></upload-outlined>
      上传
    </a-button>
  </a-upload>
</template>
<script lang="ts" setup>
import { ref, defineModel, watch } from 'vue';
import { message } from 'ant-design-vue';
import { uploadCos } from '@/lib/cosUpload';
import { getImgFileUploadInfo } from '@/lib/imgFix';

type CustomRequestParams = {
  file: File;
  filename: string;
  onSuccess: (res: any) => void;
  onError?: (err: any) => void;
  onProgress?: (event: { percent: number }) => void;
};

// const fileList = ref<any[]>([]);

const fileList = ref([
  {
    uid: '-1',
    name: 'xxx.png',
    status: 'done',
    url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
  },
]);

defineProps({
  maxCount: {
    type: Number,
    default: 1,
  },
});

const imgList = defineModel('imgList', {
  type: Array,
  default: () => [],
});

const loading = ref<boolean>(false);

const beforeUpload = (file: File) => {
  const isLt2M = file.size / 1024 / 1024 < 10;
  if (!isLt2M) {
    message.error('图片最大上传为10M!');
  }
  return isLt2M;
};

const handleUpload = async ({ file, filename, onError, onSuccess }: CustomRequestParams) => {
  loading.value = true;
  const { code, url } = await uploadCos(file, filename);
  loading.value = false;
  if (code !== 200) {
    message.error('上传失败');
    onError?.('上传失败');
    return;
  }
  onSuccess && onSuccess({ url });
  imgList.value = imgList.value.concat(url);
};

watch(
  imgList,
  (newVal) => {
    fileList.value = newVal.map((url) => getImgFileUploadInfo(url as string));
    console.log(newVal.map((url) => getImgFileUploadInfo(url as string)));
  },
  { immediate: true, deep: true }
);

const handlePreview = async () => {};
</script>

<style scoped>
.img-lit {
  width: 128px;
  height: 128px;
  object-fit: cover;
}

.upload-list-inline :deep(.ant-upload-list-item) {
  float: left;
  width: 200px;
  margin-right: 8px;
}
.upload-list-inline [class*='-upload-list-rtl'] :deep(.ant-upload-list-item) {
  float: right;
}
</style>
