(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RealNamePc"] = factory();
	else
		root["RealNamePc"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0,
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonpRealNamePc"] = window["webpackJsonpRealNamePc"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([96,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(22);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(64);

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(51)();
}


/***/ }),
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(87);

var iterableToArrayLimit = __webpack_require__(88);

var unsupportedIterableToArray = __webpack_require__(89);

var nonIterableRest = __webpack_require__(91);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 13 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),
/* 20 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(4);
var normalizeHeaderName = __webpack_require__(70);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(26);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(26);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(69)))

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);
var settle = __webpack_require__(71);
var buildURL = __webpack_require__(23);
var buildFullPath = __webpack_require__(73);
var parseHeaders = __webpack_require__(76);
var isURLSameOrigin = __webpack_require__(77);
var createError = __webpack_require__(27);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(timeoutErrorMessage, config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(78);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(72);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'params', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy'];
  var defaultToConfig2Keys = [
    'baseURL', 'url', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress',
    'maxContentLength', 'validateStatus', 'maxRedirects', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath'
  ];

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys);

  var otherKeys = Object
    .keys(config2)
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, function otherKeysDefaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(57);
} else {}


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(81);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(21);

var assertThisInitialized = __webpack_require__(82);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 34 */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;

/***/ }),
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v0.19.1
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var f,g,h,k,l;
if("undefined"===typeof window||"function"!==typeof MessageChannel){var p=null,q=null,t=function(){if(null!==p)try{var a=exports.unstable_now();p(!0,a);p=null}catch(b){throw setTimeout(t,0),b;}},u=Date.now();exports.unstable_now=function(){return Date.now()-u};f=function(a){null!==p?setTimeout(f,0,a):(p=a,setTimeout(t,0))};g=function(a,b){q=setTimeout(a,b)};h=function(){clearTimeout(q)};k=function(){return!1};l=exports.unstable_forceFrameRate=function(){}}else{var w=window.performance,x=window.Date,
y=window.setTimeout,z=window.clearTimeout;if("undefined"!==typeof console){var A=window.cancelAnimationFrame;"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills");"function"!==typeof A&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills")}if("object"===
typeof w&&"function"===typeof w.now)exports.unstable_now=function(){return w.now()};else{var B=x.now();exports.unstable_now=function(){return x.now()-B}}var C=!1,D=null,E=-1,F=5,G=0;k=function(){return exports.unstable_now()>=G};l=function(){};exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):F=0<a?Math.floor(1E3/a):5};var H=new MessageChannel,I=H.port2;H.port1.onmessage=
function(){if(null!==D){var a=exports.unstable_now();G=a+F;try{D(!0,a)?I.postMessage(null):(C=!1,D=null)}catch(b){throw I.postMessage(null),b;}}else C=!1};f=function(a){D=a;C||(C=!0,I.postMessage(null))};g=function(a,b){E=y(function(){a(exports.unstable_now())},b)};h=function(){z(E);E=-1}}function J(a,b){var c=a.length;a.push(b);a:for(;;){var d=c-1>>>1,e=a[d];if(void 0!==e&&0<K(e,b))a[d]=b,a[c]=e,c=d;else break a}}function L(a){a=a[0];return void 0===a?null:a}
function M(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length;d<e;){var m=2*(d+1)-1,n=a[m],v=m+1,r=a[v];if(void 0!==n&&0>K(n,c))void 0!==r&&0>K(r,n)?(a[d]=r,a[v]=c,d=v):(a[d]=n,a[m]=c,d=m);else if(void 0!==r&&0>K(r,c))a[d]=r,a[v]=c,d=v;else break a}}return b}return null}function K(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}var N=[],O=[],P=1,Q=null,R=3,S=!1,T=!1,U=!1;
function V(a){for(var b=L(O);null!==b;){if(null===b.callback)M(O);else if(b.startTime<=a)M(O),b.sortIndex=b.expirationTime,J(N,b);else break;b=L(O)}}function W(a){U=!1;V(a);if(!T)if(null!==L(N))T=!0,f(X);else{var b=L(O);null!==b&&g(W,b.startTime-a)}}
function X(a,b){T=!1;U&&(U=!1,h());S=!0;var c=R;try{V(b);for(Q=L(N);null!==Q&&(!(Q.expirationTime>b)||a&&!k());){var d=Q.callback;if(null!==d){Q.callback=null;R=Q.priorityLevel;var e=d(Q.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?Q.callback=e:Q===L(N)&&M(N);V(b)}else M(N);Q=L(N)}if(null!==Q)var m=!0;else{var n=L(O);null!==n&&g(W,n.startTime-b);m=!1}return m}finally{Q=null,R=c,S=!1}}
function Y(a){switch(a){case 1:return-1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var Z=l;exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){T||S||(T=!0,f(X))};
exports.unstable_getCurrentPriorityLevel=function(){return R};exports.unstable_getFirstCallbackNode=function(){return L(N)};exports.unstable_next=function(a){switch(R){case 1:case 2:case 3:var b=3;break;default:b=R}var c=R;R=b;try{return a()}finally{R=c}};exports.unstable_pauseExecution=function(){};exports.unstable_requestPaint=Z;exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=R;R=a;try{return b()}finally{R=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();if("object"===typeof c&&null!==c){var e=c.delay;e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:Y(a)}else c=Y(a),e=d;c=e+c;a={id:P++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,J(O,a),null===L(N)&&a===L(O)&&(U?h():U=!0,g(W,e-d))):(a.sortIndex=c,J(N,a),T||S||(T=!0,f(X)));return a};
exports.unstable_shouldYield=function(){var a=exports.unstable_now();V(a);var b=L(N);return b!==Q&&null!==Q&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<Q.expirationTime||k()};exports.unstable_wrapCallback=function(a){var b=R;return function(){var c=R;R=b;try{return a.apply(this,arguments)}finally{R=c}}};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(21);

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(52);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 53 */,
/* 54 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function _interopDefault(t){return t&&"object"==typeof t&&"default"in t?t.default:t}Object.defineProperty(exports,"__esModule",{value:!0});var resolvePathname=_interopDefault(__webpack_require__(58)),valueEqual=_interopDefault(__webpack_require__(60));__webpack_require__(62);var invariant=_interopDefault(__webpack_require__(63));function _extends(){return(_extends=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a])}return t}).apply(this,arguments)}function addLeadingSlash(t){return"/"===t.charAt(0)?t:"/"+t}function stripLeadingSlash(t){return"/"===t.charAt(0)?t.substr(1):t}function hasBasename(t,n){return 0===t.toLowerCase().indexOf(n.toLowerCase())&&-1!=="/?#".indexOf(t.charAt(n.length))}function stripBasename(t,n){return hasBasename(t,n)?t.substr(n.length):t}function stripTrailingSlash(t){return"/"===t.charAt(t.length-1)?t.slice(0,-1):t}function parsePath(t){var n=t||"/",e="",a="",r=n.indexOf("#");-1!==r&&(a=n.substr(r),n=n.substr(0,r));var o=n.indexOf("?");return-1!==o&&(e=n.substr(o),n=n.substr(0,o)),{pathname:n,search:"?"===e?"":e,hash:"#"===a?"":a}}function createPath(t){var n=t.pathname,e=t.search,a=t.hash,r=n||"/";return e&&"?"!==e&&(r+="?"===e.charAt(0)?e:"?"+e),a&&"#"!==a&&(r+="#"===a.charAt(0)?a:"#"+a),r}function createLocation(t,n,e,a){var r;"string"==typeof t?(r=parsePath(t)).state=n:(void 0===(r=_extends({},t)).pathname&&(r.pathname=""),r.search?"?"!==r.search.charAt(0)&&(r.search="?"+r.search):r.search="",r.hash?"#"!==r.hash.charAt(0)&&(r.hash="#"+r.hash):r.hash="",void 0!==n&&void 0===r.state&&(r.state=n));try{r.pathname=decodeURI(r.pathname)}catch(t){throw t instanceof URIError?new URIError('Pathname "'+r.pathname+'" could not be decoded. This is likely caused by an invalid percent-encoding.'):t}return e&&(r.key=e),a?r.pathname?"/"!==r.pathname.charAt(0)&&(r.pathname=resolvePathname(r.pathname,a.pathname)):r.pathname=a.pathname:r.pathname||(r.pathname="/"),r}function locationsAreEqual(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash&&t.key===n.key&&valueEqual(t.state,n.state)}function createTransitionManager(){var o=null;var a=[];return{setPrompt:function(t){return o=t,function(){o===t&&(o=null)}},confirmTransitionTo:function(t,n,e,a){if(null!=o){var r="function"==typeof o?o(t,n):o;"string"==typeof r?"function"==typeof e?e(r,a):a(!0):a(!1!==r)}else a(!0)},appendListener:function(t){var n=!0;function e(){n&&t.apply(void 0,arguments)}return a.push(e),function(){n=!1,a=a.filter(function(t){return t!==e})}},notifyListeners:function(){for(var t=arguments.length,n=new Array(t),e=0;e<t;e++)n[e]=arguments[e];a.forEach(function(t){return t.apply(void 0,n)})}}}var canUseDOM=!("undefined"==typeof window||!window.document||!window.document.createElement);function getConfirmation(t,n){n(window.confirm(t))}function supportsHistory(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"pushState"in window.history)}function supportsPopStateOnHashChange(){return-1===window.navigator.userAgent.indexOf("Trident")}function supportsGoWithoutReloadUsingHash(){return-1===window.navigator.userAgent.indexOf("Firefox")}function isExtraneousPopstateEvent(t){return void 0===t.state&&-1===navigator.userAgent.indexOf("CriOS")}var PopStateEvent="popstate",HashChangeEvent="hashchange";function getHistoryState(){try{return window.history.state||{}}catch(t){return{}}}function createBrowserHistory(t){void 0===t&&(t={}),canUseDOM||invariant(!1);var s=window.history,c=supportsHistory(),n=!supportsPopStateOnHashChange(),e=t,a=e.forceRefresh,h=void 0!==a&&a,r=e.getUserConfirmation,u=void 0===r?getConfirmation:r,o=e.keyLength,i=void 0===o?6:o,f=t.basename?stripTrailingSlash(addLeadingSlash(t.basename)):"";function l(t){var n=t||{},e=n.key,a=n.state,r=window.location,o=r.pathname+r.search+r.hash;return f&&(o=stripBasename(o,f)),createLocation(o,a,e)}function d(){return Math.random().toString(36).substr(2,i)}var v=createTransitionManager();function p(t){_extends(T,t),T.length=s.length,v.notifyListeners(T.location,T.action)}function g(t){isExtraneousPopstateEvent(t)||w(l(t.state))}function P(){w(l(getHistoryState()))}var m=!1;function w(n){if(m)m=!1,p();else{v.confirmTransitionTo(n,"POP",u,function(t){t?p({action:"POP",location:n}):function(t){var n=T.location,e=H.indexOf(n.key);-1===e&&(e=0);var a=H.indexOf(t.key);-1===a&&(a=0);var r=e-a;r&&(m=!0,L(r))}(n)})}}var y=l(getHistoryState()),H=[y.key];function x(t){return f+createPath(t)}function L(t){s.go(t)}var O=0;function E(t){1===(O+=t)&&1===t?(window.addEventListener(PopStateEvent,g),n&&window.addEventListener(HashChangeEvent,P)):0===O&&(window.removeEventListener(PopStateEvent,g),n&&window.removeEventListener(HashChangeEvent,P))}var S=!1;var T={length:s.length,action:"POP",location:y,createHref:x,push:function(t,n){var i=createLocation(t,n,d(),T.location);v.confirmTransitionTo(i,"PUSH",u,function(t){if(t){var n=x(i),e=i.key,a=i.state;if(c)if(s.pushState({key:e,state:a},null,n),h)window.location.href=n;else{var r=H.indexOf(T.location.key),o=H.slice(0,r+1);o.push(i.key),H=o,p({action:"PUSH",location:i})}else window.location.href=n}})},replace:function(t,n){var o="REPLACE",i=createLocation(t,n,d(),T.location);v.confirmTransitionTo(i,o,u,function(t){if(t){var n=x(i),e=i.key,a=i.state;if(c)if(s.replaceState({key:e,state:a},null,n),h)window.location.replace(n);else{var r=H.indexOf(T.location.key);-1!==r&&(H[r]=i.key),p({action:o,location:i})}else window.location.replace(n)}})},go:L,goBack:function(){L(-1)},goForward:function(){L(1)},block:function(t){void 0===t&&(t=!1);var n=v.setPrompt(t);return S||(E(1),S=!0),function(){return S&&(S=!1,E(-1)),n()}},listen:function(t){var n=v.appendListener(t);return E(1),function(){E(-1),n()}}};return T}var HashChangeEvent$1="hashchange",HashPathCoders={hashbang:{encodePath:function(t){return"!"===t.charAt(0)?t:"!/"+stripLeadingSlash(t)},decodePath:function(t){return"!"===t.charAt(0)?t.substr(1):t}},noslash:{encodePath:stripLeadingSlash,decodePath:addLeadingSlash},slash:{encodePath:addLeadingSlash,decodePath:addLeadingSlash}};function stripHash(t){var n=t.indexOf("#");return-1===n?t:t.slice(0,n)}function getHashPath(){var t=window.location.href,n=t.indexOf("#");return-1===n?"":t.substring(n+1)}function pushHashPath(t){window.location.hash=t}function replaceHashPath(t){window.location.replace(stripHash(window.location.href)+"#"+t)}function createHashHistory(t){void 0===t&&(t={}),canUseDOM||invariant(!1);var n=window.history,e=(supportsGoWithoutReloadUsingHash(),t),a=e.getUserConfirmation,i=void 0===a?getConfirmation:a,r=e.hashType,o=void 0===r?"slash":r,s=t.basename?stripTrailingSlash(addLeadingSlash(t.basename)):"",c=HashPathCoders[o],h=c.encodePath,u=c.decodePath;function f(){var t=u(getHashPath());return s&&(t=stripBasename(t,s)),createLocation(t)}var l=createTransitionManager();function d(t){_extends(E,t),E.length=n.length,l.notifyListeners(E.location,E.action)}var v=!1,p=null;function g(){var t=getHashPath(),n=h(t);if(t!==n)replaceHashPath(n);else{var e=f(),a=E.location;if(!v&&function(t,n){return t.pathname===n.pathname&&t.search===n.search&&t.hash===n.hash}(a,e))return;if(p===createPath(e))return;p=null,function(n){if(v)v=!1,d();else{l.confirmTransitionTo(n,"POP",i,function(t){t?d({action:"POP",location:n}):function(t){var n=E.location,e=y.lastIndexOf(createPath(n));-1===e&&(e=0);var a=y.lastIndexOf(createPath(t));-1===a&&(a=0);var r=e-a;r&&(v=!0,H(r))}(n)})}}(e)}}var P=getHashPath(),m=h(P);P!==m&&replaceHashPath(m);var w=f(),y=[createPath(w)];function H(t){n.go(t)}var x=0;function L(t){1===(x+=t)&&1===t?window.addEventListener(HashChangeEvent$1,g):0===x&&window.removeEventListener(HashChangeEvent$1,g)}var O=!1;var E={length:n.length,action:"POP",location:w,createHref:function(t){var n=document.querySelector("base"),e="";return n&&n.getAttribute("href")&&(e=stripHash(window.location.href)),e+"#"+h(s+createPath(t))},push:function(t,n){var o=createLocation(t,void 0,void 0,E.location);l.confirmTransitionTo(o,"PUSH",i,function(t){if(t){var n=createPath(o),e=h(s+n);if(getHashPath()!==e){p=n,pushHashPath(e);var a=y.lastIndexOf(createPath(E.location)),r=y.slice(0,a+1);r.push(n),y=r,d({action:"PUSH",location:o})}else d()}})},replace:function(t,n){var r="REPLACE",o=createLocation(t,void 0,void 0,E.location);l.confirmTransitionTo(o,r,i,function(t){if(t){var n=createPath(o),e=h(s+n);getHashPath()!==e&&(p=n,replaceHashPath(e));var a=y.indexOf(createPath(E.location));-1!==a&&(y[a]=n),d({action:r,location:o})}})},go:H,goBack:function(){H(-1)},goForward:function(){H(1)},block:function(t){void 0===t&&(t=!1);var n=l.setPrompt(t);return O||(L(1),O=!0),function(){return O&&(O=!1,L(-1)),n()}},listen:function(t){var n=l.appendListener(t);return L(1),function(){L(-1),n()}}};return E}function clamp(t,n,e){return Math.min(Math.max(t,n),e)}function createMemoryHistory(t){void 0===t&&(t={});var n=t,r=n.getUserConfirmation,e=n.initialEntries,a=void 0===e?["/"]:e,o=n.initialIndex,i=void 0===o?0:o,s=n.keyLength,c=void 0===s?6:s,h=createTransitionManager();function u(t){_extends(g,t),g.length=g.entries.length,h.notifyListeners(g.location,g.action)}function f(){return Math.random().toString(36).substr(2,c)}var l=clamp(i,0,a.length-1),d=a.map(function(t){return createLocation(t,void 0,"string"==typeof t?f():t.key||f())}),v=createPath;function p(t){var n=clamp(g.index+t,0,g.entries.length-1),e=g.entries[n];h.confirmTransitionTo(e,"POP",r,function(t){t?u({action:"POP",location:e,index:n}):u()})}var g={length:d.length,action:"POP",location:d[l],index:l,entries:d,createHref:v,push:function(t,n){var a=createLocation(t,n,f(),g.location);h.confirmTransitionTo(a,"PUSH",r,function(t){if(t){var n=g.index+1,e=g.entries.slice(0);e.length>n?e.splice(n,e.length-n,a):e.push(a),u({action:"PUSH",location:a,index:n,entries:e})}})},replace:function(t,n){var e="REPLACE",a=createLocation(t,n,f(),g.location);h.confirmTransitionTo(a,e,r,function(t){t&&(g.entries[g.index]=a,u({action:e,location:a}))})},go:p,goBack:function(){p(-1)},goForward:function(){p(1)},canGo:function(t){var n=g.index+t;return 0<=n&&n<g.entries.length},block:function(t){return void 0===t&&(t=!1),h.setPrompt(t)},listen:function(t){return h.appendListener(t)}};return g}exports.createBrowserHistory=createBrowserHistory,exports.createHashHistory=createHashHistory,exports.createMemoryHistory=createMemoryHistory,exports.createLocation=createLocation,exports.locationsAreEqual=locationsAreEqual,exports.parsePath=parsePath,exports.createPath=createPath;


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(59);
} else {}


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function isAbsolute(e){return"/"===e.charAt(0)}function spliceOne(e,t){for(var s=t,n=s+1,i=e.length;n<i;s+=1,n+=1)e[s]=e[n];e.pop()}function resolvePathname(e,t){void 0===t&&(t="");var s,n=e&&e.split("/")||[],i=t&&t.split("/")||[],l=e&&isAbsolute(e),r=t&&isAbsolute(t),o=l||r;if(e&&isAbsolute(e)?i=n:n.length&&(i.pop(),i=i.concat(n)),!i.length)return"/";if(i.length){var u=i[i.length-1];s="."===u||".."===u||""===u}else s=!1;for(var a=0,c=i.length;0<=c;c--){var f=i[c];"."===f?spliceOne(i,c):".."===f?(spliceOne(i,c),a++):a&&(spliceOne(i,c),a--)}if(!o)for(;a--;a)i.unshift("..");!o||""===i[0]||i[0]&&isAbsolute(i[0])||i.unshift("");var h=i.join("/");return s&&"/"!==h.substr(-1)&&(h+="/"),h}module.exports=resolvePathname;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(61);
} else {}


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
function valueOf(e){return e.valueOf?e.valueOf():Object.prototype.valueOf.call(e)}function valueEqual(u,r){if(u===r)return!0;if(null==u||null==r)return!1;if(Array.isArray(u))return Array.isArray(r)&&u.length===r.length&&u.every(function(e,u){return valueEqual(e,r[u])});if("object"!=typeof u&&"object"!=typeof r)return!1;var e=valueOf(u),t=valueOf(r);return e!==u||t!==r?valueEqual(e,t):Object.keys(Object.assign({},u,r)).every(function(e){return valueEqual(u[e],r[e])})}module.exports=valueEqual;


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isProduction = "production" === 'production';
function warning(condition, message) {
  if (!isProduction) {
    if (condition) {
      return;
    }

    var text = "Warning: " + message;

    if (typeof console !== 'undefined') {
      console.warn(text);
    }

    try {
      throw Error(text);
    } catch (x) {}
  }
}

module.exports = warning;


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", { value: true });
var isProduction = "production" === 'production';
var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    if (isProduction) {
        throw new Error(prefix);
    }
    throw new Error(prefix + ": " + (message || ''));
}
exports.default = invariant;


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);
var bind = __webpack_require__(22);
var Axios = __webpack_require__(65);
var mergeConfig = __webpack_require__(28);
var defaults = __webpack_require__(25);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(29);
axios.CancelToken = __webpack_require__(79);
axios.isCancel = __webpack_require__(24);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(80);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);
var buildURL = __webpack_require__(23);
var InterceptorManager = __webpack_require__(66);
var dispatchRequest = __webpack_require__(67);
var mergeConfig = __webpack_require__(28);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);
var transformData = __webpack_require__(68);
var isCancel = __webpack_require__(24);
var defaults = __webpack_require__(25);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 69 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(27);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(74);
var combineURLs = __webpack_require__(75);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(4);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(29);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 82 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(14);
            var content = __webpack_require__(84);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".modal-mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 9000;\n  background-color: #000;\n  opacity: 0.86;\n}\n.modal-mask.no-mask {\n  opacity: 0;\n}\n.modal-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(14);
            var content = __webpack_require__(86);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tip {\n  box-sizing: border-box;\n  position: relative;\n  width: 660px;\n  height: 300px;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding-left: 30px;\n  padding-right: 30px;\n  color: #000;\n}\n.tip__title {\n  font-size: 25px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.tip__content {\n  margin-top: 50px;\n  font-size: 20px;\n  text-align: left;\n}\n.tip__close {\n  position: absolute;\n  cursor: pointer;\n  top: 4px;\n  right: -47px;\n  width: 27px;\n  height: 27px;\n  background: url('https://p2.ssl.qhimg.com/t0179abee0d1b9be50a.png') center center no-repeat;\n  background-size: contain;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 88 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(90);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 90 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 91 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(14);
            var content = __webpack_require__(93);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".real-name {\n  width: 420px;\n  height: 346px;\n  border-radius: 5px;\n  overflow: hidden;\n  background-color: #fff;\n}\n.real-name h4 {\n  position: relative;\n  background-color: #eee;\n  font-weight: 100;\n  padding: 10px;\n  margin: 0;\n  color: #333;\n  font-size: 13px;\n}\n.real-name__close {\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 10px;\n  margin: auto;\n  width: 13px;\n  height: 13px;\n  background: url(\"https://p2.ssl.qhimg.com/t01317462acf5b893a5.png\") center center no-repeat;\n  background-size: contain;\n  cursor: pointer;\n}\n.real-name__title {\n  width: 360px;\n  height: 29px;\n  padding: 0;\n  margin: 10px auto;\n  border-bottom: 1px solid #e4e4e4;\n  list-style: none;\n}\n.real-name__title li {\n  width: 104px;\n  height: 22px;\n  float: left;\n  margin: 0 125px;\n  padding: 0 0 8px;\n  color: #999;\n  font-size: 16px;\n  line-height: 22px;\n  text-align: center;\n}\n.real-name__main {\n  margin-top: 20px;\n}\n.real-name__item {\n  font-size: 14px;\n  color: #4e4e4c;\n  padding-left: 35px;\n}\n.real-name__item-label {\n  display: inline-block;\n  width: 60px;\n  text-align: right;\n  margin-right: 5px;\n}\n.real-name__item span {\n  display: inline-block;\n  height: 20px;\n  line-height: 20px;\n}\n.real-name__item-input {\n  width: 248px;\n  height: 36px;\n  border: 1px solid #d9d9d9;\n  padding: 4px;\n  border-radius: 3px;\n  line-height: 26px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);\n  text-decoration: none;\n  outline: none;\n  box-sizing: border-box;\n}\n.real-name__item .icon {\n  display: inline-block;\n  width: 16px;\n  height: 16px;\n  position: relative;\n  top: 4px;\n  background-image: none;\n  margin-left: 5px;\n}\n.real-name__item .icon.icon-error {\n  background: url('https://p0.ssl.qhimg.com/t010babd19e5bcd27d7.png') center center no-repeat;\n  background-size: contain;\n}\n.real-name__item .icon.icon-succ {\n  background: url('https://p0.ssl.qhimg.com/t01348ca7b1f4664b79.png') center center no-repeat;\n  background-size: contain;\n}\n.real-name__item .hint {\n  padding-left: 70px;\n  margin: 0;\n  height: 18px;\n  line-height: 18px;\n  color: red;\n  font-size: 14px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n}\n.real-name__submit {\n  display: block;\n  margin: auto;\n  margin-top: 5px;\n  background: url('https://p0.ssl.qhimg.com/t01d87ca5d77cdf29d4.png') center center no-repeat;\n  width: 200px;\n  height: 42px;\n  line-height: 42px;\n  color: #fff;\n  font-size: 18px;\n  text-align: center;\n  text-decoration: none;\n  outline: none;\n  cursor: pointer;\n}\n.real-name__bottom {\n  width: 360px;\n  height: 40px;\n  margin: 15px auto;\n  font-size: 12px;\n  line-height: 20px;\n  padding: 0 0 8px;\n  color: #999;\n  display: block;\n  text-align: left;\n}\n.real-name__bottom span {\n  color: red;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(14);
            var content = __webpack_require__(95);

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(15);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ src_RealNamePcSdk; });

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(1);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(2);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/regenerator/index.js
var regenerator = __webpack_require__(19);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(30);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(16);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/react-hot-loader/index.js
var react_hot_loader = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__(5);

// EXTERNAL MODULE: ./node_modules/react-router-redux/lib/index.js
var react_router_redux_lib = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/redux-thunk/lib/index.js
var redux_thunk_lib = __webpack_require__(42);
var redux_thunk_lib_default = /*#__PURE__*/__webpack_require__.n(redux_thunk_lib);

// EXTERNAL MODULE: ./node_modules/history/index.js
var node_modules_history = __webpack_require__(31);

// CONCATENATED MODULE: ./src/common/history.js

var history_history = Object(node_modules_history["createBrowserHistory"])();
/* harmony default export */ var common_history = (history_history);
// EXTERNAL MODULE: ./node_modules/redux-immutable/dist/index.js
var dist = __webpack_require__(43);

// EXTERNAL MODULE: ./src/redux/reducer.js + 1 modules
var reducer = __webpack_require__(46);

// CONCATENATED MODULE: ./src/common/rootReducer.js



var reducerMap = {
  router: react_router_redux_lib["routerReducer"],
  data: reducer["a" /* default */]
};
/* harmony default export */ var rootReducer = (Object(dist["combineReducers"])(reducerMap));
// CONCATENATED MODULE: ./src/common/configStore.js





var router = Object(react_router_redux_lib["routerMiddleware"])(common_history);
var middlewares = [redux_thunk_lib_default.a, router];

var devToolsExtension = function devToolsExtension(f) {
  return f;
};

if (false) { var logger, _require, createLogger; }

function configureStore(initialState) {
  var store = Object(redux["createStore"])(rootReducer, initialState, Object(redux["compose"])(redux["applyMiddleware"].apply(void 0, middlewares), devToolsExtension));

  if (false) {}

  return store;
}
// CONCATENATED MODULE: ./src/common/store.js



/**
 * @description: 对外提供store单例
 */


var store_store = /*#__PURE__*/function () {
  function store() {
    classCallCheck_default()(this, store);
  }

  createClass_default()(store, null, [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = configureStore();
      }

      return this._instance;
    }
  }]);

  return store;
}();

