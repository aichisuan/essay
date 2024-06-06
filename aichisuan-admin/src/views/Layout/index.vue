<template>
  <Layout class="layout">
    <Sidebar />
    <Layout>
      <Header />
      <Content />
      <Footer />
    </Layout>
  </Layout>
</template>

<script setup lang="ts">
import { Layout } from 'ant-design-vue';
import { Sidebar, Footer, Header, Content, Logo } from './components';

import { useUserStore } from '@/stores/user';
import { onMounted } from 'vue';

const { logout, userInfo } = useUserStore();
console.log(logout, userInfo)

onMounted(() => {

})

</script>

<style lang="less" scoped>
.layout {
  height: 100vh;
  overflow: hidden;
}
</style>
