// 腾讯云cos上传 封装

import COS from 'cos-js-sdk-v5';

const cos = new COS({
  // @ts-ignore
  SecretId: process.env.VITE_APP_TENCENT_COS_SECRET_ID,
  // @ts-ignore
  SecretKey: process.env.VITE_APP_TENCENT_COS_SECRET_KEY,
});


export type CosResponse = {
  code: number;
  msg: string;
  url: string;
}

export const uploadCos = (file: File, directory: string): Promise<CosResponse> => {
  return new Promise((resolve, reject) => {
    cos.putObject({
      Bucket: 'essay-file-1255424671',
      Region: 'ap-guangzhou',
      StorageClass: 'STANDARD',
      Key: `${directory}/${file.name}`,
      Body: file,
      onProgress: (progressData) => {
        console.log(progressData);
      },
    }, (err, data) => {
      if (err) {
        console.log(err, 'err');
        reject({
          code: 500,
          msg: '上传失败',
          url: '',
        });
      } else {
        if (data.statusCode !== 200) {
          reject({
            code: data.statusCode,
            msg: '上传失败',
            url: '',
          })
        }
        resolve({
          code: 200,
          msg: '上传成功',
          url: data.Location,
        });
      }
    });
  });
}