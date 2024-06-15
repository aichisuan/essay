<template>
  <el-pagination
    class="pagination"
    background
    :layout="layout"
    :pager-count="pagerCount"
    :page-count="Math.ceil(total / size)"
    :page-size="size"
    :total="total"
    :currentPage="current"
    @current-change="currentChange"
    @prev-click="prev"
    @next-click="next"
  />
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus';
import { reactive } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    default: 0, //数据总数
  },
  pagerCount: {
    type: Number,
    default: 5, //如果页数很多大概展示的页码
  },
  layout: {
    type: String,
    default: 'total,sizes, prev, pager, next, jumper, ->, slot',
  },
  current: {
    type: Number,
    default: 1, //指定跳转到多少页
  },
  size: {
    type: Number,
    default: 10, //每页展示的条数，根据自己实际，且会带入请求
  },
});

let page = reactive({
  size: props.size,
  current: props.current,
});

const emit = defineEmits(['paginationCb']);

//选择某一页
const currentChange = (val: number) => {
  page.current = val;
  emit('paginationCb', page);
};
//上一页
const prev = (val: number) => {
  page.current = val - 1;
  emit('paginationCb', page);
};
//下一页
const next = (val: number) => {
  page.current = val + 1;
  emit('paginationCb', page);
};
</script>

<style lang="less" scoped>
.pagination {
  padding: 10px 0;
  text-align: center;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin: 0 auto;
}

@media screen and (max-width: 768px){
  .pagination {
    max-width: 100vw;
    transform: scale(0.8);
  }
}
</style>
