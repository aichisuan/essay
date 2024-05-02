<template>
  <PageHeader />
  <div class="contents-wrap">
    <DetailTitleTips />
    <DetailMk />
  </div>
  <go-top></go-top>
</template>
<script setup name="home">
import { ref } from 'vue';
import DetailMk from '@/components/DetailMk/index.vue';
import PageHeader from '@/components/PageHeader/index.vue';
import DetailTitleTips from '@/components/DetailTitleTips/index.vue';
import GoTop from '@/components/GoTop/index.vue';
</script>
<style lang="less" scoped>
.contents-wrap {
  max-width: 960px;
  box-sizing: border-box;
  padding: 20px 15px;
  position: relative;
  border-radius: 5px;
  margin: 1rem auto 0;
  z-index: 1;
  background-color: #fff;
}
</style>