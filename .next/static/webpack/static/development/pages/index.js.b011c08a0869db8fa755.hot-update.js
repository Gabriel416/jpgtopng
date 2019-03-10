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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/gabriel/code/jpgtopng/components/Upload.js";







var Upload = function Upload(_ref) {
  var _onDrop = _ref.onDrop,
      fromFile = _ref.fromFile;
  var acceptedFileTypes = fromFile === "JPG" ? "image/jpg, image/jpeg" : "image/x-png, image/png";
  console.log(acceptedFileTypes, "accepted file types");
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onDrop: function onDrop(e) {
      return _onDrop(e);
    },
    maxSize: 50457280,
    accept: acceptedFileTypes,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, function (_ref2) {
    var getRootProps = _ref2.getRootProps,
        getInputProps = _ref2.getInputProps,
        isDragActive = _ref2.isDragActive;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
      className: "jsx-1215762025" + " " + (classnames__WEBPACK_IMPORTED_MODULE_6___default()("dropzone", {
        "dropzone--isActive": isDragActive
      }) || ""),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
      className: "jsx-1215762025",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    })), isDragActive ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1215762025" + " " + "dropzone-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      style: {
        fontSize: "72px",
        color: "#ccc"
      },
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFileUpload"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1215762025",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "Drop files here...")) : react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "jsx-1215762025" + " " + "dropzone-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
      style: {
        fontSize: "72px",
        color: "#ccc"
      },
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFileUpload"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
      className: "jsx-1215762025",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, "Drag and drop your file(s) here,", " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
      className: "jsx-1215762025",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "or click to browse."))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
      id: "1215762025",
      __self: this
    }, ".dropzone.jsx-1215762025{cursor:pointer;height:150px;margin:0px auto 25px auto;border:6px dashed #ccc;border-radius:5px;padding:10px;-webkit-transition:0.3s ease;transition:0.3s ease;}.dropzone-content.jsx-1215762025{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:10px;}.dropzone-content.jsx-1215762025 p.jsx-1215762025{font-size:18px;margin-top:25px;}span.jsx-1215762025{-webkit-text-decoration:underline;text-decoration:underline;color:blue;}.dropzone.jsx-1215762025:hover,.dropzone--isActive.jsx-1215762025{border-color:#c1e4fe;}@media screen and (max-width:580px){.dropzone-content.jsx-1215762025 p.jsx-1215762025{font-size:14px;margin-top:25px;}}@media screen and (max-width:450px){.dropzone-content.jsx-1215762025 p.jsx-1215762025{font-size:16px;margin-top:25px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9VcGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNkN3QixBQUdnQyxBQVVGLEFBUUUsQUFLVyxBQU1MLEFBS0osQUFPQSxlQXhDSixBQWtCRyxBQWdCRSxBQU9BLE1BWnBCLE9BNUI0QixHQWtCNUIsQUFnQkUsQUFPQSx1QkF4Q3VCLE1BcUJaLFdBQ2IsR0FkeUIsR0FQTCxrQkFDTCxhQUNRLGtEQUN2QixlQUtxQiw2RkFDRyw4RUFDVCxhQUNmIiwiZmlsZSI6Ii9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9VcGxvYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUZpbGVVcGxvYWQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgRHJvcHpvbmUgZnJvbSBcInJlYWN0LWRyb3B6b25lXCI7XG5pbXBvcnQgY2xhc3NuYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBVcGxvYWQgPSAoeyBvbkRyb3AsIGZyb21GaWxlIH0pID0+IHtcbiAgY29uc3QgYWNjZXB0ZWRGaWxlVHlwZXMgPVxuICAgIGZyb21GaWxlID09PSBcIkpQR1wiID8gXCJpbWFnZS9qcGcsIGltYWdlL2pwZWdcIiA6IFwiaW1hZ2UveC1wbmcsIGltYWdlL3BuZ1wiO1xuICBjb25zb2xlLmxvZyhhY2NlcHRlZEZpbGVUeXBlcywgXCJhY2NlcHRlZCBmaWxlIHR5cGVzXCIpO1xuICByZXR1cm4gKFxuICAgIDxEcm9wem9uZVxuICAgICAgb25Ecm9wPXtlID0+IG9uRHJvcChlKX1cbiAgICAgIG1heFNpemU9ezUwNDU3MjgwfVxuICAgICAgYWNjZXB0PXthY2NlcHRlZEZpbGVUeXBlc31cbiAgICA+XG4gICAgICB7KHsgZ2V0Um9vdFByb3BzLCBnZXRJbnB1dFByb3BzLCBpc0RyYWdBY3RpdmUgfSkgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHsuLi5nZXRSb290UHJvcHMoKX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImRyb3B6b25lXCIsIHtcbiAgICAgICAgICAgICAgXCJkcm9wem9uZS0taXNBY3RpdmVcIjogaXNEcmFnQWN0aXZlXG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aW5wdXQgey4uLmdldElucHV0UHJvcHMoKX0gLz5cbiAgICAgICAgICAgIHtpc0RyYWdBY3RpdmUgPyAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZHJvcHpvbmUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjcycHhcIiwgY29sb3I6IFwiI2NjY1wiIH19XG4gICAgICAgICAgICAgICAgICBpY29uPXtmYUZpbGVVcGxvYWR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8cD5Ecm9wIGZpbGVzIGhlcmUuLi48L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkcm9wem9uZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvblxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiNzJweFwiLCBjb2xvcjogXCIjY2NjXCIgfX1cbiAgICAgICAgICAgICAgICAgIGljb249e2ZhRmlsZVVwbG9hZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgRHJhZyBhbmQgZHJvcCB5b3VyIGZpbGUocykgaGVyZSx7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICA8c3Bhbj5vciBjbGljayB0byBicm93c2UuPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuXG4gICAgICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgICAgIC5kcm9wem9uZSB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTUwcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHggYXV0byAyNXB4IGF1dG87XG4gICAgICAgICAgICAgICAgYm9yZGVyOiA2cHggZGFzaGVkICNjY2M7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogMC4zcyBlYXNlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmRyb3B6b25lLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZHJvcHpvbmUtY29udGVudCBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibHVlO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmRyb3B6b25lOmhvdmVyLFxuICAgICAgICAgICAgICAuZHJvcHpvbmUtLWlzQWN0aXZlIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNjMWU0ZmU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xuICAgICAgICAgICAgICAgIC5kcm9wem9uZS1jb250ZW50IHAge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgICAgICAgICAgIC5kcm9wem9uZS1jb250ZW50IHAge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIH19XG4gICAgPC9Ecm9wem9uZT5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFVwbG9hZDtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/components/Upload.js */"));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=index.js.b011c08a0869db8fa755.hot-update.js.map