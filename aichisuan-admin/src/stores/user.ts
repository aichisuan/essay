import { reactive } from 'vue'
import { defineStore } from 'pinia'
import { _getLocalItem, _removeLocalItem, _setLocalItem } from '@/lib/storage'
import { v4 as uuidv4 } from 'uuid';

export type Info = {
  name: string
  avatar: string
}

export type LoginFrom = {
  name: string,
  password: string,
}

type UserInfo = Info & {
  roles: string[]
  token: string
}

export const useUserStore = defineStore('counter', () => {
  const userInfo = reactive<UserInfo>({
    token: _getLocalItem('admin-token_obj')?.token || '',
    name: '',
    avatar: '',
    roles: [],// 角色
    // routers: [],// 路由 这里不做这个处理
  })

  const setToken = (token: string) => {
    userInfo.token = token
    _setLocalItem('admin-token_obj', { token, time: new Date().toISOString() })
  }
  const setInfo = (info: Info) => {
    userInfo.name = info.name
    userInfo.avatar = info.avatar
  }

  // const setRoles = (roles: string[]) => {
  //   userInfo.roles = roles
  // }

  const login = (loginForm: LoginFrom) => {
    // 模拟登陆
    const token = uuidv4()
    const { name } = loginForm
    const info = {
      name,
      // github头像 coplit 提供的
      avatar: 'https://avatars.githubusercontent.com/u/8186664?v=4'
    }
    setInfo(info)
    setToken(token)
  }

  const logout = () => {
    userInfo.token = ''
    userInfo.name = ''
    userInfo.avatar = ''
    userInfo.roles = []
    _removeLocalItem('admin-token_obj')
  }


  return { userInfo, setToken, login, logout }
})
