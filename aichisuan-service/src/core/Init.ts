import Koa from 'koa';
import http from 'http';
import koaBodyParser from 'koa-bodyparser';
import path from 'path';
import { getAllFilesExport } from '../common/utils';
// @ts-ignore
import getIp from 'koa-real-ip'; 
import type Router from 'koa-router';
import Config from '../config/config';
import { catchError } from '../middlewares/catchError';

class Init {
  public static app: Koa<Koa.DefaultState, Koa.DefaultContext>;
  public static server: http.Server;
  public static initCore(app: Koa<Koa.DefaultState, Koa.DefaultContext>, server: http.Server) {
    Init.app = app;
    Init.server = server;
    //
    Init.app.use(getIp());
    Init.loadBodyParser();
    Init.initCatchError();
    Init.initLoadRouters();
  }
  // 解析body参数
  public static loadBodyParser() {
    Init.app.use(koaBodyParser());
  }
  static async initLoadRouters() {
    const dirPath = path.join(`${process.cwd()}/${Config.BASE}/api/`);
    getAllFilesExport(dirPath, (file: Router) => {
      // 有导出并且是router实例
      file.routes && Init.app.use(file.routes());
      file.allowedMethods && Init.app.use(file.allowedMethods());
    });
  }
  static async initCatchError() {
    Init.app.use(catchError);
  }
}

export default Init.initCore;
