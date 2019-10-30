const Koa = require('koa');
const app = module.exports = new Koa();

const PORT = process.env.PORT || 3000;

app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

if (!module.parent) {
  app.listen(PORT);
  console.log(`Running on port ${PORT}`);
}
