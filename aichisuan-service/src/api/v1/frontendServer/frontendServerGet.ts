import Router from 'koa-router';
import Config from '../../../config/config';
import { ArticleQuery, getArticleDetail, getArticleList, getArticleType, getCommentDetail, getCommentList, getUserPcUnique } from '../../../server/prismaSql';
import { WeightQuery } from '../../../common/types';
import getIpd from '../../../common/lib/getIpd';
import { Prisma } from '@prisma/client';

const router = new Router({
  prefix: `${Config.API_PREFIX}v1`,
});

// 获取文章类型
router.get('/pc/article_type', async (ctx) => {
  const res = await getArticleType();
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取文章列表
router.get('/pc/article_list', async (ctx) => {
  const { type_id, page = 1, pageSize = 10, wightGt, wightGte, wightLt, wightLte, article_content = '' } = ctx.request.query as unknown as  Prisma.mj_articlesWhereInput & ArticleQuery & WeightQuery;
  const query:any = type_id ? { type_id: Number(type_id) } : {};
  const wightMap = {
    wightGt: 'gt',
    wightGte: 'gte',
    wightLt: 'lt',
    wightLte: 'lte',
  };
  // gte10 是精品文章

  if (wightGt) query.article_weight = { [wightMap.wightGt]: Number(wightGt) };
  if (wightGte) query.article_weight = { [wightMap.wightGte]: Number(wightGte) };
  if (wightLt) query.article_weight = { [wightMap.wightLt]: Number(wightLt) };
  if (wightLte) query.article_weight = { [wightMap.wightLte]: Number(wightLte) };
  
  if (article_content) query.article_content = { contains: article_content };

  const res = await getArticleList(page, pageSize, query);
  ctx.body = {
    code: 200,
    data: {
      ...res,
      resList: res.resList.map((item) => {
        const reItem:any = { ...item }
        if (reItem?.article_content) delete reItem.article_content;
        return reItem;
      })
    }
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
