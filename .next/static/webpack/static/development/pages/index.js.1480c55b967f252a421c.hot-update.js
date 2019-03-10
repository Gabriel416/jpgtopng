webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Navbar.js":
/*!******************************!*\
  !*** ./components/Navbar.js ***!
  \******************************/
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

var _jsxFileName = "/Users/gabriel/code/jpgtopng/components/Navbar.js";





/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      title = _useState2[0],
      setTitle = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    console.log(window, "window");
    setTitle(window.location.hostname.split(".").slice(0, -1).join(".") || window.location.hostname);
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("nav", {
    className: "jsx-31269071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-31269071" + " " + "logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_3__["FontAwesomeIcon"], {
    style: {
      fontSize: "40px",
      color: "#C1E4FE",
      marginLeft: "100px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFile"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", {
    className: "jsx-31269071",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, title)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "31269071",
    __self: this
  }, "nav.jsx-31269071{background:#ffffff;border-bottom:1px solid #dfe5eb;height:48px;position:fixed;top:0;left:0;width:100%;margin:0;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:9999991;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0;}.logo.jsx-31269071{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:84px;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;border-right:1px solid #dfe5eb;border-right:none;}span.jsx-31269071{margin-left:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQixBQUc4QixBQWtCQyxBQWVILGlCQUNuQixFQWpDa0MsQ0FrQm5CLCtCQWpCRCxZQUNHLGVBQ1QsTUFDQyxPQUNJLEdBY1ksUUFiZCxTQUNXLE1BYUQsY0FaTix1REFhRixXQUNVLFFBYkwsYUFjTyxHQWJELHNCQUNILDBFQWFHLG1CQVpBLEdBYUgsbUJBWlcsMEVBYWxCLFlBQ21CLDZCQWJyQixFQWNRLFFBYnBCLFVBY0EiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwvY29kZS9qcGd0b3BuZy9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhRmlsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbdGl0bGUsIHNldFRpdGxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKHdpbmRvdywgXCJ3aW5kb3dcIik7XG4gICAgc2V0VGl0bGUoXG4gICAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgICAgLnNwbGl0KFwiLlwiKVxuICAgICAgICAuc2xpY2UoMCwgLTEpXG4gICAgICAgIC5qb2luKFwiLlwiKSB8fCB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWVcbiAgICApO1xuICB9LCBbXSk7XG4gIHJldHVybiAoXG4gICAgPG5hdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uXG4gICAgICAgICAgc3R5bGU9e3sgZm9udFNpemU6IFwiNDBweFwiLCBjb2xvcjogXCIjQzFFNEZFXCIsIG1hcmdpbkxlZnQ6IFwiMTAwcHhcIiB9fVxuICAgICAgICAgIGljb249e2ZhRmlsZX1cbiAgICAgICAgLz5cbiAgICAgICAgPHNwYW4+e3RpdGxlfTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBuYXYge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZmU1ZWI7XG4gICAgICAgICAgaGVpZ2h0OiA0OHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB6LWluZGV4OiA5OTk5OTkxO1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvIHtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgd2lkdGg6IDg0cHg7XG4gICAgICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2RmZTVlYjtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbmF2PlxuICApO1xufTtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/components/Navbar.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.1480c55b967f252a421c.hot-update.js.map