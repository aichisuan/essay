<template>
  <div class="page-header">
    <div class="page-header__bg" />
  </div>
</template>

<script setup lang="ts">
import {} from "vue"
</script>

<style lang="less" scoped>
.page-header {
  height: 30rem;
  background-color: #ccc;
  &__bg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 30rem;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    transition: all .3s linear;
    background-attachment: fixed;
    transform-style: preserve-3d;
    background-image: url('../../../src/assets/img/image.png');
    background-position: center center;
  }
}
</style>
