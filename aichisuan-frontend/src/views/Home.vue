<template>
  <div class="home-page">
    <HomeBg />
     <!-- 精选 合集 技术 生活 问答 备注 routerlink -->
    <div class="home-page__btn">
      <router-link to="/selected">精选</router-link>
      <router-link to="/technology">技术</router-link>
      <router-link to="/life">生活</router-link>
      <router-link to="/qa">问答</router-link>
      <router-link to="/remark">备注</router-link>
    </div>
  </div>
</template>
<script setup name="home">
import HomeBg from '@/components/HomeBg/index.vue'
</script>
<style lang="less" scoped>
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
  background-image: url('@/assets/img/bg.jpg');
  
  /* 控制背景图像的大小 */
  background-size: cover;
  
  /* 控制背景图像的位置 */
  background-position: center;
  
  /* 确保背景图像始终覆盖整个元素，即使在窗口大小改变时 */
  min-height: 100vh;
  &__btn {
    position: absolute;
    width: 375px;
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
  }
  a {
    // 颜色
    color: #fff;
    // 文字装饰
    text-decoration: none;
    // 间距
    margin: 0 10px;
  }
}
</style>