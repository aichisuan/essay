<template>
  <div class="info-wrap">
    <div class="info">
      <DateInfo />
      <Selected />
    </div>
  </div>
</template>

<script setup lang="ts">
import {} from 'vue';
import DateInfo from '@/components/DateInfo/index.vue';
import Selected from '@/components/Selected/index.vue';
</script>

<style lang="less" scoped>
@import url('@/assets/style/main.less');
.info-wrap {
  margin-left: 16px;
  position: sticky;
  top: 80px;
  .info {
    width: 280px;
  }
}

@media screen and (max-width: 768px) {
  .info-wrap {
    margin-left: 0;
    position: relative;
    top: 0;
    width: 100%;
    .info {
      display: flex;
      flex-direction: column;
      width: auto;
      min-width: 100%;
      position: relative;
      box-sizing: border-box;
    }
  }
}
</style>
