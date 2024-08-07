<template>
  <div class="orbit-spinner" :style="spinnerStyle">
    <div class="orbit one" :style="orbitStyle" />
    <div class="orbit two" :style="orbitStyle" />
    <div class="orbit three" :style="orbitStyle" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const { animationDuration, size, color } = defineProps({
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

const spinnerStyle = computed(() => ({
  width: `${size}px`,
  height: `${size}px`,
}));

const orbitStyle = computed(() => ({
  animationDuration: `${animationDuration}ms`,
  borderColor: color,
}));
</script>

<style lang="less" scoped>
.orbit-spinner,
.orbit-spinner * {
  box-sizing: border-box;
}

.orbit-spinner {
  height: 55px;
  width: 55px;
  border-radius: 50%;
  perspective: 800px;
}

.orbit-spinner .orbit {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.orbit-spinner .orbit:nth-child(1) {
  left: 0%;
  top: 0%;
  animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
  border-bottom: 3px solid #ff1d5e;
}

.orbit-spinner .orbit:nth-child(2) {
  right: 0%;
  top: 0%;
  animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
  border-right: 3px solid #ff1d5e;
}

.orbit-spinner .orbit:nth-child(3) {
  right: 0%;
  bottom: 0%;
  animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
  border-top: 3px solid #ff1d5e;
}

@keyframes orbit-spinner-orbit-one-animation {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-two-animation {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-three-animation {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>
