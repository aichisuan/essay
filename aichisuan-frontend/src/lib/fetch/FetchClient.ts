import axios, { type AxiosInstance, type Method } from 'axios';

import { ElMessage } from 'element-plus';
import { v4 as uuidv4 } from 'uuid';

import { _getLocalItem, _removeLocalItem } from '../storage/index';
import { encrypt } from '../encrypt/encrypt';
import { _setLocalItem } from '..';

type FetchOptions = {
  baseUrl: string;
  timeout?: number;
  defaultHeaders?: Record<string, string>;
};

const source = axios.CancelToken.source();

const setToken = () => {
  let token = _getLocalItem('pc-token-user');
  if (!token) {
    token = encrypt(uuidv4());
    _setLocalItem('pc-token-user', token);
  }
  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

class FetchClient {
  private readonly baseUrl: string;
  private readonly timeout: number;
  private readonly defaultHeaders: Record<string, string>;

  constructor(options: FetchOptions) {
    const { baseUrl, timeout = 10000, defaultHeaders = {} } = options;
    this.baseUrl = baseUrl;
    this.timeout = timeout;
    this.defaultHeaders = defaultHeaders;
  }

  private async request(method: Method, endPoint: string, bodyOrQuery?: any, headers?: Record<string, string>) {
    try {
      setToken();
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

  get(endPoint: string, query?: any, headers?: Record<string, string>) {
    setToken();
    return axios
      .get(`${this.baseUrl}${endPoint}?${new URLSearchParams(query).toString()}`, { cancelToken: source.token, headers })
      .then((r) => {
        if (r.status === 200) {
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
}

export default FetchClient;