/* harmony default export */ var common_store = (store_store);
// EXTERNAL MODULE: ./node_modules/react-hot-loader/root.js
var root = __webpack_require__(44);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(8);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(32);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(33);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(20);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./src/components/Modal/index.less
var components_Modal = __webpack_require__(83);

// CONCATENATED MODULE: ./src/components/Modal/index.js






function _createSuper(Derived) { return function () { var Super = getPrototypeOf_default()(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = getPrototypeOf_default()(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return possibleConstructorReturn_default()(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }






var Modal_Modal = /*#__PURE__*/function (_React$Component) {
  inherits_default()(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    classCallCheck_default()(this, Modal);

    _this = _super.call(this, props);
    _this.modalRoot = document.getElementById('real-name-pc-modal');
    var maskClassName = props.noMask ? 'modal-mask no-mask' : 'modal-mask';
    _this.mask = document.createElement('div');

    _this.mask.setAttribute('class', maskClassName);

    _this.wrap = document.createElement('div');

    _this.wrap.setAttribute('class', 'modal-wrap');

    return _this;
  }

  createClass_default()(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.modalRoot.appendChild(this.mask);
      this.modalRoot.appendChild(this.wrap);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.modalRoot.removeChild(this.mask);
      this.modalRoot.removeChild(this.wrap);
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react_dom_default.a.createPortal(children, this.wrap);
    }
  }]);

  return Modal;
}(react_default.a.Component);

Modal_Modal.propTypes = {
  noMask: prop_types_default.a.bool,
  children: prop_types_default.a.any.isRequired
};
Modal_Modal.defaultProps = {
  noMask: false
};
/* harmony default export */ var src_components_Modal = (Modal_Modal);
// EXTERNAL MODULE: ./node_modules/classnames/index.js
var classnames = __webpack_require__(12);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./src/components/Tip/index.less
var components_Tip = __webpack_require__(85);

// CONCATENATED MODULE: ./src/components/Tip/index.js





var Tip_Tip = function Tip(_ref) {
  var className = _ref.className,
      title = _ref.title,
      subTitle = _ref.subTitle,
      subTitle2 = _ref.subTitle2,
      content = _ref.content,
      canClose = _ref.canClose,
      onClose = _ref.onClose;
  var componentClassName = classnames_default()('tip', className);
  return /*#__PURE__*/react_default.a.createElement("div", {
    className: componentClassName
  }, /*#__PURE__*/react_default.a.createElement("div", null, /*#__PURE__*/react_default.a.createElement("h3", {
    className: "tip__title"
  }, title), subTitle && /*#__PURE__*/react_default.a.createElement("h3", {
    className: "tip__title"
  }, subTitle), subTitle2 && /*#__PURE__*/react_default.a.createElement("h3", {
    className: "tip__title"
  }, subTitle2), /*#__PURE__*/react_default.a.createElement("main", {
    className: "tip__content"
  }, /*#__PURE__*/react_default.a.createElement("p", null, content))), canClose && /*#__PURE__*/react_default.a.createElement("i", {
    onClick: onClose,
    className: "tip__close"
  }));
};

Tip_Tip.propTypes = {};
Tip_Tip.defaultProps = {
  canClose: true
};
/* harmony default export */ var src_components_Tip = (Tip_Tip);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/slicedToArray.js
var slicedToArray = __webpack_require__(10);
var slicedToArray_default = /*#__PURE__*/__webpack_require__.n(slicedToArray);

// CONCATENATED MODULE: ./src/utils/validate/province-map.js
var provinceMap = {
  11: "北京",
  12: "天津",
  13: "河北",
  14: "山西",
  15: "内蒙古",
  21: "辽宁",
  22: "吉林",
  23: "黑龙江",
  31: "上海",
  32: "江苏",
  33: "浙江",
  34: "安徽",
  35: "福建",
  36: "江西",
  37: "山东",
  41: "河南",
  42: "湖北",
  43: "湖南",
  44: "广东",
  45: "广西",
  46: "海南",
  50: "重庆",
  51: "四川",
  52: "贵州",
  53: "云南",
  54: "西藏",
  61: "陕西",
  62: "甘肃",
  63: "青海",
  64: "宁夏",
  65: "新疆",
  71: "台湾",
  81: "香港",
  82: "澳门",
  91: "国外"
};
/* harmony default export */ var province_map = (provinceMap);
// CONCATENATED MODULE: ./src/utils/validate/rules.js




var rules_Rules = /*#__PURE__*/function () {
  function Rules() {
    classCallCheck_default()(this, Rules);
  }

  createClass_default()(Rules, [{
    key: "checkName",

    /**
     * 检查姓名，2至30个汉字
     * @param {*} name 姓名
     */
    value: function checkName(name) {
      return /^[\u4e00-\u9fa5]{2,30}$/.test(name);
    }
  }, {
    key: "checkCardNull",

    /**
     * 检查身份证非空
     * @param {*} numOfCard 身份证号
     */
    value: function checkCardNull(numOfCard) {
      return !!numOfCard;
    }
  }, {
    key: "checkCardLength",

    /**
     * 检查身份证位数
     * @param {*} numOfCard 身份证号
     */
    value: function checkCardLength(numOfCard) {
      var regExp = new RegExp(/(^\d{15}$)|(^\d{17}(\d|x|X)$)/i);
      return regExp.test(numOfCard);
    }
    /**
     * 检票身份证的省
     * @param {*} numOfCard 身份证号
     */

  }, {
    key: "checkCardProvince",
    value: function checkCardProvince(numOfCard) {
      var province = parseInt(numOfCard.substring(0, 2));
      return !!province_map[province];
    }
  }, {
    key: "checkCardBirthday",

    /**
     * 验证出生日期
     * @param {*} numOfCard 身份证号
     */
    value: function checkCardBirthday(numOfCard) {
      var date = new Date();
      var currentYear = date.getFullYear();
      var year = numOfCard.substring(6, 10);
      var month = numOfCard.substring(10, 12);
      var day = numOfCard.substring(12, 14);
      var dayError = day < 0 || day > 31;
      var monthError = month < 0 || month > 12;
      var yearError = currentYear - year < 3 || currentYear - year > 120;

      if (dayError || monthError || yearError) {
        return false;
      }

      return true;
    }
  }, {
    key: "checkCardAdult",

    /**
     * 验证是否满18岁
     * @param {*} numOfCard 身份证号
     */
    value: function checkCardAdult(numOfCard) {
      var year = Number(numOfCard.substring(6, 10));
      var month = Number(numOfCard.substring(10, 12));
      var day = Number(numOfCard.substring(12, 14));
      var date = new Date();
      var currentYear = date.getFullYear();
      var currentMonth = date.getMonth() + 1;
      var currentDay = date.getDate();

      if (currentYear - year < 18) {
        return false;
      } else if (currentYear - year === 18 && currentMonth < month) {
        return false;
      } else if (currentYear - year === 18 && currentMonth === month && currentDay < day) {
        return false;
      }

      return true;
    }
  }, {
    key: "checkCardParity",

    /**
     * 验证身份证模式
     * @param {*} numOfCard 身份证号
     */
    value: function checkCardParity(numOfCard) {
      if (numOfCard.length === 15) {
        return true;
      }

      var keys = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      var vals = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2'];
      var i = 0;
      var last = 0;

      for (i = 0; i < 17; i++) {
        last += numOfCard.substr(i, 1) * keys[i];
      }

      var lastchar = vals[last % 11];

      if (lastchar == numOfCard.substr(numOfCard.length - 1, 1)) {
        return true;
      }

      return false;
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new Rules();
      }

      return this._instance;
    }
  }]);

  return Rules;
}();

