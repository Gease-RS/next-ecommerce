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
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context/cart */ "./context/cart.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _jsxFileName = "C:\\Users\\gease\\Documents\\DEVELOPER\\next-ecommerce\\pages\\cart.js",
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,C_Users_gease_Documents_DEVELOPER_next_ecommerce_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function CartItem(_ref) {
  _s();

  var id = _ref.id,
      name = _ref.name,
      quantity = _ref.quantity,
      line_total = _ref.line_total;

  var _useCartDispatch = (0,_context_cart__WEBPACK_IMPORTED_MODULE_3__.useCartDispatch)(),
      setCart = _useCartDispatch.setCart;

  var handleUpdateCart = function handleUpdateCart(_ref2) {
    var cart = _ref2.cart;
    return setCart(cart);
  };

  var removeItem = function removeItem() {
    console.log("Remove item");
  };

  var decrementQuantity = function decrementQuantity() {
    quantity > 1 ? _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.default.cart.update(id, {
      quantity: quantity - 1
    }).then(handleUpdateCart) : removeItem();
  };

  var incrementQuantity = function incrementQuantity() {
    return _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.default.cart.update(id, {
      quantity: quantity + 1
    }).then(handleUpdateCart);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
        children: name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 40
      }, this), "Quant ", " ", " ", quantity, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 39
      }, this), line_total.formatted_with_symbol]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: decrementQuantity,
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: incrementQuantity,
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_s(CartItem, "Anf9X5OkmWh2owoYCyMBkmCepiM=", false, function () {
  return [_context_cart__WEBPACK_IMPORTED_MODULE_3__.useCartDispatch];
});

_c = CartItem;
function CartPage() {
  _s2();

  var _this = this;

  var _useCartState = (0,_context_cart__WEBPACK_IMPORTED_MODULE_3__.useCartState)(),
      line_items = _useCartState.line_items,
      subtotal = _useCartState.subtotal;

  var isEmpty = line_items.length === 0;
  if (isEmpty) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
    children: "Your cart is empty"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 25
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }, this), line_items.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CartItem, _objectSpread({
        Key: item.id
      }, item), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
        children: "Sub total:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 16
      }, this), " ", subtotal.formatted_with_symbol]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 44,
    columnNumber: 9
  }, this);
}

