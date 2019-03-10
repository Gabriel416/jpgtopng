webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/FileConversion/index.js":
/*!********************************************!*\
  !*** ./containers/FileConversion/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/SelectInput */ "./components/SelectInput.js");
/* harmony import */ var _components_FileResult__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/FileResult */ "./components/FileResult.js");









var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";










var FileConversion = function FileConversion(_ref) {
  var firebase = _ref.firebase;

  var reducer = function reducer(state, action) {
    switch (action.type) {
      case "setFiles":
        {
          return {
            files: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state.files, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_7__["default"])({}, action.payload.id, action.payload))
          };
        }

      case "updateFile":
        {
          state.files[action.payload.id] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state.files[action.payload.id], action.payload);
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, state);
        }

      default:
        {
          return state;
        }
    }
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_10__["useReducer"])(reducer, {
    files: {}
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState, 2),
      fromFile = _useState2[0],
      setFromFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_10__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_6__["default"])(_useState3, 2),
      toFile = _useState4[0],
      setToFile = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_10__["useEffect"])(function () {
    var currentDomain = window.location.hostname;

    switch (currentDomain) {
      case "jpgtopng.co":
        setFromFile("JPG");
        setToFile("PNG");
        break;

      case "pngtojpg.co":
        setFromFile("PNG");
        setToFile("JPG");
        break;

      default:
        setFromFile("JPG");
        setToFile("PNG");
        break;
    }
  }, []);

  var processImage = function processImage(fileMetaData) {
    var payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()({
      imageData: fileMetaData,
      fromFile: fromFile,
      toFile: toFile
    });

    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post("https://us-central1-file-converter-bddf8.cloudfunctions.net/processImage", payload, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        resolve(data[0].metadata);
      }).catch(function (err) {
        reject(err);
      });
    });
  };

  var renderResults = function renderResults(files) {
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(files).map(function (fileIndex) {
      var file = files[fileIndex];
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_FileResult__WEBPACK_IMPORTED_MODULE_16__["default"], {
        file: file,
        key: file.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      });
    });
  };

  function asyncForEach(_x, _x2) {
    return _asyncForEach.apply(this, arguments);
  }

  function _asyncForEach() {
    _asyncForEach = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(array, callback) {
      var index;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              index = 0;

            case 1:
              if (!(index < array.length)) {
                _context3.next = 7;
                break;
              }

              _context3.next = 4;
              return callback(array[index], index, array);

            case 4:
              index++;
              _context3.next = 1;
              break;

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _asyncForEach.apply(this, arguments);
  }

  var onDrop =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(acceptedFiles, rejectedFiles) {
      var storageRef;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              storageRef = firebase.storage().ref();
              _context2.next = 3;
              return asyncForEach(acceptedFiles,
              /*#__PURE__*/
              function () {
                var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(file) {
                  var metaData, task, _ref5, metadata, processedImageData;

                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          file.id = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();
                          metaData = {
                            contentType: file.type,
                            size: file.size,
                            lastModified: "".concat(new Date(file.lastModified).toLocaleDateString("en-US"), " ").concat(new Date(file.lastModified).toLocaleTimeString("en-US"))
                          };
                          task = storageRef.child(file.name).put(file, metaData);
                          task.on("state_changed", function (snapshot) {
                            var uploadPercentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
                            dispatch({
                              type: "updateFile",
                              payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, file, {
                                uploadPercentage: uploadPercentage
                              })
                            });
                          }, function () {
                            dispatch({
                              type: "updateFile",
                              payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, file, {
                                failed: true
                              })
                            });
                          });
                          _context.prev = 4;
                          _context.next = 7;
                          return task;

                        case 7:
                          _ref5 = _context.sent;
                          metadata = _ref5.metadata;
                          _context.next = 11;
                          return processImage(metadata);

                        case 11:
                          processedImageData = _context.sent;
                          dispatch({
                            type: "updateFile",
                            payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, file, {
                              name: processedImageData.name,
                              size: processedImageData.size,
                              downloadUrl: processedImageData.mediaLink
                            })
                          });
                          _context.next = 18;
                          break;

                        case 15:
                          _context.prev = 15;
                          _context.t0 = _context["catch"](4);
                          dispatch({
                            type: "updateFile",
                            payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_8__["default"])({}, file, {
                              failed: true
                            })
                          });

                        case 18:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, null, [[4, 15]]);
                }));

                return function (_x5) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onDrop(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("main", {
    className: "jsx-1073760078" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
    className: "jsx-1073760078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "Convert your ", fromFile, " to ", toFile, " files completely free."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h3", {
    className: "jsx-1073760078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "Simply upload your files below and wait for the file conversion to complete to download (up to 50mb per upload)."), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
    className: "jsx-1073760078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onDrop: onDrop,
    fromFile: fromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-1073760078" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "jsx-1073760078",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172
    },
    __self: this
  }))), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(state.files).length > 0 && renderResults(state.files), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "1073760078",
    __self: this
  }, "main.jsx-1073760078{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-1073760078{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-1073760078{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-1073760078{padding:15px;}h1.jsx-1073760078{font-size:1.4em;}h3.jsx-1073760078{font-size:0.9em;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUErS2tCLEFBRzRCLEFBTUosQUFRQSxBQU9FLEFBSUUsQUFJQyxhQXRCQSxBQWVsQixHQUlBLEFBSUEsQ0E3QmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaWxlUmVzdWx0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZpbGVSZXN1bHRcIjtcblxuY29uc3QgRmlsZUNvbnZlcnNpb24gPSAoeyBmaXJlYmFzZSB9KSA9PiB7XG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzZXRGaWxlc1wiOiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmlsZXM6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmZpbGVzLFxuICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkLmlkXTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJ1cGRhdGVGaWxlXCI6IHtcbiAgICAgICAgc3RhdGUuZmlsZXNbYWN0aW9uLnBheWxvYWQuaWRdID0ge1xuICAgICAgICAgIC4uLnN0YXRlLmZpbGVzW2FjdGlvbi5wYXlsb2FkLmlkXSxcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBmaWxlczoge30gfSk7XG4gIGNvbnN0IFtmcm9tRmlsZSwgc2V0RnJvbUZpbGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0b0ZpbGUsIHNldFRvRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnREb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgc3dpdGNoIChjdXJyZW50RG9tYWluKSB7XG4gICAgICBjYXNlIFwianBndG9wbmcuY29cIjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJKUEdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIlBOR1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicG5ndG9qcGcuY29cIjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJQTkdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIkpQR1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZXRGcm9tRmlsZShcIkpQR1wiKTtcbiAgICAgICAgc2V0VG9GaWxlKFwiUE5HXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBwcm9jZXNzSW1hZ2UgPSBmaWxlTWV0YURhdGEgPT4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpbWFnZURhdGE6IGZpbGVNZXRhRGF0YSxcbiAgICAgIGZyb21GaWxlLFxuICAgICAgdG9GaWxlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgYXhpb3NcbiAgICAgICAgLnBvc3QocHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xPVURfSU1BR0VfQVBJLCBwYXlsb2FkLCB7XG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XG4gICAgICAgIH0pXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoZGF0YVswXS5tZXRhZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCByZW5kZXJSZXN1bHRzID0gZmlsZXMgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWxlcykubWFwKGZpbGVJbmRleCA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbZmlsZUluZGV4XTtcbiAgICAgIHJldHVybiA8RmlsZVJlc3VsdCBmaWxlPXtmaWxlfSBrZXk9e2ZpbGUuaWR9IC8+O1xuICAgIH0pO1xuICB9O1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGFzeW5jRm9yRWFjaChhcnJheSwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgYXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBhd2FpdCBjYWxsYmFjayhhcnJheVtpbmRleF0sIGluZGV4LCBhcnJheSk7XG4gICAgfVxuICB9XG5cbiAgY29uc3Qgb25Ecm9wID0gYXN5bmMgKGFjY2VwdGVkRmlsZXMsIHJlamVjdGVkRmlsZXMpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gZmlyZWJhc2Uuc3RvcmFnZSgpLnJlZigpO1xuICAgIGF3YWl0IGFzeW5jRm9yRWFjaChhY2NlcHRlZEZpbGVzLCBhc3luYyBmaWxlID0+IHtcbiAgICAgIGZpbGUuaWQgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgbWV0YURhdGEgPSB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgbGFzdE1vZGlmaWVkOiBgJHtuZXcgRGF0ZShmaWxlLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgICAgIFwiZW4tVVNcIlxuICAgICAgICApfSAke25ldyBEYXRlKGZpbGUubGFzdE1vZGlmaWVkKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKX1gXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB0YXNrID0gc3RvcmFnZVJlZi5jaGlsZChmaWxlLm5hbWUpLnB1dChmaWxlLCBtZXRhRGF0YSk7XG5cbiAgICAgIHRhc2sub24oXG4gICAgICAgIFwic3RhdGVfY2hhbmdlZFwiLFxuICAgICAgICBzbmFwc2hvdCA9PiB7XG4gICAgICAgICAgbGV0IHVwbG9hZFBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcInVwZGF0ZUZpbGVcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgICAgdXBsb2FkUGVyY2VudGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIC4uLmZpbGUsXG4gICAgICAgICAgICAgIGZhaWxlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IG1ldGFkYXRhIH0gPSBhd2FpdCB0YXNrO1xuICAgICAgICBjb25zdCBwcm9jZXNzZWRJbWFnZURhdGEgPSBhd2FpdCBwcm9jZXNzSW1hZ2UobWV0YWRhdGEpO1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgIG5hbWU6IHByb2Nlc3NlZEltYWdlRGF0YS5uYW1lLFxuICAgICAgICAgICAgc2l6ZTogcHJvY2Vzc2VkSW1hZ2VEYXRhLnNpemUsXG4gICAgICAgICAgICBkb3dubG9hZFVybDogcHJvY2Vzc2VkSW1hZ2VEYXRhLm1lZGlhTGlua1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgIGZhaWxlZDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmaWxlLWNvbnZlcnNpb24td3JhcHBlclwiPlxuICAgICAgPGgxPlxuICAgICAgICBDb252ZXJ0IHlvdXIge2Zyb21GaWxlfSB0byB7dG9GaWxlfSBmaWxlcyBjb21wbGV0ZWx5IGZyZWUuXG4gICAgICA8L2gxPlxuICAgICAgPGgzPlxuICAgICAgICBTaW1wbHkgdXBsb2FkIHlvdXIgZmlsZXMgYmVsb3cgYW5kIHdhaXQgZm9yIHRoZSBmaWxlIGNvbnZlcnNpb24gdG9cbiAgICAgICAgY29tcGxldGUgdG8gZG93bmxvYWQgKHVwIHRvIDUwbWIgcGVyIHVwbG9hZCkuXG4gICAgICA8L2gzPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxVcGxvYWQgb25Ecm9wPXtvbkRyb3B9IGZyb21GaWxlPXtmcm9tRmlsZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXBpY2tlci13cmFwcGVyXCI+XG4gICAgICAgICAgPFNlbGVjdElucHV0IHNlbGVjdGVkRmlsZT17ZnJvbUZpbGV9IG9uU2VsZWN0PXtzZXRGcm9tRmlsZX0gLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMjRweFwiIH19IGljb249e2ZhQXJyb3dSaWdodH0gLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFNlbGVjdElucHV0IHNlbGVjdGVkRmlsZT17dG9GaWxlfSBvblNlbGVjdD17c2V0VG9GaWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIHtPYmplY3Qua2V5cyhzdGF0ZS5maWxlcykubGVuZ3RoID4gMCAmJiByZW5kZXJSZXN1bHRzKHN0YXRlLmZpbGVzKX1cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgbWFyZ2luOiA3MHB4IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDU2LCAxNTMsIDIzNiwgMCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyMiwgNDUsIDYxLCAwLjEpIDBweCAxcHggMnB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtcGlja2VyLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZSAxLjRlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVDb252ZXJzaW9uO1xuIl19 */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.8d2762793cbd609f5a21.hot-update.js.map