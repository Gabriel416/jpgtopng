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
    className: "jsx-310750181" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
    className: "jsx-310750181",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("section", {
    className: "jsx-310750181",
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
    className: "jsx-310750181",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-310750181" + " " + "file-picker-wrapper",
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
    className: "jsx-310750181",
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
    className: "jsx-310750181",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, "download here")), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "310750181",
    __self: this
  }, "main.jsx-310750181{margin:70px auto;max-width:800px;}section.jsx-310750181{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-310750181{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQ2tCLEFBRzRCLEFBS0osQUFRQSxhQVBLLElBTEYsY0FNdUIsRUFMekMsa0NBTW1ELE9BTW5CLHVDQUxMLHlCQUMzQixtREFLcUIsNkZBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaW5pc2hlZEZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmluaXNoZWRGaWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmcm9tRmlsZSwgc2V0RnJvbUZpbGVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFt0b0ZpbGUsIHNldFRvRmlsZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3Qgb25Ecm9wID0gKGFjY2VwdGVkRmlsZXMsIHJlamVjdGVkRmlsZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhY2NlcHRlZEZpbGVzLCBcImFjY2VwdGVkIGZpbGVzXCIpO1xuICAgIHNldEZpbGVzKGFjY2VwdGVkRmlsZXMpO1xuICAgIC8vIERvIHNvbWV0aGluZyB3aXRoIGZpbGVzXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmaWxlLWNvbnZlcnNpb24td3JhcHBlclwiPlxuICAgICAgPGgxPkZpbGUgQ29udmVyc2lvbiBBcHA8L2gxPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxVcGxvYWQgb25Ecm9wPXtvbkRyb3B9IC8+XG4gICAgICAgIDxkaXY+ZmlsZSB0eXBlcyBoZXJlPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1waWNrZXItd3JhcHBlclwiPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBvblNlbGVjdD17c2V0RnJvbUZpbGV9IC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI0cHhcIiB9fSBpY29uPXtmYUFycm93UmlnaHR9IC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBvblNlbGVjdD17c2V0VG9GaWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5kb3dubG9hZCBoZXJlPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIG1hcmdpbjogNzBweCBhdXRvO1xuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDU2LCAxNTMsIDIzNiwgMCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyMiwgNDUsIDYxLCAwLjEpIDBweCAxcHggMnB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtcGlja2VyLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.ba4642985f11fca14aaa.hot-update.js.map