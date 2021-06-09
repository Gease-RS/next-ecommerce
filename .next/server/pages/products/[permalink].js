(function() {
var exports = {};
exports.id = "pages/products/[permalink]";
exports.ids = ["pages/products/[permalink]"];
exports.modules = {

/***/ "./pages/products/[permalink].js":
/*!***************************************!*\
  !*** ./pages/products/[permalink].js ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "default": function() { return /* binding */ ProductPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../context/cart */ "./context/cart.js");


var _jsxFileName = "C:\\Users\\gease\\Documents\\DEVELOPER\\next-ecommerce\\pages\\products\\[permalink].js";


async function getStaticProps({
  params
}) {
  const {
    permalink
  } = params;
  const product = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.products.retrieve(permalink, {
    type: "permalink"
  });
  return {
    props: {
      product
    }
  };
}
async function getStaticPaths() {
  const {
    data: products
  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.products.list();
  return {
    paths: products.map(product => ({
      params: {
        permalink: product.permalink
      }
    })),
    fallback: false
  };
}
function ProductPage({
  product
}) {
  const {
    setCart
  } = (0,_context_cart__WEBPACK_IMPORTED_MODULE_2__.useCartDispatch)();

  const addToCart = () => _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.cart.add(product.id).then(({
    cart
  }) => setCart(cart));

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: product.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: product.price.formatted_with_symbol
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
      onClick: addToCart,
      children: "Add to Cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 13
    }, this)]
  }, void 0, true);
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["context_cart_js"], function() { return __webpack_exec__("./pages/products/[permalink].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL3BhZ2VzL3Byb2R1Y3RzL1twZXJtYWxpbmtdLmpzIiwid2VicGFjazovL25leHQtZWNvbW1lcmNlL2V4dGVybmFsIFwiQGNoZWMvY29tbWVyY2UuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInBlcm1hbGluayIsInByb2R1Y3QiLCJjb21tZXJjZSIsInR5cGUiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwiZGF0YSIsInByb2R1Y3RzIiwicGF0aHMiLCJtYXAiLCJmYWxsYmFjayIsIlByb2R1Y3RQYWdlIiwic2V0Q2FydCIsInVzZUNhcnREaXNwYXRjaCIsImFkZFRvQ2FydCIsImlkIiwidGhlbiIsImNhcnQiLCJuYW1lIiwicHJpY2UiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLGVBQWVBLGNBQWYsQ0FBOEI7QUFBQ0M7QUFBRCxDQUE5QixFQUF3QztBQUMzQyxRQUFNO0FBQUVDO0FBQUYsTUFBZ0JELE1BQXRCO0FBRUEsUUFBTUUsT0FBTyxHQUFHLE1BQU1DLG9FQUFBLENBQTJCRixTQUEzQixFQUFzQztBQUN4REcsUUFBSSxFQUFFO0FBRGtELEdBQXRDLENBQXRCO0FBSUEsU0FBTztBQUNIQyxTQUFLLEVBQUU7QUFDSEg7QUFERztBQURKLEdBQVA7QUFLSDtBQUVNLGVBQWVJLGNBQWYsR0FBZ0M7QUFDbkMsUUFBTTtBQUFDQyxRQUFJLEVBQUVDO0FBQVAsTUFBbUIsTUFBTUwsZ0VBQUEsRUFBL0I7QUFHQSxTQUFPO0FBQ0hNLFNBQUssRUFBRUQsUUFBUSxDQUFDRSxHQUFULENBQWNSLE9BQUQsS0FBYztBQUM5QkYsWUFBTSxFQUFFO0FBQ0pDLGlCQUFTLEVBQUVDLE9BQU8sQ0FBQ0Q7QUFEZjtBQURzQixLQUFkLENBQWIsQ0FESjtBQU1IVSxZQUFRLEVBQUU7QUFOUCxHQUFQO0FBUUg7QUFFYyxTQUFTQyxXQUFULENBQXFCO0FBQUNWO0FBQUQsQ0FBckIsRUFBZ0M7QUFDM0MsUUFBTTtBQUFFVztBQUFGLE1BQWNDLDhEQUFlLEVBQW5DOztBQUVBLFFBQU1DLFNBQVMsR0FBRyxNQUNkWiwyREFBQSxDQUFrQkQsT0FBTyxDQUFDYyxFQUExQixFQUE4QkMsSUFBOUIsQ0FBbUMsQ0FBQztBQUFFQztBQUFGLEdBQUQsS0FBYUwsT0FBTyxDQUFDSyxJQUFELENBQXZELENBREo7O0FBR0Esc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLGdCQUFLaEIsT0FBTyxDQUFDaUI7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSTtBQUFBLGdCQUFJakIsT0FBTyxDQUFDa0IsS0FBUixDQUFjQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFRLGFBQU8sRUFBRU4sU0FBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBLGtCQURKO0FBT0gsQzs7Ozs7Ozs7Ozs7QUM1Q0QsK0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsbUQiLCJmaWxlIjoicGFnZXMvcHJvZHVjdHMvW3Blcm1hbGlua10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tbWVyY2UgZnJvbSAnLi4vLi4vbGliL2NvbW1lcmNlJ1xyXG5pbXBvcnQgeyB1c2VDYXJ0RGlzcGF0Y2ggfSBmcm9tICcuLi8uLi9jb250ZXh0L2NhcnQnXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoe3BhcmFtc30pIHtcclxuICAgIGNvbnN0IHsgcGVybWFsaW5rIH0gPSBwYXJhbXNcclxuICAgIFxyXG4gICAgY29uc3QgcHJvZHVjdCA9IGF3YWl0IGNvbW1lcmNlLnByb2R1Y3RzLnJldHJpZXZlKHBlcm1hbGluaywge1xyXG4gICAgICAgIHR5cGU6IFwicGVybWFsaW5rXCJcclxuICAgIH0pXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBwcm9kdWN0XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcbiAgICBjb25zdCB7ZGF0YTogcHJvZHVjdHN9ID0gYXdhaXQgY29tbWVyY2UucHJvZHVjdHMubGlzdCgpXHJcblxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIHBhdGhzOiBwcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+ICh7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgcGVybWFsaW5rOiBwcm9kdWN0LnBlcm1hbGlua1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0UGFnZSh7cHJvZHVjdH0pIHtcclxuICAgIGNvbnN0IHsgc2V0Q2FydCB9ID0gdXNlQ2FydERpc3BhdGNoKClcclxuXHJcbiAgICBjb25zdCBhZGRUb0NhcnQgPSAoKSA9PiBcclxuICAgICAgICBjb21tZXJjZS5jYXJ0LmFkZChwcm9kdWN0LmlkKS50aGVuKCh7IGNhcnR9KSA9PiBzZXRDYXJ0KGNhcnQpKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPGgxPntwcm9kdWN0Lm5hbWV9PC9oMT5cclxuICAgICAgICAgICAgPHA+e3Byb2R1Y3QucHJpY2UuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfTwvcD5cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXthZGRUb0NhcnR9PkFkZCB0byBDYXJ0PC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICApXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hlYy9jb21tZXJjZS5qc1wiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==