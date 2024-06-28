<template>
  <div class="home-page">
    <HomeBg />
    <!-- 精选 合集 技术 生活 问答 备注 routerlink -->
    <div class="home-page__btn">
      <router-link to="/selected"> <Btn :text="'精选'" :btn-id="5"></Btn> </router-link>
      <router-link to="/technology"><Btn :text="'技术'" :btn-id="6"></Btn></router-link>
      <router-link to="/life"><Btn :text="'生活'" :btn-id="12"></Btn></router-link>
      <router-link to="/question"><Btn :text="'问答'" :btn-id="8"></Btn></router-link>
      <!-- <router-link to="/remark"><Btn :text="'备注'" :btn-id="7"></Btn></router-link> -->
    </div>
    <!-- <FooterBA :text-color="'#fff'" class="home-page__footer"/> -->
     <FooterHome/>
  </div>
</template>
<script setup name="home">
import HomeBg from '@/components/HomeBg/index.vue';
// import FooterBA from '@/components/FootBA/index.vue'
import FooterHome from '@/components/FootHome/index.vue'
import Btn from '@/components/Btns/index.vue';
</script>
<style lang="less" scoped>
.text {
  position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
.home-page {
  // 内容居中对齐
  display: flex;
  justify-content: center;
  align-items: center;
  // 背景颜色
  background-color: #ffffff;
  // 高度
  height: 100vh;
  // 字体大小
  font-size: 20px;
  // 颜色
  color: #fff;
  // 路由链接的样式

  /* 设置背景图像 */
  // background-image: url('@/assets/img/bg.jpg');
  background-image: url('@/assets/img/bg-water.png');

  /* 控制背景图像的大小 */
  background-size: cover;

  /* 控制背景图像的位置 */
  background-position: center;

  /* 确保背景图像始终覆盖整个元素，即使在窗口大小改变时 */
  min-height: 100vh;
  &__btn {
    position: absolute;
    width: 700px;
    max-width: 90%;
    height: 100px;
    font-size: 22px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    margin: auto;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  a {
    // 颜色
    color: #fff;
    // 文字装饰
    text-decoration: none;
    // 间距
    margin: 0 10px;
  }
  &__footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    background: transparent;
    border-top: none;
  }
}

@media screen and (max-width: 768px) {
  .home-page {
    & a {
      user-select: none;
      margin-bottom: 15px;
    }
  }
}
</style>
