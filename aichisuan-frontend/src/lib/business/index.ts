import type { ArticleListEn } from '../commonType/article';
// 主页 精选 技术 生活 其他

type LinkItem =  {
  name: string,
  path: string,
  id: number,
  icon: string,
  dataKey?: ArticleListEn,
}

export const linkList: LinkItem[] = [
  {
    name: '主页',
    path: '/',
    id: -1,
    icon: 'el-icon-s-home',
  },
  {
    name: '精选',
    path: '/selected',
    id: 0,
    icon: 'el-icon-s-data',
    dataKey: 'selectArticleList' as ArticleListEn,
  },
  {
    name: '技术',
    path: '/technology',
    id: 1,
    icon: 'el-icon-s-tools',
    dataKey: 'technologyArticleList' as ArticleListEn,
  },
  {
    name: '生活',
    path: '/life',
    id: 2,
    icon: 'el-icon-s-opportunity',
    dataKey: 'lifeArticleList' as ArticleListEn,
  },
  {
    name: '问答',
    path: '/question',
    id: 3,
    icon: 'el-icon-s-comment',
    dataKey: 'questionArticleList' as ArticleListEn,
  },
  {
    name: '其他',
    path: '/remark',
    id: 4,
    icon: 'el-icon-s-order',
    dataKey: 'remarkArticleList' as ArticleListEn,
  },
];


export const typeEnMap = {
  0: 'select',
  1: 'technology',
  2: 'life',
  3: 'question',
  4: 'remark',
};