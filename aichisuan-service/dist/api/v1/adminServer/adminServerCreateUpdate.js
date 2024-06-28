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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_router_1 = __importDefault(require("koa-router"));
const config_1 = __importDefault(require("../../../config/config"));
const prismaSql_1 = require("../../../server/prismaSql");
const token_1 = require("../../../common/lib/token");
const utils_1 = require("../../../common/utils");
const router = new koa_router_1.default({
    prefix: `${config_1.default.API_PREFIX}v1`,
});
const tokenValidate = (ctx) => __awaiter(void 0, void 0, void 0, function* () {
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
    const res = yield (0, token_1.refreshVerifyToken)(refreshToken, token_1.tokenConfig.refreshTokenSecret);
    if (!res) {
        ctx.body = {
            code: 1001,
            message: '请登录',
        };
        return false;
    }
    return true;
});
// admin 登录
router.post('/admin/login', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { user_name, user_password } = ctx.request.body;
    const res = yield (0, prismaSql_1.getAdminUser)(user_name, user_password);
    if (res && res.length === 1) {
        const access_token = (0, token_1.addToken)(res[0].user_id, token_1.tokenConfig.secret, token_1.tokenConfig.tokenLife);
        const refresh_token = (0, token_1.addToken)(res[0].user_id, token_1.tokenConfig.refreshTokenSecret, token_1.tokenConfig.refreshTokenLife);
        ctx.body = {
            code: 200,
            data: {
                access_token,
                refresh_token,
                user_id: res[0].user_id,
                user_name: res[0].user_name,
                // @ts-ignore
                user_avatar: res[0].user_avatar,
                administration_id: res[0].administration_id,
            },
        };
    }
    else {
        ctx.body = {
            code: 404,
            message: '用户名或密码错误',
        };
    }
}));
// 退出登录
router.post('/admin/logout', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // token 验证
    if (!(yield tokenValidate(ctx)))
        return;
    ctx.body = {
        code: 200,
        data: {
            msg: 'success',
        },
    };
}));
// 创建文章
router.post('/admin/create_article', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // token 验证
    if (!(yield tokenValidate(ctx)))
        return;
    const data = ctx.request.body;
    const body = Object.assign(Object.assign({}, data), { create_time: (0, utils_1.formatTimeQuery)(data.create_time), update_time: data.update_time ? (0, utils_1.formatTimeQuery)(data.update_time) : null });
    const res = yield (0, prismaSql_1.createArticle)(body);
    if (!res)
        throw Error('创建文章失败');
    ctx.body = {
        code: 200,
        data: {
            msg: 'success',
            article_id: res.article_id,
        },
    };
}));
// 删除文章
router.delete('/admin/delete_article/:article_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // token 验证
    if (!(yield tokenValidate(ctx)))
        return;
    const { article_id } = ctx.params;
    const res = yield (0, prismaSql_1.deleteArticle)(Number(article_id));
    if (!res)
        throw Error('删除文章失败');
    ctx.body = {
        code: 200,
        data: {
            msg: 'success',
        },
    };
}));
// 更新文章
router.put('/admin/update_article/:article_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // token 验证
    if (!(yield tokenValidate(ctx)))
        return;
    const { article_id } = ctx.params;
    const data = __rest(ctx.request.body, []);
    const body = Object.assign(Object.assign({}, data), { create_time: (0, utils_1.formatTimeQuery)(data.create_time), update_time: data.update_time ? (0, utils_1.formatTimeQuery)(data.update_time) : null });
    const res = yield (0, prismaSql_1.updateArticle)(Number(article_id), body);
    if (!res)
        throw Error('更新文章失败');
    ctx.body = {
        code: 200,
        data: {
            msg: 'success',
        },
    };
}));
// 删除评论
router.post('/admin/delete_comment/:comment_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // token 验证
    if (!(yield tokenValidate(ctx)))
        return;
    const { comment_id } = ctx.params;
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
// 更新评论
router.put('/admin/update_comment/:comment_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // token 验证
    if (!(yield tokenValidate(ctx)))
        return;
    const { comment_id } = ctx.params;
    const data = __rest(ctx.request.body, []);
    const res = yield (0, prismaSql_1.updateComment)(Number(comment_id), data);
    if (!res)
        throw Error('更新评论失败');
    ctx.body = {
        code: 200,
        data: {
            msg: 'success',
        },
    };
}));
// 回复评论
router.post('/admin/reply_comment/:comment_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // token 验证
    if (!(yield tokenValidate(ctx)))
        return;
    const { comment_id } = ctx.params;
    const data = __rest(ctx.request.body, []);
    const res = yield (0, prismaSql_1.replyComment)(Number(comment_id), Object.assign(Object.assign({}, data), { create_time: (0, utils_1.formatTimeQuery)(data.create_time) }));
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
router.post('/admin/create_comment', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // token 验证
    if (!(yield tokenValidate(ctx)))
        return;
    const data = ctx.request.body;
    const res = yield (0, prismaSql_1.createComment)(data);
    if (!res)
        throw Error('创建评论失败');
    ctx.body = {
        code: 200,
        data: {
            msg: 'success',
        },
    };
}));
exports.default = router;
