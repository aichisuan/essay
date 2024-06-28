import Koa from 'koa';
import http from 'http';
import initCore from './core/Init';
import Config from './config/config';
import { getLocalIP } from './common/utils';
import { config } from 'dotenv';

const app = new Koa();

const server = http.createServer(app.callback());

initCore(app, server);


const localIP = getLocalIP();

if (process.env.NODE_ENV === 'production') {
  config({ path: '.env.production' });
} else {
  config({ path: '.env.development' });
}



app.listen({
  port: Config.HTTP_PORT,
  // 自动使用本机ip
}, () => {
  console.log(`Server is running at http://${localIP}:${Config.HTTP_PORT}`);
  console.log(process.env.NODE_ENV)
});

