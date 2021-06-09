exports.id = "context_cart_js";
exports.ids = ["context_cart_js"];
exports.modules = {

/***/ "./context/cart.js":
/*!*************************!*\
  !*** ./context/cart.js ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartProvider": function() { return /* binding */ CartProvider; },
/* harmony export */   "useCartState": function() { return /* binding */ useCartState; },
/* harmony export */   "useCartDispatch": function() { return /* binding */ useCartDispatch; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_commerce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/commerce */ "./lib/commerce.js");

var _jsxFileName = "C:\\Users\\gease\\Documents\\DEVELOPER\\next-ecommerce\\context\\cart.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



const CartStateContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const CartDispatchContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const SET_CART = "SET_CART";
const initialState = {
  total_items: 0,
  total_unique_items: 0,
  line_items: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_CART:
      return _objectSpread(_objectSpread({}, state), action.payload);

    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const CartProvider = ({
  children
}) => {
  const {
    0: state,
    1: dispatch
  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    getCart();
  }, []);

  const setCart = payload => dispatch({
    type: SET_CART,
    payload
  });

  const getCart = async () => {
    try {
      const cart = await _lib_commerce__WEBPACK_IMPORTED_MODULE_2__.default.cart.retrieve();
      setCart(cart);
    } catch (err) {
      console.log(err);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartDispatchContext.Provider, {
    value: {
      setCart
    },
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartStateContext.Provider, {
      value: state,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, undefined);
};
const useCartState = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartStateContext);
const useCartDispatch = () => (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(CartDispatchContext);

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

/***/ })

};
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL2NvbnRleHQvY2FydC5qcyIsIndlYnBhY2s6Ly9uZXh0LWVjb21tZXJjZS8uL2xpYi9jb21tZXJjZS5qcyJdLCJuYW1lcyI6WyJDYXJ0U3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNhcnREaXNwYXRjaENvbnRleHQiLCJTRVRfQ0FSVCIsImluaXRpYWxTdGF0ZSIsInRvdGFsX2l0ZW1zIiwidG90YWxfdW5pcXVlX2l0ZW1zIiwibGluZV9pdGVtcyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiRXJyb3IiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwidXNlUmVkdWNlciIsInVzZUVmZmVjdCIsImdldENhcnQiLCJzZXRDYXJ0IiwiY2FydCIsImNvbW1lcmNlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInVzZUNhcnRTdGF0ZSIsInVzZUNvbnRleHQiLCJ1c2VDYXJ0RGlzcGF0Y2giLCJjbGllbnQiLCJDb21tZXJjZVNESyIsInByb2Nlc3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUVBO0FBRUEsTUFBTUEsZ0JBQWdCLGdCQUFHQyxvREFBYSxFQUF0QztBQUNBLE1BQU1DLG1CQUFtQixnQkFBR0Qsb0RBQWEsRUFBekM7QUFFQSxNQUFNRSxRQUFRLEdBQUcsVUFBakI7QUFFQSxNQUFNQyxZQUFZLEdBQUc7QUFDbkJDLGFBQVcsRUFBRSxDQURNO0FBRW5CQyxvQkFBa0IsRUFBRSxDQUZEO0FBR25CQyxZQUFVLEVBQUU7QUFITyxDQUFyQjs7QUFNQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtSLFFBQUw7QUFDRSw2Q0FBWU0sS0FBWixHQUFzQkMsTUFBTSxDQUFDRSxPQUE3Qjs7QUFDRjtBQUNFLFlBQU0sSUFBSUMsS0FBSixDQUFXLG1CQUFrQkgsTUFBTSxDQUFDQyxJQUFLLEVBQXpDLENBQU47QUFKSjtBQU1ELENBUEQ7O0FBU08sTUFBTUcsWUFBWSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWtCO0FBQzVDLFFBQU07QUFBQSxPQUFDTixLQUFEO0FBQUEsT0FBUU87QUFBUixNQUFvQkMsaURBQVUsQ0FBQ1QsT0FBRCxFQUFVSixZQUFWLENBQXBDO0FBRUFjLGtEQUFTLENBQUMsTUFBTTtBQUNkQyxXQUFPO0FBQ1IsR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxRQUFNQyxPQUFPLEdBQUlSLE9BQUQsSUFBYUksUUFBUSxDQUFDO0FBQUVMLFFBQUksRUFBRVIsUUFBUjtBQUFrQlM7QUFBbEIsR0FBRCxDQUFyQzs7QUFFQSxRQUFNTyxPQUFPLEdBQUcsWUFBWTtBQUMxQixRQUFJO0FBQ0YsWUFBTUUsSUFBSSxHQUFHLE1BQU1DLGdFQUFBLEVBQW5CO0FBRUFGLGFBQU8sQ0FBQ0MsSUFBRCxDQUFQO0FBQ0QsS0FKRCxDQUlFLE9BQU9FLEdBQVAsRUFBWTtBQUNaQyxhQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0YsR0FSRDs7QUFVQSxzQkFDRSw4REFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixTQUFLLEVBQUU7QUFBRUg7QUFBRixLQUFyQztBQUFBLDJCQUNFLDhEQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFdBQUssRUFBRVgsS0FBbEM7QUFBQSxnQkFDR007QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBT0QsQ0ExQk07QUE0QkEsTUFBTVcsWUFBWSxHQUFHLE1BQU1DLGlEQUFVLENBQUMzQixnQkFBRCxDQUFyQztBQUNBLE1BQU00QixlQUFlLEdBQUcsTUFBTUQsaURBQVUsQ0FBQ3pCLG1CQUFELENBQXhDLEM7Ozs7Ozs7Ozs7Ozs7O0FDdERQO0FBRUEsTUFBTTJCLE1BQU0sR0FBRyxJQUFJQywwREFBSixDQUFnQkMsa0RBQWhCLENBQWY7QUFFQSwrREFBZUYsTUFBZixFIiwiZmlsZSI6ImNvbnRleHRfY2FydF9qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVJlZHVjZXIsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5pbXBvcnQgY29tbWVyY2UgZnJvbSBcIi4uL2xpYi9jb21tZXJjZVwiXHJcblxyXG5jb25zdCBDYXJ0U3RhdGVDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcbmNvbnN0IENhcnREaXNwYXRjaENvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmNvbnN0IFNFVF9DQVJUID0gXCJTRVRfQ0FSVFwiXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdG90YWxfaXRlbXM6IDAsXHJcbiAgdG90YWxfdW5pcXVlX2l0ZW1zOiAwLFxyXG4gIGxpbmVfaXRlbXM6IFtdLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIFNFVF9DQVJUOlxyXG4gICAgICByZXR1cm4geyAuLi5zdGF0ZSwgLi4uYWN0aW9uLnBheWxvYWQgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmtub3duIGFjdGlvbjogJHthY3Rpb24udHlwZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0Q2FydCgpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IHNldENhcnQgPSAocGF5bG9hZCkgPT4gZGlzcGF0Y2goeyB0eXBlOiBTRVRfQ0FSVCwgcGF5bG9hZCB9KVxyXG5cclxuICBjb25zdCBnZXRDYXJ0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgY2FydCA9IGF3YWl0IGNvbW1lcmNlLmNhcnQucmV0cmlldmUoKVxyXG5cclxuICAgICAgc2V0Q2FydChjYXJ0KVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGVycilcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydERpc3BhdGNoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBzZXRDYXJ0IH19PlxyXG4gICAgICA8Q2FydFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17c3RhdGV9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9DYXJ0U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgPC9DYXJ0RGlzcGF0Y2hDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnRTdGF0ZSA9ICgpID0+IHVzZUNvbnRleHQoQ2FydFN0YXRlQ29udGV4dClcclxuZXhwb3J0IGNvbnN0IHVzZUNhcnREaXNwYXRjaCA9ICgpID0+IHVzZUNvbnRleHQoQ2FydERpc3BhdGNoQ29udGV4dCkiLCJpbXBvcnQgQ29tbWVyY2VTREsgZnJvbSAnQGNoZWMvY29tbWVyY2UuanMnXHJcblxyXG5jb25zdCBjbGllbnQgPSBuZXcgQ29tbWVyY2VTREsocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hFQ19QVUJMSUNfQVBJX0tFWSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=