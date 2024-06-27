<template>
  <div class="search">
    <div class="search__mask" @click.self="emit('closeArticleSearch')">
      <div class="search__wrap">
        <div class="search__header">
          <div class="search__header-bar">
            <div class="search__header-back" @click="emit('closeArticleSearch')">
              <el-icon><Back /></el-icon>
            </div>
            <el-input
              class="search__header-input"
              colo
              v-model="searchInput"
              :maxlength="20"
              border="none"
              @input="handleSearch"
              @keydown.up="handleActiveIndex(-1)"
              @keydown.down="handleActiveIndex(1)"
              @keydown.enter="handleToEnter"
              placeholder="输入搜索内容"
            ></el-input>
            <div class="search__header-delete" @click="handleDelete"><i class="iconfont icon-delete"></i></div>
          </div>
        </div>
        <div class="search__body">
          <div class="search__body-tip" v-if="searchList.length">搜索到文章 {{ searchList.length }} 篇</div>
          <ul class="search__body-list" v-loading="isSearchLoading">
            <li
              @click="handleToDetail(item)"
              class="search__body-item"
              :class="[activeIndex === index && 'search__body-item--active', `search__body-item-${index}`]"
              v-for="(item, index) in searchList"
              :key="item.article_id"
            >
              <span class="extract">{{ item.article_content_extract }}</span>
              <div class="date">
                <span>{{ getTime(item.create_time as unknown as string) }}</span>
              </div>
            </li>
            <li v-if="searchList.length === 0" class="search__body-desc">输入内容搜索文章</li>
          </ul>
        </div>
        <div class="search__footer">
          <ul class="search__footer-ul">
            <li>←┘<span class="search__footer-li-label">选择</span></li>
            <li>⬆&nbsp;⬇<span class="search__footer-li-label">&nbsp;&nbsp;切换</span></li>
            <li>esc&nbsp;&nbsp;<span class="search__footer-li-label">关闭</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import { Back } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import { type ArticleItemInfo } from '../../lib/commonType/article';
import service from '@/lib/fetch/Api';
import { formatTime } from '../../lib/timeFormat';
import type { Dayjs } from 'dayjs';
const router = useRouter();
const searchInput = ref<string>('');
const isSearchLoading = ref<boolean>(false);

const searchTimeout = ref<number | null>(null);

const fetchIndex = ref<number>(1);

const searchList = ref<(ArticleItemInfo & { article_content_extract: string })[]>([]);

const searchCount = ref<number>(0);

const activeIndex = ref<number>(0);

onMounted(() => {
  document.body.style.overflow = 'hidden';
});

onUnmounted(() => {
  document.body.style.overflow = 'auto';
});

const emit = defineEmits(['closeArticleSearch']);

const querySearchArticles = async (queryString: string, index: number) => {
  if (!queryString) {
    searchList.value = [];
    return;
  }

  try {
    isSearchLoading.value = true;
    const { code, data } = await service.getSearchArticleList({ search_content: queryString, page: 1, pageSize: 100 });
    isSearchLoading.value = false;
    // 防止数据串联
    if (code !== 200 || fetchIndex.value > index) return;
    searchList.value = data.resList || [];
    searchCount.value = data.total || 0;
    activeIndex.value = 0;
  } catch (error) {
    isSearchLoading.value = false;
  }
};

const handleSearch = (v: string) => {
  searchInput.value = v;
  if (searchTimeout.value) {
    clearTimeout(searchTimeout.value);
  }
  searchTimeout.value = setTimeout(async () => {
    fetchIndex.value += 1;
    querySearchArticles(v, fetchIndex.value);
  }, 500);
};

const handleToEnter = () => {
  if (!searchList.value.length) return;
  const { article_id } = searchList.value[activeIndex.value];
  emit('closeArticleSearch');
  router.push({
    path: '/detail',
    query: {
      id: article_id,
    },
  });
};

const handleToDetail = (item: ArticleItemInfo) => {
  emit('closeArticleSearch');
  router.push({
    path: '/detail',
    query: {
      id: item.article_id,
    },
  });
};

const getTime = (time: string) => {
  return formatTime(time as unknown as Dayjs, 'YYYY-MM-DD');
};

