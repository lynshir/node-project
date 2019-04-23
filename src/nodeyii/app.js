const serve = require('koa-static');
import Koa from 'koa'
import Router from 'koa-router'
import render from 'koa-ejs'
const path = require('path');
import config from './config'
import indexController from './controllers/index'

const app = new Koa()
const router = new Router();
render(app, {
  root: path.join(__dirname, 'view/ejs'),
  layout: false,
  viewExt: 'ejs', //此处的扩展名决定了生产环境的最终
  cache: false,
  debug: true
});
indexController(app, router)
app
  .use(router.routes())
  .use(router.allowedMethods())
  .use(serve(__dirname + '/static'))
  .listen(config.port, () => {
    console.log('监听端口' + config.port)
    console.log(process.env.NODE_ENV, 'process.env.NODE_ENV')
  })