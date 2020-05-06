/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/main.js":
/*!*********************!*\
  !*** ./app/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../style.scss */ \"./style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n // loading and saving\n\nconst filesUploader = document.getElementById(\"filesUploader\");\nconst canvas = document.getElementById(\"canvasImg\");\nconst ctx = canvas.getContext(\"2d\");\nconst btnSave = document.getElementById(\"btn-save\");\nfilesUploader.addEventListener(\"change\", function (e) {\n  const reader = new FileReader();\n\n  reader.onload = function (e) {\n    const imgObj = new Image();\n\n    imgObj.onload = function (e) {\n      canvas.width = imgObj.width;\n      canvas.height = imgObj.height;\n      const x = 0;\n      const y = 0;\n      ctx.drawImage(imgObj, x, y, canvas.width, canvas.height);\n    };\n\n    imgObj.src = e.target.result;\n  };\n\n  reader.readAsDataURL(e.target.files[0]);\n});\nbtnSave.addEventListener(\"click\", function () {\n  var image = canvas.toDataURL(\"image/png\").replace(\"image/png\", \"image/octet-stream\");\n  downloadImg(image, \"manny-image.png\");\n});\n\nfunction downloadImg(data, filename) {\n  const a = document.createElement(\"a\");\n  a.href = data;\n  a.download = filename;\n  document.body.appendChild(a);\n  a.click();\n} // select, show and hide\n\n\nconst tab = `\n<ul class=\"tabs\" role=\"tablist\">\n  <li>\n    <input type=\"radio\" name=\"tabs\" id=\"tab1\" checked />\n    <label\n      for=\"tab1\"\n      role=\"tab\"\n      aria-selected=\"true\"\n      aria-controls=\"panel1\"\n      tabindex=\"0\"\n      >Main</label\n    >\n    <div\n      id=\"tab-content1\"\n      class=\"tab-content\"\n      role=\"tabpanel\"\n      aria-labelledby=\"description\"\n      aria-hidden=\"false\"\n    >\n    </div>\n  </li>\n\n  <li>\n    <input type=\"radio\" name=\"tabs\" id=\"tab2\" />\n    <label\n      for=\"tab2\"\n      role=\"tab\"\n      aria-selected=\"false\"\n      aria-controls=\"panel2\"\n      tabindex=\"0\"\n      >Accent</label\n    >\n    <div\n      id=\"tab-content2\"\n      class=\"tab-content\"\n      role=\"tabpanel\"\n      aria-labelledby=\"specification\"\n      aria-hidden=\"true\"\n    >\n \n    </div>\n  </li>\n</ul>\n<div class=\"orientation\">Orientation</div>\n<button id=\"btn-save\">Save</button>\n\n`;\nconst sel = document.getElementById(\"sel\");\n\nfunction getSelectedOption(sel) {\n  var opt;\n\n  for (var i = 0, len = sel.options.length; i < len; i++) {\n    opt = sel.options[i];\n\n    if (opt.selected === true) {\n      break;\n    }\n  }\n\n  return opt;\n}\n\nsel.addEventListener(\"change\", function () {\n  const opt = getSelectedOption(sel);\n\n  switch (opt.value) {\n    case \"bonLe\":\n      let y = document.getElementById(\"createTab\");\n      y.innerHTML = tab;\n      fetch(\"app/bonded.json\").then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        appendData(data);\n      }).catch(function (err) {\n        console.log(\"error: \" + err);\n      });\n\n      function appendData(data) {\n        let main = document.getElementById(\"tab-content1\");\n        let accent = document.getElementById(\"tab-content2\");\n\n        for (let i = 0; i < data.length; i++) {\n          let div = document.createElement(\"div\");\n          div.className = \"leColor\";\n          div.innerHTML = `\n                  <div style=\"background-color: ${data[i].color}\"></div>\n                  <div class=\"code\"> ${data[i].code}</div>\n              `;\n          main.appendChild(div);\n        }\n\n        for (let j = 0; j < data.length; j++) {\n          let div = document.createElement(\"div\");\n          div.className = \"leColor\";\n          div.innerHTML = `\n                        <div style=\"background-color: ${data[j].color}\"></div>\n                        <div class=\"code\"> ${data[j].code}</div>\n                    `;\n          accent.appendChild(div);\n        }\n      }\n\n      break;\n\n    case \"genLe\":\n      console.log(\"2\");\n      let yx = document.getElementById(\"createTab\");\n      yx.innerHTML = tab;\n      fetch(\"app/genuine.json\").then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        appendDataGen(data);\n      }).catch(function (err) {\n        console.log(\"error: \" + err);\n      });\n\n      function appendDataGen(data) {\n        let main = document.getElementById(\"tab-content1\");\n        let accent = document.getElementById(\"tab-content2\");\n\n        for (let i = 0; i < data.length; i++) {\n          let div = document.createElement(\"div\");\n          div.className = \"leColor\";\n          div.innerHTML = `\n                  <div style=\"background-color: ${data[i].color}\"></div>\n                  <div class=\"code\"> ${data[i].code}</div>\n              `;\n          main.appendChild(div);\n        }\n\n        for (let j = 0; j < data.length; j++) {\n          let div = document.createElement(\"div\");\n          div.className = \"leColor\";\n          div.innerHTML = `\n                        <div style=\"background-color: ${data[j].color}\"></div>\n                        <div class=\"code\"> ${data[j].code}</div>\n                    `;\n          accent.appendChild(div);\n        }\n      }\n\n      break;\n\n    case \"itaLe\":\n      console.log(\"3\");\n      let xy = document.getElementById(\"createTab\");\n      xy.innerHTML = tab;\n      fetch(\"app/italian.json\").then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        appendDataIta(data);\n      }).catch(function (err) {\n        console.log(\"error: \" + err);\n      });\n\n      function appendDataIta(data) {\n        let main = document.getElementById(\"tab-content1\");\n        let accent = document.getElementById(\"tab-content2\");\n\n        for (let i = 0; i < data.length; i++) {\n          let div = document.createElement(\"div\");\n          div.className = \"leColor\";\n          div.innerHTML = `\n                  <div style=\"background-color: ${data[i].color}\"></div>\n                  <div class=\"code\"> ${data[i].code}</div>\n              `;\n          main.appendChild(div);\n        }\n\n        for (let j = 0; j < data.length; j++) {\n          let div = document.createElement(\"div\");\n          div.className = \"leColor\";\n          div.innerHTML = `\n                        <div style=\"background-color: ${data[j].color}\"></div>\n                        <div class=\"code\"> ${data[j].code}</div>\n                    `;\n          accent.appendChild(div);\n        }\n      }\n\n      break;\n\n    case \"puLe\":\n      console.log(\"4\");\n      let yz = document.getElementById(\"createTab\");\n      yz.innerHTML = tab;\n      fetch(\"app/pu.json\").then(function (response) {\n        return response.json();\n      }).then(function (data) {\n        appendDataPu(data);\n      }).catch(function (err) {\n        console.log(\"error: \" + err);\n      });\n\n      function appendDataPu(data) {\n        let main = document.getElementById(\"tab-content1\");\n        let accent = document.getElementById(\"tab-content2\");\n\n        for (let i = 0; i < data.length; i++) {\n          let div = document.createElement(\"div\");\n          div.className = \"leColor\";\n          div.innerHTML = `\n                  <div style=\"background-color: ${data[i].color}\"></div>\n                  <div class=\"code\"> ${data[i].code}</div>\n              `;\n          main.appendChild(div);\n        }\n\n        for (let j = 0; j < data.length; j++) {\n          let div = document.createElement(\"div\");\n          div.className = \"leColor\";\n          div.innerHTML = `\n                        <div style=\"background-color: ${data[j].color}\"></div>\n                        <div class=\"code\"> ${data[j].code}</div>\n                    `;\n          accent.appendChild(div);\n        }\n      }\n\n      break;\n  }\n});\n\n//# sourceURL=webpack:///./app/main.js?");

/***/ }),

/***/ "./style.scss":
/*!********************!*\
  !*** ./style.scss ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./style.scss?");

/***/ })

/******/ });