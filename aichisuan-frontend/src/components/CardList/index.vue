<template>
  <el-card class="card">
    <div class="card__box" @click="hanldeToDetail">
      <el-skeleton
        v-if="param.loading"
        :loading="param.loading"
        style="height: 100%"
        animated
      >
        <!-- 写骨架屏 -->
      </el-skeleton>
      <template v-else>
        <!-- 图片区域 -->
        <el-image
          object-fit="cover"
          src="http://img.mrzym.top/FswlMLf30bR2MeXCgorQSkUQ3ky1"
          class="card__thumbnail-img"
        >
          <template #error>
            <div class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </template>
        </el-image>
        <!-- 简介区域 -->
        <div class="card__desc">
          <h3>{{ '这是一个很长的标题这是一个很长的标题这是一个很长的标题这是一个很长的标题这是一个很长的标题' }}</h3>
          <p>发表时间： {{ '2024-05-19 19:23:23' }}</p>
          <p>更新时间： {{ '2024-05-19 19:23:23' }}</p>
          <p>浏览量： {{ 0.8 }}k</p>
          <p class="card__desc-intro"></p>
        </div>
      </template>
    </div>
  </el-card>
</template>

<script setup>
import { } from 'vue';
import { useRouter } from 'vue-router';
import { ElImage } from 'element-plus';

const props = defineProps({
  param: {
    type: Object,
    default: () => {
      return {};
    },
  },
});

const router = useRouter();

const hanldeToDetail = () => {
  router.push({
    path: '/detail',
    query: {
      id: 1,
    },
  })
}

</script>

<style lang="less" scoped>
.card {
  box-shadow: 0 3px 6px 3px rgba(7, 17, 27, 0.15);
  display: flex;
  align-items: center;
  height: 18rem;
  margin: 0 20px 20px 0;
  position: relative;
  :deep(.el-card__body) {
    padding: 0;
    height: 100%;
    width: 100%;
  }
  &__desc {
    padding: 40px;
    width: calc(100% - 18rem);
    box-sizing: border-box;
    position: relative;
  }
  &__box {
    height: 100%;
    width: 100%;
    display: flex;
    h3 {
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 3;
      transition: 0.2s ease-in-out;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      // 省略号
      
      &:hover {
        cursor: pointer;
        color: #5cbfef;
      }
    }
    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.8rem;
      &:hover {
        cursor: pointer;
        color: #5cbfef;
      }
    }
    .card__desc-intro {
    }
  }
  &__thumbnail-img {
    height: 18rem;
    width: 18rem;
    flex-basis: 18rem;
    object-fit: cover;
  }
}
</style>
