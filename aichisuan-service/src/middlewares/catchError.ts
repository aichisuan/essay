import Koa from 'koa';
import { HttpException, Unknown } from '../common/lib/HttpException';
import { infoLog, errorLog } from '../server/logs'

export const catchError =  async (ctx: Koa.Context, next: Koa.Next) => {
  try {
    await next();
  } catch (error:any) {
    const isHttpException = error instanceof HttpException;
    if (!isHttpException){
      errorLog(ctx, error);
      ctx.body = new Unknown();
      ctx.status = 500;
    } else {
      if (error.responseType) ctx.response.type = error.responseType;

      if (error.isBuffer) {
        infoLog(ctx)
        ctx.body = error.data;
      } else {
        errorLog(ctx, error);
        ctx.body = {
          code: 500,
          errorCode: error.errorCode,
          message: error.message,
          request: `${ctx.method} ${ctx.path}`
        }
      }
      ctx.status = error.code;
    }
  }
}