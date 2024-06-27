<template>
  <a-layout-sider v-model:collapsed="collapsed" collapsible>
    <Logo />
    <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
      <template v-for="item in items">
        <a-menu-item v-if="!item.children" :key="`${item.key}`" @click="handleToPath(item.path as string)">
          <component :is="item.icon" />
          <span>{{ item.title }}</span>
        </a-menu-item>
        <a-sub-menu v-else :key="`${item.key}-desc`">
          <template #title>
            <component :is="item.icon" />
            <span>{{ item.title }}</span>
          </template>
          <a-menu-item @click="handleToPath(child.path as string)" v-for="child in item.children" :key="child.key">
            {{ child.title }}
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import Logo from '../Logo/Logo.vue';

import { ref, reactive, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

type Item = {
  key: string;
  icon?: string;
  title: string;
  path?: string;
  children?: Item[];
};

const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);

const items: Item[] = reactive([
  {
    key: '1',
    icon: 'HomeOutlined',
    title: '首页',
    path: '/layout/home',
  },
  {
    key: '2',
    icon: 'FileMarkdownOutlined',
    title: '文章',
    children: [
      {
        key: '2-1',
        title: '文章列表',
        path: '/layout/article-list',
      },
      {
        key: '2-2',
        title: '创建文章',
        path: '/layout/article-create',
      },
      {
        key: '2-3',
        title: '上传图片',
        path: '/layout/upload-imgs',
      },
    ],
  },
  {
    key: '3',
    icon: 'CommentOutlined',
    title: '评论',
    children: [
      {
        key: '3-1',
        title: '评论列表',
        path: '/layout/comments-list',
      },
    ],
  },
  {
    key: '4',
    icon: 'UserOutlined',
    title: '用户',
    children: [
      {
        key: '4-1',
        title: '用户列表',
        path: '/layout/client-user-list',
      },
    ],
  },
]);

const handleToPath = (path: string) => {
  router.push({ path });
};

const setSelectKeys = (path: string) => {
  let itemStr: string = '';
  items.find((item) => {
    if (item.path === path) {
      itemStr = item.key;
    }
    if (item.children) {
      return item.children.find((child) => (child.path === path ? (itemStr = child.key) : false));
    }
  });

  if (itemStr) {
    selectedKeys.value = [itemStr];
  } else {
    selectedKeys.value = ['1'];
  }
};

onMounted(() => {
  setSelectKeys(router.currentRoute.value.path); 
})


</script>

<style lang="less" scoped>
#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