/* harmony default export */ var rules = (rules_Rules.Instance);
// CONCATENATED MODULE: ./src/utils/validate/index.js




var validate_ValidateMate = /*#__PURE__*/function () {
  function ValidateMate() {
    classCallCheck_default()(this, ValidateMate);
  }

  createClass_default()(ValidateMate, [{
    key: "checkName",

    /**
     * 检查姓名，2至30个汉字
     * @param {*} name 姓名
     */
    value: function checkName(name) {
      return rules.checkName(name);
    }
  }, {
    key: "checkCardAdult",

    /**
     * 验证是否满18岁
     * @param {*} numOfCard 身份证号
     */
    value: function checkCardAdult(numOfCard) {
      return rules.checkCardAdult(numOfCard);
    }
  }, {
    key: "checkCard",

    /**
     * 检查身份证
     * @param {*} numOfCard 身份证号
     */
    value: function checkCard(numOfCard) {
      var errorMap = {
        'null': '请输入身份证',
        length: '身份证号码长度错误，请核对！',
        province: '身份证号码证件地区未知，请核对！',
        birthday: '身份证号码出生日期非法，请核对！',
        parity: '身份证号码不符合国定标准，请核对！',
        adult: '未满18周岁无法进行充值'
      };
      var checkResult = {
        isRight: true,
        errorInfo: ''
      };
      var checkRules = [{
        name: 'null',
        rule: rules.checkCardNull
      }, {
        name: 'length',
        rule: rules.checkCardLength
      }, {
        name: 'province',
        rule: rules.checkCardProvince
      }, {
        name: 'birthday',
        rule: rules.checkCardBirthday
      }, {
        name: 'parity',
        rule: rules.checkCardParity
      }];
      checkRules.some(function (ruleItem) {
        if (!ruleItem.rule(numOfCard)) {
          var ruleName = ruleItem.name;
          checkResult.isRight = false;
          checkResult.errorInfo = errorMap[ruleName];
          return true;
        }
      });
      return checkResult;
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new ValidateMate();
      }

      return this._instance;
    }
  }]);

  return ValidateMate;
}();

