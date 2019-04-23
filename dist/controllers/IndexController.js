"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _IndexModel = _interopRequireDefault(require("../models/IndexModel"));

var indexModel = new _IndexModel.default();

var IndexController =
/*#__PURE__*/
function () {
  function IndexController() {
    (0, _classCallCheck2.default)(this, IndexController);
  }

  (0, _createClass2.default)(IndexController, [{
    key: "indexAction",
    value: function indexAction(app) {
      return (
        /*#__PURE__*/
        function () {
          var _ref = (0, _asyncToGenerator2.default)(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee(ctx, next) {
            var users, result;
            return _regenerator.default.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    // ctx.body = 'hello lynshir'
                    ctx.state.name = 'lynshir';
                    users = [{
                      name: 'Dead Horse'
                    }, {
                      name: 'Jack'
                    }, {
                      name: 'Tom'
                    }];
                    _context.next = 4;
                    return indexModel.getData();

                  case 4:
                    result = _context.sent;
                    _context.next = 7;
                    return ctx.render('index', {
                      users: users,
                      ip: '192.123.123.123',
                      result: result
                    });

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          return function (_x, _x2) {
            return _ref.apply(this, arguments);
          };
        }()
      );
    }
  }, {
    key: "infoAction",
    value: function infoAction(app) {
      return (
        /*#__PURE__*/
        function () {
          var _ref2 = (0, _asyncToGenerator2.default)(
          /*#__PURE__*/
          _regenerator.default.mark(function _callee2(ctx, next) {
            return _regenerator.default.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    // ctx.body = 'hello lynshir'
                    ctx.state.name = 'lynshir';
                    ctx.state.ip = '123123123123123';
                    _context2.next = 4;
                    return ctx.render('ejs/info');

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));

          return function (_x3, _x4) {
            return _ref2.apply(this, arguments);
          };
        }()
      );
    }
  }]);
  return IndexController;
}();

exports.default = IndexController;