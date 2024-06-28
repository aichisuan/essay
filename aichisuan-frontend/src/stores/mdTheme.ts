import { defineStore } from "pinia";
import { _getLocalItem, _setLocalItem } from "@/lib";
import { useDark } from '@vueuse/core'
// Import the missing functions
const isDark = useDark({
  // 存储到localStorage/sessionStorage中的Key 根据自己的需求更改
  storageKey: "useDarkKEY",
  // 暗黑class名字
  valueDark: "dark",
  // 高亮class名字
  valueLight: "light",
});

export type PreviewTheme = "default" | "github" | "vuepress" | "mk-cute" | "smart-blue" | "cyanosis";
export type CodeTheme = "atom" | "a11y" | "github" | "gradient" | "kimbie" | "paraiso" | "qtcreator" | "stackoverflow";

const localPreviewTheme = _getLocalItem("previewTheme") || 'default';
const localCodeTheme = _getLocalItem("codeTheme") || 'gradient';

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
      previewTheme: localPreviewTheme,
      // md代码主题
      codeTheme: localCodeTheme,
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
    switchPreviewTheme(theme: PreviewTheme) {
      this.previewTheme = theme;
      _setLocalItem("previewTheme",this.previewThemeList.includes(this.previewTheme) ? this.previewTheme : "default");
    },
    // 切换代码主题
    switchCodeTheme(theme: string) {
      this.codeTheme = theme;
      _setLocalItem("codeTheme", this.codeThemeList.includes(this.codeTheme) ? this.codeTheme : "atom");
    },
  },
});