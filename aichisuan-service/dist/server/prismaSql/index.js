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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArticleCountInfo = exports.updateCommentLike = exports.createCommentLike = exports.updateArticleLike = exports.createArticleLike = exports.getUserListAdmin = exports.getUserPcUnique = exports.updateComment = exports.replyComment = exports.createComment = exports.deleteComment = exports.getCommentDetail = exports.getCommentList = exports.deleteArticle = exports.updateArticleReadCount = exports.updateArticle = exports.createArticle = exports.getArticleDetail = exports.getArticleSearchList = exports.getArticleList = exports.getArticleType = exports.getAdminUser = exports.prisma = void 0;
const client_1 = require("@prisma/client");
const utils_1 = require("../../common/utils");
exports.prisma = new client_1.PrismaClient();
// 获取 管理后台用户，用于登录
const getAdminUser = (user_name, user_password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.admin_users.findMany({
            where: {
                user_name,
                user_password
            }
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('获取用户sql失败');
    }
});
exports.getAdminUser = getAdminUser;
// 获取文章类型
const getArticleType = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.type_list.findMany();
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('获取文章类型sql失败');
    }
});
exports.getArticleType = getArticleType;
// 获取文章分页列表
const getArticleList = (page_1, pageSize_1, query_1, ...args_1) => __awaiter(void 0, [page_1, pageSize_1, query_1, ...args_1], void 0, function* (page, pageSize, query, orderBy = { article_id: 'asc' }) {
    const where = Object.assign({}, query);
    try {
        // 返回总数
        const total = yield exports.prisma.mj_articles.count({
            where
        });
        const resList = yield exports.prisma.mj_articles.findMany({
            where,
            skip: (+page - 1) * +pageSize,
            take: +pageSize,
            orderBy: Object.assign({}, orderBy),
        });
        return {
            resList,
            total
        };
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('获取文章列表sql失败');
    }
});
exports.getArticleList = getArticleList;
// 搜索文章 根据标题或者内容 返回内容简写
const getArticleSearchList = (page, pageSize, search_content) => __awaiter(void 0, void 0, void 0, function* () {
    const where = {
        OR: [
            {
                article_title: {
                    contains: search_content,
                },
            },
            {
                article_content: {
                    contains: search_content,
                },
            },
        ],
    };
    try {
        const resList = yield exports.prisma.mj_articles.findMany({
            where,
            skip: (+page - 1) * +pageSize,
            take: +pageSize,
            orderBy: {
                article_weight: 'asc',
            },
            select: {
                article_id: true,
                article_title: true,
                article_content: true,
                article_weight: true,
                article_read_count: true,
                create_time: true,
            }
        });
        return {
            resList: resList.map(item => {
                const res = Object.assign(Object.assign({}, item), { article_content_extract: (0, utils_1.extractContentSnippet)(item.article_content, search_content) });
                // @ts-ignore 这里删除article_content
                delete res.article_content;
                return res;
            }),
            total: resList.length,
        };
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('搜索文章失败');
    }
});
exports.getArticleSearchList = getArticleSearchList;
// 获取文章详情
const getArticleDetail = (article_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.mj_articles.findUnique({
            where: {
                article_id
            }
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('获取文章详情sql失败');
    }
});
exports.getArticleDetail = getArticleDetail;
// 创建文章
const createArticle = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.mj_articles.create({
            data
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('创建文章sql失败');
    }
});
exports.createArticle = createArticle;
// 更新文章
const updateArticle = (article_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.mj_articles.update({
            where: {
                article_id
            },
            data
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('更新文章sql失败');
    }
});
exports.updateArticle = updateArticle;
// 文章阅读数加1
const updateArticleReadCount = (article_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.mj_articles.update({
            where: {
                article_id
            },
            data: {
                article_read_count: {
                    increment: 1
                }
            }
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('更新文章阅读数sql失败');
    }
});
exports.updateArticleReadCount = updateArticleReadCount;
// 删除文章
const deleteArticle = (article_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.mj_articles.delete({
            where: {
                article_id
            }
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('删除文章sql失败');
    }
});
exports.deleteArticle = deleteArticle;
const getCommentList = (page, pageSize, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // 返回总数
        const total = yield exports.prisma.user_comments.count({
            where: query
        });
        const commentList = yield exports.prisma.user_comments.findMany({
            where: query,
            skip: (+page - 1) * +pageSize,
            take: +pageSize,
            orderBy: {
                comment_id: 'asc',
            }
        });
        return {
            commentList,
            total
        };
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('获取评论列表sql失败');
    }
});
exports.getCommentList = getCommentList;
// 获取某个文章评论列表
const getCommentDetail = (article_id, query) => __awaiter(void 0, void 0, void 0, function* () {
    const where = Object.assign({ article_id }, (query || {}));
    try {
        return yield exports.prisma.user_comments.findMany({
            where: where,
            orderBy: {
                comment_id: 'asc'
            }
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('获取评论详情sql失败');
    }
});
exports.getCommentDetail = getCommentDetail;
// 删除评论 这里根据comment_id删除 
const deleteComment = (comment_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.user_comments.delete({
            where: {
                comment_id
            }
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('删除评论sql失败');
    }
});
exports.deleteComment = deleteComment;
// 创建评论
const createComment = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.user_comments.create({
            data
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('创建评论sql失败');
    }
});
exports.createComment = createComment;
// 回复评论
const replyComment = (comment_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(data, 'data');
    try {
        const res = yield exports.prisma.user_comments.findUnique({
            where: {
                comment_id
            }
        });
        if (!res) {
            throw new Error('评论不存在');
        }
        return yield exports.prisma.user_comments.create({
            data,
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('回复评论sql失败');
    }
});
exports.replyComment = replyComment;
// 更新评论
const updateComment = (comment_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.user_comments.update({
            where: {
                comment_id
            },
            data
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('更新评论sql失败');
    }
});
exports.updateComment = updateComment;
// 获取单个用户点赞列表 用于pc端
const getUserPcUnique = (user_idp) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield exports.prisma.pc_users.findUnique({
            where: {
                user_idp
            },
        });
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('获取点赞列表sql失败');
    }
});
exports.getUserPcUnique = getUserPcUnique;
// 获取用户点赞列表 用于admin端
const getUserListAdmin = (page, pageSize, query) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const total = yield exports.prisma.pc_users.count({
            where: query,
        });
        const userList = yield exports.prisma.pc_users.findMany({
            where: query,
            skip: (+page - 1) * +pageSize,
            take: +pageSize,
            orderBy: {
                user_id: 'asc'
            }
        });
        return {
            total,
            userList
        };
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('获取点赞列表sql失败');
    }
});
exports.getUserListAdmin = getUserListAdmin;
// 创建用户点赞 文章 （新的，数据库没有该用户点赞记录）
const createArticleLike = (article_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const main = () => __awaiter(void 0, void 0, void 0, function* () {
            // 这里创建用户点赞需要做两件事，一件是创建用户点赞记录，一件是更新文章点赞数
            const createArticleLike = exports.prisma.mj_articles.update({
                where: {
                    article_id
                },
                data: {
                    article_like_count: {
                        increment: 1
                    }
                }
            });
            const createUserLike = exports.prisma.pc_users.create({
                data
            });
            yield Promise.all([createArticleLike, createUserLike]);
        });
        main().catch(e => {
            console.log(e, 'error');
            throw new Error(e);
        }).finally(() => __awaiter(void 0, void 0, void 0, function* () {
            yield exports.prisma.$disconnect();
        }));
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('创建点赞sql失败');
    }
});
exports.createArticleLike = createArticleLike;
// 更新用户点赞 文章 （老的，数据库有该用户点赞记录）
const updateArticleLike = (article_id, user_idp, num, data) => __awaiter(void 0, void 0, void 0, function* () {
    const count = num === 1 ? { increment: 1 } : { decrement: 1 };
    try {
        const main = () => __awaiter(void 0, void 0, void 0, function* () {
            // 这里更新用户点赞文章需要做两件事，一件是更新用户点赞记录，一件是更新文章点赞数
            const updateArticleLike = exports.prisma.mj_articles.update({
                where: {
                    article_id
                },
                data: {
                    article_like_count: count
                }
            });
            const updateUserLike = exports.prisma.pc_users.update({
                where: {
                    user_idp
                },
                data
            });
            yield Promise.all([updateArticleLike, updateUserLike]);
        });
        main().catch(e => {
            console.log(e, 'error');
            throw new Error(e);
        }).finally(() => __awaiter(void 0, void 0, void 0, function* () {
            yield exports.prisma.$disconnect();
        }));
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('更新点赞sql失败');
    }
});
exports.updateArticleLike = updateArticleLike;
// 创建用户点赞 评论
const createCommentLike = (comment_id, data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const main = () => __awaiter(void 0, void 0, void 0, function* () {
            // 这里创建用户点赞需要做两件事，一件是更新文章点赞数，一件是创建用户点赞记录，
            const createCommentLike = exports.prisma.user_comments.update({
                where: {
                    comment_id
                },
                data: {
                    like_count: {
                        increment: 1
                    }
                }
            });
            const createUserLike = exports.prisma.pc_users.create({
                data
            });
            yield Promise.all([createCommentLike, createUserLike]);
        });
        main().catch(e => {
            console.log(e, 'error');
            throw new Error(e);
        }).finally(() => __awaiter(void 0, void 0, void 0, function* () {
            yield exports.prisma.$disconnect();
        }));
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('创建点赞sql失败');
    }
});
exports.createCommentLike = createCommentLike;
// 更新用户点赞 评论
const updateCommentLike = (comment_id, user_idp, num, data) => __awaiter(void 0, void 0, void 0, function* () {
    const count = num === 1 ? { increment: 1 } : { decrement: 1 };
    try {
        const main = () => __awaiter(void 0, void 0, void 0, function* () {
            // 这里更新用户点赞评论需要做两件事， 一件是更新评论点赞数 ，一件是更新用户点赞记录
            const updateCommentLike = exports.prisma.user_comments.update({
                where: {
                    comment_id
                },
                data: {
                    like_count: count
                }
            });
            const updateUserLike = exports.prisma.pc_users.update({
                where: {
                    user_idp
                },
                data
            });
            yield Promise.all([updateCommentLike, updateUserLike]);
        });
        main().catch(e => {
            console.log(e, 'error');
            throw new Error(e);
        }).finally(() => __awaiter(void 0, void 0, void 0, function* () {
            yield exports.prisma.$disconnect();
        }));
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('更新点赞sql失败');
    }
});
exports.updateCommentLike = updateCommentLike;
// 获取文章总数 获取本月创建文章数 获取本周创建文章数
const getArticleCountInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const total = yield exports.prisma.mj_articles.count();
        const month = yield exports.prisma.mj_articles.count({
            where: {
                create_time: {
                    gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
                    lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
                }
            }
        });
        const week = yield exports.prisma.mj_articles.count({
            where: {
                create_time: {
                    gte: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - new Date().getDay()),
                    lte: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - new Date().getDay() + 6),
                }
            }
        });
        return {
            total,
            month,
            week
        };
    }
    catch (error) {
        console.log(error, 'error');
        throw new Error('获取文章总数sql失败');
    }
});
exports.getArticleCountInfo = getArticleCountInfo;
