import Router from 'koa-router';
import Config from '../../config/config';

const router = new Router({
  prefix: `${Config.API_PREFIX}v1`,
})

router.get('/test', async (ctx) => {
  console.log(123123123)
  // const { id } = ctx.request.body as { id: number }; // Explicitly type ctx.request.body as { id: number }
  // const token = ctx.header['authorization'] || ctx.cookies.get('authorization');
  // if (!token) {
  //   ctx.throw(401, 'Token is required');
  // }

  // if (typeof id !== 'number') {
  //   ctx.throw(400, 'Invalid id');
  // }
  // ctx.throw(200, 'Success', { data: {} })
  ctx.body = 'test'
});
export default router;