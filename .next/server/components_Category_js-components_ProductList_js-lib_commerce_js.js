exports.id = "components_Category_js-components_ProductList_js-lib_commerce_js";
exports.ids = ["components_Category_js-components_ProductList_js-lib_commerce_js"];
exports.modules = {

/***/ "./components/Category.js":
/*!********************************!*\
  !*** ./components/Category.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Category; }
/* harmony export */ });
function Category({
  name
}) {
  return name;
}

/***/ }),

/***/ "./components/Product.js":
/*!*******************************!*\
  !*** ./components/Product.js ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Product; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);


function Product({
  name,
  price
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [name, ": ", price.formatted_with_symnbol]
  }, void 0, true);
}

/***/ }),

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductList; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product */ "./components/Product.js");

var _jsxFileName = "C:\\Users\\gease\\Documents\\DEVELOPER\\next-ecommerce\\components\\ProductList.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



function ProductList({
  products
}) {
  if (!products) return null;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
    children: products.map(product => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: `/products/${product.permalink}`,
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Product__WEBPACK_IMPORTED_MODULE_2__.default, _objectSpread({}, product), void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 29
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 25
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 21
      }, this)
    }, product.id, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 17
    }, this))
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, this);
}

/***/ }),

/***/ "./lib/commerce.js":
/*!*************************!*\
  !*** ./lib/commerce.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chec/commerce.js */ "@chec/commerce.js");
/* harmony import */ var _chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0__);

const client = new (_chec_commerce_js__WEBPACK_IMPORTED_MODULE_0___default())("pk_184625ed86f36703d7d233bcf6d519a4f9398f20048ec");
/* harmony default export */ __webpack_exports__["default"] = (client);

/***/ }),

/***/ "?ca47":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (function() {

/* (ignored) */

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvLi9jb21wb25lbnRzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovL25leHQtZWNvbW1lcmNlLy4vbGliL2NvbW1lcmNlLmpzIiwid2VicGFjazovL25leHQtZWNvbW1lcmNlL2lnbm9yZWR8QzpcXFVzZXJzXFxnZWFzZVxcRG9jdW1lbnRzXFxERVZFTE9QRVJcXG5leHQtZWNvbW1lcmNlXFxub2RlX21vZHVsZXNcXG5leHRcXGRpc3RcXG5leHQtc2VydmVyXFxsaWJcXHJvdXRlcnwuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJuYW1lIiwiUHJvZHVjdCIsInByaWNlIiwiZm9ybWF0dGVkX3dpdGhfc3ltbmJvbCIsIlByb2R1Y3RMaXN0IiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwicGVybWFsaW5rIiwiaWQiLCJjbGllbnQiLCJDb21tZXJjZVNESyIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFlLFNBQVNBLFFBQVQsQ0FBa0I7QUFBQ0M7QUFBRCxDQUFsQixFQUEwQjtBQUNyQyxTQUFPQSxJQUFQO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZjLFNBQVNDLE9BQVQsQ0FBaUI7QUFBQ0QsTUFBRDtBQUFPRTtBQUFQLENBQWpCLEVBQWdDO0FBQzNDLHNCQUNJO0FBQUEsZUFDS0YsSUFETCxRQUNhRSxLQUFLLENBQUNDLHNCQURuQjtBQUFBLGtCQURKO0FBS0gsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNORDtBQUVBO0FBRWUsU0FBU0MsV0FBVCxDQUFxQjtBQUFDQztBQUFELENBQXJCLEVBQWlDO0FBQzVDLE1BQUcsQ0FBQ0EsUUFBSixFQUFjLE9BQU8sSUFBUDtBQUVkLHNCQUNJO0FBQUEsY0FDS0EsUUFBUSxDQUFDQyxHQUFULENBQWNDLE9BQUQsaUJBQ1Y7QUFBQSw2QkFDSSw4REFBQyxrREFBRDtBQUFNLFlBQUksRUFBRyxhQUFZQSxPQUFPLENBQUNDLFNBQVUsRUFBM0M7QUFBQSwrQkFDSTtBQUFBLGlDQUNJLDhEQUFDLDZDQUFELG9CQUFhRCxPQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKLE9BQVNBLE9BQU8sQ0FBQ0UsRUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURIO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUgsQzs7Ozs7Ozs7Ozs7Ozs7QUNwQkQ7QUFFQSxNQUFNQyxNQUFNLEdBQUcsSUFBSUMsMERBQUosQ0FBZ0JDLGtEQUFoQixDQUFmO0FBRUEsK0RBQWVGLE1BQWYsRTs7Ozs7Ozs7OztBQ0pBLGUiLCJmaWxlIjoiY29tcG9uZW50c19DYXRlZ29yeV9qcy1jb21wb25lbnRzX1Byb2R1Y3RMaXN0X2pzLWxpYl9jb21tZXJjZV9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhdGVnb3J5KHtuYW1lfSkge1xyXG4gICAgcmV0dXJuIG5hbWVcclxufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3Qoe25hbWUsIHByaWNlfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7bmFtZX06IHtwcmljZS5mb3JtYXR0ZWRfd2l0aF9zeW1uYm9sfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5cclxuaW1wb3J0IFByb2R1Y3QgZnJvbSAnLi9Qcm9kdWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZHVjdExpc3Qoe3Byb2R1Y3RzfSkge1xyXG4gICAgaWYoIXByb2R1Y3RzKSByZXR1cm4gbnVsbFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cHJvZHVjdC5wZXJtYWxpbmt9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFByb2R1Y3Qgey4uLnByb2R1Y3R9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICA8L3VsPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IENvbW1lcmNlU0RLIGZyb20gJ0BjaGVjL2NvbW1lcmNlLmpzJ1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IENvbW1lcmNlU0RLKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIRUNfUFVCTElDX0FQSV9LRVkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQiLCIvKiAoaWdub3JlZCkgKi8iXSwic291cmNlUm9vdCI6IiJ9