/* harmony default export */ var validate = (validate_ValidateMate.Instance);
// CONCATENATED MODULE: ./src/utils/logHelper/paramsLog.js



/**
 * @description: 记录参数异常相关的日志
 */
var paramsLog_paramsLog = /*#__PURE__*/function () {
  function paramsLog(prefix) {
    classCallCheck_default()(this, paramsLog);

    this._prefix = prefix;
  }

  createClass_default()(paramsLog, [{
    key: "log",

    /**
     * 输出日志信息
     * @param {*} info 
     */
    value: function log(info) {
      console.log("".concat(this._prefix).concat(info));
    }
    /**
     * 输出异常信息
     * @param {*} info 
     * @param {*} err 
     */

  }, {
    key: "error",
    value: function error(info, err) {
      console.error("".concat(this._prefix).concat(info), err);
    }
    /**
     * 参数类型不对
     */

  }, {
    key: "typeError",
    value: function typeError() {
      this.error('options参数需要是object对象');
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new paramsLog('>> ');
      }

      return this._instance;
    }
  }]);

  return paramsLog;
}();

/* harmony default export */ var logHelper_paramsLog = (paramsLog_paramsLog);
// CONCATENATED MODULE: ./src/utils/logHelper/index.js



/**
 * @description: 日志输出助手
 */


var logHelper_logHelper = /*#__PURE__*/function () {
  function logHelper(prefix) {
    classCallCheck_default()(this, logHelper);

    this._prefix = prefix;
  }

  createClass_default()(logHelper, [{
    key: "log",

    /**
     * 输出日志信息
     * @param {*} info 
     */
    value: function log() {
      var info = [this._prefix].concat(Array.prototype.slice.call(arguments));
      console.log.apply(null, info);
    }
    /**
     * 输出异常信息
     * @param {*} info 
     * @param {*} err 
     */

  }, {
    key: "error",
    value: function error() {
      var info = [this._prefix].concat(Array.prototype.slice.call(arguments));
      console.error.apply(null, info);
    }
    /**
     * 订阅“关闭实名认证”
     */

  }, {
    key: "subscribeCloseRealName",
    value: function subscribeCloseRealName() {
      this.log("\u8BA2\u9605\u201D\u5173\u95ED\u5B9E\u540D\u8BA4\u8BC1\u201C");
    }
    /**
     * 取消订阅”关闭实名认证“
     */

  }, {
    key: "unsubscribeCloseRealName",
    value: function unsubscribeCloseRealName() {
      this.log('取消订阅”关闭实名认证“');
    }
    /**
     * 关闭实名认证
     */

  }, {
    key: "closeRealName",
    value: function closeRealName() {
      this.log('关闭实名认证');
    }
    /**
     * 订阅”提交实名认证“
     */

  }, {
    key: "subscribeSubmitRealName",
    value: function subscribeSubmitRealName() {
      this.log('订阅”提交实名认证“');
    }
    /**
     * 取消订阅“提交实名认证”
     */

  }, {
    key: "unsubscribeSubmitRealName",
    value: function unsubscribeSubmitRealName() {
      this.log('取消订阅“提交实名认证”');
    }
    /**
     * 实名认证成功
     */

  }, {
    key: "submitRealNameSuccess",
    value: function submitRealNameSuccess() {
      this.log('实名认证成功');
    }
    /**
     * 实名认证异常
     */

  }, {
    key: "submitRealNameError",
    value: function submitRealNameError(err) {
      this.error('实名认证异常', err);
    }
  }, {
    key: "paramsLog",

    /**
     * 参数相关的日志
     */
    get: function get() {
      return logHelper_paramsLog.Instance;
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new logHelper('>> ');
      }

      return this._instance;
    }
  }]);

  return logHelper;
}();

/* harmony default export */ var utils_logHelper = (logHelper_logHelper);
// EXTERNAL MODULE: ./src/redux/constants.js
var constants = __webpack_require__(3);

// CONCATENATED MODULE: ./src/utils/storeHelper.js



/**
 * @description: 订阅store里的相关数据
 */



var logInstance = utils_logHelper.Instance;
var storeInstance = common_store.Instance;

var storeHelper_storeHelper = /*#__PURE__*/function () {
  function storeHelper(store) {
    classCallCheck_default()(this, storeHelper);

    // redux里的store
    this._store = store;
  }

  createClass_default()(storeHelper, [{
    key: "getRealNameWindowStatus",

    /**
     * 获取实名认证窗体的状态（显示或关闭）
     */
    value: function getRealNameWindowStatus() {
      return this.state.getIn(['data', 'realName', 'show']);
    }
    /**
     * 获取实名认证结果
     */

  }, {
    key: "getRealNameSubmitResult",
    value: function getRealNameSubmitResult() {
      return this.state.getIn(['data', 'realName', 'add', 'result']);
    }
    /**
     * 订阅关闭实名认证
     */

  }, {
    key: "subscribeCloseRealName",
    value: function subscribeCloseRealName(onClose) {
      var _this = this;

      var oldWindowStatus = this.getRealNameWindowStatus();

      var handleStoreChange = function handleStoreChange() {
        var windowStatus = _this.getRealNameWindowStatus();

        if (windowStatus !== oldWindowStatus) {
          if (typeof onClose === 'function') {
            logInstance.closeRealName();
            onClose();
          }

          logInstance.unsubscribeCloseRealName();
          unsubscribeCloseRealName();
        }
      };

      logInstance.subscribeCloseRealName();
      var unsubscribeCloseRealName = this.store.subscribe(handleStoreChange);
    }
    /**
     * 订阅提交实名认证
     * @param {*} param
     */

  }, {
    key: "subscribeSubmitRealName",
    value: function subscribeSubmitRealName(_ref) {
      var _this2 = this;

      var onSubmitSuccess = _ref.onSubmitSuccess,
          onSubmitError = _ref.onSubmitError;
      var oldSubmitResult = this.getRealNameSubmitResult();

      var handleStoreChange = function handleStoreChange() {
        var submitResult = _this2.getRealNameSubmitResult();

        if (submitResult === oldSubmitResult) {
          return;
        }

        oldSubmitResult = submitResult;
        var result = submitResult.toJS();

        if (result.error_code !== '0') {
          logInstance.submitRealNameError(result);
          alert(result.error);

          if (typeof onSubmitError === 'function') {
            onSubmitError({
              errno: result.error_code,
              errmsg: result.error
            });
          }

          return;
        }

        var ret = result.ret;

        if (ret.code !== '999') {
          logInstance.submitRealNameError(result);
          alert(ret.msg);

          if (typeof onSubmitError === 'function') {
            onSubmitError({
              errno: ret.code,
              errmsg: ret.msg
            });
          }

          return;
        }

        logInstance.submitRealNameSuccess();
        alert('实名认证成功！');

        if (typeof onSubmitSuccess === 'function') {
          onSubmitSuccess(result);
        }

        logInstance.unsubscribeSubmitRealName();
        unsubscribeSubmitRealName();
        return;
      };

      logInstance.subscribeSubmitRealName();
      var unsubscribeSubmitRealName = this.store.subscribe(handleStoreChange);
    } // 设置popup数据

  }, {
    key: "setPopupData",
    value: function setPopupData(data) {
      this.store.dispatch({
        type: constants["g" /* SET_POPUP_DATA */],
        data: data
      });
    } // 更新实名数据

  }, {
    key: "updateRealNameData",
    value: function updateRealNameData(data) {
      this.store.dispatch({
        type: constants["j" /* UPDATE_REAL_NAME_DATA */],
        data: data
      });
    }
  }, {
    key: "store",

    /**
     * 获取redux里的store
     */
    get: function get() {
      return this._store;
    }
    /**
     * 获取redux里的state
     */

  }, {
    key: "state",
    get: function get() {
      return this.store.getState();
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new storeHelper(storeInstance);
      }

      return this._instance;
    }
  }]);

  return storeHelper;
}();

/* harmony default export */ var utils_storeHelper = (storeHelper_storeHelper);
// CONCATENATED MODULE: ./src/utils/paramsHelper.js



/**
 * @description: 验证相关的参数
 */

var paramsHelper_logInstance = utils_logHelper.Instance;

var paramsHelper_paramsHelper = /*#__PURE__*/function () {
  function paramsHelper() {
    classCallCheck_default()(this, paramsHelper);
  }

  createClass_default()(paramsHelper, [{
    key: "validateRealNameParams",

    /**
     * 验证显示实名认证时的options参数
     * @param {*} options 
     */
    value: function validateRealNameParams(options) {
      // 参数不能为空
      if (!options) {
        paramsHelper_logInstance.error('显示实名认证所传的参数中，缺少参数“options”');
        return false;
      } // 参数需要为object


      if (Object.prototype.toString.call(options) !== '[object Object]') {
        paramsHelper_logInstance.error('显示实名认证所传的参数中，“options”的类型需要为object');
        return false;
      } // options里的必传参数


      var keys = ['appkey', 'qid', 'platform', 'idcard_check_type'];
      var paramError = keys.some(function (param) {
        // 验证参数是否已传
        if (typeof options[param] === 'undefined') {
          paramsHelper_logInstance.error("\u663E\u793A\u5B9E\u540D\u8BA4\u8BC1\u6240\u4F20\u7684\u53C2\u6570\u4E2D\uFF0Coptions\u91CC\u7F3A\u5C11\u53C2\u6570".concat(param));
          return true;
        } // 验证参数是否为空


        if (param !== 'appkey' && !options[param]) {
          paramsHelper_logInstance.error("\u663E\u793A\u5B9E\u540D\u8BA4\u8BC1\u6240\u4F20\u7684\u53C2\u6570\u4E2D\uFF0Coptions\u91CC\u7684\u53C2\u6570".concat(param, "\u4E0D\u80FD\u4E3A\u7A7A"));
          return true;
        }
      });
      return paramError ? false : true;
    }
    /**
     * 验证参数的key （拉取实名认证时需要）
     * @param {*} params 
     * @param {*} keys 
     */

  }, {
    key: "validateKeys",
    value: function validateKeys(options, keys) {
      if (!this.isObjectAndNotNull(options)) {
        paramsHelper_logInstance.error('参数类型错误，需要为非空对象');
        return false;
      }

      if (!keys) {
        keys = Object.keys(options);
      }

      var paramError = keys.some(function (param) {
        // 验证参数是否已传
        if (typeof options[param] === 'undefined') {
          paramsHelper_logInstance.error("\u7F3A\u5C11\u53C2\u6570".concat(param));
          return true;
        } // 验证参数是否为空


        if (param !== 'appkey' && !options[param]) {
          paramsHelper_logInstance.error("\u53C2\u6570".concat(param, "\u4E0D\u80FD\u4E3A\u7A7A"));
          return true;
        }
      });
      return paramError ? false : true;
    }
    /**
     * 验证参数是否为非空对象类型
     * @param {*} options 
     */

  }, {
    key: "isObjectAndNotNull",
    value: function isObjectAndNotNull(options) {
      // 参数不能为空
      if (!options) {
        return false;
      } // 参数需要为object


      if (Object.prototype.toString.call(options) !== '[object Object]') {
        return false;
      }

      return true;
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new paramsHelper();
      }

      return this._instance;
    }
  }]);

  return paramsHelper;
}();

