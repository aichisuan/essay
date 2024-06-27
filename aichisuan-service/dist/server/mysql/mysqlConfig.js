"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("../../config/config"));
exports.default = {
    host: config_1.default.MYSQL.HOST,
    port: config_1.default.MYSQL.PORT,
    user: config_1.default.MYSQL.USER_NAME,
    passward: config_1.default.MYSQL.PASSWARD,
    database: config_1.default.MYSQL.DB_NAME,
    multipleStatements: true, // 允许多条sql同时执行
    connectionLimit: config_1.default.MYSQL.CONNECTTION_LIMIT,
    connectTimeout: config_1.default.MYSQL.CONNECT_TIMEOUT,
    acquireTimeout: config_1.default.MYSQL.ACQUIRE_TIMEOUT, // 获取连接超时时间
    timeout: config_1.default.MYSQL.TIMEOUT, // 连接超时时间
};
