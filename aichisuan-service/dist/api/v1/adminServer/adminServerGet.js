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
// 获取文章列表
router.get('/admin/article_list', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield tokenValidate(ctx)))
        return;
    // @ts-ignore
    const { article_id = '', type_id = 0, page = 1, pageSize = 10, article_title = '', article_content = '', create_time_start = '', create_time_end = '', update_time_start = '', update_time_end = '', is_dfat = '', } = ctx.request.query;
    const query = {
        create_time: {},
        update_time: {},
    };
    if (article_id) {
        query.article_id = Number(article_id);
    }
    if (type_id) {
        query.type_id = Number(type_id);
    }
    if (!['', null, undefined].includes(is_dfat)) {
        query.is_dfat = +is_dfat;
    }
    if (article_title) {
        query.article_title = {
            contains: article_title,
        };
    }
    if (article_content) {
        query.article_content = {
            contains: article_content,
        };
    }
    const createTime = {};
    const updateTime = {};
    if (create_time_start)
        createTime['gte'] = (0, utils_1.formatTimeQuery)(create_time_start);
    if (create_time_end)
        createTime['lte'] = (0, utils_1.formatTimeQuery)(create_time_end, true);
    if (update_time_start)
        updateTime['gte'] = (0, utils_1.formatTimeQuery)(update_time_start);
    if (update_time_end)
        updateTime['lte'] = (0, utils_1.formatTimeQuery)(update_time_end, true);
    query.create_time = createTime;
    query.update_time = updateTime;
    const { resList: res, total } = yield (0, prismaSql_1.getArticleList)(page, pageSize, query);
    ctx.body = {
        code: 200,
        data: res.map((r) => {
            const res = Object.assign(Object.assign({}, r), { create_time: (0, utils_1.formatTime)(r.create_time), update_time: r.update_time ? (0, utils_1.formatTime)(r.update_time) : null });
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
}));
// 获取文章详情
router.get('/admin/article_detail/:article_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield tokenValidate(ctx)))
        return;
    const { article_id } = ctx.params;
    const res = yield (0, prismaSql_1.getArticleDetail)(Number(article_id));
    ctx.body = {
        code: 200,
        data: res,
    };
}));
// 获取文章类型
router.get('/admin/article_type', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield tokenValidate(ctx)))
        return;
    const res = yield (0, prismaSql_1.getArticleType)();
    ctx.body = {
        code: 200,
        data: res,
    };
}));
// 获取文章评论列表
router.get('/admin/comment_list', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield tokenValidate(ctx)))
        return;
    const _a = ctx.request.query, { page = 1, pageSize = 10 } = _a, querySearch = __rest(_a, ["page", "pageSize"]);
    const createTime = {};
    const { create_time_start, create_time_end, comment_id, article_id, user_idp, status = '', parent_comment_id = '', is_admin = '' } = querySearch;
    if (create_time_start)
        createTime['gte'] = (0, utils_1.formatTimeQuery)(create_time_start);
    if (create_time_end)
        createTime['lte'] = (0, utils_1.formatTimeQuery)(create_time_end, true);
    const query = (0, utils_1.formatQuery)({
        is_admin,
        comment_id,
        article_id,
        user_idp,
        status,
        parent_comment_id,
    });
    const res = yield (0, prismaSql_1.getCommentList)(page, pageSize, query);
    ctx.body = {
        code: 200,
        data: res.commentList.map((r) => {
            return Object.assign(Object.assign({}, r), { create_time: (0, utils_1.formatTime)(r.create_time) });
        }),
        pageInfo: {
            page: +page,
            pageSize: +pageSize,
            total: res.total,
        },
    };
}));
// 获取文章单个评论列表
router.get('/admin/article_comment_detail/:article_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield tokenValidate(ctx)))
        return;
    const { article_id } = ctx.params;
    const res = yield (0, prismaSql_1.getCommentDetail)(Number(article_id));
    ctx.body = {
        code: 200,
        data: res,
    };
}));
// 获取用户喜欢列表  点赞评论，点赞文章
router.get('/admin/user_list', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    if (!(yield tokenValidate(ctx)))
        return;
    const { page = 1, pageSize = 10, query } = ctx.request.query;
    const { userList, total, } = yield (0, prismaSql_1.getUserListAdmin)(page, pageSize, query);
    ctx.body = {
        code: 200,
        data: userList,
        pageInfo: {
            page: +page,
            pageSize: +pageSize,
            total,
        },
    };
}));
// 删除用户喜欢列表  点赞评论，点赞文章 暂时不做
exports.default = router;
