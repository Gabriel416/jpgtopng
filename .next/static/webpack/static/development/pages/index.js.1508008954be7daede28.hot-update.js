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
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/SelectInput */ "./components/SelectInput.js");

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
    className: "jsx-1108967970" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-1108967970",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-1108967970",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_3__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1108967970",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1108967970" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_4__["default"], {
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1108967970",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "download here")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1108967970",
    __self: this
  }, "main.jsx-1108967970{margin:70px auto;width:80%;}section.jsx-1108967970{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmtCLEFBRzRCLEFBS0osYUFDSyxJQUxSLFVBQ1osSUFLeUMsb0NBQ1UsOENBQ3hCLHlCQUMzQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFVwbG9hZCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9VcGxvYWRcIjtcbmltcG9ydCBTZWxlY3RJbnB1dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9TZWxlY3RJbnB1dFwiO1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG4gIGNvbnN0IFtmaWxlcywgc2V0RmlsZXNdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbZnJvbUZpbGUsIHNldEZyb21GaWxlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbdG9GaWxlLCBzZXRUb0ZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IG9uRHJvcCA9IChhY2NlcHRlZEZpbGVzLCByZWplY3RlZEZpbGVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWNjZXB0ZWRGaWxlcywgXCJhY2NlcHRlZCBmaWxlc1wiKTtcbiAgICBzZXRGaWxlcyhhY2NlcHRlZEZpbGVzKTtcbiAgICAvLyBEbyBzb21ldGhpbmcgd2l0aCBmaWxlc1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmlsZS1jb252ZXJzaW9uLXdyYXBwZXJcIj5cbiAgICAgIDxoMT5GaWxlIENvbnZlcnNpb24gQXBwPC9oMT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VXBsb2FkIG9uRHJvcD17b25Ecm9wfSAvPlxuICAgICAgICA8ZGl2PmZpbGUgdHlwZXMgaGVyZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtcGlja2VyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgb25TZWxlY3Q9e3NldEZyb21GaWxlfSAvPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBvblNlbGVjdD17c2V0VG9GaWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5kb3dubG9hZCBoZXJlPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIG1hcmdpbjogNzBweCBhdXRvO1xuICAgICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDU2LCAxNTMsIDIzNiwgMCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyMiwgNDUsIDYxLCAwLjEpIDBweCAxcHggMnB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.1508008954be7daede28.hot-update.js.map