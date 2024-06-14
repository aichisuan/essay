// md5 加密解密
import CryptoJS from 'crypto-js';

const normalKey = 'fasdjflksjdlkfjasldkjflk'; // 默认密钥


export const encrypt = (data: string, passphrase: string = normalKey): string => {
  return CryptoJS.MD5(data + passphrase).toString();
}