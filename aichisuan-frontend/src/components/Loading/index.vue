<template>
  <div class="loading-mask">
    <div class="loading">
      <OrbitSpinner :animationDuration="animationDuration" :size="size" :color="color" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import OrbitSpinner from './OrbitSpinner.vue';

defineProps({
  animationDuration: {
    type: Number,
    default: 1000,
  },
  size: {
    type: Number,
    default: 50,
  },
  color: {
    type: String,
    default: '#fff',
  },
});
</script>

<style lang="less" scoped>
.loading-mask {
  z-index: 2024;
  position: absolute;
  z-index: 2000;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  transition: opacity 0.3s;
  box-sizing: border-box;
  .loading {
    top: 50%;
    margin-top: -25px;
    width: 100%;
    text-align: center;
    position: absolute;
    display: flex;
    justify-content: center;
  }
}
</style>
