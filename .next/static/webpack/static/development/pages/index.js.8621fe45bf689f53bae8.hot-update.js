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
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(window.location.hostname),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      navTitle = _useState2[0],
      setNavTitle = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    setNavTitle(window.location.hostname.split(".").slice(0, -1).join(".") || window.location.hostname);
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
  }, navTitle)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "31269071",
    __self: this
  }, "nav.jsx-31269071{background:#ffffff;border-bottom:1px solid #dfe5eb;height:48px;position:fixed;top:0;left:0;width:100%;margin:0;display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;z-index:9999991;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:0;}.logo.jsx-31269071{display:-ms-flexbox;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-ms-flex-direction:row;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;width:84px;-ms-flex-pack:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;border-right:1px solid #dfe5eb;border-right:none;}span.jsx-31269071{margin-left:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29tcG9uZW50cy9OYXZiYXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JrQixBQUc4QixBQWtCQyxBQWVILGlCQUNuQixFQWpDa0MsQ0FrQm5CLCtCQWpCRCxZQUNHLGVBQ1QsTUFDQyxPQUNJLEdBY1ksUUFiZCxTQUNXLE1BYUQsY0FaTix1REFhRixXQUNVLFFBYkwsYUFjTyxHQWJELHNCQUNILDBFQWFHLG1CQVpBLEdBYUgsbUJBWlcsMEVBYWxCLFlBQ21CLDZCQWJyQixFQWNRLFFBYnBCLFVBY0EiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwvY29kZS9qcGd0b3BuZy9jb21wb25lbnRzL05hdmJhci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWVcIjtcbmltcG9ydCB7IGZhRmlsZSB9IGZyb20gXCJAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4ge1xuICBjb25zdCBbbmF2VGl0bGUsIHNldE5hdlRpdGxlXSA9IHVzZVN0YXRlKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0TmF2VGl0bGUoXG4gICAgICB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWVcbiAgICAgICAgLnNwbGl0KFwiLlwiKVxuICAgICAgICAuc2xpY2UoMCwgLTEpXG4gICAgICAgIC5qb2luKFwiLlwiKSB8fCB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWVcbiAgICApO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgICAgIDxGb250QXdlc29tZUljb25cbiAgICAgICAgICBzdHlsZT17eyBmb250U2l6ZTogXCI0MHB4XCIsIGNvbG9yOiBcIiNDMUU0RkVcIiwgbWFyZ2luTGVmdDogXCIxMDBweFwiIH19XG4gICAgICAgICAgaWNvbj17ZmFGaWxlfVxuICAgICAgICAvPlxuICAgICAgICA8c3Bhbj57bmF2VGl0bGV9PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG5hdiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RmZTVlYjtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHotaW5kZXg6IDk5OTk5OTE7XG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cbiAgICAgICAgLmxvZ28ge1xuICAgICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgICB3aWR0aDogODRweDtcbiAgICAgICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZGZlNWViO1xuICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuIl19 */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/components/Navbar.js */"));
});

/***/ })

})
//# sourceMappingURL=index.js.8621fe45bf689f53bae8.hot-update.js.map