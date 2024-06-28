import Router from 'koa-router';
import Config from '../../../config/config';
import { ArticleQuery, getArticleDetail, getArticleList, getArticleType, getCommentDetail, getUserPcUnique, getArticleCountInfo, getArticleSearchList } from '../../../server/prismaSql';
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

router.get('/pc/article_count_info', async (ctx) => {
  // 获取文章总数 获取本月创建文章数 获取本周创建文章数
  const { total, month, week } = await getArticleCountInfo();

  ctx.body = {
    code: 200,
    data: {
      total,
      month,
      week,
    },
  };
});

// 获取文章列表
router.get('/pc/article_list', async (ctx) => {
  const {
    type_id,
    page = 1,
    pageSize = 10,
    weightGt,
    weightGte,
    weightLt,
    weightLte,
    article_content = '',
    isSelect = false,
    is_dfat = '',
  } = ctx.request.query as unknown as Prisma.mj_articlesWhereInput & ArticleQuery & WeightQuery;
  const query: any = type_id ? { type_id: Number(type_id) } : {};
  if (!['', null, undefined].includes(is_dfat as string)) {
    query.is_dfat = +is_dfat;
  }
  const weightMap = {
    weightGt: 'gt',
    weightGte: 'gte',
    weightLt: 'lt',
    weightLte: 'lte',
  };
  // gte10 是精品文章

  if (weightGt) query.article_weight = { [weightMap.weightGt]: Number(weightGt) };
  if (weightGte) query.article_weight = { [weightMap.weightGte]: Number(weightGte) };
  if (weightLt) query.article_weight = { [weightMap.weightLt]: Number(weightLt) };
  if (weightLte) query.article_weight = { [weightMap.weightLte]: Number(weightLte) };

  if (article_content) query.article_content = { contains: article_content };

  const orderBy = isSelect ? { article_weight: 'desc' } : { create_time: 'desc' };

  const res = await getArticleList(page, pageSize, query, orderBy);
  ctx.body = {
    code: 200,
    data: {
      ...res,
      resList: res.resList.map((item) => {
        const reItem: any = { ...item };
        if (reItem?.article_content) delete reItem.article_content;
        return reItem;
      }),
    },
  };
});

// 搜索文章
router.get('/pc/search_article_list', async (ctx) => {
  const { search_content, page = 1, pageSize = 10 } = ctx.request.query as { search_content: string; page: string; pageSize: string };
  const res = await getArticleSearchList(+page, +pageSize, search_content);
  ctx.body = {
    code: 200,
    data: {
      ...res,
    },
  };
});

// 获取文章详情
router.get('/pc/article_detail/:article_id', async (ctx) => {
  const { article_id } = ctx.params as { article_id: string };
  const res = await getArticleDetail(Number(article_id));
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取某个文章评论列表
router.get('/pc/comment_detail/:article_id', async (ctx) => {
  const { article_id } = ctx.params as { article_id: string };
  const { status } = ctx.request.query as { status: string };
  const res = await getCommentDetail(Number(article_id), { status: Number(status) });
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
