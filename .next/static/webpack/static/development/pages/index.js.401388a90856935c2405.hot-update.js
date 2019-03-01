webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Upload.js":
/*!******************************!*\
  !*** ./components/Upload.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "/Users/gabriel/code/jpgtopng/components/Upload.js";







/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var _onDrop = _ref.onDrop;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var test = function test(acceptedFiles, rejectedFiles) {
    console.log(acceptedFiles, rejectedFiles, "HERERERE");
    setFiles(acceptedFiles);
    console.log(files, "files");
  };

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onDrop: function onDrop(e) {
      return _onDrop(e);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps,
        isDragActive = _ref2.isDragActive;
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
      className: "jsx-3387510149" + " " + (classnames__WEBPACK_IMPORTED_MODULE_7___default()("dropzone", {
        "dropzone--isActive": isDragActive
      }) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
      className: "jsx-3387510149",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    })), isDragActive ? react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-3387510149",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, "Drop files here...") : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "jsx-3387510149" + " " + "dropzone-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      style: {
        fontSize: "72px",
        color: "#e6e7e8"
      },
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faFileUpload"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("p", {
      className: "jsx-3387510149",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, "Drag and drop your file(s) here,", " ", react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("span", {
      className: "jsx-3387510149",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, "or click to browse"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
      id: "3387510149",
      __self: this
    }, ".dropzone.jsx-3387510149{cursor:pointer;height:150px;margin:0 auto;border:6px dashed #e6e7e8;border-radius:5px;padding:10px;}.dropzone-content.jsx-3387510149{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:10px;}.dropzone-content.jsx-3387510149 p.jsx-3387510149{font-size:18px;margin-top:25px;}span.jsx-3387510149{-webkit-text-decoration:underline;text-decoration:underline;color:#3899ec;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9VcGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0N3QixBQUdnQyxBQVNGLEFBUUUsQUFLVyxlQXJCYixBQWlCRyxhQWhCRixHQWlCaEIsV0FoQjRCLGtCQW9CWixRQW5CSSxNQU1LLEFBY3pCLFlBbkJlLGFBQ2YsMEVBS3FCLDZGQUNHLDhFQUNULGFBQ2YiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwvY29kZS9qcGd0b3BuZy9jb21wb25lbnRzL1VwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUZpbGVVcGxvYWQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5leHBvcnQgZGVmYXVsdCAoeyBvbkRyb3AgfSkgPT4ge1xuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcblxuICBjb25zdCB0ZXN0ID0gKGFjY2VwdGVkRmlsZXMsIHJlamVjdGVkRmlsZXMpID0+IHtcbiAgICBjb25zb2xlLmxvZyhhY2NlcHRlZEZpbGVzLCByZWplY3RlZEZpbGVzLCBcIkhFUkVSRVJFXCIpO1xuICAgIHNldEZpbGVzKGFjY2VwdGVkRmlsZXMpO1xuICAgIGNvbnNvbGUubG9nKGZpbGVzLCBcImZpbGVzXCIpO1xuICB9O1xuICByZXR1cm4gKFxuICAgIDxEcm9wem9uZSBvbkRyb3A9e2UgPT4gb25Ecm9wKGUpfT5cbiAgICAgIHsoeyBnZXRSb290UHJvcHMsIGdldElucHV0UHJvcHMsIGlzRHJhZ0FjdGl2ZSB9KSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgey4uLmdldFJvb3RQcm9wcygpfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiZHJvcHpvbmVcIiwge1xuICAgICAgICAgICAgICBcImRyb3B6b25lLS1pc0FjdGl2ZVwiOiBpc0RyYWdBY3RpdmVcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxpbnB1dCB7Li4uZ2V0SW5wdXRQcm9wcygpfSAvPlxuICAgICAgICAgICAge2lzRHJhZ0FjdGl2ZSA/IChcbiAgICAgICAgICAgICAgPHA+RHJvcCBmaWxlcyBoZXJlLi4uPC9wPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiNzJweFwiLCBjb2xvcjogXCIjZTZlN2U4XCIgfX1cbiAgICAgICAgICAgICAgICAgIGljb249e2ZhRmlsZVVwbG9hZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRHJhZyBhbmQgZHJvcCB5b3VyIGZpbGUocykgaGVyZSx7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5vciBjbGljayB0byBicm93c2U8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAgICAgLmRyb3B6b25lIHtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICBib3JkZXI6IDZweCBkYXNoZWQgI2U2ZTdlODtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5kcm9wem9uZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmRyb3B6b25lLWNvbnRlbnQgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzM4OTllYztcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgfX1cbiAgICA8L0Ryb3B6b25lPlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/components/Upload.js */"));
  });
});

/***/ })

})
//# sourceMappingURL=index.js.401388a90856935c2405.hot-update.js.map