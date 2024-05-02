import { defineStore } from "pinia";
import { _getLocalItem, _setLocalItem } from "@/lib";
import { useDark, useToggle } from '@vueuse/core'
// Import the missing functions
const isDark = useDark({
  // 存储到localStorage/sessionStorage中的Key 根据自己的需求更改
  storageKey: "useDarkKEY",
  // 暗黑class名字
  valueDark: "dark",
  // 高亮class名字
  valueLight: "light",
});

const toggle = useToggle(isDark);

export const staticData = defineStore("staticData", {
  // 数据存到store里刷新页面会重置，持久化就不会了
  state: () => {
    return {
      // md预览主题列表
      previewThemeList: ["default", "github", "vuepress", "mk-cute", "smart-blue", "cyanosis"],
      // md代码主题列表
      codeThemeList: [
        "atom",
        "a11y",
        "github",
        "gradient",
        "kimbie",
        "paraiso",
        "qtcreator",
        "stackoverflow",
      ],
      // md预览主题
      previewTheme: "default",
      // md代码主题
      codeTheme: "atom",
      // 整体主题 黑夜和白天
      theme: isDark.value,
      // 头部图片地址
      pageHeaderList: [],
    };
  },
  getters: {
    // 获取当前整体主题 黑夜/白天
    mainTheme() {
      return isDark.value;
    },
  },
  actions: {
    // 切换主题
    switchMainTheme() {
      toggle();
      this.theme = isDark.value;
      _setLocalItem("mainTheme", this.theme ? "dark" : "light");
    },
  },
});