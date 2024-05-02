import { Models } from "../../common/typings/model";
import pool from "./pool";
import { DataBaseFailed } from "../../common/lib/HttpException";
import mysql from 'mysql';

type Rejected = (error: Models.MysqlError) => void;

// 数据库增删该查command
export const command = async (sql: string, values?: any[]): Promise<Models.Result> => {
  try {
    return new Promise<Models.Result>((reslove, reject:Rejected) => {
      pool.getConnection((err: mysql.MysqlError, connection: mysql.Connection) => {
        // 链接失败
        if (err){
          const result: Models.MysqlError = {
            message: `数据库连接失败: ${err.message || ''}`,
            error: err
          }
          reject(result);
        } 

        // 链接成功
        const cb = (err: mysql.MysqlError | null, results?: any, fields?: mysql.FieldInfo[]) => {
          if (err){
            const result: Models.MysqlError = {
              message: `数据库操作出错: ${err.message || ''}`,
              error: err
            }
            reject(result);
          } else {
            const result: Models.Result = {
              state: 0,
              message: 'success',
              resultes: results,
              fields: fields || []
            }
            reslove(result);
          }
        }

        if (values && values.length){
          connection.query(sql, values, cb);
        } else {
          connection.query(sql, cb);
        }
      })
    }).catch((error: Models.MysqlError) => {
      throw new DataBaseFailed(error.message);
    })
  } catch {
    throw new DataBaseFailed();
  }
}
