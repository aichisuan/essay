<template>
  <a-table
    rowKey="comment_id"
    :data-source="likeList"
    :pagination="false"
    :columns="columns"
    :scroll="{
      scrollToFirstRowOnChange: true,
      y: tableHeight,
    }"
  >
  <template #bodyCell="{ column, text }">
      <template v-if="column.key === 'like_article_ids'">
        <a class="mg-10" v-for="(item, index) in text" :key="`${column.key}-${index}`" @click="goArticleDetail(item)">{{ item }}</a>
      </template>
      <template v-if="column.key === 'like_comment_ids'">
        <a  class="mg-10" v-for="(item, index) in text" :key="`${column.key}-${index}`" @click="goCommentDetail(item)">{{ item }}</a>
      </template>
    </template>
  </a-table>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { useRouter } from 'vue-router';

defineProps({
  likeList: {
    type: Array,
    required: true,
  },
});

const router = useRouter();

defineEmits(['update']);

const tableHeight = 'calc(100vh - 320px)';

const columns = ref([
  {
    title: 'user_id',
    dataIndex: 'user_id',
    key: 'user_id',
    width: 100,
  },
  {
    title: '用户id(已加密)',
    dataIndex: 'user_idp',
    key: 'user_idp',
    width: 300,
  },
  {
    title: '喜欢文章 id list',
    dataIndex: 'like_article_ids',
    key: 'like_article_ids',
    width: 300,
  },
  {
    title: '喜欢评论id list',
    dataIndex: 'like_comment_ids',
    key: 'like_comment_ids',
    width: 300,
  },
  {
    title: '操作',
    dataIndex: 'action',
    key: 'action',
  },
]);

const goArticleDetail = (article_id: string) => {
  router.push({
    path: '/layout/article-list',
    query: {
      id: article_id,
    },
  });
};

const goCommentDetail = (comment_id: string) => {
  router.push({
    path: '/layout/comments-list',
    query: {
      id: comment_id,
    },
  });
};

</script>

<style lang="less" scoped>
.mg-10 {
  margin-right: 10px;
}
</style>
