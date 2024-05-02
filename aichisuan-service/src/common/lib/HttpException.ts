// HTTP 异常类
export class HttpException extends Error {
  public mesaage: string;
  public errorCode: number;
  public code: number;
  public data: any;
  public isBuffer: boolean = false;
  public responseType: string | undefined;
  constructor(data: any = {}, message: string = '服务异常请联系管理员', errorCode: number = 10000, code: number = 400,) {
    super();
    this.mesaage = message;
    this.errorCode = errorCode;
    this.code = code;
    this.data = data;
  }
}

// http参数异常
export class ParameterException extends HttpException {
  constructor(message: string = '参数错误', errorCode: number = 10001, code: number = 422) {
    super();
    this.code = code;
    this.errorCode = errorCode;
    this.mesaage = message;
  }
}

// 成功返回
export class Success extends HttpException {
  public data: any;
  public respoonseType: string | undefined;
  public session:string | undefined;
  constructor(data: any = {}, message: string = 'ok', errorCode: number = 0, code: number = 200, responseType?: string, session?:string) {
    super();
    this.code = code;
    this.mesaage = message;
    this.errorCode = errorCode;
    this.data = data;
    this.responseType = responseType;
    this.session = session;
  }
}

// 返回文件流
export class Buffer extends Success {
  public data: any;
  public respoonseType: string | undefined;
  public session:string | undefined;
  public isBuffer: boolean;
  constructor(data?:any, responseType?: string, session?: string ) {
    super();
    this.code = 200;
    this.mesaage = 'ok';
    this.errorCode = 0;
    this.data = data;
    this.responseType = responseType;
    this.session = session;
    this.isBuffer = true;
  }
}

// 404
export class NotFound extends HttpException {
  constructor(message: string = '资源未找到', errorCode: number = 10002, code: number = 404) {
    super();
    this.code = code;
    this.errorCode = errorCode;
    this.mesaage = message;
  }
}

// 授权失败
export class AuthFailed extends HttpException {
  constructor(message: string = '授权失败', errorCode: number = 10003, code: number = 401) {
    super();
    this.code = code;
    this.errorCode = errorCode;
    this.mesaage = message;
  }
}

// Forbidden
export class Forbidden extends HttpException {
  constructor(message: string = '禁止访问', errorCode: number = 10004, code: number = 403) {
    super();
    this.code = code;
    this.errorCode = errorCode;
    this.mesaage = message;
  }
}

// 查询失败
export class DataBaseFailed extends HttpException {
  constructor(message: string = '查询失败', errorCode: number = 10005, code: number = 500) {
    super();
    this.code = code;
    this.errorCode = errorCode;
    this.mesaage = message;
  }
}

// 未知错误
export class Unknown extends HttpException {
  constructor(message: string = '未知错误', errorCode: number = 10006, code: number = 500) {
    super();
    this.code = code;
    this.errorCode = errorCode;
    this.mesaage = message;
  }
}