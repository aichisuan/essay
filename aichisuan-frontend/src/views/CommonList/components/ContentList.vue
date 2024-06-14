<template>
  <div class="center-content">
    <ul>
      <CardList v-for="item in 10" :key="item" />
    </ul>
    <Pagination :total="100" :pageCount="6" layout="prev, pager, next" :pageSizes="[10, 20]" />
  </div>
  <!-- pager sizes total -->
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';
import CardList from '@/components/CardList/index.vue';
import Pagination from '@/components/Pageination/Pagination.vue';
// 在这个页面获取内容，然后传递给Card组件
// 页面数据放到pina中
import { useFetchState } from '@/stores/fetchState'
import { linkList } from '@/lib/business';

const route = useRoute();

const { baseState, getArticleList  } = useFetchState();


watch(() => route.fullPath,(path) => {
  const linkItem = linkList.find((item) => item.path === path);
  // @ts-ignore
  console.log(linkItem , linkItem.dataKey , baseState[linkItem.dataKey], linkItem && linkItem.dataKey && !baseState[linkItem.dataKey][1])
  if (linkItem && linkItem.dataKey && !baseState[linkItem.dataKey][1]) {
    getArticleList(linkItem.id, 1);
  }
}, {
  immediate: true,
  deep: true,
})


</script>

<style lang="less" scoped>
.center-content {
  display: flex;
  flex-wrap: wrap;
  position: relative;
  max-width: 100%;
  box-sizing: border-box;
  justify-content: center;
}
</style>
