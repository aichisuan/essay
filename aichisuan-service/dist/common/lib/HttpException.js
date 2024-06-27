"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unknown = exports.DataBaseFailed = exports.Forbidden = exports.AuthFailed = exports.NotFound = exports.Buffer = exports.Success = exports.ParameterException = exports.HttpException = void 0;
// HTTP 异常类
class HttpException extends Error {
    constructor(data = {}, message = '服务异常请联系管理员', errorCode = 10000, code = 400) {
        super();
        this.isBuffer = false;
        this.mesaage = message;
        this.errorCode = errorCode;
        this.code = code;
        this.data = data;
    }
}
exports.HttpException = HttpException;
// http参数异常
class ParameterException extends HttpException {
    constructor(message = '参数错误', errorCode = 10001, code = 422) {
        super();
        this.code = code;
        this.errorCode = errorCode;
        this.mesaage = message;
    }
}
exports.ParameterException = ParameterException;
// 成功返回
class Success extends HttpException {
    constructor(data = {}, message = 'ok', errorCode = 0, code = 200, responseType, session) {
        super();
        this.code = code;
        this.mesaage = message;
        this.errorCode = errorCode;
        this.data = data;
        this.responseType = responseType;
        this.session = session;
    }
}
exports.Success = Success;
// 返回文件流
class Buffer extends Success {
    constructor(data, responseType, session) {
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
exports.Buffer = Buffer;
// 404
class NotFound extends HttpException {
    constructor(message = '资源未找到', errorCode = 10002, code = 404) {
        super();
        this.code = code;
        this.errorCode = errorCode;
        this.mesaage = message;
    }
}
exports.NotFound = NotFound;
// 授权失败
class AuthFailed extends HttpException {
    constructor(message = '授权失败', errorCode = 10003, code = 401) {
        super();
        this.code = code;
        this.errorCode = errorCode;
        this.mesaage = message;
    }
}
exports.AuthFailed = AuthFailed;
// Forbidden
class Forbidden extends HttpException {
    constructor(message = '禁止访问', errorCode = 10004, code = 403) {
        super();
        this.code = code;
        this.errorCode = errorCode;
        this.mesaage = message;
    }
}
exports.Forbidden = Forbidden;
// 查询失败
class DataBaseFailed extends HttpException {
    constructor(message = '查询失败', errorCode = 10005, code = 500) {
        super();
        this.code = code;
        this.errorCode = errorCode;
        this.mesaage = message;
    }
}
exports.DataBaseFailed = DataBaseFailed;
// 未知错误
class Unknown extends HttpException {
    constructor(message = '未知错误', errorCode = 10006, code = 500) {
        super();
        this.code = code;
        this.errorCode = errorCode;
        this.mesaage = message;
    }
}
exports.Unknown = Unknown;
