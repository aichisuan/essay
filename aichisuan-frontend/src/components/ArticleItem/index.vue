<template>
  <li class="article-item">
    <div class="article-item__box">
      <el-skeleton v-if="pageTypeInfo.loading" :loading="pageTypeInfo.loading" style="height: 100%" animated>
        <!-- 写骨架屏 -->
      </el-skeleton>
      <template v-else>
        <!-- 移动端标题 -->
        <div class="article-item__mobile-title">
          {{ item.article_title }}
        </div>
        <div class="article-item__info-wrap">
          <div class="article-item__info-desc" @click="hanldeToDetail(item)">
            <!-- pc端标题 -->
            <div class="article-item__title">{{ item.article_title }}</div>
            <div class="article-item__short-details">
              {{
                item.article_content_preview
              }}
            </div>
            <div class="article-item__tips">
              <span class="article-item__tips-d" :key="item">发布:{{ getNormalTime(item.create_time) }}</span>
              <span class="article-item__tips-d" :key="item">更新:{{ item.update_time ? getNormalTime(item.update_time) : '-' }}</span>
            </div>
          </div>
          <div class="article-item__info-img">
            <ElImage :src="item.article_cover" fit="cover" :preview-src-list="[item.article_cover]" class="img-el" @click.stop />
          </div>
        </div>
        <!-- pc端tips -->
        <div class="article-item__mobile-tips">
          <span class="article-item__tips-d" v-for="item in 2" :key="item">{{ '发布：2024-0611' }}</span>
        </div>
      </template>
    </div>
  </li>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { ElImage } from 'element-plus';
import { useFetchState } from '@/stores/fetchState';
import type { ArticleItemInfo } from '../../lib/commonType/article';
import { getNormalTime } from '../../lib/timeFormat/index';

const { pageTypeInfo } = useFetchState();

const { item } = defineProps({
  item: {
    type: Object as () => ArticleItemInfo,
    required: true,
  },
}) as { item: ArticleItemInfo };

const router = useRouter();

const hanldeToDetail = (item) => {
  const { article_id: id } = item;
  console.log('id', id, item);
  router.push({
    path: '/detail',
    query: {
      id,
    },
  });
};
</script>

<style lang="less" scoped>
@import url('../../assets/style/main.less');
.article-item {
  &__box {
    .card_normal;
  }
  &__info-wrap {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  &__info-desc {
    flex: 1;
  }
  &__info-img {
    margin-left: 20px;
    .img-el {
      width: 120px;
      height: 80px;
    }
  }
  &__title {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &__short-details {
    color: #86909c;
    font-size: 14px;
    margin-bottom: 8px;
    overflow: hidden;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  &__tips {
    margin-top: 8px;
    font-size: 13px;
    color: #86909c;
    &-d {
      color: #4e5969;
      &:after {
        content: '';
        display: inline-block;
        width: 1px;
        height: 8px;
        margin: 0 10px 1px;
        background-color: #4e5969;
      }
    }
  }
  &__mobile-title {
    display: none;
  }
  &__mobile-tips {
    display: none;
  }
}

@media screen and (max-width: 768px) {
  .article-item {
    &__title {
      display: none;
    }
    &__tips {
      display: none;
    }
    &__mobile-title {
      display: block;
    }
    &__mobile-tips {
      display: flex;
      margin-top: 10px;
      &-d {
        color: #4e5969;
        &:after {
          content: '';
          display: inline-block;
          width: 1px;
          height: 8px;
          margin: 0 10px 1px;
          background-color: #4e5969;
        }
      }
    }
    &__info-img {
      margin-left: 20px;
      .img-el {
        width: 100px;
        height: 60px;
      }
    }
  }
}
</style>
