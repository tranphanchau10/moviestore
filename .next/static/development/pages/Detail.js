((window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\Detail.js"],{

/***/ "./api/api.js":
/*!********************!*\
  !*** ./api/api.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-fetch */ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _variables_general__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../variables/general */ "./variables/general.js");
/* harmony import */ var _config_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/database */ "./config/database.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var _default =
/*#__PURE__*/
function () {
  function _default() {
    _classCallCheck(this, _default);
  }

  _createClass(_default, null, [{
    key: "__get_Data_Carousel_Main_Home",
    value: function () {
      var _get_Data_Carousel_Main_Home = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context.sent;
                data = res.data;
                return _context.abrupt("return", data);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function __get_Data_Carousel_Main_Home() {
        return _get_Data_Carousel_Main_Home.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_1",
    value: function () {
      var _get_Common_Movies_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context2.sent;
                data = res.data;
                return _context2.abrupt("return", data);

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function __get_Common_Movies_1() {
        return _get_Common_Movies_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_2",
    value: function () {
      var _get_Common_Movies_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context3.sent;
                data = res.data;
                return _context3.abrupt("return", data);

              case 5:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function __get_Common_Movies_2() {
        return _get_Common_Movies_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_3",
    value: function () {
      var _get_Common_Movies_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context4.sent;
                data = res.data;
                return _context4.abrupt("return", data);

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function __get_Common_Movies_3() {
        return _get_Common_Movies_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_4",
    value: function () {
      var _get_Common_Movies_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context5.sent;
                data = res.data;
                return _context5.abrupt("return", data);

              case 5:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function __get_Common_Movies_4() {
        return _get_Common_Movies_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_5",
    value: function () {
      var _get_Common_Movies_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee6() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context6.sent;
                data = res.data;
                return _context6.abrupt("return", data);

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      return function __get_Common_Movies_5() {
        return _get_Common_Movies_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Common_Movies_6",
    value: function () {
      var _get_Common_Movies_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee7() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context7.sent;
                data = res.data;
                return _context7.abrupt("return", data);

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      return function __get_Common_Movies_6() {
        return _get_Common_Movies_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Feature_Main_Home",
    value: function () {
      var _get_Feature_Main_Home = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee8() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 10,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context8.sent;
                data = res.data;
                return _context8.abrupt("return", data);

              case 5:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8, this);
      }));

      return function __get_Feature_Main_Home() {
        return _get_Feature_Main_Home.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_1",
    value: function () {
      var _get_New_Day_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee9() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context9.sent;
                data = res.data;
                return _context9.abrupt("return", data);

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      return function __get_New_Day_1() {
        return _get_New_Day_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_2",
    value: function () {
      var _get_New_Day_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee10() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context10.sent;
                data = res.data;
                return _context10.abrupt("return", data);

              case 5:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this);
      }));

      return function __get_New_Day_2() {
        return _get_New_Day_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_3",
    value: function () {
      var _get_New_Day_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee11() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee11$(_context11) {
          while (1) {
            switch (_context11.prev = _context11.next) {
              case 0:
                _context11.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context11.sent;
                data = res.data;
                return _context11.abrupt("return", data);

              case 5:
              case "end":
                return _context11.stop();
            }
          }
        }, _callee11, this);
      }));

      return function __get_New_Day_3() {
        return _get_New_Day_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_4",
    value: function () {
      var _get_New_Day_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee12() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                _context12.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context12.sent;
                data = res.data;
                return _context12.abrupt("return", data);

              case 5:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      return function __get_New_Day_4() {
        return _get_New_Day_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_5",
    value: function () {
      var _get_New_Day_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee13() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                _context13.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context13.sent;
                data = res.data;
                return _context13.abrupt("return", data);

              case 5:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13, this);
      }));

      return function __get_New_Day_5() {
        return _get_New_Day_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_6",
    value: function () {
      var _get_New_Day_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee14() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee14$(_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                _context14.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context14.sent;
                data = res.data;
                return _context14.abrupt("return", data);

              case 5:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee14, this);
      }));

      return function __get_New_Day_6() {
        return _get_New_Day_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_7",
    value: function () {
      var _get_New_Day_7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee15() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee15$(_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _context15.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context15.sent;
                data = res.data;
                return _context15.abrupt("return", data);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee15, this);
      }));

      return function __get_New_Day_7() {
        return _get_New_Day_7.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_8",
    value: function () {
      var _get_New_Day_8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee16() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee16$(_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _context16.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context16.sent;
                data = res.data;
                return _context16.abrupt("return", data);

              case 5:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee16, this);
      }));

      return function __get_New_Day_8() {
        return _get_New_Day_8.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_9",
    value: function () {
      var _get_New_Day_9 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee17() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee17$(_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _context17.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context17.sent;
                data = res.data;
                return _context17.abrupt("return", data);

              case 5:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee17, this);
      }));

      return function __get_New_Day_9() {
        return _get_New_Day_9.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Day_10",
    value: function () {
      var _get_New_Day_10 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee18() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee18$(_context18) {
          while (1) {
            switch (_context18.prev = _context18.next) {
              case 0:
                _context18.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context18.sent;
                data = res.data;
                return _context18.abrupt("return", data);

              case 5:
              case "end":
                return _context18.stop();
            }
          }
        }, _callee18, this);
      }));

      return function __get_New_Day_10() {
        return _get_New_Day_10.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Update_Main_Home",
    value: function () {
      var _get_New_Update_Main_Home = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee19() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee19$(_context19) {
          while (1) {
            switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context19.sent;
                data = res.data;
                return _context19.abrupt("return", data);

              case 5:
              case "end":
                return _context19.stop();
            }
          }
        }, _callee19, this);
      }));

      return function __get_New_Update_Main_Home() {
        return _get_New_Update_Main_Home.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_1",
    value: function () {
      var _get_Top_Week_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee20() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee20$(_context20) {
          while (1) {
            switch (_context20.prev = _context20.next) {
              case 0:
                _context20.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context20.sent;
                data = res.data;
                return _context20.abrupt("return", data);

              case 5:
              case "end":
                return _context20.stop();
            }
          }
        }, _callee20, this);
      }));

      return function __get_Top_Week_1() {
        return _get_Top_Week_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_2",
    value: function () {
      var _get_Top_Week_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee21() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee21$(_context21) {
          while (1) {
            switch (_context21.prev = _context21.next) {
              case 0:
                _context21.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 2,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context21.sent;
                data = res.data;
                return _context21.abrupt("return", data);

              case 5:
              case "end":
                return _context21.stop();
            }
          }
        }, _callee21, this);
      }));

      return function __get_Top_Week_2() {
        return _get_Top_Week_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_3",
    value: function () {
      var _get_Top_Week_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee22() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee22$(_context22) {
          while (1) {
            switch (_context22.prev = _context22.next) {
              case 0:
                _context22.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 3,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context22.sent;
                data = res.data;
                return _context22.abrupt("return", data);

              case 5:
              case "end":
                return _context22.stop();
            }
          }
        }, _callee22, this);
      }));

      return function __get_Top_Week_3() {
        return _get_Top_Week_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_4",
    value: function () {
      var _get_Top_Week_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee23() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee23$(_context23) {
          while (1) {
            switch (_context23.prev = _context23.next) {
              case 0:
                _context23.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 4,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context23.sent;
                data = res.data;
                return _context23.abrupt("return", data);

              case 5:
              case "end":
                return _context23.stop();
            }
          }
        }, _callee23, this);
      }));

      return function __get_Top_Week_4() {
        return _get_Top_Week_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_5",
    value: function () {
      var _get_Top_Week_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee24() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee24$(_context24) {
          while (1) {
            switch (_context24.prev = _context24.next) {
              case 0:
                _context24.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 5,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context24.sent;
                data = res.data;
                return _context24.abrupt("return", data);

              case 5:
              case "end":
                return _context24.stop();
            }
          }
        }, _callee24, this);
      }));

      return function __get_Top_Week_5() {
        return _get_Top_Week_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Week_6",
    value: function () {
      var _get_Top_Week_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee25() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee25$(_context25) {
          while (1) {
            switch (_context25.prev = _context25.next) {
              case 0:
                _context25.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 6,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context25.sent;
                data = res.data;
                return _context25.abrupt("return", data);

              case 5:
              case "end":
                return _context25.stop();
            }
          }
        }, _callee25, this);
      }));

      return function __get_Top_Week_6() {
        return _get_Top_Week_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Trends_Main_Home",
    value: function () {
      var _get_Trends_Main_Home = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee26() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee26$(_context26) {
          while (1) {
            switch (_context26.prev = _context26.next) {
              case 0:
                _context26.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 5,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context26.sent;
                data = res.data;
                return _context26.abrupt("return", data);

              case 5:
              case "end":
                return _context26.stop();
            }
          }
        }, _callee26, this);
      }));

      return function __get_Trends_Main_Home() {
        return _get_Trends_Main_Home.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_1",
    value: function () {
      var _get_Main_News_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee27() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee27$(_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _context27.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context27.sent;
                data = res.data;
                return _context27.abrupt("return", data);

              case 5:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee27, this);
      }));

      return function __get_Main_News_1() {
        return _get_Main_News_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_2",
    value: function () {
      var _get_Main_News_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee28() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee28$(_context28) {
          while (1) {
            switch (_context28.prev = _context28.next) {
              case 0:
                _context28.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 2,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context28.sent;
                data = res.data;
                return _context28.abrupt("return", data);

              case 5:
              case "end":
                return _context28.stop();
            }
          }
        }, _callee28, this);
      }));

      return function __get_Main_News_2() {
        return _get_Main_News_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_3",
    value: function () {
      var _get_Main_News_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee29() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee29$(_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 3,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context29.sent;
                data = res.data;
                return _context29.abrupt("return", data);

              case 5:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee29, this);
      }));

      return function __get_Main_News_3() {
        return _get_Main_News_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_4",
    value: function () {
      var _get_Main_News_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee30() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee30$(_context30) {
          while (1) {
            switch (_context30.prev = _context30.next) {
              case 0:
                _context30.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 4,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context30.sent;
                data = res.data;
                return _context30.abrupt("return", data);

              case 5:
              case "end":
                return _context30.stop();
            }
          }
        }, _callee30, this);
      }));

      return function __get_Main_News_4() {
        return _get_Main_News_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_5",
    value: function () {
      var _get_Main_News_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee31() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee31$(_context31) {
          while (1) {
            switch (_context31.prev = _context31.next) {
              case 0:
                _context31.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 5,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context31.sent;
                data = res.data;
                return _context31.abrupt("return", data);

              case 5:
              case "end":
                return _context31.stop();
            }
          }
        }, _callee31, this);
      }));

      return function __get_Main_News_5() {
        return _get_Main_News_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_6",
    value: function () {
      var _get_Main_News_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee32() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee32$(_context32) {
          while (1) {
            switch (_context32.prev = _context32.next) {
              case 0:
                _context32.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 6,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context32.sent;
                data = res.data;
                return _context32.abrupt("return", data);

              case 5:
              case "end":
                return _context32.stop();
            }
          }
        }, _callee32, this);
      }));

      return function __get_Main_News_6() {
        return _get_Main_News_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_7",
    value: function () {
      var _get_Main_News_7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee33() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee33$(_context33) {
          while (1) {
            switch (_context33.prev = _context33.next) {
              case 0:
                _context33.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 7,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context33.sent;
                data = res.data;
                return _context33.abrupt("return", data);

              case 5:
              case "end":
                return _context33.stop();
            }
          }
        }, _callee33, this);
      }));

      return function __get_Main_News_7() {
        return _get_Main_News_7.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_8",
    value: function () {
      var _get_Main_News_8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee34() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee34$(_context34) {
          while (1) {
            switch (_context34.prev = _context34.next) {
              case 0:
                _context34.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 8,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context34.sent;
                data = res.data;
                return _context34.abrupt("return", data);

              case 5:
              case "end":
                return _context34.stop();
            }
          }
        }, _callee34, this);
      }));

      return function __get_Main_News_8() {
        return _get_Main_News_8.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_9",
    value: function () {
      var _get_Main_News_9 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee35() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee35$(_context35) {
          while (1) {
            switch (_context35.prev = _context35.next) {
              case 0:
                _context35.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 9,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context35.sent;
                data = res.data;
                return _context35.abrupt("return", data);

              case 5:
              case "end":
                return _context35.stop();
            }
          }
        }, _callee35, this);
      }));

      return function __get_Main_News_9() {
        return _get_Main_News_9.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_News_10",
    value: function () {
      var _get_Main_News_10 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee36() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee36$(_context36) {
          while (1) {
            switch (_context36.prev = _context36.next) {
              case 0:
                _context36.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 10,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context36.sent;
                data = res.data;
                return _context36.abrupt("return", data);

              case 5:
              case "end":
                return _context36.stop();
            }
          }
        }, _callee36, this);
      }));

      return function __get_Main_News_10() {
        return _get_Main_News_10.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Comedy",
    value: function () {
      var _get_Main_Comedy = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee37() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee37$(_context37) {
          while (1) {
            switch (_context37.prev = _context37.next) {
              case 0:
                _context37.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context37.sent;
                data = res.data;
                return _context37.abrupt("return", data);

              case 5:
              case "end":
                return _context37.stop();
            }
          }
        }, _callee37, this);
      }));

      return function __get_Main_Comedy() {
        return _get_Main_Comedy.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_1",
    value: function () {
      var _get_Main_Romance_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee38() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee38$(_context38) {
          while (1) {
            switch (_context38.prev = _context38.next) {
              case 0:
                _context38.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context38.sent;
                data = res.data;
                return _context38.abrupt("return", data);

              case 5:
              case "end":
                return _context38.stop();
            }
          }
        }, _callee38, this);
      }));

      return function __get_Main_Romance_1() {
        return _get_Main_Romance_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_2",
    value: function () {
      var _get_Main_Romance_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee39() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee39$(_context39) {
          while (1) {
            switch (_context39.prev = _context39.next) {
              case 0:
                _context39.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 2,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context39.sent;
                data = res.data;
                return _context39.abrupt("return", data);

              case 5:
              case "end":
                return _context39.stop();
            }
          }
        }, _callee39, this);
      }));

      return function __get_Main_Romance_2() {
        return _get_Main_Romance_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_3",
    value: function () {
      var _get_Main_Romance_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee40() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee40$(_context40) {
          while (1) {
            switch (_context40.prev = _context40.next) {
              case 0:
                _context40.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 3,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context40.sent;
                data = res.data;
                return _context40.abrupt("return", data);

              case 5:
              case "end":
                return _context40.stop();
            }
          }
        }, _callee40, this);
      }));

      return function __get_Main_Romance_3() {
        return _get_Main_Romance_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_4",
    value: function () {
      var _get_Main_Romance_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee41() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee41$(_context41) {
          while (1) {
            switch (_context41.prev = _context41.next) {
              case 0:
                _context41.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 4,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context41.sent;
                data = res.data;
                return _context41.abrupt("return", data);

              case 5:
              case "end":
                return _context41.stop();
            }
          }
        }, _callee41, this);
      }));

      return function __get_Main_Romance_4() {
        return _get_Main_Romance_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_5",
    value: function () {
      var _get_Main_Romance_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee42() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee42$(_context42) {
          while (1) {
            switch (_context42.prev = _context42.next) {
              case 0:
                _context42.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 5,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context42.sent;
                data = res.data;
                return _context42.abrupt("return", data);

              case 5:
              case "end":
                return _context42.stop();
            }
          }
        }, _callee42, this);
      }));

      return function __get_Main_Romance_5() {
        return _get_Main_Romance_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_6",
    value: function () {
      var _get_Main_Romance_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee43() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee43$(_context43) {
          while (1) {
            switch (_context43.prev = _context43.next) {
              case 0:
                _context43.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 6,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context43.sent;
                data = res.data;
                return _context43.abrupt("return", data);

              case 5:
              case "end":
                return _context43.stop();
            }
          }
        }, _callee43, this);
      }));

      return function __get_Main_Romance_6() {
        return _get_Main_Romance_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_7",
    value: function () {
      var _get_Main_Romance_7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee44() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee44$(_context44) {
          while (1) {
            switch (_context44.prev = _context44.next) {
              case 0:
                _context44.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 7,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context44.sent;
                data = res.data;
                return _context44.abrupt("return", data);

              case 5:
              case "end":
                return _context44.stop();
            }
          }
        }, _callee44, this);
      }));

      return function __get_Main_Romance_7() {
        return _get_Main_Romance_7.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_8",
    value: function () {
      var _get_Main_Romance_8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee45() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee45$(_context45) {
          while (1) {
            switch (_context45.prev = _context45.next) {
              case 0:
                _context45.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 8,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context45.sent;
                data = res.data;
                return _context45.abrupt("return", data);

              case 5:
              case "end":
                return _context45.stop();
            }
          }
        }, _callee45, this);
      }));

      return function __get_Main_Romance_8() {
        return _get_Main_Romance_8.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_9",
    value: function () {
      var _get_Main_Romance_9 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee46() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee46$(_context46) {
          while (1) {
            switch (_context46.prev = _context46.next) {
              case 0:
                _context46.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 9,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context46.sent;
                data = res.data;
                return _context46.abrupt("return", data);

              case 5:
              case "end":
                return _context46.stop();
            }
          }
        }, _callee46, this);
      }));

      return function __get_Main_Romance_9() {
        return _get_Main_Romance_9.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Main_Romance_10",
    value: function () {
      var _get_Main_Romance_10 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee47() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee47$(_context47) {
          while (1) {
            switch (_context47.prev = _context47.next) {
              case 0:
                _context47.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 10,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0)
                });

              case 2:
                res = _context47.sent;
                data = res.data;
                return _context47.abrupt("return", data);

              case 5:
              case "end":
                return _context47.stop();
            }
          }
        }, _callee47, this);
      }));

      return function __get_Main_Romance_10() {
        return _get_Main_Romance_10.apply(this, arguments);
      };
    }() //////////////////////////////////////////////////////////////////////
    /////////////////////// API CENIMA ///////////////////////////////////
    //////////////////////////////////////////////////////////////////////

  }, {
    key: "__get_Data_Carousel_Cenima",
    value: function () {
      var _get_Data_Carousel_Cenima = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee48() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee48$(_context48) {
          while (1) {
            switch (_context48.prev = _context48.next) {
              case 0:
                _context48.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 4,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context48.sent;
                data = res.data;
                return _context48.abrupt("return", data);

              case 5:
              case "end":
                return _context48.stop();
            }
          }
        }, _callee48, this);
      }));

      return function __get_Data_Carousel_Cenima() {
        return _get_Data_Carousel_Cenima.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Update_Cenima",
    value: function () {
      var _get_New_Update_Cenima = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee49() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee49$(_context49) {
          while (1) {
            switch (_context49.prev = _context49.next) {
              case 0:
                _context49.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context49.sent;
                data = res.data;
                return _context49.abrupt("return", data);

              case 5:
              case "end":
                return _context49.stop();
            }
          }
        }, _callee49, this);
      }));

      return function __get_New_Update_Cenima() {
        return _get_New_Update_Cenima.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_1",
    value: function () {
      var _get_Recommend_Cenima_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee50() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee50$(_context50) {
          while (1) {
            switch (_context50.prev = _context50.next) {
              case 0:
                _context50.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context50.sent;
                data = res.data;
                return _context50.abrupt("return", data);

              case 5:
              case "end":
                return _context50.stop();
            }
          }
        }, _callee50, this);
      }));

      return function __get_Recommend_Cenima_1() {
        return _get_Recommend_Cenima_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_2",
    value: function () {
      var _get_Recommend_Cenima_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee51() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee51$(_context51) {
          while (1) {
            switch (_context51.prev = _context51.next) {
              case 0:
                _context51.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context51.sent;
                data = res.data;
                return _context51.abrupt("return", data);

              case 5:
              case "end":
                return _context51.stop();
            }
          }
        }, _callee51, this);
      }));

      return function __get_Recommend_Cenima_2() {
        return _get_Recommend_Cenima_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_3",
    value: function () {
      var _get_Recommend_Cenima_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee52() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee52$(_context52) {
          while (1) {
            switch (_context52.prev = _context52.next) {
              case 0:
                _context52.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context52.sent;
                data = res.data;
                return _context52.abrupt("return", data);

              case 5:
              case "end":
                return _context52.stop();
            }
          }
        }, _callee52, this);
      }));

      return function __get_Recommend_Cenima_3() {
        return _get_Recommend_Cenima_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_4",
    value: function () {
      var _get_Recommend_Cenima_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee53() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee53$(_context53) {
          while (1) {
            switch (_context53.prev = _context53.next) {
              case 0:
                _context53.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context53.sent;
                data = res.data;
                return _context53.abrupt("return", data);

              case 5:
              case "end":
                return _context53.stop();
            }
          }
        }, _callee53, this);
      }));

      return function __get_Recommend_Cenima_4() {
        return _get_Recommend_Cenima_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_5",
    value: function () {
      var _get_Recommend_Cenima_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee54() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee54$(_context54) {
          while (1) {
            switch (_context54.prev = _context54.next) {
              case 0:
                _context54.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context54.sent;
                data = res.data;
                return _context54.abrupt("return", data);

              case 5:
              case "end":
                return _context54.stop();
            }
          }
        }, _callee54, this);
      }));

      return function __get_Recommend_Cenima_5() {
        return _get_Recommend_Cenima_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_6",
    value: function () {
      var _get_Recommend_Cenima_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee55() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee55$(_context55) {
          while (1) {
            switch (_context55.prev = _context55.next) {
              case 0:
                _context55.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context55.sent;
                data = res.data;
                return _context55.abrupt("return", data);

              case 5:
              case "end":
                return _context55.stop();
            }
          }
        }, _callee55, this);
      }));

      return function __get_Recommend_Cenima_6() {
        return _get_Recommend_Cenima_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_7",
    value: function () {
      var _get_Recommend_Cenima_7 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee56() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee56$(_context56) {
          while (1) {
            switch (_context56.prev = _context56.next) {
              case 0:
                _context56.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context56.sent;
                data = res.data;
                return _context56.abrupt("return", data);

              case 5:
              case "end":
                return _context56.stop();
            }
          }
        }, _callee56, this);
      }));

      return function __get_Recommend_Cenima_7() {
        return _get_Recommend_Cenima_7.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_8",
    value: function () {
      var _get_Recommend_Cenima_8 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee57() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee57$(_context57) {
          while (1) {
            switch (_context57.prev = _context57.next) {
              case 0:
                _context57.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context57.sent;
                data = res.data;
                return _context57.abrupt("return", data);

              case 5:
              case "end":
                return _context57.stop();
            }
          }
        }, _callee57, this);
      }));

      return function __get_Recommend_Cenima_8() {
        return _get_Recommend_Cenima_8.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_9",
    value: function () {
      var _get_Recommend_Cenima_9 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee58() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee58$(_context58) {
          while (1) {
            switch (_context58.prev = _context58.next) {
              case 0:
                _context58.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context58.sent;
                data = res.data;
                return _context58.abrupt("return", data);

              case 5:
              case "end":
                return _context58.stop();
            }
          }
        }, _callee58, this);
      }));

      return function __get_Recommend_Cenima_9() {
        return _get_Recommend_Cenima_9.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Cenima_10",
    value: function () {
      var _get_Recommend_Cenima_10 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee59() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee59$(_context59) {
          while (1) {
            switch (_context59.prev = _context59.next) {
              case 0:
                _context59.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context59.sent;
                data = res.data;
                return _context59.abrupt("return", data);

              case 5:
              case "end":
                return _context59.stop();
            }
          }
        }, _callee59, this);
      }));

      return function __get_Recommend_Cenima_10() {
        return _get_Recommend_Cenima_10.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Views_Cenima",
    value: function () {
      var _get_Top_Views_Cenima = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee60() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee60$(_context60) {
          while (1) {
            switch (_context60.prev = _context60.next) {
              case 0:
                _context60.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context60.sent;
                data = res.data;
                return _context60.abrupt("return", data);

              case 5:
              case "end":
                return _context60.stop();
            }
          }
        }, _callee60, this);
      }));

      return function __get_Top_Views_Cenima() {
        return _get_Top_Views_Cenima.apply(this, arguments);
      };
    }() //////////////////////////////////////////////////////////////////////
    ///////////////////////// API ANIME //////////////////////////////////
    //////////////////////////////////////////////////////////////////////

  }, {
    key: "__get_Data_Carousel_Anime",
    value: function () {
      var _get_Data_Carousel_Anime = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee61() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee61$(_context61) {
          while (1) {
            switch (_context61.prev = _context61.next) {
              case 0:
                _context61.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context61.sent;
                data = res.data;
                return _context61.abrupt("return", data);

              case 5:
              case "end":
                return _context61.stop();
            }
          }
        }, _callee61, this);
      }));

      return function __get_Data_Carousel_Anime() {
        return _get_Data_Carousel_Anime.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_New_Update_Anime",
    value: function () {
      var _get_New_Update_Anime = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee62() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee62$(_context62) {
          while (1) {
            switch (_context62.prev = _context62.next) {
              case 0:
                _context62.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context62.sent;
                data = res.data;
                return _context62.abrupt("return", data);

              case 5:
              case "end":
                return _context62.stop();
            }
          }
        }, _callee62, this);
      }));

      return function __get_New_Update_Anime() {
        return _get_New_Update_Anime.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_1",
    value: function () {
      var _get_Recommend_Anime_ = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee63() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee63$(_context63) {
          while (1) {
            switch (_context63.prev = _context63.next) {
              case 0:
                _context63.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context63.sent;
                data = res.data;
                return _context63.abrupt("return", data);

              case 5:
              case "end":
                return _context63.stop();
            }
          }
        }, _callee63, this);
      }));

      return function __get_Recommend_Anime_1() {
        return _get_Recommend_Anime_.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_2",
    value: function () {
      var _get_Recommend_Anime_2 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee64() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee64$(_context64) {
          while (1) {
            switch (_context64.prev = _context64.next) {
              case 0:
                _context64.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context64.sent;
                data = res.data;
                return _context64.abrupt("return", data);

              case 5:
              case "end":
                return _context64.stop();
            }
          }
        }, _callee64, this);
      }));

      return function __get_Recommend_Anime_2() {
        return _get_Recommend_Anime_2.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_3",
    value: function () {
      var _get_Recommend_Anime_3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee65() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee65$(_context65) {
          while (1) {
            switch (_context65.prev = _context65.next) {
              case 0:
                _context65.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context65.sent;
                data = res.data;
                return _context65.abrupt("return", data);

              case 5:
              case "end":
                return _context65.stop();
            }
          }
        }, _callee65, this);
      }));

      return function __get_Recommend_Anime_3() {
        return _get_Recommend_Anime_3.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_4",
    value: function () {
      var _get_Recommend_Anime_4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee66() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee66$(_context66) {
          while (1) {
            switch (_context66.prev = _context66.next) {
              case 0:
                _context66.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context66.sent;
                data = res.data;
                return _context66.abrupt("return", data);

              case 5:
              case "end":
                return _context66.stop();
            }
          }
        }, _callee66, this);
      }));

      return function __get_Recommend_Anime_4() {
        return _get_Recommend_Anime_4.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_5",
    value: function () {
      var _get_Recommend_Anime_5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee67() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee67$(_context67) {
          while (1) {
            switch (_context67.prev = _context67.next) {
              case 0:
                _context67.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context67.sent;
                data = res.data;
                return _context67.abrupt("return", data);

              case 5:
              case "end":
                return _context67.stop();
            }
          }
        }, _callee67, this);
      }));

      return function __get_Recommend_Anime_5() {
        return _get_Recommend_Anime_5.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Recommend_Anime_6",
    value: function () {
      var _get_Recommend_Anime_6 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee68() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee68$(_context68) {
          while (1) {
            switch (_context68.prev = _context68.next) {
              case 0:
                _context68.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 2,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context68.sent;
                data = res.data;
                return _context68.abrupt("return", data);

              case 5:
              case "end":
                return _context68.stop();
            }
          }
        }, _callee68, this);
      }));

      return function __get_Recommend_Anime_6() {
        return _get_Recommend_Anime_6.apply(this, arguments);
      };
    }()
  }, {
    key: "__get_Top_Views_Anime",
    value: function () {
      var _get_Top_Views_Anime = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee69() {
        var res, data;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee69$(_context69) {
          while (1) {
            switch (_context69.prev = _context69.next) {
              case 0:
                _context69.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("".concat(_variables_general__WEBPACK_IMPORTED_MODULE_3__["url"], "v1/collection/limit"), {
                  "limit": 6,
                  "indexPage": 1,
                  "projection": Object(_config_database__WEBPACK_IMPORTED_MODULE_4__["__get_Projection"])(1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
                });

              case 2:
                res = _context69.sent;
                data = res.data;
                return _context69.abrupt("return", data);

              case 5:
              case "end":
                return _context69.stop();
            }
          }
        }, _callee69, this);
      }));

      return function __get_Top_Views_Anime() {
        return _get_Top_Views_Anime.apply(this, arguments);
      };
    }()
  }]);

  return _default;
}();



