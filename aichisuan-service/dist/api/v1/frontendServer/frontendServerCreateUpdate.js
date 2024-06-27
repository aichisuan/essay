"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const config_1 = __importDefault(require("../../../config/config"));
const prismaSql_1 = require("../../../server/prismaSql");
const getIpd_1 = __importDefault(require("../../../common/lib/getIpd"));
const utils_1 = require("../../../common/utils");
const router = new koa_router_1.default({
    prefix: `${config_1.default.API_PREFIX}v1`,
});
// 删除评论  只能删除自己评论的评论 pc端判断
router.post('/pc/delete_comment', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { comment_id } = ctx.request.body;
    const res = yield (0, prismaSql_1.deleteComment)(Number(comment_id));
    if (!res)
        throw Error('删除评论失败');
    ctx.body = {
        code: 200,
        data: {
            msg: 'success',
        },
    };
}));
// 回复评论
router.post('/pc/reply_comment', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { comment_id, data } = ctx.request.body;
    const res = yield (0, prismaSql_1.updateArticle)(Number(comment_id), data);
    if (!res)
        throw Error('回复评论失败');
    ctx.body = {
        code: 200,
        data: {
            msg: 'success',
        },
    };
}));
// 创建评论
// router.post('/pc/create_comment', async (ctx) => {
//   const data = ctx.request.body as Prisma.user_commentsCreateInput;
//   const res = await updateArticle(Number(data.article_id), data);
//   if (!res) throw Error('创建评论失败');
//   ctx.body = {
//     code: 200,
//     data: {
//       msg: 'success',
//     },
//   };
// });
// 增加访问记录
router.post('/pc/add_visit', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { article_id } = ctx.request.body;
    const res = yield (0, prismaSql_1.updateArticle)(Number(article_id), { article_read_count: { increment: 1 } });
    if (!res)
        throw Error('增加访问记录失败');
    ctx.body = {
        code: 200,
        data: {
            msg: 'success',
        },
    };
}));
// 点赞/取消点赞  文章 pc端使用节流
router.post('/pc/like_article', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const user_idp = (0, getIpd_1.default)(ctx);
    const { article_id, figure } = ctx.request.body;
    const userLikeList = yield (0, prismaSql_1.getUserPcUnique)(user_idp);
    if (userLikeList === undefined)
        return; // sql查询失败
    const isNewUser = userLikeList ? false : true;
    if (isNewUser) {
        yield (0, prismaSql_1.createArticleLike)(Number(article_id), {
            user_idp,
            like_article_ids: [article_id],
            like_comment_ids: [],
        });
    }
    else {
        const { like_article_ids } = userLikeList;
        const ids = JSON.parse(like_article_ids);
        const index = ids.findIndex((id) => id === Number(article_id));
        // 点赞数据库没有
        if (figure === 1 && index === -1)
            ids.push(Number(article_id));
        // 取消点赞数据库有
        if (figure === -1 && index !== -1)
            ids.splice(index, 1);
        yield (0, prismaSql_1.updateArticleLike)(Number(article_id), user_idp, figure, {
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
}));
// 点赞/取消点赞 评论 pc端使用节流
router.post('/pc/like_comment', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const user_idp = (0, getIpd_1.default)(ctx);
    const { comment_id, figure } = ctx.request.body;
    const userLikeList = yield (0, prismaSql_1.getUserPcUnique)(user_idp);
    if (userLikeList === undefined)
        return; // sql查询失败
    const isNewUser = userLikeList ? false : true;
    if (isNewUser) {
        yield (0, prismaSql_1.createCommentLike)(Number(comment_id), {
            user_idp,
            like_article_ids: [],
            like_comment_ids: [comment_id],
        });
    }
    else {
        const { like_comment_ids } = userLikeList;
        const ids = JSON.parse(like_comment_ids);
        const index = ids.findIndex((id) => id === Number(comment_id));
        // 点赞数据库没有
        if (figure === 1 && index === -1)
            ids.push(Number(comment_id));
        // 取消点赞数据库有
        if (figure === -1 && index !== -1)
            ids.splice(index, 1);
        yield (0, prismaSql_1.updateArticleLike)(Number(comment_id), user_idp, figure, {
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
}));
// 文章阅读数加1
router.post('/pc/article_read_count_plus/:article_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { article_id } = ctx.params;
    // 这里无论对错都不影响返回
    yield (0, prismaSql_1.updateArticleReadCount)(+article_id);
    ctx.body = {
        code: 200,
        message: 'ok',
    };
}));
// 增加评论
router.post('/pc/add_comment/:article_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { article_id } = ctx.params;
    const { comment_content, parent_comment_id, comment_email, short_time_name, status } = ctx.request.body;
    // 这里无论对错都不影响返回
    const user_idp = (0, getIpd_1.default)(ctx);
    const res = yield (0, prismaSql_1.createComment)({
        article_id: +article_id,
        comment_content,
        parent_comment_id,
        comment_email,
        short_time_name,
        user_idp,
        create_time: (0, utils_1.formatTimeQuery)(new Date()),
        status: status || 2,
    });
    if (!res)
        throw Error('增加评论失败');
    ctx.body = {
        code: 200,
        message: 'ok',
    };
}));
exports.default = router;
