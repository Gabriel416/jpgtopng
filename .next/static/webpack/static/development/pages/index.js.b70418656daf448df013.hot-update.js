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
              return axios__WEBPACK_IMPORTED_MODULE_12___default.a.post("https://us-central1-file-converter-bddf8.cloudfunctions.net/processImage", payload, {
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 4:
              _ref3 = _context.sent;
              data = _ref3.data;
              console.log("HIT 2");
              return _context.abrupt("return", data[0].metadata);

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

  var renderResults = function renderResults(files) {
    return _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(files).map(function (fileIndex) {
      var file = files[fileIndex];
      console.log(file, "FILE IN RENDER HERERERERER");
      return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
        className: "file-result-wrapper",
        key: file.id,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_FileResult__WEBPACK_IMPORTED_MODULE_15__["default"], {
        file: file,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }));
    });
  };

  var onDrop = function onDrop(acceptedFiles, rejectedFiles) {
    var storageRef = firebase.storage().ref();
    acceptedFiles.forEach(function (file) {
      console.log(file, "FILE");
      file.id = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();
      var metaData = {
        contentType: file.type,
        size: file.size,
        lastModified: "".concat(new Date(file.lastModified).toLocaleDateString("en-US"), " ").concat(new Date(file.lastModified).toLocaleTimeString("en-US"))
      };
      var task = storageRef.child(file.name).put(file, metaData);
      task.on("state_changed", function (snapshot) {
        var uploadPercentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log(uploadPercentage, "HIT 1");
        dispatch({
          type: "updateFile",
          payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, file, {
            uploadPercentage: uploadPercentage
          })
        });
      }, function (err) {
        console.log(err, "ERR SNAPS");
      }, function () {
        // succesful upload
        task.snapshot.ref.getMetadata().then(function (metadata) {
          return processImage(metadata, file);
        }).then(function (processedImageData) {
          dispatch({
            type: "updateFile",
            payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, file, {
              name: processedImageData.name,
              size: processedImageData.size,
              downloadUrl: processedImageData.mediaLink
            })
          });
          console.log("HIT 3, URL");
        });
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("main", {
    className: "jsx-823886064" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
    className: "jsx-823886064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
    className: "jsx-823886064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-823886064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-823886064" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
    className: "jsx-823886064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-823886064",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(state.files).length > 0 && renderResults(state.files)), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "823886064",
    __self: this
  }, "main.jsx-823886064{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-823886064{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-result-wrapper.jsx-823886064{padding:20px;margin:20px 0px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-823886064{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-823886064{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtS2tCLEFBRzRCLEFBTUosQUFRQSxBQVNBLEFBT0UsYUF2QkcsQUFRRixBQWdCaEIsSUE5QmUsWUFlRyxFQVJxQixDQU52QixlQWV1QixDQWR6QyxtQkFNbUQsT0FlcEIsU0FOb0IsOEJBUnhCLGdCQVNBLFNBUjNCLGdCQVNBLDJDQUtxQiw2RkFDckIiLCJmaWxlIjoiL1VzZXJzL2dhYnJpZWwvY29kZS9qcGd0b3BuZy9jb250YWluZXJzL0ZpbGVDb252ZXJzaW9uL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSBcIkBmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZVwiO1xuaW1wb3J0IHsgZmFBcnJvd1JpZ2h0IH0gZnJvbSBcIkBmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29uc1wiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5pbXBvcnQgVXBsb2FkIGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1VwbG9hZFwiO1xuaW1wb3J0IFNlbGVjdElucHV0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL1NlbGVjdElucHV0XCI7XG5pbXBvcnQgRmlsZVJlc3VsdCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9GaWxlUmVzdWx0XCI7XG5cbmNvbnN0IEZpbGVDb252ZXJzaW9uID0gKHsgZmlyZWJhc2UgfSkgPT4ge1xuICBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFwic2V0RmlsZXNcIjoge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGZpbGVzOiB7XG4gICAgICAgICAgICAuLi5zdGF0ZS5maWxlcyxcbiAgICAgICAgICAgIFthY3Rpb24ucGF5bG9hZC5pZF06IGFjdGlvbi5wYXlsb2FkXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBjYXNlIFwidXBkYXRlRmlsZVwiOiB7XG4gICAgICAgIHN0YXRlLmZpbGVzW2FjdGlvbi5wYXlsb2FkLmlkXSA9IHtcbiAgICAgICAgICAuLi5zdGF0ZS5maWxlc1thY3Rpb24ucGF5bG9hZC5pZF0sXG4gICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWRcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi5zdGF0ZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIHsgZmlsZXM6IHt9IH0pO1xuICBjb25zdCBbZnJvbUZpbGUsIHNldEZyb21GaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbdG9GaWxlLCBzZXRUb0ZpbGVdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50RG9tYWluID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xuICAgIHN3aXRjaCAoY3VycmVudERvbWFpbikge1xuICAgICAgY2FzZSBjdXJyZW50RG9tYWluOlxuICAgICAgICBzZXRGcm9tRmlsZShcIkpQR1wiKTtcbiAgICAgICAgc2V0VG9GaWxlKFwiUE5HXCIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgcHJvY2Vzc0ltYWdlID0gYXN5bmMgKGZpbGVNZXRhRGF0YSwgb3JpZ2luYWxGaWxlKSA9PiB7XG4gICAgLy8gcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xPVURfSU1BR0VfQVBJXG4gICAgLy8gaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ZpbGUtY29udmVydGVyLWJkZGY4L3VzLWNlbnRyYWwxL3Byb2Nlc3NJbWFnZVxuICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpbWFnZURhdGE6IGZpbGVNZXRhRGF0YSxcbiAgICAgIGZyb21GaWxlLFxuICAgICAgdG9GaWxlXG4gICAgfSk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBkYXRhIH0gPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTE9VRF9JTUFHRV9BUEksXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiSElUIDJcIik7XG4gICAgICByZXR1cm4gZGF0YVswXS5tZXRhZGF0YTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByZW5kZXJSZXN1bHRzID0gZmlsZXMgPT4ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhmaWxlcykubWFwKGZpbGVJbmRleCA9PiB7XG4gICAgICBjb25zdCBmaWxlID0gZmlsZXNbZmlsZUluZGV4XTtcbiAgICAgIGNvbnNvbGUubG9nKGZpbGUsIFwiRklMRSBJTiBSRU5ERVIgSEVSRVJFUkVSRVJcIik7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmaWxlLXJlc3VsdC13cmFwcGVyXCIga2V5PXtmaWxlLmlkfT5cbiAgICAgICAgICA8RmlsZVJlc3VsdCBmaWxlPXtmaWxlfSAvPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uRHJvcCA9IChhY2NlcHRlZEZpbGVzLCByZWplY3RlZEZpbGVzKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IGZpcmViYXNlLnN0b3JhZ2UoKS5yZWYoKTtcbiAgICBhY2NlcHRlZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhmaWxlLCBcIkZJTEVcIik7XG4gICAgICBmaWxlLmlkID0gRGF0ZS5ub3coKTtcbiAgICAgIGNvbnN0IG1ldGFEYXRhID0ge1xuICAgICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgIGxhc3RNb2RpZmllZDogYCR7bmV3IERhdGUoZmlsZS5sYXN0TW9kaWZpZWQpLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgICBcImVuLVVTXCJcbiAgICAgICAgKX0gJHtuZXcgRGF0ZShmaWxlLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIil9YFxuICAgICAgfTtcblxuICAgICAgY29uc3QgdGFzayA9IHN0b3JhZ2VSZWYuY2hpbGQoZmlsZS5uYW1lKS5wdXQoZmlsZSwgbWV0YURhdGEpO1xuXG4gICAgICB0YXNrLm9uKFxuICAgICAgICBcInN0YXRlX2NoYW5nZWRcIixcbiAgICAgICAgc25hcHNob3QgPT4ge1xuICAgICAgICAgIGxldCB1cGxvYWRQZXJjZW50YWdlID1cbiAgICAgICAgICAgIChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XG4gICAgICAgICAgY29uc29sZS5sb2codXBsb2FkUGVyY2VudGFnZSwgXCJISVQgMVwiKTtcbiAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICB0eXBlOiBcInVwZGF0ZUZpbGVcIixcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgICAgdXBsb2FkUGVyY2VudGFnZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBlcnIgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJFUlIgU05BUFNcIik7XG4gICAgICAgIH0sXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICAvLyBzdWNjZXNmdWwgdXBsb2FkXG4gICAgICAgICAgdGFzay5zbmFwc2hvdC5yZWZcbiAgICAgICAgICAgIC5nZXRNZXRhZGF0YSgpXG4gICAgICAgICAgICAudGhlbihtZXRhZGF0YSA9PiBwcm9jZXNzSW1hZ2UobWV0YWRhdGEsIGZpbGUpKVxuICAgICAgICAgICAgLnRoZW4ocHJvY2Vzc2VkSW1hZ2VEYXRhID0+IHtcbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlRmlsZVwiLFxuICAgICAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICAgIC4uLmZpbGUsXG4gICAgICAgICAgICAgICAgICBuYW1lOiBwcm9jZXNzZWRJbWFnZURhdGEubmFtZSxcbiAgICAgICAgICAgICAgICAgIHNpemU6IHByb2Nlc3NlZEltYWdlRGF0YS5zaXplLFxuICAgICAgICAgICAgICAgICAgZG93bmxvYWRVcmw6IHByb2Nlc3NlZEltYWdlRGF0YS5tZWRpYUxpbmtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSElUIDMsIFVSTFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmlsZS1jb252ZXJzaW9uLXdyYXBwZXJcIj5cbiAgICAgIDxoMT5GaWxlIENvbnZlcnNpb24gQXBwPC9oMT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VXBsb2FkIG9uRHJvcD17b25Ecm9wfSAvPlxuICAgICAgICA8ZGl2PmZpbGUgdHlwZXMgaGVyZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtcGlja2VyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgc2VsZWN0ZWRGaWxlPXtmcm9tRmlsZX0gb25TZWxlY3Q9e3NldEZyb21GaWxlfSAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIyNHB4XCIgfX0gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgc2VsZWN0ZWRGaWxlPXt0b0ZpbGV9IG9uU2VsZWN0PXtzZXRUb0ZpbGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdj5kb3dubG9hZCBoZXJlPC9kaXY+ICovfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPGRpdj5cbiAgICAgICAge09iamVjdC5rZXlzKHN0YXRlLmZpbGVzKS5sZW5ndGggPiAwICYmIHJlbmRlclJlc3VsdHMoc3RhdGUuZmlsZXMpfVxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIG1hcmdpbjogNzBweCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1NiwgMTUzLCAyMzYsIDApO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjIsIDQ1LCA2MSwgMC4xKSAwcHggMXB4IDJweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLXJlc3VsdC13cmFwcGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTYsIDE1MywgMjM2LCAwKTtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDIyLCA0NSwgNjEsIDAuMSkgMHB4IDFweCAycHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1waWNrZXItd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUNvbnZlcnNpb247XG4iXX0= */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.b70418656daf448df013.hot-update.js.map