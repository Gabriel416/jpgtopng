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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/SelectInput */ "./components/SelectInput.js");
/* harmony import */ var _components_FinishedFile__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/FinishedFile */ "./components/FinishedFile.js");



var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";










var FileConversion = function FileConversion(_ref) {
  var firebase = _ref.firebase;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState3, 2),
      fromFile = _useState4[0],
      setFromFile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useState5, 2),
      toFile = _useState6[0],
      setToFile = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
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

    axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("https://us-central1-file-converter-bddf8.cloudfunctions.net/processImage", payload, {
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

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_8__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_6__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_9__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }, "download here")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_3___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SGtCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaW5pc2hlZEZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmluaXNoZWRGaWxlXCI7XG5cbmNvbnN0IEZpbGVDb252ZXJzaW9uID0gKHsgZmlyZWJhc2UgfSkgPT4ge1xuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zyb21GaWxlLCBzZXRGcm9tRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvRmlsZSwgc2V0VG9GaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudERvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICBzd2l0Y2ggKGN1cnJlbnREb21haW4pIHtcbiAgICAgIGNhc2UgY3VycmVudERvbWFpbjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJKUEdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIlBOR1wiKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHByb2Nlc3NJbWFnZSA9IChmaWxlTWV0YURhdGEsIG9yaWdpbmFsRmlsZSkgPT4ge1xuICAgIC8vIHByb2Nlc3MuZW52LkZJUkVCQVNFX0NMT1VEX0lNQUdFX0FQSVxuICAgIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9maWxlLWNvbnZlcnRlci1iZGRmOC91cy1jZW50cmFsMS9wcm9jZXNzSW1hZ2VcbiAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaW1hZ2VEYXRhOiBmaWxlTWV0YURhdGEsXG4gICAgICBmcm9tRmlsZSxcbiAgICAgIHRvRmlsZVxuICAgIH0pO1xuICAgIGF4aW9zXG4gICAgICAucG9zdChwcm9jZXNzLmVudi5GSVJFQkFTRV9DTE9VRF9JTUFHRV9BUEksIHBheWxvYWQsIHtcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9XG4gICAgICB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc3QgdHJhbnNmb3JtZWRGaWxlID0gcmVzcG9uc2UuZGF0YVswXS5tZXRhZGF0YS5tZWRpYUxpbms7XG5cbiAgICAgICAgY29uc3QgdXBkYXRlZGVGaWxlUmVjb3JkID0gZmlsZXMuZmluZChcbiAgICAgICAgICBmaWxlID0+IGZpbGUuZmlsZUlkID09PSBvcmlnaW5hbEZpbGUuZmlsZUlkXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IG5ld0ZpbGVzQXJyYXkgPSBmaWxlcy5maWx0ZXIoXG4gICAgICAgICAgZmlsZSA9PiBmaWxlLmZpbGVJZCAhPT0gb3JpZ2luYWxGaWxlLmZpbGVJZFxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNldEZpbGVzKFtcbiAgICAgICAgLy8gICAuLi5uZXdGaWxlc0FycmF5LFxuICAgICAgICAvLyAgIHtcbiAgICAgICAgLy8gICAgIC4uLnVwZGF0ZWRlRmlsZVJlY29yZCxcbiAgICAgICAgLy8gICAgIGRvd25sb2FkVXJsOiB0cmFuc2Zvcm1lZEZpbGVcbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIF0pO1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGZpbGVzLCBcIkZJTEVTIEZJTklTSEVEXCIpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvciwgXCJFUlJPUlwiKTtcbiAgICAgIH0pO1xuICAgIHJldHVybjtcbiAgfTtcblxuICBjb25zdCBvbkRyb3AgPSAoYWNjZXB0ZWRGaWxlcywgcmVqZWN0ZWRGaWxlcykgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCk7XG4gICAgLy8gc2V0RmlsZXMocHJldkZpbGVzID0+IHtcbiAgICAvLyAgIHJldHVybiBbLi4uZmlsZXMsIGFjY2VwdGVkRmlsZXNdO1xuICAgIC8vIH0pO1xuICAgIGNvbnNvbGUubG9nKGZpbGVzLCBcIlJJR0hUIEFGVEVSIFVQREFURVwiKTtcbiAgICBhY2NlcHRlZEZpbGVzLmZvckVhY2goZmlsZSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhmaWxlLCBcIkZJTEVcIik7XG4gICAgICBmaWxlLmZpbGVJZCA9IERhdGUubm93KCk7XG4gICAgICBmaWxlLmRvd25sb2FkVXJsID0gbnVsbDtcbiAgICAgIGNvbnN0IG1ldGFEYXRhID0ge1xuICAgICAgICBjb250ZW50VHlwZTogZmlsZS50eXBlLFxuICAgICAgICBzaXplOiBmaWxlLnNpemUsXG4gICAgICAgIGxhc3RNb2RpZmllZDogYCR7bmV3IERhdGUoZmlsZS5sYXN0TW9kaWZpZWQpLnRvTG9jYWxlRGF0ZVN0cmluZyhcbiAgICAgICAgICBcImVuLVVTXCJcbiAgICAgICAgKX0gJHtuZXcgRGF0ZShmaWxlLmxhc3RNb2RpZmllZCkudG9Mb2NhbGVUaW1lU3RyaW5nKFwiZW4tVVNcIil9YFxuICAgICAgfTtcblxuICAgICAgY29uc3QgdGFzayA9IHN0b3JhZ2VSZWYuY2hpbGQoZmlsZS5uYW1lKS5wdXQoZmlsZSwgbWV0YURhdGEpO1xuXG4gICAgICB0YXNrLm9uKFxuICAgICAgICBcInN0YXRlX2NoYW5nZWRcIixcbiAgICAgICAgZnVuY3Rpb24gcHJvZ3Jlc3Moc25hcHNob3QpIHtcbiAgICAgICAgICBsZXQgcGVyY2VudGFnZSA9XG4gICAgICAgICAgICAoc25hcHNob3QuYnl0ZXNUcmFuc2ZlcnJlZCAvIHNuYXBzaG90LnRvdGFsQnl0ZXMpICogMTAwO1xuICAgICAgICAgIC8vIHNldEZpbGVzKHByZXZGaWxlcyA9PiBbXG4gICAgICAgICAgLy8gICAuLi5wcmV2RmlsZXMsXG4gICAgICAgICAgLy8gICB7XG4gICAgICAgICAgLy8gICAgIC4uLmZpbGUsXG4gICAgICAgICAgLy8gICAgIHBlcmNlbnRhZ2VcbiAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAvLyBdKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyLCBcIkVSUiBTTkFQU1wiKTtcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgLy8gc3VjY2VzZnVsIHVwbG9hZFxuICAgICAgICAgIHRhc2suc25hcHNob3QucmVmXG4gICAgICAgICAgICAuZ2V0TWV0YWRhdGEoKVxuICAgICAgICAgICAgLnRoZW4obWV0YWRhdGEgPT4gcHJvY2Vzc0ltYWdlKG1ldGFkYXRhLCBmaWxlKSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8bWFpbiBjbGFzc05hbWU9XCJmaWxlLWNvbnZlcnNpb24td3JhcHBlclwiPlxuICAgICAgPGgxPkZpbGUgQ29udmVyc2lvbiBBcHA8L2gxPlxuICAgICAgPHNlY3Rpb24+XG4gICAgICAgIDxVcGxvYWQgb25Ecm9wPXtvbkRyb3B9IC8+XG4gICAgICAgIDxkaXY+ZmlsZSB0eXBlcyBoZXJlPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlsZS1waWNrZXItd3JhcHBlclwiPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBzZWxlY3RlZEZpbGU9e2Zyb21GaWxlfSBvblNlbGVjdD17c2V0RnJvbUZpbGV9IC8+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI0cHhcIiB9fSBpY29uPXtmYUFycm93UmlnaHR9IC8+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxTZWxlY3RJbnB1dCBzZWxlY3RlZEZpbGU9e3RvRmlsZX0gb25TZWxlY3Q9e3NldFRvRmlsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+ZG93bmxvYWQgaGVyZTwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBtYXJnaW46IDcwcHggYXV0bztcbiAgICAgICAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlY3Rpb24ge1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoNTYsIDE1MywgMjM2LCAwKTtcbiAgICAgICAgICBib3gtc2hhZG93OiByZ2JhKDIyLCA0NSwgNjEsIDAuMSkgMHB4IDFweCAycHggMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1waWNrZXItd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTAwcHgpIHtcbiAgICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9tYWluPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsZUNvbnZlcnNpb247XG4iXX0= */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.63596f7714fbaa5ca5bb.hot-update.js.map