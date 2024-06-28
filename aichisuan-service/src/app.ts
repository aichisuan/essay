import Koa from 'koa';
import http from 'http';
import initCore from './core/Init';
import Config from './config/config';
import { getLocalIP } from './common/utils';

const app = new Koa();

const server = http.createServer(app.callback());

initCore(app, server);


const localIP = getLocalIP();


app.listen({
  port: Config.HTTP_PORT,
  // 自动使用本机ip
}, () => {
  console.log(`Server is running at http://${localIP}:${Config.HTTP_PORT}`);
  console.log(process.env.NODE_ENV)
});

