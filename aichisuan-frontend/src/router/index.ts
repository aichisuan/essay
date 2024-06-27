
import { createRouter, createWebHashHistory } from "vue-router";
// 暂定加载动画
import Loading from "nprogress";
import "nprogress/nprogress.css";

// 精选 合集 技术 生活 问答 其他
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { title: '首页' },
  },
  {
    path: '/',
    name: 'Layout',
    redirect: '/selected',
    children: [
      {
        path: '/selected',
        name: 'selected',
        component: () => import('@/views/CommonList/index.vue'),
        meta: { title: '精选' },
      },
      {
        path: '/technology',
        name: 'technology',
        component: () => import('@/views/CommonList/index.vue'),
        meta: { title: '技术' },
      },
      {
        path: '/life',
        name: 'life',
        component: () => import('@/views/CommonList/index.vue'),
        meta: { title: '生活' },
      },
      {
        path: '/question',
        name: 'question',
        component: () => import('@/views/CommonList/index.vue'),
        meta: { title: '问答' },
      },
      {
        path: '/remark',
        name: 'remark',
        component: () => import('@/views/Remark/index.vue'),
        meta: { title: '其他' },
      },
    ],
  },
  {
    path: '/detail',
    name: 'detail',
    component: () => import('@/views/Detail/index.vue'),
    meta: { title: '详情' },
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    redirect: '/',
  }
];



const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 详情页面滚动顶部随着点击而变化，如果上次点击同一个那么滚动条位置不变
const whiteList = ['/detail'];

router.beforeEach((to, from, next) => {
  Loading.start();
  next();
});

router.afterEach((to) => {
  // 切换就滚动到顶部
  if (!whiteList.includes(to.path)) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  Loading.done();
});

export default router;