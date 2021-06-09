(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "default": function() { return /* binding */ IndexPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");


var _jsxFileName = "C:\\Users\\gease\\Documents\\DEVELOPER\\next-ecommerce\\pages\\index.js";

async function getStaticProps() {
  const merchant = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.merchants.about();
  const {
    data: categories
  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.categories.list();
  const {
    data: products
  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.products.list();
  return {
    props: {
      merchant,
      categories,
      products
    }
  };
}
function IndexPage({
  merchant,
  categories,
  products
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
      children: JSON.stringify(merchant, null, 2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
      children: JSON.stringify(categories, null, 2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
      children: JSON.stringify(products, null, 2)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL2xpYi9jb21tZXJjZS5qcyIsIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovL25leHQtZWNvbW1lcmNlL2V4dGVybmFsIFwiQGNoZWMvY29tbWVyY2UuanNcIiIsIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbImNsaWVudCIsIkNvbW1lcmNlU0RLIiwicHJvY2VzcyIsImdldFN0YXRpY1Byb3BzIiwibWVyY2hhbnQiLCJjb21tZXJjZSIsImRhdGEiLCJjYXRlZ29yaWVzIiwicHJvZHVjdHMiLCJwcm9wcyIsIkluZGV4UGFnZSIsIkpTT04iLCJzdHJpbmdpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLE1BQU1BLE1BQU0sR0FBRyxJQUFJQywwREFBSixDQUFnQkMsa0RBQWhCLENBQWY7QUFFQSwrREFBZUYsTUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFFTyxlQUFlRyxjQUFmLEdBQWdDO0FBQ25DLFFBQU1DLFFBQVEsR0FBRyxNQUFNQyxrRUFBQSxFQUF2QjtBQUNBLFFBQU07QUFBQ0MsUUFBSSxFQUFFQztBQUFQLE1BQXFCLE1BQU1GLGtFQUFBLEVBQWpDO0FBQ0EsUUFBTTtBQUFDQyxRQUFJLEVBQUVFO0FBQVAsTUFBbUIsTUFBTUgsZ0VBQUEsRUFBL0I7QUFFQSxTQUFPO0FBQ0hJLFNBQUssRUFBRTtBQUNITCxjQURHO0FBRUhHLGdCQUZHO0FBR0hDO0FBSEc7QUFESixHQUFQO0FBT0g7QUFFYyxTQUFTRSxTQUFULENBQW1CO0FBQUNOLFVBQUQ7QUFBV0csWUFBWDtBQUF1QkM7QUFBdkIsQ0FBbkIsRUFBcUQ7QUFDaEUsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLGdCQUFNRyxJQUFJLENBQUNDLFNBQUwsQ0FBZVIsUUFBZixFQUF5QixJQUF6QixFQUErQixDQUEvQjtBQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUEsZ0JBQU1PLElBQUksQ0FBQ0MsU0FBTCxDQUFlTCxVQUFmLEVBQTJCLElBQTNCLEVBQWlDLENBQWpDO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZKLGVBR0k7QUFBQSxnQkFBTUksSUFBSSxDQUFDQyxTQUFMLENBQWVKLFFBQWYsRUFBeUIsSUFBekIsRUFBK0IsQ0FBL0I7QUFBTjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQSxrQkFESjtBQU9ILEM7Ozs7Ozs7Ozs7O0FDeEJELCtDOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbW1lcmNlU0RLIGZyb20gJ0BjaGVjL2NvbW1lcmNlLmpzJ1xyXG5cclxuY29uc3QgY2xpZW50ID0gbmV3IENvbW1lcmNlU0RLKHByb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0NIRUNfUFVCTElDX0FQSV9LRVkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGllbnQiLCJpbXBvcnQgY29tbWVyY2UgZnJvbSAnLi4vbGliL2NvbW1lcmNlJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKCkge1xyXG4gICAgY29uc3QgbWVyY2hhbnQgPSBhd2FpdCBjb21tZXJjZS5tZXJjaGFudHMuYWJvdXQoKVxyXG4gICAgY29uc3Qge2RhdGE6IGNhdGVnb3JpZXN9ID0gYXdhaXQgY29tbWVyY2UuY2F0ZWdvcmllcy5saXN0KClcclxuICAgIGNvbnN0IHtkYXRhOiBwcm9kdWN0c30gPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lcmNoYW50LFxyXG4gICAgICAgICAgICBjYXRlZ29yaWVzLFxyXG4gICAgICAgICAgICBwcm9kdWN0c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKHttZXJjaGFudCwgY2F0ZWdvcmllcywgcHJvZHVjdHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KG1lcmNoYW50LCBudWxsLCAyKX08L3ByZT5cclxuICAgICAgICAgICAgPHByZT57SlNPTi5zdHJpbmdpZnkoY2F0ZWdvcmllcywgbnVsbCwgMil9PC9wcmU+XHJcbiAgICAgICAgICAgIDxwcmU+e0pTT04uc3RyaW5naWZ5KHByb2R1Y3RzLCBudWxsLCAyKX08L3ByZT5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGVjL2NvbW1lcmNlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7OyJdLCJzb3VyY2VSb290IjoiIn0=