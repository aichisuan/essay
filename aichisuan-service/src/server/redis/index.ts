import Config from "../../config/config";
import redis from './redis';
import { DataBaseFailed } from "../../common/lib/HttpException";

export const redisCatch = (err: Error) => {
  throw new DataBaseFailed(err.message);
};

export const selectDb = async (db: number) => {
  return new Promise((resolve, reject) => {
    redis.select(db, (err) => {
      if (err) reject(err);
      resolve(true);
    })
  }).catch(redisCatch);
};