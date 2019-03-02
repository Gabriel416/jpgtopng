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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3436481673", [file.uploadPercentage]]]) + " " + "progress-bar-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3436481673", [file.uploadPercentage]]]) + " " + "loader-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3436481673", [file.uploadPercentage]]]) + " " + "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3436481673", [file.uploadPercentage]]]) + " " + "progress-bar success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3436481673", [file.uploadPercentage]]]) + " " + "status-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, statusText())), file.downloadUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3436481673", [file.uploadPercentage]]]) + " " + "image-preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: file.downloadUrl,
    alt: "preview image",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3436481673", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3436481673", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, file.name, "}"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3436481673", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, file.size), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    download: true,
    href: file.downloadUrl,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3436481673", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Download")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3436481673",
    dynamic: [file.uploadPercentage],
    __self: this
  }, ".progress-bar-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:100%;}.loader-wrapper.__jsx-style-dynamic-selector{width:60%;}.status-text.__jsx-style-dynamic-selector{text-align:center;}.loader.__jsx-style-dynamic-selector{height:25px;border-radius:14px;background:#ccc;overflow:hidden;position:relative;}.image-preview.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.image-preview.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:60px;width:60px;}.success.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(46,204,113), rgb(46,204,113) 10px, rgba(46,204,113,0.7) 10px, rgba(46,204,113,0.7) 20px );}.error.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(192,57,43), rgb(192,57,43) 10px, rgba(192,57,43,0,7) 10px, rgba(192,57,43,0.7) 20px );}.progress-bar.__jsx-style-dynamic-selector{width:".concat(file.uploadPercentage, "%;height:25px;border-radius:14px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4QmtCLEFBR3dCLEFBT0gsQUFJUSxBQUlOLEFBUUMsQUFNRCxBQVdYLEFBVUEsQUFJbUMsVUE5Q3RDLEVBUXFCLEFBY1IsTUFsQmIsS0FtQkEsUUFka0IsS0FzQ0osV0FyQ0ksQ0FzQ0csZUFyQ0QsSUFzQ0YsT0F4REcsQUF1QkksT0FKekIsRUFzQ0Esb0RBUEEsSUFWQSw0QkF2QytCLE1BdUJQLDhFQUN4Qix1Q0F2QmEsV0FDYiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBmaWxlIH0pID0+IHtcbiAgY29uc29sZS5sb2coZmlsZSwgXCJGSUxFXCIpO1xuICBjb25zdCBzdGF0dXNUZXh0ID0gKCkgPT4ge1xuICAgIGlmIChmaWxlLnVwbG9hZFBlcmNlbnRhZ2UgPCAxMDApIHtcbiAgICAgIHJldHVybiBgVXBsb2FkaW5nLi4uICR7ZmlsZS51cGxvYWRQZXJjZW50YWdlfSVgO1xuICAgIH0gZWxzZSBpZiAoIWZpbGUuZG93bmxvYWRVcmwpIHtcbiAgICAgIHJldHVybiBcIlByb2Nlc3NpbmcuLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBGaW5pc2hlZCAke2ZpbGUudXBsb2FkUGVyY2VudGFnZX0lYDtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHN1Y2Nlc3NcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RhdHVzLXRleHRcIj57c3RhdHVzVGV4dCgpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAge2ZpbGUuZG93bmxvYWRVcmwgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLXByZXZpZXdcIj5cbiAgICAgICAgICA8aW1nIHNyYz17ZmlsZS5kb3dubG9hZFVybH0gYWx0PVwicHJldmlldyBpbWFnZVwiIC8+XG4gICAgICAgICAgPHA+e2ZpbGUubmFtZX19PC9wPlxuICAgICAgICAgIDxwPntmaWxlLnNpemV9PC9wPlxuICAgICAgICAgIDxhIGRvd25sb2FkIGhyZWY9e2ZpbGUuZG93bmxvYWRVcmx9PlxuICAgICAgICAgICAgRG93bmxvYWRcbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAucHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2FkZXItd3JhcHBlciB7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0dXMtdGV4dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxvYWRlciB7XG4gICAgICAgICAgaGVpZ2h0OiAyNXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDE0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2NjYztcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZS1wcmV2aWV3IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2UtcHJldmlldyBpbWcge1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWNjZXNzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgNDVkZWcsXG4gICAgICAgICAgICByZ2IoNDYsIDIwNCwgMTEzKSxcbiAgICAgICAgICAgIHJnYig0NiwgMjA0LCAxMTMpIDEwcHgsXG4gICAgICAgICAgICByZ2JhKDQ2LCAyMDQsIDExMywgMC43KSAxMHB4LFxuICAgICAgICAgICAgcmdiYSg0NiwgMjA0LCAxMTMsIDAuNykgMjBweFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICA0NWRlZyxcbiAgICAgICAgICAgIHJnYigxOTIsIDU3LCA0MyksXG4gICAgICAgICAgICByZ2IoMTkyLCA1NywgNDMpIDEwcHgsXG4gICAgICAgICAgICByZ2JhKDE5MiwgNTcsIDQzLCAwLCA3KSAxMHB4LFxuICAgICAgICAgICAgcmdiYSgxOTIsIDU3LCA0MywgMC43KSAyMHB4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgIHdpZHRoOiAke2ZpbGUudXBsb2FkUGVyY2VudGFnZX0lO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/components/ProgressBar.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.03a9c4ca42ffb5419d18.hot-update.js.map