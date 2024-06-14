<template>
  <el-pagination
    class="pagination"
    background
    :layout="layout"
    :page-count="pageCount"
    :page-size="size"
    :total="total"
    :currentPage="current"
    @size-change="sizeChange"
    @current-change="currentChange"
    @prev-click="prev"
    @next-click="next"
  ></el-pagination>
</template>

<script setup lang="ts">
import { ElPagination } from 'element-plus';
import { reactive } from 'vue';

const props = defineProps({
  total: {
    type: Number,
    default: 0, //数据总数
  },
  pageCount: {
    type: Number,
    default: 5, //如果页数很多大概展示的页码
  },
  layout: {
    type: String,
    default: 'total,sizes, prev, pager, next, jumper, ->, slot',
  },
  pageSizes: {
    type: Array,
    default: () => {
      return [10, 20, 50]; //指定分页展示条数
    },
  },
  current: {
    type: Number,
    default: 1, //指定跳转到多少页
  },
  size: {
    type: Number,
    default: 1, //每页展示的条数，根据自己实际，且会带入请求
  },
});

let page = reactive({
  size: props.size,
  current: props.current,
});

const emit = defineEmits(['pagination']);

//选择每页显示数量 Change page size
const sizeChange = (val: number) => {
  page.size = val;
  emit('pagination', page);
};
//选择某一页
const currentChange = (val: number) => {
  page.current = val;
  emit('pagination', page);
};
//上一页
const prev = (val: number) => {
  page.current = val - 1;
};
//下一页
const next = (val: number) => {
  page.current = val + 1;
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
