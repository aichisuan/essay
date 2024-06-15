import FetchClient from './FetchClient';

const baseUrl = 'http://localhost:3000/api/v1/pc';

const fetch = new FetchClient({
  baseUrl,
  timeout: 5000,
});

const service = {

  // 获取文章类型
  getArticleType: () => fetch.get('/article_type'),
  // 获取文章列表
  getArticleList: (query: Record<string, any>) => fetch.get('/article_list', query),
  // 获取文章详情
  getArticleDetail: (article_id: string | number) => fetch.get(`/article_detail/${article_id}`),
  // 获取文章评论列表
  getCommentList: (query: Record<string, any>) => fetch.get(`/comment_list`, query),
  // 获取单个文章id的评论列表
  getArticleComment: (article_id: string | number) => fetch.get(`/article_comment_detail/${article_id}`),
  // 获取用户    喜欢列表 点赞文章 评论文章
  getUserLikeList: (query: Record<string, any>) => fetch.get(`/user_list`, query),
  // 获取文章更新信息
  getArticleCountInfo: () => fetch.get(`/article_count_info`),
};

export default service;
