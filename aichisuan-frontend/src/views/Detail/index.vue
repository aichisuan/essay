<template>
  <Loading v-show="pageLoading" />
  <template v-if="articleDetail.article_id">
    <PageHeader />
    <div class="contents-wrap">
      <DetailTitleTips :articleDetail="articleDetail" :key="articleDetail.article_id"/>
      <DetailMk :articleDetail="articleDetail" :key="articleDetail.article_id"/>
    </div>
    <!-- 留言 -->
    <LeaveWord :articleId="articleDetail.article_id"/>
    <go-top />
  </template>
</template>
<script setup name="home" lang="ts">
import { ref, watch, nextTick } from 'vue';
import DetailMk from '@/components/DetailMk/index.vue';
import PageHeader from '@/components/PageHeader/index.vue';
import DetailTitleTips from '@/components/DetailTitleTips/index.vue';
import GoTop from '@/components/GoTop/index.vue';
import { useRoute } from 'vue-router';
import Loading from '@/components/Loading/index.vue';
import service from '@/lib/fetch/Api';
import type { ArticleItemInfo } from '../../lib/commonType/article';
import LeaveWord from '@/components/LeaveWord/index.vue';

const pageLoading = ref<Boolean>(false);
// @ts-ignore
const articleDetail = ref<ArticleItemInfo>({});

const getArticleDetail = async (id: number) => {
  pageLoading.value = true;
  const { code, data } = await service.getArticleDetail(id);
  pageLoading.value = false;
  if (code !== 200) return;
  articleDetail.value = data;
};

const updateRead = async (id: number) => {
  await service.updateArticleReadCount(id);
};

const route = useRoute();

// onMounted(async () => {
//   const route = useRoute();
//   const { id } = route.query;
//   if (!id) return;
//   getArticleDetail(+id as number);
// });

watch(() => route.query?.id, async (newId) => {
  if (!newId) return;
  await getArticleDetail(+newId as number);
  await updateRead(+newId as number);
  nextTick(() => {
    window.scrollTo(0, 0);
  });
}, {
  immediate: true,
  deep: true
});




</script>
<style lang="less" scoped>
.contents-wrap {
  width: 100%;
  max-width: 1200px;
  min-height: calc(100vh - 100px);
  box-sizing: border-box;
  padding: 20px 15px;
  position: relative;
  border-radius: 5px;
  margin: 1rem auto 0;
  z-index: 1;
  background-color: #fff;
}
</style>
