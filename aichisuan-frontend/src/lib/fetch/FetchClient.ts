import axios, { type Method } from 'axios';

import { dayjs, ElMessage } from 'element-plus';
import { v4 as uuidv4 } from 'uuid';

import { _getLocalItem, _removeLocalItem } from '../storage/index';
import { decryptAes, decryptRsa, encryptEnc, encryptMd5, getRandomStr, getStrForSixteen } from '../encrypt/encrypt';
import { _setLocalItem } from '../index';

// const whiteList = ['/article_type', '/article_detail'];

const isEnc = true;

type FetchOptions = {
  baseUrl: string;
  timeout?: number;
  defaultHeaders?: Record<string, string>;
};

const source = axios.CancelToken.source();

const setToken = (publicK:string, privateKey: string) => {
  let token = _getLocalItem('pc-token-user');
  if (!token) {
    token = encryptMd5(uuidv4());
    _setLocalItem('pc-token-user', token);
  }
  // @ts-ignore
  window.tt = privateKey
  // @ts-ignore
  window.cc = publicK;
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}${publicK ? ` ${encryptEnc(privateKey, publicK)}` : ''}`;
};

class FetchClient {
  private readonly baseUrl: string;
  private readonly timeout: number;
  private readonly defaultHeaders: Record<string, string>;
  private privateKey: string;
  private publicKey: string;

  constructor(options: FetchOptions) {
    const { baseUrl, timeout = 10000, defaultHeaders = {} } = options;
    this.baseUrl = baseUrl;
    this.timeout = timeout;
    this.defaultHeaders = defaultHeaders;
    this.publicKey = '';
    this.privateKey = getRandomStr(16);
  }

  private async request(method: Method, endPoint: string, bodyOrQuery?: any, headers?: Record<string, string>) {
    if (!this.publicKey) {
      const flag = await this.getEncy();
      if (!flag) {
        ElMessage.error('获取数据失败,请刷新重试');
        return {
          code: 500,
          message: '获取数据失败,请刷新重试',
          data: {},
        };
      }
    }
    try {
      setToken(this.publicKey, this.privateKey);
      return axios
        .create({
          baseURL: this.baseUrl,
          timeout: this.timeout,
          headers: {
            'Content-Type': 'application/json',
            ...this.defaultHeaders,
            ...headers,
          },
          cancelToken: source.token,
        })
        .request({
          method,
          url: endPoint,
          data: JSON.stringify(bodyOrQuery),
        })
        .then((res) => {
          if (res.status === 200) {
            if (isEnc) return decryptRsa(res.data, this.privateKey);
            return {
              code: 200,
              ...res.data,
            };
          } else {
            ElMessage.error(res.data.message);
            return {
              code: 501,
              message: 'Request failed response not ok',
              data: {},
            };
          }
        })
        .catch((err) => {
          return {
            code: 502,
            message: JSON.stringify(err),
            data: {},
          };
        });
    } catch (error) {
      return {
        code: 500,
        message: JSON.stringify(error),
        data: {},
      };
    }
  }

  async get(endPoint: string, query?: any, headers?: Record<string, string>) {
    if (!this.publicKey) {
      const flag = await this.getEncy();
      if (!flag) {
        ElMessage.error('获取数据失败,请刷新重试');
        return {
          code: 500,
          message: '获取数据失败,请刷新重试',
          data: {},
        };
      }
    }
    setToken(this.publicKey, this.privateKey);
    let getUrl = `${this.baseUrl}${endPoint}?${new URLSearchParams(query).toString()}`;
    // if (!(getUrl.includes(whiteList[0]) || getUrl.includes(whiteList[1]))) {
    getUrl = Object.entries(query || {}).length ?  `${getUrl}&c=${dayjs().valueOf()}` : `${getUrl}c=${dayjs().valueOf()}`;
    // }
    return axios
      .get(getUrl, { cancelToken: source.token, headers })
      .then((r) => {
        if (r.status === 200) {
          if (isEnc) return decryptRsa(r.data, this.privateKey);
          return {
            ...r.data,
          };
        } else {
          ElMessage.error(r.data.message);
          return {
            code: 501,
            message: 'Request failed response not ok',
            data: {},
          };
        }
      })
      .catch((e) => ({
        code: 502,
        message: JSON.stringify(e),
        data: {},
      }));
  }
  post(endPoint: string, body?: any, headers?: Record<string, string>) {
    return this.request('POST', endPoint, body, headers);
  }
  put(endPoint: string, body?: any, headers?: Record<string, string>) {
    return this.request('PUT', endPoint, body, headers);
  }
  delete(endPoint: string, headers?: Record<string, string>) {
    return this.request('DELETE', endPoint, undefined, headers);
  }
  async getEncy() {
    if (!isEnc) return true;
    if (this.publicKey) return true;
    return axios.get(`${this.baseUrl}/tcc`).then(r => {
      if (r.status === 200) {
        if (r.data) {
          try {
            this.publicKey = decryptAes(r.data);
            this.privateKey = getStrForSixteen(this.publicKey)
            return true
          } catch (error) {
            return false
          }
        }else return false
        
      } else return false;
    }).catch(() => false);
  }
}

export default FetchClient;
