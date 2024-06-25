import Router from 'koa-router';
import Config from '../../../config/config';
import { createArticleLike, createComment, createCommentLike, deleteComment, getUserPcUnique, prisma, updateArticle, updateArticleLike, updateArticleReadCount } from '../../../server/prismaSql';
import { Prisma } from '@prisma/client';
import { IncOrDec } from '../../../common/types';
import getIpd from '../../../common/lib/getIpd';
import { formatTimeQuery } from '../../../common/utils';

const router = new Router({
  prefix: `${Config.API_PREFIX}v1`,
});

// 删除评论  只能删除自己评论的评论 pc端判断
router.post('/pc/delete_comment', async (ctx) => {
  const { comment_id } = ctx.request.body as { comment_id: string };
  const res = await deleteComment(Number(comment_id));
  if (!res) throw Error('删除评论失败');
  ctx.body = {
    code: 200,
    data: {
      msg: 'success',
    },
  };
});

// 回复评论
router.post('/pc/reply_comment', async (ctx) => {
  const { comment_id, data } = ctx.request.body as { comment_id: string; data: Prisma.user_commentsCreateInput };
  const res = await updateArticle(Number(comment_id), data);
  if (!res) throw Error('回复评论失败');
  ctx.body = {
    code: 200,
    data: {
      msg: 'success',
    },
  };
});

// 创建评论
router.post('/pc/create_comment', async (ctx) => {
  const data = ctx.request.body as Prisma.user_commentsCreateInput;
  const res = await updateArticle(Number(data.article_id), data);
  if (!res) throw Error('创建评论失败');
  ctx.body = {
    code: 200,
    data: {
      msg: 'success',
    },
  };
});

// 增加访问记录
router.post('/pc/add_visit', async (ctx) => {
  const { article_id } = ctx.request.body as { article_id: string };
  const res = await updateArticle(Number(article_id), { article_read_count: { increment: 1 } });
  if (!res) throw Error('增加访问记录失败');
  ctx.body = {
    code: 200,
    data: {
      msg: 'success',
    },
  };
});

// 点赞/取消点赞  文章 pc端使用节流
router.post('/pc/like_article', async (ctx) => {
  const user_idp = getIpd(ctx);
  const { article_id, figure } = ctx.request.body as { article_id: string; figure: IncOrDec; };

  const userLikeList = await getUserPcUnique(user_idp);

  if (userLikeList === undefined) return; // sql查询失败

  const isNewUser = userLikeList ? false : true;

  if (isNewUser) {
    await createArticleLike(Number(article_id), {
      user_idp,
      like_article_ids: [article_id],
      like_comment_ids: [],
    });
  } else {
    const { like_article_ids } = userLikeList!;

    const ids = JSON.parse(like_article_ids as string) as number[];

    const index = ids.findIndex((id) => id === Number(article_id));
    // 点赞数据库没有
    if (figure === 1 && index === -1) ids.push(Number(article_id));
    // 取消点赞数据库有
    if (figure === -1 && index !== -1) ids.splice(index, 1);

    await updateArticleLike(Number(article_id), user_idp, figure, {
      user_idp,
      like_article_ids: JSON.stringify(ids),
    });
  }
  ctx.body = {
    code: 200,
    data: {
      msg: 'success',
    },
  };
});

// 点赞/取消点赞 评论 pc端使用节流
router.post('/pc/like_comment', async (ctx) => {
  const user_idp = getIpd(ctx);
  const { comment_id, figure } = ctx.request.body as { comment_id: string; figure: IncOrDec; };

  const userLikeList = await getUserPcUnique(user_idp);

  if (userLikeList === undefined) return; // sql查询失败

  const isNewUser = userLikeList ? false : true;

  if (isNewUser) {
    await createCommentLike(Number(comment_id), {
      user_idp,
      like_article_ids: [],
      like_comment_ids: [comment_id],
    });
  } else {
    const { like_comment_ids } = userLikeList!;

    const ids = JSON.parse(like_comment_ids as string) as number[];

    const index = ids.findIndex((id) => id === Number(comment_id));
    // 点赞数据库没有
    if (figure === 1 && index === -1) ids.push(Number(comment_id));
    // 取消点赞数据库有
    if (figure === -1 && index !== -1) ids.splice(index, 1);

    await updateArticleLike(Number(comment_id), user_idp, figure, {
      user_idp,
      like_comment_ids: JSON.stringify(ids),
    });
  }
  ctx.body = {
    code: 200,
    data: {
      msg: 'success',
    },
  };
});


// 文章阅读数加1
router.post('/pc/article_read_count_plus/:article_id', async (ctx) => {
  const { article_id } = ctx.params as { article_id: string };
  // 这里无论对错都不影响返回
  await updateArticleReadCount(+article_id);
  ctx.body = {
    code: 200,
    message: 'ok',
  };
});

// 增加评论
router.post('/pc/add_comment/:article_id', async (ctx) => {
  const { article_id } = ctx.params as { article_id: string };
  const { comment_content, parent_comment_id, comment_email, short_time_name } = ctx.request.body as Prisma.user_commentsCreateInput;
  // 这里无论对错都不影响返回
  const user_idp = getIpd(ctx);
  const res = await createComment({
    article_id: +article_id,
    comment_content,
    parent_comment_id,
    comment_email,
    short_time_name,
    user_idp,
    create_time: formatTimeQuery(new Date())
  });
  if (!res) throw Error('增加评论失败');
  ctx.body = {
    code: 200,
    message: 'ok',
  };
});

export default router;
