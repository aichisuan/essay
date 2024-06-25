export enum ArticleType {
  Technology,
  Life,
  Question,
  Remark,
 }

 export type IncOrDec = 1 | -1;


 export type WeightQuery = {
    weightGte?: number,
    weightGt?: number,
    weightLte?: number,
    weightLt?: number,
 }
