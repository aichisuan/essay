<template>
  <div class="nav-top">
    <BarList />
    <ChangeTheme />
  </div>
</template>

<script setup>
import ChangeTheme from "./ChangeTheme.vue";
import BarList from "./BarList.vue";
</script>

<style lang="less" scoped>
.padding-top {
  height: 3.9rem;
}
.nav-top {
  height: 3.8rem;
  width: 100%;
  padding: 0 30px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2023;
  background-color: #fff;
  overflow: hidden;
  box-sizing: border-box;
  box-shadow: 0 -1px 3px #5cbfef;
  background: rgba(255, 255, 255, .7);
  display: flex;
  align-items: center;
}
</style>
