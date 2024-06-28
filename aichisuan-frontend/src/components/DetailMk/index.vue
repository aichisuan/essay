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
    >
    </MdPreview>
    <div :class="['detail__catalog', isScrollImgFinish && 'detail__catalog--center']" v-if="pageDisplayInfo.mdMenu.length">
      <span class="detail__catalog-title">目录</span>
      <MdCatalog :editorId="mdData.id" :scrollElement="scrollElement" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { staticData } from '@/stores/mdTheme';
import { useBlockVisible, type PageDisplayInfo } from '@/stores/blockVisible';
import { MdCatalog, MdPreview } from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';
import { storeToRefs } from 'pinia';
import { onMounted, onUnmounted, reactive, nextTick, ref } from 'vue';
import { throttle } from '@/lib/index';
import type { ArticleItemInfo } from '../../lib/commonType/article';




const { articleDetail } = defineProps({
  articleDetail: {
    type: Object as () => ArticleItemInfo,
    required: true,
  },
});

const { setShowMdMenu, setMdMenu, pageDisplayInfo } = useBlockVisible();

const isScrollImgFinish = ref(false);

// 初始化pinia
const staticStore = staticData();
setMdMenu([]);

const mdData = reactive({
  text: articleDetail.article_content || '',
  id: 'my-editor',
  switch: true,
});

const { codeTheme, previewTheme, mainTheme } = storeToRefs(staticStore);

const scrollElement = document.documentElement;

const handleCatalog = (catalog: PageDisplayInfo['mdMenu']) => {
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
  setShowMdMenu(false);
  // 隐藏预览
  if (!window || window.innerWidth > 768) return;
  window.removeEventListener('scroll', handleWindowScroll);
});
</script>

<style lang="less" scoped>
.detail {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  margin-top: 20px;
  width: 100%;
  box-sizing: border-box;
  &__catalog {
    width: 250px;
    margin-left: 80px;
    position: sticky;
    position: -webkit-sticky;
    top: 200px;
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
