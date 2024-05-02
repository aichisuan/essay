import Router from 'koa-router';
import Config from '../../../config/config';
import { getArticleDetail, getArticleList, getCommentDetail, getCommentList, getLikeListAdmin } from '../../../server/prismaSql';
import { ArticleType } from '../../../common/types';
import { tokenConfig, refreshVerifyToken } from '../../../common/lib/token';
import { Prisma } from '@prisma/client';

const router = new Router({
  prefix: `${Config.API_PREFIX}v1`,
});

const tokenValidate = async (ctx: any): Promise<boolean> => {
  const { authorization } = ctx.request.header;
  if (!authorization) {
    ctx.body = {
      code: 1001,
      message: '请登录',
    };
    return false;
  }
  // access_token 和 refresh_token 用 ' ' 分割
  const refreshToken = authorization.split(' ')[1];
  const res = await refreshVerifyToken(refreshToken, tokenConfig.refreshTokenSecret);
  if (!res) {
    ctx.body = {
      code: 1001,
      message: '请登录',
    };
    return false;
  }
  return true;
};

// 获取文章列表
router.get('/admin/article_list', async (ctx, next) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
  const { type_id, page = 1, pageSize = 10 } = ctx.request.query as unknown as { type_id: ArticleType; page: number; pageSize: number };
  const query = type_id ? { type_id: Number(type_id) } : {};
  const res = await getArticleList(page, pageSize, query);
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取文章详情
router.get('/admin/article_detail', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
  const { article_id } = ctx.request.query as { article_id: string };
  const res = await getArticleDetail(Number(article_id));
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取文章评论列表
router.get('/admin/comment_list', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
  const { page = 1, pageSize = 10, query } = ctx.request.query as unknown as { page: number; pageSize: number; query: Prisma.user_commentsWhereInput };
  const res = await getCommentList(page, pageSize, query);
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取文章单个评论列表
router.get('/admin/commentDetail', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
  const { article_id } = ctx.request.query as { article_id: string };
  const res = await getCommentDetail(Number(article_id));
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取用户喜欢列表  点赞评论，点赞文章
router.get('/admin/like_list', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
  const { page = 1, pageSize = 10, query } = ctx.request.query as unknown as { page: number; pageSize: number; query: Prisma.user_like_listWhereInput };
  const res = await getLikeListAdmin(page, pageSize, query);
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 删除用户喜欢列表  点赞评论，点赞文章 暂时不做

export default router;
