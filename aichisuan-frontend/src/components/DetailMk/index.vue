<template>
  <div class="detail">
    <MdPreview
      :modelValue="mdData.text"
      class="md-preview-v3"
      :editorId="mdData.id"
      previewOnly
      :preview-theme="previewTheme"
      :code-theme="codeTheme"
      :theme="mainTheme ? 'dark' : 'light'"
      @on-get-catalog="handleCatalog"
    ></MdPreview>
    <div :class="['detail__catalog', isScrollImgFinish && 'detail__catalog--center']">
      <span class="detail__catalog-title">目录</span>
      <MdCatalog :editorId="mdData.id" :scrollElement="scrollElement" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { staticData } from '@/stores/mdTheme';
import { useBlockVisible, type pageDisplayInfo } from '@/stores/blockVisible';
import testmd from './testmd';
import { MdCatalog, MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, reactive, nextTick, ref } from 'vue';
import { throttle } from '@/lib/index';

const { setShowMdMenu, setMdMenu } = useBlockVisible();

const isScrollImgFinish = ref(false);

// 初始化pinia
const staticStore = staticData();
setMdMenu([]);

const mdData = reactive({
  text: testmd.content,
  id: 'my-editor',
  switch: true,
});

const { codeTheme, previewTheme, mainTheme } = storeToRefs(staticStore);

const scrollElement = document.documentElement;

const handleCatalog = (catalog: pageDisplayInfo['mdMenu']) => {
  setMdMenu(catalog);
};

const handleWindowScroll = () => {
  throttle(() => {
    const pageY = window.scrollY;
    if (pageY > 60) {
      isScrollImgFinish.value = true;
    } else {
      isScrollImgFinish.value = false;
    }
  }, 250)();
};

onMounted(() => {
  // 显示预览
  setShowMdMenu(true);
  // 监听window 滚动条 判断移动端不显示目录
  if (!window || window.innerWidth < 768) return;
  nextTick(() => {
    window.addEventListener('scroll', handleWindowScroll);
  });
});

onUnmounted(() => {
  // 隐藏预览
  if (!window || window.innerWidth < 768) return;
  window.removeEventListener('scroll', handleWindowScroll);
  setShowMdMenu(false);
});
</script>

<style lang="less" scoped>
.detail {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
  max-width: 1200px;
  &__catalog {
    margin-left: 10px;
    position: sticky;
    top: 500px;
    height: calc(100vh - 40px);
    overflow-y: auto;
    &--center {
      top: 80px;
    }
  }
  &__catalog-title {
    font-weight: 500;
    font-size: 16px;
    line-height: 2rem;
  }
}

@media screen and (max-width: 768px) {
  .detail {
    flex-direction: column;
    padding: 0;
    &__catalog {
      display: none;
    }
  }
  .md-preview-v3 {
    padding: 0;
    :deep(.md-editor-preview-wrapper) {
      padding: 10px 5px;
    }
  }
}
</style>
