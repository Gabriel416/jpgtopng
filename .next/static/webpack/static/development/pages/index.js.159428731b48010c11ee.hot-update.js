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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js");
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
    sessionStorage.setItem("files", []);

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
      console.log(state, "state in response from service"); // const updatedeFileRecord = files.find(
      //   file => file.fileId === originalFile.fileId
      // );
      // const newFilesArray = files.filter(
      //   file => file.fileId !== originalFile.fileId
      // );
      // setFiles([
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
      dispatch({
        type: "setFiles",
        payload: [].concat(Object(_babel_runtime_corejs2_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.files), [Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_4__["default"])({}, file)])
      });
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
        var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
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
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_10__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_7__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_8__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_11__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "download here")), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_5___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SWtCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaW5pc2hlZEZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmluaXNoZWRGaWxlXCI7XG5cbmNvbnN0IEZpbGVDb252ZXJzaW9uID0gKHsgZmlyZWJhc2UgfSkgPT4ge1xuICBjb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICBjb25zb2xlLmxvZyhzdGF0ZSwgYWN0aW9uLCBcInJlZHVjZXIgY2FsbFwiKTtcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICBjYXNlIFwic2V0RmlsZXNcIjoge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgIGZpbGVzOiBhY3Rpb24ucGF5bG9hZFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgZGVmYXVsdDoge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCB7IGZpbGVzOiBbXSB9KTtcblxuICAvLyBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zyb21GaWxlLCBzZXRGcm9tRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvRmlsZSwgc2V0VG9GaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudERvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwiZmlsZXNcIiwgW10pO1xuICAgIHN3aXRjaCAoY3VycmVudERvbWFpbikge1xuICAgICAgY2FzZSBjdXJyZW50RG9tYWluOlxuICAgICAgICBzZXRGcm9tRmlsZShcIkpQR1wiKTtcbiAgICAgICAgc2V0VG9GaWxlKFwiUE5HXCIpO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgY29uc3QgcHJvY2Vzc0ltYWdlID0gKGZpbGVNZXRhRGF0YSwgb3JpZ2luYWxGaWxlKSA9PiB7XG4gICAgLy8gcHJvY2Vzcy5lbnYuRklSRUJBU0VfQ0xPVURfSU1BR0VfQVBJXG4gICAgLy8gaHR0cDovL2xvY2FsaG9zdDo1MDAwL2ZpbGUtY29udmVydGVyLWJkZGY4L3VzLWNlbnRyYWwxL3Byb2Nlc3NJbWFnZVxuICAgIGNvbnN0IHBheWxvYWQgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpbWFnZURhdGE6IGZpbGVNZXRhRGF0YSxcbiAgICAgIGZyb21GaWxlLFxuICAgICAgdG9GaWxlXG4gICAgfSk7XG4gICAgYXhpb3NcbiAgICAgIC5wb3N0KHByb2Nlc3MuZW52LkZJUkVCQVNFX0NMT1VEX0lNQUdFX0FQSSwgcGF5bG9hZCwge1xuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICAgIH0pXG4gICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICBjb25zdCB0cmFuc2Zvcm1lZEZpbGUgPSByZXNwb25zZS5kYXRhWzBdLm1ldGFkYXRhLm1lZGlhTGluaztcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUsIFwic3RhdGUgaW4gcmVzcG9uc2UgZnJvbSBzZXJ2aWNlXCIpO1xuICAgICAgICAvLyBjb25zdCB1cGRhdGVkZUZpbGVSZWNvcmQgPSBmaWxlcy5maW5kKFxuICAgICAgICAvLyAgIGZpbGUgPT4gZmlsZS5maWxlSWQgPT09IG9yaWdpbmFsRmlsZS5maWxlSWRcbiAgICAgICAgLy8gKTtcbiAgICAgICAgLy8gY29uc3QgbmV3RmlsZXNBcnJheSA9IGZpbGVzLmZpbHRlcihcbiAgICAgICAgLy8gICBmaWxlID0+IGZpbGUuZmlsZUlkICE9PSBvcmlnaW5hbEZpbGUuZmlsZUlkXG4gICAgICAgIC8vICk7XG5cbiAgICAgICAgLy8gc2V0RmlsZXMoW1xuICAgICAgICAvLyAgIC4uLm5ld0ZpbGVzQXJyYXksXG4gICAgICAgIC8vICAge1xuICAgICAgICAvLyAgICAgLi4udXBkYXRlZGVGaWxlUmVjb3JkLFxuICAgICAgICAvLyAgICAgZG93bmxvYWRVcmw6IHRyYW5zZm9ybWVkRmlsZVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gXSk7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coZmlsZXMsIFwiRklMRVMgRklOSVNIRURcIik7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yLCBcIkVSUk9SXCIpO1xuICAgICAgfSk7XG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIGNvbnN0IG9uRHJvcCA9IChhY2NlcHRlZEZpbGVzLCByZWplY3RlZEZpbGVzKSA9PiB7XG4gICAgY29uc3Qgc3RvcmFnZVJlZiA9IGZpcmViYXNlLnN0b3JhZ2UoKS5yZWYoKTtcbiAgICBhY2NlcHRlZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBkaXNwYXRjaCh7XG4gICAgICAgIHR5cGU6IFwic2V0RmlsZXNcIixcbiAgICAgICAgcGF5bG9hZDogW1xuICAgICAgICAgIC4uLnN0YXRlLmZpbGVzLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIC4uLmZpbGVcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coZmlsZSwgXCJGSUxFXCIpO1xuICAgICAgZmlsZS5maWxlSWQgPSBEYXRlLm5vdygpO1xuICAgICAgZmlsZS5kb3dubG9hZFVybCA9IG51bGw7XG4gICAgICBjb25zdCBtZXRhRGF0YSA9IHtcbiAgICAgICAgY29udGVudFR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICBsYXN0TW9kaWZpZWQ6IGAke25ldyBEYXRlKGZpbGUubGFzdE1vZGlmaWVkKS50b0xvY2FsZURhdGVTdHJpbmcoXG4gICAgICAgICAgXCJlbi1VU1wiXG4gICAgICAgICl9ICR7bmV3IERhdGUoZmlsZS5sYXN0TW9kaWZpZWQpLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpfWBcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRhc2sgPSBzdG9yYWdlUmVmLmNoaWxkKGZpbGUubmFtZSkucHV0KGZpbGUsIG1ldGFEYXRhKTtcblxuICAgICAgdGFzay5vbihcbiAgICAgICAgXCJzdGF0ZV9jaGFuZ2VkXCIsXG4gICAgICAgIGZ1bmN0aW9uIHByb2dyZXNzKHNuYXBzaG90KSB7XG4gICAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPVxuICAgICAgICAgICAgKHNuYXBzaG90LmJ5dGVzVHJhbnNmZXJyZWQgLyBzbmFwc2hvdC50b3RhbEJ5dGVzKSAqIDEwMDtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLCBcIkVSUiBTTkFQU1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gc3VjY2VzZnVsIHVwbG9hZFxuICAgICAgICAgIHRhc2suc25hcHNob3QucmVmXG4gICAgICAgICAgICAuZ2V0TWV0YWRhdGEoKVxuICAgICAgICAgICAgLnRoZW4obWV0YWRhdGEgPT4gcHJvY2Vzc0ltYWdlKG1ldGFkYXRhLCBmaWxlKSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmaWxlLWNvbnZlcnNpb24td3JhcHBlclwiPlxuICAgICAgPGgxPkZpbGUgQ29udmVyc2lvbiBBcHA8L2gxPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxVcGxvYWQgb25Ecm9wPXtvbkRyb3B9IC8+XG4gICAgICAgIDxkaXY+ZmlsZSB0eXBlcyBoZXJlPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1waWNrZXItd3JhcHBlclwiPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBzZWxlY3RlZEZpbGU9e2Zyb21GaWxlfSBvblNlbGVjdD17c2V0RnJvbUZpbGV9IC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI0cHhcIiB9fSBpY29uPXtmYUFycm93UmlnaHR9IC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBzZWxlY3RlZEZpbGU9e3RvRmlsZX0gb25TZWxlY3Q9e3NldFRvRmlsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+ZG93bmxvYWQgaGVyZTwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBtYXJnaW46IDcwcHggYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTYsIDE1MywgMjM2LCAwKTtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDIyLCA0NSwgNjEsIDAuMSkgMHB4IDFweCAycHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1waWNrZXItd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUNvbnZlcnNpb247XG4iXX0= */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.159428731b48010c11ee.hot-update.js.map