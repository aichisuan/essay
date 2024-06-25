import Koa from 'koa';
import http from 'http';
import initCore from './core/Init';
import Config from './config/config';

const app = new Koa();

const server = http.createServer(app.callback());

initCore(app, server);



app.listen({
  port: Config.HTTP_PORT,
  host: '192.168.0.101',
}, () => {
  console.log(`Server is running at http://192.168.0.101:${Config.HTTP_PORT}`);
  console.log(process.env.NODE_ENV)
});

