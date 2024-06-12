import Router from 'koa-router';
import Config from '../../../config/config';
import { getArticleDetail, getArticleList, getCommentDetail, getCommentList, getUserPcUnique } from '../../../server/prismaSql';
import { ArticleType } from '../../../common/types';
import getIpd from '../../../common/lib/getIpd';

const router = new Router({
  prefix: `${Config.API_PREFIX}v1`,
});

// 获取文章列表
router.get('/pc/article_list', async (ctx) => {
  const { type_id, page = 1, pageSize = 10 } = ctx.request.query as unknown as { type_id: ArticleType; page: number; pageSize: number };
  const query = type_id ? { type_id: Number(type_id) } : {};
  const res = await getArticleList(page, pageSize, query);
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取文章详情
router.get('/pc/article_detail', async (ctx) => {
  const { article_id } = ctx.request.query as { article_id: string };
  const res = await getArticleDetail(Number(article_id));
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取某个文章评论列表
router.get('/pc/comment_detail', async (ctx) => {
  const { article_id } = ctx.request.query as { article_id: string };
  const res = await getCommentDetail(Number(article_id));
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取某个用户的喜欢点赞列表
router.get('/pc/user_touch_list', async (ctx) => {
  const user_idp = getIpd(ctx);
  const res = await getUserPcUnique(user_idp);
  ctx.body = {
    code: 200,
    data: res,
  };
});

export default router;
