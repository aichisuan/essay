<template>
  <div class="grad-bar"></div>
  <img src="../../assets/img/nav-left.png" alt="" class="grad-img" />
  <ul :class="['bars', isSearch ? 'bars--search' : 'bars--no-search']">
    <li v-for="item in linkList" :key="item.id" class="bars__li" @click="handleTo(item.path)">
      <span :class="{ bars__title: true, 'bars__title--success': route.fullPath === item.path }">{{ item.name }}</span>
    </li>
    <i :class="['iconfont icon-search1', isSearch && 'icon-search1--active']" @click="isSearch = !isSearch"></i>
    <input type="text" :class="['search-input', isSearch && 'search-input--active']" placeholder="搜索" />
  </ul>
  <div class="bars-drawer">
    <el-icon class="bars-drawer__icon" v-if="!isShowDrawer" @click="isShowDrawer = true"><Expand /></el-icon>
    <el-icon class="bars-drawer__icon" v-else @click="isShowDrawer = false"><Fold /></el-icon>
    <el-drawer v-model="isShowDrawer" direction="ltr" size="50%">
      <ul class="bars-mobile">
        <li v-for="item in linkList" :key="item.id" class="bars-mobile__li" @click="handleTo(item.path)">
          <span :class="{ 'bars-mobile__title--success': route.fullPath === item.path }">{{ item.name }}</span>
        </li>
      </ul>
    </el-drawer>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { Fold, Expand, Search } from '@element-plus/icons-vue';
import { linkList } from '@/lib/business';
const router = useRouter();
const route = useRoute();

const isSearch = ref(false);

const isShowDrawer = ref(false);



const handleTo = (path: string) => {
  router.push(path);
};
</script>

<style lang="less" scoped>
.input-normal {
  border: 0;
  border-left: 1px solid #ccc;
  border-radius: 0;
  outline: 0;
  padding: 5px;
}
.grad-bar {
  position: absolute;
  top: 0;
  height: 5px;
  width: 100%;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  -webkit-animation: gradbar 15s ease infinite;
  -moz-animation: gradbar 15s ease infinite;
  animation: gradbar 15s ease infinite;
}
.grad-img {
  height: 16px;
  width: auto;
  justify-self: start;
  margin-left: 20px;
}

// 这部分 媒体查询控制显示隐藏
.bars {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-right: 50px;
  &--search {
    transform: translateX(-125px);
    transition: transform 0.7s ease-in-out;
    color: #3498db;
  }
  &--no-search {
    transform: translateX(0);
    transition: transform 0.7s ease-in-out;
  }
  &__li {
    color: #000;
    font-size: 0.9rem;
    font-weight: 400;
    text-decoration: none;
    transition: color 0.3s ease-out;
    background-color: transparent;
    display: flex;
    align-items: center;
    &:hover {
      cursor: pointer;
      color: #5cbfef;
    }
  }
  &__title {
    margin-right: 30px;
  }
  &__title--success {
    color: #5cbfef;
  }
  .icon-search1 {
    font-size: 1rem;
    margin-top: 3px;
    color: #000;
    transition: color 0.3s ease-out;
    &:hover {
      color: #5cbfef;
    }
    &--active {
      color: #5cbfef;
    }
  }

  .search-input {
    position: absolute;
    top: 0px;
    bottom: 0;
    right: -160px;
    opacity: 0;
    z-index: -1;
    transition: opacity 0.6s ease;
    width: 130px;
    padding-right: 20px;
    .input-normal;
    &--active {
      opacity: 1;
      z-index: 1;
    }
  }
}

.bars-drawer {
  display: none;
}

.bars-mobile-top {
  display: none;
}

@media screen and (max-width: 768px) {
  :deep(.el-drawer__header) {
    margin-bottom: 0;
  }
  .bars {
    display: none;
  }
  .bars-drawer {
    display: block;
    width: 100%;
    text-align: right;
    padding-right: 20px;
    &__icon {
      font-size: 1.5rem;
      color: #5cbfef;
    }
  }
  .bars-mobile {
    display: flex;
    flex-direction: column;
    // height: calc(100vh - 55px);
    text-align: center;
    overflow: hidden;
    &__li {
      padding: 15px;
      font-size: 1rem;
      color: #000;
      font-weight: 400;
      text-decoration: none;
      transition: color 0.3s ease-out;
    }
    &__title--success {
      color: #5cbfef;
    }
  }
}

@keyframes gradbar {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
