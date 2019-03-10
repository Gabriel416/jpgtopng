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

  var processImage = function processImage(fileMetaData, originalFile) {
    console.log(fileMetaData, "fiile meta data"); // return "HElLO";
    // process.env.FIREBASE_CLOUD_IMAGE_API
    // http://localhost:5000/file-converter-bddf8/us-central1/processImage

    var payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_5___default()({
      imageData: fileMetaData,
      fromFile: fromFile,
      toFile: toFile
    });

    var promise = new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_4___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_13___default.a.post("http://localhost:5000/file-converter-bddf8/us-central1/processImage", payload, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        console.log(data, "res");
        resolve(data[0].metadata); // return data[0].metadata;
      }).catch(function (err) {
        reject(err); // throw new Error(err);
      });
    });
    return promise; // try {
    //   const { data } = axios.post(
    //     "http://localhost:5000/file-converter-bddf8/us-central1/processImage",
    //     payload,
    //     {
    //       headers: { "Content-Type": "application/json" }
    //     }
    //   );
    //   return data[0].metadata;
    // } catch (err) {
    //   throw new Error(err);
    // }
  };

  var renderResults = function renderResults(files) {
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(files).map(function (fileIndex) {
      var file = files[fileIndex];
      return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_FileResult__WEBPACK_IMPORTED_MODULE_16__["default"], {
        file: file,
        key: file.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
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
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(array, callback) {
      var index;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              index = 0;

            case 1:
              if (!(index < array.length)) {
                _context4.next = 7;
                break;
              }

              _context4.next = 4;
              return callback(array[index], index, array);

            case 4:
              index++;
              _context4.next = 1;
              break;

            case 7:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));
    return _asyncForEach.apply(this, arguments);
  }

  var onDrop =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(acceptedFiles, rejectedFiles) {
      var storageRef;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              console.log(acceptedFiles, "accepted files");
              storageRef = firebase.storage().ref();
              _context3.next = 4;
              return asyncForEach(acceptedFiles,
              /*#__PURE__*/
              function () {
                var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(file) {
                  var metaData, task;
                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
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
                          },
                          /*#__PURE__*/
                          Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
                          /*#__PURE__*/
                          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                            var metadata, processedImageData;
                            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                              while (1) {
                                switch (_context.prev = _context.next) {
                                  case 0:
                                    _context.next = 2;
                                    return task.snapshot.ref.getMetadata();

                                  case 2:
                                    metadata = _context.sent;
                                    _context.next = 5;
                                    return processImage(metadata);

                                  case 5:
                                    processedImageData = _context.sent;
                                    console.log(processedImageData, "image data right here"); // task.snapshot.ref
                                    //   .getMetadata()
                                    //   .then(metadata => {
                                    //     return new Promise(resolve => {
                                    //       resolve(processImage(metadata, file));
                                    //     });
                                    //   })
                                    //   .then(processedImageData => {
                                    //     console.log(processedImageData, "proccessed data");
                                    //     dispatch({
                                    //       type: "updateFile",
                                    //       payload: {
                                    //         ...file,
                                    //         name: processedImageData.name,
                                    //         size: processedImageData.size,
                                    //         downloadUrl: processedImageData.mediaLink
                                    //       }
                                    //     });
                                    //   })
                                    //   .catch(err => {
                                    //     dispatch({
                                    //       type: "updateFile",
                                    //       payload: {
                                    //         ...file,
                                    //         failed: true
                                    //       }
                                    //     });
                                    //   });

                                  case 7:
                                  case "end":
                                    return _context.stop();
                                }
                              }
                            }, _callee);
                          })));

                        case 4:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2);
                }));

                return function (_x5) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 4:
              console.log("Done"); // acceptedFiles.forEach(file => {
              // });

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    return function onDrop(_x3, _x4) {
      return _ref3.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onDrop: onDrop,
    fromFile: fromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_11__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_12__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_15__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }))), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_3___default()(state.files).length > 0 && renderResults(state.files), react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_9___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTmtCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaWxlUmVzdWx0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZpbGVSZXN1bHRcIjtcblxuY29uc3QgRmlsZUNvbnZlcnNpb24gPSAoeyBmaXJlYmFzZSB9KSA9PiB7XG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzZXRGaWxlc1wiOiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmlsZXM6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmZpbGVzLFxuICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkLmlkXTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJ1cGRhdGVGaWxlXCI6IHtcbiAgICAgICAgc3RhdGUuZmlsZXNbYWN0aW9uLnBheWxvYWQuaWRdID0ge1xuICAgICAgICAgIC4uLnN0YXRlLmZpbGVzW2FjdGlvbi5wYXlsb2FkLmlkXSxcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBmaWxlczoge30gfSk7XG4gIGNvbnN0IFtmcm9tRmlsZSwgc2V0RnJvbUZpbGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0b0ZpbGUsIHNldFRvRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnREb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgc3dpdGNoIChjdXJyZW50RG9tYWluKSB7XG4gICAgICBjYXNlIFwianBndG9wbmcuY29cIjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJKUEdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIlBOR1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicG5ndG9qcGcuY29cIjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJQTkdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIkpQR1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZXRGcm9tRmlsZShcIkpQR1wiKTtcbiAgICAgICAgc2V0VG9GaWxlKFwiUE5HXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBwcm9jZXNzSW1hZ2UgPSAoZmlsZU1ldGFEYXRhLCBvcmlnaW5hbEZpbGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmaWxlTWV0YURhdGEsIFwiZmlpbGUgbWV0YSBkYXRhXCIpO1xuICAgIC8vIHJldHVybiBcIkhFbExPXCI7XG4gICAgLy8gcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xPVURfSU1BR0VfQVBJXG4gICAgLy8gaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ZpbGUtY29udmVydGVyLWJkZGY4L3VzLWNlbnRyYWwxL3Byb2Nlc3NJbWFnZVxuICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpbWFnZURhdGE6IGZpbGVNZXRhRGF0YSxcbiAgICAgIGZyb21GaWxlLFxuICAgICAgdG9GaWxlXG4gICAgfSk7XG5cbiAgICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFxuICAgICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ZpbGUtY29udmVydGVyLWJkZGY4L3VzLWNlbnRyYWwxL3Byb2Nlc3NJbWFnZVwiLFxuICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwicmVzXCIpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YVswXS5tZXRhZGF0YSk7XG4gICAgICAgICAgLy8gcmV0dXJuIGRhdGFbMF0ubWV0YWRhdGE7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9taXNlO1xuXG4gICAgLy8gdHJ5IHtcbiAgICAvLyAgIGNvbnN0IHsgZGF0YSB9ID0gYXhpb3MucG9zdChcbiAgICAvLyAgICAgXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZmlsZS1jb252ZXJ0ZXItYmRkZjgvdXMtY2VudHJhbDEvcHJvY2Vzc0ltYWdlXCIsXG4gICAgLy8gICAgIHBheWxvYWQsXG4gICAgLy8gICAgIHtcbiAgICAvLyAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgKTtcbiAgICAvLyAgIHJldHVybiBkYXRhWzBdLm1ldGFkYXRhO1xuICAgIC8vIH0gY2F0Y2ggKGVycikge1xuICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgLy8gfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclJlc3VsdHMgPSBmaWxlcyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbGVzKS5tYXAoZmlsZUluZGV4ID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tmaWxlSW5kZXhdO1xuICAgICAgcmV0dXJuIDxGaWxlUmVzdWx0IGZpbGU9e2ZpbGV9IGtleT17ZmlsZS5pZH0gLz47XG4gICAgfSk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gYXN5bmNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGF3YWl0IGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkRyb3AgPSBhc3luYyAoYWNjZXB0ZWRGaWxlcywgcmVqZWN0ZWRGaWxlcykgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFjY2VwdGVkRmlsZXMsIFwiYWNjZXB0ZWQgZmlsZXNcIik7XG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IGZpcmViYXNlLnN0b3JhZ2UoKS5yZWYoKTtcblxuICAgIGF3YWl0IGFzeW5jRm9yRWFjaChhY2NlcHRlZEZpbGVzLCBhc3luYyBmaWxlID0+IHtcbiAgICAgIGZpbGUuaWQgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgbWV0YURhdGEgPSB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgbGFzdE1vZGlmaWVkOiBgJHtuZXcgRGF0ZShmaWxlLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgICAgIFwiZW4tVVNcIlxuICAgICAgICApfSAke25ldyBEYXRlKGZpbGUubGFzdE1vZGlmaWVkKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKX1gXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB0YXNrID0gc3RvcmFnZVJlZi5jaGlsZChmaWxlLm5hbWUpLnB1dChmaWxlLCBtZXRhRGF0YSk7XG5cbiAgICAgIHRhc2sub24oXG4gICAgICAgIFwic3RhdGVfY2hhbmdlZFwiLFxuICAgICAgICBzbmFwc2hvdCA9PiB7XG4gICAgICAgICAgbGV0IHVwbG9hZFBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcInVwZGF0ZUZpbGVcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgICAgdXBsb2FkUGVyY2VudGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIC4uLmZpbGUsXG4gICAgICAgICAgICAgIGZhaWxlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgLy8gc3VjY2VzZnVsIHVwbG9hZFxuICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgdGFzay5zbmFwc2hvdC5yZWYuZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgICBjb25zdCBwcm9jZXNzZWRJbWFnZURhdGEgPSBhd2FpdCBwcm9jZXNzSW1hZ2UobWV0YWRhdGEpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3NlZEltYWdlRGF0YSwgXCJpbWFnZSBkYXRhIHJpZ2h0IGhlcmVcIik7XG4gICAgICAgICAgLy8gdGFzay5zbmFwc2hvdC5yZWZcbiAgICAgICAgICAvLyAgIC5nZXRNZXRhZGF0YSgpXG4gICAgICAgICAgLy8gICAudGhlbihtZXRhZGF0YSA9PiB7XG4gICAgICAgICAgLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICAvLyAgICAgICByZXNvbHZlKHByb2Nlc3NJbWFnZShtZXRhZGF0YSwgZmlsZSkpO1xuICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAvLyAgIH0pXG4gICAgICAgICAgLy8gICAudGhlbihwcm9jZXNzZWRJbWFnZURhdGEgPT4ge1xuICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhwcm9jZXNzZWRJbWFnZURhdGEsIFwicHJvY2Nlc3NlZCBkYXRhXCIpO1xuICAgICAgICAgIC8vICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgLy8gICAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgICAgLy8gICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgIC8vICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAvLyAgICAgICAgIG5hbWU6IHByb2Nlc3NlZEltYWdlRGF0YS5uYW1lLFxuICAgICAgICAgIC8vICAgICAgICAgc2l6ZTogcHJvY2Vzc2VkSW1hZ2VEYXRhLnNpemUsXG4gICAgICAgICAgLy8gICAgICAgICBkb3dubG9hZFVybDogcHJvY2Vzc2VkSW1hZ2VEYXRhLm1lZGlhTGlua1xuICAgICAgICAgIC8vICAgICAgIH1cbiAgICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgICAgLy8gICB9KVxuICAgICAgICAgIC8vICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgLy8gICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAvLyAgICAgICB0eXBlOiBcInVwZGF0ZUZpbGVcIixcbiAgICAgICAgICAvLyAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgLy8gICAgICAgICAuLi5maWxlLFxuICAgICAgICAgIC8vICAgICAgICAgZmFpbGVkOiB0cnVlXG4gICAgICAgICAgLy8gICAgICAgfVxuICAgICAgICAgIC8vICAgICB9KTtcbiAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKFwiRG9uZVwiKTtcbiAgICAvLyBhY2NlcHRlZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG5cbiAgICAvLyB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZpbGUtY29udmVyc2lvbi13cmFwcGVyXCI+XG4gICAgICA8aDE+RmlsZSBDb252ZXJzaW9uIEFwcDwvaDE+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFVwbG9hZCBvbkRyb3A9e29uRHJvcH0gZnJvbUZpbGU9e2Zyb21GaWxlfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtcGlja2VyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgc2VsZWN0ZWRGaWxlPXtmcm9tRmlsZX0gb25TZWxlY3Q9e3NldEZyb21GaWxlfSAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIyNHB4XCIgfX0gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgc2VsZWN0ZWRGaWxlPXt0b0ZpbGV9IG9uU2VsZWN0PXtzZXRUb0ZpbGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAge09iamVjdC5rZXlzKHN0YXRlLmZpbGVzKS5sZW5ndGggPiAwICYmIHJlbmRlclJlc3VsdHMoc3RhdGUuZmlsZXMpfVxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBtYXJnaW46IDcwcHggYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTYsIDE1MywgMjM2LCAwKTtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDIyLCA0NSwgNjEsIDAuMSkgMHB4IDFweCAycHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1waWNrZXItd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUNvbnZlcnNpb247XG4iXX0= */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.b841c66798dc44b6231b.hot-update.js.map