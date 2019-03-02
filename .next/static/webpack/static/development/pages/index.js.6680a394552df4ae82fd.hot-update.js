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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3500205928", [file.uploadPercentage]]]) + " " + "progress-bar-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3500205928", [file.uploadPercentage]]]) + " " + "loader-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3500205928", [file.uploadPercentage]]]) + " " + "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3500205928", [file.uploadPercentage]]]) + " " + "progress-bar success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3500205928", [file.uploadPercentage]]]) + " " + "status-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, statusText())), file.downloadUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3500205928", [file.uploadPercentage]]]) + " " + "image-preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: file.downloadUrl,
    alt: "preview image",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3500205928", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3500205928", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    download: true,
    href: file.downloadUrl,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["3500205928", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Download")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3500205928",
    dynamic: [file.uploadPercentage],
    __self: this
  }, ".progress-bar-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;}.loader-wrapper.__jsx-style-dynamic-selector{width:60%;}.status-text.__jsx-style-dynamic-selector{text-align:center;}.loader.__jsx-style-dynamic-selector{height:25px;border-radius:14px;background:#ccc;overflow:hidden;position:relative;}.image-preview.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:60px;width:60px;}.success.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(46,204,113), rgb(46,204,113) 10px, rgba(46,204,113,0.7) 10px, rgba(46,204,113,0.7) 20px );}.error.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(192,57,43), rgb(192,57,43) 10px, rgba(192,57,43,0,7) 10px, rgba(192,57,43,0.7) 20px );}.progress-bar.__jsx-style-dynamic-selector{width:".concat(file.uploadPercentage, "%;height:25px;border-radius:14px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBR3dCLEFBT0gsQUFJUSxBQUlOLEFBUUEsQUFXWCxBQVVBLEFBSW1DLFVBeEN0QyxFQVFxQixBQVFSLE1BWmIsS0FhQSxRQVJrQixLQWdDSixXQS9CSSxDQWdDRyxlQS9CRCxJQWdDRixPQWxERyxPQW1CckIsRUFnQ0Esb0RBUEEsSUFWQSw0QkFqQytCLDJIQUVoQyxBQUFDIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0ICh7IGZpbGUgfSkgPT4ge1xuICBjb25zb2xlLmxvZyhmaWxlLCBcIkZJTEVcIik7XG4gIGNvbnN0IHN0YXR1c1RleHQgPSAoKSA9PiB7XG4gICAgaWYgKGZpbGUudXBsb2FkUGVyY2VudGFnZSA8IDEwMCkge1xuICAgICAgcmV0dXJuIGBVcGxvYWRpbmcuLi4gJHtmaWxlLnVwbG9hZFBlcmNlbnRhZ2V9JWA7XG4gICAgfSBlbHNlIGlmICghZmlsZS5kb3dubG9hZFVybCkge1xuICAgICAgcmV0dXJuIFwiUHJvY2Vzc2luZy4uLlwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYEZpbmlzaGVkICR7ZmlsZS51cGxvYWRQZXJjZW50YWdlfSVgO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzLWJhci13cmFwcGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlci13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgc3VjY2Vzc1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJzdGF0dXMtdGV4dFwiPntzdGF0dXNUZXh0KCl9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICB7ZmlsZS5kb3dubG9hZFVybCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2UtcHJldmlld1wiPlxuICAgICAgICAgIDxpbWcgc3JjPXtmaWxlLmRvd25sb2FkVXJsfSBhbHQ9XCJwcmV2aWV3IGltYWdlXCIgLz5cbiAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICA8YSBkb3dubG9hZCBocmVmPXtmaWxlLmRvd25sb2FkVXJsfT5cbiAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnByb2dyZXNzLWJhci13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU6XG4gICAgICAgIH1cblxuICAgICAgICAubG9hZGVyLXdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHVzLXRleHQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2FkZXIge1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2UtcHJldmlldyBpbWcge1xuICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdWNjZXNzIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgNDVkZWcsXG4gICAgICAgICAgICByZ2IoNDYsIDIwNCwgMTEzKSxcbiAgICAgICAgICAgIHJnYig0NiwgMjA0LCAxMTMpIDEwcHgsXG4gICAgICAgICAgICByZ2JhKDQ2LCAyMDQsIDExMywgMC43KSAxMHB4LFxuICAgICAgICAgICAgcmdiYSg0NiwgMjA0LCAxMTMsIDAuNykgMjBweFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAuZXJyb3Ige1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICA0NWRlZyxcbiAgICAgICAgICAgIHJnYigxOTIsIDU3LCA0MyksXG4gICAgICAgICAgICByZ2IoMTkyLCA1NywgNDMpIDEwcHgsXG4gICAgICAgICAgICByZ2JhKDE5MiwgNTcsIDQzLCAwLCA3KSAxMHB4LFxuICAgICAgICAgICAgcmdiYSgxOTIsIDU3LCA0MywgMC43KSAyMHB4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICAgIHdpZHRoOiAke2ZpbGUudXBsb2FkUGVyY2VudGFnZX0lO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG4iXX0= */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/components/ProgressBar.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.6680a394552df4ae82fd.hot-update.js.map