<template>
  <div class="footer">
    <a class="footer__record" :href="footer.infoStr1.url">{{ getName(footer.infoStr1.name) }}</a>
    <span class="footer__split">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
    <a class="footer__record" :href="footer.infoStr2.url">{{ getName(footer.infoStr2.name) }}</a>
  </div>
</template>

<script setup lang="ts">
import { essayConfig } from '@/lib/config';
import {} from 'vue';

const { footer } = essayConfig;

const getName = (name: string) => {
  // if (!window.atob) {
  //   return name;
  // }
  return decodeURIComponent(window.atob(name));
};
</script>

<style lang="less" scoped>
.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  font-size: 18px;
  color: #fff;
  z-index: 999;
  a {
    color: #fff;
    cursor: default;
    text-decoration: none;
    &::hover {
      text-decoration: none;
    }
  }
}

@media screen and (max-width: 768px){
  .footer {
    color: #000;
    font-size: 12px;
    height: 50px;
    z-index: 999;
    a {
      color: #000;
    }
  }
}

</style>
