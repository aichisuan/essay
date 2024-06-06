import { reactive, ref } from 'vue';
import { defineStore } from 'pinia';
import { _getLocalItem, _removeLocalItem, _setLocalItem } from '@/lib/storage';
import { v4 as uuidv4 } from 'uuid';
import service from '@/lib/fetch/Api';
import { encrypt } from '@/lib/encrypt/encrypt';

export type Info = {
  administration_id: string;
  name: string;
  avatar: string;
  user_id: string | number;
};

export type LoginFrom = {
  name: string;
  password: string;
};

type UserInfo = Info & {
  roles: string[];
  administration_id: string;
  token: string;
};

const localInfo = _getLocalItem('admin-info') || {
  user_id: '',
  name: '',
  avatar: '',
  roles: [], // 角色
  administration_id: '',
};

console.log(localInfo)

export const useUserStore = defineStore('counter', () => {
  const userInfo = reactive<UserInfo>({
    token: _getLocalItem('admin-token-auth') || '',
    user_id: localInfo.user_id,
    name: localInfo.name,
    avatar: localInfo.avatar,
    roles: localInfo.roles || [], // 角色
    administration_id: localInfo.administration_id, // 管理可以做的事情 ，根据id来判断
    // routers: [],// 路由 这里不做这个处理
  });

  const setToken = (token: string) => {
    userInfo.token = token;
    _setLocalItem('admin-token-auth', token);
  };
  const setInfo = (info: Info) => {
    userInfo.name = info.name;
    userInfo.avatar = info.avatar;
    userInfo.user_id = info.user_id;
    userInfo.administration_id = info.administration_id;
    _setLocalItem('admin-info', info);
  };

  const login = async (loginForm: LoginFrom): Promise<boolean> => {
    const { code, data } = await service.login({
      user_name: loginForm.name,
      user_password: encrypt(loginForm.password),
    });
    if (code !== 200) return false;

    const { refresh_token, user_id, user_name, user_avatar, administration_id } = data;

    setToken(refresh_token);
    setInfo({
      name: user_name,
      avatar: user_avatar,
      user_id,
      administration_id,
    });
    return true;
  };

  const logout = async () => {
    const { code } = await service.logout();
    if (code !== 200) return false;
    setInfo({
      name: '',
      avatar: '',
      user_id: '',
      administration_id: '',
    });
    userInfo.token = '';
    _removeLocalItem('admin-token-auth');
    _removeLocalItem('admin-info');

    return true;
  };

  return { userInfo, login, logout };
});
