"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorLog = exports.infoLog = void 0;
const logger_1 = __importDefault(require("./logger"));
// 记录信息日志
const infoLog = (ctx) => {
    const { method, response, originalUrl, ip, status } = ctx;
    logger_1.default.info(`[${method}] ${originalUrl} ${status} ${response.length} - ${ip}`);
};
exports.infoLog = infoLog;
// 记录错误日志
const errorLog = (ctx, error) => {
    const { method, originalUrl, ip } = ctx;
    logger_1.default.error(`[${method}] ${originalUrl} - ${ip} - ${error}`);
};
exports.errorLog = errorLog;
