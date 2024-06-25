import { ref } from 'vue'
import { defineStore } from 'pinia'

export type PageDisplayInfo = {
  showMdMenu: boolean
  mdMenu: {
    text: string,
    level: number
  }[]
}

export const useBlockVisible = defineStore('blockVisible', () => {
  const pageDisplayInfo = ref<PageDisplayInfo>({
    showMdMenu: false,
    mdMenu: []
  })

  const setShowMdMenu = (value: boolean) => {
    pageDisplayInfo.value.showMdMenu = value
  }

  const setMdMenu = (value: PageDisplayInfo['mdMenu']) => {
    pageDisplayInfo.value.mdMenu = value
  }

  return { pageDisplayInfo, setShowMdMenu, setMdMenu }
})
