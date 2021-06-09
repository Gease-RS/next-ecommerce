self["webpackHotUpdate_N_E"]("pages/cart",{

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartPage; }
/* harmony export */ });
/* harmony import */ var C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/cart */ "./context/cart.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\gease\\Documents\\DEVELOPER\\next-ecommerce\\pages\\cart.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



function CartItem(_ref) {
  var name = _ref.name,
      quantity = _ref.quantity,
      line_total = _ref.line_total;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 40
      }, this), "Quant ", " ", " ", quantity, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 39
      }, this), line_total.formatted_with_symbol]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = CartItem;
function CartPage() {
  _s();

  var _this = this;

  var _useCartState = (0,_context_cart__WEBPACK_IMPORTED_MODULE_2__.useCartState)(),
      line_items = _useCartState.line_items,
      subtotal = _useCartState.subtotal;

  var isEmpty = line_items.length === 0;
  if (isEmpty) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
    children: "Your cart is empty"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 25
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }, this), line_items.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CartItem, _objectSpread({
        Key: item.id
      }, item), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
        children: "Sub total:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 16
      }, this), " ", subtotal.formatted_with_symbol]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 9
  }, this);
}

_s(CartPage, "IBiFZSQVSWI7wDb+Rf07tlD22EI=", false, function () {
  return [_context_cart__WEBPACK_IMPORTED_MODULE_2__.useCartState];
});

_c2 = CartPage;

var _c, _c2;

$RefreshReg$(_c, "CartItem");
$RefreshReg$(_c2, "CartPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJDYXJ0SXRlbSIsIm5hbWUiLCJxdWFudGl0eSIsImxpbmVfdG90YWwiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiLCJDYXJ0UGFnZSIsInVzZUNhcnRTdGF0ZSIsImxpbmVfaXRlbXMiLCJzdWJ0b3RhbCIsImlzRW1wdHkiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxRQUFULE9BQWtEO0FBQUEsTUFBOUJDLElBQThCLFFBQTlCQSxJQUE4QjtBQUFBLE1BQXhCQyxRQUF3QixRQUF4QkEsUUFBd0I7QUFBQSxNQUFkQyxVQUFjLFFBQWRBLFVBQWM7QUFDOUMsc0JBQ0k7QUFBQSwyQkFDSTtBQUFBLDhCQUNJO0FBQUEsa0JBQVNGO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBQzJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEM0IsWUFFVyxHQUZYLE9BRWlCQyxRQUZqQixlQUUwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRjFCLEVBR0tDLFVBQVUsQ0FBQ0MscUJBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIOztLQVZRSixRO0FBWU0sU0FBU0ssUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLHNCQUNFQywyREFBWSxFQURkO0FBQUEsTUFDdkJDLFVBRHVCLGlCQUN2QkEsVUFEdUI7QUFBQSxNQUNYQyxRQURXLGlCQUNYQSxRQURXOztBQUcvQixNQUFNQyxPQUFPLEdBQUdGLFVBQVUsQ0FBQ0csTUFBWCxLQUFzQixDQUF0QztBQUVBLE1BQUlELE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRWIsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBR0tGLFVBQVUsQ0FBQ0ksR0FBWCxDQUFlLFVBQUFDLElBQUk7QUFBQSwwQkFDaEIsOERBQUMsUUFBRDtBQUFVLFdBQUcsRUFBRUEsSUFBSSxDQUFDQztBQUFwQixTQUE0QkQsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQW5CLENBSEwsZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFRSTtBQUFBLDhCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsT0FBZ0NKLFFBQVEsQ0FBQ0oscUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0dBbkJ1QkMsUTtVQUNhQyx1RDs7O01BRGJELFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC45NTE2NTkwZGZlZWQxZGJhMTE2Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FydFN0YXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvY2FydFwiXHJcblxyXG5mdW5jdGlvbiBDYXJ0SXRlbSh7IG5hbWUsIHF1YW50aXR5LCBsaW5lX3RvdGFsIH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPntuYW1lfTwvc3Ryb25nPjxici8+XHJcbiAgICAgICAgICAgICAgICBRdWFudCB7XCIgXCJ9IHtxdWFudGl0eX08YnIvPlxyXG4gICAgICAgICAgICAgICAge2xpbmVfdG90YWwuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRQYWdlKCkge1xyXG4gICAgY29uc3QgeyBsaW5lX2l0ZW1zLCBzdWJ0b3RhbCB9ID0gdXNlQ2FydFN0YXRlKClcclxuXHJcbiAgICBjb25zdCBpc0VtcHR5ID0gbGluZV9pdGVtcy5sZW5ndGggPT09IDBcclxuXHJcbiAgICBpZiAoaXNFbXB0eSkgcmV0dXJuIDxwPllvdXIgY2FydCBpcyBlbXB0eTwvcD5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5DYXJ0PC9oMT5cclxuXHJcbiAgICAgICAgICAgIHtsaW5lX2l0ZW1zLm1hcChpdGVtID0+IFxyXG4gICAgICAgICAgICAgICAgPENhcnRJdGVtIEtleT17aXRlbS5pZH0gey4uLml0ZW0gfSAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxwPjxzdHJvbmc+U3ViIHRvdGFsOjwvc3Ryb25nPiB7c3VidG90YWwuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=