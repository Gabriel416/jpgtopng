webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/FileConversion/index.js":
/*!********************************************!*\
  !*** ./containers/FileConversion/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/SelectInput */ "./components/SelectInput.js");
var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";




/* harmony default export */ __webpack_exports__["default"] = (function () {
  var onDrop = function onDrop(acceptedFiles, rejectedFiles) {
    console.log(acceptedFiles, "accepted files"); // Do something with files
  };

  var fromFile = function fromFile(fileType) {
    console.log(fileType);
  };

  var toFile = function toFile(fileType) {
    console.log(fileType);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("main", {
    className: "jsx-1108967970" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", {
    className: "jsx-1108967970",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("section", {
    className: "jsx-1108967970",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1108967970",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "dropzone here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_2__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1108967970",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSelect: fromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onSelect: toFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1108967970",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, "download here")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1108967970",
    __self: this
  }, "main.jsx-1108967970{margin:70px auto;width:80%;}section.jsx-1108967970{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2QmtCLEFBRzRCLEFBS0osYUFDSyxJQUxSLFVBQ1osSUFLeUMsb0NBQ1UsOENBQ3hCLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXBsb2FkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VwbG9hZFwiO1xuaW1wb3J0IFNlbGVjdElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlbGVjdElucHV0XCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3Qgb25Ecm9wID0gKGFjY2VwdGVkRmlsZXMsIHJlamVjdGVkRmlsZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhY2NlcHRlZEZpbGVzLCBcImFjY2VwdGVkIGZpbGVzXCIpO1xuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIGZpbGVzXG4gIH07XG5cbiAgY29uc3QgZnJvbUZpbGUgPSBmaWxlVHlwZSA9PiB7XG4gICAgY29uc29sZS5sb2coZmlsZVR5cGUpO1xuICB9O1xuXG4gIGNvbnN0IHRvRmlsZSA9IGZpbGVUeXBlID0+IHtcbiAgICBjb25zb2xlLmxvZyhmaWxlVHlwZSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmaWxlLWNvbnZlcnNpb24td3JhcHBlclwiPlxuICAgICAgPGgxPkZpbGUgQ29udmVyc2lvbiBBcHA8L2gxPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxkaXY+ZHJvcHpvbmUgaGVyZTwvZGl2PlxuXG4gICAgICAgIDxVcGxvYWQgb25Ecm9wPXtvbkRyb3B9IC8+XG4gICAgICAgIDxkaXY+ZmlsZSB0eXBlcyBoZXJlPC9kaXY+XG4gICAgICAgIDxTZWxlY3RJbnB1dCBvblNlbGVjdD17ZnJvbUZpbGV9IC8+XG4gICAgICAgIDxTZWxlY3RJbnB1dCBvblNlbGVjdD17dG9GaWxlfSAvPlxuICAgICAgICA8ZGl2PmRvd25sb2FkIGhlcmU8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgbWFyZ2luOiA3MHB4IGF1dG87XG4gICAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTYsIDE1MywgMjM2LCAwKTtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDIyLCA0NSwgNjEsIDAuMSkgMHB4IDFweCAycHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.34191d42c4ad241ccf29.hot-update.js.map