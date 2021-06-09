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
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_cart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context/cart */ "./context/cart.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\gease\\Documents\\DEVELOPER\\next-ecommerce\\pages\\cart.js",
    _s = $RefreshSig$();



function CartItem(_ref) {
  var name = _ref.name,
      quantity = _ref.quantity,
      line_total = _ref.line_total;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: quantity
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: line_total.formatted_with_symbol
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, this);
}

_c = CartItem;
function CartPage() {
  _s();

  var _useCartState = (0,_context_cart__WEBPACK_IMPORTED_MODULE_1__.useCartState)(),
      line_items = _useCartState.line_items;

  var isEmpty = line_items.length === 0;
  if (isEmpty) return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
    children: "Your cart is empty"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 25
  }, this);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("pre", {
    children: JSON.stringify(line_items, null, 2)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 21,
    columnNumber: 9
  }, this);
}

_s(CartPage, "JkgbvCD/4R5ejWae8bJ7KvrUXs0=", false, function () {
  return [_context_cart__WEBPACK_IMPORTED_MODULE_1__.useCartState];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FydC5qcyJdLCJuYW1lcyI6WyJDYXJ0SXRlbSIsIm5hbWUiLCJxdWFudGl0eSIsImxpbmVfdG90YWwiLCJmb3JtYXR0ZWRfd2l0aF9zeW1ib2wiLCJDYXJ0UGFnZSIsInVzZUNhcnRTdGF0ZSIsImxpbmVfaXRlbXMiLCJpc0VtcHR5IiwibGVuZ3RoIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBLFNBQVNBLFFBQVQsT0FBaUQ7QUFBQSxNQUE3QkMsSUFBNkIsUUFBN0JBLElBQTZCO0FBQUEsTUFBdkJDLFFBQXVCLFFBQXZCQSxRQUF1QjtBQUFBLE1BQWJDLFVBQWEsUUFBYkEsVUFBYTtBQUM3QyxzQkFDSTtBQUFBLDRCQUNJO0FBQUEsZ0JBQUlGO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLGVBRUk7QUFBQSxnQkFBSUM7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSTtBQUFBLGdCQUFJQyxVQUFVLENBQUNDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBT0g7O0tBUlFKLFE7QUFVTSxTQUFTSyxRQUFULEdBQW9CO0FBQUE7O0FBQUEsc0JBQ1JDLDJEQUFZLEVBREo7QUFBQSxNQUN2QkMsVUFEdUIsaUJBQ3ZCQSxVQUR1Qjs7QUFHL0IsTUFBTUMsT0FBTyxHQUFHRCxVQUFVLENBQUNFLE1BQVgsS0FBc0IsQ0FBdEM7QUFFQSxNQUFJRCxPQUFKLEVBQWEsb0JBQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUViLHNCQUNJO0FBQUEsY0FDS0UsSUFBSSxDQUFDQyxTQUFMLENBQWVKLFVBQWYsRUFBMkIsSUFBM0IsRUFBaUMsQ0FBakM7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFLSDs7R0FadUJGLFE7VUFDR0MsdUQ7OztNQURIRCxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2NhcnQuNTdmNTI1NjUxNmM2MTMxMWVmMjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNhcnRTdGF0ZSB9IGZyb20gXCIuLi9jb250ZXh0L2NhcnRcIlxyXG5cclxuZnVuY3Rpb24gQ2FydEl0ZW0oeyBuYW1lLCBxdWFudGl0eSwgbGluZV90b3RhbH0pIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHA+e25hbWV9PC9wPlxyXG4gICAgICAgICAgICA8cD57cXVhbnRpdHl9PC9wPlxyXG4gICAgICAgICAgICA8cD57bGluZV90b3RhbC5mb3JtYXR0ZWRfd2l0aF9zeW1ib2x9PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDYXJ0UGFnZSgpIHtcclxuICAgIGNvbnN0IHsgbGluZV9pdGVtcyB9ID0gdXNlQ2FydFN0YXRlKClcclxuXHJcbiAgICBjb25zdCBpc0VtcHR5ID0gbGluZV9pdGVtcy5sZW5ndGggPT09IDBcclxuXHJcbiAgICBpZiAoaXNFbXB0eSkgcmV0dXJuIDxwPllvdXIgY2FydCBpcyBlbXB0eTwvcD5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxwcmU+XHJcbiAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShsaW5lX2l0ZW1zLCBudWxsLCAyKX1cclxuICAgICAgICA8L3ByZT5cclxuICAgIClcclxufSJdLCJzb3VyY2VSb290IjoiIn0=