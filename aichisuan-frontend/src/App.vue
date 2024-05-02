<template>
  <Router-view v-if="route.name === 'home'" />
  <template v-else>
    <el-config-provider :locale="locale">
      <div class="app-content">
        <Nav />
        <Router-view />
      </div>
    </el-config-provider>
  </template>
</template>
<script setup lang="ts" name="app">
import { useRoute } from 'vue-router';
import Nav from '@/components/Nav/index.vue';
import { ElConfigProvider } from 'element-plus';

import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { ref } from 'vue';

const locale = ref(zhCn);

const route = useRoute();

console.log(route.name);
</script>

<style scoped lang="less">
.app-content {
  margin: 0 auto;
}
</style>
