import FetchClient from './FetchClient';

// 判断环境
const baseUrl = 
  import.meta.env.MODE === 'development' 
  ? `${location.protocol}//${location.hostname}:3000/v1/pc`
  : `${location.protocol}//${location.hostname}/api/v1/pc`;


const fetch = new FetchClient({
  baseUrl,
  timeout: 5000,
});


const service = {
  // ency 
  getEncy: () => fetch.getEncy(),
  // 获取文章类型
  getArticleType: () => fetch.get('/article_type'),
  // 获取文章列表
  getArticleList: (query: Record<string, any>) => fetch.get('/article_list', query),
  // 搜索文章列表
  getSearchArticleList: (query: Record<string, any>) => fetch.get('/search_article_list', query),
  // 获取文章详情
  getArticleDetail: (article_id: string | number) => fetch.get(`/article_detail/${article_id}`),
  // 获取文章评论列表
  getCommentList: (article_id: string | number, query: Record<string, any>) => fetch.get(`/comment_detail/${article_id}`, query),
  // 获取单个文章id的评论列表
  getArticleComment: (article_id: string | number) => fetch.get(`/article_comment_detail/${article_id}`),
  // 获取用户    喜欢列表 点赞文章 评论文章
  getUserLikeList: (query: Record<string, any>) => fetch.get(`/user_list`, query),
  // 获取文章更新信息
  getArticleCountInfo: () => fetch.get(`/article_count_info`),
  // 阅读数加1
  updateArticleReadCount: (article_id: string | number) => fetch.post(`/article_read_count_plus/${article_id}`),
  // 添加评论
  addComment: (article_id: string | number, data: Record<string, any>) => fetch.post(`/add_comment/${article_id}`, data),
};

export default service;
