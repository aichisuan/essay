import qs from 'qs';
import { message } from 'ant-design-vue';
import { _getLocalItem, _removeLocalItem } from '../storage/index';

type FetchOptions = {
  baseUrl: string;
  timeout?: number;
  defaultHeaders?: Record<string, string>;
};

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'get' | 'post' | 'put' | 'delete';

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
    const authorization = _getLocalItem('admin-token-auth');
    const options: RequestInit = {
      method,
      headers: {
        'Content-Type': 'application/json',
        ...this.defaultHeaders,
        ...headers,
      } as Record<string, string>, // Add type assertion here
    };

    if (authorization) (options.headers as Record<string, string>)['authorization'] = `Bearer ${authorization}`;

    if (method.toLocaleLowerCase() === 'get') {
      endPoint += '?' + new URLSearchParams(bodyOrQuery).toString();
    } else {
      options.body = JSON.stringify(bodyOrQuery || {});
    }

    const controller = new AbortController();
    const signal = controller.signal;
    options.signal = signal;

    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(this.baseUrl + endPoint, options);
      if (!response.ok) {
        const errorData = await response.json();
        message.error(`Error: ${errorData.message}`);
        return Promise.reject(() => ({
          code: 500,
          message: 'Request failed response not ok',
        }));
      }

      const res = (await response.json()) as unknown as { code: number; message: string; data: any, [key: string]: any};

      // 登陆过期
      if (res.code === 1001 && authorization) {
        message.error(`Error: ${response.status}`);
        // 清除登陆信息
        _removeLocalItem('admin-token-auth');
        // 跳转登陆页面
        window.location.href = '/login';
        return Promise.reject(() => ({
          code: 401,
          message: 'Request failed, login expired',
        }));
      }

      if (res.code !== 200) message.error(`Error: ${(res as { message: string }).message || '请求失败'}`);

      return res;
    } catch (error: any) {
      if (error.name === 'AbortError') {
        message.error(`Request failed: timeout`);
        return Promise.reject(() => ({
          code: 500,
          message: 'Request failed: timeout',
        }));
      }
      message.error(`Request failed: ${error}`);
      return Promise.reject(() => ({
        code: 500,
        message: 'Request failed, catch error',
      })).finally(() => {
        clearTimeout(timeoutId);
      });
    }
  }

  get(endPoint: string, query?: any, headers?: Record<string, string>) {
    return this.request('GET', endPoint, query, headers);
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
