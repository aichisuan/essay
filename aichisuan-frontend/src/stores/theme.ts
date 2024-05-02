// 保存主题样式 由全局
import { ref } from 'vue'
import { defineStore, } from 'pinia'
import { _getLocalItem, _setLocalItem } from '@/lib';

export enum Theme {
  DARK = 'dark',
  LIGHT = 'light',
}

let themeVal:Theme | '' = '';
const th = _getLocalItem("blog_theme");
// 若存在缓存用缓存
if (th) {
  // 有值白天 没值黑夜
  themeVal = th === Theme.LIGHT ? Theme.LIGHT : Theme.DARK;
} else {
  const now = new Date().getHours();
  // 判断是白天还是黑夜
  themeVal = now >= 8 && now <= 18 ? Theme.LIGHT : Theme.LIGHT;
}

export const useThemeStore = defineStore('theme', () => {
  const theme = ref<Theme>(themeVal);

  const changeTheme = (t: Theme) => {
    _setLocalItem('blog_theme', t);
    theme.value = t;
  }
  return { theme, changeTheme }
})