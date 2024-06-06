<template>
  <a-layout-header class="header">
    <a-dropdown class="header__drapdown">
      <a class="ant-dropdown-link" @click.prevent>
        <img :src="userInfo.avatar" alt="" class="header__avatar">
      </a>
      <template #overlay>
        <a-menu>
          <a-menu-item @click="handleShowUserInfo">
            <span>查看详情</span>
          </a-menu-item>
          <a-menu-item @click="handleLogout">
            <span>退出登陆</span>
          </a-menu-item>
        </a-menu>
      </template>
    </a-dropdown>
  </a-layout-header>
</template>

<script setup lang="ts">

import { useUserStore } from '@/stores/user';
import { message, Modal } from 'ant-design-vue';
import { onMounted, h } from 'vue';
import { useRouter } from 'vue-router';
const { logout, userInfo } = useUserStore();
const router = useRouter();

const handleLogout = () => {
  Modal.confirm({
    title: '退出登录',
    content: '确定退出登录吗？',
    okText: '确定',
    cancelText: '取消',
    onOk() {
      logout().then(res => {
        if (res === true) {
          message.success('退出登陆成功')
          router.push({path: '/login'});
        }
      })
    },
  });
};

const handleShowUserInfo = () => {
  Modal.info({
    title: '用户信息',
    content: h(
      'div', {}, [
      h('p', `用户名: ${userInfo.name}`),
      h('span', {
        innerHTML: `头像:`,
        style: {
          lineHeight: '100px',
          verticalAlign: 'text-bottom',
          marginRight: '10px'
        }
      }),
      h('img', {
        src: userInfo.avatar,
        style: {
          width: '100px',
          height: '100px',
          margin: '10px 0',
        },
      }),
      h('p', `权限: ${userInfo.roles.join(',') ? userInfo.roles.join(',') : '全局权限'}`),
    ]
    ),
    onOk() {},
  });
};  

onMounted(() => {
  console.log('mounted', userInfo);
});
</script>

<style lang="less" scoped>
.header {
  height: 50px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.09);
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  &__drapdown {
    height: 40px;
  }
  &__avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }
}
</style>
