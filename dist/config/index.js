"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _lodash = _interopRequireDefault(require("lodash"));

var init = function () {
  var config = {
    viewDir: ''
  };
  var localConfig = {};

  if (process.env.NODE_ENV === 'development') {
    localConfig = {
      port: 8787
    };
  }

  if (process.env.NODE_ENV === 'production') {
    localConfig = {
      port: 8788
    };
  }

  Object.assign(config, localConfig);
  return config;
}();

var _default = init;
exports.default = _default;