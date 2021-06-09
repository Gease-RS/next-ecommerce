(function() {
var exports = {};
exports.id = "pages/cart";
exports.ids = ["pages/cart"];
exports.modules = {

/***/ "./pages/cart.js":
/*!***********************!*\
  !*** ./pages/cart.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CartPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context/cart */ "./context/cart.js");

var _jsxFileName = "C:\\Users\\gease\\Documents\\DEVELOPER\\next-ecommerce\\pages\\cart.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function CartItem({
  id,
  name,
  quantity,
  line_total
}) {
  const {
    setCart
  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_2__.useCartDispatch)();

  const handleUpdateCart = ({
    cart
  }) => setCart(cart);

  const removeItem = () => _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.cart.remove(id).then(handleUpdateCart);

  const decrementQuantity = () => {
    quantity > 1 ? _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.cart.update(id, {
      quantity: quantity - 1
    }).then(handleUpdateCart) : removeItem();
  };

  const incrementQuantity = () => _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.cart.update(id, {
    quantity: quantity + 1
  }).then(handleUpdateCart);

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 40
      }, this), "Quant ", " ", " ", quantity, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 39
      }, this), line_total.formatted_with_symbol]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: decrementQuantity,
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: incrementQuantity,
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        onClick: removeItem,
        children: "X"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, this);
}

function CartPage() {
  const {
    line_items,
    subtotal
  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_2__.useCartState)();
  const isEmpty = line_items.length === 0;
  if (isEmpty) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Your cart is empty"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 25
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: "Cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 13
    }, this), line_items.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartItem, _objectSpread({
      Key: item.id
    }, item), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }, this)), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("strong", {
        children: "Sub total:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 16
      }, this), " ", subtotal.formatted_with_symbol]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "@chec/commerce.js":
