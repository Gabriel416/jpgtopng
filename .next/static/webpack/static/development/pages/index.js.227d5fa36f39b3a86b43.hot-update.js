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
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
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
/* harmony import */ var _components_FileResult__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/FileResult */ "./components/FileResult.js");







var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";










var FileConversion = function FileConversion(_ref) {
  var firebase = _ref.firebase;

  var reducer = function reducer(state, action) {
    switch (action.type) {
      case "setFiles":
        {
          return {
            files: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, state.files, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__["default"])({}, action.payload.id, action.payload))
          };
        }

      case "updateFile":
        {
          state.files[action.payload.id] = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, state.files[action.payload.id], action.payload);
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, state);
        }

      default:
        {
          return state;
        }
    }
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_8__["useReducer"])(reducer, {
    files: {}
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState, 2),
      fromFile = _useState2[0],
      setFromFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useState3, 2),
      toFile = _useState4[0],
      setToFile = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
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
    console.log(fileMetaData, "fiile meta data"); // process.env.FIREBASE_CLOUD_IMAGE_API
    // http://localhost:5000/file-converter-bddf8/us-central1/processImage

    var payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()({
      imageData: fileMetaData,
      fromFile: fromFile,
      toFile: toFile
    });

    return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
      axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("http://localhost:5000/file-converter-bddf8/us-central1/processImage", payload, {
        headers: {
          "Content-Type": "application/json"
        }
      }).then(function (_ref2) {
        var data = _ref2.data;
        console.log(data, "res");
        resolve(data[0].metadata);
      }).catch(function (err) {
        reject(err);
        throw new Error(err);
      });
    }); // try {
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
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(files).map(function (fileIndex) {
      var file = files[fileIndex];
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_FileResult__WEBPACK_IMPORTED_MODULE_14__["default"], {
        file: file,
        key: file.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      });
    });
  };

  var onDrop = function onDrop(acceptedFiles, rejectedFiles) {
    console.log(acceptedFiles, "accepted files");
    var storageRef = firebase.storage().ref();
    acceptedFiles.forEach(function (file) {
      file.id = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();
      var metaData = {
        contentType: file.type,
        size: file.size,
        lastModified: "".concat(new Date(file.lastModified).toLocaleDateString("en-US"), " ").concat(new Date(file.lastModified).toLocaleTimeString("en-US"))
      };
      var task = storageRef.child(file.name).put(file, metaData);
      task.on("state_changed", function (snapshot) {
        var uploadPercentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        dispatch({
          type: "updateFile",
          payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, file, {
            uploadPercentage: uploadPercentage
          })
        });
      }, function () {
        dispatch({
          type: "updateFile",
          payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, file, {
            failed: true
          })
        });
      }, function () {
        // succesful upload
        task.snapshot.ref.getMetadata().then(function (metadata) {
          var payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default()({
            imageData: metadata,
            fromFile: fromFile,
            toFile: toFile
          });

          return new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
            axios__WEBPACK_IMPORTED_MODULE_11___default.a.post("http://localhost:5000/file-converter-bddf8/us-central1/processImage", payload, {
              headers: {
                "Content-Type": "application/json"
              }
            }).then(function (_ref3) {
              var data = _ref3.data;
              console.log(data, "res");
              resolve(data[0].metadata);
            }).catch(function (err) {
              reject(err);
              throw new Error(err);
            });
          });
        }).then(function (processedImageData) {
          console.log(processedImageData, "proccessed data");
          dispatch({
            type: "updateFile",
            payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, file, {
              name: processedImageData.name,
              size: processedImageData.size,
              downloadUrl: processedImageData.mediaLink
            })
          });
        }).catch(function (err) {
          dispatch({
            type: "updateFile",
            payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_6__["default"])({}, file, {
              failed: true
            })
          });
        });
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 205
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_12__["default"], {
    onDrop: onDrop,
    fromFile: fromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 208
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 209
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 210
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_13__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213
    },
    __self: this
  }))), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(state.files).length > 0 && renderResults(state.files), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3TmtCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaWxlUmVzdWx0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0ZpbGVSZXN1bHRcIjtcblxuY29uc3QgRmlsZUNvbnZlcnNpb24gPSAoeyBmaXJlYmFzZSB9KSA9PiB7XG4gIGNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJzZXRGaWxlc1wiOiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZmlsZXM6IHtcbiAgICAgICAgICAgIC4uLnN0YXRlLmZpbGVzLFxuICAgICAgICAgICAgW2FjdGlvbi5wYXlsb2FkLmlkXTogYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNhc2UgXCJ1cGRhdGVGaWxlXCI6IHtcbiAgICAgICAgc3RhdGUuZmlsZXNbYWN0aW9uLnBheWxvYWQuaWRdID0ge1xuICAgICAgICAgIC4uLnN0YXRlLmZpbGVzW2FjdGlvbi5wYXlsb2FkLmlkXSxcbiAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGRlZmF1bHQ6IHtcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgeyBmaWxlczoge30gfSk7XG4gIGNvbnN0IFtmcm9tRmlsZSwgc2V0RnJvbUZpbGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0b0ZpbGUsIHNldFRvRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnREb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgc3dpdGNoIChjdXJyZW50RG9tYWluKSB7XG4gICAgICBjYXNlIFwianBndG9wbmcuY29cIjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJKUEdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIlBOR1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicG5ndG9qcGcuY29cIjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJQTkdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIkpQR1wiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBzZXRGcm9tRmlsZShcIkpQR1wiKTtcbiAgICAgICAgc2V0VG9GaWxlKFwiUE5HXCIpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBwcm9jZXNzSW1hZ2UgPSAoZmlsZU1ldGFEYXRhLCBvcmlnaW5hbEZpbGUpID0+IHtcbiAgICBjb25zb2xlLmxvZyhmaWxlTWV0YURhdGEsIFwiZmlpbGUgbWV0YSBkYXRhXCIpO1xuICAgIC8vIHByb2Nlc3MuZW52LkZJUkVCQVNFX0NMT1VEX0lNQUdFX0FQSVxuICAgIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9maWxlLWNvbnZlcnRlci1iZGRmOC91cy1jZW50cmFsMS9wcm9jZXNzSW1hZ2VcbiAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaW1hZ2VEYXRhOiBmaWxlTWV0YURhdGEsXG4gICAgICBmcm9tRmlsZSxcbiAgICAgIHRvRmlsZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KFxuICAgICAgICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ZpbGUtY29udmVydGVyLWJkZGY4L3VzLWNlbnRyYWwxL3Byb2Nlc3NJbWFnZVwiLFxuICAgICAgICAgIHBheWxvYWQsXG4gICAgICAgICAge1xuICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XG4gICAgICAgICAgfVxuICAgICAgICApXG4gICAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwicmVzXCIpO1xuICAgICAgICAgIHJlc29sdmUoZGF0YVswXS5tZXRhZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIC8vIHRyeSB7XG4gICAgLy8gICBjb25zdCB7IGRhdGEgfSA9IGF4aW9zLnBvc3QoXG4gICAgLy8gICAgIFwiaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ZpbGUtY29udmVydGVyLWJkZGY4L3VzLWNlbnRyYWwxL3Byb2Nlc3NJbWFnZVwiLFxuICAgIC8vICAgICBwYXlsb2FkLFxuICAgIC8vICAgICB7XG4gICAgLy8gICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICk7XG4gICAgLy8gICByZXR1cm4gZGF0YVswXS5tZXRhZGF0YTtcbiAgICAvLyB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIC8vIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJSZXN1bHRzID0gZmlsZXMgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWxlcykubWFwKGZpbGVJbmRleCA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbZmlsZUluZGV4XTtcbiAgICAgIHJldHVybiA8RmlsZVJlc3VsdCBmaWxlPXtmaWxlfSBrZXk9e2ZpbGUuaWR9IC8+O1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uRHJvcCA9IChhY2NlcHRlZEZpbGVzLCByZWplY3RlZEZpbGVzKSA9PiB7XG4gICAgY29uc29sZS5sb2coYWNjZXB0ZWRGaWxlcywgXCJhY2NlcHRlZCBmaWxlc1wiKTtcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gZmlyZWJhc2Uuc3RvcmFnZSgpLnJlZigpO1xuICAgIGFjY2VwdGVkRmlsZXMuZm9yRWFjaChmaWxlID0+IHtcbiAgICAgIGZpbGUuaWQgPSBEYXRlLm5vdygpO1xuICAgICAgY29uc3QgbWV0YURhdGEgPSB7XG4gICAgICAgIGNvbnRlbnRUeXBlOiBmaWxlLnR5cGUsXG4gICAgICAgIHNpemU6IGZpbGUuc2l6ZSxcbiAgICAgICAgbGFzdE1vZGlmaWVkOiBgJHtuZXcgRGF0ZShmaWxlLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVEYXRlU3RyaW5nKFxuICAgICAgICAgIFwiZW4tVVNcIlxuICAgICAgICApfSAke25ldyBEYXRlKGZpbGUubGFzdE1vZGlmaWVkKS50b0xvY2FsZVRpbWVTdHJpbmcoXCJlbi1VU1wiKX1gXG4gICAgICB9O1xuXG4gICAgICBjb25zdCB0YXNrID0gc3RvcmFnZVJlZi5jaGlsZChmaWxlLm5hbWUpLnB1dChmaWxlLCBtZXRhRGF0YSk7XG5cbiAgICAgIHRhc2sub24oXG4gICAgICAgIFwic3RhdGVfY2hhbmdlZFwiLFxuICAgICAgICBzbmFwc2hvdCA9PiB7XG4gICAgICAgICAgbGV0IHVwbG9hZFBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcInVwZGF0ZUZpbGVcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgICAgdXBsb2FkUGVyY2VudGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgIC4uLmZpbGUsXG4gICAgICAgICAgICAgIGZhaWxlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgLy8gc3VjY2VzZnVsIHVwbG9hZFxuICAgICAgICAgIHRhc2suc25hcHNob3QucmVmXG4gICAgICAgICAgICAuZ2V0TWV0YWRhdGEoKVxuICAgICAgICAgICAgLnRoZW4obWV0YWRhdGEgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIGltYWdlRGF0YTogbWV0YWRhdGEsXG4gICAgICAgICAgICAgICAgZnJvbUZpbGUsXG4gICAgICAgICAgICAgICAgdG9GaWxlXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgIC5wb3N0KFxuICAgICAgICAgICAgICAgICAgICBcImh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9maWxlLWNvbnZlcnRlci1iZGRmOC91cy1jZW50cmFsMS9wcm9jZXNzSW1hZ2VcIixcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSwgXCJyZXNcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoZGF0YVswXS5tZXRhZGF0YSk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihwcm9jZXNzZWRJbWFnZURhdGEgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9jZXNzZWRJbWFnZURhdGEsIFwicHJvY2Nlc3NlZCBkYXRhXCIpO1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgICAgICAgIG5hbWU6IHByb2Nlc3NlZEltYWdlRGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgICAgc2l6ZTogcHJvY2Vzc2VkSW1hZ2VEYXRhLnNpemUsXG4gICAgICAgICAgICAgICAgICBkb3dubG9hZFVybDogcHJvY2Vzc2VkSW1hZ2VEYXRhLm1lZGlhTGlua1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcInVwZGF0ZUZpbGVcIixcbiAgICAgICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAgICAuLi5maWxlLFxuICAgICAgICAgICAgICAgICAgZmFpbGVkOiB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmlsZS1jb252ZXJzaW9uLXdyYXBwZXJcIj5cbiAgICAgIDxoMT5GaWxlIENvbnZlcnNpb24gQXBwPC9oMT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VXBsb2FkIG9uRHJvcD17b25Ecm9wfSBmcm9tRmlsZT17ZnJvbUZpbGV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1waWNrZXItd3JhcHBlclwiPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBzZWxlY3RlZEZpbGU9e2Zyb21GaWxlfSBvblNlbGVjdD17c2V0RnJvbUZpbGV9IC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI0cHhcIiB9fSBpY29uPXtmYUFycm93UmlnaHR9IC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBzZWxlY3RlZEZpbGU9e3RvRmlsZX0gb25TZWxlY3Q9e3NldFRvRmlsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICB7T2JqZWN0LmtleXMoc3RhdGUuZmlsZXMpLmxlbmd0aCA+IDAgJiYgcmVuZGVyUmVzdWx0cyhzdGF0ZS5maWxlcyl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIG1hcmdpbjogNzBweCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1NiwgMTUzLCAyMzYsIDApO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjIsIDQ1LCA2MSwgMC4xKSAwcHggMXB4IDJweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLXBpY2tlci13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlQ29udmVyc2lvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.227d5fa36f39b3a86b43.hot-update.js.map