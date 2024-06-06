<template>
  <a-form layout="inline" :model="formState" class="article_form">
    <a-form-item>
      <a-input v-model:value="formState.article_id" placeholder="id(搜索)"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.article_title" placeholder="文章标题(模糊搜索)"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.article_content" type="text" placeholder="文章内容(模糊搜索)"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-select v-model:value="formState.type_id" style="width: 200px" placeholder="选择文章类型">
        <a-select-option v-for="t in articleTypes" :key="t.id">{{ t.type_name }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="发布时间">
      <a-range-picker v-model:value="formState.create_time" />
    </a-form-item>
    <a-form-item label="更新时间">
      <a-range-picker v-model:value="formState.update_time" />
    </a-form-item>
    <a-form-item label="状态">
      <a-select v-model:value="formState.is_dfat" style="width: 100px" placeholder="全部">
        <a-select-option :value="1">草稿</a-select-option>
        <a-select-option :value="0">已发布</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" @click="handleSearch"> 查询 </a-button>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" @click="handleReset"> 重置 </a-button>
    </a-form-item>
  </a-form>
  <s-table :articleList="articleList" @update="getArticleList(formState)" />
  <Pagination @change-page-emit="changePage" v-model:page="pageInfo.page" v-model:page-size="pageInfo.pageSize" :total="pageInfo.total" />
</template>
<script lang="ts" setup>
import { onMounted, provide, reactive, ref } from 'vue';
import service from '../../lib/fetch/Api';
import Pagination from './components/Pagination.vue';
import STable from './components/Table.vue';
import type { ArticleItem, ArticleType, PageInfo } from '../../lib/commenType/article';
import type { Dayjs } from 'dayjs';
import { formatTime } from '../../lib/timeFormat/index';
import { useRoute } from 'vue-router';

interface FormState {
  article_id: number | string;
  type_id: string | number | undefined;
  article_title: string;
  article_content: string;
  create_time: [Dayjs, Dayjs] | undefined;
  update_time: [Dayjs, Dayjs] | undefined;
  create_time_start?: string;
  create_time_end?: string;
  update_time_start?: string;
  update_time_end?: string;
  is_dfat: string | number | undefined;
}

const route = useRoute();
const queryArticleId = route.query.id || '';

const formState = reactive<FormState>({
  article_id: queryArticleId as string,
  type_id: undefined,
  article_title: '',
  article_content: '',
  create_time: undefined,
  update_time: undefined,
  is_dfat: undefined,
});

const articleTypes = ref<ArticleType[]>([]);

const articleList = ref<ArticleItem[]>([]);

const pageInfo = reactive<PageInfo>({
  page: 1,
  pageSize: 10,
  total: 0,
});

onMounted(async () => {
  await getArticleType();
  await getArticleList(formState);
});

const getArticleType = async () => {
  const res = await service.getArticleType();
  if (res.code === 200) articleTypes.value = res.data;
};

const getArticleList = async (query: FormState) => {
  query = query || formState;
  const { article_title = '', article_content = '', type_id = '', create_time = '', update_time='', is_dfat = '', article_id = '' } = query;

  const queryObj: Omit<FormState, 'create_time' | 'update_time'> = {
    article_id,
    article_title,
    article_content,
    type_id,
    is_dfat: is_dfat === undefined ? '' : is_dfat,
  };

  if (create_time && create_time[0] && create_time[1]) {
    queryObj.create_time_start = formatTime(create_time[0], 'YYYY-MM-DD');
    queryObj.create_time_end = formatTime(create_time[1], 'YYYY-MM-DD');
  }

  if (update_time && update_time[0] && update_time[1]) {
    queryObj.update_time_start = formatTime(update_time[0], 'YYYY-MM-DD');
    queryObj.update_time_end = formatTime(update_time[1], 'YYYY-MM-DD');
  }

  const { code, data, pageInfo: { pageSize = 1, page = 1, total = 0 } } = await service.getArticleList({
    ...queryObj,
    ...pageInfo,
  });
  if (code !== 200) return;
  articleList.value = data;
  pageInfo.page = page;
  pageInfo.pageSize = pageSize;
  pageInfo.total = total;
};

const changePage = () => {
  getArticleList({
    ...formState,
  });
};

const handleSearch = () => {
  getArticleList({
    ...formState,
  });
};

const handleReset = () => {
  formState.article_id = '';
  formState.type_id = undefined;
  formState.article_title = '';
  formState.article_content = '';
  formState.create_time = undefined;
  formState.update_time = undefined;
  formState.is_dfat = undefined;
  pageInfo.page = 1;
  pageInfo.pageSize = 10;
  getArticleList({
    ...formState,
  });
};

// provide
provide('articleTypes', articleTypes);
provide('updateTable', getArticleList);
</script>

<style lang="less" scoped>
.article_form {
  display: flex;
  flex-wrap: wrap;
  .ant-form-item {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
