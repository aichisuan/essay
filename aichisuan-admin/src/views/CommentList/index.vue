<template>
  <a-form layout="inline" :model="formState" class="comment_form">
    <a-form-item>
      <a-input v-model:value="formState.parent_comment_id" placeholder="评论父id(搜索)"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.comment_id" placeholder="评论主id(搜索)"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.article_id" placeholder="文章id(搜索)"> </a-input>
    </a-form-item>
    <a-form-item>
      <!-- 自动生成的本地存储id值 -->
      <a-input v-model:value.trim="formState.user_idp" placeholder="用户id(搜索)"> </a-input>
    </a-form-item>
    <a-form-item label="评论时间">
      <a-range-picker v-model:value="formState.create_time" />
    </a-form-item>
    <a-form-item label="状态">
      <a-select v-model:value="formState.status" style="width: 100px" placeholder="全部">
        <a-select-option v-for="item in statusList" :key="item.label" :value="item.value">{{ item.label }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item label="管理员评论">
      <a-select v-model:value="formState.is_admin" style="width: 100px" placeholder="全部">
        <a-select-option v-for="item in replayAdminList" :key="item.label" :value="item.value">{{ item.label }}</a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" @click="handleSearch"> 查询 </a-button>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" @click="handleReset"> 重置 </a-button>
    </a-form-item>
  </a-form>
  <c-table :commentList="commentList" @update="getCommentList(formState)" />
  <Pagination @change-page-emit="changePage" v-model:page="pageInfo.page" v-model:page-size="pageInfo.pageSize" :total="pageInfo.total" />
</template>
<script lang="ts" setup>
import { onMounted, provide, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';
import service from '../../lib/fetch/Api';
import Pagination from './components/Pagination.vue';
import CTable from './components/Table.vue';
import type { PageInfo } from '../../lib/commenType/article';
import type { Dayjs } from 'dayjs';
import { formatTime } from '../../lib/timeFormat/index';
import { commentstatusList as statusList } from '@/lib/commonData/index';
import { commonSelects as replayAdminList } from '@/lib/commonData/index';

const route = useRoute();
const { query } = route;

interface FormState {
  is_admin: number | string;
  parent_comment_id: string;
  comment_id: string;
  article_id: string;
  user_idp: string;
  create_time: [Dayjs | null, Dayjs | null];
  create_time_start?: string;
  create_time_end?: string;
  status: number | string;
}

const formState = reactive<FormState>({
  is_admin: '',
  parent_comment_id: '',
  comment_id: query.id ? query.id as string : '',
  article_id:  '',
  user_idp: '',
  create_time: [null, null],
  status: '',
});

const pageInfo = reactive<PageInfo>({
  page: 1,
  pageSize: 50,
  total: 0,
});

const commentList = ref([]);

onMounted(async () => {
  await getCommentList(formState);
});


const getCommentList = async (query: FormState) => {
  query = query || formState;
  
  const { parent_comment_id = '', is_admin = '', user_idp='', comment_id = '', article_id ='', create_time = [null, null], status = ''  } = query;

  const queryObj: Omit<FormState, 'create_time'> = {
    is_admin,
    parent_comment_id,
    comment_id,
    user_idp,
    article_id,
    status,
  };

  if (create_time && create_time[0] && create_time[1]) {
    queryObj.create_time_start = formatTime(create_time[0], 'YYYY-MM-DD');
    queryObj.create_time_end = formatTime(create_time[1], 'YYYY-MM-DD');
  }


  const { code, data, pageInfo: { pageSize = 1, page = 1, total = 0 } } = await service.getCommentList({
    ...queryObj,
    ...pageInfo,
  });
  if (code !== 200) return;
  commentList.value = data;
  pageInfo.page = page;
  pageInfo.pageSize = pageSize;
  pageInfo.total = total;
};

const changePage = () => {
  getCommentList({
    ...formState,
  });
};

const handleSearch = () => {
  getCommentList({
    ...formState,
  });
};

const handleReset = () => {
  formState.parent_comment_id = '';
  formState.comment_id = '';
  formState.article_id = '';
  formState.user_idp = '';
  formState.is_admin = '';
  formState.create_time = [null, null];
  formState.status = '';
  pageInfo.page = 1;
  pageInfo.pageSize = 50;
  getCommentList({
    ...formState,
  });
};

// provide
provide('updateTable', getCommentList);
</script>

<style lang="less" scoped>
.comment_form {
  display: flex;
  flex-wrap: wrap;
  .ant-form-item {
    margin-right: 20px;
    margin-bottom: 20px;
  }
}
</style>
