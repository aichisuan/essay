<template>
  <div class="page-header">
    <ProgressImg :origin="imgSrcTl" :minOrigin="lowImgSrc"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { getRandomTopBg } from '../../lib/topBgList/index';
import ProgressImg from '../ProgressImg/index.vue';
const imgSrc = getRandomTopBg();
const imgSrcTl = `${imgSrc}?imageView2/q/50`
const lowImgSrc = `${imgSrc}?imageView2/q/8`;
</script>

<style lang="less" scoped>
.page-header {
  height: 30rem;
  background-color: #ccc;
  position: relative;
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
    // transition: all .3s linear;
    // background-attachment: fixed;
    transform-style: preserve-3d;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(10px);
  }
  &__bg--preview {
    width: 100%;
    height: 30rem;
  }
}

@media screen and (max-width: 768px){
  .page-header {
    height: 20rem;
    &__bg {
      height: 20rem;
    }
    &__bg--preview {
      height: 20rem;

    }
  }
}
</style>
