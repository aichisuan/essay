// 转码
export const Base64 = {
  encode: function (v:any) {
    return window.btoa(window.encodeURIComponent(v));
  },
  decode: function (v:any) {
    return window.decodeURIComponent(window.atob(v));
  },
};

// 所有的本地存储采用 Base64 加解密
export const _setLocalItem = function (key: string, value: any) {
  try {
    if (key === '' || key === undefined) {
      return;
    }
    if (key) {
      if (value === null || value === undefined || value === '') {
        return '';
      }

      // 编码
      const enObj = JSON.stringify(value);
      localStorage.setItem(Base64.encode(key), Base64.encode(enObj));
    }
  } catch (err) {
    console.error(err);
  }
};
export const _getLocalItem = function (key: string) {
  try {
    if (key === null || key === '' || key === undefined) {
      return '';
    }
    if (key) {
      const value = localStorage.getItem(Base64.encode(key));
      if (value === null || value === undefined || value === '') {
        return '';
      } else {
        return JSON.parse(Base64.decode(value));
      }
    }
  } catch (err) {
    console.error(err);
  }
};

export const _setSessionItem = function (key: string, value: any) {
  try {
    if (key === '' || key === undefined) {
      return;
    }
    if (key) {
      if (value === null || value === undefined || value === '') {
        return '';
      }

      // 编码
      const enObj = JSON.stringify(value);
      sessionStorage.setItem(Base64.encode(key), Base64.encode(enObj));
    }
  } catch (err) {
    console.error(err);
  }
};
export const _getSessionItem = function (key: string) {
  try {
    if (key === null || key === '' || key === undefined) {
      return '';
    }
    if (key) {
      const value = sessionStorage.getItem(Base64.encode(key));
      if (value === null || value === undefined || value === '') {
        return '';
      } else {
        return JSON.parse(Base64.decode(value));
      }
    }
  } catch (err) {
    console.error(err);
  }
};
export const _removeLocalItem = function (key: string) {
  if (key === null || key === '' || key === undefined) {
    return;
  }
  if (key) {
    localStorage.removeItem(Base64.encode(key));
  }
};
// 清空session数据
export const _removeSessionItem = function (key: string) {
  if (key === null || key === '' || key === undefined) {
    return;
  }
  if (key) {
    sessionStorage.removeItem(Base64.encode(key));
  }
};
