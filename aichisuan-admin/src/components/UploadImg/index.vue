<template>
  <a-upload
    name="idCardzm"
    list-type="picture-card"
    class="avatar-uploader"
    :show-upload-list="false"
    :before-upload="beforeUpload"
    :customRequest="handleChange"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    <a-image :width="100" :height="100" class="upload-img" @click.stop v-if="imgUrl" :src="imgUrl" alt="上传图片"/>
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">上传图片</div>
    </div>
    <CloseCircleOutlined v-if="showDeleteIcon && imgUrl" class="delete-icon" type="close-circle" @click.stop="deleteImage()" />
  </a-upload>
</template>
<script lang="ts" setup>
import { ref, defineModel } from 'vue';
import { message } from 'ant-design-vue';
import { uploadCos } from '@/lib/cosUpload';
import { PlusOutlined, LoadingOutlined, CloseCircleOutlined } from '@ant-design/icons-vue';

const imgUrl = defineModel('imgUrl', {
  type: String,
  default: '',
});

//主要用图片上传前的限制操作（非必写）
const beforeUpload = (file: File) => {
  const isLt10M = file.size / 1024 / 1024 < 10;
  if (!isLt10M) {
    message.error('图片尺寸不能超过10MB!');
  }
  return isLt10M;
};
// 图片上传
const loading = ref(false);
const handleChange = async (Info: {file: File}) => {
  loading.value = true;
  try {
    const { code, url } = await uploadCos(Info.file, 'img');
    if (code === 200) imgUrl.value = `https://${url}`;
    loading.value = false;
  } catch (error) {
    loading.value = false;
  }
};

//控制删除icon
const showDeleteIcon = ref(false);

//鼠标悬停事件
const handleMouseEnter = () => {
  showDeleteIcon.value = true;
};

//鼠标离开事件
const handleMouseLeave = () => {
  showDeleteIcon.value = false;
};
//删除当前图片
const deleteImage = () => {
  imgUrl.value = '';
  showDeleteIcon.value = false; // 隐藏删除图标
};
</script>

<style scoped>
.upload-img {
  width: 100px;
  height: 100px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
.image-upload {
  position: relative;
}
.delete-icon {
  position: absolute;
  top: -7px;
  right: -2px;
  color: black;
  font-size: 22px;
  cursor: pointer;
  z-index: 100;
}
</style>
