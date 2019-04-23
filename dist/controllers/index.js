"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _IndexController = _interopRequireDefault(require("./IndexController"));

var controllers = new _IndexController.default();

var _default = function _default(app, router) {
  router.get('/', controllers.indexAction(app));
  router.get('/info', controllers.infoAction(app));
};

exports.default = _default;