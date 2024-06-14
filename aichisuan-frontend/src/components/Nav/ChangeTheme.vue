<template>
  <el-switch
    v-model="currentTheme"
    size="default"
    :active-icon="Sunrise"
    inline-prompt
    :inactive-icon="Moon"
    active-color="#000"
    inactive-color="#000"
    @change="changeT"
    class="change-theme"
  ></el-switch>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Theme, useThemeStore } from '@/stores/theme';
import { ElSwitch } from 'element-plus'; // Add this line
import { Moon, Sunrise } from "@element-plus/icons-vue";

const { changeTheme, theme } = useThemeStore();
const currentTheme = ref<boolean>(theme === Theme.LIGHT);

const changeT = (v) => {
  changeTheme(v ? Theme.LIGHT : Theme.DARK);
};
</script>

<style lang="less" scoped>
.change-theme {
  margin-right: 10px;
}

@media screen and (max-width: 768px){
  .change-theme {
    display: none;
  }
}

</style>
