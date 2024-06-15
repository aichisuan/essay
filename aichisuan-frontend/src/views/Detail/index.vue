<template>
  <Loading v-show="pageLoading" />
  <template v-if="articleDetail.article_id">
    <PageHeader />
    <div class="contents-wrap">
      <DetailTitleTips :articleDetail="articleDetail" />
      <DetailMk :articleDetail="articleDetail" />
    </div>
    <go-top />
  </template>
</template>
<script setup name="home" lang="ts">
import { onMounted, ref } from 'vue';
import DetailMk from '@/components/DetailMk/index.vue';
import PageHeader from '@/components/PageHeader/index.vue';
import DetailTitleTips from '@/components/DetailTitleTips/index.vue';
import GoTop from '@/components/GoTop/index.vue';
import { useRoute } from 'vue-router';
import Loading from '@/components/Loading/index.vue';
import { ArticleItemInfo } from '@/lib/commonType/article';
import service from '@/lib/fetch/Api';

const pageLoading = ref<Boolean>(false);
const articleDetail = ref<ArticleItemInfo>({});

const getArticleDetail = async (id: number) => {
  pageLoading.value = true;
  const { code, data } = await service.getArticleDetail(id);
  pageLoading.value = false;
  if (code !== 200) return;
  articleDetail.value = data;
};

onMounted(async () => {
  const route = useRoute();
  const { id } = route.query;
  if (!id) return;
  getArticleDetail(id);
});
</script>
<style lang="less" scoped>
.contents-wrap {
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
