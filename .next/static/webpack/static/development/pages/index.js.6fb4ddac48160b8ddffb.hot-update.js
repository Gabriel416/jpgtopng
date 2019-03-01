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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var react_dropzone__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-dropzone */ "./node_modules/react-dropzone/dist/es/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_10__);






var _jsxFileName = "/Users/gabriel/code/jpgtopng/components/Upload.js";







var Upload =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Upload, _Component);

  function Upload() {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Upload);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Upload).call(this));
    _this.state = {
      files: []
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Upload, [{
    key: "onDrop",
    value: function onDrop(files) {
      this.setState({
        files: files
      });
      console.log(this.state, "state");
    }
  }, {
    key: "onCancel",
    value: function onCancel() {
      this.setState({
        files: []
      });
    }
  }, {
    key: "render",
    value: function render() {
      console.log(this.state, "filesssss");
      var files = this.state.files.map(function (file) {
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("li", {
          key: file.name,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 29
          },
          __self: this
        }, file.name, " - ", file.size, " bytes");
      });
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_dropzone__WEBPACK_IMPORTED_MODULE_9__["default"], {
        onDrop: this.onDrop.bind(this),
        onFileDialogCancel: this.onCancel.bind(this),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, function (_ref) {
        var getRootProps = _ref.getRootProps,
            getInputProps = _ref.getInputProps;
        return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getRootProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("input", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, getInputProps(), {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, "Drop files here, or click to select files"));
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("aside", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h4", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Files"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("ul", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, files)));
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]); // const Upload = ({ onDrop }) => {
//   const [files, setFiles] = useState([]);
//   const test = (acceptedFiles, rejectedFiles) => {
//     console.log(acceptedFiles, rejectedFiles, "HERERERE");
//     setFiles(acceptedFiles);
//     console.log(files, "files");
//   };
//   return (
//     <Dropzone onDrop={e => test(e)}>
//       {({ getRootProps, getInputProps, isDragActive }) => {
//         return (
//           <div
//             {...getRootProps()}
//             className={classnames("dropzone", {
//               "dropzone--isActive": isDragActive
//             })}
//           >
//             <input {...getInputProps()} />
//             {isDragActive ? (
//               <p>Drop files here...</p>
//             ) : (
//               <div className="dropzone-content">
//                 <FontAwesomeIcon
//                   style={{ fontSize: "72px", color: "#e6e7e8" }}
//                   icon={faFileUpload}
//                 />
//                 <p>
//                   Drag and drop your file(s) here,{" "}
//                   <span>or click to browse</span>
//                 </p>
//               </div>
//             )}
//             <style jsx>{`
//               .dropzone {
//                 cursor: pointer;
//                 height: 150px;
//                 margin: 0 auto;
//                 border: 6px dashed #e6e7e8;
//                 border-radius: 5px;
//                 padding: 10px;
//               }
//               .dropzone-content {
//                 display: flex;
//                 justify-content: center;
//                 align-items: center;
//                 flex-direction: column;
//                 padding: 10px;
//               }
//               .dropzone-content p {
//                 font-size: 18px;
//                 margin-top: 25px;
//               }
//               span {
//                 text-decoration: underline;
//                 color: #3899ec;
//               }
//             `}</style>
//           </div>
//         );
//       }}
//     </Dropzone>
//   );
// };


/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ })

})
//# sourceMappingURL=index.js.6fb4ddac48160b8ddffb.hot-update.js.map