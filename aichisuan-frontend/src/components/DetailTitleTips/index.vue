<template>
  <div class="header">
    <h2 class="header__title">{{ '人生如戏' }}</h2>
    <p class="header__time">
      <!-- 浏览量 -->
      <el-icon :size="12" class="header__icon">
        <Calendar />
      </el-icon>
      <span>发布：{{ '2024-10-18 10:06:40' }}</span>
      <!-- 时间 -->
      <el-icon :size="12" class="header__icon">
        <Timer />
      </el-icon>
      <span>更新：{{ '2024-10-18 10:06:40' }}</span>
      <!-- 来源 -->
      <el-icon :size="12" class="header__icon">
        <Brush />
      </el-icon>
      <span>源自：{{ "知乎" }}</span>
    </p>
    <hr class="header__hr">
  </div>
</template>

<script setup lang="ts">
import {} from 'vue';
import { Timer, Calendar, Brush } from '@element-plus/icons-vue';
</script>

<style lang="less" scoped>
.header {
  &__title {
    line-height: 3rem;
    word-spacing: 2px;
    letter-spacing: 0.5px;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  &__icon {
    font-size: 12px;
    margin: 0 5px 0 15px;
  }
  &__time {
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    padding: 10px 10px 0 0;
    color: #afafaf;
    font-size: 12px;
    cursor: pointer;
  }
  &__hr {
    height: 1px;
    border: none;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #ccc, rgba(0, 0, 0, 0));
    margin: 2rem 0 .8rem;
  }
}
</style>
