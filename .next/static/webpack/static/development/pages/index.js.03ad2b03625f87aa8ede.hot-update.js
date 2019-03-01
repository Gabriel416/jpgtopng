webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/FileConversion/index.js":
/*!********************************************!*\
  !*** ./containers/FileConversion/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
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
/* harmony import */ var _components_FinishedFile__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/FinishedFile */ "./components/FinishedFile.js");








var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";










var FileConversion = function FileConversion(_ref) {
  var firebase = _ref.firebase;

  // const reducer = (state, action) => {
  //   switch (action.type) {
  //     case "setFiles":
  //       return { files: [...state.files, action.payload] };
  //     default:
  //       throw new Error();
  //   }
  // };
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
      file.id = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();
      file.downloadUrl = null;
      file.percentage = 0;
      var metaData = {
        contentType: file.type,
        size: file.size,
        lastModified: "".concat(new Date(file.lastModified).toLocaleDateString("en-US"), " ").concat(new Date(file.lastModified).toLocaleTimeString("en-US"))
      };
      var task = storageRef.child(file.name).put(file, metaData);
      dispatch({
        type: "setFiles",
        payload: file
      }); // task
      //   .then(imageData => imageData.metadata)
      //   .then(metadata => processImage(metadata, file))
      //   .then(downloadUrl => {
      //     console.log(downloadUrl, "3");
      //   })
      //   .catch(err => console.log(err, "err"));

      task.on("state_changed", function (snapshot) {
        var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log(percentage, "HIT 1");
        dispatch({
          type: "updateFile",
          payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, file, {
            percentage: percentage
          })
        });
      }, function error(err) {
        console.log(err, "ERR SNAPS");
      }, function () {
        // succesful upload
        task.snapshot.ref.getMetadata().then(function (metadata) {
          return processImage(metadata, file);
        }).then(function (url) {
          dispatch({
            type: "updateFile",
            payload: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_7__["default"])({}, file, {
              downloadUrl: url
            })
          });
          console.log("HIT 3, URL");
        });
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_13__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 163
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_14__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }))), state.files && _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(state.files).map(function (fileIndex) {
    var file = state.files[fileIndex];
    console.log(file, "FILE IN RENDER HERERERERER");
    return react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("div", {
      key: file.id,
      className: "jsx-2441915485",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 176
      },
      __self: this
    }, file.name, react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement("p", {
      className: "jsx-2441915485",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, "helloooooo"));
  }), react__WEBPACK_IMPORTED_MODULE_9___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_8___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxTGtCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaW5pc2hlZEZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmluaXNoZWRGaWxlXCI7XG5cbmNvbnN0IEZpbGVDb252ZXJzaW9uID0gKHsgZmlyZWJhc2UgfSkgPT4ge1xuICAvLyBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgLy8gICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gIC8vICAgICBjYXNlIFwic2V0RmlsZXNcIjpcbiAgLy8gICAgICAgcmV0dXJuIHsgZmlsZXM6IFsuLi5zdGF0ZS5maWxlcywgYWN0aW9uLnBheWxvYWRdIH07XG4gIC8vICAgICBkZWZhdWx0OlxuICAvLyAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgLy8gICB9XG4gIC8vIH07XG5cbiAgY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgICAgY2FzZSBcInNldEZpbGVzXCI6IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBmaWxlczoge1xuICAgICAgICAgICAgLi4uc3RhdGUuZmlsZXMsXG4gICAgICAgICAgICBbYWN0aW9uLnBheWxvYWQuaWRdOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY2FzZSBcInVwZGF0ZUZpbGVcIjoge1xuICAgICAgICBzdGF0ZS5maWxlc1thY3Rpb24ucGF5bG9hZC5pZF0gPSB7XG4gICAgICAgICAgLi4uc3RhdGUuZmlsZXNbYWN0aW9uLnBheWxvYWQuaWRdLFxuICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4uc3RhdGVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7IGZpbGVzOiB7fSB9KTtcbiAgY29uc3QgW2Zyb21GaWxlLCBzZXRGcm9tRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvRmlsZSwgc2V0VG9GaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudERvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICBzd2l0Y2ggKGN1cnJlbnREb21haW4pIHtcbiAgICAgIGNhc2UgY3VycmVudERvbWFpbjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJKUEdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIlBOR1wiKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHByb2Nlc3NJbWFnZSA9IGFzeW5jIChmaWxlTWV0YURhdGEsIG9yaWdpbmFsRmlsZSkgPT4ge1xuICAgIC8vIHByb2Nlc3MuZW52LkZJUkVCQVNFX0NMT1VEX0lNQUdFX0FQSVxuICAgIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9maWxlLWNvbnZlcnRlci1iZGRmOC91cy1jZW50cmFsMS9wcm9jZXNzSW1hZ2VcbiAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaW1hZ2VEYXRhOiBmaWxlTWV0YURhdGEsXG4gICAgICBmcm9tRmlsZSxcbiAgICAgIHRvRmlsZVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgZGF0YSB9ID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xPVURfSU1BR0VfQVBJLFxuICAgICAgICBwYXlsb2FkLFxuICAgICAgICB7XG4gICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBjb25zb2xlLmxvZyhcIkhJVCAyXCIpO1xuICAgICAgcmV0dXJuIGRhdGFbMF0ubWV0YWRhdGEubWVkaWFMaW5rO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9uRHJvcCA9IChhY2NlcHRlZEZpbGVzLCByZWplY3RlZEZpbGVzKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IGZpcmViYXNlLnN0b3JhZ2UoKS5yZWYoKTtcbiAgICBhY2NlcHRlZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhmaWxlLCBcIkZJTEVcIik7XG4gICAgICBmaWxlLmlkID0gRGF0ZS5ub3coKTtcbiAgICAgIGZpbGUuZG93bmxvYWRVcmwgPSBudWxsO1xuICAgICAgZmlsZS5wZXJjZW50YWdlID0gMDtcbiAgICAgIGNvbnN0IG1ldGFEYXRhID0ge1xuICAgICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgIGxhc3RNb2RpZmllZDogYCR7bmV3IERhdGUoZmlsZS5sYXN0TW9kaWZpZWQpLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgICBcImVuLVVTXCJcbiAgICAgICAgKX0gJHtuZXcgRGF0ZShmaWxlLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIil9YFxuICAgICAgfTtcblxuICAgICAgY29uc3QgdGFzayA9IHN0b3JhZ2VSZWYuY2hpbGQoZmlsZS5uYW1lKS5wdXQoZmlsZSwgbWV0YURhdGEpO1xuXG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwic2V0RmlsZXNcIixcbiAgICAgICAgcGF5bG9hZDogZmlsZVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHRhc2tcbiAgICAgIC8vICAgLnRoZW4oaW1hZ2VEYXRhID0+IGltYWdlRGF0YS5tZXRhZGF0YSlcbiAgICAgIC8vICAgLnRoZW4obWV0YWRhdGEgPT4gcHJvY2Vzc0ltYWdlKG1ldGFkYXRhLCBmaWxlKSlcbiAgICAgIC8vICAgLnRoZW4oZG93bmxvYWRVcmwgPT4ge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGRvd25sb2FkVXJsLCBcIjNcIik7XG4gICAgICAvLyAgIH0pXG4gICAgICAvLyAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyLCBcImVyclwiKSk7XG5cbiAgICAgIHRhc2sub24oXG4gICAgICAgIFwic3RhdGVfY2hhbmdlZFwiLFxuICAgICAgICBzbmFwc2hvdCA9PiB7XG4gICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhwZXJjZW50YWdlLCBcIkhJVCAxXCIpO1xuICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgIHR5cGU6IFwidXBkYXRlRmlsZVwiLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAuLi5maWxlLFxuICAgICAgICAgICAgICBwZXJjZW50YWdlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIGVycm9yKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJFUlIgU05BUFNcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHN1Y2Nlc2Z1bCB1cGxvYWRcbiAgICAgICAgICB0YXNrLnNuYXBzaG90LnJlZlxuICAgICAgICAgICAgLmdldE1ldGFkYXRhKClcbiAgICAgICAgICAgIC50aGVuKG1ldGFkYXRhID0+IHByb2Nlc3NJbWFnZShtZXRhZGF0YSwgZmlsZSkpXG4gICAgICAgICAgICAudGhlbih1cmwgPT4ge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJ1cGRhdGVGaWxlXCIsXG4gICAgICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgICAgLi4uZmlsZSxcbiAgICAgICAgICAgICAgICAgIGRvd25sb2FkVXJsOiB1cmxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiSElUIDMsIFVSTFwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmlsZS1jb252ZXJzaW9uLXdyYXBwZXJcIj5cbiAgICAgIDxoMT5GaWxlIENvbnZlcnNpb24gQXBwPC9oMT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VXBsb2FkIG9uRHJvcD17b25Ecm9wfSAvPlxuICAgICAgICA8ZGl2PmZpbGUgdHlwZXMgaGVyZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtcGlja2VyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgc2VsZWN0ZWRGaWxlPXtmcm9tRmlsZX0gb25TZWxlY3Q9e3NldEZyb21GaWxlfSAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIyNHB4XCIgfX0gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgc2VsZWN0ZWRGaWxlPXt0b0ZpbGV9IG9uU2VsZWN0PXtzZXRUb0ZpbGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7LyogPGRpdj5kb3dubG9hZCBoZXJlPC9kaXY+ICovfVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAge3N0YXRlLmZpbGVzICYmXG4gICAgICAgIE9iamVjdC5rZXlzKHN0YXRlLmZpbGVzKS5tYXAoZmlsZUluZGV4ID0+IHtcbiAgICAgICAgICBsZXQgZmlsZSA9IHN0YXRlLmZpbGVzW2ZpbGVJbmRleF07XG4gICAgICAgICAgY29uc29sZS5sb2coZmlsZSwgXCJGSUxFIElOIFJFTkRFUiBIRVJFUkVSRVJFUlwiKTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2ZpbGUuaWR9PlxuICAgICAgICAgICAgICB7ZmlsZS5uYW1lfVxuICAgICAgICAgICAgICA8cD5oZWxsb29vb29vPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIG1hcmdpbjogNzBweCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1NiwgMTUzLCAyMzYsIDApO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjIsIDQ1LCA2MSwgMC4xKSAwcHggMXB4IDJweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLXBpY2tlci13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlQ29udmVyc2lvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.03ad2b03625f87aa8ede.hot-update.js.map