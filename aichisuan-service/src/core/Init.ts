import Koa from 'koa';
import http from 'http';
import koaBodyParser from 'koa-bodyparser';
import path from 'path';
import { getAllFilesExport } from '../common/utils';
import type Router from 'koa-router';
import corsMiddle from '../middlewares/cors';
import Config from '../config/config';
import { catchError } from '../middlewares/catchError';
import encryMiddler from '../middlewares/encryMiddler';
import isEnc from '../config/encFlag';
import tcc from '../common/lib/tcc';

class Init {
  public static app: Koa<Koa.DefaultState, Koa.DefaultContext>;
  public static server: http.Server;
  public static initCore(app: Koa<Koa.DefaultState, Koa.DefaultContext>, server: http.Server) {
    Init.app = app;
    Init.server = server;
    Init.initCors();
    Init.loadBodyParser();
    Init.initCatchError();
    if (isEnc) {
      Init.initRsa();
    }
    Init.initLoadRouters();
  }
  // 解析body参数
  public static loadBodyParser() {
    Init.app.use(koaBodyParser());
  }
  // cors
  public static initCors(){
    Init.app.use(corsMiddle);
  }

  // rsa 
  public static initRsa() {
    Init.app.use(encryMiddler);    
  }

  // 加载路由
  static async initLoadRouters() {
    const dirPath = path.join(`${process.cwd()}/${Config.BASE}/api/`);
    getAllFilesExport(dirPath, (file: Router) => {
      // 有导出并且是router实例
      file.routes && Init.app.use(file.routes());
      file.allowedMethods && Init.app.use(file.allowedMethods());
    });
    // 加密
    Init.app.use(tcc.routes());
  }
  static async initCatchError() {
    Init.app.use(catchError);
  }
}

export default Init.initCore;
