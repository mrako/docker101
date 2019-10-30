const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const cors = require('kcors');

const messages = require('./messages');

const app = new Koa();

app.use(cors({ credentials: true }));
app.use(bodyParser());

const router = new Router({ prefix: '/api' });

router.post('/messages', messages.create);
router.get('/messages', messages.list);

app.use(router.routes());
app.use(router.allowedMethods());

module.exports = app;
