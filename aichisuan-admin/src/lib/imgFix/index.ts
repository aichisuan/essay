import { v4 as uuid } from 'uuid';

export const isImgUrl = (imgUrl: string) => { 
  const regex = /^https?:\/\/.*(.png|.jpg|.jpeg|.gif|.webp|.svg|.bmp)$/;
  return regex.test(imgUrl);
}

export const fixImgCover = (img: string) => {
  return `${img}?imageView2/w/200/h/200`
}
export const fixImgTable = (img: string) => {
  return `${img}?imageView2/w/300/h/300`
}

export const fixImgArticle = (img: string) => {
  return `${img}?imageView2/w/500/h/500`
}

export const getImgFileUploadInfo = (img: string) => {
  return {
    uid: uuid(),
    name: img.split('/').pop(),
    status: 'done',
    url: img,
    thumbUrl: img.includes('.myqcloud.com') ? fixImgCover(img) : img,
    type: 'image/jpeg',
  }
}