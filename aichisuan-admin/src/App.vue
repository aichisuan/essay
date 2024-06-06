<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref } from 'vue';
import zhCN from 'ant-design-vue/es/locale/zh_CN';

const locale = ref(zhCN);

const getPopupContainer = (el: any, dialogContext: { getDialogWrap: () => any; }) => {
  if (dialogContext) {
    return dialogContext.getDialogWrap();
  } else {
    return document.body;
  }
};
</script>

<template>
  <a-config-provider :locale="locale" :getPopupContainer="getPopupContainer">
    <RouterView />
  </a-config-provider>
</template>

<style lang="less" scoped></style>
