import { PrismaClient, Prisma } from "@prisma/client";
import { ArticleType, IncOrDec } from "../../common/types";
import { extractContentSnippet } from "../../common/utils";

export const prisma = new PrismaClient();

export type ArticleQuery = {
  page?: number,
  pageSize?: number,
  type_id?: ArticleType,
  isSelect?: boolean,
  // 查询权重大于多少的可以获得
  article_weight?: {
    gte?: number,
    gt?: number,
    lte?: number,
    lt?: number,
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
    console.log(error, 'error')
    throw new Error('获取用户sql失败');
  }
}

// 获取文章类型
export const getArticleType = async () => {
  try {
    return await prisma.type_list.findMany()
  } catch (error) {
    console.log(error, 'error')
    throw new Error('获取文章类型sql失败');
  }
}


// 获取文章分页列表
export const getArticleList = async (page: number, pageSize: number, query: Prisma.mj_articlesWhereInput, orderBy: any = {article_id: 'asc'}) => {
  const where = {...query};
  try {
    // 返回总数
    const total = await prisma.mj_articles.count({
      where
    })
    const resList = await prisma.mj_articles.findMany({
      where,
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: {
        ...(orderBy as any)
      },
    })
    return {
      resList,
      total
    }
  } catch (error) {
    console.log(error, 'error')
    throw new Error('获取文章列表sql失败');
  }
}

// 搜索文章 根据标题或者内容 返回内容简写 这里一定不是草稿
export const getArticleSearchList = async (page: number, pageSize: number, search_content: string) => {
  const where = {
    is_dfat: 0,
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
    const resList = await prisma.mj_articles.findMany({
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
    })

    return {
      resList: resList.map(item => {
        const res = {
          ...item,
          article_content_extract: extractContentSnippet(item.article_content, search_content)
        }
        // @ts-ignore 这里删除article_content
        delete res.article_content;
        return res;
      }),
      total: resList.length,
    }
  } catch (error) {
    console.log(error, 'error')
    throw new Error('搜索文章失败');
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
    console.log(error, 'error')
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
    console.log(error, 'error')
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
    console.log(error, 'error')
    throw new Error('更新文章sql失败');
  }
}

// 文章阅读数加1
export const updateArticleReadCount = async (article_id: number) => {
  try {
    return await prisma.mj_articles.update({
      where: {
        article_id
      },
      data: {
        article_read_count: {
          increment: 1
        }
      }
    })
  } catch (error) {
    console.log(error, 'error')
    throw new Error('更新文章阅读数sql失败');
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
    console.log(error, 'error')
    throw new Error('删除文章sql失败');
  }
}

export const getCommentList = async (page: number, pageSize: number, query: Prisma.user_commentsWhereInput) => {
  try {
      // 返回总数
    const total = await prisma.user_comments.count({
      where: query
    })
    const commentList = await prisma.user_comments.findMany({
      where: query,
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: {
        comment_id: 'asc',
      }
    })
    return {
      commentList,
      total
    }
  } catch (error) {
    console.log(error, 'error')
    throw new Error('获取评论列表sql失败');
  }
};

// 获取某个文章评论列表
export const getCommentDetail = async (article_id: number, query?: { status: number; } | undefined) => {
  const where = {
    article_id,
    ...(query || {})
  }
  try {
    return await prisma.user_comments.findMany({
      where: where,
      orderBy: {
        comment_id: 'asc'
      }
    })
  } catch (error) {
    console.log(error, 'error')
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
    console.log(error, 'error')
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
    console.log(error, 'error')
    throw new Error('创建评论sql失败');
  }
}

// 回复评论
export const replyComment = async (comment_id: number, data: Prisma.user_commentsCreateInput) => {
  console.log(data, 'data')
  try {
    const res = await prisma.user_comments.findUnique({
      where: {
        comment_id
      }
    })
    if (!res) {
      throw new Error('评论不存在');
    }
    return await prisma.user_comments.create({
      data,
    })
  } catch (error) {
    console.log(error, 'error')
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
    console.log(error, 'error')
    throw new Error('更新评论sql失败');
  }
}

