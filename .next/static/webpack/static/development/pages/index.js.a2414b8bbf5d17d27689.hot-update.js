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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]) + " " + "progress-bar-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]) + " " + "loader-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]) + " " + "loader",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]) + " " + "progress-bar success",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]) + " " + "status-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, statusText())), file.downloadUrl && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]) + " " + "file-preview-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]) + " " + "image-preview",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: file.downloadUrl,
    alt: "preview image",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, file.name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, file.size), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    download: true,
    href: file.downloadUrl,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2803131825", [file.uploadPercentage]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Download")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2803131825",
    dynamic: [file.uploadPercentage],
    __self: this
  }, ".progress-bar-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;width:100%;}.loader-wrapper.__jsx-style-dynamic-selector{width:60%;}.status-text.__jsx-style-dynamic-selector{text-align:center;}.loader.__jsx-style-dynamic-selector{height:25px;border-radius:14px;background:#ccc;overflow:hidden;position:relative;}.file-preview-wrapper.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.image-preview.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}.image-preview.__jsx-style-dynamic-selector img.__jsx-style-dynamic-selector{height:60px;width:60px;}.image-preview.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector{margin:5px 0px;}.success.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(46,204,113), rgb(46,204,113) 10px, rgba(46,204,113,0.7) 10px, rgba(46,204,113,0.7) 20px );}.error.__jsx-style-dynamic-selector{background:repeating-linear-gradient( 45deg, rgb(192,57,43), rgb(192,57,43) 10px, rgba(192,57,43,0,7) 10px, rgba(192,57,43,0.7) 20px );}.progress-bar.__jsx-style-dynamic-selector{width:".concat(file.uploadPercentage, "%;height:25px;border-radius:14px;overflow:hidden;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnQ2tCLEFBR3dCLEFBT0gsQUFJUSxBQUlOLEFBUUMsQUFJQSxBQU1ELEFBS0csQUFVZCxBQVVBLEFBSW1DLFVBdER0QyxFQVFxQixBQWtCUixHQUtiLEdBM0JBLEtBdUJBLFFBbEJrQixLQThDSixXQTdDSSxDQThDRyxlQTdDRCxJQThDRixPQWhFRyxBQXVCckIsQUFJeUIsT0FSekIsRUE4Q0Esb0RBUEEsSUFWQSw0QkEvQytCLE1BMkJQLDhFQUN4Qix1Q0EzQmEsV0FDYiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCAoeyBmaWxlIH0pID0+IHtcbiAgY29uc29sZS5sb2coZmlsZSwgXCJGSUxFXCIpO1xuICBjb25zdCBzdGF0dXNUZXh0ID0gKCkgPT4ge1xuICAgIGlmIChmaWxlLnVwbG9hZFBlcmNlbnRhZ2UgPCAxMDApIHtcbiAgICAgIHJldHVybiBgVXBsb2FkaW5nLi4uICR7ZmlsZS51cGxvYWRQZXJjZW50YWdlfSVgO1xuICAgIH0gZWxzZSBpZiAoIWZpbGUuZG93bmxvYWRVcmwpIHtcbiAgICAgIHJldHVybiBcIlByb2Nlc3NpbmcuLi5cIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGBGaW5pc2hlZCAke2ZpbGUudXBsb2FkUGVyY2VudGFnZX0lYDtcbiAgICB9XG4gIH07XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXItd3JhcHBlclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2FkZXItd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHN1Y2Nlc3NcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwic3RhdHVzLXRleHRcIj57c3RhdHVzVGV4dCgpfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAge2ZpbGUuZG93bmxvYWRVcmwgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtcHJldmlldy13cmFwcGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1wcmV2aWV3XCI+XG4gICAgICAgICAgICA8aW1nIHNyYz17ZmlsZS5kb3dubG9hZFVybH0gYWx0PVwicHJldmlldyBpbWFnZVwiIC8+XG4gICAgICAgICAgICA8c3Bhbj57ZmlsZS5uYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8c3Bhbj57ZmlsZS5zaXplfTwvc3Bhbj5cbiAgICAgICAgICA8YSBkb3dubG9hZCBocmVmPXtmaWxlLmRvd25sb2FkVXJsfT5cbiAgICAgICAgICAgIERvd25sb2FkXG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLnByb2dyZXNzLWJhci13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9hZGVyLXdyYXBwZXIge1xuICAgICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHVzLXRleHQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sb2FkZXIge1xuICAgICAgICAgIGhlaWdodDogMjVweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNjY2M7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1wcmV2aWV3LXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2UtcHJldmlldyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlLXByZXZpZXcgaW1nIHtcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2UtcHJldmlldyBzcGFuIHtcbiAgICAgICAgICBtYXJnaW46IDVweCAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc3VjY2VzcyB7XG4gICAgICAgICAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDQ1ZGVnLFxuICAgICAgICAgICAgcmdiKDQ2LCAyMDQsIDExMyksXG4gICAgICAgICAgICByZ2IoNDYsIDIwNCwgMTEzKSAxMHB4LFxuICAgICAgICAgICAgcmdiYSg0NiwgMjA0LCAxMTMsIDAuNykgMTBweCxcbiAgICAgICAgICAgIHJnYmEoNDYsIDIwNCwgMTEzLCAwLjcpIDIwcHhcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLmVycm9yIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KFxuICAgICAgICAgICAgNDVkZWcsXG4gICAgICAgICAgICByZ2IoMTkyLCA1NywgNDMpLFxuICAgICAgICAgICAgcmdiKDE5MiwgNTcsIDQzKSAxMHB4LFxuICAgICAgICAgICAgcmdiYSgxOTIsIDU3LCA0MywgMCwgNykgMTBweCxcbiAgICAgICAgICAgIHJnYmEoMTkyLCA1NywgNDMsIDAuNykgMjBweFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAucHJvZ3Jlc3MtYmFyIHtcbiAgICAgICAgICB3aWR0aDogJHtmaWxlLnVwbG9hZFBlcmNlbnRhZ2V9JTtcbiAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTRweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/components/ProgressBar.js */")));
});

/***/ })

})
//# sourceMappingURL=index.js.a2414b8bbf5d17d27689.hot-update.js.map