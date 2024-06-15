import { type RouteRecordRaw } from 'vue-router'

// 基础路由

export const normalizeRoute: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: '/layout/home'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout/index.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/Home/index.vue')
      },
      // 文章列表
      {
        path: 'article-list',
        name: 'article-list',
        component: () => import('@/views/ArticleList/index.vue')
      },
      // 修改文章
      {
        path: 'article-update/:article_id',
        name: 'article-update',
        component: () => import('@/views/ArticleCreate/index.vue')
      },
      // 创建文章
      {
        path: 'article-create',
        name: 'article-create',
        component: () => import('@/views/ArticleCreate/index.vue')
      },
      // 评论列表
      {
        path: 'comments-list',
        name: 'comments-list',
        component: () => import('@/views/CommentList/index.vue')
      },
      // 用户列表
      {
        path: 'client-user-list',
        name: 'client-user-list',
        component: () => import('@/views/ClientUserList/index.vue')
      },
      {
        path: 'upload-imgs',
        name: 'upload-imgs',
        component: () => import('@/views/UploadImgs/index.vue')
      }
    ]
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/ErrorPages/404.vue')
  },
]


// 白名单(路径)

export const whiteList = ['/login', '/404']

// 需要弹窗的路由
export const popupRoute = ['/layout/article-create', '/laylout/article-update']