/***/ }),

/***/ "./components/Header/Header.js":
/*!*************************************!*\
  !*** ./components/Header/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var Header =
/*#__PURE__*/
function (_Component) {
  _inherits(Header, _Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
        className: "site-header"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "master-container-fluid header-inner"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row justify-content-between"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-2 col-xl-3 d-flex align-items-center"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "d-block d-lg-none"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "navbar-toggler toggle-off-canvas-main-menu mr-2",
        "data-target": "#primary-menu-offcanvas"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "navbar-toggler-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "brand"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "brand d-flex align-items-center",
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-md-2 mr-1 icon-5x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 27 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
        className: "p-1 fs-6 fs-md-8"
      }, "HayDayTv"), " "))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto col-xl-6 align-items-center justify-content-center d-none d-md-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar navbar-expand-lg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "collapse navbar-collapse",
        id: "navbarSupportedContent"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "navbar-nav mr-auto"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item dropdown active",
        "data-hover": "dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link dropdown-toggle",
        href: "home.html"
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-mega-menu dropdown-bg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "triangle adonis-icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        width: "10",
        viewBox: "0 0 1851 1024"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M1834.153 925.301l-820.434-892.402c-23.746-19.978-54.664-32.116-88.418-32.116s-64.672 12.138-88.628 32.288l0.21-0.172c-47.293 47.293-773.141 836.884-822.49 894.458s4.112 100.755 86.361 100.755h1644.98c76.080 0 133.655-53.462 88.418-102.811z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "HOME"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled mb-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "new-releases.html"
      }, "New Releases")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "all-album.html"
      }, "All Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "featured-playlists.html"
      }, "Featured Playlists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-album.html"
      }, "Single Album")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-playlist.html"
      }, "Single Playlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-artist.html"
      }, "Single Artist"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "SHOP"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled mb-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "store.html"
      }, "Main Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genres-shop.html"
      }, "Shop Genre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-shop-item.html"
      }, "Single Shop Item")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "GENRE"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Pop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Under Ground")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Metal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Rock")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Jazz")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Country")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "World")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genres.html"
      }, "All genres")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "CHARTS"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-albums.html"
      }, "Top Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-artists.html"
      }, "Top Artists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "weekly-top-ten.html"
      }, "Weekly Top 15")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "usa-top-ten.html"
      }, "USA Top 10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "hot-songs.html"
      }, "Hot Songs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "videos.html"
      }, "Hot Videos")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "bg-col"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "radio.html"
      }, "Radio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "store.html"
      }, "Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "library.html"
      }, "Library")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-toggle": "dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-md"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "triangle adonis-icon"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        width: "10",
        viewBox: "0 0 1851 1024"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M1834.153 925.301l-820.434-892.402c-23.746-19.978-54.664-32.116-88.418-32.116s-64.672 12.138-88.628 32.288l0.21-0.172c-47.293 47.293-773.141 836.884-822.49 894.458s4.112 100.755 86.361 100.755h1644.98c76.080 0 133.655-53.462 88.418-102.811z"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "About us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Help & Support")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Terms and Privacy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Artist Originals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Store")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Blog & News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "menu-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Advertise"))))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-auto col-xl-3 d-flex justify-content-end justify-content-lg-end align-items-center navbar-secondary"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        id: "btn-search-4",
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "32",
        viewBox: "0 0 30 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M30.046 29.806l-7.127-7.287c2.109-2.395 3.397-5.558 3.397-9.021 0-3.721-1.486-7.094-3.896-9.56l0.003 0.003c-2.361-2.432-5.661-3.942-9.313-3.942s-6.953 1.51-9.31 3.939l-0.003 0.003c-2.388 2.462-3.86 5.824-3.86 9.53s1.472 7.068 3.863 9.533l-0.003-0.003c2.35 2.441 5.645 3.958 9.295 3.958 2.992 0 5.747-1.020 7.935-2.73l-0.028 0.021 7.207 7.383c0.232 0.225 0.548 0.364 0.896 0.368h0.001c0.344-0.001 0.656-0.142 0.881-0.368l0-0c0.252-0.237 0.409-0.573 0.409-0.945 0-0.34-0.131-0.65-0.345-0.881l0.001 0.001zM20.709 21.189c-1.906 1.978-4.577 3.206-7.536 3.206s-5.63-1.228-7.532-3.203l-0.003-0.003c-1.932-1.992-3.123-4.713-3.123-7.712s1.191-5.719 3.126-7.715l-0.003 0.003c1.906-1.978 4.577-3.206 7.536-3.206s5.63 1.228 7.532 3.203l0.003 0.003c1.932 1.992 3.123 4.713 3.123 7.712s-1.191 5.719-3.126 7.715l0.003-0.003z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-item d-none d-md-block"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link notification-toggle has-notification",
        href: "#",
        id: "dropdownUsernotifications",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon notification icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "24",
        viewBox: "0 0 29 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M19.286 25.607c-0.395 0-0.714 0.32-0.714 0.714v0 0c0 2.367-1.919 4.286-4.286 4.286s-4.286-1.919-4.286-4.286v0 0c0-0.395-0.32-0.714-0.714-0.714s-0.714 0.32-0.714 0.714v0 0c0 3.156 2.558 5.714 5.714 5.714s5.714-2.558 5.714-5.714v0 0c0-0.395-0.32-0.714-0.714-0.714v0zM27.857 23.464h-2.857v-9.179c0-5.917-4.797-10.714-10.714-10.714s-10.714 4.797-10.714 10.714v0 9.214h-2.857c-0.395 0-0.714 0.32-0.714 0.714s0.32 0.714 0.714 0.714v0h27.143c0.395 0 0.714-0.32 0.714-0.714s-0.32-0.714-0.714-0.714v0zM23.571 23.464h-18.571v-9.221c0.024-5.11 4.172-9.243 9.286-9.243 0 0 0 0 0 0v0c5.128 0 9.286 4.157 9.286 9.286v0zM14.286 2.857c0.789 0 1.429-0.64 1.429-1.429v0c0-0.789-0.64-1.429-1.429-1.429s-1.429 0.64-1.429 1.429v0c0 0.789 0.64 1.429 1.429 1.429v0z"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-menu-right p-4 notifications clearfix",
        role: "menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", null, "Notification"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media notification"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-thumb mr-3 rounded-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/browse/browse-overview-6.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "notification-desc"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Album from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "active-color"
      }, "Brenda Lee")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Catch Me Outside")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "inactive-color"
      }, "2 Hours ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon close-notification icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "12",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media notification"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-thumb mr-3 rounded-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/playlists/playlist-15.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "notification-desc"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Album from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "active-color"
      }, "Adm Smith")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Catch Me Outside")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "inactive-color"
      }, "3 Hours ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon close-notification icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "12",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "media notification"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-thumb mr-3 rounded-thumb"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/browse/browse-overview-5.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "notification-desc"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "New Album from ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "active-color"
      }, "Brenda Lee")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Catch Me Outside")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", {
        className: "inactive-color"
      }, "5 Hours ago"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon close-notification icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "12",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "nav-item position-relative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link dropdown-toggle w-nowrap pr-0",
        href: "#",
        id: "dropdownUserSettings",
        "data-toggle": "dropdown",
        "aria-haspopup": "true",
        "aria-expanded": "false"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "flex-row d-inline-flex"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "rounded-circle",
        src: "/assets/images/user-thumb-1.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "ml-2 mt-2 fs-1 d-none d-lg-block"
      }, "Jont Henrry"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dropdown-menu dropdown-menu-right user-settings-dropdown clearfix",
        "aria-labelledby": "dropdownUserSettings"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-top"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-cover-image"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/user/cover.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "user-profile-image rounded-circle"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: "/assets/images/browse/browse-overview-6.jpg",
        alt: ""
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "settings-bottom"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "user-name text-center"
      }, "Jont hennry"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "user-settings-menu list-unstyled"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon notification mr-3 icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M10 6c0-3.314 2.686-6 6-6s6 2.686 6 6c0 3.314-2.686 6-6 6s-6-2.686-6-6zM24.002 14h-1.107l-6.222 12.633 2.327-11.633-3-3-3 3 2.327 11.633-6.222-12.633h-1.107c-3.998 0-3.998 2.687-3.998 6v10h24v-10c0-3.313 0-6-3.998-6z"
      }))), "Your Profile")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M30 19l-9 9-3-3-2 2 5 5 11-11z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M14 24h10v-3.598c-2.101-1.225-4.885-2.066-8-2.321v-1.649c2.203-1.242 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h14v-2z"
      }))), "Following"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M0 0h8v8h-8zM12 2h20v4h-20zM0 12h8v8h-8zM12 14h20v4h-20zM0 24h8v8h-8zM12 26h20v4h-20z"
      }))), " Wish list"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        fill: "#000000",
        viewBox: "0 0 24 24",
        xmlns: "http://www.w3.org/2000/svg"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      }))), "Purchased"), " "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "inactive-color"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon mr-3 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "32",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"
      }))), "Logout"))))))))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/SideBar/SideBarLeft.js":
