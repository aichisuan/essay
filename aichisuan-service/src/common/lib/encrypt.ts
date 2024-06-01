// md5 加密解密
import CryptoJS from 'crypto-js';

const normalKey = process.env.passphrase as string;

// 加密
export const encrypt = (data: string, passphrase: string = normalKey): string => {
  return CryptoJS.AES.encrypt(data, passphrase).toString();
}
 
// 解密
export const decrypt = (ciphertext:string, passphrase: string = normalKey) => {
  const bytes  = CryptoJS.AES.decrypt(ciphertext, passphrase);
  return bytes.toString(CryptoJS.enc.Utf8);
}