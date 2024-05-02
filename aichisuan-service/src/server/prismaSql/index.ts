import { PrismaClient, Prisma } from "@prisma/client";
import { ArticleType, IncOrDec } from "../../common/types";

export const prisma = new PrismaClient();

type ArticleQuery = {
  type_id?: ArticleType,
  // 查询权重大于多少的可以获得
  article_weight?: {
    gt: number,
  }
}

// 获取 管理后台用户，用于登录
export const getAdminUser = async (user_name: string, user_password: string) => {
  try {
    return await prisma.admin_users.findMany({
      where: { 
        user_name,
        user_password
      } as Prisma.admin_usersWhereUniqueInput
    })
  } catch (error) {
    throw new Error('获取用户sql失败');
  }
}


// 获取文章分页列表
export const getArticleList = async (page: number, pageSize: number, query: ArticleQuery, ) => {
  const where = {...query};
  try {
    return await prisma.mj_articles.findMany({
      where,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        article_id: 'desc'
      }
    })
  } catch (error) {
    throw new Error('获取文章列表sql失败');
  }
}

// 获取文章详情
export const getArticleDetail = async (article_id: number) => {
  try {
    return await prisma.mj_articles.findUnique({
      where: {
        article_id
      }
    })
  } catch (error) {
    throw new Error('获取文章详情sql失败');
  }
}

// 创建文章
export const createArticle = async (data: Prisma.mj_articlesCreateInput) => {
  try {
    return await prisma.mj_articles.create({
      data
    })
  } catch (error) {
    throw new Error('创建文章sql失败');
  }
}

// 更新文章
export const updateArticle = async (article_id: number, data: Prisma.mj_articlesUpdateInput) => {
  try {
    return await prisma.mj_articles.update({
      where: {
        article_id
      },
      data
    })
  } catch (error) {
    throw new Error('更新文章sql失败');
  }
}

// 删除文章
export const deleteArticle = async (article_id: number) => {
  try {
    return await prisma.mj_articles.delete({
      where: {
        article_id
      }
    })
  } catch (error) {
    throw new Error('删除文章sql失败');
  }
}

export const getCommentList = async (page: number, pageSize: number, query: Prisma.user_commentsWhereInput) => {
  try {
    return await prisma.user_comments.findMany({
      where: query,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        comment_id: 'desc'
      }
    })
  } catch (error) {
    throw new Error('获取评论列表sql失败');
  }
};

// 获取某个文章评论列表
export const getCommentDetail = async (article_id: number) => {
  try {
    return await prisma.user_comments.findMany({
      where: {
        article_id
      },
      orderBy: {
        comment_id: 'desc'
      }
    })
  } catch (error) {
    throw new Error('获取评论详情sql失败');
  }
}

// 删除评论 这里根据comment_id删除 
export const deleteComment = async (comment_id: number) => {
  try {
    return await prisma.user_comments.delete({
      where: {
        comment_id
      }
    })
  } catch (error) {
    throw new Error('删除评论sql失败');
  }
}

// 创建评论
export const createComment = async (data: Prisma.user_commentsCreateInput) => {
  try {
    return await prisma.user_comments.create({
      data
    })
  } catch (error) {
    throw new Error('创建评论sql失败');
  }
}

// 回复评论
export const replyComment = async (comment_id: number, data: Prisma.user_commentsCreateInput) => {
  try {
    const res = await prisma.user_comments.findUnique({
      where: {
        comment_id
      }
    })
    if (!res) throw new Error('评论不存在');
    return await prisma.user_comments.create({
      data
    })
  } catch (error) {
    throw new Error('回复评论sql失败');
  }
}

// 更新评论
export const updateComment = async (comment_id: number, data: Prisma.user_commentsUpdateInput) => {
  try {
    return await prisma.user_comments.update({
      where: {
        comment_id
      },
      data
    })
  } catch (error) {
    throw new Error('更新评论sql失败');
  }
}