/*!*******************************************!*\
  !*** ./components/SideBar/SideBarLeft.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SideBarLeft; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SideBarLeft =
/*#__PURE__*/
function (_Component) {
  _inherits(SideBarLeft, _Component);

  function SideBarLeft() {
    _classCallCheck(this, SideBarLeft);

    return _possibleConstructorReturn(this, _getPrototypeOf(SideBarLeft).apply(this, arguments));
  }

  _createClass(SideBarLeft, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "primary-menu-offcanvas",
        className: "off-canvas off-canvas-left d-flex flex-column"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "m-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "close-offcanvas-main-menu",
        href: "#",
        "data-target": "#primary-menu-offcanvas"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-5x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "20",
        viewBox: "0 0 24 24"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M13.4 12l5.3-5.3c0.4-0.4 0.4-1 0-1.4s-1-0.4-1.4 0l-5.3 5.3-5.3-5.3c-0.4-0.4-1-0.4-1.4 0s-0.4 1 0 1.4l5.3 5.3-5.3 5.3c-0.4 0.4-0.4 1 0 1.4 0.2 0.2 0.4 0.3 0.7 0.3s0.5-0.1 0.7-0.3l5.3-5.3 5.3 5.3c0.2 0.2 0.5 0.3 0.7 0.3s0.5-0.1 0.7-0.3c0.4-0.4 0.4-1 0-1.4l-5.3-5.3z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "side-nav-container d-flex flex-column align-items-center ml-auto mr-auto position-relative"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "side-nav adonis-animate",
        "data-animation": "menuTwo",
        id: "site-side-nav",
        "data-level": "1",
        "data-animation-item": "> li > a"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link active",
        href: "home.html"
      }, "Home")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "radio.html"
      }, "Radio")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "library.html"
      }, "Library")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Shop ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "store.html"
      }, "Main Shop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genres-shop.html"
      }, "Shop Genre")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-shop-item.html"
      }, "Single Shop Item")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Browse ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "new-releases.html"
      }, "New Releases")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "all-album.html"
      }, "All Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "featured-playlists.html"
      }, "Featured Playlists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-album.html"
      }, "Single Album")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-playlist.html"
      }, "Single Playlist")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "single-artist.html"
      }, "Single Artist")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Genres ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Pop")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Under Ground")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Metal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Rock")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Jazz")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "Country")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "World")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "genre-classNameical.html"
      }, "All genres")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "Charts ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-highlight-active fs-1"
      }, "hot"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-album.html"
      }, "Top Albums")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "top-artists.html"
      }, "Top Artists")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "weekly-top-ten.html"
      }, "Weekly Top 10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "weekly-top-ten.html"
      }, "USA Top 10")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "hot-songs.html"
      }, "Hot Songs")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "hot-videos.html"
      }, "Hot Videos")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        className: "nav-item has-dropdown"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "nav-link",
        href: "#",
        "data-level": "2"
      }, "More", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-sm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1",
        height: "10"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("use", {
        xlinkHref: "#arrow-right"
      })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "sub-level"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#",
        className: "go-back",
        "data-level": "1"
      }, "Back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "About us")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Help & Support")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Contact")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Terms and Privacy")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Artist Originals")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "News")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, "Advertise")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "p-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "social-icons"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "list-inline horizon-list fs-3"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M19 6h5v-6h-5c-3.86 0-7 3.14-7 7v3h-4v6h4v16h6v-16h5l1-6h-6v-3c0-0.542 0.458-1 1-1z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M32 7.075c-1.175 0.525-2.444 0.875-3.769 1.031 1.356-0.813 2.394-2.1 2.887-3.631-1.269 0.75-2.675 1.3-4.169 1.594-1.2-1.275-2.906-2.069-4.794-2.069-3.625 0-6.563 2.938-6.563 6.563 0 0.512 0.056 1.012 0.169 1.494-5.456-0.275-10.294-2.888-13.531-6.862-0.563 0.969-0.887 2.1-0.887 3.3 0 2.275 1.156 4.287 2.919 5.463-1.075-0.031-2.087-0.331-2.975-0.819 0 0.025 0 0.056 0 0.081 0 3.181 2.263 5.838 5.269 6.437-0.55 0.15-1.131 0.231-1.731 0.231-0.425 0-0.831-0.044-1.237-0.119 0.838 2.606 3.263 4.506 6.131 4.563-2.25 1.762-5.075 2.813-8.156 2.813-0.531 0-1.050-0.031-1.569-0.094 2.913 1.869 6.362 2.95 10.069 2.95 12.075 0 18.681-10.006 18.681-18.681 0-0.287-0.006-0.569-0.019-0.85 1.281-0.919 2.394-2.075 3.275-3.394z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16 16-7.2 16-16-7.119-16-16-16zM23.363 23.119c-0.319 0.481-0.881 0.637-1.363 0.319-3.762-2.319-8.481-2.8-14.081-1.519-0.563 0.163-1.037-0.238-1.2-0.719-0.162-0.563 0.237-1.038 0.719-1.2 6.081-1.363 11.363-0.8 15.519 1.762 0.563 0.238 0.644 0.875 0.406 1.356zM25.281 18.719c-0.4 0.563-1.119 0.8-1.681 0.4-4.319-2.637-10.881-3.438-15.919-1.837-0.638 0.163-1.362-0.163-1.519-0.8-0.162-0.637 0.162-1.363 0.8-1.519 5.838-1.762 13.037-0.881 18 2.163 0.475 0.238 0.719 1.038 0.319 1.594zM25.438 14.238c-5.119-3.037-13.681-3.363-18.563-1.838-0.8 0.238-1.6-0.238-1.838-0.963-0.237-0.8 0.237-1.6 0.963-1.838 5.681-1.681 15.038-1.363 20.962 2.162 0.719 0.4 0.962 1.363 0.563 2.081-0.406 0.556-1.363 0.794-2.087 0.394z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 39 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M22.856 0h-6.856c-8.837 0-16 7.163-16 16s7.163 16 16 16v0h6.856c8.837 0 16-7.163 16-16s-7.163-16-16-16v0zM22.816 30.4h-6.776c-7.953 0-14.4-6.447-14.4-14.4v0 0c0-7.953 6.447-14.4 14.4-14.4v0h6.776c7.953 0 14.4 6.447 14.4 14.4v0 0c0 7.953-6.447 14.4-14.4 14.4v0zM26.64 16.496s0-0.064 0-0.096v-0.040l-0.104-0.112-0.12-0.112-9.728-5.6c-0.113-0.064-0.247-0.102-0.391-0.102-0.223 0-0.424 0.091-0.569 0.238l-0 0-0.072 0.088s-0.048 0.040-0.064 0.072 0 0 0 0.048c-0.068 0.112-0.109 0.247-0.112 0.391v11.129c0 0.442 0.358 0.8 0.8 0.8v0 0c0.166-0.006 0.318-0.062 0.442-0.154l-0.002 0.002 9.68-5.6 0.12-0.112c0.038-0.036 0.072-0.075 0.102-0.118l0.002-0.002s0 0 0 0 0-0.064 0-0.096c0.019-0.043 0.035-0.094 0.047-0.146l0.001-0.006c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c0.004-0.023 0.006-0.049 0.006-0.076s-0.002-0.053-0.006-0.079l0 0.003c-0.006-0.062-0.017-0.119-0.034-0.174l0.002 0.006zM17.040 21.008v-8.416l7.264 4.208z"
      }))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        href: "#"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "15",
        viewBox: "0 0 32 32"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 2.881c4.275 0 4.781 0.019 6.462 0.094 1.563 0.069 2.406 0.331 2.969 0.55 0.744 0.288 1.281 0.638 1.837 1.194 0.563 0.563 0.906 1.094 1.2 1.838 0.219 0.563 0.481 1.412 0.55 2.969 0.075 1.688 0.094 2.194 0.094 6.463s-0.019 4.781-0.094 6.463c-0.069 1.563-0.331 2.406-0.55 2.969-0.288 0.744-0.637 1.281-1.194 1.837-0.563 0.563-1.094 0.906-1.837 1.2-0.563 0.219-1.413 0.481-2.969 0.55-1.688 0.075-2.194 0.094-6.463 0.094s-4.781-0.019-6.463-0.094c-1.563-0.069-2.406-0.331-2.969-0.55-0.744-0.288-1.281-0.637-1.838-1.194-0.563-0.563-0.906-1.094-1.2-1.837-0.219-0.563-0.481-1.413-0.55-2.969-0.075-1.688-0.094-2.194-0.094-6.463s0.019-4.781 0.094-6.463c0.069-1.563 0.331-2.406 0.55-2.969 0.288-0.744 0.638-1.281 1.194-1.838 0.563-0.563 1.094-0.906 1.838-1.2 0.563-0.219 1.412-0.481 2.969-0.55 1.681-0.075 2.188-0.094 6.463-0.094zM16 0c-4.344 0-4.887 0.019-6.594 0.094-1.7 0.075-2.869 0.35-3.881 0.744-1.056 0.412-1.95 0.956-2.837 1.85-0.894 0.888-1.438 1.781-1.85 2.831-0.394 1.019-0.669 2.181-0.744 3.881-0.075 1.713-0.094 2.256-0.094 6.6s0.019 4.887 0.094 6.594c0.075 1.7 0.35 2.869 0.744 3.881 0.413 1.056 0.956 1.95 1.85 2.837 0.887 0.887 1.781 1.438 2.831 1.844 1.019 0.394 2.181 0.669 3.881 0.744 1.706 0.075 2.25 0.094 6.594 0.094s4.888-0.019 6.594-0.094c1.7-0.075 2.869-0.35 3.881-0.744 1.050-0.406 1.944-0.956 2.831-1.844s1.438-1.781 1.844-2.831c0.394-1.019 0.669-2.181 0.744-3.881 0.075-1.706 0.094-2.25 0.094-6.594s-0.019-4.887-0.094-6.594c-0.075-1.7-0.35-2.869-0.744-3.881-0.394-1.063-0.938-1.956-1.831-2.844-0.887-0.887-1.781-1.438-2.831-1.844-1.019-0.394-2.181-0.669-3.881-0.744-1.712-0.081-2.256-0.1-6.6-0.1v0z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M16 7.781c-4.537 0-8.219 3.681-8.219 8.219s3.681 8.219 8.219 8.219 8.219-3.681 8.219-8.219c0-4.537-3.681-8.219-8.219-8.219zM16 21.331c-2.944 0-5.331-2.387-5.331-5.331s2.387-5.331 5.331-5.331c2.944 0 5.331 2.387 5.331 5.331s-2.387 5.331-5.331 5.331z"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
        d: "M26.462 7.456c0 1.060-0.859 1.919-1.919 1.919s-1.919-0.859-1.919-1.919c0-1.060 0.859-1.919 1.919-1.919s1.919 0.859 1.919 1.919z"
      }))))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "copyright"
      }, " Copyright \xA9 2018 IconikTech. All rights reserved.")));
    }
  }]);

  return SideBarLeft;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./config/database.js":
