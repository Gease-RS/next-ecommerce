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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJDYXJ0SXRlbSIsImlkIiwibmFtZSIsInF1YW50aXR5IiwibGluZV90b3RhbCIsInVzZUNhcnREaXNwYXRjaCIsInNldENhcnQiLCJoYW5kbGVVcGRhdGVDYXJ0IiwiY2FydCIsInJlbW92ZUl0ZW0iLCJkZWNyZW1lbnRRdWFudGl0eSIsImNvbW1lcmNlIiwidGhlbiIsImluY3JlbWVudFF1YW50aXR5IiwiZm9ybWF0dGVkX3dpdGhfc3ltYm9sIiwiQ2FydFBhZ2UiLCJ1c2VDYXJ0U3RhdGUiLCJsaW5lX2l0ZW1zIiwic3VidG90YWwiLCJpc0VtcHR5IiwibGVuZ3RoIiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxTQUFTQSxRQUFULE9BQXNEO0FBQUE7O0FBQUEsTUFBbENDLEVBQWtDLFFBQWxDQSxFQUFrQztBQUFBLE1BQTlCQyxJQUE4QixRQUE5QkEsSUFBOEI7QUFBQSxNQUF4QkMsUUFBd0IsUUFBeEJBLFFBQXdCO0FBQUEsTUFBZEMsVUFBYyxRQUFkQSxVQUFjOztBQUFBLHlCQUM5QkMsOERBQWUsRUFEZTtBQUFBLE1BQzFDQyxPQUQwQyxvQkFDMUNBLE9BRDBDOztBQUdsRCxNQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CO0FBQUEsUUFBRUMsSUFBRixTQUFFQSxJQUFGO0FBQUEsV0FBWUYsT0FBTyxDQUFDRSxJQUFELENBQW5CO0FBQUEsR0FBekI7O0FBRUEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTSxDQUFFLENBQTNCOztBQUVBLE1BQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsR0FBTTtBQUM1QlAsWUFBUSxHQUFHLENBQVgsR0FDTVEsOERBQUEsQ0FBcUJWLEVBQXJCLEVBQXlCO0FBQUVFLGNBQVEsRUFBRUEsUUFBUSxHQUFHO0FBQXZCLEtBQXpCLEVBQW9EUyxJQUFwRCxDQUF5REwsZ0JBQXpELENBRE4sR0FFTUUsVUFBVSxFQUZoQjtBQUdILEdBSkQ7O0FBTUEsTUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQjtBQUFBLFdBQU1GLDhEQUFBLENBQXFCVixFQUFyQixFQUF5QjtBQUFFRSxjQUFRLEVBQUVBLFFBQVEsR0FBRztBQUF2QixLQUF6QixFQUFvRFMsSUFBcEQsQ0FBeURMLGdCQUF6RCxDQUFOO0FBQUEsR0FBMUI7O0FBRUEsc0JBQ0k7QUFBQSw0QkFDSTtBQUFBLDhCQUNJO0FBQUEsa0JBQVNMO0FBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURKLGVBQzJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FEM0IsWUFFVyxHQUZYLE9BRWlCQyxRQUZqQixlQUUwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRjFCLEVBR0tDLFVBQVUsQ0FBQ1UscUJBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBTUk7QUFBQSw4QkFDSTtBQUFRLGVBQU8sRUFBRUosaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREosZUFFSTtBQUFRLGVBQU8sRUFBRUcsaUJBQWpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFhSDs7R0E1QlFiLFE7VUFDZUssMEQ7OztLQURmTCxRO0FBOEJNLFNBQVNlLFFBQVQsR0FBb0I7QUFBQTs7QUFBQTs7QUFBQSxzQkFDRUMsMkRBQVksRUFEZDtBQUFBLE1BQ3ZCQyxVQUR1QixpQkFDdkJBLFVBRHVCO0FBQUEsTUFDWEMsUUFEVyxpQkFDWEEsUUFEVzs7QUFHL0IsTUFBTUMsT0FBTyxHQUFHRixVQUFVLENBQUNHLE1BQVgsS0FBc0IsQ0FBdEM7QUFFQSxNQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUViLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUdLRixVQUFVLENBQUNJLEdBQVgsQ0FBZSxVQUFBQyxJQUFJO0FBQUEsMEJBQ2hCLDhEQUFDLFFBQUQ7QUFBVSxXQUFHLEVBQUVBLElBQUksQ0FBQ3JCO0FBQXBCLFNBQTRCcUIsSUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURnQjtBQUFBLEtBQW5CLENBSEwsZUFPSTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEosZUFRSTtBQUFBLDhCQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBQUgsT0FBZ0NKLFFBQVEsQ0FBQ0oscUJBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBWUg7O0lBbkJ1QkMsUTtVQUNhQyx1RDs7O01BRGJELFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FydC4zODY3ZjM3NGNmODNlMWMyNjZmZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNvbW1lcmNlIGZyb20gXCIuLi9saWIvY29tbWVyY2VcIlxyXG5pbXBvcnQgeyB1c2VDYXJ0RGlzcGF0Y2gsIHVzZUNhcnRTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L2NhcnRcIlxyXG5cclxuZnVuY3Rpb24gQ2FydEl0ZW0oeyBpZCwgbmFtZSwgcXVhbnRpdHksIGxpbmVfdG90YWwgfSkge1xyXG4gICAgY29uc3QgeyBzZXRDYXJ0IH0gPSB1c2VDYXJ0RGlzcGF0Y2goKVxyXG5cclxuICAgIGNvbnN0IGhhbmRsZVVwZGF0ZUNhcnQgPSAoe2NhcnR9KSA9PiBzZXRDYXJ0KGNhcnQpXHJcblxyXG4gICAgY29uc3QgcmVtb3ZlSXRlbSA9ICgpID0+IHt9XHJcblxyXG4gICAgY29uc3QgZGVjcmVtZW50UXVhbnRpdHkgPSAoKSA9PiB7XHJcbiAgICAgICAgcXVhbnRpdHkgPiAxXHJcbiAgICAgICAgICAgID8gY29tbWVyY2UuY2FydC51cGRhdGUoaWQsIHsgcXVhbnRpdHk6IHF1YW50aXR5IC0gMX0pLnRoZW4oaGFuZGxlVXBkYXRlQ2FydClcclxuICAgICAgICAgICAgOiByZW1vdmVJdGVtKClcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmNyZW1lbnRRdWFudGl0eSA9ICgpID0+IGNvbW1lcmNlLmNhcnQudXBkYXRlKGlkLCB7IHF1YW50aXR5OiBxdWFudGl0eSArIDF9KS50aGVuKGhhbmRsZVVwZGF0ZUNhcnQpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxzdHJvbmc+e25hbWV9PC9zdHJvbmc+PGJyLz5cclxuICAgICAgICAgICAgICAgIFF1YW50IHtcIiBcIn0ge3F1YW50aXR5fTxici8+XHJcbiAgICAgICAgICAgICAgICB7bGluZV90b3RhbC5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17ZGVjcmVtZW50UXVhbnRpdHl9Pi08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aW5jcmVtZW50UXVhbnRpdHl9Pis8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcnRQYWdlKCkge1xyXG4gICAgY29uc3QgeyBsaW5lX2l0ZW1zLCBzdWJ0b3RhbCB9ID0gdXNlQ2FydFN0YXRlKClcclxuXHJcbiAgICBjb25zdCBpc0VtcHR5ID0gbGluZV9pdGVtcy5sZW5ndGggPT09IDBcclxuXHJcbiAgICBpZiAoaXNFbXB0eSkgcmV0dXJuIDxwPllvdXIgY2FydCBpcyBlbXB0eTwvcD5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxoMT5DYXJ0PC9oMT5cclxuXHJcbiAgICAgICAgICAgIHtsaW5lX2l0ZW1zLm1hcChpdGVtID0+IFxyXG4gICAgICAgICAgICAgICAgPENhcnRJdGVtIEtleT17aXRlbS5pZH0gey4uLml0ZW0gfSAvPlxyXG4gICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgICAgIDxwPjxzdHJvbmc+U3ViIHRvdGFsOjwvc3Ryb25nPiB7c3VidG90YWwuZm9ybWF0dGVkX3dpdGhfc3ltYm9sfTwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=