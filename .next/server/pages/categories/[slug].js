(function() {
var exports = {};
exports.id = "pages/categories/[slug]";
exports.ids = ["pages/categories/[slug]"];
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

/***/ "./pages/categories/[slug].js":
/*!************************************!*\
  !*** ./pages/categories/[slug].js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; },
/* harmony export */   "getStaticPaths": function() { return /* binding */ getStaticPaths; },
/* harmony export */   "default": function() { return /* binding */ CategoryPage; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ProductList */ "./components/ProductList.js");
/* harmony import */ var _components_Category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Category */ "./components/Category.js");


var _jsxFileName = "C:\\Users\\gease\\Documents\\DEVELOPER\\next-ecommerce\\pages\\categories\\[slug].js";



async function getStaticProps({
  params
}) {
  const {
    slug
  } = params;
  const category = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.categories.retrieve(slug, {
    type: 'slug'
  });
  const {
    data: products
  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.products.list({
    category_slug: slug
  });
  return {
    props: {
      category,
      products
    }
  };
}
async function getStaticPaths() {
  const {
    data: categories
  } = await _lib_commerce__WEBPACK_IMPORTED_MODULE_1__.default.categories.list();
  return {
    paths: categories.map(category => ({
      params: {
        slug: category.slug
      }
    })),
    fallback: false
  };
}
function CategoryPage({
  category,
  products
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      children: _components_Category__WEBPACK_IMPORTED_MODULE_3__.default.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductList__WEBPACK_IMPORTED_MODULE_2__.default, {
      products: products
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

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = require("react-is");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

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

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js"], function() { return __webpack_exec__("./pages/categories/[slug].js"); });
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL2NvbXBvbmVudHMvQ2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvLi9jb21wb25lbnRzL1Byb2R1Y3QuanMiLCJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0LmpzIiwid2VicGFjazovL25leHQtZWNvbW1lcmNlLy4vbGliL2NvbW1lcmNlLmpzIiwid2VicGFjazovL25leHQtZWNvbW1lcmNlLy4vcGFnZXMvY2F0ZWdvcmllcy9bc2x1Z10uanMiLCJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvZXh0ZXJuYWwgXCJAY2hlYy9jb21tZXJjZS5qc1wiIiwid2VicGFjazovL25leHQtZWNvbW1lcmNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovL25leHQtZWNvbW1lcmNlL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiIiwid2VicGFjazovL25leHQtZWNvbW1lcmNlL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vbmV4dC1lY29tbWVyY2UvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS9pZ25vcmVkfEM6XFxVc2Vyc1xcZ2Vhc2VcXERvY3VtZW50c1xcREVWRUxPUEVSXFxuZXh0LWVjb21tZXJjZVxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxuZXh0LXNlcnZlclxcbGliXFxyb3V0ZXJ8Li91dGlscy9yZXNvbHZlLXJld3JpdGVzIl0sIm5hbWVzIjpbIkNhdGVnb3J5IiwibmFtZSIsIlByb2R1Y3QiLCJwcmljZSIsImZvcm1hdHRlZF93aXRoX3N5bW5ib2wiLCJQcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwibWFwIiwicHJvZHVjdCIsInBlcm1hbGluayIsImlkIiwiY2xpZW50IiwiQ29tbWVyY2VTREsiLCJwcm9jZXNzIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJzbHVnIiwiY2F0ZWdvcnkiLCJjb21tZXJjZSIsInR5cGUiLCJkYXRhIiwiY2F0ZWdvcnlfc2x1ZyIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJjYXRlZ29yaWVzIiwicGF0aHMiLCJmYWxsYmFjayIsIkNhdGVnb3J5UGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZSxTQUFTQSxRQUFULENBQWtCO0FBQUNDO0FBQUQsQ0FBbEIsRUFBMEI7QUFDckMsU0FBT0EsSUFBUDtBQUNILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGYyxTQUFTQyxPQUFULENBQWlCO0FBQUNELE1BQUQ7QUFBT0U7QUFBUCxDQUFqQixFQUFnQztBQUMzQyxzQkFDSTtBQUFBLGVBQ0tGLElBREwsUUFDYUUsS0FBSyxDQUFDQyxzQkFEbkI7QUFBQSxrQkFESjtBQUtILEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkQ7QUFFQTtBQUVlLFNBQVNDLFdBQVQsQ0FBcUI7QUFBQ0M7QUFBRCxDQUFyQixFQUFpQztBQUM1QyxNQUFHLENBQUNBLFFBQUosRUFBYyxPQUFPLElBQVA7QUFFZCxzQkFDSTtBQUFBLGNBQ0tBLFFBQVEsQ0FBQ0MsR0FBVCxDQUFjQyxPQUFELGlCQUNWO0FBQUEsNkJBQ0ksOERBQUMsa0RBQUQ7QUFBTSxZQUFJLEVBQUcsYUFBWUEsT0FBTyxDQUFDQyxTQUFVLEVBQTNDO0FBQUEsK0JBQ0k7QUFBQSxpQ0FDSSw4REFBQyw2Q0FBRCxvQkFBYUQsT0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESixPQUFTQSxPQUFPLENBQUNFLEVBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESDtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQWFILEM7Ozs7Ozs7Ozs7Ozs7O0FDcEJEO0FBRUEsTUFBTUMsTUFBTSxHQUFHLElBQUlDLDBEQUFKLENBQWdCQyxrREFBaEIsQ0FBZjtBQUVBLCtEQUFlRixNQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFFTyxlQUFlRyxjQUFmLENBQThCO0FBQUNDO0FBQUQsQ0FBOUIsRUFBd0M7QUFDM0MsUUFBTTtBQUFDQztBQUFELE1BQVNELE1BQWY7QUFFQSxRQUFNRSxRQUFRLEdBQUcsTUFBTUMsc0VBQUEsQ0FBNkJGLElBQTdCLEVBQW1DO0FBQ3RERyxRQUFJLEVBQUU7QUFEZ0QsR0FBbkMsQ0FBdkI7QUFJQSxRQUFNO0FBQUVDLFFBQUksRUFBRWQ7QUFBUixNQUFxQixNQUFNWSxnRUFBQSxDQUF1QjtBQUNwREcsaUJBQWEsRUFBRUw7QUFEcUMsR0FBdkIsQ0FBakM7QUFJQSxTQUFPO0FBQ0hNLFNBQUssRUFBRTtBQUNITCxjQURHO0FBRUhYO0FBRkc7QUFESixHQUFQO0FBTUg7QUFFTSxlQUFlaUIsY0FBZixHQUFnQztBQUNuQyxRQUFNO0FBQUVILFFBQUksRUFBRUk7QUFBUixNQUF1QixNQUFNTixrRUFBQSxFQUFuQztBQUVBLFNBQU87QUFDSE8sU0FBSyxFQUFFRCxVQUFVLENBQUNqQixHQUFYLENBQWdCVSxRQUFELEtBQWU7QUFDakNGLFlBQU0sRUFBRTtBQUNKQyxZQUFJLEVBQUVDLFFBQVEsQ0FBQ0Q7QUFEWDtBQUR5QixLQUFmLENBQWYsQ0FESjtBQU1IVSxZQUFRLEVBQUU7QUFOUCxHQUFQO0FBUUg7QUFFYyxTQUFTQyxZQUFULENBQXNCO0FBQUNWLFVBQUQ7QUFBV1g7QUFBWCxDQUF0QixFQUE0QztBQUN2RCxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQUtOLDhEQUFhQztBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFHSSw4REFBQyw0REFBRDtBQUFhLGNBQVEsRUFBRUs7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUEsa0JBREo7QUFPSCxDOzs7Ozs7Ozs7OztBQzVDRCwrQzs7Ozs7Ozs7Ozs7QUNBQSx5RTs7Ozs7Ozs7Ozs7QUNBQSxpRzs7Ozs7Ozs7Ozs7QUNBQSxtQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxtRDs7Ozs7Ozs7OztBQ0FBLGUiLCJmaWxlIjoicGFnZXMvY2F0ZWdvcmllcy9bc2x1Z10uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXRlZ29yeSh7bmFtZX0pIHtcclxuICAgIHJldHVybiBuYW1lXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9kdWN0KHtuYW1lLCBwcmljZX0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge25hbWV9OiB7cHJpY2UuZm9ybWF0dGVkX3dpdGhfc3ltbmJvbH1cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuXHJcbmltcG9ydCBQcm9kdWN0IGZyb20gJy4vUHJvZHVjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2R1Y3RMaXN0KHtwcm9kdWN0c30pIHtcclxuICAgIGlmKCFwcm9kdWN0cykgcmV0dXJuIG51bGxcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDx1bD5cclxuICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGxpIGtleT17cHJvZHVjdC5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3Byb2R1Y3QucGVybWFsaW5rfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxQcm9kdWN0IHsuLi5wcm9kdWN0fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC91bD5cclxuICAgIClcclxufSIsImltcG9ydCBDb21tZXJjZVNESyBmcm9tICdAY2hlYy9jb21tZXJjZS5qcydcclxuXHJcbmNvbnN0IGNsaWVudCA9IG5ldyBDb21tZXJjZVNESyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19DSEVDX1BVQkxJQ19BUElfS0VZKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xpZW50IiwiaW1wb3J0IGNvbW1lcmNlIGZyb20gJy4uLy4uL2xpYi9jb21tZXJjZSdcclxuaW1wb3J0IFByb2R1Y3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdExpc3QnXHJcbmltcG9ydCBDYXRlZ29yeSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NhdGVnb3J5J1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHtwYXJhbXN9KSB7XHJcbiAgICBjb25zdCB7c2x1Z30gPSBwYXJhbXNcclxuXHJcbiAgICBjb25zdCBjYXRlZ29yeSA9IGF3YWl0IGNvbW1lcmNlLmNhdGVnb3JpZXMucmV0cmlldmUoc2x1Zywge1xyXG4gICAgICAgIHR5cGU6ICdzbHVnJ1xyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB7IGRhdGE6IHByb2R1Y3RzIH0gPSBhd2FpdCBjb21tZXJjZS5wcm9kdWN0cy5saXN0KHtcclxuICAgICAgICBjYXRlZ29yeV9zbHVnOiBzbHVnLFxyXG4gICAgfSlcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIGNhdGVnb3J5LFxyXG4gICAgICAgICAgICBwcm9kdWN0c1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gICAgY29uc3QgeyBkYXRhOiBjYXRlZ29yaWVzIH0gPSBhd2FpdCBjb21tZXJjZS5jYXRlZ29yaWVzLmxpc3QoKVxyXG5cclxuICAgIHJldHVybiB7IFxyXG4gICAgICAgIHBhdGhzOiBjYXRlZ29yaWVzLm1hcCgoY2F0ZWdvcnkpID0+ICh7XHJcbiAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgc2x1ZzogY2F0ZWdvcnkuc2x1Z1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pKSxcclxuICAgICAgICBmYWxsYmFjazogZmFsc2VcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2F0ZWdvcnlQYWdlKHtjYXRlZ29yeSwgcHJvZHVjdHN9KSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxoMT57Q2F0ZWdvcnkubmFtZX08L2gxPlxyXG5cclxuICAgICAgICAgICAgPFByb2R1Y3RMaXN0IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cclxuICAgICAgICA8Lz5cclxuICAgIClcclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBjaGVjL2NvbW1lcmNlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIpOzsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7IiwiLyogKGlnbm9yZWQpICovIl0sInNvdXJjZVJvb3QiOiIifQ==