/*!************************************!*\
  !*** external "@chec/commerce.js" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("@chec/commerce.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["context_cart_js"], function() { return __webpack_exec__("./pages/cart.js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL3BhZ2VzL2NhcnQuanMiLCJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvZXh0ZXJuYWwgXCJAY2hlYy9jb21tZXJjZS5qc1wiIiwid2VicGFjazovL25leHQtZWNvbW1lcmNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkNhcnRJdGVtIiwiaWQiLCJuYW1lIiwicXVhbnRpdHkiLCJsaW5lX3RvdGFsIiwic2V0Q2FydCIsInVzZUNhcnREaXNwYXRjaCIsImhhbmRsZVVwZGF0ZUNhcnQiLCJjYXJ0IiwicmVtb3ZlSXRlbSIsImNvbW1lcmNlIiwidGhlbiIsImRlY3JlbWVudFF1YW50aXR5IiwiaW5jcmVtZW50UXVhbnRpdHkiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiLCJDYXJ0UGFnZSIsImxpbmVfaXRlbXMiLCJzdWJ0b3RhbCIsInVzZUNhcnRTdGF0ZSIsImlzRW1wdHkiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsQ0FBa0I7QUFBRUMsSUFBRjtBQUFNQyxNQUFOO0FBQVlDLFVBQVo7QUFBc0JDO0FBQXRCLENBQWxCLEVBQXNEO0FBQ2xELFFBQU07QUFBRUM7QUFBRixNQUFjQyw4REFBZSxFQUFuQzs7QUFFQSxRQUFNQyxnQkFBZ0IsR0FBRyxDQUFDO0FBQUNDO0FBQUQsR0FBRCxLQUFZSCxPQUFPLENBQUNHLElBQUQsQ0FBNUM7O0FBRUEsUUFBTUMsVUFBVSxHQUFHLE1BQU1DLDhEQUFBLENBQXFCVCxFQUFyQixFQUF5QlUsSUFBekIsQ0FBOEJKLGdCQUE5QixDQUF6Qjs7QUFFQSxRQUFNSyxpQkFBaUIsR0FBRyxNQUFNO0FBQzVCVCxZQUFRLEdBQUcsQ0FBWCxHQUNNTyw4REFBQSxDQUFxQlQsRUFBckIsRUFBeUI7QUFBRUUsY0FBUSxFQUFFQSxRQUFRLEdBQUc7QUFBdkIsS0FBekIsRUFBb0RRLElBQXBELENBQXlESixnQkFBekQsQ0FETixHQUVNRSxVQUFVLEVBRmhCO0FBR0gsR0FKRDs7QUFNQSxRQUFNSSxpQkFBaUIsR0FBRyxNQUFNSCw4REFBQSxDQUFxQlQsRUFBckIsRUFBeUI7QUFBRUUsWUFBUSxFQUFFQSxRQUFRLEdBQUc7QUFBdkIsR0FBekIsRUFBb0RRLElBQXBELENBQXlESixnQkFBekQsQ0FBaEM7O0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQUEsa0JBQVNMO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBQzJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEM0IsWUFFVyxHQUZYLE9BRWlCQyxRQUZqQixlQUUwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRjFCLEVBR0tDLFVBQVUsQ0FBQ1UscUJBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUk7QUFBQSw4QkFDSTtBQUFRLGVBQU8sRUFBRUYsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGVBQU8sRUFBRUMsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkosZUFHSTtBQUFRLGVBQU8sRUFBRUosVUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWNIOztBQUVjLFNBQVNNLFFBQVQsR0FBb0I7QUFDL0IsUUFBTTtBQUFFQyxjQUFGO0FBQWNDO0FBQWQsTUFBMkJDLDJEQUFZLEVBQTdDO0FBRUEsUUFBTUMsT0FBTyxHQUFHSCxVQUFVLENBQUNJLE1BQVgsS0FBc0IsQ0FBdEM7QUFFQSxNQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUViLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUdLSCxVQUFVLENBQUNLLEdBQVgsQ0FBZUMsSUFBSSxpQkFDaEIsOERBQUMsUUFBRDtBQUFVLFNBQUcsRUFBRUEsSUFBSSxDQUFDckI7QUFBcEIsT0FBNEJxQixJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREgsQ0FITCxlQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVFJO0FBQUEsOEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxPQUFnQ0wsUUFBUSxDQUFDSCxxQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSCxDOzs7Ozs7Ozs7OztBQ3JERCwrQzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxtRCIsImZpbGUiOiJwYWdlcy9jYXJ0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbW1lcmNlIGZyb20gXCIuLi9saWIvY29tbWVyY2VcIlxyXG5pbXBvcnQgeyB1c2VDYXJ0RGlzcGF0Y2gsIHVzZUNhcnRTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L2NhcnRcIlxyXG5cclxuZnVuY3Rpb24gQ2FydEl0ZW0oeyBpZCwgbmFtZSwgcXVhbnRpdHksIGxpbmVfdG90YWwgfSkge1xyXG4gICAgY29uc3QgeyBzZXRDYXJ0IH0gPSB1c2VDYXJ0RGlzcGF0Y2goKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZUNhcnQgPSAoe2NhcnR9KSA9PiBzZXRDYXJ0KGNhcnQpXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9ICgpID0+IGNvbW1lcmNlLmNhcnQucmVtb3ZlKGlkKS50aGVuKGhhbmRsZVVwZGF0ZUNhcnQpXHJcblxyXG4gICAgY29uc3QgZGVjcmVtZW50UXVhbnRpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcXVhbnRpdHkgPiAxXHJcbiAgICAgICAgICAgID8gY29tbWVyY2UuY2FydC51cGRhdGUoaWQsIHsgcXVhbnRpdHk6IHF1YW50aXR5IC0gMX0pLnRoZW4oaGFuZGxlVXBkYXRlQ2FydClcclxuICAgICAgICAgICAgOiByZW1vdmVJdGVtKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWFudGl0eSA9ICgpID0+IGNvbW1lcmNlLmNhcnQudXBkYXRlKGlkLCB7IHF1YW50aXR5OiBxdWFudGl0eSArIDF9KS50aGVuKGhhbmRsZVVwZGF0ZUNhcnQpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e25hbWV9PC9zdHJvbmc+PGJyLz5cclxuICAgICAgICAgICAgICAgIFF1YW50IHtcIiBcIn0ge3F1YW50aXR5fTxici8+XHJcbiAgICAgICAgICAgICAgICB7bGluZV90b3RhbC5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVjcmVtZW50UXVhbnRpdHl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVtZW50UXVhbnRpdHl9Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17cmVtb3ZlSXRlbX0+WDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydFBhZ2UoKSB7XHJcbiAgICBjb25zdCB7IGxpbmVfaXRlbXMsIHN1YnRvdGFsIH0gPSB1c2VDYXJ0U3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IGlzRW1wdHkgPSBsaW5lX2l0ZW1zLmxlbmd0aCA9PT0gMFxyXG5cclxuICAgIGlmIChpc0VtcHR5KSByZXR1cm4gPHA+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkNhcnQ8L2gxPlxyXG5cclxuICAgICAgICAgICAge2xpbmVfaXRlbXMubWFwKGl0ZW0gPT4gXHJcbiAgICAgICAgICAgICAgICA8Q2FydEl0ZW0gS2V5PXtpdGVtLmlkfSB7Li4uaXRlbSB9IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPHA+PHN0cm9uZz5TdWIgdG90YWw6PC9zdHJvbmc+IHtzdWJ0b3RhbC5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoZWMvY29tbWVyY2UuanNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=