/* harmony default export */ var utils_paramsHelper = (paramsHelper_paramsHelper);
// CONCATENATED MODULE: ./src/utils/modelData.js



/**
 * @description: 处理实名相关的模型数据
 */
var modelData_modelData = /*#__PURE__*/function () {
  function modelData() {
    classCallCheck_default()(this, modelData);

    // 用户qid
    this._qid = null; // 游戏的key

    this._gkey = null; // 充值函数

    this._rechargeFun = null; // 实名数据

    this._realNameData = null; // 支付参数

    this._fcmParams = null; // 后端返回的fcm_pay_status信息

    this._fcmPayStatus = null;
  }

  createClass_default()(modelData, [{
    key: "setQid",

    /**
     * 设置qid
     * @param {*} qid 
     */
    value: function setQid(qid) {
      this._qid = qid;
    }
    /**
     * 读取qid
     */

  }, {
    key: "getQid",
    value: function getQid() {
      return this._qid;
    }
    /**
     * 设置gkey
     * @param {*} gkey 游戏的key
     */

  }, {
    key: "setGkey",
    value: function setGkey(gkey) {
      this._gkey = gkey;
    }
    /**
     * 读取gkey
     */

  }, {
    key: "getGkey",
    value: function getGkey() {
      return this._gkey;
    }
    /**
     * 设置实名数据
     * @param {*} realNameData 从服务端获取到的实名信息
     */

  }, {
    key: "setRealNameData",
    value: function setRealNameData(realNameData) {
      this._realNameData = realNameData;
    }
    /**
     * 是否在未成年人可充值的时间段内
     */

  }, {
    key: "canRechargeTime",
    value: function canRechargeTime() {
      return this._realNameData.is_forbid_time === '0';
    }
    /**
     * 判断是否需要进行实名认证
     */

  }, {
    key: "needCheckRealName",
    value: function needCheckRealName() {
      return this._realNameData.auth_type !== '0';
    }
    /**
     * 获取实名状态
     */

  }, {
    key: "getRealNameStatus",
    value: function getRealNameStatus() {
      return this._realNameData.status;
    }
    /**
     * 是否可以关闭实名认证
     */

  }, {
    key: "canCloseRealName",
    value: function canCloseRealName() {
      return this._realNameData.auth_type === '2';
    }
    /**
     * 设置充值函数
     * @param {*} rechargeFun 充值函数
     */

  }, {
    key: "setRecharge",
    value: function setRecharge(rechargeFun) {
      this._rechargeFun = rechargeFun;
    }
    /**
     * 调用充值
     */

  }, {
    key: "dispatchRecharge",
    value: function dispatchRecharge() {
      this._rechargeFun();
    }
    /**
     * 获取充值函数
     */

  }, {
    key: "getRechargeFun",
    value: function getRechargeFun() {
      return this._rechargeFun;
    }
    /**
     * 设置支付防沉迷检验需要的参数
     * @param {*} params 
     */

  }, {
    key: "setFcmParams",
    value: function setFcmParams(params) {
      this._fcmParams = params;
    }
    /**
     * 获取支付防沉迷检验需要的参数
     */

  }, {
    key: "getFcmParams",
    value: function getFcmParams() {
      return this._fcmParams;
    }
    /**
     * 设置后端返回的防沉迷支付信息
     * @param {*} value 
     */

  }, {
    key: "setFcmPayStatus",
    value: function setFcmPayStatus(value) {
      this._fcmPayStatus = value;
    }
    /**
     * 获取防沉迷支付的信息
     */

  }, {
    key: "getFcmPayStatus",
    value: function getFcmPayStatus() {
      return this._fcmPayStatus;
    }
    /**
     * 未成年年龄限制是否开启
     */

  }, {
    key: "ageLimitIsOpen",
    value: function ageLimitIsOpen() {
      return this._realNameData.auth_type === '3' && this._realNameData.pay_age_ctl === '1';
    }
    /**
     * 是否已成年
     */

  }, {
    key: "isAdult",
    value: function isAdult() {
      return this._realNameData.status === '2';
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new modelData();
      }

      return this._instance;
    }
  }]);

  return modelData;
}();

/* harmony default export */ var utils_modelData = (modelData_modelData);
// CONCATENATED MODULE: ./src/utils/index.js





// EXTERNAL MODULE: ./src/components/RealName/index.less
var components_RealName = __webpack_require__(92);

// CONCATENATED MODULE: ./src/components/RealName/index.js






var RealName_RealName = function RealName(_ref) {
  var className = _ref.className,
      canClose = _ref.canClose,
      onClose = _ref.onClose,
      onSubmit = _ref.onSubmit;
  var componentClassName = classnames_default()('real-name', className); // 姓名

  var _useState = Object(react["useState"])(''),
      _useState2 = slicedToArray_default()(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1]; // 姓名是否有效


  var _useState3 = Object(react["useState"])(null),
      _useState4 = slicedToArray_default()(_useState3, 2),
      isNameValid = _useState4[0],
      setIsNameValid = _useState4[1]; // 姓名无效的错误提示信息


  var _useState5 = Object(react["useState"])(null),
      _useState6 = slicedToArray_default()(_useState5, 2),
      nameErrorInfo = _useState6[0],
      setNameErrorInfo = _useState6[1]; // 身份证号


  var _useState7 = Object(react["useState"])(''),
      _useState8 = slicedToArray_default()(_useState7, 2),
      card = _useState8[0],
      setCard = _useState8[1]; // 身份证是否有效


  var _useState9 = Object(react["useState"])(null),
      _useState10 = slicedToArray_default()(_useState9, 2),
      isCardValid = _useState10[0],
      setIsCardValid = _useState10[1]; // 身份证无效时的错误提示信息


  var _useState11 = Object(react["useState"])(null),
      _useState12 = slicedToArray_default()(_useState11, 2),
      cardErrorInfo = _useState12[0],
      setCardErrorInfo = _useState12[1];
  /**
   * 处理输入框值的变更
   * @param {*} e 
   */


  var handleInputChane = function handleInputChane(e) {
    var inputName = e.target.name;
    var value = e.target.value;

    if (inputName === 'name') {
      setName(value);
    } else if (inputName === 'card') {
      setCard(value);
    }
  };
  /**
   * 处理姓名输入框失去焦点事件
   * @param {*} e 
   */


  var handleNameBlur = function handleNameBlur(e) {
    var name = e.target.value;

    if (validate.checkName(name)) {
      setIsNameValid(true);
      setNameErrorInfo(null);
    } else {
      setIsNameValid(false);
      setNameErrorInfo('请输入真实姓名');
    }
  };
  /**
   * 处理身份证输入框失去焦点事件
   * @param {*} e 
   */


  var handleCardBlur = function handleCardBlur(e) {
    var numOfCard = e.target.value;
    var checkCardResult = validate.checkCard(numOfCard);

    if (checkCardResult.isRight) {
      setIsCardValid(true);
      setCardErrorInfo(null);
    } else {
      setIsCardValid(false);
      setCardErrorInfo(checkCardResult.errorInfo);
    }
  };
  /**
   * 处理关闭事件
   */


  var handleClose = function handleClose() {
    onClose();
  };
  /**
   * 处理提交实名认证
   */


  var handleSubmit = function handleSubmit() {
    if (!isNameValid) {
      setIsNameValid(false);
      setNameErrorInfo('请输入真实姓名');
      return false;
    }

    if (!isCardValid) {
      var checkCardResult = validate.checkCard(card);
      setIsCardValid(false);
      setCardErrorInfo(checkCardResult.errorInfo);
      return false;
    }

    onSubmit(name, card);
  };

  return /*#__PURE__*/react_default.a.createElement("div", {
    className: componentClassName
  }, /*#__PURE__*/react_default.a.createElement("h4", null, "\u4E3A\u4FDD\u62A4\u60A8\u7684\u5408\u6CD5\u6743\u76CA\uFF0C\u8BF7\u5B8C\u5584\u5E10\u53F7\u4FE1\u606F", canClose && /*#__PURE__*/react_default.a.createElement("i", {
    className: "real-name__close",
    onClick: handleClose
  })), /*#__PURE__*/react_default.a.createElement("ul", {
    className: "real-name__title"
  }, /*#__PURE__*/react_default.a.createElement("li", null, "\u8EAB\u4EFD\u8BC1\u7ED1\u5B9A")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "real-name__main"
  }, /*#__PURE__*/react_default.a.createElement("div", {
    className: "real-name__item"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "real-name__item-label"
  }, "\u771F\u5B9E\u59D3\u540D"), /*#__PURE__*/react_default.a.createElement("input", {
    className: "real-name__item-input",
    name: "name",
    type: "text",
    id: "real-name",
    value: name,
    onChange: handleInputChane,
    onBlur: handleNameBlur
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: classnames_default()('icon', {
      'icon-succ': isNameValid,
      'icon-error': isNameValid === false
    })
  }), /*#__PURE__*/react_default.a.createElement("p", {
    className: "hint"
  }, nameErrorInfo)), /*#__PURE__*/react_default.a.createElement("div", {
    className: "real-name__item"
  }, /*#__PURE__*/react_default.a.createElement("span", {
    className: "real-name__item-label"
  }, "\u8EAB\u4EFD\u8BC1"), /*#__PURE__*/react_default.a.createElement("input", {
    className: "real-name__item-input",
    name: "card",
    type: "text",
    id: "real-card",
    value: card,
    onChange: handleInputChane,
    onBlur: handleCardBlur
  }), /*#__PURE__*/react_default.a.createElement("span", {
    className: classnames_default()('icon', {
      'icon-succ': isCardValid,
      'icon-error': isCardValid === false
    })
  }), /*#__PURE__*/react_default.a.createElement("p", {
    className: "hint"
  }, cardErrorInfo)), /*#__PURE__*/react_default.a.createElement("a", {
    className: "real-name__submit",
    id: "bind-approve",
    onClick: handleSubmit
  }, "\u7ACB\u5373\u7ED1\u5B9A")), /*#__PURE__*/react_default.a.createElement("div", {
    className: "real-name__bottom"
  }, "\u6309\u7167\u653F\u5E9C\u90E8\u95E8\u5173\u4E8E\u5B9E\u540D\u6CE8\u518C\u7684\u8981\u6C42\uFF0C\u5728\u60A8", /*#__PURE__*/react_default.a.createElement("span", null, "\u672A\u7ED1\u5B9A\u6709\u6548\u8EAB\u4EFD\u4FE1\u606F\u4E4B\u524D"), "\uFF0C\u5E10\u53F7\u65E0\u6CD5\u6E38\u620F\u548C\u5145\u503C\uFF0C\u656C\u8BF7\u8C05\u89E3\u3002"));
};

/* harmony default export */ var src_components_RealName = (RealName_RealName);
// CONCATENATED MODULE: ./src/components/index.js



// EXTERNAL MODULE: ./src/redux/actions.js
var redux_actions = __webpack_require__(11);

// CONCATENATED MODULE: ./src/containers/PopupContainer/index.js







var PopupContainer_PopupContainer = function PopupContainer(_ref) {
  var show = _ref.show,
      title = _ref.title,
      subTitle = _ref.subTitle,
      subTitle2 = _ref.subTitle2,
      content = _ref.content,
      canClose = _ref.canClose,
      noMask = _ref.noMask,
      actions = _ref.actions;

  var handleClose = function handleClose() {
    actions.updatePopupData({
      show: false
    });
  };

  if (!show) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement(src_components_Modal, {
    noMask: noMask
  }, /*#__PURE__*/react_default.a.createElement(src_components_Tip, {
    title: title,
    subTitle: subTitle,
    subTitle2: subTitle2,
    content: content,
    canClose: canClose,
    onClose: handleClose
  }));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    show: state.getIn(['data', 'popup', 'show']),
    title: state.getIn(['data', 'popup', 'title']),
    subTitle: state.getIn(['data', 'popup', 'subTitle']),
    subTitle2: state.getIn(['data', 'popup', 'subTitle2']),
    content: state.getIn(['data', 'popup', 'content']),
    canClose: state.getIn(['data', 'popup', 'canClose']),
    noMask: state.getIn(['data', 'popup', 'noMask'])
  };
};

var PopupContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updatePopupData: redux_actions["b" /* updatePopupData */]
    }, dispatch)
  };
};

PopupContainer_PopupContainer.defaultProps = {
  noMask: false
};
/* harmony default export */ var containers_PopupContainer = (Object(lib["connect"])(mapStateToProps, PopupContainer_mapDispatchToProps)(PopupContainer_PopupContainer));
// CONCATENATED MODULE: ./src/containers/RealNameContainer/index.js







var RealNameContainer_Home = function Home(_ref) {
  var show = _ref.show,
      canClose = _ref.canClose,
      options = _ref.options,
      actions = _ref.actions;

  var handleClose = function handleClose() {
    actions.updateRealNameData({
      show: false
    });
  };

  var handleSubmit = function handleSubmit(name, card) {
    var addRealName = actions.addRealName;
    addRealName({
      appkey: options.get('appkey'),
      qid: options.get('qid'),
      platform: options.get('platform'),
      idcard_check_type: options.get('idcard_check_type'),
      name: name,
      id: card
    });
  };

  if (!show) {
    return null;
  }

  return /*#__PURE__*/react_default.a.createElement(src_components_Modal, null, /*#__PURE__*/react_default.a.createElement(src_components_RealName, {
    canClose: canClose,
    onClose: handleClose,
    onSubmit: handleSubmit
  }));
};

var RealNameContainer_mapStateToProps = function mapStateToProps(state) {
  return {
    show: state.getIn(['data', 'realName', 'show']),
    canClose: state.getIn(['data', 'realName', 'canClose']),
    // 提交实名认证时需要传递的一些参数
    options: state.getIn(['data', 'realName', 'options'])
  };
};

var RealNameContainer_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updateRealNameData: redux_actions["c" /* updateRealNameData */],
      addRealName: redux_actions["a" /* addRealName */]
    }, dispatch)
  };
};

RealNameContainer_Home.defaultProps = {
  noMask: false
};
/* harmony default export */ var RealNameContainer = (Object(lib["connect"])(RealNameContainer_mapStateToProps, RealNameContainer_mapDispatchToProps)(RealNameContainer_Home));
// CONCATENATED MODULE: ./src/containers/index.js


// EXTERNAL MODULE: ./src/views/Home/index.less
var views_Home = __webpack_require__(94);

// CONCATENATED MODULE: ./src/views/Home/index.js









var Home_Home = function Home(_ref) {
  var showRealName = _ref.showRealName,
      showPopup = _ref.showPopup;

  if (showRealName) {
    return /*#__PURE__*/react_default.a.createElement(RealNameContainer, null);
  }

  return /*#__PURE__*/react_default.a.createElement(react_default.a.Fragment, null, showPopup && /*#__PURE__*/react_default.a.createElement(containers_PopupContainer, null));
};

var Home_mapStateToProps = function mapStateToProps(state) {
  return {
    showRealName: state.getIn(['data', 'realName', 'show']),
    showPopup: state.getIn(['data', 'popup', 'show'])
  };
};

var Home_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updatePopupData: redux_actions["b" /* updatePopupData */]
    }, dispatch)
  };
};

Home_Home.defaultProps = {
  noMask: false
};
/* harmony default export */ var src_views_Home = (Object(lib["connect"])(Home_mapStateToProps, Home_mapDispatchToProps)(Home_Home));
// CONCATENATED MODULE: ./src/views/index.js

// CONCATENATED MODULE: ./src/real-name-pc/app.js




var app_App = function App() {
  return /*#__PURE__*/react_default.a.createElement(src_views_Home, null);
};

/* harmony default export */ var app = (Object(root["hot"])(app_App));
// CONCATENATED MODULE: ./src/real-name-pc/view/appView.js








var appView_storeInstance = common_store.Instance;

var appView_appView = /*#__PURE__*/function () {
  function appView() {
    classCallCheck_default()(this, appView);
  }

  createClass_default()(appView, null, [{
    key: "renderApp",
    value: function (_renderApp) {
      function renderApp() {
        return _renderApp.apply(this, arguments);
      }

      renderApp.toString = function () {
        return _renderApp.toString();
      };

      return renderApp;
    }(function () {
      Object(react_dom["render"])( /*#__PURE__*/react_default.a.createElement(react_hot_loader["AppContainer"], null, /*#__PURE__*/react_default.a.createElement(lib["Provider"], {
        store: appView_storeInstance
      }, /*#__PURE__*/react_default.a.createElement(app, null))), document.getElementById('real-name-pc'));

      if (false) {}
    })
  }]);

  return appView;
}();

/* harmony default export */ var view_appView = (appView_appView);
// CONCATENATED MODULE: ./src/real-name-pc/view/realNameView.js



/**
 * @description: 实名认证视图 
 */

var storeHelperInstance = utils_storeHelper.Instance;
var realNameView_logInstance = utils_logHelper.Instance;
var paramsInstance = utils_paramsHelper.Instance;

var realNameView_updateRealNameData = function updateRealNameData(data) {
  return storeHelperInstance.updateRealNameData(data);
};

var realNameView_realNameView = /*#__PURE__*/function () {
  function realNameView() {
    classCallCheck_default()(this, realNameView);
  }

  createClass_default()(realNameView, [{
    key: "closeRealName",
    // 关闭实名
    value: function closeRealName() {
      realNameView_logInstance.closeRealName();
      realNameView_updateRealNameData({
        show: false
      });
    }
    /**
     * 显示实名认证
     * @param {*} canClose 是否可关闭
     */

  }, {
    key: "showRealName",
    value: function showRealName(_ref) {
      var _this = this;

      var appkey = _ref.appkey,
          qid = _ref.qid,
          platform = _ref.platform,
          idcard_check_type = _ref.idcard_check_type,
          canClose = _ref.canClose,
          onClose = _ref.onClose,
          onSubmitSuccess = _ref.onSubmitSuccess,
          onSubmitError = _ref.onSubmitError;
      // 验证参数是否合法
      var pass = paramsInstance.validateRealNameParams({
        appkey: appkey,
        qid: qid,
        platform: platform,
        idcard_check_type: idcard_check_type
      });

      if (!pass) {
        return;
      } // 更新redux状态


      realNameView_updateRealNameData({
        show: true,
        canClose: canClose,
        options: {
          appkey: appkey,
          qid: qid,
          platform: platform,
          idcard_check_type: idcard_check_type
        }
      }); // 处理实名认证成功

      var handleSubmitSuccess = function handleSubmitSuccess(result) {
        _this.closeRealName();

        onSubmitSuccess(result);
      };

      storeHelperInstance.subscribeCloseRealName(onClose);
      storeHelperInstance.subscribeSubmitRealName({
        onSubmitError: onSubmitError,
        onSubmitSuccess: handleSubmitSuccess
      });
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new realNameView();
      }

      return this._instance;
    }
  }]);

  return realNameView;
}();

/* harmony default export */ var view_realNameView = (realNameView_realNameView);
// CONCATENATED MODULE: ./src/real-name-pc/config.js
/**
 * author: liuyang9
 * description: 提示信息的相关配置
 */
// 通知名称
var NoticeName = '《关于防止未成年人沉迷网络游戏的通知》';
var Config = {
  // 支付相关提示信息的配置
  pay: {
    // 年龄小于8周岁的提示
    ageLessThanEight: {
      title: '根据相关部门对于未成年用户监管要求',
      subTitle: '该帐号不能充值游戏',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C\u7F51\u7EDC\u6E38\u620F\u4F01\u4E1A\u4E0D\u5F97\u4E3A\u672A\u6EE18\u5468\u5C81\u4EE5\u4E0B\u7528\u6237\u63D0\u4F9B\u6E38\u620F\u4ED8\u8D39\u670D\u52A1\u3002")
    },
    // 8-16周岁充值金额达到上限的提示
    ageLessThanSixteen: {
      title: '该游戏本月累计充值金额已达到上限',
      subTitle: '每个游戏每月累计充值不能超过200元',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C8~16\u5468\u5C81\u7528\u6237\u5355\u6B21\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC750\u5143\u4EBA\u6C11\u5E01\uFF0C\u6BCF\u6B3E\u6E38\u620F\u6BCF\u6708\u7D2F\u8BA1\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC7200\u5143\u4EBA\u6C11\u5E01\u3002")
    },
    // 8-16周岁可充值，但充值金额达到上限的提示
    ageLessThanSixteenCharge: {
      title: '本次充值金额超过单笔上限',
      subTitle: '请重新选择充值金额',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C8~16\u5468\u5C81\u7528\u6237\u5355\u6B21\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC750\u5143\u4EBA\u6C11\u5E01\uFF0C\u6BCF\u6B3E\u6E38\u620F\u6BCF\u6708\u7D2F\u8BA1\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC7200\u5143\u4EBA\u6C11\u5E01\u3002")
    },
    // 16-18周岁充值金额达到上限的提示
    ageLessThanEighteen: {
      title: '该游戏本月累计充值金额已达到上限',
      subTitle: '每个游戏每月累计充值不能超过400元',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C16~18\u5468\u5C81\u7528\u6237\u5355\u6B21\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC7100\u5143\u4EBA\u6C11\u5E01\uFF0C\u6BCF\u6B3E\u6E38\u620F\u6BCF\u6708\u7D2F\u8BA1\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC7400\u5143\u4EBA\u6C11\u5E01\u3002")
    },
    // 16-18周岁可充值，但充值金额达到上限的提示
    ageLessThanEighteenCharge: {
      title: '本次充值金额超过单笔上限',
      subTitle: '请重新选择充值金额',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C16~18\u5468\u5C81\u7528\u6237\u5355\u6B21\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC7100\u5143\u4EBA\u6C11\u5E01\uFF0C\u6BCF\u6B3E\u6E38\u620F\u6BCF\u6708\u7D2F\u8BA1\u5145\u503C\u91D1\u989D\u4E0D\u5F97\u8D85\u8FC7400\u5143\u4EBA\u6C11\u5E01\u3002")
    }
  },
  // 登录后相关提示信息的配置
  login: {
    // 登录后时长已达到上限的提示
    gameTimeLimit: {
      title: '您今日在该游戏时长已经达到上限',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C\u672A\u6210\u5E74\u7528\u6237\u6CD5\u5B9A\u8282\u5047\u65E5\u6BCF\u65E5\u7D2F\u8BA1\u4E0D\u5F97\u8D85\u8FC73\u5C0F\u65F6\uFF0C\u5176\u5B83\u65F6\u95F4\u6BCF\u65E5\u4E0D\u5F97\u8D85\u8FC71.5\u5C0F\u65F6\u3002")
    }
  },
  // 游戏中相关提示信息的配置
  playing: {
    // 游戏中时长已达到上限的提示
    gameTimeLimit: {
      title: '您今日在该游戏时长已达到上限',
      subTitle: '30秒后将返回登录页',
      content: "\u6839\u636E".concat(NoticeName, "\uFF0C\u672A\u6210\u5E74\u7528\u6237\u6CD5\u5B9A\u8282\u5047\u65E5\u6BCF\u65E5\u7D2F\u8BA1\u4E0D\u5F97\u8D85\u8FC73\u5C0F\u65F6\uFF0C\u5176\u5B83\u65F6\u95F4\u6BCF\u65E5\u4E0D\u5F97\u8D85\u8FC71.5\u5C0F\u65F6\u3002")
    }
  }
};
/* harmony default export */ var real_name_pc_config = (Config);
// CONCATENATED MODULE: ./src/real-name-pc/view/popupView.js



/**
 * @description: 弹窗提示视图
 */


var popupView_storeHelperInstance = utils_storeHelper.Instance;

var popupView_setPopupData = function setPopupData(data) {
  return popupView_storeHelperInstance.setPopupData(data);
};

