import { _getLocalItem } from '@/lib/storage/'
import { whiteList } from './normalizeRoute'
import { type Router } from 'vue-router'


const loginPath = '/login'
// 权限验证

export const permission = (router: Router) => {
  router.beforeEach((to, from, next) => {
    const token = _getLocalItem('admin-token-auth')
    if (token) {
      if (to.path === loginPath) {
        next({ path: '/' })
      } else {
        next()
      }
    } else {
      if (whiteList.indexOf(to.path) !== -1) {
        next()
      } else {
        next({ path: loginPath, query: { from: from.path }})
      }
    }
  })
}
