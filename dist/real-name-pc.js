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
/******/ 	deferredModules.push([26,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(21);

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

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".modal-mask {\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 9000;\n  background-color: #000;\n  opacity: 0.86;\n}\n.modal-mask.no-mask {\n  opacity: 0;\n}\n.modal-wrap {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 9999;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(23);

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

/***/ 23:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tip {\n  box-sizing: border-box;\n  position: relative;\n  width: 660px;\n  height: 300px;\n  background-color: #fff;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  padding-left: 30px;\n  padding-right: 30px;\n  color: #000;\n}\n.tip__title {\n  font-size: 25px;\n  margin-top: 10px;\n  margin-bottom: 10px;\n  font-weight: bold;\n}\n.tip__content {\n  margin-top: 50px;\n  font-size: 20px;\n  text-align: left;\n}\n.tip__close {\n  position: absolute;\n  cursor: pointer;\n  top: 4px;\n  right: -47px;\n  width: 27px;\n  height: 27px;\n  background: url('https://p2.ssl.qhimg.com/t0179abee0d1b9be50a.png') center center no-repeat;\n  background-size: contain;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(9);
            var content = __webpack_require__(25);

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

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(10);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ src_RealNamePcSdk; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(5);
var react_dom_default = /*#__PURE__*/__webpack_require__.n(react_dom);

// EXTERNAL MODULE: ./node_modules/react-redux/lib/index.js
var lib = __webpack_require__(6);

// EXTERNAL MODULE: ./node_modules/react-hot-loader/index.js
var react_hot_loader = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/redux/lib/redux.js
var redux = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/react-router-redux/lib/index.js
var react_router_redux_lib = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/redux-thunk/lib/index.js
var redux_thunk_lib = __webpack_require__(11);
var redux_thunk_lib_default = /*#__PURE__*/__webpack_require__.n(redux_thunk_lib);

// EXTERNAL MODULE: ./node_modules/history/index.js
var node_modules_history = __webpack_require__(12);

// CONCATENATED MODULE: ./src/common/history.js

var history_history = Object(node_modules_history["createBrowserHistory"])();
/* harmony default export */ var common_history = (history_history);
// EXTERNAL MODULE: ./node_modules/redux-immutable/dist/index.js
var dist = __webpack_require__(13);

// EXTERNAL MODULE: ./node_modules/immutable/dist/immutable.js
var immutable = __webpack_require__(1);
var immutable_default = /*#__PURE__*/__webpack_require__.n(immutable);

// CONCATENATED MODULE: ./src/redux/initialState.js

var initialState_initialState = immutable_default.a.fromJS({
  global: {
    show: false
  },
  popup: {
    // 是否显示弹窗
    show: false,
    title: '',
    subTitle: '',
    content: ''
  }
});
/* harmony default export */ var redux_initialState = (initialState_initialState);
// CONCATENATED MODULE: ./src/redux/constants.js
// 更新全局数据
var UPDATE_GLOBAL_DATA = 'UPDATE_GLOBAL_DATA'; // 更新弹窗数据

var UPDATE_POPUP_DATA = 'UPDATE_POPUP_DATA'; // 设置弹窗数据

var SET_POPUP_DATA = 'SET_POPUP_DATA';
// CONCATENATED MODULE: ./src/redux/action-reducer/updateGlobalData.js


var KEY = 'global';
var updateGlobalData_updateGlobalData = function updateGlobalData(data) {
  return function (dispatch) {
    return dispatch({
      type: UPDATE_GLOBAL_DATA,
      data: data
    });
  };
};
var updateGlobalData_reducer = function reducer(state, action) {
  switch (action.type) {
    case UPDATE_GLOBAL_DATA:
      return state.mergeIn([KEY], Object(immutable["fromJS"])(action.data));

    default:
      return state;
  }
};
// CONCATENATED MODULE: ./src/redux/action-reducer/updatePopupData.js


var updatePopupData_KEY = 'popup';
var updatePopupData_updatePopupData = function updatePopupData(data) {
  return function (dispatch) {
    return dispatch({
      type: UPDATE_POPUP_DATA,
      data: data
    });
  };
};
var updatePopupData_reducer = function reducer(state, action) {
  switch (action.type) {
    case UPDATE_POPUP_DATA:
      return state.mergeIn([updatePopupData_KEY], Object(immutable["fromJS"])(action.data));

    default:
      return state;
  }
};
// CONCATENATED MODULE: ./src/redux/action-reducer/setPopupData.js


var setPopupData_KEY = 'popup';
var setPopupData_setPopupData = function setPopupData(data) {
  return function (dispatch) {
    return dispatch({
      type: SET_POPUP_DATA,
      data: data
    });
  };
};
var setPopupData_reducer = function reducer(state, action) {
  switch (action.type) {
    case SET_POPUP_DATA:
      return state.setIn([setPopupData_KEY], Object(immutable["fromJS"])(action.data));

    default:
      return state;
  }
};
// CONCATENATED MODULE: ./src/redux/reducer.js




var allReducers = [updateGlobalData_reducer, updatePopupData_reducer, setPopupData_reducer];
function reducer_reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : redux_initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  var newState;

  switch (action.type) {
    // 其他类型的处理
    default:
      newState = state;
      break;
  }

  return allReducers.reduce(function (s, r) {
    return r(s, action);
  }, newState);
}
// CONCATENATED MODULE: ./src/common/rootReducer.js



var reducerMap = {
  router: react_router_redux_lib["routerReducer"],
  data: reducer_reducer
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
// EXTERNAL MODULE: ./node_modules/react-hot-loader/root.js
var root = __webpack_require__(15);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: ./src/components/Modal/index.less
var components_Modal = __webpack_require__(20);

// CONCATENATED MODULE: ./src/components/Modal/index.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






var Modal_Modal = /*#__PURE__*/function (_React$Component) {
  _inherits(Modal, _React$Component);

  var _super = _createSuper(Modal);

  function Modal(props) {
    var _this;

    _classCallCheck(this, Modal);

    _this = _super.call(this, props);
    _this.modalRoot = document.getElementById('real-name-pc-modal');
    var maskClassName = props.noMask ? 'modal-mask no-mask' : 'modal-mask';
    _this.mask = document.createElement('div');

    _this.mask.setAttribute('class', maskClassName);

    _this.wrap = document.createElement('div');

    _this.wrap.setAttribute('class', 'modal-wrap');

    return _this;
  }

  _createClass(Modal, [{
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
var classnames = __webpack_require__(14);
var classnames_default = /*#__PURE__*/__webpack_require__.n(classnames);

// EXTERNAL MODULE: ./src/components/Tip/index.less
var components_Tip = __webpack_require__(22);

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
// CONCATENATED MODULE: ./src/components/index.js


// CONCATENATED MODULE: ./src/redux/actions.js



// EXTERNAL MODULE: ./src/views/Home/index.less
var views_Home = __webpack_require__(24);

// CONCATENATED MODULE: ./src/views/Home/index.js
function Home_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Home_typeof = function _typeof(obj) { return typeof obj; }; } else { Home_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Home_typeof(obj); }

function Home_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Home_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Home_createClass(Constructor, protoProps, staticProps) { if (protoProps) Home_defineProperties(Constructor.prototype, protoProps); if (staticProps) Home_defineProperties(Constructor, staticProps); return Constructor; }

function Home_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Home_setPrototypeOf(subClass, superClass); }

function Home_setPrototypeOf(o, p) { Home_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Home_setPrototypeOf(o, p); }

function Home_createSuper(Derived) { return function () { var Super = Home_getPrototypeOf(Derived), result; if (Home_isNativeReflectConstruct()) { var NewTarget = Home_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Home_possibleConstructorReturn(this, result); }; }

function Home_possibleConstructorReturn(self, call) { if (call && (Home_typeof(call) === "object" || typeof call === "function")) { return call; } return Home_assertThisInitialized(self); }

function Home_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Home_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function Home_getPrototypeOf(o) { Home_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Home_getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









var Home_Home = /*#__PURE__*/function (_Component) {
  Home_inherits(Home, _Component);

  var _super = Home_createSuper(Home);

  function Home(props) {
    var _this;

    Home_classCallCheck(this, Home);

    _this = _super.call(this, props);

    _defineProperty(Home_assertThisInitialized(_this), "handleClose", function () {
      var actions = _this.props.actions;
      actions.updatePopupData({
        show: false
      });
    });

    return _this;
  }

  Home_createClass(Home, [{
    key: "componentDidMount",
    value: function componentDidMount() {}
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          title = _this$props.title,
          subTitle = _this$props.subTitle,
          subTitle2 = _this$props.subTitle2,
          content = _this$props.content,
          canClose = _this$props.canClose,
          noMask = _this$props.noMask;

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
        onClose: this.handleClose
      }));
    }
  }]);

  return Home;
}(react["Component"]);

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

var Home_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    actions: Object(redux["bindActionCreators"])({
      updatePopupData: updatePopupData_updatePopupData
    }, dispatch)
  };
};

Home_Home.defaultProps = {
  noMask: false
};
/* harmony default export */ var src_views_Home = (Object(lib["connect"])(mapStateToProps, Home_mapDispatchToProps)(Home_Home));
// CONCATENATED MODULE: ./src/views/index.js

// CONCATENATED MODULE: ./src/real-name-pc/app.js




var app_App = function App() {
  return /*#__PURE__*/react_default.a.createElement(src_views_Home, null);
};

/* harmony default export */ var app = (Object(root["hot"])(app_App));
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
/* harmony default export */ var config = (Config);
// CONCATENATED MODULE: ./src/real-name-pc/index.js
function real_name_pc_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function real_name_pc_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function real_name_pc_createClass(Constructor, protoProps, staticProps) { if (protoProps) real_name_pc_defineProperties(Constructor.prototype, protoProps); if (staticProps) real_name_pc_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * author: liuyang9
 * description: PC端实名认证
 */








var real_name_pc_store = configureStore();

var real_name_pc_RealNamePc = /*#__PURE__*/function () {
  function RealNamePc() {
    real_name_pc_classCallCheck(this, RealNamePc);

    this.init();
  }

  real_name_pc_createClass(RealNamePc, [{
    key: "init",
    value: function init() {
      this.root = document.createElement('div');
      this.root.setAttribute('id', 'real-name-pc');
      this.modalRoot = document.createElement('div');
      this.modalRoot.setAttribute('id', 'real-name-pc-modal');
      document.getElementsByTagName('body')[0].append(this.root);
      document.getElementsByTagName('body')[0].append(this.modalRoot);
      real_name_pc_renderApp(app);
    }
    /**
     * 年龄小于8周岁的提示
     */

  }, {
    key: "showEight",
    value: function showEight() {
      var _Config$pay$ageLessTh = config.pay.ageLessThanEight,
          title = _Config$pay$ageLessTh.title,
          subTitle = _Config$pay$ageLessTh.subTitle,
          content = _Config$pay$ageLessTh.content;
      real_name_pc_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content
      });
    }
    /**
     * 8~16周岁不可充值，充值已达到上限的提示
     */

  }, {
    key: "showSixteen",
    value: function showSixteen() {
      var _Config$pay$ageLessTh2 = config.pay.ageLessThanSixteen,
          title = _Config$pay$ageLessTh2.title,
          subTitle = _Config$pay$ageLessTh2.subTitle,
          content = _Config$pay$ageLessTh2.content;
      real_name_pc_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content
      });
    }
    /**
     * 8~16周岁可充值，但充值金额达到上限的提示
     */

  }, {
    key: "showSixteenCharge",
    value: function showSixteenCharge() {
      var _Config$pay$ageLessTh3 = config.pay.ageLessThanSixteenCharge,
          title = _Config$pay$ageLessTh3.title,
          subTitle = _Config$pay$ageLessTh3.subTitle,
          content = _Config$pay$ageLessTh3.content;
      real_name_pc_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content
      });
    }
    /**
     * 16~18周岁不可充值，充值已达到上限的提示
     */

  }, {
    key: "showEighteen",
    value: function showEighteen() {
      var _Config$pay$ageLessTh4 = config.pay.ageLessThanEighteen,
          title = _Config$pay$ageLessTh4.title,
          subTitle = _Config$pay$ageLessTh4.subTitle,
          content = _Config$pay$ageLessTh4.content;
      real_name_pc_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content
      });
    }
    /**
     * 16~18周岁可充值，但充值金额已达到上限的提示
     */

  }, {
    key: "showEighteenCharge",
    value: function showEighteenCharge() {
      var _Config$pay$ageLessTh5 = config.pay.ageLessThanEighteenCharge,
          title = _Config$pay$ageLessTh5.title,
          subTitle = _Config$pay$ageLessTh5.subTitle,
          content = _Config$pay$ageLessTh5.content;
      real_name_pc_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content
      });
    }
    /**
     * 登录后游戏时长已达到上限时的提示
     */

  }, {
    key: "showTimeLimitAfterLogin",
    value: function showTimeLimitAfterLogin() {
      var _Config$login$gameTim = config.login.gameTimeLimit,
          title = _Config$login$gameTim.title,
          content = _Config$login$gameTim.content;
      real_name_pc_setPopupData({
        show: true,
        title: title,
        content: content,
        canClose: false,
        noMask: true
      });
    }
    /**
     * 游戏中时长已达到上限时的提示
     */

  }, {
    key: "showTimeLimitWhenPlaying",
    value: function showTimeLimitWhenPlaying() {
      var _Config$playing$gameT = config.playing.gameTimeLimit,
          title = _Config$playing$gameT.title,
          subTitle = _Config$playing$gameT.subTitle,
          content = _Config$playing$gameT.content;
      real_name_pc_setPopupData({
        show: true,
        title: title,
        subTitle: subTitle,
        content: content,
        canClose: false,
        noMask: true
      });
    }
  }, {
    key: "close",
    value: function close() {
      real_name_pc_store.dispatch({
        type: UPDATE_POPUP_DATA,
        data: {
          show: false
        }
      });
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



var real_name_pc_updatePopupData = function updatePopupData(data) {
  real_name_pc_store.dispatch({
    type: UPDATE_POPUP_DATA,
    data: data
  });
};

var real_name_pc_setPopupData = function setPopupData(data) {
  real_name_pc_store.dispatch({
    type: SET_POPUP_DATA,
    data: data
  });
};

var real_name_pc_renderApp = function renderApp(Component) {
  Object(react_dom["render"])( /*#__PURE__*/react_default.a.createElement(react_hot_loader["AppContainer"], null, /*#__PURE__*/react_default.a.createElement(lib["Provider"], {
    store: real_name_pc_store
  }, /*#__PURE__*/react_default.a.createElement(Component, null))), document.getElementById('real-name-pc'));
};

if (false) {}
// CONCATENATED MODULE: ./src/index.js
function src_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function src_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function src_createClass(Constructor, protoProps, staticProps) { if (protoProps) src_defineProperties(Constructor.prototype, protoProps); if (staticProps) src_defineProperties(Constructor, staticProps); return Constructor; }

/**
 * author: liuyang9
 * description: 实名认证PC端sdk
 */



var src_RealNamePcSdk = /*#__PURE__*/function () {
  function RealNamePcSdk() {
    src_classCallCheck(this, RealNamePcSdk);

    if (!RealNamePcSdk._instance) {
      RealNamePcSdk._instance = real_name_pc_RealNamePc.Instance;
    }

    return RealNamePcSdk._instance;
  }
  /**
   * 获取单例
   */


  src_createClass(RealNamePcSdk, null, [{
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
      return config;
    }
  }]);

  return RealNamePcSdk;
}();



/***/ })

/******/ })["default"];
});