var popupView_popupView = /*#__PURE__*/function () {
  function popupView() {
    classCallCheck_default()(this, popupView);
  }

  createClass_default()(popupView, [{
    key: "closePopup",
    // 关闭弹窗
    value: function closePopup() {
      popupView_setPopupData({
        show: false
      });
    } // 未成年人在禁止充值时间段内，且未开启年龄段限制

  }, {
    key: "showNonage",
    value: function showNonage() {
      popupView_setPopupData({
        show: true,
        content: '根据相关部门对于未成年用户的监管要求，该时段暂停相关游戏和充值服务。'
      });
    } // 年龄小于8周岁的提示

  }, {
    key: "showEight",
    value: function showEight() {
      var _Config$pay$ageLessTh = real_name_pc_config.pay.ageLessThanEight,
          title = _Config$pay$ageLessTh.title,
          subTitle = _Config$pay$ageLessTh.subTitle,
          content = _Config$pay$ageLessTh.content;
      popupView_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content
      });
    } // 8~16周岁不可充值，充值已达到上限的提示

  }, {
    key: "showSixteen",
    value: function showSixteen() {
      var _Config$pay$ageLessTh2 = real_name_pc_config.pay.ageLessThanSixteen,
          title = _Config$pay$ageLessTh2.title,
          subTitle = _Config$pay$ageLessTh2.subTitle,
          content = _Config$pay$ageLessTh2.content;
      popupView_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content
      });
    } // 8~16周岁可充值，但充值金额达到上限的提示

  }, {
    key: "showSixteenCharge",
    value: function showSixteenCharge() {
      var _Config$pay$ageLessTh3 = real_name_pc_config.pay.ageLessThanSixteenCharge,
          title = _Config$pay$ageLessTh3.title,
          subTitle = _Config$pay$ageLessTh3.subTitle,
          content = _Config$pay$ageLessTh3.content;
      popupView_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content
      });
    } // 16~18周岁不可充值，充值已达到上限的提示

  }, {
    key: "showEighteen",
    value: function showEighteen() {
      var _Config$pay$ageLessTh4 = real_name_pc_config.pay.ageLessThanEighteen,
          title = _Config$pay$ageLessTh4.title,
          subTitle = _Config$pay$ageLessTh4.subTitle,
          content = _Config$pay$ageLessTh4.content;
      popupView_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content
      });
    } // 16~18周岁可充值，但充值金额已达到上限的提示

  }, {
    key: "showEighteenCharge",
    value: function showEighteenCharge() {
      var _Config$pay$ageLessTh5 = real_name_pc_config.pay.ageLessThanEighteenCharge,
          title = _Config$pay$ageLessTh5.title,
          subTitle = _Config$pay$ageLessTh5.subTitle,
          content = _Config$pay$ageLessTh5.content;
      popupView_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content
      });
    } // 登录后游戏时长已达到上限时的提示

  }, {
    key: "showTimeLimitAfterLogin",
    value: function showTimeLimitAfterLogin() {
      var _Config$login$gameTim = real_name_pc_config.login.gameTimeLimit,
          title = _Config$login$gameTim.title,
          content = _Config$login$gameTim.content;
      popupView_setPopupData({
        show: true,
        title: title,
        content: content,
        canClose: false,
        noMask: true
      });
    } // 游戏中时长已达到上限时的提示

  }, {
    key: "showTimeLimitWhenPlaying",
    value: function showTimeLimitWhenPlaying() {
      var _Config$playing$gameT = real_name_pc_config.playing.gameTimeLimit,
          title = _Config$playing$gameT.title,
          subTitle = _Config$playing$gameT.subTitle,
          content = _Config$playing$gameT.content;
      popupView_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content,
        canClose: false,
        noMask: true
      });
    }
    /**
     * 根据check接口返回的状态码和年龄，来弹相应的弹窗提示
     * @param {*} status 
     * @param {*} ageLower 
     */

  }, {
    key: "showTipByStatus",
    value: function showTipByStatus(status, ageLower) {
      var popupFuncMap = {
        1: null,
        2: {
          0: this.showEight,
          8: this.showSixteenCharge,
          16: this.showEighteenCharge
        },
        3: {
          0: this.showEight,
          8: this.showSixteen,
          16: this.showEighteen
        }
      };
      var popupFunc = popupFuncMap[status][ageLower];

      if (popupFunc) {
        popupFunc();
      }
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new popupView();
      }

      return this._instance;
    }
  }]);

  return popupView;
}();

/* harmony default export */ var view_popupView = (popupView_popupView);
// CONCATENATED MODULE: ./src/real-name-pc/view/index.js



// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(7);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/request/fetchRealName.js
/**
 * @description: 获取实名认证信息
 */


var fetchRealName_fetchRealName = function fetchRealName(_ref) {
  var appkey = _ref.appkey,
      qids = _ref.qids,
      platform = _ref.platform,
      idcard_check_type = _ref.idcard_check_type;
  return new Promise(function (resolve, reject) {
    axios_default.a.get('/user/open_check_auth', {
      params: {
        appkey: appkey,
        qids: qids,
        platform: platform,
        idcard_check_type: idcard_check_type,
        ts: Math.ceil(new Date().getTime() / 1000)
      }
    }).then(function (response) {
      var data = response.data;

      if (data.error_code === '0') {
        resolve(data.ret[0]);
        return;
      }

      reject({
        errno: data.error_code,
        errmsg: data.error
      });
    })["catch"](function (error) {
      reject(error);
    });
  });
};

/* harmony default export */ var request_fetchRealName = (fetchRealName_fetchRealName);
// CONCATENATED MODULE: ./src/request/addRealName.js
/**
 * @description: 提交实名认证
 */


var addRealName_addRealName = function addRealName(_ref) {
  var appkey = _ref.appkey,
      qid = _ref.qid,
      name = _ref.name,
      id = _ref.id,
      platform = _ref.platform,
      idcard_check_type = _ref.idcard_check_type;
  return new Promise(function (resolve, reject) {
    axios_default.a.post('/user/open_auth', {
      appkey: appkey,
      qid: qid,
      name: name,
      id: id,
      platform: platform,
      idcard_check_type: idcard_check_type,
      ts: Math.ceil(new Date().getTime() / 1000)
    }).then(function (res) {
      return resolve(res.data);
    })["catch"](function (err) {
      return reject(err);
    });
  });
};

/* harmony default export */ var request_addRealName = (addRealName_addRealName);
// CONCATENATED MODULE: ./src/request/checkAmount.js
/**
 * @description: 检查充值金额是否允许充值
 */


var checkAmount_checkAmount = function checkAmount(_ref) {
  var amount = _ref.amount,
      gkey = _ref.gkey;
  return new Promise(function (resolve, reject) {
    axios_default.a.post('/api/order/check', {
      amount: amount,
      gkey: gkey
    }).then(function (res) {
      var data = res.data;

      if (data.errno === 0) {
        resolve(data.data);
        return;
      }

      reject({
        errno: data.errno,
        errmsg: data.errmsg
      });
    })["catch"](function (err) {
      return reject(err);
    });
  });
};

/* harmony default export */ var request_checkAmount = (checkAmount_checkAmount);
// CONCATENATED MODULE: ./src/request/index.js



// CONCATENATED MODULE: ./src/real-name-pc/data/realNameData.js




var realNameData_paramsInstance = utils_paramsHelper.Instance;
var modelDataInstance = utils_modelData.Instance;
var realNameData_logInstance = utils_logHelper.Instance;

