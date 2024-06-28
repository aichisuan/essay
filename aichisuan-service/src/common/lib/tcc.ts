// 加密解密
import Router from 'koa-router';
import Config from '../../config/config';
import NodeRSA from 'node-rsa';
import { encryptAes } from './encrypt';

const router = new Router({
  prefix: `${Config.API_PREFIX}v1`,
});

const key_rsa = new NodeRSA({ b: 1024 });
key_rsa.setOptions({ encryptionScheme: 'pkcs1' });//指定加密格式.不改格式得话可能会报错
const publickey = key_rsa.exportKey('public');
const privatekey = key_rsa.exportKey('private');


router.get('/pc/tcc', async (ctx) => {
  ctx.body = encryptAes(publickey);
});

export const getPrivateKey = () => {
  return privatekey;
}

export const getAesKey = (autoKey: string) => {
  return key_rsa.decrypt(autoKey, 'utf8');
}


export default router;