/*!****************************!*\
  !*** ./config/database.js ***!
  \****************************/
/*! exports provided: __get_Projection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__get_Projection", function() { return __get_Projection; });
function __get_Projection(title, episodes, coverImage, key, contentImages, categories, fansub, countries, startMusicName, finishMusicName, videos, _id, part, episodesCurrent, content, releaseYear, otherTitle, view, rank, group, indexGroup, producer, imageMain, followers, filmActor, filmDirector, keyClass, page, status, author, linkTrailer, createdAt, updatedAt, __v) {
  var projection = {};

  if (Number(title) === 0) {
    projection.title = 0;
  }

  if (Number(episodes) === 0) {
    projection.episodes = 0;
  }

  if (Number(coverImage) === 0) {
    projection.coverImage = 0;
  }

  if (Number(key) === 0) {
    projection.key = 0;
  }

  if (Number(contentImages) === 0) {
    projection.contentImages = 0;
  }

  if (Number(categories) === 0) {
    projection.categories = 0;
  }

  if (Number(fansub) === 0) {
    projection.fansub = 0;
  }

  if (Number(countries) === 0) {
    projection.countries = 0;
  }

  if (Number(startMusicName) === 0) {
    projection.startMusicName = 0;
  }

  if (Number(finishMusicName) === 0) {
    projection.finishMusicName = 0;
  }

  if (Number(videos) === 0) {
    projection.videos = 0;
  }

  if (Number(_id) === 0) {
    projection._id = 0;
  }

  if (Number(part) === 0) {
    projection.part = 0;
  }

  if (Number(episodesCurrent) === 0) {
    projection.episodesCurrent = 0;
  }

  if (Number(content) === 0) {
    projection.content = 0;
  }

  if (Number(releaseYear) === 0) {
    projection.releaseYear = 0;
  }

  if (Number(otherTitle) === 0) {
    projection.otherTitle = 0;
  }

  if (Number(view) === 0) {
    projection.view = 0;
  }

  if (Number(rank) === 0) {
    projection.rank = 0;
  }

  if (Number(group) === 0) {
    projection.group = 0;
  }

  if (Number(indexGroup) === 0) {
    projection.indexGroup = 0;
  }

  if (Number(producer) === 0) {
    projection.producer = 0;
  }

  if (Number(imageMain) === 0) {
    projection.imageMain = 0;
  }

  if (Number(followers) === 0) {
    projection.followers = 0;
  }

  if (Number(filmActor) === 0) {
    projection.filmActor = 0;
  }

  if (Number(filmDirector) === 0) {
    projection.filmDirector = 0;
  }

  if (Number(keyClass) === 0) {
    projection.keyClass = 0;
  }

  if (Number(page) === 0) {
    projection.page = 0;
  }

  if (Number(status) === 0) {
    projection.status = 0;
  }

  if (Number(author) === 0) {
    projection.author = 0;
  }

  if (Number(linkTrailer) === 0) {
    projection.linkTrailer = 0;
  }

  if (Number(createdAt) === 0) {
    projection.createdAt = 0;
  }

  if (Number(updatedAt) === 0) {
    projection.updatedAt = 0;
  }

  if (Number(__v) === 0) {
    projection.__v = 0;
  }

  return projection;
}



/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "./node_modules/axios/index.js":
/*!*************************************!*\
  !*** ./node_modules/axios/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib/axios */ "./node_modules/axios/lib/axios.js");

/***/ }),

