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

  var removeItem = function removeItem() {};

  var decrementQuantity = function decrementQuantity() {
    quantity > 1 ? _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.default.cart(id, {
      quantity: quantity - 1
    }).then(handleUpdatecart) : removeItem();
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
        lineNumber: 22,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 40
      }, this), "Quant ", " ", " ", quantity, /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 39
      }, this), line_total.formatted_with_symbol]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: decrementQuantity,
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("button", {
        onClick: incrementQuantity,
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
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
    lineNumber: 39,
    columnNumber: 25
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("h1", {
      children: "Cart"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, this), line_items.map(function (item) {
      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(CartItem, _objectSpread({
        Key: item.id
      }, item), void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 17
      }, _this);
    }), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("p", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)("strong", {
        children: "Sub total:"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 16
      }, this), " ", subtotal.formatted_with_symbol]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJDYXJ0SXRlbSIsImlkIiwibmFtZSIsInF1YW50aXR5IiwibGluZV90b3RhbCIsInVzZUNhcnREaXNwYXRjaCIsInNldENhcnQiLCJoYW5kbGVVcGRhdGVDYXJ0IiwiY2FydCIsInJlbW92ZUl0ZW0iLCJkZWNyZW1lbnRRdWFudGl0eSIsImNvbW1lcmNlIiwidGhlbiIsImhhbmRsZVVwZGF0ZWNhcnQiLCJpbmNyZW1lbnRRdWFudGl0eSIsImZvcm1hdHRlZF93aXRoX3N5bWJvbCIsIkNhcnRQYWdlIiwidXNlQ2FydFN0YXRlIiwibGluZV9pdGVtcyIsInN1YnRvdGFsIiwiaXNFbXB0eSIsImxlbmd0aCIsIm1hcCIsIml0ZW0iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxPQUFzRDtBQUFBOztBQUFBLE1BQWxDQyxFQUFrQyxRQUFsQ0EsRUFBa0M7QUFBQSxNQUE5QkMsSUFBOEIsUUFBOUJBLElBQThCO0FBQUEsTUFBeEJDLFFBQXdCLFFBQXhCQSxRQUF3QjtBQUFBLE1BQWRDLFVBQWMsUUFBZEEsVUFBYzs7QUFBQSx5QkFDOUJDLDhEQUFlLEVBRGU7QUFBQSxNQUMxQ0MsT0FEMEMsb0JBQzFDQSxPQUQwQzs7QUFHbEQsTUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQjtBQUFBLFFBQUVDLElBQUYsU0FBRUEsSUFBRjtBQUFBLFdBQVlGLE9BQU8sQ0FBQ0UsSUFBRCxDQUFuQjtBQUFBLEdBQXpCOztBQUVBLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU0sQ0FBRSxDQUEzQjs7QUFFQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLEdBQU07QUFDNUJQLFlBQVEsR0FBRyxDQUFYLEdBQ0VRLHVEQUFBLENBQWNWLEVBQWQsRUFBa0I7QUFBRUUsY0FBUSxFQUFFQSxRQUFRLEdBQUc7QUFBdkIsS0FBbEIsRUFBNkNTLElBQTdDLENBQWtEQyxnQkFBbEQsQ0FERixHQUVFSixVQUFVLEVBRlo7QUFHSCxHQUpEOztBQU1BLE1BQU1LLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0I7QUFBQSxXQUFNSCw4REFBQSxDQUFxQlYsRUFBckIsRUFBeUI7QUFBRUUsY0FBUSxFQUFFQSxRQUFRLEdBQUc7QUFBdkIsS0FBekIsRUFBb0RTLElBQXBELENBQXlETCxnQkFBekQsQ0FBTjtBQUFBLEdBQTFCOztBQUVBLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSw4QkFDSTtBQUFBLGtCQUFTTDtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FESixlQUMyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRDNCLFlBRVcsR0FGWCxPQUVpQkMsUUFGakIsZUFFMEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUYxQixFQUdLQyxVQUFVLENBQUNXLHFCQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQU1JO0FBQUEsOEJBQ0k7QUFBUSxlQUFPLEVBQUVMLGlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBRUk7QUFBUSxlQUFPLEVBQUVJLGlCQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBYUg7O0dBNUJRZCxRO1VBQ2VLLDBEOzs7S0FEZkwsUTtBQThCTSxTQUFTZ0IsUUFBVCxHQUFvQjtBQUFBOztBQUFBOztBQUFBLHNCQUNFQywyREFBWSxFQURkO0FBQUEsTUFDdkJDLFVBRHVCLGlCQUN2QkEsVUFEdUI7QUFBQSxNQUNYQyxRQURXLGlCQUNYQSxRQURXOztBQUcvQixNQUFNQyxPQUFPLEdBQUdGLFVBQVUsQ0FBQ0csTUFBWCxLQUFzQixDQUF0QztBQUVBLE1BQUlELE9BQUosRUFBYSxvQkFBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFQO0FBRWIsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBR0tGLFVBQVUsQ0FBQ0ksR0FBWCxDQUFlLFVBQUFDLElBQUk7QUFBQSwwQkFDaEIsOERBQUMsUUFBRDtBQUFVLFdBQUcsRUFBRUEsSUFBSSxDQUFDdEI7QUFBcEIsU0FBNEJzQixJQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRGdCO0FBQUEsS0FBbkIsQ0FITCxlQU9JO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQSixlQVFJO0FBQUEsOEJBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBSCxPQUFnQ0osUUFBUSxDQUFDSixxQkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFZSDs7SUFuQnVCQyxRO1VBQ2FDLHVEOzs7TUFEYkQsUSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9jYXJ0LjcwMWY5YzM3OWQzM2Q2MDQxMzUxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY29tbWVyY2UgZnJvbSBcIi4uL2xpYi9jb21tZXJjZVwiXHJcbmltcG9ydCB7IHVzZUNhcnREaXNwYXRjaCwgdXNlQ2FydFN0YXRlIH0gZnJvbSBcIi4uL2NvbnRleHQvY2FydFwiXHJcblxyXG5mdW5jdGlvbiBDYXJ0SXRlbSh7IGlkLCBuYW1lLCBxdWFudGl0eSwgbGluZV90b3RhbCB9KSB7XHJcbiAgICBjb25zdCB7IHNldENhcnQgfSA9IHVzZUNhcnREaXNwYXRjaCgpXHJcblxyXG4gICAgY29uc3QgaGFuZGxlVXBkYXRlQ2FydCA9ICh7Y2FydH0pID0+IHNldENhcnQoY2FydClcclxuXHJcbiAgICBjb25zdCByZW1vdmVJdGVtID0gKCkgPT4ge31cclxuXHJcbiAgICBjb25zdCBkZWNyZW1lbnRRdWFudGl0eSA9ICgpID0+IHtcclxuICAgICAgICBxdWFudGl0eSA+IDFcclxuICAgICAgICA/IGNvbW1lcmNlLmNhcnQoaWQsIHsgcXVhbnRpdHk6IHF1YW50aXR5IC0gMX0pLnRoZW4oaGFuZGxlVXBkYXRlY2FydClcclxuICAgICAgICA6IHJlbW92ZUl0ZW0oKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluY3JlbWVudFF1YW50aXR5ID0gKCkgPT4gY29tbWVyY2UuY2FydC51cGRhdGUoaWQsIHsgcXVhbnRpdHk6IHF1YW50aXR5ICsgMX0pLnRoZW4oaGFuZGxlVXBkYXRlQ2FydClcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPHN0cm9uZz57bmFtZX08L3N0cm9uZz48YnIvPlxyXG4gICAgICAgICAgICAgICAgUXVhbnQge1wiIFwifSB7cXVhbnRpdHl9PGJyLz5cclxuICAgICAgICAgICAgICAgIHtsaW5lX3RvdGFsLmZvcm1hdHRlZF93aXRoX3N5bWJvbH1cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtkZWNyZW1lbnRRdWFudGl0eX0+LTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtpbmNyZW1lbnRRdWFudGl0eX0+KzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2FydFBhZ2UoKSB7XHJcbiAgICBjb25zdCB7IGxpbmVfaXRlbXMsIHN1YnRvdGFsIH0gPSB1c2VDYXJ0U3RhdGUoKVxyXG5cclxuICAgIGNvbnN0IGlzRW1wdHkgPSBsaW5lX2l0ZW1zLmxlbmd0aCA9PT0gMFxyXG5cclxuICAgIGlmIChpc0VtcHR5KSByZXR1cm4gPHA+WW91ciBjYXJ0IGlzIGVtcHR5PC9wPlxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGgxPkNhcnQ8L2gxPlxyXG5cclxuICAgICAgICAgICAge2xpbmVfaXRlbXMubWFwKGl0ZW0gPT4gXHJcbiAgICAgICAgICAgICAgICA8Q2FydEl0ZW0gS2V5PXtpdGVtLmlkfSB7Li4uaXRlbSB9IC8+XHJcbiAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgICAgPHA+PHN0cm9uZz5TdWIgdG90YWw6PC9zdHJvbmc+IHtzdWJ0b3RhbC5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==