"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

/**
 * @class Model入口类
 * @author lynshir
 */
var IndexModel =
/*#__PURE__*/
function () {
  /**
   * 
   * @param {object} app ctx上下文对象 
   */
  function IndexModel(app) {
    (0, _classCallCheck2.default)(this, IndexModel);
  }
  /**
   * @returns promise
   */


  (0, _createClass2.default)(IndexModel, [{
    key: "getData",
    value: function getData() {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve('resolve成功----');
        }, 1000);
      });
    }
  }]);
  return IndexModel;
}();

exports.default = IndexModel;