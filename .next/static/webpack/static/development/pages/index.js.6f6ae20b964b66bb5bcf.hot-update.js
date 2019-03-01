webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/FileConversion/index.js":
/*!********************************************!*\
  !*** ./containers/FileConversion/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
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

  var reducer = function reducer(state, action) {
    switch (action.type) {
      case "setFiles":
        return {
          files: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(state.files), [action.payload])
        };

      default:
        throw new Error();
    }
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_8__["useReducer"])(reducer, {
    files: []
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1]; // const [files, setFiles] = useState(null);


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
      fromFile = _useState2[0],
      setFromFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
      toFile = _useState4[0],
      setToFile = _useState4[1];

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
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(fileMetaData, originalFile) {
      var payload, _ref3, data;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // process.env.FIREBASE_CLOUD_IMAGE_API
              // http://localhost:5000/file-converter-bddf8/us-central1/processImage
              payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()({
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
              console.log("HIT 2");
              return _context.abrupt("return", data[0].metadata.mediaLink);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](1);
              throw new Error(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 10]]);
    }));

    return function processImage(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onDrop = function onDrop(acceptedFiles, rejectedFiles) {
    var storageRef = firebase.storage().ref();
    acceptedFiles.forEach(function (file) {
      console.log(file, "FILE");
      file.fileId = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();
      file.downloadUrl = null;
      file.percentage = 0;
      var metaData = {
        contentType: file.type,
        size: file.size,
        lastModified: "".concat(new Date(file.lastModified).toLocaleDateString("en-US"), " ").concat(new Date(file.lastModified).toLocaleTimeString("en-US"))
      };
      var task = storageRef.child(file.name).put(file, metaData);

      if (!files) {
        setFiles([Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, file)]);
      } else {
        var _newFileState = [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_6__["default"])(files), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, file)]);

        setFiles(_newFileState);
      } // task
      //   .then(imageData => imageData.metadata)
      //   .then(metadata => processImage(metadata, file))
      //   .then(downloadUrl => {
      //     console.log(downloadUrl, "3");
      //   })
      //   .catch(err => console.log(err, "err"));


      task.on("state_changed", function (snapshot) {
        var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log(percentage, "HIT 1");
        setFiles(newFileState);
      }, function error(err) {
        console.log(err, "ERR SNAPS");
      }, function () {
        // succesful upload
        task.snapshot.ref.getMetadata().then(function (metadata) {
          return processImage(metadata, file);
        }).then(function (url) {
          console.log("HIT 3, URL");
        });
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEySWtCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaW5pc2hlZEZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmluaXNoZWRGaWxlXCI7XG5cbmNvbnN0IEZpbGVDb252ZXJzaW9uID0gKHsgZmlyZWJhc2UgfSkgPT4ge1xuICBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFwic2V0RmlsZXNcIjpcbiAgICAgICAgcmV0dXJuIHsgZmlsZXM6IFsuLi5zdGF0ZS5maWxlcywgYWN0aW9uLnBheWxvYWRdIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHsgZmlsZXM6IFtdIH0pO1xuICAvLyBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbZnJvbUZpbGUsIHNldEZyb21GaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdG9GaWxlLCBzZXRUb0ZpbGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50RG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIHN3aXRjaCAoY3VycmVudERvbWFpbikge1xuICAgICAgY2FzZSBjdXJyZW50RG9tYWluOlxuICAgICAgICBzZXRGcm9tRmlsZShcIkpQR1wiKTtcbiAgICAgICAgc2V0VG9GaWxlKFwiUE5HXCIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgcHJvY2Vzc0ltYWdlID0gYXN5bmMgKGZpbGVNZXRhRGF0YSwgb3JpZ2luYWxGaWxlKSA9PiB7XG4gICAgLy8gcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xPVURfSU1BR0VfQVBJXG4gICAgLy8gaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ZpbGUtY29udmVydGVyLWJkZGY4L3VzLWNlbnRyYWwxL3Byb2Nlc3NJbWFnZVxuICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpbWFnZURhdGE6IGZpbGVNZXRhRGF0YSxcbiAgICAgIGZyb21GaWxlLFxuICAgICAgdG9GaWxlXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTE9VRF9JTUFHRV9BUEksXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSElUIDJcIik7XG4gICAgICByZXR1cm4gZGF0YVswXS5tZXRhZGF0YS5tZWRpYUxpbms7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25Ecm9wID0gKGFjY2VwdGVkRmlsZXMsIHJlamVjdGVkRmlsZXMpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gZmlyZWJhc2Uuc3RvcmFnZSgpLnJlZigpO1xuICAgIGFjY2VwdGVkRmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKGZpbGUsIFwiRklMRVwiKTtcbiAgICAgIGZpbGUuZmlsZUlkID0gRGF0ZS5ub3coKTtcbiAgICAgIGZpbGUuZG93bmxvYWRVcmwgPSBudWxsO1xuICAgICAgZmlsZS5wZXJjZW50YWdlID0gMDtcbiAgICAgIGNvbnN0IG1ldGFEYXRhID0ge1xuICAgICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgIGxhc3RNb2RpZmllZDogYCR7bmV3IERhdGUoZmlsZS5sYXN0TW9kaWZpZWQpLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgICBcImVuLVVTXCJcbiAgICAgICAgKX0gJHtuZXcgRGF0ZShmaWxlLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIil9YFxuICAgICAgfTtcblxuICAgICAgY29uc3QgdGFzayA9IHN0b3JhZ2VSZWYuY2hpbGQoZmlsZS5uYW1lKS5wdXQoZmlsZSwgbWV0YURhdGEpO1xuICAgICAgaWYgKCFmaWxlcykge1xuICAgICAgICBzZXRGaWxlcyhbeyAuLi5maWxlIH1dKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBuZXdGaWxlU3RhdGUgPSBbLi4uZmlsZXMsIHsgLi4uZmlsZSB9XTtcbiAgICAgICAgc2V0RmlsZXMobmV3RmlsZVN0YXRlKTtcbiAgICAgIH1cbiAgICAgIC8vIHRhc2tcbiAgICAgIC8vICAgLnRoZW4oaW1hZ2VEYXRhID0+IGltYWdlRGF0YS5tZXRhZGF0YSlcbiAgICAgIC8vICAgLnRoZW4obWV0YWRhdGEgPT4gcHJvY2Vzc0ltYWdlKG1ldGFkYXRhLCBmaWxlKSlcbiAgICAgIC8vICAgLnRoZW4oZG93bmxvYWRVcmwgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRvd25sb2FkVXJsLCBcIjNcIik7XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLCBcImVyclwiKSk7XG5cbiAgICAgIHRhc2sub24oXG4gICAgICAgIFwic3RhdGVfY2hhbmdlZFwiLFxuICAgICAgICBzbmFwc2hvdCA9PiB7XG4gICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwZXJjZW50YWdlLCBcIkhJVCAxXCIpO1xuICAgICAgICAgIHNldEZpbGVzKG5ld0ZpbGVTdGF0ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIGVycm9yKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJFUlIgU05BUFNcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHN1Y2Nlc2Z1bCB1cGxvYWRcbiAgICAgICAgICB0YXNrLnNuYXBzaG90LnJlZlxuICAgICAgICAgICAgLmdldE1ldGFkYXRhKClcbiAgICAgICAgICAgIC50aGVuKG1ldGFkYXRhID0+IHByb2Nlc3NJbWFnZShtZXRhZGF0YSwgZmlsZSkpXG4gICAgICAgICAgICAudGhlbih1cmwgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkhJVCAzLCBVUkxcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZpbGUtY29udmVyc2lvbi13cmFwcGVyXCI+XG4gICAgICA8aDE+RmlsZSBDb252ZXJzaW9uIEFwcDwvaDE+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFVwbG9hZCBvbkRyb3A9e29uRHJvcH0gLz5cbiAgICAgICAgPGRpdj5maWxlIHR5cGVzIGhlcmU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXBpY2tlci13cmFwcGVyXCI+XG4gICAgICAgICAgPFNlbGVjdElucHV0IHNlbGVjdGVkRmlsZT17ZnJvbUZpbGV9IG9uU2VsZWN0PXtzZXRGcm9tRmlsZX0gLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMjRweFwiIH19IGljb249e2ZhQXJyb3dSaWdodH0gLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFNlbGVjdElucHV0IHNlbGVjdGVkRmlsZT17dG9GaWxlfSBvblNlbGVjdD17c2V0VG9GaWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgey8qIDxkaXY+ZG93bmxvYWQgaGVyZTwvZGl2PiAqL31cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHsvKiB7ZmlsZXMgJiZcbiAgICAgICAgZmlsZXMubWFwKGZpbGUgPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7ZmlsZS5uYW1lfVxuICAgICAgICAgICAgICA8cD5oZWxsb29vb29vPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9ICovfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBtYXJnaW46IDcwcHggYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTYsIDE1MywgMjM2LCAwKTtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDIyLCA0NSwgNjEsIDAuMSkgMHB4IDFweCAycHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1waWNrZXItd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUNvbnZlcnNpb247XG4iXX0= */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.6f6ae20b964b66bb5bcf.hot-update.js.map