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
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/json/stringify */ "./node_modules/@babel/runtime-corejs2/core-js/json/stringify.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_json_stringify__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Upload__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/Upload */ "./components/Upload.js");
/* harmony import */ var _components_SelectInput__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/SelectInput */ "./components/SelectInput.js");
/* harmony import */ var _components_FinishedFile__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/FinishedFile */ "./components/FinishedFile.js");






var _jsxFileName = "/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js";










var FileConversion = function FileConversion(_ref) {
  var firebase = _ref.firebase;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])([]),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState3, 2),
      fromFile = _useState4[0],
      setFromFile = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_7__["useState"])(""),
      _useState6 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_5__["default"])(_useState5, 2),
      toFile = _useState6[0],
      setToFile = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_7__["useEffect"])(function () {
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
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(fileMetaData, originalFile) {
      var payload, data;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
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
              return axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("https://us-central1-file-converter-bddf8.cloudfunctions.net/processImage", payload, {
                headers: {
                  "Content-Type": "application/json"
                }
              });

            case 4:
              data = _context.sent;
              console.log(data, "DATA HERE");
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", _context.t0);

            case 11:
              return _context.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_2___default.a(function (resolve, reject) {
                axios__WEBPACK_IMPORTED_MODULE_10___default.a.post("https://us-central1-file-converter-bddf8.cloudfunctions.net/processImage", payload, {
                  headers: {
                    "Content-Type": "application/json"
                  }
                }).then(function (response) {
                  console.log("HIT 2");
                  resolve(response.data[0].metadata.mediaLink); // const updatedeFileRecord = files.find(
                  //   file => file.fileId === originalFile.fileId
                  // );
                  // const newFilesArray = files.filter(
                  //   file => file.fileId !== originalFile.fileId
                  // );
                  // dispatch({
                  //   type: "setFiles",
                  //   payload: {
                  //     ...originalFile,
                  //     downloadUrl: transformedFile
                  //   }
                  // });
                }).catch(function (error) {
                  reject(error);
                });
              }));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8]]);
    }));

    return function processImage(_x, _x2) {
      return _ref2.apply(this, arguments);
    };
  }();

  var onDrop = function onDrop(acceptedFiles, rejectedFiles) {
    var storageRef = firebase.storage().ref();
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
      task.then(function (imageData) {
        return imageData.metadata;
      }).then(function (metadata) {
        return processImage(metadata, file);
      }).then(function (downloadUrl) {
        console.log(downloadUrl, "3");
      }); // task.on(
      //   "state_changed",
      //   function progress(snapshot) {
      //     let percentage =
      //       (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      //     console.log("HIT 1");
      //   },
      //   function error(err) {
      //     console.log(err, "ERR SNAPS");
      //   },
      //   function() {
      //     // succesful upload
      //     task.snapshot.ref
      //       .getMetadata()
      //       .then(metadata => processImage(metadata, file))
      //       .then(url => {
      //         console.log("HIT 3, URL");
      //       });
      //   }
      // );
    });
  };

  return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("main", {
    className: "jsx-2441915485" + " " + "file-conversion-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h1", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "File Conversion App"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("section", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_Upload__WEBPACK_IMPORTED_MODULE_11__["default"], {
    onDrop: onDrop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, "file types here"), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-2441915485" + " " + "file-picker-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
    selectedFile: fromFile,
    onSelect: setFromFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("p", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeIcon"], {
    style: {
      fontSize: "24px"
    },
    icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_9__["faArrowRight"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_SelectInput__WEBPACK_IMPORTED_MODULE_12__["default"], {
    selectedFile: toFile,
    onSelect: setToFile,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
    className: "jsx-2441915485",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  }, "download here")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_6___default.a, {
    id: "2441915485",
    __self: this
  }, "main.jsx-2441915485{margin:70px auto;padding:0 10px;max-width:800px;}section.jsx-2441915485{padding:20px;border-radius:5px;border:2px solid rgba(56,153,236,0);box-shadow:rgba(22,45,61,0.1) 0px 1px 2px 0px;background-color:#ffffff;}.file-picker-wrapper.jsx-2441915485{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:space-evenly;-webkit-justify-content:space-evenly;-ms-flex-pack:space-evenly;justify-content:space-evenly;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media screen and (max-width:500px){section.jsx-2441915485{padding:15px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9nYWJyaWVsL2NvZGUvanBndG9wbmcvY29udGFpbmVycy9GaWxlQ29udmVyc2lvbi9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SWtCLEFBRzRCLEFBTUosQUFRQSxBQU9FLGFBZEcsQUFlbEIsSUFyQmUsY0FPd0IsQ0FOdkIsZ0JBQ2xCLG1CQU1tRCxPQU1wQix1Q0FMSix5QkFDM0IsMkRBS3FCLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvZ2FicmllbC9jb2RlL2pwZ3RvcG5nL2NvbnRhaW5lcnMvRmlsZUNvbnZlcnNpb24vaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tIFwiQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lXCI7XG5pbXBvcnQgeyBmYUFycm93UmlnaHQgfSBmcm9tIFwiQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5cbmltcG9ydCBVcGxvYWQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvVXBsb2FkXCI7XG5pbXBvcnQgU2VsZWN0SW5wdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VsZWN0SW5wdXRcIjtcbmltcG9ydCBGaW5pc2hlZEZpbGUgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvRmluaXNoZWRGaWxlXCI7XG5cbmNvbnN0IEZpbGVDb252ZXJzaW9uID0gKHsgZmlyZWJhc2UgfSkgPT4ge1xuICBjb25zdCBbZmlsZXMsIHNldEZpbGVzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2Zyb21GaWxlLCBzZXRGcm9tRmlsZV0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RvRmlsZSwgc2V0VG9GaWxlXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY3VycmVudERvbWFpbiA9IHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZTtcbiAgICBzd2l0Y2ggKGN1cnJlbnREb21haW4pIHtcbiAgICAgIGNhc2UgY3VycmVudERvbWFpbjpcbiAgICAgICAgc2V0RnJvbUZpbGUoXCJKUEdcIik7XG4gICAgICAgIHNldFRvRmlsZShcIlBOR1wiKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIGNvbnN0IHByb2Nlc3NJbWFnZSA9IGFzeW5jIChmaWxlTWV0YURhdGEsIG9yaWdpbmFsRmlsZSkgPT4ge1xuICAgIC8vIHByb2Nlc3MuZW52LkZJUkVCQVNFX0NMT1VEX0lNQUdFX0FQSVxuICAgIC8vIGh0dHA6Ly9sb2NhbGhvc3Q6NTAwMC9maWxlLWNvbnZlcnRlci1iZGRmOC91cy1jZW50cmFsMS9wcm9jZXNzSW1hZ2VcbiAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaW1hZ2VEYXRhOiBmaWxlTWV0YURhdGEsXG4gICAgICBmcm9tRmlsZSxcbiAgICAgIHRvRmlsZVxuICAgIH0pO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICBwcm9jZXNzLmVudi5GSVJFQkFTRV9DTE9VRF9JTUFHRV9BUEksXG4gICAgICAgIHBheWxvYWQsXG4gICAgICAgIHtcbiAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEsIFwiREFUQSBIRVJFXCIpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gZXJyb3I7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGF4aW9zXG4gICAgICAgIC5wb3N0KHByb2Nlc3MuZW52LkZJUkVCQVNFX0NMT1VEX0lNQUdFX0FQSSwgcGF5bG9hZCwge1xuICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiSElUIDJcIik7XG4gICAgICAgICAgcmVzb2x2ZShyZXNwb25zZS5kYXRhWzBdLm1ldGFkYXRhLm1lZGlhTGluayk7XG4gICAgICAgICAgLy8gY29uc3QgdXBkYXRlZGVGaWxlUmVjb3JkID0gZmlsZXMuZmluZChcbiAgICAgICAgICAvLyAgIGZpbGUgPT4gZmlsZS5maWxlSWQgPT09IG9yaWdpbmFsRmlsZS5maWxlSWRcbiAgICAgICAgICAvLyApO1xuICAgICAgICAgIC8vIGNvbnN0IG5ld0ZpbGVzQXJyYXkgPSBmaWxlcy5maWx0ZXIoXG4gICAgICAgICAgLy8gICBmaWxlID0+IGZpbGUuZmlsZUlkICE9PSBvcmlnaW5hbEZpbGUuZmlsZUlkXG4gICAgICAgICAgLy8gKTtcblxuICAgICAgICAgIC8vIGRpc3BhdGNoKHtcbiAgICAgICAgICAvLyAgIHR5cGU6IFwic2V0RmlsZXNcIixcbiAgICAgICAgICAvLyAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAvLyAgICAgLi4ub3JpZ2luYWxGaWxlLFxuICAgICAgICAgIC8vICAgICBkb3dubG9hZFVybDogdHJhbnNmb3JtZWRGaWxlXG4gICAgICAgICAgLy8gICB9XG4gICAgICAgICAgLy8gfSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfTtcblxuICBjb25zdCBvbkRyb3AgPSAoYWNjZXB0ZWRGaWxlcywgcmVqZWN0ZWRGaWxlcykgPT4ge1xuICAgIGNvbnN0IHN0b3JhZ2VSZWYgPSBmaXJlYmFzZS5zdG9yYWdlKCkucmVmKCk7XG4gICAgYWNjZXB0ZWRGaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xuICAgICAgY29uc29sZS5sb2coZmlsZSwgXCJGSUxFXCIpO1xuICAgICAgZmlsZS5maWxlSWQgPSBEYXRlLm5vdygpO1xuICAgICAgZmlsZS5kb3dubG9hZFVybCA9IG51bGw7XG4gICAgICBjb25zdCBtZXRhRGF0YSA9IHtcbiAgICAgICAgY29udGVudFR5cGU6IGZpbGUudHlwZSxcbiAgICAgICAgc2l6ZTogZmlsZS5zaXplLFxuICAgICAgICBsYXN0TW9kaWZpZWQ6IGAke25ldyBEYXRlKGZpbGUubGFzdE1vZGlmaWVkKS50b0xvY2FsZURhdGVTdHJpbmcoXG4gICAgICAgICAgXCJlbi1VU1wiXG4gICAgICAgICl9ICR7bmV3IERhdGUoZmlsZS5sYXN0TW9kaWZpZWQpLnRvTG9jYWxlVGltZVN0cmluZyhcImVuLVVTXCIpfWBcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHRhc2sgPSBzdG9yYWdlUmVmLmNoaWxkKGZpbGUubmFtZSkucHV0KGZpbGUsIG1ldGFEYXRhKTtcblxuICAgICAgdGFza1xuICAgICAgICAudGhlbihpbWFnZURhdGEgPT4gaW1hZ2VEYXRhLm1ldGFkYXRhKVxuICAgICAgICAudGhlbihtZXRhZGF0YSA9PiBwcm9jZXNzSW1hZ2UobWV0YWRhdGEsIGZpbGUpKVxuICAgICAgICAudGhlbihkb3dubG9hZFVybCA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZG93bmxvYWRVcmwsIFwiM1wiKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIHRhc2sub24oXG4gICAgICAvLyAgIFwic3RhdGVfY2hhbmdlZFwiLFxuICAgICAgLy8gICBmdW5jdGlvbiBwcm9ncmVzcyhzbmFwc2hvdCkge1xuICAgICAgLy8gICAgIGxldCBwZXJjZW50YWdlID1cbiAgICAgIC8vICAgICAgIChzbmFwc2hvdC5ieXRlc1RyYW5zZmVycmVkIC8gc25hcHNob3QudG90YWxCeXRlcykgKiAxMDA7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coXCJISVQgMVwiKTtcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgZnVuY3Rpb24gZXJyb3IoZXJyKSB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coZXJyLCBcIkVSUiBTTkFQU1wiKTtcbiAgICAgIC8vICAgfSxcbiAgICAgIC8vICAgZnVuY3Rpb24oKSB7XG4gICAgICAvLyAgICAgLy8gc3VjY2VzZnVsIHVwbG9hZFxuICAgICAgLy8gICAgIHRhc2suc25hcHNob3QucmVmXG4gICAgICAvLyAgICAgICAuZ2V0TWV0YWRhdGEoKVxuICAgICAgLy8gICAgICAgLnRoZW4obWV0YWRhdGEgPT4gcHJvY2Vzc0ltYWdlKG1ldGFkYXRhLCBmaWxlKSlcbiAgICAgIC8vICAgICAgIC50aGVuKHVybCA9PiB7XG4gICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwiSElUIDMsIFVSTFwiKTtcbiAgICAgIC8vICAgICAgIH0pO1xuICAgICAgLy8gICB9XG4gICAgICAvLyApO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwiZmlsZS1jb252ZXJzaW9uLXdyYXBwZXJcIj5cbiAgICAgIDxoMT5GaWxlIENvbnZlcnNpb24gQXBwPC9oMT5cbiAgICAgIDxzZWN0aW9uPlxuICAgICAgICA8VXBsb2FkIG9uRHJvcD17b25Ecm9wfSAvPlxuICAgICAgICA8ZGl2PmZpbGUgdHlwZXMgaGVyZTwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpbGUtcGlja2VyLXdyYXBwZXJcIj5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgc2VsZWN0ZWRGaWxlPXtmcm9tRmlsZX0gb25TZWxlY3Q9e3NldEZyb21GaWxlfSAvPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBzdHlsZT17eyBmb250U2l6ZTogXCIyNHB4XCIgfX0gaWNvbj17ZmFBcnJvd1JpZ2h0fSAvPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8U2VsZWN0SW5wdXQgc2VsZWN0ZWRGaWxlPXt0b0ZpbGV9IG9uU2VsZWN0PXtzZXRUb0ZpbGV9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PmRvd25sb2FkIGhlcmU8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgbWFpbiB7XG4gICAgICAgICAgbWFyZ2luOiA3MHB4IGF1dG87XG4gICAgICAgICAgcGFkZGluZzogMCAxMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBzZWN0aW9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDU2LCAxNTMsIDIzNiwgMCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogcmdiYSgyMiwgNDUsIDYxLCAwLjEpIDBweCAxcHggMnB4IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGUtcGlja2VyLXdyYXBwZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgICAgICAgc2VjdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxNXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbGVDb252ZXJzaW9uO1xuIl19 */\n/*@ sourceURL=/Users/gabriel/code/jpgtopng/containers/FileConversion/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (FileConversion);

/***/ })

})
//# sourceMappingURL=index.js.8d5b26edc09d477fda8b.hot-update.js.map