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
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/SelectInput */ "./components/SelectInput.js");
/* harmony import */ var _components_FinishedFile__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/FinishedFile */ "./components/FinishedFile.js");





var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";










var FileConversion = function FileConversion(_ref) {
  var firebase = _ref.firebase;

  var reducer = function reducer(state, action) {
    console.log(state, action, "reducer call");

    switch (action.type) {
      case "setFiles":
        {
          return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, state, {
            files: action.payload
          });
        }

      default:
        {
          return state;
        }
    }
  };

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_6__["useReducer"])(reducer, {
    files: []
  }),
      _useReducer2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1]; // const [files, setFiles] = useState([]);


  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState, 2),
      fromFile = _useState2[0],
      setFromFile = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useState3, 2),
      toFile = _useState4[0],
      setToFile = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])(function () {
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
    var payload = _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_2___default()({
      imageData: fileMetaData,
      fromFile: fromFile,
      toFile: toFile
    });

    axios__WEBPACK_IMPORTED_MODULE_9___default.a.post("https://us-central1-file-converter-bddf8.cloudfunctions.net/processImage", payload, {
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
    var storageRef = firebase.storage().ref();
    acceptedFiles.forEach(function (file) {
      console.log(file, "FILE");
      file.fileId = _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_1___default()();
      file.downloadUrl = null;
      var metaData = {
        contentType: file.type,
        size: file.size,
        lastModified: "".concat(new Date(file.lastModified).toLocaleDateString("en-US"), " ").concat(new Date(file.lastModified).toLocaleTimeString("en-US"))
      };
      var task = storageRef.child(file.name).put(file, metaData);
      task.on("state_changed", function progress(snapshot) {
        var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log(state, "state in upload");
        dispatch({
          type: "setFiles",
          payload: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(state.files), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, file, {
            percentage: percentage
          })])
        }); // setFiles(prevFiles => [
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

  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, "download here")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSmtCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaW5pc2hlZEZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmluaXNoZWRGaWxlXCI7XG5cbmNvbnN0IEZpbGVDb252ZXJzaW9uID0gKHsgZmlyZWJhc2UgfSkgPT4ge1xuICBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSwgYWN0aW9uLCBcInJlZHVjZXIgY2FsbFwiKTtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFwic2V0RmlsZXNcIjoge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbGVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7IGZpbGVzOiBbXSB9KTtcblxuICAvLyBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zyb21GaWxlLCBzZXRGcm9tRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvRmlsZSwgc2V0VG9GaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudERvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICBzd2l0Y2ggKGN1cnJlbnREb21haW4pIHtcbiAgICAgIGNhc2UgY3VycmVudERvbWFpbjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJKUEdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIlBOR1wiKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHByb2Nlc3NJbWFnZSA9IChmaWxlTWV0YURhdGEsIG9yaWdpbmFsRmlsZSkgPT4ge1xuICAgIC8vIHByb2Nlc3MuZW52LkZJUkVCQVNFX0NMT1VEX0lNQUdFX0FQSVxuICAgIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9maWxlLWNvbnZlcnRlci1iZGRmOC91cy1jZW50cmFsMS9wcm9jZXNzSW1hZ2VcbiAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaW1hZ2VEYXRhOiBmaWxlTWV0YURhdGEsXG4gICAgICBmcm9tRmlsZSxcbiAgICAgIHRvRmlsZVxuICAgIH0pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChwcm9jZXNzLmVudi5GSVJFQkFTRV9DTE9VRF9JTUFHRV9BUEksIHBheWxvYWQsIHtcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRGaWxlID0gcmVzcG9uc2UuZGF0YVswXS5tZXRhZGF0YS5tZWRpYUxpbms7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZGVGaWxlUmVjb3JkID0gZmlsZXMuZmluZChcbiAgICAgICAgICBmaWxlID0+IGZpbGUuZmlsZUlkID09PSBvcmlnaW5hbEZpbGUuZmlsZUlkXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5ld0ZpbGVzQXJyYXkgPSBmaWxlcy5maWx0ZXIoXG4gICAgICAgICAgZmlsZSA9PiBmaWxlLmZpbGVJZCAhPT0gb3JpZ2luYWxGaWxlLmZpbGVJZFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNldEZpbGVzKFtcbiAgICAgICAgLy8gICAuLi5uZXdGaWxlc0FycmF5LFxuICAgICAgICAvLyAgIHtcbiAgICAgICAgLy8gICAgIC4uLnVwZGF0ZWRlRmlsZVJlY29yZCxcbiAgICAgICAgLy8gICAgIGRvd25sb2FkVXJsOiB0cmFuc2Zvcm1lZEZpbGVcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIF0pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzLCBcIkZJTEVTIEZJTklTSEVEXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgXCJFUlJPUlwiKTtcbiAgICAgIH0pO1xuICAgIHJldHVybjtcbiAgfTtcblxuICBjb25zdCBvbkRyb3AgPSAoYWNjZXB0ZWRGaWxlcywgcmVqZWN0ZWRGaWxlcykgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCk7XG4gICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coZmlsZSwgXCJGSUxFXCIpO1xuICAgICAgZmlsZS5maWxlSWQgPSBEYXRlLm5vdygpO1xuICAgICAgZmlsZS5kb3dubG9hZFVybCA9IG51bGw7XG4gICAgICBjb25zdCBtZXRhRGF0YSA9IHtcbiAgICAgICAgY29udGVudFR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICBsYXN0TW9kaWZpZWQ6IGAke25ldyBEYXRlKGZpbGUubGFzdE1vZGlmaWVkKS50b0xvY2FsZURhdGVTdHJpbmcoXG4gICAgICAgICAgXCJlbi1VU1wiXG4gICAgICAgICl9ICR7bmV3IERhdGUoZmlsZS5sYXN0TW9kaWZpZWQpLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpfWBcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRhc2sgPSBzdG9yYWdlUmVmLmNoaWxkKGZpbGUubmFtZSkucHV0KGZpbGUsIG1ldGFEYXRhKTtcblxuICAgICAgdGFzay5vbihcbiAgICAgICAgXCJzdGF0ZV9jaGFuZ2VkXCIsXG4gICAgICAgIGZ1bmN0aW9uIHByb2dyZXNzKHNuYXBzaG90KSB7XG4gICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcbiAgICAgICAgICBjb25zb2xlLmxvZyhzdGF0ZSwgXCJzdGF0ZSBpbiB1cGxvYWRcIik7XG4gICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgdHlwZTogXCJzZXRGaWxlc1wiLFxuICAgICAgICAgICAgcGF5bG9hZDogW1xuICAgICAgICAgICAgICAuLi5zdGF0ZS5maWxlcyxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC4uLmZpbGUsXG4gICAgICAgICAgICAgICAgcGVyY2VudGFnZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gc2V0RmlsZXMocHJldkZpbGVzID0+IFtcbiAgICAgICAgICAvLyAgIC4uLnByZXZGaWxlcyxcbiAgICAgICAgICAvLyAgIHtcbiAgICAgICAgICAvLyAgICAgLi4uZmlsZSxcbiAgICAgICAgICAvLyAgICAgcGVyY2VudGFnZVxuICAgICAgICAgIC8vICAgfVxuICAgICAgICAgIC8vIF0pO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbiBlcnJvcihlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIsIFwiRVJSIFNOQVBTXCIpO1xuICAgICAgICB9LFxuICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAvLyBzdWNjZXNmdWwgdXBsb2FkXG4gICAgICAgICAgdGFzay5zbmFwc2hvdC5yZWZcbiAgICAgICAgICAgIC5nZXRNZXRhZGF0YSgpXG4gICAgICAgICAgICAudGhlbihtZXRhZGF0YSA9PiBwcm9jZXNzSW1hZ2UobWV0YWRhdGEsIGZpbGUpKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxtYWluIGNsYXNzTmFtZT1cImZpbGUtY29udmVyc2lvbi13cmFwcGVyXCI+XG4gICAgICA8aDE+RmlsZSBDb252ZXJzaW9uIEFwcDwvaDE+XG4gICAgICA8c2VjdGlvbj5cbiAgICAgICAgPFVwbG9hZCBvbkRyb3A9e29uRHJvcH0gLz5cbiAgICAgICAgPGRpdj5maWxlIHR5cGVzIGhlcmU8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaWxlLXBpY2tlci13cmFwcGVyXCI+XG4gICAgICAgICAgPFNlbGVjdElucHV0IHNlbGVjdGVkRmlsZT17ZnJvbUZpbGV9IG9uU2VsZWN0PXtzZXRGcm9tRmlsZX0gLz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gc3R5bGU9e3sgZm9udFNpemU6IFwiMjRweFwiIH19IGljb249e2ZhQXJyb3dSaWdodH0gLz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPFNlbGVjdElucHV0IHNlbGVjdGVkRmlsZT17dG9GaWxlfSBvblNlbGVjdD17c2V0VG9GaWxlfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5kb3dubG9hZCBoZXJlPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIG1haW4ge1xuICAgICAgICAgIG1hcmdpbjogNzBweCBhdXRvO1xuICAgICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSg1NiwgMTUzLCAyMzYsIDApO1xuICAgICAgICAgIGJveC1zaGFkb3c6IHJnYmEoMjIsIDQ1LCA2MSwgMC4xKSAwcHggMXB4IDJweCAwcHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlLXBpY2tlci13cmFwcGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xuICAgICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L21haW4+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWxlQ29udmVyc2lvbjtcbiJdfQ== */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.039024ddf699f6b97f8d.hot-update.js.map