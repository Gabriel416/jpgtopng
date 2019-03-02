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

  var statusText = function statusText() {
    if (file.uploadPercentage < 100) {
      return "Uploading... ".concat(file.uploadPercentage, "%");
    } else if (!file.downloadUrl) {
      return "Processing...";
    } else {
      return "Finished ".concat(file.uploadPercentage, "%");
    }
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2532145902", [file.uploadPercentage]]]) + " " + "progress-bar-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2532145902", [file.uploadPercentage]]]) + " " + "loader-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2532145902", [file.uploadPercentage]]]) + " " + "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2532145902", [file.uploadPercentage]]]) + " " + "progress-bar success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2532145902", [file.uploadPercentage]]]) + " " + "status-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, statusText())), file.downloadUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2532145902", [file.uploadPercentage]]]) + " " + "image-preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: file.downloadUrl,
    alt: "preview image",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2532145902", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    download: true,
    href: file.downloadUrl,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2532145902", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, "Download")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2532145902",
    dynamic: [file.uploadPercentage],
    __self: this
  }, ".progress-bar-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.loader-wrapper.__jsx-style-dynamic-selector{width:60%;}.status-text.__jsx-style-dynamic-selector{text-align:center;}.loader.__jsx-style-dynamic-selector{height:25px;border-radius:14px;background:#ccc;overflow:hidden;position:relative;}.image-preview.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:60px;width:60px;}.success.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(46,204,113), rgb(46,204,113) 10px, rgba(46,204,113,0.7) 10px, rgba(46,204,113,0.7) 20px );}.error.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(192,57,43), rgb(192,57,43) 10px, rgba(192,57,43,0,7) 10px, rgba(192,57,43,0.7) 20px );}.progress-bar.__jsx-style-dynamic-selector{width:".concat(file.uploadPercentage, "%;height:25px;border-radius:14px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0QmtCLEFBR3dCLEFBSUgsQUFJUSxBQUlOLEFBUUEsQUFXWCxBQVVBLEFBSW1DLFVBeEN0QyxFQVFxQixBQVFSLE1BWmIsS0FhQSxRQVJrQixLQWdDSixXQS9CSSxDQWdDRyxlQS9CRCxJQWdDRixPQS9DbEIsT0FnQkEsRUFnQ0Esb0RBUEEsSUFWQSIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBmaWxlIH0pID0+IHtcbiAgY29uc29sZS5sb2coZmlsZSwgXCJGSUxFXCIpO1xuICBjb25zdCBzdGF0dXNUZXh0ID0gKCkgPT4ge1xuICAgIGlmIChmaWxlLnVwbG9hZFBlcmNlbnRhZ2UgPCAxMDApIHtcbiAgICAgIHJldHVybiBgVXBsb2FkaW5nLi4uICR7ZmlsZS51cGxvYWRQZXJjZW50YWdlfSVgO1xuICAgIH0gZWxzZSBpZiAoIWZpbGUuZG93bmxvYWRVcmwpIHtcbiAgICAgIHJldHVybiBcIlByb2Nlc3NpbmcuLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBGaW5pc2hlZCAke2ZpbGUudXBsb2FkUGVyY2VudGFnZX0lYDtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHN1Y2Nlc3NcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RhdHVzLXRleHRcIj57c3RhdHVzVGV4dCgpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAge2ZpbGUuZG93bmxvYWRVcmwgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXByZXZpZXdcIj5cbiAgICAgICAgICA8aW1nIHNyYz17ZmlsZS5kb3dubG9hZFVybH0gYWx0PVwicHJldmlldyBpbWFnZVwiIC8+XG4gICAgICAgICAgPGEgZG93bmxvYWQgaHJlZj17ZmlsZS5kb3dubG9hZFVybH0+XG4gICAgICAgICAgICBEb3dubG9hZFxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5wcm9ncmVzcy1iYXItd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2FkZXItd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0dXMtdGV4dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvYWRlciB7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZS1wcmV2aWV3IGltZyB7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1Y2Nlc3Mge1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICA0NWRlZyxcbiAgICAgICAgICAgIHJnYig0NiwgMjA0LCAxMTMpLFxuICAgICAgICAgICAgcmdiKDQ2LCAyMDQsIDExMykgMTBweCxcbiAgICAgICAgICAgIHJnYmEoNDYsIDIwNCwgMTEzLCAwLjcpIDEwcHgsXG4gICAgICAgICAgICByZ2JhKDQ2LCAyMDQsIDExMywgMC43KSAyMHB4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5lcnJvciB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDQ1ZGVnLFxuICAgICAgICAgICAgcmdiKDE5MiwgNTcsIDQzKSxcbiAgICAgICAgICAgIHJnYigxOTIsIDU3LCA0MykgMTBweCxcbiAgICAgICAgICAgIHJnYmEoMTkyLCA1NywgNDMsIDAsIDcpIDEwcHgsXG4gICAgICAgICAgICByZ2JhKDE5MiwgNTcsIDQzLCAwLjcpIDIwcHhcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgICAgd2lkdGg6ICR7ZmlsZS51cGxvYWRQZXJjZW50YWdlfSU7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/components/ProgressBar.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.59dad21201d29c394b44.hot-update.js.map