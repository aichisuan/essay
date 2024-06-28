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
const encFlag_1 = __importDefault(require("../config/encFlag"));
const crypto_js_1 = __importDefault(require("crypto-js"));
function encryMiddler(ctx, next) {
    return __awaiter(this, void 0, void 0, function* () {
        // 请求数据并不进行加密 只对返回数据进行加密 之后如果需要可以加上
        yield next();
        if (ctx.request.url.includes('/admin') || ctx.request.url.includes('/pc/tcc'))
            return;
        if (ctx.method == 'OPTIONS')
            return;
        if (encFlag_1.default && ctx.body) {
            // const { authorization = '' } = ctx.request.header;
            // const autoKey = authorization.split(' ')[2];
            // if (!autoKey) {
            //   ctx.body = {
            //     message: 'ddd is required',
            //     code: 500,
            //   }
            //   return;
            // };
            // const aesKey = getAesKey(autoKey);
            // ctx.body = CryptoJS.AES.encrypt(JSON.stringify(ctx.body), CryptoJS.enc.Utf8.parse(aesKey), {
            //   mode: CryptoJS.mode.ECB,
            //   padding: CryptoJS.pad.Pkcs7,
            // }).ciphertext.toString();
            // 暂时使用固定aes加密
            ctx.body = crypto_js_1.default.AES.encrypt(JSON.stringify(ctx.body), crypto_js_1.default.enc.Utf8.parse('dfja123898218yhj'), {
                mode: crypto_js_1.default.mode.ECB,
                padding: crypto_js_1.default.pad.Pkcs7,
            }).ciphertext.toString();
        }
    });
}
exports.default = encryMiddler;
