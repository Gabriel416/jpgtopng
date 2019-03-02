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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1518070080", [file.uploadPercentage]]]) + " " + "progress-bar-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1518070080", [file.uploadPercentage]]]) + " " + "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1518070080", [file.uploadPercentage]]]) + " " + "progress-bar success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1518070080", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, statusText()), file.downloadUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: file.downloadUrl,
    alt: "preview image",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1518070080", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    download: true,
    href: file.downloadUrl,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1518070080", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "Download"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1518070080",
    dynamic: [file.uploadPercentage],
    __self: this
  }, ".loader.__jsx-style-dynamic-selector{width:60%;height:25px;border-radius:14px;background:#ccc;overflow:hidden;position:relative;}.success.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(46,204,113), rgb(46,204,113) 10px, rgba(46,204,113,0.7) 10px, rgba(46,204,113,0.7) 20px );}.error.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(192,57,43), rgb(192,57,43) 10px, rgba(192,57,43,0,7) 10px, rgba(192,57,43,0.7) 20px );}.progress-bar.__jsx-style-dynamic-selector{width:".concat(file.uploadPercentage, "%;height:25px;border-radius:14px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzQmtCLEFBT3FCLEFBZVQsQUFVQSxBQUltQyxVQTVCeEIsWUFDTyxjQTRCUCxLQTNCSSxPQTRCRyxTQTNCSCxVQTRCQSxNQTNCRSxVQTRCcEIsUUEzQkEsNENBb0JBLElBVkEiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwvY29kZS9qcGd0b3BuZy9jb21wb25lbnRzL1Byb2dyZXNzQmFyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgKHsgZmlsZSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKGZpbGUsIFwiRklMRVwiKTtcbiAgY29uc3Qgc3RhdHVzVGV4dCA9ICgpID0+IHtcbiAgICBpZiAoZmlsZS51cGxvYWRQZXJjZW50YWdlIDwgMTAwKSB7XG4gICAgICByZXR1cm4gYFVwbG9hZGluZy4uLiAke2ZpbGUudXBsb2FkUGVyY2VudGFnZX0lYDtcbiAgICB9IGVsc2UgaWYgKCFmaWxlLmRvd25sb2FkVXJsKSB7XG4gICAgICByZXR1cm4gXCJQcm9jZXNzaW5nLi4uXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBgRmluaXNoZWQgJHtmaWxlLnVwbG9hZFBlcmNlbnRhZ2V9JWA7XG4gICAgfVxuICB9O1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9hZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHN1Y2Nlc3NcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8cD57c3RhdHVzVGV4dCgpfTwvcD5cbiAgICAgIHtmaWxlLmRvd25sb2FkVXJsICYmIDxpbWcgc3JjPXtmaWxlLmRvd25sb2FkVXJsfSBhbHQ9XCJwcmV2aWV3IGltYWdlXCIgLz59XG5cbiAgICAgIDxhIGRvd25sb2FkIGhyZWY9e2ZpbGUuZG93bmxvYWRVcmx9PlxuICAgICAgICBEb3dubG9hZFxuICAgICAgPC9hPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAvLyAucHJvZ3Jlc3MtYmFyLXdyYXBwZXIge1xuICAgICAgICAvLyAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8vIH1cblxuICAgICAgICAubG9hZGVyIHtcbiAgICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VjY2VzcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDQ1ZGVnLFxuICAgICAgICAgICAgcmdiKDQ2LCAyMDQsIDExMyksXG4gICAgICAgICAgICByZ2IoNDYsIDIwNCwgMTEzKSAxMHB4LFxuICAgICAgICAgICAgcmdiYSg0NiwgMjA0LCAxMTMsIDAuNykgMTBweCxcbiAgICAgICAgICAgIHJnYmEoNDYsIDIwNCwgMTEzLCAwLjcpIDIwcHhcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgNDVkZWcsXG4gICAgICAgICAgICByZ2IoMTkyLCA1NywgNDMpLFxuICAgICAgICAgICAgcmdiKDE5MiwgNTcsIDQzKSAxMHB4LFxuICAgICAgICAgICAgcmdiYSgxOTIsIDU3LCA0MywgMCwgNykgMTBweCxcbiAgICAgICAgICAgIHJnYmEoMTkyLCA1NywgNDMsIDAuNykgMjBweFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgICB3aWR0aDogJHtmaWxlLnVwbG9hZFBlcmNlbnRhZ2V9JTtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/components/ProgressBar.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.4242018085128fae21a0.hot-update.js.map