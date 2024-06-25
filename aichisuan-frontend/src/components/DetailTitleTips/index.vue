<template>
  <div class="header">
    <h2 class="header__title">{{ articleDetail.article_title }}</h2>
    <ul class="header__time">
      <!-- 浏览量 -->
      <li class="header__time-li">
        <el-icon :size="12" class="header__icon">
          <Calendar />
        </el-icon>
        <span>发布：{{ getNormalTime(articleDetail.create_time) }}</span>
      </li>
      <li class="header__time-li">
        <!-- 时间 -->
        <el-icon :size="12" class="header__icon">
          <Timer />
        </el-icon>
        <span>更新：{{ articleDetail.update_time ? getNormalTime(articleDetail.update_time) : '--' }}</span>
      </li>
      <li class="header__time-li">
        <!-- 时间 -->
        <el-icon :size="12" class="header__icon">
          <Reading />
        </el-icon>
        <span>阅读数：{{ articleDetail.article_read_count }}</span>
      </li>
    </ul>
    <hr class="header__hr" />
  </div>
</template>

<script setup lang="ts">
import {} from 'vue';
import { Timer, Calendar, Reading } from '@element-plus/icons-vue';
import { ArticleItemInfo } from '@/lib/commonType/article';
import { getNormalTime } from '@/lib/timeFormat/index';

defineProps({
  articleDetail: {
    type: Object as () => ArticleItemInfo,
    required: true,
  },
})

</script>

<style lang="less" scoped>
.header {
  &__title {
    line-height: 3rem;
    word-spacing: 2px;
    letter-spacing: 0.5px;
    font-size: 1.8rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  &__icon {
    font-size: 12px;
    margin: 0 5px 0 15px;
  }
  &__time {
    display: flex;
    align-items: center;
    letter-spacing: 0.5px;
    padding: 10px 10px 0 0;
    color: #afafaf;
    font-size: 12px;
    cursor: pointer;
    &-li {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
  }
  &__hr {
    height: 1px;
    border: none;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0), #ccc, rgba(0, 0, 0, 0));
    margin: 1.5rem 0 0.8rem;
  }
}

@media screen and (max-width: 768px) {
  .header {
    &__title {
      font-size: 1.5rem;
    }
    &__icon {
      font-size: 10px;
    }
    &__time {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      letter-spacing: 0.5px;
      padding: 10px 10px 0 0;
      color: #afafaf;
      font-size: 12px;
      cursor: pointer;
      &-li {
        flex-basis: 100%;
        margin-bottom: 10px;
        &:last-of-type {
          margin-bottom: 0px;
        }
      }
    }
  }
}
</style>
