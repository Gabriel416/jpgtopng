webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/FileConversion/index.js":
/*!********************************************!*\
  !*** ./containers/FileConversion/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/SelectInput */ "./components/SelectInput.js");
/* harmony import */ var _components_FinishedFile__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/FinishedFile */ "./components/FinishedFile.js");

var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";








/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      fromFile = _useState4[0],
      setFromFile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState5, 2),
      toFile = _useState6[0],
      setToFile = _useState6[1];

  var onDrop = function onDrop(acceptedFiles, rejectedFiles) {
    console.log(acceptedFiles, "accepted files");
    setFiles(acceptedFiles); // Do something with files
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "download here")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2tCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuXG5pbXBvcnQgVXBsb2FkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VwbG9hZFwiO1xuaW1wb3J0IFNlbGVjdElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlbGVjdElucHV0XCI7XG5pbXBvcnQgRmluaXNoZWRGaWxlIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZpbmlzaGVkRmlsZVwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZnJvbUZpbGUsIHNldEZyb21GaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdG9GaWxlLCBzZXRUb0ZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9uRHJvcCA9IChhY2NlcHRlZEZpbGVzLCByZWplY3RlZEZpbGVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWNjZXB0ZWRGaWxlcywgXCJhY2NlcHRlZCBmaWxlc1wiKTtcbiAgICBzZXRGaWxlcyhhY2NlcHRlZEZpbGVzKTtcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCBmaWxlc1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmlsZS1jb252ZXJzaW9uLXdyYXBwZXJcIj5cbiAgICAgIDxoMT5GaWxlIENvbnZlcnNpb24gQXBwPC9oMT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VXBsb2FkIG9uRHJvcD17b25Ecm9wfSAvPlxuICAgICAgICA8ZGl2PmZpbGUgdHlwZXMgaGVyZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtcGlja2VyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgb25TZWxlY3Q9e3NldEZyb21GaWxlfSAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIyNHB4XCIgfX0gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgb25TZWxlY3Q9e3NldFRvRmlsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+ZG93bmxvYWQgaGVyZTwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBtYXJnaW46IDcwcHggYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTYsIDE1MywgMjM2LCAwKTtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDIyLCA0NSwgNjEsIDAuMSkgMHB4IDFweCAycHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1waWNrZXItd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.6d13934dd8c0e11a1794.hot-update.js.map