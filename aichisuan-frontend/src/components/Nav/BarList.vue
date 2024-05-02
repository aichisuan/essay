<template>
  <ul class="bars">
    <li v-for="item in linkList" :key="item.id" class="bars__li" @click="handleTo(item.path)">
      <el-icon :class="item.icon"></el-icon>
      <span class="bars__title">{{ item.name }}</span>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
// 主页 精选 技术 生活 其他
const linkList = [
  {
    name: '主页',
    path: '/',
    id: 1,
    icon: 'el-icon-s-home',
  },
  {
    name: '精选',
    path: '/',
    id: 2,
    icon: 'el-icon-s-data',
  },
  {
    name: '技术',
    path: '/',
    id: 3,
    icon: 'el-icon-s-tools',
  },
  {
    name: '生活',
    path: '/',
    id: 4,
    icon: 'el-icon-s-opportunity',
  },
  {
    name: '问答',
    path: '/',
    id: 5,
    icon: 'el-icon-s-comment',
  },
  {
    name: '其他',
    path: '/',
    id: 6,
    icon: 'el-icon-s-order',
  },
];

const handleTo = (path: string) => {
  router.push(path);
};
</script>

<style lang="less" scoped>
.bars {
  width: 80%;
  display: flex;
  justify-content: flex-end;
  margin-right: 30px;
  &__li {
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0 10px;
    background-color: transparent;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
      color: #5cbfef;
    }
  }
  &__title {
    margin-left: 10px;
  }
}
</style>
