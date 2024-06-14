<template>
  <div class="info-data">
    <ul class="info-data__items">
      <li class="info-data__item">
        <span class="info-data__val">{{ 100 }}</span>
        <span class="info-data__label">文章数</span>
      </li>
      <div class="split"></div>
      <li class="info-data__item">
        <span class="info-data__val">{{ '+10' }}</span>
        <span class="info-data__label">本月更新</span>
      </li>
      <div class="split"></div>
      <li class="info-data__item">
        <span class="info-data__val">{{ '+5' }}</span>
        <span class="info-data__label">本周更新</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue';
</script>

<style lang="less" scoped>
@import url('@/assets/style/main.less');
.info-data {
  .card_normal;
  padding: 10px;
  margin: 0 auto 10px;
  &__items {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  &__item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin: 0 10px;
    line-height: 24px;
  }
  &__val {
    font-size: 18px;
    font-weight: 600;
    color: rgba(60, 60, 67);
  }
  &__label {
    font-size: 12px;
    margin-top: 6px;
    color: #86909c;
  }
}
</style>
