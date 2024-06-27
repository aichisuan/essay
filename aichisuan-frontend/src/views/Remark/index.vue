<template>
  <div class="remark">
    <div class="remark__content">
      <div class="remark__card" v-for="item in tabList" :key="item.title">
        <div class="remark__card-wrap">
          <h2 class="remark__card-title">{{ item.title }}</h2>
          <p class="remark__card-text">{{ item.desc }}</p>
          <button class="remark__card-button" @click="item.handleToDetail">详情</button>
        </div>
      </div>
    </div>
    <el-dialog v-model="showReward" title="感谢您的支持" width="320"  center>
      <div>
        <img class="remark__reward-img" src="https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/11031719390974_.pic.jpg?imageView2/w200" alt="">
      </div>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="showReward = false"> 确认 </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
<script setup name="remark">
import { ElMessageBox } from 'element-plus';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const showReward = ref(false);

const handleToAbout = () => {
  // 66
  router.push({
    path: '/detail',
    query: {
      id: 66,
    },
  });
};

const handleGiveReward = () => {
  console.log('打赏');
  showReward.value = true;
};

const handleToTool = () => {
  ElMessageBox.alert('模块正在更新中, 请稍等......', '温馨提示', {
    confirmButtonText: '确认',
    type: 'info',
  });
};

const handleToContact = () => {
  router.push({
    path: '/detail',
    query: {
      id: 67,
    },
  });
};

const tabList = ref([
  { title: '关于', desc: '博客始建于2020年初，用于分享技术和生活。2024年中使用vue3 Typescript Node Koa2 Mysql重写。', handleToDetail: handleToAbout },
  { title: '打赏', desc: '您的支持是我最大的创作动力源泉。', handleToDetail: handleGiveReward },
  { title: '工具', desc: '模块正在更新中', handleToDetail: handleToTool },
  { title: '联系我', desc: '邮箱：aichisuan666@163.com 微信: ......', handleToDetail: handleToContact },
]);
</script>
<style lang="less" scoped>
.remark {
  min-height: calc(100vh - 200px);
  display: grid;
  place-items: center;
  &__reward-img {
    display: block;
    width: 200px;
    height: 200px;
    margin: 10px auto;
  }
  &__content {
    width: 80%;
    display: grid;
    grid-gap: 1rem;
    padding: 1rem;
    max-width: 1024px;
    margin: 0 auto;
    font-family: 'Rubik', sans-serif;
  }
  &__card {
    height: 350px;
    position: relative;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    width: 100%;
    text-align: center;
    color: whitesmoke;
    background-color: whitesmoke;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1), 0 4px 4px rgba(0, 0, 0, 0.1), 0 8px 8px rgba(0, 0, 0, 0.1), 0 16px 16px rgba(0, 0, 0, 0.1);
    &:nth-child(1)::before {
      background-image: url(https://images.unsplash.com/photo-1517021897933-0e0319cfbc28?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }
    &:nth-child(2)::before {
      background-image: url(https://images.unsplash.com/photo-1533903345306-15d1c30952de?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }
    &:nth-child(3)::before {
      background-image: url(https://images.unsplash.com/photo-1545243424-0ce743321e11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }
    &:nth-child(4)::before {
      background-image: url(https://images.unsplash.com/photo-1531306728370-e2ebd9d7bb99?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ);
    }
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 110%;
      background-size: cover;
      background-position: 0 0;
      transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
      pointer-events: none;
    }
    &::after {
      transform: translateY(0);
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 200%;
      pointer-events: none;
      background-image: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.009) 11.7%,
        rgba(0, 0, 0, 0.034) 22.1%,
        rgba(0, 0, 0, 0.072) 31.2%,
        rgba(0, 0, 0, 0.123) 39.4%,
        rgba(0, 0, 0, 0.182) 46.6%,
        rgba(0, 0, 0, 0.249) 53.1%,
        rgba(0, 0, 0, 0.32) 58.9%,
        rgba(0, 0, 0, 0.394) 64.3%,
        rgba(0, 0, 0, 0.468) 69.3%,
        rgba(0, 0, 0, 0.54) 74.1%,
        rgba(0, 0, 0, 0.607) 78.8%,
        rgba(0, 0, 0, 0.668) 83.6%,
        rgba(0, 0, 0, 0.721) 88.7%,
        rgba(0, 0, 0, 0.762) 94.1%,
        rgba(0, 0, 0, 0.79) 100%
      );
      transition: transform 1.4s cubic-bezier(0.19, 1, 0.22, 1);
    }
    &:hover {
      align-items: center;
      .remark__card-wrap {
        transform: translateY(0);
        & > *:not(.remark__card-title) {
          opacity: 1;
          transform: translateY(0);
          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.7s cubic-bezier(0.19, 1, 0.22, 1);
        }
      }
      &::before {
        transform: translateY(-5%);
      }
      &::after {
        transform: translateY(-50%);
      }
    }
    &-wrap {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      padding: 1rem;
      z-index: 1;
      transform: translateY(calc(100% - 4.5rem));
      transition: transform 1s cubic-bezier(0.19, 1, 0.22, 1);
      & > *:not(.remark__card-title) {
        opacity: 0;
        transform: translateY(1rem);
        transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.7s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
    &-title {
      font-size: 1.3rem;
      font-weight: bold;
      line-height: 1.2;
      color: #fff;
    }
    &-text {
      font-size: 13px;
      font-style: italic;
      line-height: 1.35;
      margin-top: 1rem;
    }
    &-button {
      cursor: pointer;
      margin-top: 1.5rem;
      padding: 0.75rem 1.5rem;
      font-size: 0.65rem;
      font-weight: bold;
      letter-spacing: 0.025rem;
      text-transform: uppercase;
      color: white;
      background-color: black;
      border: none;
    }
  }
}

@media screen and (min-width: 600px) {
  .remark {
    &__content {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}
@media screen and (min-width: 800px) {
  .remark {
    &__content {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