_s2(CartPage, "IBiFZSQVSWI7wDb+Rf07tlD22EI=", false, function () {
  return [_context_cart__WEBPACK_IMPORTED_MODULE_3__.useCartState];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJDYXJ0SXRlbSIsImlkIiwibmFtZSIsInF1YW50aXR5IiwibGluZV90b3RhbCIsInVzZUNhcnREaXNwYXRjaCIsInNldENhcnQiLCJoYW5kbGVVcGRhdGVDYXJ0IiwiY2FydCIsInJlbW92ZUl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZGVjcmVtZW50UXVhbnRpdHkiLCJjb21tZXJjZSIsInRoZW4iLCJpbmNyZW1lbnRRdWFudGl0eSIsImZvcm1hdHRlZF93aXRoX3N5bWJvbCIsIkNhcnRQYWdlIiwidXNlQ2FydFN0YXRlIiwibGluZV9pdGVtcyIsInN1YnRvdGFsIiwiaXNFbXB0eSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUFzRDtBQUFBOztBQUFBLE1BQWxDQyxFQUFrQyxRQUFsQ0EsRUFBa0M7QUFBQSxNQUE5QkMsSUFBOEIsUUFBOUJBLElBQThCO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYzs7QUFBQSx5QkFDOUJDLDhEQUFlLEVBRGU7QUFBQSxNQUMxQ0MsT0FEMEMsb0JBQzFDQSxPQUQwQzs7QUFHbEQsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFFBQUVDLElBQUYsU0FBRUEsSUFBRjtBQUFBLFdBQVlGLE9BQU8sQ0FBQ0UsSUFBRCxDQUFuQjtBQUFBLEdBQXpCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDckJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGFBQVo7QUFDSCxHQUZEOztBQUlBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1QlQsWUFBUSxHQUFHLENBQVgsR0FDTVUsOERBQUEsQ0FBcUJaLEVBQXJCLEVBQXlCO0FBQUVFLGNBQVEsRUFBRUEsUUFBUSxHQUFHO0FBQXZCLEtBQXpCLEVBQW9EVyxJQUFwRCxDQUF5RFAsZ0JBQXpELENBRE4sR0FFTUUsVUFBVSxFQUZoQjtBQUdILEdBSkQ7O0FBTUEsTUFBTU0saUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFdBQU1GLDhEQUFBLENBQXFCWixFQUFyQixFQUF5QjtBQUFFRSxjQUFRLEVBQUVBLFFBQVEsR0FBRztBQUF2QixLQUF6QixFQUFvRFcsSUFBcEQsQ0FBeURQLGdCQUF6RCxDQUFOO0FBQUEsR0FBMUI7O0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQUEsa0JBQVNMO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBQzJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEM0IsWUFFVyxHQUZYLE9BRWlCQyxRQUZqQixlQUUwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRjFCLEVBR0tDLFVBQVUsQ0FBQ1kscUJBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUk7QUFBQSw4QkFDSTtBQUFRLGVBQU8sRUFBRUosaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGVBQU8sRUFBRUcsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDs7R0E5QlFmLFE7VUFDZUssMEQ7OztLQURmTCxRO0FBZ0NNLFNBQVNpQixRQUFULEdBQW9CO0FBQUE7O0FBQUE7O0FBQUEsc0JBQ0VDLDJEQUFZLEVBRGQ7QUFBQSxNQUN2QkMsVUFEdUIsaUJBQ3ZCQSxVQUR1QjtBQUFBLE1BQ1hDLFFBRFcsaUJBQ1hBLFFBRFc7O0FBRy9CLE1BQU1DLE9BQU8sR0FBR0YsVUFBVSxDQUFDRyxNQUFYLEtBQXNCLENBQXRDO0FBRUEsTUFBSUQsT0FBSixFQUFhLG9CQUFPO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFFYixzQkFDSTtBQUFBLDRCQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFHS0YsVUFBVSxDQUFDSSxHQUFYLENBQWUsVUFBQUMsSUFBSTtBQUFBLDBCQUNoQiw4REFBQyxRQUFEO0FBQVUsV0FBRyxFQUFFQSxJQUFJLENBQUN2QjtBQUFwQixTQUE0QnVCLElBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFEZ0I7QUFBQSxLQUFuQixDQUhMLGVBT0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVBKLGVBUUk7QUFBQSw4QkFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFILE9BQWdDSixRQUFRLENBQUNKLHFCQUF6QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVlIOztJQW5CdUJDLFE7VUFDYUMsdUQ7OztNQURiRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuNTVhNTI3NjRjMjljZTZlY2YxZWUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjb21tZXJjZSBmcm9tIFwiLi4vbGliL2NvbW1lcmNlXCJcclxuaW1wb3J0IHsgdXNlQ2FydERpc3BhdGNoLCB1c2VDYXJ0U3RhdGUgfSBmcm9tIFwiLi4vY29udGV4dC9jYXJ0XCJcclxuXHJcbmZ1bmN0aW9uIENhcnRJdGVtKHsgaWQsIG5hbWUsIHF1YW50aXR5LCBsaW5lX3RvdGFsIH0pIHtcclxuICAgIGNvbnN0IHsgc2V0Q2FydCB9ID0gdXNlQ2FydERpc3BhdGNoKClcclxuXHJcbiAgICBjb25zdCBoYW5kbGVVcGRhdGVDYXJ0ID0gKHtjYXJ0fSkgPT4gc2V0Q2FydChjYXJ0KVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZUl0ZW0gPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZW1vdmUgaXRlbVwiKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGRlY3JlbWVudFF1YW50aXR5ID0gKCkgPT4ge1xyXG4gICAgICAgIHF1YW50aXR5ID4gMVxyXG4gICAgICAgICAgICA/IGNvbW1lcmNlLmNhcnQudXBkYXRlKGlkLCB7IHF1YW50aXR5OiBxdWFudGl0eSAtIDF9KS50aGVuKGhhbmRsZVVwZGF0ZUNhcnQpXHJcbiAgICAgICAgICAgIDogcmVtb3ZlSXRlbSgpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgaW5jcmVtZW50UXVhbnRpdHkgPSAoKSA9PiBjb21tZXJjZS5jYXJ0LnVwZGF0ZShpZCwgeyBxdWFudGl0eTogcXVhbnRpdHkgKyAxfSkudGhlbihoYW5kbGVVcGRhdGVDYXJ0KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8c3Ryb25nPntuYW1lfTwvc3Ryb25nPjxici8+XHJcbiAgICAgICAgICAgICAgICBRdWFudCB7XCIgXCJ9IHtxdWFudGl0eX08YnIvPlxyXG4gICAgICAgICAgICAgICAge2xpbmVfdG90YWwuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfVxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2RlY3JlbWVudFF1YW50aXR5fT4tPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2luY3JlbWVudFF1YW50aXR5fT4rPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0UGFnZSgpIHtcclxuICAgIGNvbnN0IHsgbGluZV9pdGVtcywgc3VidG90YWwgfSA9IHVzZUNhcnRTdGF0ZSgpXHJcblxyXG4gICAgY29uc3QgaXNFbXB0eSA9IGxpbmVfaXRlbXMubGVuZ3RoID09PSAwXHJcblxyXG4gICAgaWYgKGlzRW1wdHkpIHJldHVybiA8cD5Zb3VyIGNhcnQgaXMgZW1wdHk8L3A+XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDE+Q2FydDwvaDE+XHJcblxyXG4gICAgICAgICAgICB7bGluZV9pdGVtcy5tYXAoaXRlbSA9PiBcclxuICAgICAgICAgICAgICAgIDxDYXJ0SXRlbSBLZXk9e2l0ZW0uaWR9IHsuLi5pdGVtIH0gLz5cclxuICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgIDxociAvPlxyXG4gICAgICAgICAgICA8cD48c3Ryb25nPlN1YiB0b3RhbDo8L3N0cm9uZz4ge3N1YnRvdGFsLmZvcm1hdHRlZF93aXRoX3N5bWJvbH08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9