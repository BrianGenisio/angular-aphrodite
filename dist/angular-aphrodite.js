module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	    value: true
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _angular = __webpack_require__(2);

	var _angular2 = _interopRequireDefault(_angular);

	var _aphrodite = __webpack_require__(3);

	var MODULE_NAME = 'angular-aphrodite';

	function cssFilter() {
	    return function (styles) {
	        if (!Array.isArray(styles)) {
	            styles = [styles];
	        }

	        return _aphrodite.css.apply(this, styles);
	    };
	}

	function cssDirective() {
	    return {
	        restrict: 'A',
	        scope: { css: '=' },
	        link: function link(scope, element) {
	            scope.$watch('css', function (styles, oldVal) {
	                if (!Array.isArray(styles)) {
	                    styles = [styles];
	                }

	                element[0].className = '';
	                element.addClass(_aphrodite.css.apply(this, styles));
	            });
	        }
	    };
	}

	_angular2['default'].module(MODULE_NAME, []).filter('css', cssFilter).directive('css', cssDirective);

	exports['default'] = MODULE_NAME;
	module.exports = exports['default'];

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("angular");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("aphrodite");

/***/ }
/******/ ]);