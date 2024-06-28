<template>
  <Router-view v-if="route.fullPath === '/' || route.name === 'home'" />
  <template v-else>
    <el-config-provider :locale="locale">
      <div class="app-content">
        <Loading v-show="pageLoading" />
        <Nav />
        <Router-view class="router-pd"/>
        <FooterBA />
      </div>
    </el-config-provider>
  </template>
</template>
<script setup lang="ts" name="app">
import { useRoute } from 'vue-router';
import Nav from '@/components/Nav/index.vue';
import { ElConfigProvider } from 'element-plus';

import zhCn from 'element-plus/es/locale/lang/zh-cn';
import { onMounted, ref } from 'vue';
import { useFetchState } from '@/stores/fetchState';
import Loading from '@/components/Loading/index.vue';
import FooterBA from '@/components/FootBA/index.vue';
import service from './lib/fetch/Api';

const { getSelectArticleList, getTypeList } = useFetchState();

const locale = ref(zhCn);

const route = useRoute();
console.log(route.fullPath)

const pageLoading = ref<boolean>(false);

onMounted(async () => {
  pageLoading.value = true;
  const flag = await service.getEncy();
  if (!flag) {
    pageLoading.value = false;
    return;
  }
  await getSelectArticleList();
  await getTypeList();
  pageLoading.value = false;
});
</script>

<style scoped lang="less">
.app-content {
  margin: 0 auto;
  min-height: 100vh;
  padding-bottom: 130px;
  position: relative;
  box-sizing: border-box
}
.router-pd {
  min-height: calc(100vh - 180px);
}

@media screen and (max-width: 768px){
  .app-content {
    padding-bottom: 136px;
  }
}

</style>