/***/ "./node_modules/axios/lib/adapters/xhr.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/adapters/xhr.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var settle = __webpack_require__(/*! ./../core/settle */ "./node_modules/axios/lib/core/settle.js");
var buildURL = __webpack_require__(/*! ./../helpers/buildURL */ "./node_modules/axios/lib/helpers/buildURL.js");
var parseHeaders = __webpack_require__(/*! ./../helpers/parseHeaders */ "./node_modules/axios/lib/helpers/parseHeaders.js");
var isURLSameOrigin = __webpack_require__(/*! ./../helpers/isURLSameOrigin */ "./node_modules/axios/lib/helpers/isURLSameOrigin.js");
var createError = __webpack_require__(/*! ../core/createError */ "./node_modules/axios/lib/core/createError.js");
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(/*! ./../helpers/btoa */ "./node_modules/axios/lib/helpers/btoa.js");

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if ("development" !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/axios/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(/*! ./../helpers/cookies */ "./node_modules/axios/lib/helpers/cookies.js");

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/axios.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/axios.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var Axios = __webpack_require__(/*! ./core/Axios */ "./node_modules/axios/lib/core/Axios.js");
var defaults = __webpack_require__(/*! ./defaults */ "./node_modules/axios/lib/defaults.js");

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(/*! ./cancel/Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");
axios.CancelToken = __webpack_require__(/*! ./cancel/CancelToken */ "./node_modules/axios/lib/cancel/CancelToken.js");
axios.isCancel = __webpack_require__(/*! ./cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(/*! ./helpers/spread */ "./node_modules/axios/lib/helpers/spread.js");

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/Cancel.js":
/*!*************************************************!*\
  !*** ./node_modules/axios/lib/cancel/Cancel.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/CancelToken.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/cancel/CancelToken.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(/*! ./Cancel */ "./node_modules/axios/lib/cancel/Cancel.js");

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),

/***/ "./node_modules/axios/lib/cancel/isCancel.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/cancel/isCancel.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/Axios.js":
/*!**********************************************!*\
  !*** ./node_modules/axios/lib/core/Axios.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(/*! ./../defaults */ "./node_modules/axios/lib/defaults.js");
var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var InterceptorManager = __webpack_require__(/*! ./InterceptorManager */ "./node_modules/axios/lib/core/InterceptorManager.js");
var dispatchRequest = __webpack_require__(/*! ./dispatchRequest */ "./node_modules/axios/lib/core/dispatchRequest.js");

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, {method: 'get'}, this.defaults, config);
  config.method = config.method.toLowerCase();

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),

/***/ "./node_modules/axios/lib/core/InterceptorManager.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/core/InterceptorManager.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),

/***/ "./node_modules/axios/lib/core/createError.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/core/createError.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(/*! ./enhanceError */ "./node_modules/axios/lib/core/enhanceError.js");

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),

/***/ "./node_modules/axios/lib/core/dispatchRequest.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/core/dispatchRequest.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");
var transformData = __webpack_require__(/*! ./transformData */ "./node_modules/axios/lib/core/transformData.js");
var isCancel = __webpack_require__(/*! ../cancel/isCancel */ "./node_modules/axios/lib/cancel/isCancel.js");
var defaults = __webpack_require__(/*! ../defaults */ "./node_modules/axios/lib/defaults.js");
var isAbsoluteURL = __webpack_require__(/*! ./../helpers/isAbsoluteURL */ "./node_modules/axios/lib/helpers/isAbsoluteURL.js");
var combineURLs = __webpack_require__(/*! ./../helpers/combineURLs */ "./node_modules/axios/lib/helpers/combineURLs.js");

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/core/enhanceError.js":
/*!*****************************************************!*\
  !*** ./node_modules/axios/lib/core/enhanceError.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),

/***/ "./node_modules/axios/lib/core/settle.js":
/*!***********************************************!*\
  !*** ./node_modules/axios/lib/core/settle.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(/*! ./createError */ "./node_modules/axios/lib/core/createError.js");

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),

/***/ "./node_modules/axios/lib/core/transformData.js":
/*!******************************************************!*\
  !*** ./node_modules/axios/lib/core/transformData.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),

/***/ "./node_modules/axios/lib/defaults.js":
/*!********************************************!*\
  !*** ./node_modules/axios/lib/defaults.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(/*! ./utils */ "./node_modules/axios/lib/utils.js");
var normalizeHeaderName = __webpack_require__(/*! ./helpers/normalizeHeaderName */ "./node_modules/axios/lib/helpers/normalizeHeaderName.js");

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(/*! ./adapters/xhr */ "./node_modules/axios/lib/adapters/xhr.js");
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(/*! ./adapters/http */ "./node_modules/axios/lib/adapters/xhr.js");
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/axios/lib/helpers/bind.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/bind.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/btoa.js":
/*!************************************************!*\
  !*** ./node_modules/axios/lib/helpers/btoa.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),

/***/ "./node_modules/axios/lib/helpers/buildURL.js":
/*!****************************************************!*\
  !*** ./node_modules/axios/lib/helpers/buildURL.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/combineURLs.js":
/*!*******************************************************!*\
  !*** ./node_modules/axios/lib/helpers/combineURLs.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/cookies.js":
/*!***************************************************!*\
  !*** ./node_modules/axios/lib/helpers/cookies.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isAbsoluteURL.js":
/*!*********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isAbsoluteURL.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/isURLSameOrigin.js":
/*!***********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/isURLSameOrigin.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),

/***/ "./node_modules/axios/lib/helpers/normalizeHeaderName.js":
/*!***************************************************************!*\
  !*** ./node_modules/axios/lib/helpers/normalizeHeaderName.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ../utils */ "./node_modules/axios/lib/utils.js");

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/parseHeaders.js":
/*!********************************************************!*\
  !*** ./node_modules/axios/lib/helpers/parseHeaders.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(/*! ./../utils */ "./node_modules/axios/lib/utils.js");

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),

/***/ "./node_modules/axios/lib/helpers/spread.js":
/*!**************************************************!*\
  !*** ./node_modules/axios/lib/helpers/spread.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),

/***/ "./node_modules/axios/lib/utils.js":
/*!*****************************************!*\
  !*** ./node_modules/axios/lib/utils.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(/*! ./helpers/bind */ "./node_modules/axios/lib/helpers/bind.js");
var isBuffer = __webpack_require__(/*! is-buffer */ "./node_modules/is-buffer/index.js");

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),

/***/ "./node_modules/is-buffer/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-buffer/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),

/***/ "./node_modules/isomorphic-fetch/fetch-npm-browserify.js":
/*!***************************************************************!*\
  !*** ./node_modules/isomorphic-fetch/fetch-npm-browserify.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// the whatwg-fetch polyfill installs the fetch() function
// on the global object (window or self)
//
// Return that as the export for use in Webpack, Browserify etc.
__webpack_require__(/*! whatwg-fetch */ "./node_modules/whatwg-fetch/fetch.js");
module.exports = self.fetch.bind(self);


/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_cc9c930292bbff5e67f3 ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_cc9c930292bbff5e67f3 */ "dll-reference dll_cc9c930292bbff5e67f3"))("./node_modules/react/index.js");

/***/ }),

/***/ "./node_modules/redux-thunk/es/index.js":
/*!**********************************************!*\
  !*** ./node_modules/redux-thunk/es/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),

/***/ "./node_modules/redux/es/redux.js":
/*!****************************************!*\
  !*** ./node_modules/redux/es/redux.js ***!
  \****************************************/
/*! exports provided: createStore, combineReducers, bindActionCreators, applyMiddleware, compose, __DO_NOT_USE__ActionTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return createStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return bindActionCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return applyMiddleware; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return compose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__DO_NOT_USE__ActionTypes", function() { return ActionTypes; });
/* harmony import */ var symbol_observable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! symbol-observable */ "./node_modules/symbol-observable/es/index.js");


/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var randomString = function randomString() {
  return Math.random().toString(36).substring(7).split('').join('.');
};

var ActionTypes = {
  INIT: "@@redux/INIT" + randomString(),
  REPLACE: "@@redux/REPLACE" + randomString(),
  PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
    return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
  }
};

/**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */
function isPlainObject(obj) {
  if (typeof obj !== 'object' || obj === null) return false;
  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */

function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
    throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
  }

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }
  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */


  function getState() {
    if (isDispatching) {
      throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
    }

    return currentState;
  }
  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */


  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected the listener to be a function.');
    }

    if (isDispatching) {
      throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
    }

    var isSubscribed = true;
    ensureCanMutateNextListeners();
    nextListeners.push(listener);
    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      if (isDispatching) {
        throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }

      isSubscribed = false;
      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }
  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */


  function dispatch(action) {
    if (!isPlainObject(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;

    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }
  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */


  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({
      type: ActionTypes.REPLACE
    });
  }
  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */


  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object' || observer === null) {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return {
          unsubscribe: unsubscribe
        };
      }
    }, _ref[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = function () {
      return this;
    }, _ref;
  } // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.


  dispatch({
    type: ActionTypes.INIT
  });
  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[symbol_observable__WEBPACK_IMPORTED_MODULE_0__["default"]] = observable, _ref2;
}

/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */


  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
  } catch (e) {} // eslint-disable-line no-empty

}

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
  return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!isPlainObject(inputState)) {
    return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });
  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });
  if (action && action.type === ActionTypes.REPLACE) return;

  if (unexpectedKeys.length > 0) {
    return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, {
      type: ActionTypes.INIT
    });

    if (typeof initialState === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
    }

    if (typeof reducer(undefined, {
      type: ActionTypes.PROBE_UNKNOWN_ACTION()
    }) === 'undefined') {
      throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
    }
  });
}
/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */


function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};

  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (true) {
      if (typeof reducers[key] === 'undefined') {
        warning("No reducer provided for key \"" + key + "\"");
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }

  var finalReducerKeys = Object.keys(finalReducers);
  var unexpectedKeyCache;

  if (true) {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError;

  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination(state, action) {
    if (state === void 0) {
      state = {};
    }

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (true) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);

      if (warningMessage) {
        warning(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};

    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);

      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }

      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }

    return hasChanged ? nextState : state;
  };
}

function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(this, arguments));
  };
}
/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */


function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error("bindActionCreators expected an object or a function, instead received " + (actionCreators === null ? 'null' : typeof actionCreators) + ". " + "Did you write \"import ActionCreators from\" instead of \"import * as ActionCreators from\"?");
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};

  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];

    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }

  return boundActionCreators;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    var ownKeys = Object.keys(source);

    if (typeof Object.getOwnPropertySymbols === 'function') {
      ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
        return Object.getOwnPropertyDescriptor(source, sym).enumerable;
      }));
    }

    ownKeys.forEach(function (key) {
      _defineProperty(target, key, source[key]);
    });
  }

  return target;
}

/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */
function compose() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(void 0, arguments));
    };
  });
}

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */

