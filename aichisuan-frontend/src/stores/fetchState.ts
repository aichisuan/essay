// 静默请求列表页面，进入第一页后请求第二页的数据
import { reactive, ref, watch } from 'vue';
import { defineStore } from 'pinia';
import type { ArticleType, ArticleItemInfo, TypeId } from '@/lib/commonType/article';
import service from '@/lib/fetch/Api';

type NormalArticleInfo = {
  [page: number]: ArticleItemInfo[];
};

// 静态的数据，只请求一次
type StaticState = {
  typeList: ArticleType[];
};

type PageTypeInfo = {
  page: number;
  totalInfo: Record<TypeId, number>;
  typeId: TypeId;
  pageLoading: boolean;
};

export const useFetchState = defineStore('useFetchState', () => {
  const baseState = reactive<StaticState>({
    typeList: [],
  });

  const pageTypeInfo = reactive<PageTypeInfo>({
    page: 1,
    totalInfo: {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
    },
    typeId: 0,
    pageLoading: false,
  });

  const selectArticleList = reactive<NormalArticleInfo>({}); // 精选文章
  const technologyArticleList = reactive<NormalArticleInfo>({}); // 技术文章
  const lifeArticleList = reactive<NormalArticleInfo>({}); // 生活文章
  const questionArticleList = reactive<NormalArticleInfo>({}); // 问题文章
  const remarkArticleList = reactive<NormalArticleInfo>({}); // 其他文章

  const showArticleList = ref<ArticleItemInfo[]>([]);

  const currentPageTotal = ref<number>(0)

  const setPageInfo = (page: number, typeId: TypeId) => {
    pageTypeInfo.page = page;
    pageTypeInfo.typeId = typeId;
  };

  const getTypeList = async () => {
    const { code, data } = await service.getArticleType();
    if (code !== 200) return;
    baseState.typeList = data;
    return data;
  };

  const getSelectArticleList = async (page: number = 1) => {
    pageTypeInfo.pageLoading = true;
    const { code, data } = await service.getArticleList({ weightGte: 10, page, pageSize: 10, isSelect: true, is_dfat: 0 });
    pageTypeInfo.pageLoading = false;
    if (code !== 200) return;
    selectArticleList[page] = data.resList || [];
    pageTypeInfo.totalInfo = {
      ...pageTypeInfo.totalInfo,
      0: data.total,
    };
    return data;
  };

  const getArticleHas = (typeId: TypeId, page: number): boolean => {
    const typeMapList = {
      0: selectArticleList,
      1: technologyArticleList,
      2: lifeArticleList,
      3: questionArticleList,
      4: remarkArticleList,
    };

    const nowList = typeMapList[typeId];
    return !!nowList[page];
  };

  const updateFetchStateCatch = (typeId: TypeId, pageTypeInfo: PageTypeInfo, typeMapList: Record<TypeId, NormalArticleInfo>) => {
    // 如果数据量太大就清除其他的数据
    const nowSize = JSON.stringify(Object.values(typeMapList).map((v) => v)).length;
    console.log(nowSize, 'nowSize');
  };

  const getArticleList = async (typeId: TypeId, page: number) => {
    // 如果已经请求过了就不再请求
    if (getArticleHas(typeId, page)) return;

    if (typeId === 0) {
      return getSelectArticleList(page);
    }

    const typeMapList = {
      1: technologyArticleList,
      2: lifeArticleList,
      3: questionArticleList,
      4: remarkArticleList,
    };

    const nowList = typeMapList[typeId];
    if (!nowList) return console.error('typeId is error');

    pageTypeInfo.pageLoading = true;
    const { code, data } = await service.getArticleList({ type_id: typeId, page, pageSize: 10, is_dfat: 0 });
    pageTypeInfo.pageLoading = false;
    if (code !== 200) return;
    nowList[page] = data.resList || [];
    pageTypeInfo.totalInfo = {
      ...pageTypeInfo.totalInfo,
      [typeId]: data.total,
    };
    updateFetchStateCatch(typeId, pageTypeInfo, typeMapList as Record<TypeId, NormalArticleInfo>);
    return data;
  };


  //
  watch(
    () => ({
      pageTypeInfo,
      selectArticleList,
      technologyArticleList,
      lifeArticleList,
      questionArticleList,
      remarkArticleList,
    }),
    (newVal) => {
      const typeMapList = {
        0: newVal.selectArticleList,
        1: newVal.technologyArticleList,
        2: newVal.lifeArticleList,
        3: newVal.questionArticleList,
        4: newVal.remarkArticleList,
      };

      const pageTypeInfo = newVal.pageTypeInfo;
      showArticleList.value = typeMapList[pageTypeInfo.typeId][pageTypeInfo.page] || [];
      currentPageTotal.value = pageTypeInfo.totalInfo[pageTypeInfo.typeId];
    },
    { deep: true }
  );

  //  精选的作为列表使用所以要单独处理
  return { currentPageTotal, baseState, selectArticleList, showArticleList, getTypeList, getSelectArticleList, getArticleList, setPageInfo, pageTypeInfo };
});
