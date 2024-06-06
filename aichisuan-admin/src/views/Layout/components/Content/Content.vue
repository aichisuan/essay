<template>
  <a-layout-content class="content">
    <RouterView></RouterView>
  </a-layout-content>
</template>

<script setup lang="ts">
import {} from "vue"
import { RouterView } from 'vue-router';
</script>

<style lang="less" scoped>
.content {
  margin: 16px;

}
</style>