var realNameData_realNameData = /*#__PURE__*/function () {
  function realNameData() {
    classCallCheck_default()(this, realNameData);
  }
  /**
   * 获取实名信息
   * @param {*} param0 
   */


  createClass_default()(realNameData, null, [{
    key: "fetch",
    value: function fetch(_ref) {
      var appkey = _ref.appkey,
          qids = _ref.qids,
          platform = _ref.platform,
          idcard_check_type = _ref.idcard_check_type;
      return new Promise(function (resolve, reject) {
        // 验证参数是否合法
        var pass = realNameData_paramsInstance.validateKeys({
          appkey: appkey,
          qids: qids,
          platform: platform,
          idcard_check_type: idcard_check_type
        });

        if (!pass) {
          reject('访问获取实名信息api时，参数异常');
          return;
        }

        request_fetchRealName({
          appkey: appkey,
          qids: qids,
          platform: platform,
          idcard_check_type: idcard_check_type
        }).then(function (res) {
          return resolve(res);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    }
  }, {
    key: "checkAmount",
    value: function checkAmount(_ref2) {
      var _this = this;

      var amount = _ref2.amount,
          gkey = _ref2.gkey;
      return new Promise(function (resolve, reject) {
        var pass = realNameData_paramsInstance.validateKeys({
          amount: amount,
          gkey: gkey
        });

        if (!pass) {
          reject('访问金额检查api时，参数异常');
          return;
        }

        request_checkAmount({
          amount: amount,
          gkey: gkey
        }).then(function (res) {
          _this.storeCheckAmountResult(res);

          resolve(res);
        })["catch"](function (err) {
          return reject(err);
        });
      });
    } // 存储金额验证结果信息

  }, {
    key: "storeCheckAmountResult",
    value: function storeCheckAmountResult(res) {
      try {
        modelDataInstance.setRealNameData(res.open_check_auth);
        modelDataInstance.setFcmPayStatus(res.fcm_pay_status);
      } catch (error) {
        realNameData_logInstance.error('存储金额验证结果信息时出现异常', error);
      }
    }
  }]);

  return realNameData;
}();

/* harmony default export */ var data_realNameData = (realNameData_realNameData);
// CONCATENATED MODULE: ./src/real-name-pc/data/index.js

// CONCATENATED MODULE: ./src/real-name-pc/config/eventConfig.js



var eventConfig_eventConfig = /*#__PURE__*/function () {
  function eventConfig() {
    classCallCheck_default()(this, eventConfig);
  }

  createClass_default()(eventConfig, null, [{
    key: "onCloseRealName",
    set: function set(callback) {
      this._onCloseRealName = callback;
    },
    get: function get() {
      return this._onCloseRealName;
    }
  }, {
    key: "onSubmitSuccess",
    set: function set(callback) {
      this._onSubmitSuccess = callback;
    },
    get: function get() {
      return this._onSubmitSuccess;
    }
  }, {
    key: "onSubmitError",
    set: function set(callback) {
      this._onSubmitError = callback;
    },
    get: function get() {
      return this._onSubmitError;
    }
  }]);

  return eventConfig;
}();

/* harmony default export */ var config_eventConfig = (eventConfig_eventConfig);
// CONCATENATED MODULE: ./src/real-name-pc/config/paramsConfig.js



var paramsConfig_paramsConfig = /*#__PURE__*/function () {
  function paramsConfig() {
    classCallCheck_default()(this, paramsConfig);
  }

  createClass_default()(paramsConfig, null, [{
    key: "appkey",
    set: function set(value) {
      this._appkey = value;
    },
    get: function get() {
      return this._appkey;
    }
  }, {
    key: "qid",
    set: function set(value) {
      this._qid = value;
    },
    get: function get() {
      return this._qid;
    }
  }, {
    key: "platform",
    set: function set(value) {
      this._platform = value;
    },
    get: function get() {
      return this._platform;
    }
  }, {
    key: "idcard_check_type",
    set: function set(value) {
      this._idcard_check_type = value;
    },
    get: function get() {
      return this._idcard_check_type;
    }
  }]);

  return paramsConfig;
}();

/* harmony default export */ var config_paramsConfig = (paramsConfig_paramsConfig);
// CONCATENATED MODULE: ./src/real-name-pc/config/index.js


// CONCATENATED MODULE: ./src/real-name-pc/handler/unRealNameHandler.js



/**
 * @description: 实名状态为未实名时的处理器
 */



var realNameViewInstance = view_realNameView.Instance;
var unRealNameHandler_logInstance = utils_logHelper.Instance;

var unRealNameHandler_unRealNameHandler = /*#__PURE__*/function () {
  function unRealNameHandler() {
    classCallCheck_default()(this, unRealNameHandler);
  }

  createClass_default()(unRealNameHandler, null, [{
    key: "exec",
    value: function exec() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        canClose: false
      },
          canClose = _ref.canClose;

      unRealNameHandler_logInstance.log('未实名');
      var appkey = config_paramsConfig.appkey;
      var qid = config_paramsConfig.qid;
      var platform = config_paramsConfig.platform;
      var idcard_check_type = config_paramsConfig.idcard_check_type;
      var onClose = config_eventConfig.onCloseRealName;
      var onSubmitSuccess = config_eventConfig.onSubmitSuccess;
      var onSubmitError = config_eventConfig.onSubmitError;
      realNameViewInstance.showRealName({
        appkey: appkey,
        qid: qid,
        platform: platform,
        idcard_check_type: idcard_check_type,
        canClose: canClose,
        onClose: onClose,
        onSubmitSuccess: onSubmitSuccess,
        onSubmitError: onSubmitError
      });
    }
  }]);

  return unRealNameHandler;
}();

/* harmony default export */ var handler_unRealNameHandler = (unRealNameHandler_unRealNameHandler);
// CONCATENATED MODULE: ./src/real-name-pc/handler/nonageHandler.js



/**
 * @description: 实名状态为未成年时的处理器
 */


var nonageHandler_logInstance = utils_logHelper.Instance;
var nonageHandler_modelDataInstance = utils_modelData.Instance;
var popupViewInstance = view_popupView.Instance;

var nonageHandler_nonageHandler = /*#__PURE__*/function () {
  function nonageHandler() {
    classCallCheck_default()(this, nonageHandler);
  }

  createClass_default()(nonageHandler, null, [{
    key: "exec",
    value: function exec() {
      nonageHandler_logInstance.log('已实名，未成年');

      if (nonageHandler_modelDataInstance.ageLimitIsOpen()) {
        var fcmPayStatus = nonageHandler_modelDataInstance.getFcmPayStatus();
        var status = fcmPayStatus.status,
            age = fcmPayStatus.age;

        if (status === 1) {
          nonageHandler_logInstance.log('允许充值');
        } else {
          nonageHandler_logInstance.error("\u7981\u6B62\u5145\u503C: status:".concat(status, ", age: ").concat(age));
          popupViewInstance.showTipByStatus(status, age);
        }

        return;
      }

      if (nonageHandler_modelDataInstance.canRechargeTime()) {
        nonageHandler_logInstance.log('在允许充值时间段内');
      } else {
        nonageHandler_logInstance.error('在禁止充值时间段内'); // 在禁止充值时间段内给出提示

        popupViewInstance.showNonage();
      }
    }
  }]);

  return nonageHandler;
}();

/* harmony default export */ var handler_nonageHandler = (nonageHandler_nonageHandler);
// CONCATENATED MODULE: ./src/real-name-pc/handler/adultHandler.js



/**
 * @description: 实名状态为已成年时的处理器
 */

var adultHandler_logInstance = utils_logHelper.Instance;

var adultHandler_adultHandler = /*#__PURE__*/function () {
  function adultHandler() {
    classCallCheck_default()(this, adultHandler);
  }

  createClass_default()(adultHandler, null, [{
    key: "exec",
    value: function exec() {
      adultHandler_logInstance.log('已实名，已成年');
    }
  }]);

  return adultHandler;
}();

/* harmony default export */ var handler_adultHandler = (adultHandler_adultHandler);
// CONCATENATED MODULE: ./src/real-name-pc/handler/statusHandler.js



/**
 * @description: 根据用户的实名状态，返回相应的处理器
 */




var statusHandler_modelDataInstance = utils_modelData.Instance;
var statusHandler_logInstance = utils_logHelper.Instance;

var statusHandler_statusHandler = /*#__PURE__*/function () {
  function statusHandler() {
    classCallCheck_default()(this, statusHandler);
  }
  /**
   * 根据用户的实名状态，获取相应的处理器
   */


  createClass_default()(statusHandler, null, [{
    key: "getHander",
    value: function getHander() {
      var status = statusHandler_modelDataInstance.getRealNameStatus();

      if (['0', '1', '2'].indexOf(status) === -1) {
        statusHandler_logInstance.error('用户的实名状态参数异常');
        return null;
      }

      if (!statusHandler_modelDataInstance.needCheckRealName()) {
        return null;
      }

      var statusMap = {
        '0': handler_unRealNameHandler,
        '1': handler_nonageHandler,
        '2': handler_adultHandler
      };
      return statusMap[status];
    }
  }]);

  return statusHandler;
}();

/* harmony default export */ var handler_statusHandler = (statusHandler_statusHandler);
// CONCATENATED MODULE: ./src/real-name-pc/handler/index.js

// CONCATENATED MODULE: ./src/real-name-pc/index.js





/**
 * author: liuyang9
 * description: PC端实名认证
 */





var real_name_pc_realNameViewInstance = view_realNameView.Instance;
var real_name_pc_popupViewInstance = view_popupView.Instance;
var real_name_pc_paramsInstance = utils_paramsHelper.Instance;
var real_name_pc_modelDataInstance = utils_modelData.Instance;
var real_name_pc_logInstance = utils_logHelper.Instance;

var real_name_pc_RealNamePc = /*#__PURE__*/function () {
  function RealNamePc() {
    classCallCheck_default()(this, RealNamePc);

    this.init();
  }

  createClass_default()(RealNamePc, [{
    key: "init",
    value: function init() {
      // 显示容器
      this.root = document.createElement('div');
      this.root.setAttribute('id', 'real-name-pc'); // 背景蒙层

      this.modalRoot = document.createElement('div');
      this.modalRoot.setAttribute('id', 'real-name-pc-modal');
      document.getElementsByTagName('body')[0].append(this.root);
      document.getElementsByTagName('body')[0].append(this.modalRoot);
      view_appView.renderApp();
    } // 临时测试

  }, {
    key: "test",
    value: function test() {
      this.showNonage();
    } // 配置一些参数和事件

  }, {
    key: "config",
    value: function config(_ref) {
      var appkey = _ref.appkey,
          qid = _ref.qid,
          platform = _ref.platform,
          idcard_check_type = _ref.idcard_check_type,
          onCloseRealName = _ref.onCloseRealName,
          onSubmitSuccess = _ref.onSubmitSuccess,
          onSubmitError = _ref.onSubmitError;
      // 验证参数是否合法
      var pass = real_name_pc_paramsInstance.validateRealNameParams({
        appkey: appkey,
        qid: qid,
        platform: platform,
        idcard_check_type: idcard_check_type
      });

      if (!pass) {
        return;
      } // 参数配置


      config_paramsConfig.appkey = appkey;
      config_paramsConfig.qid = qid;
      config_paramsConfig.platform = platform;
      config_paramsConfig.idcard_check_type = idcard_check_type; // 事件配置

      config_eventConfig.onCloseRealName = onCloseRealName;
      config_eventConfig.onSubmitSuccess = onSubmitSuccess;
      config_eventConfig.onSubmitError = onSubmitError;
    } // 未成年人在禁止充值时间段内，且未开启年龄段限制

  }, {
    key: "showNonage",
    value: function showNonage() {
      real_name_pc_popupViewInstance.showNonage();
    } // 年龄小于8周岁的提示

  }, {
    key: "showEight",
    value: function showEight() {
      real_name_pc_popupViewInstance.showEight();
    } // 8~16周岁不可充值，充值已达到上限的提示

  }, {
    key: "showSixteen",
    value: function showSixteen() {
      real_name_pc_popupViewInstance.showSixteen();
    } // 8~16周岁可充值，但充值金额达到上限的提示

  }, {
    key: "showSixteenCharge",
    value: function showSixteenCharge() {
      real_name_pc_popupViewInstance.showSixteenCharge();
    } // 16~18周岁不可充值，充值已达到上限的提示

  }, {
    key: "showEighteen",
    value: function showEighteen() {
      real_name_pc_popupViewInstance.showEighteen();
    } // 16~18周岁可充值，但充值金额已达到上限的提示

  }, {
    key: "showEighteenCharge",
    value: function showEighteenCharge() {
      real_name_pc_popupViewInstance.showEighteenCharge();
    } // 登录后游戏时长已达到上限时的提示

  }, {
    key: "showTimeLimitAfterLogin",
    value: function showTimeLimitAfterLogin() {
      real_name_pc_popupViewInstance.showTimeLimitAfterLogin();
    } // 游戏中时长已达到上限时的提示

  }, {
    key: "showTimeLimitWhenPlaying",
    value: function showTimeLimitWhenPlaying() {
      real_name_pc_popupViewInstance.showTimeLimitWhenPlaying();
    } // 关闭弹窗

  }, {
    key: "close",
    value: function close() {
      real_name_pc_popupViewInstance.closePopup();
    }
    /**
     * 显示实名认证
     * @param {*} canClose 是否可关闭
     */

  }, {
    key: "showRealName",
    value: function showRealName(_ref2) {
      var canClose = _ref2.canClose;
      var appkey = config_paramsConfig.appkey;
      var qid = config_paramsConfig.qid;
      var platform = config_paramsConfig.platform;
      var idcard_check_type = config_paramsConfig.idcard_check_type;
      var onClose = config_eventConfig.onCloseRealName;
      var onSubmitSuccess = config_eventConfig.onSubmitSuccess;
      var onSubmitError = config_eventConfig.onSubmitError;
      real_name_pc_realNameViewInstance.showRealName({
        appkey: appkey,
        qid: qid,
        platform: platform,
        idcard_check_type: idcard_check_type,
        canClose: canClose,
        onClose: onClose,
        onSubmitSuccess: onSubmitSuccess,
        onSubmitError: onSubmitError
      });
    } // 关闭实名

  }, {
    key: "closeRealName",
    value: function closeRealName() {
      real_name_pc_realNameViewInstance.closeRealName();
    }
    /**
     * 获取实名信息
     */

  }, {
    key: "fetchRealName",
    value: function fetchRealName() {
      var appkey = config_paramsConfig.appkey;
      var qids = config_paramsConfig.qid;
      var platform = config_paramsConfig.platform;
      var idcard_check_type = config_paramsConfig.idcard_check_type;
      return data_realNameData.fetch({
        appkey: appkey,
        qids: qids,
        platform: platform,
        idcard_check_type: idcard_check_type
      });
    }
    /**
     * 验证金额是否允许充值
     * @param {*} param0 
     */

  }, {
    key: "checkAmount",
    value: function checkAmount(_ref3) {
      var amount = _ref3.amount,
          gkey = _ref3.gkey;
      return new Promise( /*#__PURE__*/function () {
        var _ref4 = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(resolve, reject) {
          var res, handler;
          return regenerator_default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return data_realNameData.checkAmount({
                    amount: amount,
                    gkey: gkey
                  })["catch"](function (err) {
                    return reject(err);
                  });

                case 2:
                  res = _context.sent;

                  if (res) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return");

                case 5:
                  handler = handler_statusHandler.getHander();
                  resolve({
                    checkResult: res,
                    handler: handler
                  });

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function (_x, _x2) {
          return _ref4.apply(this, arguments);
        };
      }());
    }
  }], [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = new RealNamePc();
      }

      return this._instance;
    }
  }]);

  return RealNamePc;
}();


// CONCATENATED MODULE: ./src/index.js



/**
 * author: liuyang9
 * description: 实名认证PC端sdk
 */



var src_RealNamePcSdk = /*#__PURE__*/function () {
  function RealNamePcSdk() {
    classCallCheck_default()(this, RealNamePcSdk);

    if (!RealNamePcSdk._instance) {
      RealNamePcSdk._instance = real_name_pc_RealNamePc.Instance;
    }

    return RealNamePcSdk._instance;
  }
  /**
   * 获取单例
   */


  createClass_default()(RealNamePcSdk, null, [{
    key: "Instance",
    get: function get() {
      if (!this._instance) {
        this._instance = real_name_pc_RealNamePc.Instance;
      }

      return this._instance;
    }
    /**
     * 获取相关提示信息的配置
     */

  }, {
    key: "Config",
    get: function get() {
      return real_name_pc_config;
    }
  }]);

  return RealNamePcSdk;
}();



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(49);
} else {}


/***/ }),
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(56);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(54), __webpack_require__(55)(module)))

/***/ })
/******/ ])["default"];
});