// 获取单个用户点赞列表 用于pc端
export const getUserLikePcList = async (user_ip: string) => {
  try {
    return await prisma.user_like_list.findUnique({
      where: {
        user_ip
      },
    })
  } catch (error) {
    throw new Error('获取点赞列表sql失败');
  }
}

// 获取用户点赞列表 用于admin端
export const getLikeListAdmin = async (page: number, pageSize: number, query: Prisma.user_like_listWhereInput) => {
  try {
    return await prisma.user_like_list.findMany({
      where: query,
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        like_id: 'desc'
      }
    })
  } catch (error) {
    throw new Error('获取点赞列表sql失败');
  }
}




// 创建用户点赞 文章 （新的，数据库没有该用户点赞记录）
export const createArticleLike = async (article_id:number, data: Prisma.user_like_listCreateInput) => {
  try {
    const main = async () => {
      // 这里创建用户点赞需要做两件事，一件是创建用户点赞记录，一件是更新文章点赞数
      const createArticleLike = prisma.mj_articles.update({
        where: {
          article_id
        },
        data: {
          article_like_count: {
            increment: 1
          }
        }
      })
      const createUserLike = prisma.user_like_list.create({
        data
      })
      await Promise.all([createArticleLike, createUserLike])
    }
    main().catch(e => {
      throw new Error(e)
    }).finally(async () => {
      await prisma.$disconnect()
    })
  } catch (error) {
    throw new Error('创建点赞sql失败');
  }
}

// 更新用户点赞 文章 （老的，数据库有该用户点赞记录）
export const updateArticleLike = async (article_id:number, user_ip: string, num: IncOrDec,data: Prisma.user_like_listUpdateInput) => {
  const count = num === 1 ? {increment: 1} : {decrement: 1}
  try {
    const main = async () => {
      // 这里更新用户点赞文章需要做两件事，一件是更新用户点赞记录，一件是更新文章点赞数
      const updateArticleLike = prisma.mj_articles.update({
        where: {
          article_id
        },
        data: {
          article_like_count: count
        }
      })
      const updateUserLike = prisma.user_like_list.update({
        where: {
          user_ip
        },
        data
      })
      await Promise.all([updateArticleLike, updateUserLike])
    }
    main().catch(e => {
      throw new Error(e)
    }).finally(async () => {
      await prisma.$disconnect()
    })
  } catch (error) {
    throw new Error('更新点赞sql失败');
  }
}


// 创建用户点赞 评论
export const createCommentLike = async (comment_id:number, data: Prisma.user_like_listCreateInput) => {
  try {
    const main = async () => {
      // 这里创建用户点赞需要做两件事，一件是更新文章点赞数，一件是创建用户点赞记录，
      const createCommentLike = prisma.user_comments.update({
        where: {
          comment_id
        },
        data: {
          like_count: {
            increment: 1
          }
        }
      })
      const createUserLike = prisma.user_like_list.create({
        data
      })
      await Promise.all([createCommentLike, createUserLike])
    }
    main().catch(e => {
      throw new Error(e)
    }).finally(async () => {
      await prisma.$disconnect()
    })
  } catch (error) {
    throw new Error('创建点赞sql失败');
  }
}



// 更新用户点赞 评论
export const updateCommentLike = async (comment_id:number, user_ip: string, num: IncOrDec,data: Prisma.user_like_listUpdateInput) => {
  const count = num === 1 ? {increment: 1} : {decrement: 1}
  try {
    const main = async () => {
      // 这里更新用户点赞评论需要做两件事， 一件是更新评论点赞数 ，一件是更新用户点赞记录
      const updateCommentLike = prisma.user_comments.update({
        where: {
          comment_id
        },
        data: {
          like_count: count
        }
      })
      const updateUserLike = prisma.user_like_list.update({
        where: {
          user_ip
        },
        data
      })
      await Promise.all([updateCommentLike, updateUserLike])
    }
    main().catch(e => {
      throw new Error(e)
    }).finally(async () => {
      await prisma.$disconnect()
    })
  } catch (error) {
    throw new Error('更新点赞sql失败');
  }
}

