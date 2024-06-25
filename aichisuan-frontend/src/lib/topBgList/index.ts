export const topBgList = [
  { id: 1, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1608631999167-410d2c8a3c0f.avif', width: 3742, height: 2085 },
  { id: 2, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1607019307179-933bf77726f0.avif', width: 3774, height: 2831 },
  { id: 3, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1621842216233-8bf3afec90e5.avif', width: 3870, height: 2580 },
  { id: 4, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1419064642531-e575728395f2.avif', width: 3870, height: 2580 },
  { id: 5, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1419064642531-e575728395f2.avif', width: 3876, height: 2566 },
  { id: 6, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1561731418-bbf3a78e0b4f.avif', width: 3751, height: 2110 },
  { id: 7, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1607600434079-73b45e254bd8.avif', width: 3760, height: 2058 },
  { id: 8, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1612141862591-a689bade02d7.avif', width: 3870, height: 2580 },
  { id: 9, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1561731418-bbf3a78e0b4f.avif', width: 3870, height: 2582 },
  { id: 10, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1516444830679-7f62c77fae81.avif', width: 3056, height: 1636 },
  { id: 11, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1610528816441-f309483d887a.avif', width: 3871, height: 2580 },
  { id: 12, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1454372182658-c712e4c5a1db.avif', width: 3870, height: 2583 },
  { id: 13, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1606748335428-fa7c54db7018.avif', width: 3732, height: 2099 },
  { id: 14, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1606748335428-fa7c54db7018.avif', width: 3732, height: 2099 },
  { id: 15, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1476610182048-b716b8518aae.avif', width: 3718, height: 2249 },
  { id: 16, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1608631999167-410d2c8a3c0f.avif', width: 3742, height: 2085 },
  { id: 17, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1592657825712-8af3223a5e18.avif', width: 3774, height: 2831 },
  { id: 18, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1596039744094-5c0b2a91a2dd.avif', width: 3870, height: 2580 },
  { id: 19, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1604552278433-1d1d347b6e09.avif', width: 3876, height: 2567 },
  { id: 20, url: 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/photo-1544128844-da6922f58439.avif', width: 3870, height: 2580 },
];

export const errorImg = 'https://essay-file-1255424671.cos.ap-guangzhou.myqcloud.com/img/45prvdakqe.svg';


const getRandomNumber1_19 = () => Math.floor(Math.random() * 20);

export const getRandomTopBg = () => {
  return topBgList[getRandomNumber1_19()].url;
};


// 测试代码
// const getAR = (imgUrl: string) => {
//   return new Promise((reslove) => {
//     const img = new Image();
//     img.src = imgUrl;
//     img.onload = () => {
//       reslove([Math.round(img.width), Math.round(img.height)]);
//     };
//   });
// };

// export const getImgWidh_height = async () => {
//   const res = [];
//   let i = 0;
//   topBgList.forEach(async (item, index) => {
//     const ar = (await getAR(item.url)) as [];
//     res.push([index, ...ar]);
//     i++;
//     if (i === topBgList.length) {
//       const re = res
//         .sort((a, b) => a[0] - b[0])
//         .map((x, i) => {
//           return {
//             id: topBgList[i].id,
//             url: topBgList[i].url,
//             width: x[1],
//             height: x[2],
//           };
//         });

//       console.log(JSON.stringify(re));
//     }
//   });
// };
