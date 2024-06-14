export enum ArticleType {
  Technology,
  Life,
  Question,
  Remark,
 }

 export type IncOrDec = 1 | -1;


 export type WeightQuery = {
    wightGte?: number,
    wightGt?: number,
    wightLte?: number,
    wightLt?: number,
 }
