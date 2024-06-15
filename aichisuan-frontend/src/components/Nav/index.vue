<template>
  <div class="padding-box"></div>
  <div class="nav-top">
    <BarList />
    <MobileSearchTop/>
    <!-- <ChangeTheme /> -->
  </div>
</template>

<script setup>
import ChangeTheme from "./ChangeTheme.vue";
import BarList from "./BarList.vue";
import MobileSearchTop from "@/components/MobileSearchTop/index.vue";
</script>

<style lang="less" scoped>
.padding-box {
  height: 3.9rem;
}
.nav-top {
  height: 3.8rem;
  width: 100%;
  position: fixed;
  padding-top: 5px;
  top: 0;
  left: 0;
  z-index: 1999;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 -1px 3px #5cbfef;
  display: flex;
  align-items: center;
}

@media screen and (max-width: 768px) {
  .padding-box {
    height: 6.4rem;
  }
  .nav-top {
    height: 3.2rem;
  }
}

</style>
