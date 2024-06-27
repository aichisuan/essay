"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.encrypt = void 0;
// md5 加密解密
const crypto_js_1 = __importDefault(require("crypto-js"));
const normalKey = process.env.passphrase;
// 加密
const encrypt = (data, passphrase = normalKey) => {
    return crypto_js_1.default.MD5(data + passphrase).toString();
};
exports.encrypt = encrypt;