function applyMiddleware() {
  for (var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function () {
      var store = createStore.apply(void 0, arguments);

      var _dispatch = function dispatch() {
        throw new Error("Dispatching while constructing your middleware is not allowed. " + "Other middleware would not be applied to this dispatch.");
      };

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch() {
          return _dispatch.apply(void 0, arguments);
        }
      };
      var chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = compose.apply(void 0, chain)(store.dispatch);
      return _objectSpread({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */

function isCrushed() {}

if ("development" !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
}




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime-module.js":
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "./node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "./node_modules/symbol-observable/es/index.js":
/*!****************************************************!*\
  !*** ./node_modules/symbol-observable/es/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var _ponyfill_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ponyfill.js */ "./node_modules/symbol-observable/es/ponyfill.js");
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = Object(_ponyfill_js__WEBPACK_IMPORTED_MODULE_0__["default"])(root);
/* harmony default export */ __webpack_exports__["default"] = (result);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/symbol-observable/es/ponyfill.js":
/*!*******************************************************!*\
  !*** ./node_modules/symbol-observable/es/ponyfill.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return symbolObservablePonyfill; });
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./node_modules/whatwg-fetch/fetch.js":
/*!********************************************!*\
  !*** ./node_modules/whatwg-fetch/fetch.js ***!
  \********************************************/
/*! exports provided: Headers, Request, Response, DOMException, fetch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob:
    'FileReader' in self &&
    'Blob' in self &&
    (function() {
      try {
        new Blob()
        return true
      } catch (e) {
        return false
      }
    })(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
}

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj)
}

if (support.arrayBuffer) {
  var viewClasses = [
    '[object Int8Array]',
    '[object Uint8Array]',
    '[object Uint8ClampedArray]',
    '[object Int16Array]',
    '[object Uint16Array]',
    '[object Int32Array]',
    '[object Uint32Array]',
    '[object Float32Array]',
    '[object Float64Array]'
  ]

  var isArrayBufferView =
    ArrayBuffer.isView ||
    function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    }
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name)
  }
  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name')
  }
  return name.toLowerCase()
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value)
  }
  return value
}

// Build a destructive iterator for the value list
function iteratorFor(items) {
  var iterator = {
    next: function() {
      var value = items.shift()
      return {done: value === undefined, value: value}
    }
  }

  if (support.iterable) {
    iterator[Symbol.iterator] = function() {
      return iterator
    }
  }

  return iterator
}

function Headers(headers) {
  this.map = {}

  if (headers instanceof Headers) {
    headers.forEach(function(value, name) {
      this.append(name, value)
    }, this)
  } else if (Array.isArray(headers)) {
    headers.forEach(function(header) {
      this.append(header[0], header[1])
    }, this)
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function(name) {
      this.append(name, headers[name])
    }, this)
  }
}

Headers.prototype.append = function(name, value) {
  name = normalizeName(name)
  value = normalizeValue(value)
  var oldValue = this.map[name]
  this.map[name] = oldValue ? oldValue + ', ' + value : value
}

Headers.prototype['delete'] = function(name) {
  delete this.map[normalizeName(name)]
}

Headers.prototype.get = function(name) {
  name = normalizeName(name)
  return this.has(name) ? this.map[name] : null
}

Headers.prototype.has = function(name) {
  return this.map.hasOwnProperty(normalizeName(name))
}

Headers.prototype.set = function(name, value) {
  this.map[normalizeName(name)] = normalizeValue(value)
}

Headers.prototype.forEach = function(callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this)
    }
  }
}

Headers.prototype.keys = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push(name)
  })
  return iteratorFor(items)
}

Headers.prototype.values = function() {
  var items = []
  this.forEach(function(value) {
    items.push(value)
  })
  return iteratorFor(items)
}

Headers.prototype.entries = function() {
  var items = []
  this.forEach(function(value, name) {
    items.push([name, value])
  })
  return iteratorFor(items)
}

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'))
  }
  body.bodyUsed = true
}

function fileReaderReady(reader) {
  return new Promise(function(resolve, reject) {
    reader.onload = function() {
      resolve(reader.result)
    }
    reader.onerror = function() {
      reject(reader.error)
    }
  })
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsArrayBuffer(blob)
  return promise
}

function readBlobAsText(blob) {
  var reader = new FileReader()
  var promise = fileReaderReady(reader)
  reader.readAsText(blob)
  return promise
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf)
  var chars = new Array(view.length)

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i])
  }
  return chars.join('')
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0)
  } else {
    var view = new Uint8Array(buf.byteLength)
    view.set(new Uint8Array(buf))
    return view.buffer
  }
}

function Body() {
  this.bodyUsed = false

  this._initBody = function(body) {
    this._bodyInit = body
    if (!body) {
      this._bodyText = ''
    } else if (typeof body === 'string') {
      this._bodyText = body
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString()
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer)
      // IE 10-11 can't handle a DataView body.
      this._bodyInit = new Blob([this._bodyArrayBuffer])
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body)
    } else {
      this._bodyText = body = Object.prototype.toString.call(body)
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8')
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type)
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8')
      }
    }
  }

  if (support.blob) {
    this.blob = function() {
      var rejected = consumed(this)
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob')
      } else {
        return Promise.resolve(new Blob([this._bodyText]))
      }
    }

    this.arrayBuffer = function() {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
      } else {
        return this.blob().then(readBlobAsArrayBuffer)
      }
    }
  }

  this.text = function() {
    var rejected = consumed(this)
    if (rejected) {
      return rejected
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob)
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text')
    } else {
      return Promise.resolve(this._bodyText)
    }
  }

  if (support.formData) {
    this.formData = function() {
      return this.text().then(decode)
    }
  }

  this.json = function() {
    return this.text().then(JSON.parse)
  }

  return this
}

// HTTP methods whose capitalization should be normalized
var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT']

function normalizeMethod(method) {
  var upcased = method.toUpperCase()
  return methods.indexOf(upcased) > -1 ? upcased : method
}

function Request(input, options) {
  options = options || {}
  var body = options.body

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read')
    }
    this.url = input.url
    this.credentials = input.credentials
    if (!options.headers) {
      this.headers = new Headers(input.headers)
    }
    this.method = input.method
    this.mode = input.mode
    this.signal = input.signal
    if (!body && input._bodyInit != null) {
      body = input._bodyInit
      input.bodyUsed = true
    }
  } else {
    this.url = String(input)
  }

  this.credentials = options.credentials || this.credentials || 'same-origin'
  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers)
  }
  this.method = normalizeMethod(options.method || this.method || 'GET')
  this.mode = options.mode || this.mode || null
  this.signal = options.signal || this.signal
  this.referrer = null

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests')
  }
  this._initBody(body)
}

Request.prototype.clone = function() {
  return new Request(this, {body: this._bodyInit})
}

function decode(body) {
  var form = new FormData()
  body
    .trim()
    .split('&')
    .forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=')
        var name = split.shift().replace(/\+/g, ' ')
        var value = split.join('=').replace(/\+/g, ' ')
        form.append(decodeURIComponent(name), decodeURIComponent(value))
      }
    })
  return form
}

function parseHeaders(rawHeaders) {
  var headers = new Headers()
  // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2
  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ')
  preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
    var parts = line.split(':')
    var key = parts.shift().trim()
    if (key) {
      var value = parts.join(':').trim()
      headers.append(key, value)
    }
  })
  return headers
}

Body.call(Request.prototype)

function Response(bodyInit, options) {
  if (!options) {
    options = {}
  }

  this.type = 'default'
  this.status = options.status === undefined ? 200 : options.status
  this.ok = this.status >= 200 && this.status < 300
  this.statusText = 'statusText' in options ? options.statusText : 'OK'
  this.headers = new Headers(options.headers)
  this.url = options.url || ''
  this._initBody(bodyInit)
}

Body.call(Response.prototype)

Response.prototype.clone = function() {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  })
}

Response.error = function() {
  var response = new Response(null, {status: 0, statusText: ''})
  response.type = 'error'
  return response
}

var redirectStatuses = [301, 302, 303, 307, 308]

Response.redirect = function(url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code')
  }

  return new Response(null, {status: status, headers: {location: url}})
}

var DOMException = self.DOMException
try {
  new DOMException()
} catch (err) {
  DOMException = function(message, name) {
    this.message = message
    this.name = name
    var error = Error(message)
    this.stack = error.stack
  }
  DOMException.prototype = Object.create(Error.prototype)
  DOMException.prototype.constructor = DOMException
}

function fetch(input, init) {
  return new Promise(function(resolve, reject) {
    var request = new Request(input, init)

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'))
    }

    var xhr = new XMLHttpRequest()

    function abortXhr() {
      xhr.abort()
    }

    xhr.onload = function() {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      }
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL')
      var body = 'response' in xhr ? xhr.response : xhr.responseText
      resolve(new Response(body, options))
    }

    xhr.onerror = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.ontimeout = function() {
      reject(new TypeError('Network request failed'))
    }

    xhr.onabort = function() {
      reject(new DOMException('Aborted', 'AbortError'))
    }

    xhr.open(request.method, request.url, true)

    if (request.credentials === 'include') {
      xhr.withCredentials = true
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob'
    }

    request.headers.forEach(function(value, name) {
      xhr.setRequestHeader(name, value)
    })

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr)

      xhr.onreadystatechange = function() {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr)
        }
      }
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit)
  })
}

fetch.polyfill = true

if (!self.fetch) {
  self.fetch = fetch
  self.Headers = Headers
  self.Request = Request
  self.Response = Response
}


/***/ }),

/***/ "./pages/Detail.js":
/*!*************************!*\
  !*** ./pages/Detail.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Detail; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/SideBar/SideBarLeft */ "./components/SideBar/SideBarLeft.js");
/* harmony import */ var _components_Header_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header/Header */ "./components/Header/Header.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/api */ "./api/api.js");
/* harmony import */ var _store_store__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/store */ "./store/store.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Detail =
/*#__PURE__*/
function (_Component) {
  _inherits(Detail, _Component);

  function Detail() {
    _classCallCheck(this, Detail);

    return _possibleConstructorReturn(this, _getPrototypeOf(Detail).apply(this, arguments));
  }

  _createClass(Detail, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "wrap",
        className: "light main-wrap clearfix"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SideBar_SideBarLeft__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Header_Header__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "site-content"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "site-content-inner"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "album-wrap"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box-text-over lg box-rounded-lg"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "resize1",
        src: "/assets/images/single/single-2.jpg",
        style: {
          width: "100%",
          height: 300,
          marginBottom: 20
        },
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-3 flex-column-sidebar-md text-center text-md-left"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "album-image"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box d-inline-block"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina box-rounded-md",
        src: "/assets/images/single/single-2.jpg",
        "data-2x": "/assets/images/single/single-2@2x.jpg",
        alt: ""
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-info"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        className: "btn btn-60-60 btn-primary absolute-center adonis-album-button round-btn text-light",
        "data-album-id": "1",
        role: "button",
        tabindex: "0"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-play icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        id: "icon-brand-play",
        viewBox: "0 0 27 32",
        width: "100%",
        height: "100%"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M2.594 0.275c-0.257-0.166-0.571-0.265-0.908-0.265-0.932 0-1.688 0.756-1.688 1.688 0 0.028 0.001 0.055 0.002 0.082l-0-0.004v13.246l16.702-6.219zM26.030 14.49l-4.184-2.541-21.846 8.102v10.154c-0.001 0.024-0.002 0.051-0.002 0.079 0 0.927 0.752 1.679 1.679 1.679 0.319 0 0.617-0.089 0.871-0.243l-0.007 0.004c1.501-0.888 22.21-13.433 23.489-14.214 0.52-0.316 0.863-0.88 0.863-1.524s-0.342-1.207-0.855-1.519l-0.008-0.004z"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-pause icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        version: "1.1",
        xmlns: "http://www.w3.org/2000/svg",
        height: "20",
        viewBox: "0 0 29 32"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M19.2 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("path", {
        d: "M1.6 0h8c0.884 0 1.6 0.716 1.6 1.6v28.8c0 0.884-0.716 1.6-1.6 1.6h-8c-0.884 0-1.6-0.716-1.6-1.6v-28.8c0-0.884 0.716-1.6 1.6-1.6z"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pb-4 d-inline-block album-likes"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon pr-2 icon-2x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pr-2"
      }, "1256"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon pr-2 icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", null, "125K")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "about"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "About this album"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "className aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse faucibus sed dolor eget posuere.Sed id interdum urna. Nam ac elit a ante commodo tristique. Duis lacus urna, condimentum a vehicula a, hendrerit ac nisi Lorem ipsum dolor sit amet Vestibulum imperdiet nibh vel magna lacinia ultrices. Sed id interdum urna. Nam ac elit a ante commodo tristique. ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pt-e-20 pt-e-lg-40"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "col-md-9 flex-column-content-md pl-e-xl-40"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "album-top-box text-center text-md-left"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "inactive-color"
      }, "ALBUM"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
        className: "album-title"
      }, "The Ones That Like Me"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-2"
      }, "By: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Danielle Bradberry"), "  classNameical"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "separator mb-4 mt-4"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "separator-md"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-2"
      }, "14 Songs - 30 minutes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-2"
      }, "Released on November 12, 2017")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
        className: "adonis-album-list pb-5 pt-e-30"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number h6 inactive-color"
      }, "#"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title h6 inactive-color"
      }, "Song"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre h6 inactive-color"
      }, "Genre"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration h6 inactive-color"
      }, "Time"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon h6 inactive-color icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "01"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Begining To See The Light"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "14:13")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1245"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "02"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Ugly Christmas Sweater"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "10:14")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1010"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "03"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Feliz Navidad"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "11:08")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1110"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "04"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "What are You Doing New Year's Eve?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "14:13")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1245"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "05"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Mashmallow World"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "12:14")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1245"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "06"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Hard Candy Christmas"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "13:15")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1325"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "07"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Baby, It's Cold Outside"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "16:16")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1980"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "08"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "The Man With The Bag"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "18:14")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1745"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "09"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "What I'm Thankful for"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "19:26")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1428"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "10"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "What I've Done - One More Light Live"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "14:13")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1563"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-number"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "11"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-show adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-brand-play"
      })), " ")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-title"
      }, "Talking to Myself - One More Light Live"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-genre"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide hover-lg-show"
      }, "classNameical")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-duration"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "17:16")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "hover-hide"
      }, "1536"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-show d-flex flex-nowrap hover-tools"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-1x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-heart-blank"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon icon-3x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-plus"
      })), " "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "ml-3 adonis-icon pointer dropdown-menu-toggle"
      }, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      })))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-bg gradient-adonis"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-2"
      }, "Released on November 12, 2017"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "mb-2"
      }, "\xA9 2018 Adonis Inc."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "more-items"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pt-e-20 pt-e-lg-40"
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "title-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
        className: "title h3-md"
      }, "More By Danielle Bradbery")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "adonis-carousel auto-fit-columns",
        "data-auto-width": "no",
        "data-item-parent": ".owl-carousel",
        "data-auto-fit-items": ".item",
        "data-dots": "yes",
        "data-items-responsive": "0:1|400:2|600:3|900:4|1200:5"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "gutter-30"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "owl-carousel owl-theme-adonis"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-1.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-1@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-2.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-2@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-3.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-3@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-4.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-4@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-5.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-5@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-6.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-6@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-7.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-7@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-8.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-8@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "item hover-bg-item"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "music-img-box"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "img-box box-rounded-sm"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        className: "retina",
        src: "/assets/images/new-releases/new-releases-9.jpg",
        "data-2x": "/assets/images/new-releases/new-releases-9@2x.jpg",
        alt: ""
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "hover-state"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-bottom-left pl-e-20 pb-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer play-btn-dark round-btn"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
        className: "play-icon"
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "absolute-top-right pr-e-20 pt-e-20"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "pointer dropdown-menu-toggle"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "adonis-icon icon-4x"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        version: "1.1"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("use", {
        xlinkHref: "#icon-horizontal-dots"
      }))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h6", {
        className: "title"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Vestibulum nibh lorem ipsum")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "sub-title category"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#"
      }, "Adonis Music Pop"))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        className: "pt-e-5 pt-e-lg-10"
      })))))));
    }
  }]);

  return Detail;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



