"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.command = void 0;
const pool_1 = __importDefault(require("./pool"));
const HttpException_1 = require("../../common/lib/HttpException");
// 数据库增删该查command
const command = (sql, values) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return new Promise((reslove, reject) => {
            pool_1.default.getConnection((err, connection) => {
                // 链接失败
                if (err) {
                    const result = {
                        message: `数据库连接失败: ${err.message || ''}`,
                        error: err
                    };
                    reject(result);
                }
                // 链接成功
                const cb = (err, results, fields) => {
                    if (err) {
                        const result = {
                            message: `数据库操作出错: ${err.message || ''}`,
                            error: err
                        };
                        reject(result);
                    }
                    else {
                        const result = {
                            state: 0,
                            message: 'success',
                            resultes: results,
                            fields: fields || []
                        };
                        reslove(result);
                    }
                };
                if (values && values.length) {
                    connection.query(sql, values, cb);
                }
                else {
                    connection.query(sql, cb);
                }
            });
        }).catch((error) => {
            throw new HttpException_1.DataBaseFailed(error.message);
        });
    }
    catch (_a) {
        throw new HttpException_1.DataBaseFailed();
    }
});
exports.command = command;
