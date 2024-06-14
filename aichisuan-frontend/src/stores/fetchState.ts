// 静默请求列表页面，进入第一页后请求第二页的数据
import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { ArticleType, ArticleItem, TypeId, ArticleListEn } from '@/lib/commenType/article'
import service from '@/lib/fetch/Api'
import { typeEnMap } from '@/lib/business'

type normalArticleInfo = {
  [page: number]: ArticleItem[],
}

type BaseState = {
  typeList: ArticleType[],
  selectArticleList: normalArticleInfo, // 精选文章列表
  technologyArticleList: normalArticleInfo, // 技术文章列表
  lifeArticleList: normalArticleInfo, // 生活文章列表
  questionArticleList: normalArticleInfo, // 问答文章列表
  remarkArticleList: normalArticleInfo, // 其他文章列表
}


export const useFetchState = defineStore('useFetchState', () => {
  const baseState = ref<BaseState>({
    typeList: [],
    selectArticleList: [],
    technologyArticleList: [],
    lifeArticleList: [],
    questionArticleList: [],
    remarkArticleList: [],
  })


  const findSetArticleList = (atEn: ArticleListEn, page: number, data: ArticleItem[]) => {
    const info = baseState.value[atEn]
    info[page] = data;
  }


  const getTypeList = async () => {
    const { code, data} = await service.getArticleType()
    if (code !== 200) return
    baseState.value.typeList = data
    return data;
  }

  const getSelectArticleList = async (page: number = 1) => {
    const { code, data } = await service.getArticleList({ wightGte: 10, page, pageSize: 10})
    if (code !== 200) return
    if (page === 1) baseState.value.selectArticleList = data

    findSetArticleList('selectArticleList' as ArticleListEn, page, data)

    return data;
  }

  const getArticleList = async (type_id: number, page: number) => {
    if (type_id === 0) {
      return getSelectArticleList(page)
    }
    const { code, data } = await service.getArticleList({ type_id, page, pageSize: 10})
    if (code !== 200) return
    // @ts-ignore
    const atEn = typeEnMap[type_id] + 'ArticleList' as ArticleListEn
    findSetArticleList(atEn, page, data)
    return data;
  }

  return { baseState, getTypeList, getSelectArticleList, getArticleList }
})