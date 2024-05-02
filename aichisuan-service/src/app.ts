import Koa from 'koa';
import http from 'http';
import initCore from './core/Init';
import Config from './config/config';

const app = new Koa();

const server = http.createServer(app.callback());

initCore(app, server);



app.listen(Config.HTTP_PORT, () => {
  console.log(`Server is running at http://localhost:${Config.HTTP_PORT}`);
  console.log(process.env.NODE_ENV)
});

