import Router from 'koa-router';
import Config from '../../../config/config';
import { createArticle, deleteArticle, deleteComment, getAdminUser, updateArticle } from '../../../server/prismaSql';
import { tokenConfig, addToken, refreshVerifyToken } from '../../../common/lib/token';
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

// admin 登录
router.post('/admin/login', async (ctx) => {
  const { user_name, user_password } = ctx.request.body as { user_name: string; user_password: string };
  const res = await getAdminUser(user_name, user_password);
  if (res && res.length === 1) {
    const access_token = addToken(res[0].user_id, tokenConfig.secret, tokenConfig.tokenLife);
    const refresh_token = addToken(res[0].user_id, tokenConfig.refreshTokenSecret, tokenConfig.refreshTokenLife);
    ctx.body = {
      code: 200,
      data: {
        access_token,
        refresh_token,
        user_name: res[0].user_name,
      },
    };
  } else {
    ctx.body = {
      code: 404,
      message: '用户名或密码错误',
    };
  }
});

// 退出登录
router.post('/admin/logout', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
  ctx.body = {
    code: 200,
    data: {
      msg: 'success',
    },
  };
});

// 创建文章
router.post('/admin/create_article', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
  const data = ctx.request.body as Prisma.mj_articlesCreateInput;
  const res = await createArticle(data);
  if (!res) throw Error('创建文章失败');
  ctx.body = {
    code: 200,
    data: {
      msg: 'success',
    },
  };
});

// 删除文章
router.post('/admin/delete_article', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
  const { article_id } = ctx.request.body as { article_id: string };
  const res = await deleteArticle(Number(article_id));
  if (!res) throw Error('删除文章失败');
  ctx.body = {
    code: 200,
    data: {
      msg: 'success',
    },
  };
});

// 更新文章
router.post('/admin/update_article', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
  const { article_id, ...data } = ctx.request.body as { article_id: string };
  const res = await updateArticle(Number(article_id), data);
  if (!res) throw Error('更新文章失败');
  ctx.body = {
    code: 200,
    data: {
      msg: 'success',
    },
  };
});

// 删除评论
router.post('/admin/delete_comment', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
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
router.post('/admin/reply_comment', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
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
router.post('/admin/create_comment', async (ctx) => {
  // token 验证 >>>>>>
  // if(!(await tokenValidate(ctx))) return;
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

export default router;
