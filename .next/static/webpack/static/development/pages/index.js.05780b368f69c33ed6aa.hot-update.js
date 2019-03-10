webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/FileConversion/index.js":
/*!********************************************!*\
  !*** ./containers/FileConversion/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/SelectInput */ "./components/SelectInput.js");
/* harmony import */ var _components_FileResult__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/FileResult */ "./components/FileResult.js");








var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";










var FileConversion = function FileConversion(_ref) {
  var firebase = _ref.firebase;

  var reducer = function reducer(state, action) {
    switch (action.type) {
      case "setFiles":
        {
          return {
            files: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, state.files, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])({}, action.payload.id, action.payload))
          };
        }

      case "updateFile":
        {
          state.files[action.payload.id] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, state.files[action.payload.id], action.payload);
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, state);
        }

      default:
        {
          return state;
        }
    }
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_9__["useReducer"])(reducer, {
    files: {}
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
      fromFile = _useState2[0],
      setFromFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_9__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
      toFile = _useState4[0],
      setToFile = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_9__["useEffect"])(function () {
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

  var processImage =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee(fileMetaData, originalFile) {
      var payload, _axios$post, data;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              console.log(fileMetaData, "fiile meta data"); // return "HElLO";
              // process.env.FIREBASE_CLOUD_IMAGE_API
              // http://localhost:5000/file-converter-bddf8/us-central1/processImage

              payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()({
                imageData: fileMetaData,
                fromFile: fromFile,
                toFile: toFile
              }); // return new Promise((resolve, reject) => {
              //   axios
              //     .post(
              //       "http://localhost:5000/file-converter-bddf8/us-central1/processImage",
              //       payload,
              //       {
              //         headers: { "Content-Type": "application/json" }
              //       }
              //     )
              //     .then(({ data }) => {
              //       console.log(data, "res");
              //       resolve(data[0].metadata);
              //       // return data[0].metadata;
              //     })
              //     .catch(err => {
              //       reject(err);
              //       // throw new Error(err);
              //     });
              // });

              _context.prev = 2;
              _axios$post = axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("http://localhost:5000/file-converter-bddf8/us-central1/processImage", payload, {
                headers: {
                  "Content-Type": "application/json"
                }
              }), data = _axios$post.data;
              return _context.abrupt("return", data[0].metadata);

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](2);
              throw new Error(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 7]]);
    }));

    return function processImage(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var renderResults = function renderResults(files) {
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(files).map(function (fileIndex) {
      var file = files[fileIndex];
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_FileResult__WEBPACK_IMPORTED_MODULE_15__["default"], {
        file: file,
        key: file.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      });
    });
  };

  function asyncForEach(_x3, _x4) {
    return _asyncForEach.apply(this, arguments);
  }

  function _asyncForEach() {
    _asyncForEach = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee5(array, callback) {
      var index;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              index = 0;

            case 1:
              if (!(index < array.length)) {
                _context5.next = 7;
                break;
              }

              _context5.next = 4;
              return callback(array[index], index, array);

            case 4:
              index++;
              _context5.next = 1;
              break;

            case 7:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));
    return _asyncForEach.apply(this, arguments);
  }

  var onDrop =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee4(acceptedFiles, rejectedFiles) {
      var fileData, storageRef;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              fileData = [];
              console.log(acceptedFiles, "accepted files");
              storageRef = firebase.storage().ref();
              _context4.next = 5;
              return asyncForEach(acceptedFiles,
              /*#__PURE__*/
              function () {
                var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
                /*#__PURE__*/
                _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee3(file) {
                  var metaData, task, _ref6, metadata, processedImageData;

                  return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          file.id = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();
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
                              payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, file, {
                                uploadPercentage: uploadPercentage
                              })
                            });
                          }, function () {
                            dispatch({
                              type: "updateFile",
                              payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, file, {
                                failed: true
                              })
                            });
                          },
                          /*#__PURE__*/
                          Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__["default"])(
                          /*#__PURE__*/
                          _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee2() {
                            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee2$(_context2) {
                              while (1) {
                                switch (_context2.prev = _context2.next) {
                                  case 0:
                                  case "end":
                                    return _context2.stop();
                                }
                              }
                            }, _callee2);
                          })));
                          _context3.next = 6;
                          return task;

                        case 6:
                          _ref6 = _context3.sent;
                          metadata = _ref6.metadata;
                          console.log(metadata, "meta");
                          _context3.next = 11;
                          return processImage(metadata);

                        case 11:
                          processedImageData = _context3.sent;
                          console.log(processedImageData, "image data right here");
                          dispatch({
                            type: "updateFile",
                            payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, file, {
                              failed: true
                            })
                          });

                          try {} catch (error) {}

                          dispatch({
                            type: "updateFile",
                            payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, file, {
                              name: processedImageData.name,
                              size: processedImageData.size,
                              downloadUrl: processedImageData.mediaLink
                            })
                          });

                        case 16:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));

                return function (_x7) {
                  return _ref4.apply(this, arguments);
                };
              }());

            case 5:
              console.log(fileData, "done");

            case 6:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    return function onDrop(_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }();

  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 225
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onDrop: onDrop,
    fromFile: fromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 227
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 228
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 229
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 230
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  }))), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(state.files).length > 0 && renderResults(state.files), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyT2tCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaWxlUmVzdWx0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZpbGVSZXN1bHRcIjtcblxuY29uc3QgRmlsZUNvbnZlcnNpb24gPSAoeyBmaXJlYmFzZSB9KSA9PiB7XG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzZXRGaWxlc1wiOiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmlsZXM6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmZpbGVzLFxuICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkLmlkXTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJ1cGRhdGVGaWxlXCI6IHtcbiAgICAgICAgc3RhdGUuZmlsZXNbYWN0aW9uLnBheWxvYWQuaWRdID0ge1xuICAgICAgICAgIC4uLnN0YXRlLmZpbGVzW2FjdGlvbi5wYXlsb2FkLmlkXSxcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBmaWxlczoge30gfSk7XG4gIGNvbnN0IFtmcm9tRmlsZSwgc2V0RnJvbUZpbGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0b0ZpbGUsIHNldFRvRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnREb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgc3dpdGNoIChjdXJyZW50RG9tYWluKSB7XG4gICAgICBjYXNlIFwianBndG9wbmcuY29cIjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJKUEdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIlBOR1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicG5ndG9qcGcuY29cIjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJQTkdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIkpQR1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZXRGcm9tRmlsZShcIkpQR1wiKTtcbiAgICAgICAgc2V0VG9GaWxlKFwiUE5HXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBwcm9jZXNzSW1hZ2UgPSBhc3luYyAoZmlsZU1ldGFEYXRhLCBvcmlnaW5hbEZpbGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmaWxlTWV0YURhdGEsIFwiZmlpbGUgbWV0YSBkYXRhXCIpO1xuICAgIC8vIHJldHVybiBcIkhFbExPXCI7XG4gICAgLy8gcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xPVURfSU1BR0VfQVBJXG4gICAgLy8gaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ZpbGUtY29udmVydGVyLWJkZGY4L3VzLWNlbnRyYWwxL3Byb2Nlc3NJbWFnZVxuICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpbWFnZURhdGE6IGZpbGVNZXRhRGF0YSxcbiAgICAgIGZyb21GaWxlLFxuICAgICAgdG9GaWxlXG4gICAgfSk7XG5cbiAgICAvLyByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vICAgYXhpb3NcbiAgICAvLyAgICAgLnBvc3QoXG4gICAgLy8gICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZmlsZS1jb252ZXJ0ZXItYmRkZjgvdXMtY2VudHJhbDEvcHJvY2Vzc0ltYWdlXCIsXG4gICAgLy8gICAgICAgcGF5bG9hZCxcbiAgICAvLyAgICAgICB7XG4gICAgLy8gICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICAvLyAgICAgICB9XG4gICAgLy8gICAgIClcbiAgICAvLyAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgLy8gICAgICAgY29uc29sZS5sb2coZGF0YSwgXCJyZXNcIik7XG4gICAgLy8gICAgICAgcmVzb2x2ZShkYXRhWzBdLm1ldGFkYXRhKTtcbiAgICAvLyAgICAgICAvLyByZXR1cm4gZGF0YVswXS5tZXRhZGF0YTtcbiAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgLy8gICAgICAgcmVqZWN0KGVycik7XG4gICAgLy8gICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXhpb3MucG9zdChcbiAgICAgICAgXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvZmlsZS1jb252ZXJ0ZXItYmRkZjgvdXMtY2VudHJhbDEvcHJvY2Vzc0ltYWdlXCIsXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHJldHVybiBkYXRhWzBdLm1ldGFkYXRhO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHJlbmRlclJlc3VsdHMgPSBmaWxlcyA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGZpbGVzKS5tYXAoZmlsZUluZGV4ID0+IHtcbiAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1tmaWxlSW5kZXhdO1xuICAgICAgcmV0dXJuIDxGaWxlUmVzdWx0IGZpbGU9e2ZpbGV9IGtleT17ZmlsZS5pZH0gLz47XG4gICAgfSk7XG4gIH07XG5cbiAgYXN5bmMgZnVuY3Rpb24gYXN5bmNGb3JFYWNoKGFycmF5LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhcnJheS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGF3YWl0IGNhbGxiYWNrKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkRyb3AgPSBhc3luYyAoYWNjZXB0ZWRGaWxlcywgcmVqZWN0ZWRGaWxlcykgPT4ge1xuICAgIGNvbnN0IGZpbGVEYXRhID0gW107XG4gICAgY29uc29sZS5sb2coYWNjZXB0ZWRGaWxlcywgXCJhY2NlcHRlZCBmaWxlc1wiKTtcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gZmlyZWJhc2Uuc3RvcmFnZSgpLnJlZigpO1xuICAgIGF3YWl0IGFzeW5jRm9yRWFjaChhY2NlcHRlZEZpbGVzLCBhc3luYyBmaWxlID0+IHtcbiAgICAgIGZpbGUuaWQgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgbWV0YURhdGEgPSB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgbGFzdE1vZGlmaWVkOiBgJHtuZXcgRGF0ZShmaWxlLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgICAgIFwiZW4tVVNcIlxuICAgICAgICApfSAke25ldyBEYXRlKGZpbGUubGFzdE1vZGlmaWVkKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKX1gXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB0YXNrID0gc3RvcmFnZVJlZi5jaGlsZChmaWxlLm5hbWUpLnB1dChmaWxlLCBtZXRhRGF0YSk7XG5cbiAgICAgIHRhc2sub24oXG4gICAgICAgIFwic3RhdGVfY2hhbmdlZFwiLFxuICAgICAgICBzbmFwc2hvdCA9PiB7XG4gICAgICAgICAgbGV0IHVwbG9hZFBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcInVwZGF0ZUZpbGVcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgICAgdXBsb2FkUGVyY2VudGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIC4uLmZpbGUsXG4gICAgICAgICAgICAgIGZhaWxlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgLy8gc3VjY2VzZnVsIHVwbG9hZFxuICAgICAgICAgIC8vIGNvbnN0IG1ldGFkYXRhID0gYXdhaXQgdGFzay5zbmFwc2hvdC5yZWYuZ2V0TWV0YWRhdGEoKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkZJUlNUXCIpO1xuICAgICAgICAgIC8vIGZpbGVEYXRhLnB1c2gobWV0YWRhdGEpO1xuICAgICAgICAgIC8vIGNvbnN0IHByb2Nlc3NlZEltYWdlRGF0YSA9IGF3YWl0IHByb2Nlc3NJbWFnZShtZXRhZGF0YSk7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvY2Vzc2VkSW1hZ2VEYXRhLCBcImltYWdlIGRhdGEgcmlnaHQgaGVyZVwiKTtcbiAgICAgICAgICAvLyB0YXNrLnNuYXBzaG90LnJlZlxuICAgICAgICAgIC8vICAgLmdldE1ldGFkYXRhKClcbiAgICAgICAgICAvLyAgIC50aGVuKG1ldGFkYXRhID0+IHtcbiAgICAgICAgICAvLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIC8vICAgICAgIHJlc29sdmUocHJvY2Vzc0ltYWdlKG1ldGFkYXRhLCBmaWxlKSk7XG4gICAgICAgICAgLy8gICAgIH0pO1xuICAgICAgICAgIC8vICAgfSlcbiAgICAgICAgICAvLyAudGhlbihwcm9jZXNzZWRJbWFnZURhdGEgPT4ge1xuICAgICAgICAgIC8vICAgY29uc29sZS5sb2cocHJvY2Vzc2VkSW1hZ2VEYXRhLCBcInByb2NjZXNzZWQgZGF0YVwiKTtcbiAgICAgICAgICAvLyAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAvLyAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgICAgLy8gICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAvLyAgICAgICAuLi5maWxlLFxuICAgICAgICAgIC8vICAgICAgIG5hbWU6IHByb2Nlc3NlZEltYWdlRGF0YS5uYW1lLFxuICAgICAgICAgIC8vICAgICAgIHNpemU6IHByb2Nlc3NlZEltYWdlRGF0YS5zaXplLFxuICAgICAgICAgIC8vICAgICAgIGRvd25sb2FkVXJsOiBwcm9jZXNzZWRJbWFnZURhdGEubWVkaWFMaW5rXG4gICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgLy8gICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICAvLyBkaXNwYXRjaCh7XG4gICAgICAgICAgLy8gICB0eXBlOiBcInVwZGF0ZUZpbGVcIixcbiAgICAgICAgICAvLyAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAvLyAgICAgLi4uZmlsZSxcbiAgICAgICAgICAvLyAgICAgZmFpbGVkOiB0cnVlXG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnN0IHsgbWV0YWRhdGEgfSA9IGF3YWl0IHRhc2s7XG4gICAgICBjb25zb2xlLmxvZyhtZXRhZGF0YSwgXCJtZXRhXCIpO1xuICAgICAgY29uc3QgcHJvY2Vzc2VkSW1hZ2VEYXRhID0gYXdhaXQgcHJvY2Vzc0ltYWdlKG1ldGFkYXRhKTtcbiAgICAgIGNvbnNvbGUubG9nKHByb2Nlc3NlZEltYWdlRGF0YSwgXCJpbWFnZSBkYXRhIHJpZ2h0IGhlcmVcIik7XG5cbiAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAuLi5maWxlLFxuICAgICAgICAgIGZhaWxlZDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdHJ5IHtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxuXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwidXBkYXRlRmlsZVwiLFxuICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICBuYW1lOiBwcm9jZXNzZWRJbWFnZURhdGEubmFtZSxcbiAgICAgICAgICBzaXplOiBwcm9jZXNzZWRJbWFnZURhdGEuc2l6ZSxcbiAgICAgICAgICBkb3dubG9hZFVybDogcHJvY2Vzc2VkSW1hZ2VEYXRhLm1lZGlhTGlua1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhmaWxlRGF0YSwgXCJkb25lXCIpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmlsZS1jb252ZXJzaW9uLXdyYXBwZXJcIj5cbiAgICAgIDxoMT5GaWxlIENvbnZlcnNpb24gQXBwPC9oMT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VXBsb2FkIG9uRHJvcD17b25Ecm9wfSBmcm9tRmlsZT17ZnJvbUZpbGV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1waWNrZXItd3JhcHBlclwiPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBzZWxlY3RlZEZpbGU9e2Zyb21GaWxlfSBvblNlbGVjdD17c2V0RnJvbUZpbGV9IC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI0cHhcIiB9fSBpY29uPXtmYUFycm93UmlnaHR9IC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBzZWxlY3RlZEZpbGU9e3RvRmlsZX0gb25TZWxlY3Q9e3NldFRvRmlsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICB7T2JqZWN0LmtleXMoc3RhdGUuZmlsZXMpLmxlbmd0aCA+IDAgJiYgcmVuZGVyUmVzdWx0cyhzdGF0ZS5maWxlcyl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIG1hcmdpbjogNzBweCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1NiwgMTUzLCAyMzYsIDApO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjIsIDQ1LCA2MSwgMC4xKSAwcHggMXB4IDJweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLXBpY2tlci13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlQ29udmVyc2lvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.05780b368f69c33ed6aa.hot-update.js.map