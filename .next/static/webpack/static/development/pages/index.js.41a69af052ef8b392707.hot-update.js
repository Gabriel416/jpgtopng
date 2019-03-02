webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/ProgressBar.js":
/*!***********************************!*\
  !*** ./components/ProgressBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/gabriel/code/jpgtopng/components/ProgressBar.js";


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var file = _ref.file;
  console.log(file, "FILE");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83641634", [file.percentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83641634", [file.percentage]]]) + " " + "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83641634", [file.percentage]]]) + " " + "progress-bar success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83641634", [file.percentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, file.percentage < 100 && !file.downloadUrl ? "Loading..." : "Finished"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    download: file.downloadUrl,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["83641634", [file.percentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Download"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "83641634",
    dynamic: [file.percentage],
    __self: this
  }, ".loader.__jsx-style-dynamic-selector{width:60%;height:25px;border-radius:14px;background:#ccc;overflow:hidden;position:relative;}.success.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(46,204,113), rgb(46,204,113) 10px, rgba(46,204,113,0.7) 10px, rgba(46,204,113,0.7) 20px );}.error.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(192,57,43), rgb(192,57,43) 10px, rgba(192,57,43,0,7) 10px, rgba(192,57,43,0.7) 20px );}.progress-bar.__jsx-style-dynamic-selector{width:".concat(file.percentage, "%;height:25px;border-radius:14px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXa0IsQUFHcUIsQUFlVCxBQVVBLEFBSW1DLFVBNUJ4QixZQUNPLGNBNEJQLEtBM0JJLE9BNEJHLFNBM0JILFVBNEJBLE1BM0JFLFVBNEJwQixRQTNCQSw0Q0FvQkEsSUFWQSIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBmaWxlIH0pID0+IHtcbiAgY29uc29sZS5sb2coZmlsZSwgXCJGSUxFXCIpO1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBzdWNjZXNzXCIgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPHA+XG4gICAgICAgIHtmaWxlLnBlcmNlbnRhZ2UgPCAxMDAgJiYgIWZpbGUuZG93bmxvYWRVcmwgPyBcIkxvYWRpbmcuLi5cIiA6IFwiRmluaXNoZWRcIn1cbiAgICAgIDwvcD5cbiAgICAgIDxhIGRvd25sb2FkPXtmaWxlLmRvd25sb2FkVXJsfT5Eb3dubG9hZDwvYT5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmxvYWRlciB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjY2NjO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3Mge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICA0NWRlZyxcbiAgICAgICAgICAgIHJnYig0NiwgMjA0LCAxMTMpLFxuICAgICAgICAgICAgcmdiKDQ2LCAyMDQsIDExMykgMTBweCxcbiAgICAgICAgICAgIHJnYmEoNDYsIDIwNCwgMTEzLCAwLjcpIDEwcHgsXG4gICAgICAgICAgICByZ2JhKDQ2LCAyMDQsIDExMywgMC43KSAyMHB4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDQ1ZGVnLFxuICAgICAgICAgICAgcmdiKDE5MiwgNTcsIDQzKSxcbiAgICAgICAgICAgIHJnYigxOTIsIDU3LCA0MykgMTBweCxcbiAgICAgICAgICAgIHJnYmEoMTkyLCA1NywgNDMsIDAsIDcpIDEwcHgsXG4gICAgICAgICAgICByZ2JhKDE5MiwgNTcsIDQzLCAwLjcpIDIwcHhcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgd2lkdGg6ICR7ZmlsZS5wZXJjZW50YWdlfSU7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbi8vICMyZWNjNzFcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/components/ProgressBar.js */")));
}); // #2ecc71

/***/ })

})
//# sourceMappingURL=index.js.41a69af052ef8b392707.hot-update.js.map