import { _getLocalItem } from '@/lib/storage'
import { whiteList } from './normalizeRoute'
import { type Router, type RouteRecordRaw } from 'vue-router'
import dayjs from 'dayjs';


const loginPath = '/login'
const defultPath = '/'

const validTime = (time: string) => {
 const nowTime = dayjs();
 const hour = nowTime.diff(dayjs(time), 'hour');
 return hour < 12
}

// 权限验证

export const permission = (router: Router) => {
  
  router.beforeEach((to, from, next) => {
    //  判断是否有token
    if (_getLocalItem('admin-token_obj')){
      const time = _getLocalItem('admin-token_obj').time;

      // 判断token是否过期
      if (time && validTime(time)) {
        if (to.path === loginPath) {
          next({ path: defultPath })
        } else {
          next()
        }
      } else {
        next({ path: loginPath, query: { redirect: to.fullPath } })
      }
    } else {
      if (whiteList.includes(to.path)) {
        next()
      } else {
        next({ path: loginPath, query: { redirect: to.fullPath } })
      }
    }
  })

}
