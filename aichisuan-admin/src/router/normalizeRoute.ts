import { type RouteRecordRaw } from 'vue-router'

// 基础路由

export const normalizeRoute: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/login.vue')
  },
  {
    path: '/layout',
    name: 'layout',
    component: () => import('@/views/Layout/index.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/ErrorPages/404.vue')
  },
]


// 白名单(路径)

export const whiteList = ['/login', '/403', '/404', '/500']