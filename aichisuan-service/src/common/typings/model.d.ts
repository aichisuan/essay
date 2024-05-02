import Koa from 'koa';
import mysql from 'mysql';

export namespace Models {
  type Ctx = Koa.Context;

  interface MysqlError {
    message: string;
    error?: mysql.MysqlError;
  }

  interface Result {
    // state 0: success, 1: fail
    state: number;

    resultes: any;

    fields?: Array<mysql.FieldInfo>;
  
    error?: mysql.MysqlError;
  
    message?: string;
  }
}

