<template>
  <Router-view v-if="route.name === 'home'" />
  <template v-else>
    <el-config-provider :locale="locale">
      <div class="app-content">
        <Loading v-show="pageLoading" />
        <Nav />
        <Router-view />
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

const { getSelectArticleList, getTypeList } = useFetchState();

const locale = ref(zhCn);

const route = useRoute();

const pageLoading = ref<boolean>(false);

onMounted(async () => {
  pageLoading.value = true;
  await getSelectArticleList();
  await getTypeList();
  pageLoading.value = false;
});
</script>

<style scoped lang="less">
.app-content {
  margin: 0 auto;
}
</style>
