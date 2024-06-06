import { createRouter, createWebHistory } from 'vue-router'
import { normalizeRoute } from './normalizeRoute'
import { permission } from './permission'


const router = createRouter({
  history: createWebHistory(),
  routes: normalizeRoute,
})

permission(router)

export default router
