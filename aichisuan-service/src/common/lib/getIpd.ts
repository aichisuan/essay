import { Context, Next } from 'koa';
import { encrypt } from './encrypt';

const getClientIp = (ctx: Context) => {
  return ctx.request.headers['x-real-ip'] || ctx.request.headers['x-forwarded-for'] || ctx.request.ip;
};

export default function getIpd(ctx: Context) {
  const ip = getClientIp(ctx);
  return encrypt(ip as string, process.env.passphrase as string);
}