const handleDelete = () => {
  if (searchInput.value.length === 0) return;
  // 删除一个
  searchInput.value = searchInput.value.slice(0, searchInput.value.length - 1);
  handleSearch(searchInput.value);
};

const handleActiveIndex = (num: 1 | -1) => {
  if (!searchList.value.length) return;
  activeIndex.value += num;
  if (activeIndex.value === -1) {
    activeIndex.value = searchList.value.length - 1;
  }
  if (activeIndex.value > searchList.value.length - 1) {
    activeIndex.value = 0;
  }
  // 如何让activeIndex这个div滚动到页面中
  try {
    const el = document.documentElement.querySelector(`.search__body-item-${activeIndex.value}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  } catch (error) {
    console.log(error);
  }
};
</script>

<style lang="less" scoped>
.search {
  &__mask {
    background-color: #4b4b4bcc;
    height: 100vh;
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 2024;
  }
  &__wrap {
    max-width: 560px;
    margin: 20vh auto auto;
    border-radius: 6px;
    background-color: #fff;
    font-size: 18px;
    background-color: hsl(0, 0%, 97.3%);
  }
  &__header {
    padding: 12px;
    &-bar {
      cursor: pointer;
      padding: 12px 0 12px 12px;
      display: flex;
      cursor: text;
      align-items: center;
      border-radius: 4px;
      border: 1px solid #409eff;
      .icon-delete {
        font-size: 18px;
      }
    }
    & &-input {
      border: none;
      box-shadow: none;
      font-size: 18px;
      :deep(.el-input__wrapper) {
        background-color: hsl(0, 0%, 97.3%);
        border: none;
        box-shadow: none;
      }
    }
    &-back {
      display: flex;
      width: 30px;
      justify-content: center;
      align-items: center;
    }
    &-delete {
      display: flex;
      width: 40px;
      justify-content: center;
      align-items: center;
    }
  }
  &__body {
    padding: 0 12px;
    &-tip {
      color: #79bbff;
      font-size: 0.85em;
      font-weight: 600;
      line-height: 32px;
      margin: 0 -4px;
      padding: 0 4px;
      top: 0;
      z-index: 10;
      width: 100%;
    }
    &-list {
      max-height: 360px;
      overflow-y: auto;
      ::-webkit-scrollbar-thumb {
        background: #79bbff; /* 滑块颜色 */
      }
      // >>>>>>>
      overscroll-behavior: contain;
      transition: 0.1s ease;
      transition-property: height;
      padding-bottom: 20px;
    }
    &-item {
      position: relative;
      content-visibility: auto;
      cursor: pointer;
      height: 56px;
      font-size: 14px;
      display: flex;
      align-items: center;
      padding: 0 16px;
      color: hsl(0, 0%, 9%);
      -webkit-user-select: none;
      user-select: none;
      will-change: background, color;
      transition: all 0.15s ease;
      transition-property: none;
      border-radius: 4px;
      margin-top: 6px;
      background-color: #fff;
      gap: 2;
      .extract {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .date {
        min-width: 86px;
        height: 56px;
        padding: 10px 0;
        box-sizing: border-box;
        display: flex;
        align-content: flex-end;
        color: #409eff;
      }
    }
    &-item--active {
      background-color: #79bbff;
      color: #fff;
    }
    &-desc {
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: hsl(0, 0%, 43.5%);
    }
  }
  &__footer {
    font-size: 12px;
    background-color: hsl(0, 0%, 93%);
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    padding: 0 12px;
    &-ul {
      display: flex;
      align-items: center;
      li {
        height: 36px;
        display: flex;
        align-items: center;
        margin-right: 10px;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .search {
    &__mask {
      background-color: white;
    }
    &__wrap {
      height: 100vh;
      margin: 0;
      max-width: 100vw;
      box-sizing: border-box;
    }
    &__header {
      &-bar {
        padding: 6px 4px;
      }
    }
    &__footer {
      display: none;
    }
    &__body {
      &-list {
        max-height: calc(100vh - 100px);
        box-sizing: border-box;
      }
    }
  }
}
</style>
