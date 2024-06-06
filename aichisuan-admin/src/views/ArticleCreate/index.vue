<template>
  <div class="article-handle">
    <a-spin :spinning="loading">
      <a-form :model="formState" class="article-form">
        <a-row>
          <a-col :span="21">
            <a-form-item label="文章标题" class="article-form__title">
              <a-input v-model:value="formState.article_title" placeholder="请输入文章标题"></a-input>
            </a-form-item>
            <a-form-item label="文章类型" class="article-form__type">
              <a-select v-model:value="formState.type_id" placeholder="请选择文章类型">
                <a-select-option v-for="item in articleTypes" :key="item.id" :value="item.id">{{ item.type_name }}</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="文章是否发布" class="article-form__is-fat">
              <a-select v-model:value="formState.is_dfat" placeholder="请选择文章状态">
                <a-select-option :value="1">保存为草稿</a-select-option>
                <a-select-option :value="0">直接发布</a-select-option>
              </a-select>
            </a-form-item>
            <a-form-item label="发布时间" class="article-form__date">
              <a-date-picker show-time v-model:value="formState.create_time" />
            </a-form-item>
            <a-form-item label="更新时间" class="article-form__date">
              <a-date-picker show-time v-model:value="formState.update_time" />
            </a-form-item>
            <a-form-item label="点赞量" class="article-form__count">
              <a-input-number :min="0" v-model:value="formState.article_like_count"></a-input-number>
            </a-form-item>
            <a-form-item label="阅读数" class="article-form__count">
              <a-input-number :min="1" v-model:value="formState.article_read_count" />
            </a-form-item>
            <a-form-item label="权重" class="article-form__count">
              <a-input-number :min="0" v-model:value="formState.article_weight" />
            </a-form-item>
          </a-col>
          <a-col :span="3">
            <a-form-item label="文章封面" class="article-form__count">
              <upload-img v-model:img-url="formState.article_cover" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row style="width: 100%">
          <a-col :span="24">
            <a-form-item style="width: 100%">
              <MdEditor v-model="formState.article_content" class="article-form__md" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-form-item class="article-form__submit">
          <a-button type="primary" @click="handleSubmit" size="large">提交</a-button>
        </a-form-item>
      </a-form>
    </a-spin>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { ArticleType } from '../../lib/commenType/article';
import { onBeforeRouteLeave, useRoute, useRouter } from 'vue-router';
import service from '../../lib/fetch/Api';
import MdEditor from '@/components/MdEditor/index.vue';
import type { Dayjs } from 'dayjs';
import { formatTimeDayjs } from '../../lib/timeFormat';
import { message } from 'ant-design-vue';
import UploadImg from '@/components/UploadImg/index.vue';

type FormState = {
  article_title: string;
  article_content: string;
  create_time: Dayjs | null | string;
  update_time: Dayjs | null | string;
  type_id: string;
  is_dfat: string;
  article_like_count: number;
  article_read_count: number;
  article_weight: number;
  article_cover: string;
};

const loading = ref<boolean>(false);

const route = useRoute();
const router = useRouter();

const { article_id } = route.params;

const articleTypes = ref<ArticleType[]>([]);

const pushArticleId = ref<number>();

const initFormState = () => ({
  article_title: '',
  article_content: '',
  create_time: null,
  update_time: null,
  type_id: '',
  is_dfat: '',
  article_like_count: 0,
  article_read_count: 1,
  article_weight: 0,
  article_cover: '',
});

const formState = ref<FormState>(initFormState());

const getArticleType = async () => {
  const res = await service.getArticleType();
  if (res.code === 200) articleTypes.value = res.data;
};

const getArticleDetail = async () => {
  const { code, data } = await service.getArticleDetail(`${article_id}` as string);
  if (code !== 200) return;
  const { article_title, article_content, create_time, update_time, type_id, is_dfat, article_like_count, article_read_count, article_weight, article_cover } = data;
  formState.value = {
    article_title,
    article_content,
    create_time: formatTimeDayjs(create_time),
    update_time: formatTimeDayjs(update_time),
    type_id,
    is_dfat,
    article_like_count,
    article_read_count,
    article_weight,
    article_cover,
  };
};

const init = async () => {
  await getArticleType();
  if (article_id) {
    getArticleDetail();
  } else formState.value = initFormState();
};

init();

onBeforeRouteLeave((to, from, next) => {
  // 创建和保存增加弹窗提示
  if (from && !from.path.includes('/layout/article-create') && !from.path.includes('/layout/article-update')) {
    next();
    return;
  }

  if (pushArticleId.value) {
    next();
    return;
  }

  const userRes = window.confirm('当前内容未保存，是否 离开');
  if (userRes) {
    if (to && to.path === '/layout/article-create') {
      formState.value = initFormState();
    }
    next();
  } else {
    next(false);
  }
});

const handleSubmit = async () => {
  const { article_title, article_content, create_time, update_time, type_id, is_dfat, article_like_count, article_read_count, article_weight, article_cover } = formState.value;
  const params: FormState & {article_content_preview: string} = {
    article_title,
    article_content,
    article_content_preview: article_content.slice(0, 100),
    create_time: (create_time as Dayjs)?.format('YYYY-MM-DD HH:mm:ss') || null,
    update_time: (update_time as Dayjs)?.format('YYYY-MM-DD HH:mm:ss') || null,
    type_id,
    is_dfat,
    article_like_count,
    article_read_count,
    article_weight,
    article_cover,
  };
  loading.value = true;
  if (article_id) {
    const { code } = await service.updateArticle(article_id as string, params);
    if (code === 200) {
      message.success('更新成功');
      pushArticleId.value = +article_id;
    } else {
      message.error('更新失败');
      return;
    }
  } else {
    const { code, data } = await service.createArticle(params);
    if (code === 200) {
      message.success('创建成功');
      pushArticleId.value = data.article_id;
    } else {
      message.error('创建失败');
      return;
    }
  }
  loading.value = false;
  router.push({ path: '/layout/article-list', query: { id: `${pushArticleId.value}` } });
};
</script>

<style lang="less" scoped>
.article-form {
  display: flex;
  flex-wrap: wrap;
  &__title {
    display: inline-block;
    width: 300px;
    margin-right: 10px;
  }
  &__type {
    display: inline-block;
    width: 200px;
    margin-right: 10px;
  }
  &__is-fat {
    display: inline-block;
    width: 220px;
    margin-right: 10px;
  }
  &__date {
    display: inline-block;
    width: 250px;
    margin-right: 10px;
  }
  &__md {
    height: calc(100vh - 330px);
  }
  &__submit {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  &__count {
    display: inline-block;
    margin-left: 10px;
  }
}
</style>
