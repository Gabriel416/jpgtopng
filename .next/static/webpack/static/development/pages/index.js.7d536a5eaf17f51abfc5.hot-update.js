webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/FileConversion/index.js":
/*!********************************************!*\
  !*** ./containers/FileConversion/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/SelectInput */ "./components/SelectInput.js");
/* harmony import */ var _components_FinishedFile__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/FinishedFile */ "./components/FinishedFile.js");







var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";










var FileConversion = function FileConversion(_ref) {
  var firebase = _ref.firebase;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(null),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
      fromFile = _useState4[0],
      setFromFile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState5, 2),
      toFile = _useState6[0],
      setToFile = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    var currentDomain = window.location.hostname;

    switch (currentDomain) {
      case currentDomain:
        setFromFile("JPG");
        setToFile("PNG");
        break;

      default:
        break;
    }
  }, []);

  var processImage =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_5__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee(fileMetaData, originalFile) {
      var payload, _ref3, data;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // process.env.FIREBASE_CLOUD_IMAGE_API
              // http://localhost:5000/file-converter-bddf8/us-central1/processImage
              payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_4___default()({
                imageData: fileMetaData,
                fromFile: fromFile,
                toFile: toFile
              });
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("https://us-central1-file-converter-bddf8.cloudfunctions.net/processImage", payload, {
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 4:
              _ref3 = _context.sent;
              data = _ref3.data;
              return _context.abrupt("return", data[0].metadata.mediaLink);

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              throw new Error(_context.t0);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));

    return function processImage(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onDrop = function onDrop(acceptedFiles, rejectedFiles) {
    var storageRef = firebase.storage().ref();
    acceptedFiles.forEach(function (file) {
      console.log(file, "FILE");
      file.fileId = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()();
      file.downloadUrl = null;
      var metaData = {
        contentType: file.type,
        size: file.size,
        lastModified: "".concat(new Date(file.lastModified).toLocaleDateString("en-US"), " ").concat(new Date(file.lastModified).toLocaleTimeString("en-US"))
      };
      var task = storageRef.child(file.name).put(file, metaData);

      if (!files) {
        setFiles([Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, file)]);
      } else {
        var newFileState = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(files), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_1__["default"])({}, file)]);
        setFiles(newFileState);
      }

      task.then(function (imageData) {
        return imageData.metadata;
      }).then(function (metadata) {
        return processImage(metadata, file);
      }).then(function (downloadUrl) {
        console.log(downloadUrl, "3");
      }).catch(function (err) {
        return console.log(err, "err");
      }); // task.on(
      //   "state_changed",
      //   function progress(snapshot) {
      //     let percentage =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     console.log("HIT 1");
      //   },
      //   function error(err) {
      //     console.log(err, "ERR SNAPS");
      //   },
      //   function() {
      //     // succesful upload
      //     task.snapshot.ref
      //       .getMetadata()
      //       .then(metadata => processImage(metadata, file))
      //       .then(url => {
      //         console.log("HIT 3, URL");
      //       });
      //   }
      // );
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "download here")), files && files.map(function (file) {
    return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
      className: "jsx-2441915485",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, file.name, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
      className: "jsx-2441915485",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "helloooooo"));
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SGtCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaW5pc2hlZEZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmluaXNoZWRGaWxlXCI7XG5cbmNvbnN0IEZpbGVDb252ZXJzaW9uID0gKHsgZmlyZWJhc2UgfSkgPT4ge1xuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZnJvbUZpbGUsIHNldEZyb21GaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdG9GaWxlLCBzZXRUb0ZpbGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50RG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIHN3aXRjaCAoY3VycmVudERvbWFpbikge1xuICAgICAgY2FzZSBjdXJyZW50RG9tYWluOlxuICAgICAgICBzZXRGcm9tRmlsZShcIkpQR1wiKTtcbiAgICAgICAgc2V0VG9GaWxlKFwiUE5HXCIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgcHJvY2Vzc0ltYWdlID0gYXN5bmMgKGZpbGVNZXRhRGF0YSwgb3JpZ2luYWxGaWxlKSA9PiB7XG4gICAgLy8gcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xPVURfSU1BR0VfQVBJXG4gICAgLy8gaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ZpbGUtY29udmVydGVyLWJkZGY4L3VzLWNlbnRyYWwxL3Byb2Nlc3NJbWFnZVxuICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpbWFnZURhdGE6IGZpbGVNZXRhRGF0YSxcbiAgICAgIGZyb21GaWxlLFxuICAgICAgdG9GaWxlXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTE9VRF9JTUFHRV9BUEksXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhWzBdLm1ldGFkYXRhLm1lZGlhTGluaztcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBvbkRyb3AgPSAoYWNjZXB0ZWRGaWxlcywgcmVqZWN0ZWRGaWxlcykgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCk7XG4gICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coZmlsZSwgXCJGSUxFXCIpO1xuICAgICAgZmlsZS5maWxlSWQgPSBEYXRlLm5vdygpO1xuICAgICAgZmlsZS5kb3dubG9hZFVybCA9IG51bGw7XG4gICAgICBjb25zdCBtZXRhRGF0YSA9IHtcbiAgICAgICAgY29udGVudFR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICBsYXN0TW9kaWZpZWQ6IGAke25ldyBEYXRlKGZpbGUubGFzdE1vZGlmaWVkKS50b0xvY2FsZURhdGVTdHJpbmcoXG4gICAgICAgICAgXCJlbi1VU1wiXG4gICAgICAgICl9ICR7bmV3IERhdGUoZmlsZS5sYXN0TW9kaWZpZWQpLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpfWBcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRhc2sgPSBzdG9yYWdlUmVmLmNoaWxkKGZpbGUubmFtZSkucHV0KGZpbGUsIG1ldGFEYXRhKTtcbiAgICAgIGlmICghZmlsZXMpIHtcbiAgICAgICAgc2V0RmlsZXMoW3sgLi4uZmlsZSB9XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsZXQgbmV3RmlsZVN0YXRlID0gWy4uLmZpbGVzLCB7IC4uLmZpbGUgfV07XG4gICAgICAgIHNldEZpbGVzKG5ld0ZpbGVTdGF0ZSk7XG4gICAgICB9XG4gICAgICB0YXNrXG4gICAgICAgIC50aGVuKGltYWdlRGF0YSA9PiBpbWFnZURhdGEubWV0YWRhdGEpXG4gICAgICAgIC50aGVuKG1ldGFkYXRhID0+IHByb2Nlc3NJbWFnZShtZXRhZGF0YSwgZmlsZSkpXG4gICAgICAgIC50aGVuKGRvd25sb2FkVXJsID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhkb3dubG9hZFVybCwgXCIzXCIpO1xuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVyciwgXCJlcnJcIikpO1xuXG4gICAgICAvLyB0YXNrLm9uKFxuICAgICAgLy8gICBcInN0YXRlX2NoYW5nZWRcIixcbiAgICAgIC8vICAgZnVuY3Rpb24gcHJvZ3Jlc3Moc25hcHNob3QpIHtcbiAgICAgIC8vICAgICBsZXQgcGVyY2VudGFnZSA9XG4gICAgICAvLyAgICAgICAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFwiSElUIDFcIik7XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIGZ1bmN0aW9uIGVycm9yKGVycikge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGVyciwgXCJFUlIgU05BUFNcIik7XG4gICAgICAvLyAgIH0sXG4gICAgICAvLyAgIGZ1bmN0aW9uKCkge1xuICAgICAgLy8gICAgIC8vIHN1Y2Nlc2Z1bCB1cGxvYWRcbiAgICAgIC8vICAgICB0YXNrLnNuYXBzaG90LnJlZlxuICAgICAgLy8gICAgICAgLmdldE1ldGFkYXRhKClcbiAgICAgIC8vICAgICAgIC50aGVuKG1ldGFkYXRhID0+IHByb2Nlc3NJbWFnZShtZXRhZGF0YSwgZmlsZSkpXG4gICAgICAvLyAgICAgICAudGhlbih1cmwgPT4ge1xuICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkhJVCAzLCBVUkxcIik7XG4gICAgICAvLyAgICAgICB9KTtcbiAgICAgIC8vICAgfVxuICAgICAgLy8gKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZpbGUtY29udmVyc2lvbi13cmFwcGVyXCI+XG4gICAgICA8aDE+RmlsZSBDb252ZXJzaW9uIEFwcDwvaDE+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFVwbG9hZCBvbkRyb3A9e29uRHJvcH0gLz5cbiAgICAgICAgPGRpdj5maWxlIHR5cGVzIGhlcmU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXBpY2tlci13cmFwcGVyXCI+XG4gICAgICAgICAgPFNlbGVjdElucHV0IHNlbGVjdGVkRmlsZT17ZnJvbUZpbGV9IG9uU2VsZWN0PXtzZXRGcm9tRmlsZX0gLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMjRweFwiIH19IGljb249e2ZhQXJyb3dSaWdodH0gLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFNlbGVjdElucHV0IHNlbGVjdGVkRmlsZT17dG9GaWxlfSBvblNlbGVjdD17c2V0VG9GaWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5kb3dubG9hZCBoZXJlPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICB7ZmlsZXMgJiZcbiAgICAgICAgZmlsZXMubWFwKGZpbGUgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7ZmlsZS5uYW1lfVxuICAgICAgICAgICAgICA8cD5oZWxsb29vb29vPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIG1hcmdpbjogNzBweCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1NiwgMTUzLCAyMzYsIDApO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjIsIDQ1LCA2MSwgMC4xKSAwcHggMXB4IDJweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLXBpY2tlci13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlQ29udmVyc2lvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.7d536a5eaf17f51abfc5.hot-update.js.map