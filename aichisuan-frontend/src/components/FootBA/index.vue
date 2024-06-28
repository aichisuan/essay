<template>
  <div class="footer" :style="{color: textColor}">
    <p class="footer__copyright">
      <span class="footer__record">{{ footer.copyRight }}</span>
      <span class="footer__split">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <span class="footer__record footer__record--time">当前时间 {{ time }}</span>
    </p>
    <div class="footer__copyright">
      <img v-for="item in footer.descInfoImgs" :key="item.id" :src="item.url" alt="">
    </div>
    <div class="footer__copyright">
      <a :style="{color: textColor}" class="footer__record" :href="footer.infoStr1.url">{{ getName(footer.infoStr1.name) }}</a>
      <span :style="{color: textColor}" class="footer__split">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
      <a :style="{color: textColor}" class="footer__record" :href="footer.infoStr2.url">{{ getName(footer.infoStr2.name) }}</a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { essayConfig } from '@/lib/config/index';
import { dayjs } from 'element-plus';
const { footer } = essayConfig;
const time = ref<null | string>(null);
const timer = ref<null | number>(null);

defineProps({
  textColor: {
    default: '#a8a8a8',
    type: String
  }
})

onMounted(() => {
  timer.value = setInterval(() => {
    time.value = dayjs().format('YYYY-MM-DD HH:mm');
  }, 1000) 
})

onUnmounted(() => {
  timer.value && clearInterval(timer.value);
})

const getName = (name: string) => {
  // if (!window.atob) {
  //   return name;
  // }
  return decodeURIComponent(window.atob(name));
}

</script>

<style lang="less" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
  margin-top: 20px;
  border-top: 1px solid #f1f1f1;
  padding: 1.5rem;
  background-color: #fff;
  font-size: 12px;
  &__copyright {
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 5px;
    &:first-of-child {
      margin-bottom: 0;
    }
    img {
      margin-right: 5px;
    }
    a {
      cursor: default;
      text-decoration: none;
      &::hover {
        text-decoration: none;
      }
    }
  }
}


@media screen and (max-width: 768px){
  .footer {
    padding: 1rem;
    &__copyright {
      font-size: 12px;
      img {
        height: 15px;
      }
    }
    &__split {
      display: none;
    }
    &__record {
      display: block;
      text-align: center;
      &--time {
        display: none;
      }
    }
  }
}

</style>
