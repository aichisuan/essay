<template>
  <div :class="`selected ${isCard ? 'selected--card' : ''}`">
    <div class="selected__title" v-if="isCard">
      <i class="iconfont icon-fire"></i>
      <span>精选文章</span>
    </div>
    <ul class="selected__list">
      <li class="selected__list-li" v-for="(item, index) in nowList" :key="item.article_id" @click="handleToDetail(item)">
        <div class="selected__li-index">
          <i :class="`iconfont selected__li-icon ${getIconStr(index)}`"></i>
        </div>
        <div class="selected__li-content">
          <div class="selected__li-title">{{ item.article_title }}</div>
          <div class="selected__li-time">{{getNormalTime(item.update_time || item.create_time)}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { useFetchState } from '@/stores/fetchState';
import { useRouter } from 'vue-router';
import { getNormalTime } from '@/lib/timeFormat';

const router = useRouter();
const { selectArticleList } = useFetchState();

const nowList = selectArticleList[1] || [];


defineProps({
  isCard: {
    type: Boolean,
    default: true,
  },
})

const getIconStr = (index: number) => {
  // 图标记得替换
  const mapIcons = {
    0: 'icon-number-1',
    1: 'icon-number-',
    2: 'icon-number-3',
    3: 'icon-number-2',
    4: 'icon-number-5',
    5: 'icon-number-9',
    6: 'icon-number-4',
    7: 'icon-number-6',
    8: 'icon-number-7',
    9: 'icon-number-8',
    10: 'icon-a-10',
  };
  return Object.entries(mapIcons).map(([key, value]) => value)[index + 1] || null;
};

const handleToDetail = (item: any) => {
  router.push(
    {
      name: 'detail',
      query: {
        id: item.article_id,
      },
    });
};

</script>

<style lang="less" scoped>
@import url('@/assets/style/main.less');
.selected {
  &--card {
    .card_normal;
  }
  padding: 10px;
  margin: 0 auto 10px;
  &__title {
    font-size: 12px;
    display: flex;
    align-items: center;
    color: rgba(60, 60, 67);
    line-height: 24px;
    .iconfront {
      font-size: 20px;
      margin-right: 10px;
      color: #ffffff;
    }
  }
  &__list-li {
    display: flex;
    padding-right: 20px;
    justify-content: flex-start;
    margin-bottom: 3px;
  }
  &__li-index {
    flex-basis: 24px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    .icon-a-10 {
      color: aqua;
    }
  }
  &__li-icon {
    font-size: 12px;
    margin-top: 8px;
  }
  &__li-content {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    line-height: 24px;
  }
  &__li-title {
    width: 0;
    flex-basis: 100%;
    font-size: 14px;
    font-weight: 500;
    position: relative;
    cursor: pointer;
    color: rgba(60, 60, 67);
    box-sizing: border-box;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-break: break-all;
  }
  &__li-time {
    flex-basis: 100%;
    font-size: 12px;
    color: rgba(60, 60, 67, 0.78);
  }
}
</style>
