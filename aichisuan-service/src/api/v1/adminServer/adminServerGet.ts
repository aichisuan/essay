import Router from 'koa-router';
import Config from '../../../config/config';
import { getArticleDetail, getArticleList, getArticleType, getCommentDetail, getCommentList, getUserListAdmin } from '../../../server/prismaSql';
import { tokenConfig, refreshVerifyToken } from '../../../common/lib/token';
import { Prisma } from '@prisma/client';
import { formatQuery, formatTime, formatTimeQuery } from '../../../common/utils';

type Queryother = {
  create_time_start?: string;
  create_time_end?: string;
  update_time_start?: string;
  update_time_end?: string;
};

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
router.get('/admin/article_list', async (ctx) => {
  if (!(await tokenValidate(ctx))) return;
  // @ts-ignore
  const {
    article_id = '',
    type_id = 0,
    page = 1,
    pageSize = 10,
    article_title = '',
    article_content = '',
    create_time_start = '',
    create_time_end = '',
    update_time_start = '',
    update_time_end = '',
    is_dfat = '',
  } = ctx.request.query as unknown as any;
  const query: Prisma.mj_articlesWhereInput = {
    create_time: {},
    update_time: {},
  };
  if (article_id) {
    query.article_id = Number(article_id) as number;
  }

  if (type_id) {
    query.type_id = Number(type_id) as number;
  }
  if (!['', null, undefined].includes(is_dfat)) {
    query.is_dfat = +is_dfat;
  }
  if (article_title) {
    query.article_title = {
      contains: article_title as string,
    };
  }
  if (article_content) {
    query.article_content = {
      contains: article_content as string,
    };
  }
  const createTime: any = {};
  const updateTime: any = {};
  if (create_time_start) createTime['gte'] = formatTimeQuery(create_time_start);
  if (create_time_end) createTime['lte'] = formatTimeQuery(create_time_end, true);
  if (update_time_start) updateTime['gte'] = formatTimeQuery(update_time_start);
  if (update_time_end) updateTime['lte'] = formatTimeQuery(update_time_end, true);

  query.create_time = createTime;
  query.update_time = updateTime;


  const { resList: res, total } = await getArticleList(page, pageSize, query);
  ctx.body = {
    code: 200,
    data: res.map((r) => {
      const res: any = {
        ...r,
        create_time: formatTime(r.create_time),
        update_time: r.update_time ? formatTime(r.update_time) : null,
      };
      if (res.article_content) {
        delete res.article_content;
      }
      return res;
    }),
    pageInfo: {
      page: +page,
      pageSize: +pageSize,
      total,
    },
  };
});

// 获取文章详情
router.get('/admin/article_detail/:article_id', async (ctx) => {
  if (!(await tokenValidate(ctx))) return;
  const { article_id } = ctx.params as { article_id: string };
  const res = await getArticleDetail(Number(article_id));
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取文章类型
router.get('/admin/article_type', async (ctx) => {
  if (!(await tokenValidate(ctx))) return;
  const res = await getArticleType();
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取文章评论列表
router.get('/admin/comment_list', async (ctx) => {
  if (!(await tokenValidate(ctx))) return;
  const { page = 1, pageSize = 10, ...querySearch } = ctx.request.query as unknown as { page: number; pageSize: number } & Prisma.user_commentsWhereInput & Queryother;
  const createTime: any = {};
  const { create_time_start, create_time_end, comment_id, article_id, user_idp, status = '', parent_comment_id = '', is_admin='' } = querySearch;
  if (create_time_start) createTime['gte'] = formatTimeQuery(create_time_start);
  if (create_time_end) createTime['lte'] = formatTimeQuery(create_time_end, true);

  const query: Prisma.user_commentsWhereInput = formatQuery({
    is_admin,
    comment_id,
    article_id,
    user_idp,
    status,
    parent_comment_id,
  });

  const res = await getCommentList(page, pageSize, query);
  ctx.body = {
    code: 200,
    data: res.commentList.map((r) => {
      return {
        ...r,
        create_time: formatTime(r.create_time),
      };
    }),
    pageInfo: {
      page: +page,
      pageSize: +pageSize,
      total: res.total,
    },
  };
});

// 获取文章单个评论列表
router.get('/admin/article_comment_detail/:article_id', async (ctx) => {
  if (!(await tokenValidate(ctx))) return;
  const { article_id } = ctx.params as { article_id: string };
  const res = await getCommentDetail(Number(article_id));
  ctx.body = {
    code: 200,
    data: res,
  };
});

// 获取用户喜欢列表  点赞评论，点赞文章
router.get('/admin/user_list', async (ctx) => {
  if (!(await tokenValidate(ctx))) return;
  const { page = 1, pageSize = 10, query } = ctx.request.query as unknown as { page: number; pageSize: number; query: Prisma.pc_usersWhereInput };
  const {
    userList,
    total,
  } = await getUserListAdmin(page, pageSize, query);
  ctx.body = {
    code: 200,
    data: userList,
    pageInfo: {
      page: +page,
      pageSize: +pageSize,
      total,
    },
  };
});

// 删除用户喜欢列表  点赞评论，点赞文章 暂时不做

export default router;
