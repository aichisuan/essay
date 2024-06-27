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
const router = new koa_router_1.default({
    prefix: `${config_1.default.API_PREFIX}v1`,
});
// 获取文章类型
router.get('/pc/article_type', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield (0, prismaSql_1.getArticleType)();
    ctx.body = {
        code: 200,
        data: res,
    };
}));
router.get('/pc/article_count_info', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    // 获取文章总数 获取本月创建文章数 获取本周创建文章数
    const { total, month, week } = yield (0, prismaSql_1.getArticleCountInfo)();
    ctx.body = {
        code: 200,
        data: {
            total,
            month,
            week,
        },
    };
}));
// 获取文章列表
router.get('/pc/article_list', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { type_id, page = 1, pageSize = 10, weightGt, weightGte, weightLt, weightLte, article_content = '', isSelect = false, } = ctx.request.query;
    const query = type_id ? { type_id: Number(type_id) } : {};
    const weightMap = {
        weightGt: 'gt',
        weightGte: 'gte',
        weightLt: 'lt',
        weightLte: 'lte',
    };
    // gte10 是精品文章
    if (weightGt)
        query.article_weight = { [weightMap.weightGt]: Number(weightGt) };
    if (weightGte)
        query.article_weight = { [weightMap.weightGte]: Number(weightGte) };
    if (weightLt)
        query.article_weight = { [weightMap.weightLt]: Number(weightLt) };
    if (weightLte)
        query.article_weight = { [weightMap.weightLte]: Number(weightLte) };
    if (article_content)
        query.article_content = { contains: article_content };
    const orderBy = isSelect ? { article_weight: 'desc' } : { create_time: 'desc' };
    const res = yield (0, prismaSql_1.getArticleList)(page, pageSize, query, orderBy);
    ctx.body = {
        code: 200,
        data: Object.assign(Object.assign({}, res), { resList: res.resList.map((item) => {
                const reItem = Object.assign({}, item);
                if (reItem === null || reItem === void 0 ? void 0 : reItem.article_content)
                    delete reItem.article_content;
                return reItem;
            }) }),
    };
}));
// 搜索文章
router.get('/pc/search_article_list', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { search_content, page = 1, pageSize = 10 } = ctx.request.query;
    const res = yield (0, prismaSql_1.getArticleSearchList)(+page, +pageSize, search_content);
    ctx.body = {
        code: 200,
        data: Object.assign({}, res),
    };
}));
// 获取文章详情
router.get('/pc/article_detail/:article_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { article_id } = ctx.params;
    const res = yield (0, prismaSql_1.getArticleDetail)(Number(article_id));
    ctx.body = {
        code: 200,
        data: res,
    };
}));
// 获取某个文章评论列表
router.get('/pc/comment_detail/:article_id', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const { article_id } = ctx.params;
    const { status } = ctx.request.query;
    const res = yield (0, prismaSql_1.getCommentDetail)(Number(article_id), { status: Number(status) });
    ctx.body = {
        code: 200,
        data: res,
    };
}));
// 获取某个用户的喜欢点赞列表
router.get('/pc/user_touch_list', (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    const user_idp = (0, getIpd_1.default)(ctx);
    const res = yield (0, prismaSql_1.getUserPcUnique)(user_idp);
    ctx.body = {
        code: 200,
        data: res,
    };
}));
exports.default = router;
