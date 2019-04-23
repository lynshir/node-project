"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _koa = _interopRequireDefault(require("koa"));

var _koaRouter = _interopRequireDefault(require("koa-router"));

var _koaEjs = _interopRequireDefault(require("koa-ejs"));

var _config = _interopRequireDefault(require("./config"));

var _index = _interopRequireDefault(require("./controllers/index"));

var serve = require('koa-static');

var path = require('path');

var app = new _koa.default();
var router = new _koaRouter.default();
(0, _koaEjs.default)(app, {
  root: path.join(__dirname, 'view/ejs'),
  layout: false,
  viewExt: 'ejs',
  //此处的扩展名决定了生产环境的最终
  cache: false,
  debug: true
});
(0, _index.default)(app, router);
app.use(router.routes()).use(router.allowedMethods()).use(serve(__dirname + '/static')).listen(_config.default.port, function () {
  console.log('监听端口' + _config.default.port);
  console.log(process.env.NODE_ENV, 'process.env.NODE_ENV');
});