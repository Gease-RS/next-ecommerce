self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./context/cart.js":
/*!*************************!*\
  !*** ./context/cart.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartProvider": function() { return /* binding */ CartProvider; },
/* harmony export */   "useCartState": function() { return /* binding */ useCartState; },
/* harmony export */   "useCartDispatch": function() { return /* binding */ useCartDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");
/* module decorator */ module = __webpack_require__.hmd(module);





var _jsxFileName = "C:\\Users\\gease\\Documents\\DEVELOPER\\next-ecommerce\\context\\cart.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var CartStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)();
var CartDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_4__.createContext)();
var SET_CART = "SET_CART";
var initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: []
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case SET_CART:
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      throw new Error("Unknown action: ".concat(action.type));
  }
};

var CartProvider = function CartProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useReducer)(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    getCart();
  }, []);

  var setCart = function setCart(payload) {
    return dispatch({
      type: SET_CART,
      payload: payload
    });
  };

  var getCart = /*#__PURE__*/function () {
    var _ref2 = (0,C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__.default)( /*#__PURE__*/C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
      var cart;
      return C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _lib_commerce__WEBPACK_IMPORTED_MODULE_5__.default.cart.retrieve();

            case 3:
              cart = _context.sent;
              setCart(cart);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function getCart() {
      return _ref2.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartDispatchContext.Provider, {
    value: {
      setCart: setCart
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartStateContext.Provider, {
      value: state,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(CartProvider, "bgCdjuTOmPdSBRwTap80EFd9Y3U=");

_c = CartProvider;
var useCartState = function useCartState() {
  _s2();

  return (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(CartStateContext);
};

_s2(useCartState, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var useCartDispatch = function useCartDispatch() {
  _s3();

  return (0,react__WEBPACK_IMPORTED_MODULE_4__.useContext)(CartDispatchContext);
};

_s3(useCartDispatch, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "CartProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dC9jYXJ0LmpzIl0sIm5hbWVzIjpbIkNhcnRTdGF0ZUNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiQ2FydERpc3BhdGNoQ29udGV4dCIsIlNFVF9DQVJUIiwiaW5pdGlhbFN0YXRlIiwidG90YWxfaXRlbXMiLCJ0b3RhbF91bmlxdWVfaXRlbXMiLCJsaW5lX2l0ZW1zIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJFcnJvciIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlRWZmZWN0IiwiZ2V0Q2FydCIsInNldENhcnQiLCJjb21tZXJjZSIsImNhcnQiLCJjb25zb2xlIiwibG9nIiwidXNlQ2FydFN0YXRlIiwidXNlQ29udGV4dCIsInVzZUNhcnREaXNwYXRjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBRUE7QUFFQSxJQUFNQSxnQkFBZ0IsZ0JBQUdDLG9EQUFhLEVBQXRDO0FBQ0EsSUFBTUMsbUJBQW1CLGdCQUFHRCxvREFBYSxFQUF6QztBQUVBLElBQU1FLFFBQVEsR0FBRyxVQUFqQjtBQUVBLElBQU1DLFlBQVksR0FBRztBQUNuQkMsYUFBVyxFQUFFLENBRE07QUFFbkJDLG9CQUFrQixFQUFFLENBRkQ7QUFHbkJDLFlBQVUsRUFBRTtBQUhPLENBQXJCOztBQU1BLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLUixRQUFMO0FBQ0UsNkNBQVlNLEtBQVosR0FBc0JDLE1BQU0sQ0FBQ0UsT0FBN0I7O0FBQ0Y7QUFDRSxZQUFNLElBQUlDLEtBQUosMkJBQTZCSCxNQUFNLENBQUNDLElBQXBDLEVBQU47QUFKSjtBQU1ELENBUEQ7O0FBU08sSUFBTUcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ2xCQyxpREFBVSxDQUFDUixPQUFELEVBQVVKLFlBQVYsQ0FEUTtBQUFBLE1BQ3JDSyxLQURxQztBQUFBLE1BQzlCUSxRQUQ4Qjs7QUFHNUNDLGtEQUFTLENBQUMsWUFBTTtBQUNkQyxXQUFPO0FBQ1IsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDUixPQUFEO0FBQUEsV0FBYUssUUFBUSxDQUFDO0FBQUVOLFVBQUksRUFBRVIsUUFBUjtBQUFrQlMsYUFBTyxFQUFQQTtBQUFsQixLQUFELENBQXJCO0FBQUEsR0FBaEI7O0FBRUEsTUFBTU8sT0FBTztBQUFBLHdWQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFFT0UsZ0VBQUEsRUFGUDs7QUFBQTtBQUVOQyxrQkFGTTtBQUlaRixxQkFBTyxDQUFDRSxJQUFELENBQVA7QUFKWTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQU1aQyxxQkFBTyxDQUFDQyxHQUFSOztBQU5ZO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVBMLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFVQSxzQkFDRSw4REFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixTQUFLLEVBQUU7QUFBRUMsYUFBTyxFQUFQQTtBQUFGLEtBQXJDO0FBQUEsMkJBQ0UsOERBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsV0FBSyxFQUFFWCxLQUFsQztBQUFBLGdCQUNHTTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFPRCxDQTFCTTs7R0FBTUQsWTs7S0FBQUEsWTtBQTRCTixJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZTtBQUFBOztBQUFBLFNBQU1DLGlEQUFVLENBQUMxQixnQkFBRCxDQUFoQjtBQUFBLENBQXJCOztJQUFNeUIsWTs7QUFDTixJQUFNRSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCO0FBQUE7O0FBQUEsU0FBTUQsaURBQVUsQ0FBQ3hCLG1CQUFELENBQWhCO0FBQUEsQ0FBeEI7O0lBQU15QixlIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuZjQ0MGVhNTc3NzNlNGQ0MmQ5N2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgY29tbWVyY2UgZnJvbSBcIi4uL2xpYi9jb21tZXJjZVwiXHJcblxyXG5jb25zdCBDYXJ0U3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcbmNvbnN0IENhcnREaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmNvbnN0IFNFVF9DQVJUID0gXCJTRVRfQ0FSVFwiXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdG90YWxfaXRlbXM6IDAsXHJcbiAgdG90YWxfdW5pcXVlX2l0ZW1zOiAwLFxyXG4gIGxpbmVfaXRlbXM6IFtdLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFVF9DQVJUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbjogJHthY3Rpb24udHlwZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Q2FydCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHNldENhcnQgPSAocGF5bG9hZCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTRVRfQ0FSVCwgcGF5bG9hZCB9KVxyXG5cclxuICBjb25zdCBnZXRDYXJ0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2FydCA9IGF3YWl0IGNvbW1lcmNlLmNhcnQucmV0cmlldmUoKVxyXG5cclxuICAgICAgc2V0Q2FydChjYXJ0KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZXRDYXJ0IH19PlxyXG4gICAgICA8Q2FydFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9DYXJ0U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9DYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnRTdGF0ZSA9ICgpID0+IHVzZUNvbnRleHQoQ2FydFN0YXRlQ29udGV4dClcclxuZXhwb3J0IGNvbnN0IHVzZUNhcnREaXNwYXRjaCA9ICgpID0+IHVzZUNvbnRleHQoQ2FydERpc3BhdGNoQ29udGV4dCkiXSwic291cmNlUm9vdCI6IiJ9