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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJpbWFnZS9iaWc0ODUzY2E2NjdhMmI4Yjg4NDRlYjI2OTNhYzFiMjU3OC5wbmciOw=="

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = "data:image/jpeg;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJpbWFnZS9pbWdBNWM1NjBlMTM5ZmI2MDM5NThjMWUxMDQzM2NiODEwOGIuanBnIjs="

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJpbWFnZS9pbWdCZDYwNmFjMGVjYTcxZDZlYWQ3NmM3M2Q3YWEwOGQ1MWIucG5nIjs="

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,bW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArICJpbWFnZS9zbWFsbGQzNjNiMTNiMTVlMTg5ZWE4MzdlNjJjZjg3MmU3ZTVmLnBuZyI7"

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_small_png__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__image_small_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__image_small_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_big_png__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_big_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__image_big_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_imgA_jpg__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image_imgA_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__image_imgA_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_imgB_png__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_imgB_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__image_imgB_png__);






const img1 = document.createElement("img");
img1.src = __WEBPACK_IMPORTED_MODULE_0__image_small_png___default.a;
document.body.appendChild(img1);

const img2 = document.createElement("img");
img2.src = __WEBPACK_IMPORTED_MODULE_1__image_big_png___default.a;
document.body.appendChild(img2);

const img3 = document.createElement("img");
img3.src = __WEBPACK_IMPORTED_MODULE_2__image_imgA_jpg___default.a;
document.body.appendChild(img3);

const img4 = document.createElement("img");
img4.src = __WEBPACK_IMPORTED_MODULE_3__image_imgB_png___default.a;
document.body.appendChild(img4);

/***/ })
/******/ ]);