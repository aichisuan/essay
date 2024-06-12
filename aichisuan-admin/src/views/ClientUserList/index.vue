<template>
  <a-form layout="inline" :model="formState" class="comment_form">
    <a-form-item>
      <a-input v-model:value="formState.user_id" placeholder="喜欢id(搜索)"> </a-input>
    </a-form-item>
    <a-form-item>
      <a-input v-model:value="formState.user_idp" placeholder="用户id(搜索)"> </a-input>
    </a-form-item>

    <a-form-item>
      <a-button type="primary" html-type="submit" @click="handleSearch"> 查询 </a-button>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" @click="handleReset"> 重置 </a-button>
    </a-form-item>
  </a-form>
  <u-table :likeList="likeList" @update="getLikeList(formState)" />
  <Pagination @change-page-emit="changePage" v-model:page="pageInfo.page" v-model:page-size="pageInfo.pageSize" :total="pageInfo.total" />
</template>
<script lang="ts" setup>
import { onMounted, provide, reactive, ref } from 'vue';
import service from '../../lib/fetch/Api';
import Pagination from './components/Pagination.vue';
import UTable from './components/Table.vue';
import type { PageInfo } from '../../lib/commenType/article';

interface FormState {
  user_id: string;
  user_idp: string;
}

const formState = reactive<FormState>({
  user_id: '',
  user_idp: '',
});

const pageInfo = reactive<PageInfo>({
  page: 1,
  pageSize: 10,
  total: 0,
});

const likeList = ref([]);

onMounted(async () => {
  await getLikeList(formState);
});


const getLikeList = async (query: FormState) => {
  query = query || formState;
  
  const { user_id, user_idp  } = query;

  const queryObj: FormState = {
    user_id,
    user_idp,
  };

  const { code, data, pageInfo: { pageSize = 1, page = 1, total = 0 } } = await service.getUserLikeList({
    ...queryObj,
    ...pageInfo,
  });
  if (code !== 200) return;
  likeList.value = data;
  pageInfo.page = page;
  pageInfo.pageSize = pageSize;
  pageInfo.total = total;
};

const changePage = () => {
  getLikeList({
    ...formState,
  });
};

const handleSearch = () => {
  getLikeList({
    ...formState,
  });
};

const handleReset = () => {
  formState.user_id = '';
  formState.user_idp = '';
  pageInfo.page = 1;
  pageInfo.pageSize = 10;
  getLikeList({
    ...formState,
  });
};

// provide
provide('updateTable', getLikeList);
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
