// md5 加密解密
import CryptoJS from 'crypto-js';

const normalKey = process.env.passphrase as string;
const normalAeKey = '123456789'; 

// 加密
export const encrypt = (data: string, passphrase: string = normalKey): string => {
  return CryptoJS.MD5(data + passphrase).toString();
}

// 加密AES
export const encryptAes = (data: string, key: string = normalAeKey): string => {
  return CryptoJS.AES.encrypt(data, key).toString();
}


