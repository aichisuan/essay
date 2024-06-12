<template>
  <a-pagination
    class="pagination-wrap"
    v-model:current="page"
    v-model:page-size="pageSize"
    :total="total"
    @change="onChangePage"
    @showSizeChange="onChangePage"
    :show-total="(total: any) => `总共: ${total} 条`"
  />
</template>

<script setup lang="ts">
import { defineModel } from 'vue';

const changePageEmit = defineEmits(['changePageEmit']);

defineProps({
  total: {
    type: Number,
    required: true,
  },
});

const page =  defineModel('page');
const pageSize = defineModel('pageSize');

const onChangePage = (page: number, pageSize:number) => {
  changePageEmit('changePageEmit', page, pageSize);
};
</script>

<style lang="less" scoped>
.pagination-wrap {
  margin-top: 20px;
  margin-right: 20px;
  text-align: right;
}
</style>
