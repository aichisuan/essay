<template>
  <el-row class="content">
    <el-col :span="17">
      <div class="" v-for="item in 8" :key="item">
        <Card />
      </div>
    </el-col>
    <el-col :span="7">
      <div class="right">
        <Card />
        1111
      </div>
    </el-col>
  </el-row>
  <!-- pager sizes total -->
  <Pagination
    :total="100"
    :pagerCount="8"
    layout="prev, pager, next"
    :pageSizes="[10, 20]"
  />
</template>

<script setup lang="ts">
import {} from "vue"
import Card from "@/components/CardList/index.vue"
import { ElRow, ElCol } from "element-plus";
import Pagination from "@/components/Pageination/Pagination.vue"
// 在这个页面获取内容，然后传递给Card组件
// 页面数据放到pina中

</script>

<style lang="less" scoped>
  .content {
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    padding: 80px 20px 0;
    margin: 0 auto;
    max-width: 1200px;
  }
</style>