Detail.getInitialProps =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(context) {
    var store, metaKey;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            store = Object(_store_store__WEBPACK_IMPORTED_MODULE_5__["default"])();
            metaKey = context.query.metaKey;
            return _context.abrupt("return", {
              data: store.getState()
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref.apply(this, arguments);
  };
}();
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/Detail")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./store/store.js":
/*!************************!*\
  !*** ./store/store.js ***!
  \************************/
/*! exports provided: storeCarouselMainHome, storeCommonMovies_1, storeCommonMovies_2, storeCommonMovies_3, storeCommonMovies_4, storeCommonMovies_5, storeCommonMovies_6, storeFeatureMainHome, storeNewDay_1, storeNewDay_2, storeNewDay_3, storeNewDay_4, storeNewDay_5, storeNewDay_6, storeNewDay_7, storeNewDay_8, storeNewDay_9, storeNewDay_10, storeNewUpdateMainHome, storeTopWeek_1, storeTopWeek_2, storeTopWeek_3, storeTopWeek_4, storeTopWeek_5, storeTopWeek_6, storeTrendsMainHome, storeMainNews_1, storeMainNews_2, storeMainNews_3, storeMainNews_4, storeMainNews_5, storeMainNews_6, storeMainNews_7, storeMainNews_8, storeMainNews_9, storeMainNews_10, storeMainComedy, storeMainRomance_1, storeMainRomance_2, storeMainRomance_3, storeMainRomance_4, storeMainRomance_5, storeMainRomance_6, storeMainRomance_7, storeMainRomance_8, storeMainRomance_9, storeMainRomance_10, storeCarouselCenima, storeNewUpdateCenima, storeRecommendCenima_1, storeRecommendCenima_2, storeRecommendCenima_3, storeRecommendCenima_4, storeRecommendCenima_5, storeRecommendCenima_6, storeRecommendCenima_7, storeRecommendCenima_8, storeRecommendCenima_9, storeRecommendCenima_10, storeTopViewsCenima, storeCarouselAnime, storeTopViewsAnime, storeNewUpdateAnime, storeRecommendAnime_1, storeRecommendAnime_2, storeRecommendAnime_3, storeRecommendAnime_4, storeRecommendAnime_5, storeRecommendAnime_6, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCarouselMainHome", function() { return storeCarouselMainHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_1", function() { return storeCommonMovies_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_2", function() { return storeCommonMovies_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_3", function() { return storeCommonMovies_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_4", function() { return storeCommonMovies_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_5", function() { return storeCommonMovies_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCommonMovies_6", function() { return storeCommonMovies_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeFeatureMainHome", function() { return storeFeatureMainHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_1", function() { return storeNewDay_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_2", function() { return storeNewDay_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_3", function() { return storeNewDay_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_4", function() { return storeNewDay_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_5", function() { return storeNewDay_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_6", function() { return storeNewDay_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_7", function() { return storeNewDay_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_8", function() { return storeNewDay_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_9", function() { return storeNewDay_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewDay_10", function() { return storeNewDay_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewUpdateMainHome", function() { return storeNewUpdateMainHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_1", function() { return storeTopWeek_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_2", function() { return storeTopWeek_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_3", function() { return storeTopWeek_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_4", function() { return storeTopWeek_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_5", function() { return storeTopWeek_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopWeek_6", function() { return storeTopWeek_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTrendsMainHome", function() { return storeTrendsMainHome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_1", function() { return storeMainNews_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_2", function() { return storeMainNews_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_3", function() { return storeMainNews_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_4", function() { return storeMainNews_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_5", function() { return storeMainNews_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_6", function() { return storeMainNews_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_7", function() { return storeMainNews_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_8", function() { return storeMainNews_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_9", function() { return storeMainNews_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainNews_10", function() { return storeMainNews_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainComedy", function() { return storeMainComedy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_1", function() { return storeMainRomance_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_2", function() { return storeMainRomance_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_3", function() { return storeMainRomance_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_4", function() { return storeMainRomance_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_5", function() { return storeMainRomance_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_6", function() { return storeMainRomance_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_7", function() { return storeMainRomance_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_8", function() { return storeMainRomance_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_9", function() { return storeMainRomance_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeMainRomance_10", function() { return storeMainRomance_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCarouselCenima", function() { return storeCarouselCenima; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewUpdateCenima", function() { return storeNewUpdateCenima; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_1", function() { return storeRecommendCenima_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_2", function() { return storeRecommendCenima_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_3", function() { return storeRecommendCenima_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_4", function() { return storeRecommendCenima_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_5", function() { return storeRecommendCenima_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_6", function() { return storeRecommendCenima_6; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_7", function() { return storeRecommendCenima_7; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_8", function() { return storeRecommendCenima_8; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_9", function() { return storeRecommendCenima_9; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendCenima_10", function() { return storeRecommendCenima_10; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopViewsCenima", function() { return storeTopViewsCenima; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeCarouselAnime", function() { return storeCarouselAnime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeTopViewsAnime", function() { return storeTopViewsAnime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeNewUpdateAnime", function() { return storeNewUpdateAnime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_1", function() { return storeRecommendAnime_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_2", function() { return storeRecommendAnime_2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_3", function() { return storeRecommendAnime_3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_4", function() { return storeRecommendAnime_4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_5", function() { return storeRecommendAnime_5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeRecommendAnime_6", function() { return storeRecommendAnime_6; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

 /////////////// TẠO ACTION ///////////////////////////////////////////////

var storeCarouselMainHome = function storeCarouselMainHome(data) {
  return {
    type: "STORE_CAROUSEL_MAIN_HOME",
    data: data
  };
};
var storeCommonMovies_1 = function storeCommonMovies_1(data) {
  return {
    type: "STORE_COMMON_MOVIES_1",
    data: data
  };
};
var storeCommonMovies_2 = function storeCommonMovies_2(data) {
  return {
    type: "STORE_COMMON_MOVIES_2",
    data: data
  };
};
var storeCommonMovies_3 = function storeCommonMovies_3(data) {
  return {
    type: "STORE_COMMON_MOVIES_3",
    data: data
  };
};
var storeCommonMovies_4 = function storeCommonMovies_4(data) {
  return {
    type: "STORE_COMMON_MOVIES_4",
    data: data
  };
};
var storeCommonMovies_5 = function storeCommonMovies_5(data) {
  return {
    type: "STORE_COMMON_MOVIES_5",
    data: data
  };
};
var storeCommonMovies_6 = function storeCommonMovies_6(data) {
  return {
    type: "STORE_COMMON_MOVIES_6",
    data: data
  };
};
var storeFeatureMainHome = function storeFeatureMainHome(data) {
  return {
    type: "STORE_FEATURE_MAIN_HOME_1",
    data: data
  };
};
var storeNewDay_1 = function storeNewDay_1(data) {
  return {
    type: "STORE_NEW_DAY_1",
    data: data
  };
};
var storeNewDay_2 = function storeNewDay_2(data) {
  return {
    type: "STORE_NEW_DAY_2",
    data: data
  };
};
var storeNewDay_3 = function storeNewDay_3(data) {
  return {
    type: "STORE_NEW_DAY_3",
    data: data
  };
};
var storeNewDay_4 = function storeNewDay_4(data) {
  return {
    type: "STORE_NEW_DAY_4",
    data: data
  };
};
var storeNewDay_5 = function storeNewDay_5(data) {
  return {
    type: "STORE_NEW_DAY_5",
    data: data
  };
};
var storeNewDay_6 = function storeNewDay_6(data) {
  return {
    type: "STORE_NEW_DAY_6",
    data: data
  };
};
var storeNewDay_7 = function storeNewDay_7(data) {
  return {
    type: "STORE_NEW_DAY_7",
    data: data
  };
};
var storeNewDay_8 = function storeNewDay_8(data) {
  return {
    type: "STORE_NEW_DAY_8",
    data: data
  };
};
var storeNewDay_9 = function storeNewDay_9(data) {
  return {
    type: "STORE_NEW_DAY_9",
    data: data
  };
};
var storeNewDay_10 = function storeNewDay_10(data) {
  return {
    type: "STORE_NEW_DAY_10",
    data: data
  };
};
var storeNewUpdateMainHome = function storeNewUpdateMainHome(data) {
  return {
    type: "STORE_NEW_UPDATE_MAIN_HOME",
    data: data
  };
};
var storeTopWeek_1 = function storeTopWeek_1(data) {
  return {
    type: "STORE_TOP_WEEK_1",
    data: data
  };
};
var storeTopWeek_2 = function storeTopWeek_2(data) {
  return {
    type: "STORE_TOP_WEEK_2",
    data: data
  };
};
var storeTopWeek_3 = function storeTopWeek_3(data) {
  return {
    type: "STORE_TOP_WEEK_3",
    data: data
  };
};
var storeTopWeek_4 = function storeTopWeek_4(data) {
  return {
    type: "STORE_TOP_WEEK_4",
    data: data
  };
};
var storeTopWeek_5 = function storeTopWeek_5(data) {
  return {
    type: "STORE_TOP_WEEK_5",
    data: data
  };
};
var storeTopWeek_6 = function storeTopWeek_6(data) {
  return {
    type: "STORE_TOP_WEEK_6",
    data: data
  };
};
var storeTrendsMainHome = function storeTrendsMainHome(data) {
  return {
    type: "STORE_TRENDS_MAIN_HOME",
    data: data
  };
};
var storeMainNews_1 = function storeMainNews_1(data) {
  return {
    type: "STORE_MAIN_NEWS_1",
    data: data
  };
};
var storeMainNews_2 = function storeMainNews_2(data) {
  return {
    type: "STORE_MAIN_NEWS_2",
    data: data
  };
};
var storeMainNews_3 = function storeMainNews_3(data) {
  return {
    type: "STORE_MAIN_NEWS_3",
    data: data
  };
};
var storeMainNews_4 = function storeMainNews_4(data) {
  return {
    type: "STORE_MAIN_NEWS_4",
    data: data
  };
};
var storeMainNews_5 = function storeMainNews_5(data) {
  return {
    type: "STORE_MAIN_NEWS_5",
    data: data
  };
};
var storeMainNews_6 = function storeMainNews_6(data) {
  return {
    type: "STORE_MAIN_NEWS_6",
    data: data
  };
};
var storeMainNews_7 = function storeMainNews_7(data) {
  return {
    type: "STORE_MAIN_NEWS_7",
    data: data
  };
};
var storeMainNews_8 = function storeMainNews_8(data) {
  return {
    type: "STORE_MAIN_NEWS_8",
    data: data
  };
};
var storeMainNews_9 = function storeMainNews_9(data) {
  return {
    type: "STORE_MAIN_NEWS_9",
    data: data
  };
};
var storeMainNews_10 = function storeMainNews_10(data) {
  return {
    type: "STORE_MAIN_NEWS_10",
    data: data
  };
};
var storeMainComedy = function storeMainComedy(data) {
  return {
    type: "STORE_MAIN_COMEDY",
    data: data
  };
};
var storeMainRomance_1 = function storeMainRomance_1(data) {
  return {
    type: "STORE_MAIN_ROMANCE_1",
    data: data
  };
};
var storeMainRomance_2 = function storeMainRomance_2(data) {
  return {
    type: "STORE_MAIN_ROMANCE_2",
    data: data
  };
};
var storeMainRomance_3 = function storeMainRomance_3(data) {
  return {
    type: "STORE_MAIN_ROMANCE_3",
    data: data
  };
};
var storeMainRomance_4 = function storeMainRomance_4(data) {
  return {
    type: "STORE_MAIN_ROMANCE_4",
    data: data
  };
};
var storeMainRomance_5 = function storeMainRomance_5(data) {
  return {
    type: "STORE_MAIN_ROMANCE_5",
    data: data
  };
};
var storeMainRomance_6 = function storeMainRomance_6(data) {
  return {
    type: "STORE_MAIN_ROMANCE_6",
    data: data
  };
};
var storeMainRomance_7 = function storeMainRomance_7(data) {
  return {
    type: "STORE_MAIN_ROMANCE_7",
    data: data
  };
};
var storeMainRomance_8 = function storeMainRomance_8(data) {
  return {
    type: "STORE_MAIN_ROMANCE_8",
    data: data
  };
};
var storeMainRomance_9 = function storeMainRomance_9(data) {
  return {
    type: "STORE_MAIN_ROMANCE_9",
    data: data
  };
};
var storeMainRomance_10 = function storeMainRomance_10(data) {
  return {
    type: "STORE_MAIN_ROMANCE_10",
    data: data
  };
}; ////////////////////////////////////////////////////////////////////////////
/////////////////////////// CENIMA /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

var storeCarouselCenima = function storeCarouselCenima(data) {
  return {
    type: "STORE_CAROUSEL_CENIMA",
    data: data
  };
};
var storeNewUpdateCenima = function storeNewUpdateCenima(data) {
  return {
    type: "STORE_NEW_UPDATE_CENIMA",
    data: data
  };
};
var storeRecommendCenima_1 = function storeRecommendCenima_1(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_1",
    data: data
  };
};
var storeRecommendCenima_2 = function storeRecommendCenima_2(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_2",
    data: data
  };
};
var storeRecommendCenima_3 = function storeRecommendCenima_3(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_3",
    data: data
  };
};
var storeRecommendCenima_4 = function storeRecommendCenima_4(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_4",
    data: data
  };
};
var storeRecommendCenima_5 = function storeRecommendCenima_5(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_5",
    data: data
  };
};
var storeRecommendCenima_6 = function storeRecommendCenima_6(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_6",
    data: data
  };
};
var storeRecommendCenima_7 = function storeRecommendCenima_7(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_7",
    data: data
  };
};
var storeRecommendCenima_8 = function storeRecommendCenima_8(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_8",
    data: data
  };
};
var storeRecommendCenima_9 = function storeRecommendCenima_9(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_9",
    data: data
  };
};
var storeRecommendCenima_10 = function storeRecommendCenima_10(data) {
  return {
    type: "STORE_RECOMMEND_CENIMA_10",
    data: data
  };
};
var storeTopViewsCenima = function storeTopViewsCenima(data) {
  return {
    type: "STORE_TOP_VIEWS_CENIMA",
    data: data
  };
}; ////////////////////////////////////////////////////////////////////////////
//////////////////////////// ANIME /////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

var storeCarouselAnime = function storeCarouselAnime(data) {
  return {
    type: "STORE_CAROUSEL_ANIME",
    data: data
  };
};
var storeTopViewsAnime = function storeTopViewsAnime(data) {
  return {
    type: "STORE_TOP_VIEWS_ANIME",
    data: data
  };
};
var storeNewUpdateAnime = function storeNewUpdateAnime(data) {
  return {
    type: "STORE_NEW_UPDATE_ANIME",
    data: data
  };
};
var storeRecommendAnime_1 = function storeRecommendAnime_1(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_1",
    data: data
  };
};
var storeRecommendAnime_2 = function storeRecommendAnime_2(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_2",
    data: data
  };
};
var storeRecommendAnime_3 = function storeRecommendAnime_3(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_3",
    data: data
  };
};
var storeRecommendAnime_4 = function storeRecommendAnime_4(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_4",
    data: data
  };
};
var storeRecommendAnime_5 = function storeRecommendAnime_5(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_5",
    data: data
  };
};
var storeRecommendAnime_6 = function storeRecommendAnime_6(data) {
  return {
    type: "STORE_RECOMMEND_ANIME_6",
    data: data
  };
}; /////////////////////////// REDUCER ////////////////////////////////////////

var carouselMainHomeReducer = function carouselMainHomeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_CAROUSEL_MAIN_HOME":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_1_Reducer = function commonMovies_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_1":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_2_Reducer = function commonMovies_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_2":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_3_Reducer = function commonMovies_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_3":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_4_Reducer = function commonMovies_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_4":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_5_Reducer = function commonMovies_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_5":
      return action.data;

    default:
      return state;
  }
};

var commonMovies_6_Reducer = function commonMovies_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_COMMON_MOVIES_6":
      return action.data;

    default:
      return state;
  }
};

var feature_Main_Home_Reducer = function feature_Main_Home_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_FEATURE_MAIN_HOME_1":
      return action.data;

    default:
      return state;
  }
};

var newDay_1_Reducer = function newDay_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_1":
      return action.data;

    default:
      return state;
  }
};

var newDay_2_Reducer = function newDay_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_2":
      return action.data;

    default:
      return state;
  }
};

var newDay_3_Reducer = function newDay_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_3":
      return action.data;

    default:
      return state;
  }
};

var newDay_4_Reducer = function newDay_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_4":
      return action.data;

    default:
      return state;
  }
};

var newDay_5_Reducer = function newDay_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_5":
      return action.data;

    default:
      return state;
  }
};

var newDay_6_Reducer = function newDay_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_6":
      return action.data;

    default:
      return state;
  }
};

var newDay_7_Reducer = function newDay_7_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_7":
      return action.data;

    default:
      return state;
  }
};

var newDay_8_Reducer = function newDay_8_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_8":
      return action.data;

    default:
      return state;
  }
};

var newDay_9_Reducer = function newDay_9_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_9":
      return action.data;

    default:
      return state;
  }
};

var newDay_10_Reducer = function newDay_10_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_DAY_10":
      return action.data;

    default:
      return state;
  }
};

var newUpdate_Main_Home_Reducer = function newUpdate_Main_Home_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_UPDATE_MAIN_HOME":
      return action.data;

    default:
      return state;
  }
};

var topWeek_1_Reducer = function topWeek_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_1":
      return action.data;

    default:
      return state;
  }
};

var topWeek_2_Reducer = function topWeek_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_2":
      return action.data;

    default:
      return state;
  }
};

var topWeek_3_Reducer = function topWeek_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_3":
      return action.data;

    default:
      return state;
  }
};

var topWeek_4_Reducer = function topWeek_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_4":
      return action.data;

    default:
      return state;
  }
};

var topWeek_5_Reducer = function topWeek_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_5":
      return action.data;

    default:
      return state;
  }
};

var topWeek_6_Reducer = function topWeek_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_WEEK_6":
      return action.data;

    default:
      return state;
  }
};

var trends_Main_Home_Reducer = function trends_Main_Home_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TRENDS_MAIN_HOME":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_1_Reducer = function main_Romance_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_1":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_2_Reducer = function main_Romance_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_2":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_3_Reducer = function main_Romance_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_3":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_4_Reducer = function main_Romance_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_4":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_5_Reducer = function main_Romance_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_5":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_6_Reducer = function main_Romance_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_6":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_7_Reducer = function main_Romance_7_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_7":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_8_Reducer = function main_Romance_8_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_8":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_9_Reducer = function main_Romance_9_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_9":
      return action.data;

    default:
      return state;
  }
};

var main_Romance_10_Reducer = function main_Romance_10_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_ROMANCE_10":
      return action.data;

    default:
      return state;
  }
}; ////////////////////////////////////////////////////////////////////////////
///////////////////////////// CENIMA ///////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


var carouselCenimaReducer = function carouselCenimaReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_CAROUSEL_CENIMA":
      return action.data;

    default:
      return state;
  }
};

var newUpdate_Cenima_Reducer = function newUpdate_Cenima_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_UPDATE_CENIMA":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_1_Reducer = function recommend_Cenima_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_1":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_2_Reducer = function recommend_Cenima_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_2":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_3_Reducer = function recommend_Cenima_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_3":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_4_Reducer = function recommend_Cenima_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_4":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_5_Reducer = function recommend_Cenima_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_5":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_6_Reducer = function recommend_Cenima_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_6":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_7_Reducer = function recommend_Cenima_7_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_7":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_8_Reducer = function recommend_Cenima_8_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_8":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_9_Reducer = function recommend_Cenima_9_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_9":
      return action.data;

    default:
      return state;
  }
};

var recommend_Cenima_10_Reducer = function recommend_Cenima_10_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_CENIMA_10":
      return action.data;

    default:
      return state;
  }
};

var mainNews_1_Reducer = function mainNews_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_1":
      return action.data;

    default:
      return state;
  }
};

var mainNews_2_Reducer = function mainNews_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_2":
      return action.data;

    default:
      return state;
  }
};

var mainNews_3_Reducer = function mainNews_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_3":
      return action.data;

    default:
      return state;
  }
};

var mainNews_4_Reducer = function mainNews_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_4":
      return action.data;

    default:
      return state;
  }
};

var mainNews_5_Reducer = function mainNews_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_5":
      return action.data;

    default:
      return state;
  }
};

var mainNews_6_Reducer = function mainNews_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_6":
      return action.data;

    default:
      return state;
  }
};

var mainNews_7_Reducer = function mainNews_7_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_7":
      return action.data;

    default:
      return state;
  }
};

var mainNews_8_Reducer = function mainNews_8_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_8":
      return action.data;

    default:
      return state;
  }
};

var mainNews_9_Reducer = function mainNews_9_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_9":
      return action.data;

    default:
      return state;
  }
};

var mainNews_10_Reducer = function mainNews_10_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_NEWS_10":
      return action.data;

    default:
      return state;
  }
};

var mainComedy_Reducer = function mainComedy_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_MAIN_COMEDY":
      return action.data;

    default:
      return state;
  }
};

var topViews_Cenima_Reducer = function topViews_Cenima_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_VIEWS_CENIMA":
      return action.data;

    default:
      return state;
  }
}; ////////////////////////////////////////////////////////////////////////
/////////////////////////// ANIME //////////////////////////////////////
////////////////////////////////////////////////////////////////////////


var carouselAnimeReducer = function carouselAnimeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_CAROUSEL_ANIME":
      return action.data;

    default:
      return state;
  }
};

var topViews_Anime_Reducer = function topViews_Anime_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_TOP_VIEWS_ANIME":
      return action.data;

    default:
      return state;
  }
};

var newUpdate_Anime_Reducer = function newUpdate_Anime_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_NEW_UPDATE_ANIME":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_1_Reducer = function recommend_Anime_1_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_1":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_2_Reducer = function recommend_Anime_2_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_2":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_3_Reducer = function recommend_Anime_3_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_3":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_4_Reducer = function recommend_Anime_4_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_4":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_5_Reducer = function recommend_Anime_5_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_5":
      return action.data;

    default:
      return state;
  }
};

var recommend_Anime_6_Reducer = function recommend_Anime_6_Reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case "STORE_RECOMMEND_ANIME_6":
      return action.data;

    default:
      return state;
  }
};

var reducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  carousel_Main_Home: carouselMainHomeReducer,
  commonMovies_1: commonMovies_1_Reducer,
  commonMovies_2: commonMovies_2_Reducer,
  commonMovies_3: commonMovies_3_Reducer,
  commonMovies_4: commonMovies_4_Reducer,
  commonMovies_5: commonMovies_5_Reducer,
  commonMovies_6: commonMovies_6_Reducer,
  feature_Main_Home: feature_Main_Home_Reducer,
  newDay_1: newDay_1_Reducer,
  newDay_2: newDay_2_Reducer,
  newDay_3: newDay_3_Reducer,
  newDay_4: newDay_4_Reducer,
  newDay_5: newDay_5_Reducer,
  newDay_6: newDay_6_Reducer,
  newDay_7: newDay_7_Reducer,
  newDay_8: newDay_8_Reducer,
  newDay_9: newDay_9_Reducer,
  newDay_10: newDay_10_Reducer,
  newUpdate_Main_Home: newUpdate_Main_Home_Reducer,
  topWeek_1: topWeek_1_Reducer,
  topWeek_2: topWeek_2_Reducer,
  topWeek_3: topWeek_3_Reducer,
  topWeek_4: topWeek_4_Reducer,
  topWeek_5: topWeek_5_Reducer,
  topWeek_6: topWeek_6_Reducer,
  trends_Main_Home: trends_Main_Home_Reducer,
  carousel_Cenima: carouselCenimaReducer,
  newUpdate_Cenima: newUpdate_Cenima_Reducer,
  recommend_Cenima_1: recommend_Cenima_1_Reducer,
  recommend_Cenima_2: recommend_Cenima_2_Reducer,
  recommend_Cenima_3: recommend_Cenima_3_Reducer,
  recommend_Cenima_4: recommend_Cenima_4_Reducer,
  recommend_Cenima_5: recommend_Cenima_5_Reducer,
  recommend_Cenima_6: recommend_Cenima_6_Reducer,
  recommend_Cenima_7: recommend_Cenima_7_Reducer,
  recommend_Cenima_8: recommend_Cenima_8_Reducer,
  recommend_Cenima_9: recommend_Cenima_9_Reducer,
  recommend_Cenima_10: recommend_Cenima_10_Reducer,
  mainNews_1: mainNews_1_Reducer,
  mainNews_2: mainNews_2_Reducer,
  mainNews_3: mainNews_3_Reducer,
  mainNews_4: mainNews_4_Reducer,
  mainNews_5: mainNews_5_Reducer,
  mainNews_6: mainNews_6_Reducer,
  mainNews_7: mainNews_7_Reducer,
  mainNews_8: mainNews_8_Reducer,
  mainNews_9: mainNews_9_Reducer,
  mainNews_10: mainNews_10_Reducer,
  mainComedy: mainComedy_Reducer,
  topViews_Cenima: topViews_Cenima_Reducer,
  main_Romance_1: main_Romance_1_Reducer,
  main_Romance_2: main_Romance_2_Reducer,
  main_Romance_3: main_Romance_3_Reducer,
  main_Romance_4: main_Romance_4_Reducer,
  main_Romance_5: main_Romance_5_Reducer,
  main_Romance_6: main_Romance_6_Reducer,
  main_Romance_7: main_Romance_7_Reducer,
  main_Romance_8: main_Romance_8_Reducer,
  main_Romance_9: main_Romance_9_Reducer,
  main_Romance_10: main_Romance_10_Reducer,
  newUpdate_Anime: newUpdate_Anime_Reducer,
  recommend_Anime_1: recommend_Anime_1_Reducer,
  recommend_Anime_2: recommend_Anime_2_Reducer,
  recommend_Anime_3: recommend_Anime_3_Reducer,
  recommend_Anime_4: recommend_Anime_4_Reducer,
  recommend_Anime_5: recommend_Anime_5_Reducer,
  recommend_Anime_6: recommend_Anime_6_Reducer,
  topViews_Anime: topViews_Anime_Reducer,
  carousel_Anime: carouselAnimeReducer
}); ////////////////////////////////////////////////////////////////////////////////////////

/* harmony default export */ __webpack_exports__["default"] = (function (initialState) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_1__["default"]));
});

/***/ }),

/***/ "./variables/general.js":
/*!******************************!*\
  !*** ./variables/general.js ***!
  \******************************/
/*! exports provided: url */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "url", function() { return url; });
var url = "http://localhost:4098/";


/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/Detail.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__NEXT_REGISTER_PAGE('/Detail', function() {
module.exports = __webpack_require__(/*! ./pages/Detail.js */"./pages/Detail.js");

return { page: module.exports.default }});

/***/ }),

/***/ "dll-reference dll_cc9c930292bbff5e67f3":
/*!*******************************************!*\
  !*** external "dll_cc9c930292bbff5e67f3" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_cc9c930292bbff5e67f3;

/***/ })

},[[3,"static/runtime/webpack.js"]]]));;
//# sourceMappingURL=Detail.js.map