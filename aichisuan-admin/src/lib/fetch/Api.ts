import FetchClient from './FetchClient';

// const baseUrl = 'http://localhost:3000/api/v1/admin';
const baseUrl = `${location.protocol}//${location.hostname}:3000/api/v1/admin`;

const fetch = new FetchClient({
  baseUrl,
  timeout: 5000,
});

const service = {
  // 登陆
  login: (body: Record<string, any>) => fetch.post('/login', body),
  // 退出登陆
  logout: () => fetch.post('/logout'),

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

  // 创建文章
  createArticle: (body: Record<string, any>) => fetch.post('/create_article', body),
  // 删除文章
  deleteArticle: (article_id: string | number | number) => fetch.delete(`/delete_article/${article_id}`),
  // 更新文章
  updateArticle: (article_id: string | number, body: Record<string, any>) => fetch.put(`/update_article/${article_id}`, body),
  // 删除评论
  deleteComment: (comment_id: string | number) => fetch.delete(`/delete_comment/${comment_id}`),
  // 更新评论
  updateComment: (comment_id: string | number, body: Record<string, any>) => fetch.put(`/update_comment/${comment_id}`, body),
  // 回复评论
  replyComment: (comment_id: string | number, body: Record<string, any>) => fetch.post(`/reply_comment/${comment_id}`, body),
  // 创建评论
  createComment: (body: Record<string, any>) => fetch.post(`/create_comment`, body),

  // 获取用户列表
  getUserList: (query: Record<string, any>) => fetch.get('/user_list', query),
};

export default service;
