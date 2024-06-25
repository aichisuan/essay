<template>
  <!-- 移动端显示的搜索以及md 列表 -->
  <div class="bars-mobile-top">
    <div class="bars-mobile-top__hot" @click="handleShowHot">
      <i class="iconfont icon-fire"></i>
      <span>hot</span>
    </div>
    <div class="bars-mobile-top__input-wrap">
      <input v-model="searchText" placeholder="搜索文章" class="bars-mobile-top__input" />
      <el-icon class="bars-mobile-top__icon"><Search /></el-icon>
    </div>
    <div v-if="pageDisplayInfo.showMdMenu" class="bars-mobile-top__md-menu" @click="handleShowMenu">
      <i class="iconfont icon-icon_Contents"></i>
    </div>
    <el-drawer v-model="isShowMdMenu" v-if="pageDisplayInfo.showMdMenu && pageDisplayInfo.mdMenu" title="目录" direction="rtl" size="70%">
      <ul class="bars-mobile-top__menu">
        <li v-for="(item, index) in pageDisplayInfo.mdMenu" :key="`${item.text}-${index}`" class="bars-mobile__li" @click="handleMdTo(item.text)">
          <p class="bars-mobile-top__menu-item" :style="`text-indent: ${item.level * 8}px`">{{ item.text }}</p>
        </li>
      </ul>
    </el-drawer>
    <el-drawer v-model="isShowHot" title="热门文章" direction="ltr" size="80%">
      <Selected :is-card="false" @handleCallBack="isShowHot = false"/>
    </el-drawer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useBlockVisible } from '@/stores/blockVisible';
import { Search } from '@element-plus/icons-vue';
import Selected from '@/components/Selected/index.vue';
const searchText = ref<string>('');

const { pageDisplayInfo } = useBlockVisible();
const isShowMdMenu = ref(false);
const isShowHot = ref(false);

const handleShowMenu = () => {
  isShowMdMenu.value = !isShowMdMenu.value;
};

const handleShowHot = () => {
  isShowHot.value = !isShowHot.value;
};

const handleMdTo = (elId: string) => {
  try {
    const el = document.getElementById(elId);
    const mdEl = document.getElementById('my-editor');
    const offset = 120;
    const topOffset = (el as Element).getBoundingClientRect().top + window.scrollY - offset;
    if (el && mdEl) {
      window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
      });
    }
  } catch (error) {
    console.log(error);
  }

  isShowMdMenu.value = false;
};
</script>

<style lang="less" scoped>
.bars-mobile-top {
  display: none;
}

@media screen and (max-width: 768px) {
  .bars-mobile-top {
    box-sizing: border-box;
    position: fixed;
    width: 100%;
    top: 3.2rem;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: 10px;
    border-top: 1px solid #5cbfef;
    box-shadow: 0 1px 1px #d8d8d8d8;
    background-color: #fff;

    &__hot {
      flex-basis: 40px;
    }
    &__input-wrap {
      flex: 1;
      margin: 0 10px;
      padding: 0 10px;
      background-color: #f0f0f0;
      display: flex;
      align-items: center;
      height: 2.5rem;
      box-sizing: border-box;
      border-radius: 3px;
    }
    &__input {
      border: none;
      width: 100%;
    }
    &__icon {
      color: #3498db;
      font-size: 18px;
    }
    &__md-menu {
      flex-basis: 30px;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    &__menu-item {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      word-break: break-all;
      margin-bottom: 10px;
      color: #515767;
      font-size: 14px;
    }
  }
  :deep(.el-drawer__header) {
    margin-bottom: 0;
  }
}
</style>
