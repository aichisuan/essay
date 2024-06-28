// md5 加密解密
import CryptoJS from 'crypto-js';
import JSEncrypt from 'jsencrypt';

const normalKey = 'fasdjflksjdlkfjasldkjflk'; // 默认密钥

const normalAeKey = '123456789';

export const encryptMd5 = (data: string, passphrase: string = normalKey): string => {
  return CryptoJS.MD5(data + passphrase).toString();
};

// enc
export const encryptEnc = (data: string, passphrase: string = normalKey): string => {
  const encryptor = new JSEncrypt();
  encryptor.setPublicKey(passphrase);
  return encryptor.encrypt(data) as string;
};

//   生成指定长度的随机字符串
export const getRandomStr = (len: number = 16): string => {
  let str = '';
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charsArr = chars.split('');

  for (let i = 0; i < len; i++) {
    str += charsArr[Math.floor(Math.random() * charsArr.length)];
  }
  return str;
};

// 解密AES
export const decryptAes = (data: string, passphrase: string = normalAeKey): string => {
  return CryptoJS.AES.decrypt(data, passphrase).toString(CryptoJS.enc.Utf8);
};

// // 解密rsa
export const decryptRsa = (data: string, aseKey:string) => {
  return JSON.parse(
    CryptoJS.enc.Utf8.stringify(
      // CryptoJS.AES.decrypt(CryptoJS.format.Hex.parse(data), CryptoJS.enc.Utf8.parse(aseKey), {
      //   mode: CryptoJS.mode.ECB,
      //   padding: CryptoJS.pad.Pkcs7,
      // })
      CryptoJS.AES.decrypt(CryptoJS.format.Hex.parse(data), CryptoJS.enc.Utf8.parse('dfja123898218yhj'), {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7,
      })
    )
  );
};


export const getStrForSixteen = (str: string) => {
   const fch = str.match(/[A-Z]|[a-z]|[0-9]/g) || [];
   const cbt = fch.join('');
   return cbt.length > 36 ? cbt.substring(20, 36) : cbt.substring(0, 16);
}