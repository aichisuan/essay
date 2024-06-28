import { Context, Next } from 'koa';
import isEnc from '../config/encFlag';
import { getAesKey } from '../common/lib/tcc';
import CryptoJS from 'crypto-js';

export default async function encryMiddler(ctx: Context, next: Next) {
  // 请求数据并不进行加密 只对返回数据进行加密 之后如果需要可以加上
  await next();
  if (ctx.request.url.includes('/admin') || ctx.request.url.includes('/pc/tcc')) return;
  if (ctx.method == 'OPTIONS') return;
  if (isEnc && ctx.body) {
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
    ctx.body = CryptoJS.AES.encrypt(JSON.stringify(ctx.body), CryptoJS.enc.Utf8.parse('dfja123898218yhj'), {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7,
    }).ciphertext.toString();
  }
}