// 获取单个用户点赞列表 用于pc端
export const getUserPcUnique = async (user_idp: string) => {
  try {
    return await prisma.pc_users.findUnique({
      where: {
        user_idp
      },
    })
  } catch (error) {
    console.log(error, 'error')
    throw new Error('获取点赞列表sql失败');
  }
}

// 获取用户点赞列表 用于admin端
export const getUserListAdmin = async (page: number, pageSize: number, query: Prisma.pc_usersWhereInput) => {
  try {
    const total = await prisma.pc_users.count({
      where: query,
    })
    const userList = await prisma.pc_users.findMany({
      where: query,
      skip: (+page - 1) * +pageSize,
      take: +pageSize,
      orderBy: {
        user_id: 'asc'
      }
    })
    return {
      total,
      userList
    }
  } catch (error) {
    console.log(error, 'error')
    throw new Error('获取点赞列表sql失败');
  }
}




// 创建用户点赞 文章 （新的，数据库没有该用户点赞记录）
export const createArticleLike = async (article_id:number, data: Prisma.pc_usersCreateInput) => {
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
      const createUserLike = prisma.pc_users.create({
        data
      })
      await Promise.all([createArticleLike, createUserLike])
    }
    main().catch(e => {
      console.log(e, 'error')
    throw new Error(e)
    }).finally(async () => {
      await prisma.$disconnect()
    })
  } catch (error) {
    console.log(error, 'error')
    throw new Error('创建点赞sql失败');
  }
}

// 更新用户点赞 文章 （老的，数据库有该用户点赞记录）
export const updateArticleLike = async (article_id:number, user_idp: string, num: IncOrDec,data: Prisma.pc_usersUpdateInput) => {
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
      const updateUserLike = prisma.pc_users.update({
        where: {
          user_idp
        },
        data
      })
      await Promise.all([updateArticleLike, updateUserLike])
    }
    main().catch(e => {
      console.log(e, 'error')
    throw new Error(e)
    }).finally(async () => {
      await prisma.$disconnect()
    })
  } catch (error) {
    console.log(error, 'error')
    throw new Error('更新点赞sql失败');
  }
}


// 创建用户点赞 评论
export const createCommentLike = async (comment_id:number, data: Prisma.pc_usersCreateInput) => {
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
      const createUserLike = prisma.pc_users.create({
        data
      })
      await Promise.all([createCommentLike, createUserLike])
    }
    main().catch(e => {
      console.log(e, 'error')
    throw new Error(e)
    }).finally(async () => {
      await prisma.$disconnect()
    })
  } catch (error) {
    console.log(error, 'error')
    throw new Error('创建点赞sql失败');
  }
}



// 更新用户点赞 评论
export const updateCommentLike = async (comment_id:number, user_idp: string, num: IncOrDec,data: Prisma.pc_usersUpdateInput) => {
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
      const updateUserLike = prisma.pc_users.update({
        where: {
          user_idp
        },
        data
      })
      await Promise.all([updateCommentLike, updateUserLike])
    }
    main().catch(e => {
      console.log(e, 'error')
    throw new Error(e)
    }).finally(async () => {
      await prisma.$disconnect()
    })
  } catch (error) {
    console.log(error, 'error')
    throw new Error('更新点赞sql失败');
  }
}


// 获取文章总数 获取本月创建文章数 获取本周创建文章数
export const getArticleCountInfo = async () => {
  try {
    const total = await prisma.mj_articles.count()
    const month = await prisma.mj_articles.count({
      where: {
        create_time: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), 1),
          lte: new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0),
        }
      }
    })
    const week = await prisma.mj_articles.count({
      where: {
        create_time: {
          gte: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - new Date().getDay()),
          lte: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - new Date().getDay() + 6),
        }
      }
    })
    return {
      total,
      month,
      week
    }
  } catch (error) {
    console.log(error, 'error')
    throw new Error('获取文章总数sql失败');
  }
}
