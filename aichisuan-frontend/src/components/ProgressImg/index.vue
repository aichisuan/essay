
<template>
  <div class="progressive" v-if="origin">
    <img class="img placeholder" :src="origin" />
    <img @load="handleLoaded" class="img origin" :src="origin" @error="handleError"/>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import { errorImg } from '../../lib/topBgList/index';
const { origin } =  defineProps({
    minOrigin: String,
    origin: String,
  });
 
const isLoaded = ref(false);

const handleLoaded = (e: { target: { parentElement: { classList: { add: (arg0: string) => void; }; }; }; }) => {
  e.target.parentElement.classList.add("loaded");
  isLoaded.value = true;
};

const handleError = (e: { target: { src: string; }; }) => {
  e.target.src = errorImg;
}


</script>

<style scoped>
  .progressive {
    width: 100%;
    height: 100%;
    position: relative;
  }
  .img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
    transition: all 0.6s;
  }
  .origin {
    opacity: 0;
    position: absolute;
    left: 0;
    top: 0;
    filter: blur(10px);
  }
  .loaded .origin {
    opacity: 1;
    filter: blur(0);
  }
</style>