<template>
  <div class="center-content">
    <ul class="center-content__list">
      <ArticleItem v-for="item in fetchState.showArticleList" :key="item.article_id" :item="item" />
    </ul>
    <Pagination :current-page="pageTypeInfo.page" @paginationCb="paginationCb" :total="fetchState.currentPageTotal" :pagerCount="5" layout="prev, pager, next" :pageSizes="[10, 20]" />
  </div>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import ArticleItem from '@/components/ArticleItem/index.vue';
import Pagination from '@/components/Pageination/Pagination.vue';
// 在这个页面获取内容，然后传递给Card组件
// 页面数据放到pina中
import { useFetchState } from '@/stores/fetchState';
import { linkList } from '@/lib/business';

const route = useRoute();

const fetchState = useFetchState();

const { getArticleList, setPageInfo, pageTypeInfo} = fetchState;

watch(
  () => route.fullPath,
  (newVal) => {
    const page = 1;
    const linkItem = linkList.find((item) => item.path === newVal);
    if (!linkItem) return;
    setPageInfo(page, linkItem.id);
    getArticleList(linkItem.id, page);
  },
  { immediate: true }
);

const paginationCb = (page: number) => {
  setPageInfo(page.current, fetchState.pageTypeInfo.typeId);
  // 第1页用route请求，其他页用getArticleList请求
  if (page.current === 1) return;
  getArticleList(fetchState.pageTypeInfo.typeId, page.current);
};


</script>

<style lang="less" scoped>
.center-content {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  justify-content: center;
  &__list {
    width: 100%;
  }
}
</style>
