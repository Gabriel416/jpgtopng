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
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/SelectInput */ "./components/SelectInput.js");
/* harmony import */ var _components_FinishedFile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/FinishedFile */ "./components/FinishedFile.js");




var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";










var FileConversion = function FileConversion(_ref) {
  var firebase = _ref.firebase;

  var reducer = function reducer(state, action) {
    switch (action.type) {
      case "increment":
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
            count: state.count + 1,
            loading: false
          });
        }

      case "decrement":
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
            count: state.count - 1,
            loading: false
          });
        }

      case "loading":
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, state, {
            loading: true
          });
        }

      default:
        {
          return state;
        }
    }
  };

  initialState = {
    files: []
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_5__["useReducer"])(reducer, initialState),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      fromFile = _useState4[0],
      setFromFile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      toFile = _useState6[0],
      setToFile = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
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

  var processImage = function processImage(fileMetaData, originalFile) {
    // process.env.FIREBASE_CLOUD_IMAGE_API
    // http://localhost:5000/file-converter-bddf8/us-central1/processImage
    var payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_1___default()({
      imageData: fileMetaData,
      fromFile: fromFile,
      toFile: toFile
    });

    axios__WEBPACK_IMPORTED_MODULE_8___default.a.post("https://us-central1-file-converter-bddf8.cloudfunctions.net/processImage", payload, {
      headers: {
        "Content-Type": "application/json"
      }
    }).then(function (response) {
      var transformedFile = response.data[0].metadata.mediaLink;
      var updatedeFileRecord = files.find(function (file) {
        return file.fileId === originalFile.fileId;
      });
      var newFilesArray = files.filter(function (file) {
        return file.fileId !== originalFile.fileId;
      }); // setFiles([
      //   ...newFilesArray,
      //   {
      //     ...updatedeFileRecord,
      //     downloadUrl: transformedFile
      //   }
      // ]);
      // console.log(files, "FILES FINISHED");
    }).catch(function (error) {
      console.log(error, "ERROR");
    });
    return;
  };

  var onDrop = function onDrop(acceptedFiles, rejectedFiles) {
    var storageRef = firebase.storage().ref(); // setFiles(prevFiles => {
    //   return [...files, acceptedFiles];
    // });

    console.log(files, "RIGHT AFTER UPDATE");
    acceptedFiles.forEach(function (file) {
      console.log(file, "FILE");
      file.fileId = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()();
      file.downloadUrl = null;
      var metaData = {
        contentType: file.type,
        size: file.size,
        lastModified: "".concat(new Date(file.lastModified).toLocaleDateString("en-US"), " ").concat(new Date(file.lastModified).toLocaleTimeString("en-US"))
      };
      var task = storageRef.child(file.name).put(file, metaData);
      task.on("state_changed", function progress(snapshot) {
        var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100; // setFiles(prevFiles => [
        //   ...prevFiles,
        //   {
        //     ...file,
        //     percentage
        //   }
        // ]);
      }, function error(err) {
        console.log(err, "ERR SNAPS");
      }, function () {
        // succesful upload
        task.snapshot.ref.getMetadata().then(function (metadata) {
          return processImage(metadata, file);
        });
      });
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_9__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_7__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_10__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146
    },
    __self: this
  }, "download here")), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_4___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtSmtCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaW5pc2hlZEZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmluaXNoZWRGaWxlXCI7XG5cbmNvbnN0IEZpbGVDb252ZXJzaW9uID0gKHsgZmlyZWJhc2UgfSkgPT4ge1xuICBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFwiaW5jcmVtZW50XCI6IHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNvdW50OiBzdGF0ZS5jb3VudCArIDEsIGxvYWRpbmc6IGZhbHNlIH07XG4gICAgICB9XG4gICAgICBjYXNlIFwiZGVjcmVtZW50XCI6IHtcbiAgICAgICAgcmV0dXJuIHsgLi4uc3RhdGUsIGNvdW50OiBzdGF0ZS5jb3VudCAtIDEsIGxvYWRpbmc6IGZhbHNlIH07XG4gICAgICB9XG4gICAgICBjYXNlIFwibG9hZGluZ1wiOiB7XG4gICAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBsb2FkaW5nOiB0cnVlIH07XG4gICAgICB9XG4gICAgICBkZWZhdWx0OiB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG4gIGluaXRpYWxTdGF0ZSA9IHtcbiAgICBmaWxlczogW11cbiAgfTtcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSk7XG5cbiAgY29uc3QgW2ZpbGVzLCBzZXRGaWxlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtmcm9tRmlsZSwgc2V0RnJvbUZpbGVdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0b0ZpbGUsIHNldFRvRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnREb21haW4gPSB3aW5kb3cubG9jYXRpb24uaG9zdG5hbWU7XG4gICAgc3dpdGNoIChjdXJyZW50RG9tYWluKSB7XG4gICAgICBjYXNlIGN1cnJlbnREb21haW46XG4gICAgICAgIHNldEZyb21GaWxlKFwiSlBHXCIpO1xuICAgICAgICBzZXRUb0ZpbGUoXCJQTkdcIik7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBwcm9jZXNzSW1hZ2UgPSAoZmlsZU1ldGFEYXRhLCBvcmlnaW5hbEZpbGUpID0+IHtcbiAgICAvLyBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTE9VRF9JTUFHRV9BUElcbiAgICAvLyBodHRwOi8vbG9jYWxob3N0OjUwMDAvZmlsZS1jb252ZXJ0ZXItYmRkZjgvdXMtY2VudHJhbDEvcHJvY2Vzc0ltYWdlXG4gICAgY29uc3QgcGF5bG9hZCA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIGltYWdlRGF0YTogZmlsZU1ldGFEYXRhLFxuICAgICAgZnJvbUZpbGUsXG4gICAgICB0b0ZpbGVcbiAgICB9KTtcbiAgICBheGlvc1xuICAgICAgLnBvc3QocHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xPVURfSU1BR0VfQVBJLCBwYXlsb2FkLCB7XG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxuICAgICAgfSlcbiAgICAgIC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IHRyYW5zZm9ybWVkRmlsZSA9IHJlc3BvbnNlLmRhdGFbMF0ubWV0YWRhdGEubWVkaWFMaW5rO1xuXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRlRmlsZVJlY29yZCA9IGZpbGVzLmZpbmQoXG4gICAgICAgICAgZmlsZSA9PiBmaWxlLmZpbGVJZCA9PT0gb3JpZ2luYWxGaWxlLmZpbGVJZFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBuZXdGaWxlc0FycmF5ID0gZmlsZXMuZmlsdGVyKFxuICAgICAgICAgIGZpbGUgPT4gZmlsZS5maWxlSWQgIT09IG9yaWdpbmFsRmlsZS5maWxlSWRcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzZXRGaWxlcyhbXG4gICAgICAgIC8vICAgLi4ubmV3RmlsZXNBcnJheSxcbiAgICAgICAgLy8gICB7XG4gICAgICAgIC8vICAgICAuLi51cGRhdGVkZUZpbGVSZWNvcmQsXG4gICAgICAgIC8vICAgICBkb3dubG9hZFVybDogdHJhbnNmb3JtZWRGaWxlXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyBdKTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWxlcywgXCJGSUxFUyBGSU5JU0hFRFwiKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IsIFwiRVJST1JcIik7XG4gICAgICB9KTtcbiAgICByZXR1cm47XG4gIH07XG5cbiAgY29uc3Qgb25Ecm9wID0gKGFjY2VwdGVkRmlsZXMsIHJlamVjdGVkRmlsZXMpID0+IHtcbiAgICBjb25zdCBzdG9yYWdlUmVmID0gZmlyZWJhc2Uuc3RvcmFnZSgpLnJlZigpO1xuICAgIC8vIHNldEZpbGVzKHByZXZGaWxlcyA9PiB7XG4gICAgLy8gICByZXR1cm4gWy4uLmZpbGVzLCBhY2NlcHRlZEZpbGVzXTtcbiAgICAvLyB9KTtcbiAgICBjb25zb2xlLmxvZyhmaWxlcywgXCJSSUdIVCBBRlRFUiBVUERBVEVcIik7XG4gICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coZmlsZSwgXCJGSUxFXCIpO1xuICAgICAgZmlsZS5maWxlSWQgPSBEYXRlLm5vdygpO1xuICAgICAgZmlsZS5kb3dubG9hZFVybCA9IG51bGw7XG4gICAgICBjb25zdCBtZXRhRGF0YSA9IHtcbiAgICAgICAgY29udGVudFR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICBsYXN0TW9kaWZpZWQ6IGAke25ldyBEYXRlKGZpbGUubGFzdE1vZGlmaWVkKS50b0xvY2FsZURhdGVTdHJpbmcoXG4gICAgICAgICAgXCJlbi1VU1wiXG4gICAgICAgICl9ICR7bmV3IERhdGUoZmlsZS5sYXN0TW9kaWZpZWQpLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpfWBcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRhc2sgPSBzdG9yYWdlUmVmLmNoaWxkKGZpbGUubmFtZSkucHV0KGZpbGUsIG1ldGFEYXRhKTtcblxuICAgICAgdGFzay5vbihcbiAgICAgICAgXCJzdGF0ZV9jaGFuZ2VkXCIsXG4gICAgICAgIGZ1bmN0aW9uIHByb2dyZXNzKHNuYXBzaG90KSB7XG4gICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcbiAgICAgICAgICAvLyBzZXRGaWxlcyhwcmV2RmlsZXMgPT4gW1xuICAgICAgICAgIC8vICAgLi4ucHJldkZpbGVzLFxuICAgICAgICAgIC8vICAge1xuICAgICAgICAgIC8vICAgICAuLi5maWxlLFxuICAgICAgICAgIC8vICAgICBwZXJjZW50YWdlXG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uIGVycm9yKGVycikge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVyciwgXCJFUlIgU05BUFNcIik7XG4gICAgICAgIH0sXG4gICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIHN1Y2Nlc2Z1bCB1cGxvYWRcbiAgICAgICAgICB0YXNrLnNuYXBzaG90LnJlZlxuICAgICAgICAgICAgLmdldE1ldGFkYXRhKClcbiAgICAgICAgICAgIC50aGVuKG1ldGFkYXRhID0+IHByb2Nlc3NJbWFnZShtZXRhZGF0YSwgZmlsZSkpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmlsZS1jb252ZXJzaW9uLXdyYXBwZXJcIj5cbiAgICAgIDxoMT5GaWxlIENvbnZlcnNpb24gQXBwPC9oMT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VXBsb2FkIG9uRHJvcD17b25Ecm9wfSAvPlxuICAgICAgICA8ZGl2PmZpbGUgdHlwZXMgaGVyZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtcGlja2VyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgc2VsZWN0ZWRGaWxlPXtmcm9tRmlsZX0gb25TZWxlY3Q9e3NldEZyb21GaWxlfSAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIyNHB4XCIgfX0gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgc2VsZWN0ZWRGaWxlPXt0b0ZpbGV9IG9uU2VsZWN0PXtzZXRUb0ZpbGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PmRvd25sb2FkIGhlcmU8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgbWFyZ2luOiA3MHB4IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDU2LCAxNTMsIDIzNiwgMCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyMiwgNDUsIDYxLCAwLjEpIDBweCAxcHggMnB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtcGlja2VyLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVDb252ZXJzaW9uO1xuIl19 */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.da840705c543a3e9f6af.hot-update.js.map