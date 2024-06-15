<template>
  <div class="content">
    <ContentList />
    <BlogInfos />
  </div>
</template>
<script setup name="home">
import ContentList from './components/ContentList.vue';
import BlogInfos from './components/BlogInfos.vue';





</script>
<style lang="less" scoped>

.content {
  min-height: calc(100vh - 120px);
  display: flex;
  position: relative;
  align-items: flex-start;
  justify-content: center;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  padding: 30px 20px 0;
  margin: 0 auto;
  max-width: 1200px;
}

@media screen and (max-width: 768px) {
  .content {
    flex-wrap: wrap;
    max-width: 100vw;
    box-sizing: border-box;
    min-height: calc(100vh - 120px);
  }
}
</style>
