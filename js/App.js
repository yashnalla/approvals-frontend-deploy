/******/ (function(modules) { // webpackBootstrap
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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 		"App": 0
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
/******/ 	__webpack_require__.p = "/apps/approval/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/entry-dev.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _SmartComponents_AppTabs_AppTabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./SmartComponents/AppTabs/AppTabs */ "./src/SmartComponents/AppTabs/AppTabs.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications.css */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.css");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _PresentationalComponents_Shared_LoaderPlaceholders__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./PresentationalComponents/Shared/LoaderPlaceholders */ "./src/PresentationalComponents/Shared/LoaderPlaceholders.js");




















var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      chromeNavAvailable: true,
      auth: false
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(App, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      insights.chrome.init();
      insights.chrome.auth.getUser().then(function () {
        return _this2.setState({
          auth: true
        });
      });

      try {
        insights.chrome.identifyApp('approval');
      } catch (error) {
        this.setState({
          chromeNavAvailable: false
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.state.chromeNavAvailable) {
        this.appNav();
        this.buildNav();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var auth = this.state.auth;

      if (!auth) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Shared_LoaderPlaceholders__WEBPACK_IMPORTED_MODULE_18__["AppPlaceholder"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16__["NotificationsPortal"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Title"], {
        size: 'xl',
        style: {
          margin: 12,
          padding: 12
        }
      }, "Approval")), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__["Main"], {
        style: {
          backgroundColor: 'd3d3d3',
          margin: '0',
          padding: '0'
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_SmartComponents_AppTabs_AppTabs__WEBPACK_IMPORTED_MODULE_13__["default"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_11__["Routes"], {
        childProps: this.props
      }))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

App.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_7___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_10__["connect"])()(App)));

/***/ }),

/***/ "./src/App.scss":
/*!**********************!*\
  !*** ./src/App.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Helpers/Request/RequestHelper.js":
/*!**********************************************!*\
  !*** ./src/Helpers/Request/RequestHelper.js ***!
  \**********************************************/
/*! exports provided: fetchRequests, updateRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRequests", function() { return fetchRequests; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateRequest", function() { return updateRequest; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_userLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/userLogin */ "./src/Helpers/Shared/userLogin.js");



var requestApi = Object(_Shared_userLogin__WEBPACK_IMPORTED_MODULE_2__["getRequestApi"])();
function fetchRequests() {
  return requestApi.listRequests();
}
function updateRequest(_x) {
  return _updateRequest.apply(this, arguments);
}

function _updateRequest() {
  _updateRequest = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return requestApi.updateRequest(data.id, data);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _updateRequest.apply(this, arguments);
}

/***/ }),

/***/ "./src/Helpers/Shared/helpers.js":
/*!***************************************!*\
  !*** ./src/Helpers/Shared/helpers.js ***!
  \***************************************/
/*! exports provided: scrollToTop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
var scrollToTop = function scrollToTop() {
  return document.getElementById('root').scrollTo({
    behavior: 'smooth',
    top: 0,
    left: 0
  });
};

/***/ }),

/***/ "./src/Helpers/Shared/userLogin.js":
/*!*****************************************!*\
  !*** ./src/Helpers/Shared/userLogin.js ***!
  \*****************************************/
/*! exports provided: getTemplateApi, getWorkflowApi, getRequestApi, getRbacApi, getGroupApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateApi", function() { return getTemplateApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkflowApi", function() { return getWorkflowApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestApi", function() { return getRequestApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacApi", function() { return getRbacApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGroupApi", function() { return getGroupApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Utilities/Constants */ "./src/Utilities/Constants.js");
/* harmony import */ var rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rbac_api_jsclient */ "./node_modules/rbac_api_jsclient/dist/main.js");
/* harmony import */ var rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/approval-client */ "./node_modules/@redhat-cloud-services/approval-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__);





var responseInterceptor = function responseInterceptor(response) {
  return response.data ? response.data : response;
};

var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();
axiosInstance.interceptors.response.use(responseInterceptor);
var workflowApi = new _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__["WorkflowApi"](undefined, _Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["APPROVAL_API_BASE"], axiosInstance);
var requestApi = new _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__["RequestApi"](undefined, _Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["APPROVAL_API_BASE"], axiosInstance);
var templateApi = new _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__["TemplateApi"](undefined, _Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["APPROVAL_API_BASE"], axiosInstance);
function getTemplateApi() {
  return templateApi;
}
function getWorkflowApi() {
  return workflowApi;
}
function getRequestApi() {
  return requestApi;
}
var rbacClient = rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_2__["ApiClient"].instance;
rbacClient.basePath = _Utilities_Constants__WEBPACK_IMPORTED_MODULE_1__["RBAC_API_BASE"];
var rbacApi = new rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_2__["AccessApi"]();
var groupApi = new rbac_api_jsclient__WEBPACK_IMPORTED_MODULE_2__["GroupApi"]();
function getRbacApi() {
  return rbacApi;
}
function getGroupApi() {
  return groupApi;
}

/***/ }),

/***/ "./src/Helpers/Workflow/WorkflowHelper.js":
/*!************************************************!*\
  !*** ./src/Helpers/Workflow/WorkflowHelper.js ***!
  \************************************************/
/*! exports provided: fetchWorkflows, updateWorkflow, addWorkflow, removeWorkflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWorkflows", function() { return fetchWorkflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWorkflow", function() { return updateWorkflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWorkflow", function() { return addWorkflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWorkflow", function() { return removeWorkflow; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Shared_userLogin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Shared/userLogin */ "./src/Helpers/Shared/userLogin.js");



var workflowApi = Object(_Shared_userLogin__WEBPACK_IMPORTED_MODULE_2__["getWorkflowApi"])();
var templateApi = Object(_Shared_userLogin__WEBPACK_IMPORTED_MODULE_2__["getTemplateApi"])();
function fetchWorkflows() {
  return workflowApi.listWorkflows();
}
function updateWorkflow(_x) {
  return _updateWorkflow.apply(this, arguments);
}

function _updateWorkflow() {
  _updateWorkflow = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return workflowApi.updateWorkflow(data.id, data);

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));
  return _updateWorkflow.apply(this, arguments);
}

function addWorkflow(workflow) {
  return templateApi.listTemplates().then(function (_ref) {
    var data = _ref.data;

    // workaround for v1. Need to pass template ID with the workflow. Assigning to first template
    if (!data[0]) {
      throw new Error('No template exists');
    }

    return data[0].id;
  }).then(function (id) {
    return workflowApi.addWorkflowToTemplate(id, workflow, {});
  });
}
function removeWorkflow(_x2) {
  return _removeWorkflow.apply(this, arguments);
}

function _removeWorkflow() {
  _removeWorkflow = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(workflowId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return workflowApi.destroyWorkflow(workflowId);

          case 2:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));
  return _removeWorkflow.apply(this, arguments);
}

/***/ }),

/***/ "./src/PresentationalComponents/Request/RequestsFilterToolbar.js":
/*!***********************************************************************!*\
  !*** ./src/PresentationalComponents/Request/RequestsFilterToolbar.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared_FilterToolbarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/FilterToolbarItem */ "./src/PresentationalComponents/Shared/FilterToolbarItem.js");
/* harmony import */ var _Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/toolbarschema.scss */ "./src/PresentationalComponents/Shared/toolbarschema.scss");
/* harmony import */ var _Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5__);







var RequestsFilterToolbar = function RequestsFilterToolbar(_ref) {
  var onFilterChange = _ref.onFilterChange,
      filterValue = _ref.filterValue,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["onFilterChange", "filterValue"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_FilterToolbarItem__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    searchValue: filterValue,
    onFilterChange: onFilterChange,
    placeholder: 'Find a Request'
  }));
};

RequestsFilterToolbar.propTypes = {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RequestsFilterToolbar);

/***/ }),

/***/ "./src/PresentationalComponents/Shared/FilterToolbarItem.js":
/*!******************************************************************!*\
  !*** ./src/PresentationalComponents/Shared/FilterToolbarItem.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var FilterToolbarItem = function FilterToolbarItem(_ref) {
  var searchValue = _ref.searchValue,
      onFilterChange = _ref.onFilterChange,
      placeholder = _ref.placeholder;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroup"], {
    className: "searchToolbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "pf-c-input-group"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextInput"], {
    placeholder: placeholder,
    value: searchValue,
    type: "text",
    onChange: onFilterChange,
    "aria-label": "Find product button"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    variant: "tertiary",
    id: "searchProductButton",
    onClick: function onClick() {
      return onFilterChange(searchValue);
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
    className: "fas fa-search",
    "aria-hidden": "true"
  })))));
};

FilterToolbarItem.propTypes = {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  placeholder: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  searchValue: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};
FilterToolbarItem.defaultProps = {
  searchValue: ''
};
/* harmony default export */ __webpack_exports__["default"] = (FilterToolbarItem);

/***/ }),

/***/ "./src/PresentationalComponents/Shared/LoaderPlaceholders.js":
/*!*******************************************************************!*\
  !*** ./src/PresentationalComponents/Shared/LoaderPlaceholders.js ***!
  \*******************************************************************/
/*! exports provided: CardLoader, WorkflowLoader, NavLoader, AppPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLoader", function() { return CardLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowLoader", function() { return WorkflowLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLoader", function() { return NavLoader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPlaceholder", function() { return AppPlaceholder; });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_content_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-content-loader */ "./node_modules/react-content-loader/dist/react-content-loader.es.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");







var CardLoader = function CardLoader(_ref) {
  var items = _ref.items,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref, ["items"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["GridItem"], {
    sm: 12,
    style: {
      padding: 24
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    gutter: "md"
  }, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(Array(items)).map(function (_item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["GridItem"], {
      sm: 12,
      md: 6,
      lg: 3,
      key: index
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Card"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["CardBody"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      height: 160,
      width: 300,
      speed: 2,
      primaryColor: "#f3f3f3",
      secondaryColor: "#ecebeb"
    }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
      x: "2",
      y: "99",
      rx: "3",
      ry: "3",
      width: "300",
      height: "6.4"
    })))));
  }))));
};
CardLoader.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
CardLoader.defaultProps = {
  items: 1
};
var WorkflowLoader = function WorkflowLoader(_ref2) {
  var items = _ref2.items,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref2, ["items"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    gutter: "md"
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["GridItem"], {
    sm: 12
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 16,
    width: 300,
    speed: 2,
    primaryColor: "#FFFFFF",
    secondaryColor: "#FFFFFF"
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "420",
    height: "16"
  }))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["GridItem"], {
    sm: 12,
    style: {
      paddingLeft: 16,
      paddingRight: 16
    }
  }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardLoader, {
    items: items
  })));
};
WorkflowLoader.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
WorkflowLoader.defaultProps = {
  items: 1
};
var NavLoader = function NavLoader(_ref3) {
  var items = _ref3.items,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, ["items"]);

  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(Array(items)).map(function (_item, index) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_6__["NavItem"], {
      key: "loader-placeholder-".concat(index),
      style: {
        cursor: 'pointer'
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      style: {
        overflow: 'hidden'
      }
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      height: 16,
      width: 300,
      speed: 2,
      primaryColor: "#f3f3f3",
      secondaryColor: "#ecebeb"
    }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
      x: "0",
      y: "0",
      rx: "0",
      ry: "0",
      width: "420",
      height: "20"
    }))));
  });
};
NavLoader.propTypes = {
  items: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
};
NavLoader.defaultProps = {
  items: 1
};
var AppPlaceholder = function AppPlaceholder(props) {
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(react_content_loader__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    height: 16,
    width: 300,
    speed: 2,
    primaryColor: "#FFFFFF",
    secondaryColor: "#FFFFFF"
  }, props), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("rect", {
    x: "0",
    y: "0",
    rx: "0",
    ry: "0",
    width: "420",
    height: "10"
  })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(CardLoader, null));
};

/***/ }),

/***/ "./src/PresentationalComponents/Shared/pf4-select-wrapper.js":
/*!*******************************************************************!*\
  !*** ./src/PresentationalComponents/Shared/pf4-select-wrapper.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");







var createOptions = function createOptions(options, inputValue, isRequired) {
  if (inputValue && isRequired) {
    return options;
  }

  var selectOptions = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(options);

  return selectOptions.find(function (_ref) {
    var value = _ref.value;
    return value === undefined;
  }) ? _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectOptions) : [{
    label: isRequired ? 'Please choose' : 'None'
  }].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(selectOptions));
};

var Select = function Select(_ref2) {
  var input = _ref2.input,
      options = _ref2.options,
      isReadOnly = _ref2.isReadOnly,
      isDisabled = _ref2.isDisabled,
      FieldProvider = _ref2.FieldProvider,
      isRequired = _ref2.isRequired,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, ["input", "options", "isReadOnly", "isDisabled", "FieldProvider", "isRequired"]);

  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormSelect"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, input, rest, {
    isDisabled: isDisabled || isReadOnly
  }), createOptions(options, input.value, isRequired).map(function (props) {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormSelectOption"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
      key: props.value || props.label
    }, props, {
      label: props.label.toString()
    })) // eslint-disable-line react/prop-types
    ;
  }));
};

Select.propTypes = {
  input: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired,
  options: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any,
    label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired
  })).isRequired,
  isReadOnly: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isDisabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  FieldProvider: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.any
};

var Pf4SelectWrapper = function Pf4SelectWrapper(_ref3) {
  var componentType = _ref3.componentType,
      label = _ref3.label,
      isRequired = _ref3.isRequired,
      helperText = _ref3.helperText,
      meta = _ref3.meta,
      description = _ref3.description,
      hideLabel = _ref3.hideLabel,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, ["componentType", "label", "isRequired", "helperText", "meta", "description", "hideLabel"]);

  var error = meta.error,
      touched = meta.touched;
  var showError = touched && error;
  return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["FormGroup"], {
    isRequired: isRequired,
    label: !hideLabel && label,
    fieldId: rest.id,
    isValid: !showError,
    helperText: helperText,
    helperTextInvalid: meta.error
  }, description && react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].small
  }, description)), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(Select, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    label: label,
    isValid: !showError,
    isRequired: isRequired
  }, rest)));
};

Pf4SelectWrapper.propTypes = {
  componentType: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  label: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  isRequired: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,
  helperText: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  meta: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,
  description: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,
  hideLabel: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
};
/* harmony default export */ __webpack_exports__["default"] = (Pf4SelectWrapper);

/***/ }),

/***/ "./src/PresentationalComponents/Shared/toolbarschema.scss":
/*!****************************************************************!*\
  !*** ./src/PresentationalComponents/Shared/toolbarschema.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/PresentationalComponents/Workflow/WorkflowsFilterToolbar.js":
/*!*************************************************************************!*\
  !*** ./src/PresentationalComponents/Workflow/WorkflowsFilterToolbar.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Shared_FilterToolbarItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Shared/FilterToolbarItem */ "./src/PresentationalComponents/Shared/FilterToolbarItem.js");
/* harmony import */ var _Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Shared/toolbarschema.scss */ "./src/PresentationalComponents/Shared/toolbarschema.scss");
/* harmony import */ var _Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_Shared_toolbarschema_scss__WEBPACK_IMPORTED_MODULE_5__);







var WorkflowsFilterToolbar = function WorkflowsFilterToolbar(_ref) {
  var onFilterChange = _ref.onFilterChange,
      filterValue = _ref.filterValue,
      props = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1___default()(_ref, ["onFilterChange", "filterValue"]);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Shared_FilterToolbarItem__WEBPACK_IMPORTED_MODULE_4__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, props, {
    searchValue: filterValue,
    onFilterChange: onFilterChange,
    placeholder: 'Find a Workflow'
  }));
};

WorkflowsFilterToolbar.propTypes = {
  onFilterChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  filterValue: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (WorkflowsFilterToolbar);

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! exports provided: Routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Routes", function() { return Routes; });
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
/* harmony import */ var _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash/some */ "./node_modules/lodash/some.js");
/* harmony import */ var lodash_some__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash_some__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _PresentationalComponents_Shared_LoaderPlaceholders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PresentationalComponents/Shared/LoaderPlaceholders */ "./src/PresentationalComponents/Shared/LoaderPlaceholders.js");







/**
 * Aysnc imports of components
 *
 * https://webpack.js.org/guides/code-splitting/
 * https://reactjs.org/docs/code-splitting.html
 *
 * pros:
 *      1) code splitting
 *      2) can be used in server-side rendering
 * cons:
 *      1) naming chunk names adds unnecessary docs to code,
 *         see the difference with DashboardMap and InventoryDeployments.
 *
 */

var Requests = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/Request/Requests */ "./src/SmartComponents/Request/Requests.js"));
  });
});
var Request = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/Request/Request */ "./src/SmartComponents/Request/Request.js"));
  });
});
var Workflows = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/Workflow/Workflows */ "./src/SmartComponents/Workflow/Workflows.js"));
  });
});
var Workflow = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./SmartComponents/Workflow/Workflow */ "./src/SmartComponents/Workflow/Workflow.js"));
  });
});
var paths = {
  approval: '/',
  requests: '/requests',
  request: '/request/:id',
  workflows: '/workflows',
  workflow: '/workflow/:id'
};

var InsightsRoute = function InsightsRoute(_ref) {
  var rootClass = _ref.rootClass,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_ref, ["rootClass"]);

  var root = document.getElementById('root');
  root.removeAttribute('class');
  root.classList.add("page__".concat(rootClass), 'pf-l-page__main', 'pf-c-page__main');
  root.setAttribute('role', 'main');
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], rest);
};

InsightsRoute.propTypes = {
  rootClass: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
};
/**
 * the Switch component changes routes depending on the path.
 *
 * Route properties:
 *      exact - path must match exactly,
 *      path - https://prod.foo.redhat.com:1337/insights/advisor/rules
 *      component - component to be rendered when a route has been chosen.
 */

var Routes = function Routes(props) {
  var path = props.childProps.location.pathname;
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_PresentationalComponents_Shared_LoaderPlaceholders__WEBPACK_IMPORTED_MODULE_6__["AppPlaceholder"], null)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.requests,
    component: Requests,
    rootClass: "requests"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.request,
    component: Request,
    rootClass: "request"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.workflows,
    component: Workflows,
    rootClass: "workflows"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.workflow,
    component: Workflow,
    rootClass: "workflow"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    render: function render() {
      return lodash_some__WEBPACK_IMPORTED_MODULE_5___default()(paths, function (p) {
        return p === path;
      }) ? null : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: paths.workflows
      });
    }
  })));
};
Routes.propTypes = {
  childProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
};

/***/ }),

/***/ "./src/SmartComponents/AppTabs/AppTabs.js":
/*!************************************************!*\
  !*** ./src/SmartComponents/AppTabs/AppTabs.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _apptabs_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./apptabs.scss */ "./src/SmartComponents/AppTabs/apptabs.scss");
/* harmony import */ var _apptabs_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_apptabs_scss__WEBPACK_IMPORTED_MODULE_10__);











var tabItems = [{
  eventKey: 0,
  title: 'Requests',
  name: '/requests'
}, {
  eventKey: 1,
  title: 'Workflows',
  name: '/workflows'
}];

var AppTabs =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(AppTabs, _Component);

  function AppTabs() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, AppTabs);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(AppTabs)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      activeTabKey: 0
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "handleTabClick", function (event, tabIndex) {
      _this.setState({
        activeTabKey: tabIndex
      });

      _this.props.children.props.childProps.history.push(tabItems[tabIndex].name);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(AppTabs, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Tabs"], {
        className: "ins-tabs",
        activeKey: this.state.activeTabKey,
        onSelect: this.handleTabClick
      }, tabItems.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Tab"], {
          title: item.title,
          key: item.eventKey,
          eventKey: item.eventKey,
          name: item.name
        });
      })), this.props.children);
    }
  }]);

  return AppTabs;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

AppTabs.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.any,
  location: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  history: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object
};
/* harmony default export */ __webpack_exports__["default"] = (AppTabs);

/***/ }),

/***/ "./src/SmartComponents/AppTabs/apptabs.scss":
/*!**************************************************!*\
  !*** ./src/SmartComponents/AppTabs/apptabs.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/SmartComponents/Common/FormRenderer.js":
/*!****************************************************!*\
  !*** ./src/SmartComponents/Common/FormRenderer.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/index.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PresentationalComponents_Shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../PresentationalComponents/Shared/pf4-select-wrapper */ "./src/PresentationalComponents/Shared/pf4-select-wrapper.js");









var buttonPositioning = {
  default: {},
  modal: {
    buttonOrder: ['cancel', 'reset', 'save'],
    buttonClassName: 'modal-form-right-align'
  }
};

var FormRenderer = function FormRenderer(_ref) {
  var componentMapper = _ref.componentMapper,
      formContainer = _ref.formContainer,
      rest = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(_ref, ["componentMapper", "formContainer"]);

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: buttonPositioning[formContainer].buttonClassName
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6___default.a, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({
    formFieldsMapper: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_2___default()({}, _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__["formFieldsMapper"], _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({
      componentMapper: componentMapper
    }, _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__["componentTypes"].SELECT, _PresentationalComponents_Shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"])),
    layoutMapper: _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__["layoutMapper"]
  }, buttonPositioning[formContainer], rest)));
};

FormRenderer.propTypes = {
  componentMapper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  formContainer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf('default', 'modal')
};
FormRenderer.defaultProps = {
  componentMapper: {},
  formContainer: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (FormRenderer);

/***/ }),

/***/ "./src/SmartComponents/Request/Request.js":
/*!************************************************!*\
  !*** ./src/SmartComponents/Request/Request.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");












var Request =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Request, _Component);

  function Request() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Request);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Request)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      isKebabOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onKebabToggle", function (isOpen) {
      _this.setState({
        isKebabOpen: isOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onKebabSelect", function () {
      _this.setState({
        isKebabOpen: !_this.state.isKebabOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "buildRequestActionKebab", function (request) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownPosition"].right,
        onSelect: _this.onKebabSelect,
        toggle: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["KebabToggle"], {
          onToggle: _this.onKebabToggle
        }),
        isOpen: _this.state.isKebabOpen,
        dropdownItems: [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
          "aria-label": "Edit Request",
          key: "edit-request"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          to: "/requests/edit/".concat(request.id)
        }, "Edit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
          component: "link",
          "aria-label": "Remove Request",
          key: "remove-request"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          to: "/requests/remove/".concat(request.id)
        }, "Delete"))],
        isPlain: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "fetchRequestDetails", function (request) {
      return "Details for ".concat(request.name);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Request, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var item = this.props.item;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListItem"], {
        key: "request-".concat(item.id),
        "aria-labelledby": "check-request-".concat(item.id),
        isExpanded: this.props.isExpanded("request-".concat(item.id))
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListToggle"], {
        onClick: function onClick() {
          return _this2.props.toggleExpand("request-".concat(item.id));
        },
        isExpanded: this.props.isExpanded("request-".concat(item.id)),
        id: "request-".concat(item.id),
        "aria-labelledby": "request-".concat(item.id, " request-").concat(item.id),
        "aria-label": "Toggle details for"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCheck"], {
        "aria-labelledby": "check-request-".concat(item.id),
        name: "check-request-".concat(item.id)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: item.id
      }, "".concat(item.name), " ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: item.description
      }, "".concat(item.description), " "))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], null, this.fetchRequestDetails(item)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListContent"], {
        "aria-label": "Request Content Details",
        isHidden: !this.props.isExpanded("request-".concat(item.id))
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Stack"], {
        gutter: "md"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Title"], {
        size: "md"
      }, "Details")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextContent"], {
        component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].h6
      }, this.fetchRequestDetails(item))))));
    }
  }]);

  return Request;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Request.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  item: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  isExpanded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  toggleExpand: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  noItems: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Request);

/***/ }),

/***/ "./src/SmartComponents/Request/RequestList.js":
/*!****************************************************!*\
  !*** ./src/SmartComponents/Request/RequestList.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _Request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Request */ "./src/SmartComponents/Request/Request.js");














var RequestList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(RequestList, _Component);

  function RequestList() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RequestList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(RequestList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      expanded: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "toggleExpand", function (id) {
      var expanded = _this.state.expanded;
      var index = expanded.indexOf(id);
      var newExpanded = index >= 0 ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded.slice(index + 1, expanded.length))) : [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded), [id]);

      _this.setState(function () {
        return {
          expanded: newExpanded
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "isExpanded", function (key) {
      return _this.state.expanded.includes(key);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RequestList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitle"], {
          title: this.props.noItems
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, this.props.isLoading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        color: '#00b9e4'
      }, " Loading...")), this.props.items && this.props.items.length > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["DataList"], {
        "aria-label": "Expandable data list"
      }, this.props.items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Request__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: item.id,
          item: item,
          isExpanded: _this2.isExpanded,
          toggleExpand: _this2.toggleExpand
        });
      })));
    }
  }]);

  return RequestList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

RequestList.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  items: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  noItems: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (RequestList);

/***/ }),

/***/ "./src/SmartComponents/Request/Requests.js":
/*!*************************************************!*\
  !*** ./src/SmartComponents/Request/Requests.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _RequestList__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./RequestList */ "./src/SmartComponents/Request/RequestList.js");
/* harmony import */ var _PresentationalComponents_Request_RequestsFilterToolbar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../PresentationalComponents/Request/RequestsFilterToolbar */ "./src/PresentationalComponents/Request/RequestsFilterToolbar.js");
/* harmony import */ var _redux_Actions_RequestActions__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../redux/Actions/RequestActions */ "./src/redux/Actions/RequestActions.js");
/* harmony import */ var _add_request_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-request-modal */ "./src/SmartComponents/Request/add-request-modal.js");
/* harmony import */ var _request_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./request.scss */ "./src/SmartComponents/Request/request.scss");
/* harmony import */ var _request_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_request_scss__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../Helpers/Shared/helpers */ "./src/Helpers/Shared/helpers.js");





















var Requests =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Requests, _Component);

  function Requests() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Requests);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Requests)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      filteredItems: [],
      isOpen: false,
      filterValue: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "fetchData", function () {
      _this.props.fetchRequests();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onFilterChange", function (filterValue) {
      return _this.setState({
        filterValue: filterValue
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Requests, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      Object(_Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_19__["scrollToTop"])();
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], {
        className: "searchToolbar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Request_RequestsFilterToolbar__WEBPACK_IMPORTED_MODULE_15__["default"], {
        onFilterChange: this.onFilterChange,
        filterValue: this.state.filterValue
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var filteredItems = {
        items: this.props.requests,
        isLoading: this.props.isLoading && this.props.requests.length === 0
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/requests/edit/:id",
        component: _add_request_modal__WEBPACK_IMPORTED_MODULE_17__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__["Section"], {
        type: "content"
      }, this.renderToolbar(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_RequestList__WEBPACK_IMPORTED_MODULE_14__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, filteredItems, {
        noItems: 'No Requests'
      }))));
    }
  }]);

  return Requests;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    requests: state.requestReducer.requests,
    isLoading: state.requestReducer.isRequestDataLoading,
    workflows: state.workflowReducer.workflows,
    searchFilter: state.requestReducer.filterValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchRequests: function fetchRequests(apiProps) {
      return dispatch(Object(_redux_Actions_RequestActions__WEBPACK_IMPORTED_MODULE_16__["fetchRequests"])(apiProps));
    }
  };
};

Requests.propTypes = {
  filteredItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  requests: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  fetchRequests: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
Requests.defaultProps = {
  requests: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Requests));

/***/ }),

/***/ "./src/SmartComponents/Request/add-request-modal.js":
/*!**********************************************************!*\
  !*** ./src/SmartComponents/Request/add-request-modal.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var _Common_FormRenderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Common/FormRenderer */ "./src/SmartComponents/Common/FormRenderer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_Actions_RequestActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/Actions/RequestActions */ "./src/redux/Actions/RequestActions.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");













var AddRequestModal = function AddRequestModal(_ref) {
  var goBack = _ref.history.goBack,
      addNotification = _ref.addNotification,
      fetchRequests = _ref.fetchRequests,
      initialValues = _ref.initialValues,
      workflows = _ref.workflows,
      updateRequest = _ref.updateRequest;

  var onSubmit = function onSubmit(data) {
    updateRequest(data).then(function () {
      return fetchRequests();
    }).then(goBack);
  };

  var onCancel = function onCancel() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_11__["pipe"])(addNotification({
      variant: 'warning',
      title: 'Editing request',
      description: 'Edit request was cancelled by the user.'
    }), goBack());
  };

  var onOptionSelect = function onOptionSelect() {};

  var dropdownItems = workflows.map(function (workflow) {
    return {
      value: workflow.id,
      label: workflow.name,
      id: workflow.id
    };
  });
  var schema = {
    type: 'object',
    properties: {
      email: {
        title: initialValues ? 'Email' : 'New Email',
        type: 'string'
      },
      first_name: {
        title: 'First Name',
        type: 'string'
      },
      last_name: {
        title: 'Last Name',
        type: 'string'
      }
    },
    required: ['email']
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    isLarge: true,
    title: initialValues ? 'Update approver' : 'Create approver',
    isOpen: true,
    onClose: onCancel
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Grid"], {
    gutter: "md",
    style: {
      minWidth: '800px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_FormRenderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
    schema: schema,
    schemaType: "mozilla",
    onSubmit: onSubmit,
    onCancel: onCancel,
    formContainer: "modal",
    initialValues: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, initialValues)
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["GridItem"], {
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__["TextVariants"].h6
  }, "Select the workflows for this request.")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isMulti: true,
    placeholders: 'Select workflows',
    options: dropdownItems,
    onChange: onOptionSelect,
    closeMenuOnSelect: false
  }))));
};

AddRequestModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  }).isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  fetchRequests: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.object,
  workflows: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array,
  updateRequest: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var id = _ref2.match.params.id;
  var requests = state.requestReducer.requests;
  return {
    workflows: state.workflowReducer.workflows,
    initialValues: id && requests.find(function (item) {
      return item.id === id;
    }),
    requestId: id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    addNotification: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__["addNotification"],
    fetchRequests: _redux_Actions_RequestActions__WEBPACK_IMPORTED_MODULE_10__["fetchRequests"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(AddRequestModal)));

/***/ }),

/***/ "./src/SmartComponents/Request/request.scss":
/*!**************************************************!*\
  !*** ./src/SmartComponents/Request/request.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/SmartComponents/Workflow/Workflow.js":
/*!**************************************************!*\
  !*** ./src/SmartComponents/Workflow/Workflow.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");












var Workflow =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_4___default()(Workflow, _Component);

  function Workflow() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Workflow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Workflow)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "state", {
      isKebabOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onKebabToggle", function (isOpen) {
      _this.setState({
        isKebabOpen: isOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "onKebabSelect", function () {
      _this.setState({
        isKebabOpen: !_this.state.isKebabOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "buildWorkflowActionKebab", function (workflow) {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Dropdown"], {
        position: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownPosition"].right,
        onSelect: _this.onKebabSelect,
        toggle: react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["KebabToggle"], {
          onToggle: _this.onKebabToggle
        }),
        isOpen: _this.state.isKebabOpen,
        dropdownItems: [react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
          "aria-label": "Edit Workflow",
          key: "edit-workflow"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          to: "/workflows/edit/".concat(workflow.id)
        }, "Edit")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DropdownItem"], {
          component: "link",
          "aria-label": "Remove Workflow",
          key: "remove-workflow"
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_9__["Link"], {
          to: "/workflows/remove/".concat(workflow.id)
        }, "Delete"))],
        isPlain: true
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this)), "fetchDetailsForWorkflow", function (workflow) {
      return "Stages for ".concat(workflow.name);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Workflow, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var item = this.props.item;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListItem"], {
        key: "workflow-".concat(item.id),
        "aria-labelledby": "check-workflow-".concat(item.id),
        isExpanded: this.props.isExpanded("workflow-".concat(item.id))
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListToggle"], {
        onClick: function onClick() {
          return _this2.props.toggleExpand("workflow-".concat(item.id));
        },
        isExpanded: this.props.isExpanded("workflow-".concat(item.id)),
        id: "workflow-".concat(item.id),
        "aria-labelledby": "workflow-".concat(item.id, " workflow-").concat(item.id),
        "aria-label": "Toggle details for"
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCheck"], {
        "aria-labelledby": "check-workflow-".concat(item.id),
        name: "check-workflow-".concat(item.id)
      }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("span", {
        id: item.id
      }, item.name, " ")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], null, item.description), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListCell"], {
        class: "pf-c-data-list__action",
        "aria-labelledby": "workflow-".concat(item.id, " check-workflow-action").concat(item.id),
        id: "workflow-".concat(item.id),
        "aria-label": "Actions"
      }, this.buildWorkflowActionKebab(item)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["DataListContent"], {
        "aria-label": "Workflow Content Details",
        isHidden: !this.props.isExpanded("workflow-".concat(item.id))
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Stack"], {
        gutter: "md"
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Title"], {
        size: "md"
      }, "Description")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextContent"], {
        component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].h6
      }, item.description)), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["Title"], {
        size: "md"
      }, "Stages")), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["StackItem"], null, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextContent"], {
        component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__["TextVariants"].h6
      }, this.fetchDetailsForWorkflow(item))))));
    }
  }]);

  return Workflow;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

Workflow.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.bool,
  item: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.object,
  isExpanded: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  toggleExpand: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.func.isRequired,
  noItems: prop_types__WEBPACK_IMPORTED_MODULE_8___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Workflow);

/***/ }),

/***/ "./src/SmartComponents/Workflow/WorkflowList.js":
/*!******************************************************!*\
  !*** ./src/SmartComponents/Workflow/WorkflowList.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _Workflow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Workflow */ "./src/SmartComponents/Workflow/Workflow.js");














var WorkflowList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(WorkflowList, _Component);

  function WorkflowList() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, WorkflowList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(WorkflowList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      expanded: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "toggleExpand", function (id) {
      var expanded = _this.state.expanded;
      var index = expanded.indexOf(id);
      var newExpanded = index >= 0 ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded.slice(index + 1, expanded.length))) : [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded), [id]);

      _this.setState(function () {
        return {
          expanded: newExpanded
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "isExpanded", function (key) {
      return _this.state.expanded.includes(key);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(WorkflowList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.isLoading) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitle"], {
          title: this.props.noItems
        }));
      } // <WorkflowDetail isExpanded={ expandedList.includes(item.name) } toggle={ toggle }/>) }


      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div", null, this.props.isLoading && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("span", {
        color: '#00b9e4'
      }, " Loading...")), this.props.items && this.props.items.length > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["DataList"], {
        "aria-label": "Expandable data list"
      }, this.props.items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Workflow__WEBPACK_IMPORTED_MODULE_12__["default"], {
          key: item.id,
          item: item,
          isExpanded: _this2.isExpanded,
          toggleExpand: _this2.toggleExpand
        });
      })));
    }
  }]);

  return WorkflowList;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

WorkflowList.propTypes = {
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.bool,
  items: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.array,
  noItems: prop_types__WEBPACK_IMPORTED_MODULE_9___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (WorkflowList);

/***/ }),

/***/ "./src/SmartComponents/Workflow/Workflows.js":
/*!***************************************************!*\
  !*** ./src/SmartComponents/Workflow/Workflows.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _PresentationalComponents_Workflow_WorkflowsFilterToolbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../PresentationalComponents/Workflow/WorkflowsFilterToolbar */ "./src/PresentationalComponents/Workflow/WorkflowsFilterToolbar.js");
/* harmony import */ var _redux_Actions_WorkflowActions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/Actions/WorkflowActions */ "./src/redux/Actions/WorkflowActions.js");
/* harmony import */ var _add_workflow_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-workflow-modal */ "./src/SmartComponents/Workflow/add-workflow-modal.js");
/* harmony import */ var _remove_workflow_modal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./remove-workflow-modal */ "./src/SmartComponents/Workflow/remove-workflow-modal.js");
/* harmony import */ var _WorkflowList__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./WorkflowList */ "./src/SmartComponents/Workflow/WorkflowList.js");
/* harmony import */ var _workflow_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./workflow.scss */ "./src/SmartComponents/Workflow/workflow.scss");
/* harmony import */ var _workflow_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_workflow_scss__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../Helpers/Shared/helpers */ "./src/Helpers/Shared/helpers.js");






















var Workflows =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Workflows, _Component);

  function Workflows() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Workflows);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Workflows)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "state", {
      filteredItems: [],
      isOpen: false,
      filterValue: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "fetchData", function () {
      _this.props.fetchWorkflows();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this)), "onFilterChange", function (filterValue) {
      return _this.setState({
        filterValue: filterValue
      });
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Workflows, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      Object(_Helpers_Shared_helpers__WEBPACK_IMPORTED_MODULE_20__["scrollToTop"])();
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], {
        className: "searchToolbar"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_PresentationalComponents_Workflow_WorkflowsFilterToolbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onFilterChange: this.onFilterChange,
        filterValue: this.state.filterValue
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        to: "/workflows/add-workflow"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Button"], {
        variant: "primary",
        "aria-label": "Create Workflow"
      }, "Create Workflow")))));
    }
  }, {
    key: "render",
    value: function render() {
      var filteredItems = {
        items: this.props.workflows,
        isLoading: this.props.isLoading && this.props.workflows.length === 0
      };
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/workflows/add-workflow",
        component: _add_workflow_modal__WEBPACK_IMPORTED_MODULE_16__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/workflows/edit/:id",
        component: _add_workflow_modal__WEBPACK_IMPORTED_MODULE_16__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/workflows/remove/:id",
        component: _remove_workflow_modal__WEBPACK_IMPORTED_MODULE_17__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_13__["Section"], {
        type: "content"
      }, this.renderToolbar(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_WorkflowList__WEBPACK_IMPORTED_MODULE_18__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, filteredItems, {
        noItems: 'No Workflows'
      }))));
    }
  }]);

  return Workflows;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(state) {
  return {
    workflows: state.workflowReducer.workflows,
    isLoading: state.workflowReducer.isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchWorkflows: function fetchWorkflows(apiProps) {
      return dispatch(Object(_redux_Actions_WorkflowActions__WEBPACK_IMPORTED_MODULE_15__["fetchWorkflows"])(apiProps));
    }
  };
};

Workflows.propTypes = {
  filteredItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  workflows: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  platforms: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  fetchWorkflows: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
};
Workflows.defaultProps = {
  workflows: []
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Workflows));

/***/ }),

/***/ "./src/SmartComponents/Workflow/add-workflow-modal.js":
/*!************************************************************!*\
  !*** ./src/SmartComponents/Workflow/add-workflow-modal.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Common_FormRenderer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Common/FormRenderer */ "./src/SmartComponents/Common/FormRenderer.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _redux_Actions_WorkflowActions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../redux/Actions/WorkflowActions */ "./src/redux/Actions/WorkflowActions.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");












var AddWorkflowModal = function AddWorkflowModal(_ref) {
  var goBack = _ref.history.goBack,
      addWorkflow = _ref.addWorkflow,
      addNotification = _ref.addNotification,
      fetchWorkflows = _ref.fetchWorkflows,
      initialValues = _ref.initialValues,
      updateWorkflow = _ref.updateWorkflow;

  var onSubmit = function onSubmit(data) {
    var request_data = _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, data, {
      request_list: selectedRequests.map(function (request) {
        return {
          requestname: request
        };
      })
    });

    initialValues ? updateWorkflow(request_data).then(function () {
      return fetchWorkflows();
    }).then(goBack) : addWorkflow(request_data).then(function () {
      return fetchWorkflows();
    }).then(goBack);
  };

  var onCancel = function onCancel() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_10__["pipe"])(addNotification({
      variant: 'warning',
      title: initialValues ? 'Editing workflow' : 'Creating workflow',
      description: initialValues ? 'Edit workflow was cancelled by the user.' : 'Creating workflow was cancelled by the user.'
    }), goBack());
  };

  var selectedRequests = [];
  var schema = {
    type: 'object',
    properties: {
      name: {
        title: initialValues ? 'Workflow Name' : 'New Workflow Name',
        type: 'string'
      },
      description: {
        title: 'Description',
        type: 'string'
      }
    },
    required: ['name']
  };
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Modal"], {
    isLarge: true,
    title: initialValues ? 'Edit workflow' : 'Create workflow',
    isOpen: true,
    onClose: onCancel
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["Grid"], {
    gutter: "md",
    style: {
      minWidth: '800px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_7__["GridItem"], {
    sm: 6
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Common_FormRenderer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    schema: schema,
    schemaType: "mozilla",
    onSubmit: onSubmit,
    onCancel: onCancel,
    formContainer: "modal",
    initialValues: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, initialValues)
  }))));
};

AddWorkflowModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  }).isRequired,
  addWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  fetchWorkflows: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  updateWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var id = _ref2.match.params.id;
  var workflows = state.workflowReducer.workflows;
  return {
    initialValues: id && workflows.find(function (item) {
      return item.id === id;
    }),
    workflowId: id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    addNotification: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_8__["addNotification"],
    addWorkflow: _redux_Actions_WorkflowActions__WEBPACK_IMPORTED_MODULE_9__["addWorkflow"],
    updateWorkflow: _redux_Actions_WorkflowActions__WEBPACK_IMPORTED_MODULE_9__["updateWorkflow"],
    fetchWorkflows: _redux_Actions_WorkflowActions__WEBPACK_IMPORTED_MODULE_9__["fetchWorkflows"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(AddWorkflowModal)));

/***/ }),

/***/ "./src/SmartComponents/Workflow/remove-workflow-modal.js":
/*!***************************************************************!*\
  !*** ./src/SmartComponents/Workflow/remove-workflow-modal.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _redux_Actions_WorkflowActions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../redux/Actions/WorkflowActions */ "./src/redux/Actions/WorkflowActions.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _workflow_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./workflow.scss */ "./src/SmartComponents/Workflow/workflow.scss");
/* harmony import */ var _workflow_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_workflow_scss__WEBPACK_IMPORTED_MODULE_9__);











var RemoveWorkflowModal = function RemoveWorkflowModal(_ref) {
  var _ref$history = _ref.history,
      goBack = _ref$history.goBack,
      push = _ref$history.push,
      removeWorkflow = _ref.removeWorkflow,
      addNotification = _ref.addNotification,
      fetchWorkflows = _ref.fetchWorkflows,
      workflowId = _ref.workflowId,
      workflowName = _ref.workflowName;

  var onSubmit = function onSubmit() {
    return removeWorkflow(workflowId).then(function () {
      return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["pipe"])(fetchWorkflows(), push('/workflows'));
    });
  };

  var onCancel = function onCancel() {
    return Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["pipe"])(addNotification({
      variant: 'warning',
      title: 'Removing workflow',
      description: 'Removing workflow was cancelled by the user.'
    }), goBack());
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    isOpen: true,
    title: '',
    onClose: onCancel,
    actions: [react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      key: "cancel",
      variant: "secondary",
      type: "button",
      onClick: onCancel
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Button"], {
      key: "submit",
      variant: "primary",
      type: "button",
      onClick: onSubmit
    }, "Confirm")]
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "center_message"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Title"], {
    size: 'xl'
  }, "Removing Workflow:  ", workflowName))));
};

RemoveWorkflowModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,
  removeWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchWorkflows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  workflowId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  workflowName: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
};

var workflowDetailsFromState = function workflowDetailsFromState(state, id) {
  return state.workflowReducer.workflows.find(function (workflow) {
    return workflow.id === id;
  });
};

var mapStateToProps = function mapStateToProps(state, _ref2) {
  var id = _ref2.match.params.id;
  var workflow = workflowDetailsFromState(state, id);
  return {
    workflowId: workflow.id,
    workflowName: workflow.name
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    addNotification: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_6__["addNotification"],
    fetchWorkflows: _redux_Actions_WorkflowActions__WEBPACK_IMPORTED_MODULE_7__["fetchWorkflows"],
    removeWorkflow: _redux_Actions_WorkflowActions__WEBPACK_IMPORTED_MODULE_7__["removeWorkflow"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(RemoveWorkflowModal)));

/***/ }),

/***/ "./src/SmartComponents/Workflow/workflow.scss":
/*!****************************************************!*\
  !*** ./src/SmartComponents/Workflow/workflow.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/Utilities/Constants.js":
/*!************************************!*\
  !*** ./src/Utilities/Constants.js ***!
  \************************************/
/*! exports provided: APPROVAL_API_BASE, RBAC_API_BASE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPROVAL_API_BASE", function() { return APPROVAL_API_BASE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RBAC_API_BASE", function() { return RBAC_API_BASE; });
var APPROVAL_API_BASE = "".concat("/api", "/approval/v1.0");
var RBAC_API_BASE = "".concat("/api", "/rbac/v1");

/***/ }),

/***/ "./src/Utilities/store.js":
/*!********************************!*\
  !*** ./src/Utilities/store.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-promise-middleware */ "./node_modules/redux-promise-middleware/dist/es/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-logger */ "./node_modules/redux-logger/dist/redux-logger.js");
/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");
/* harmony import */ var _redux_reducers_requestReducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/requestReducer */ "./src/redux/reducers/requestReducer.js");
/* harmony import */ var _redux_reducers_workflowReducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/workflowReducer */ "./src/redux/reducers/workflowReducer.js");







var registry = new _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["ReducerRegistry"]({}, [redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"], Object(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__["notificationsMiddleware"])({
  errorTitleKey: ['message'],
  errorDescriptionKey: ['errors', 'stack']
}), redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a]);
registry.register({
  requestReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_requestReducer__WEBPACK_IMPORTED_MODULE_5__["default"], _redux_reducers_requestReducer__WEBPACK_IMPORTED_MODULE_5__["requestInitialState"]),
  workflowReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_workflowReducer__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_reducers_workflowReducer__WEBPACK_IMPORTED_MODULE_6__["workflowInitialState"]),
  notifications: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__["notifications"]
});
/* harmony default export */ __webpack_exports__["default"] = (registry.getStore());

/***/ }),

/***/ "./src/entry-dev.js":
/*!**************************!*\
  !*** ./src/entry-dev.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Utilities_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Utilities/store */ "./src/Utilities/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");






var pathName = window.location.pathname.split('/');
pathName.shift();
var release = '/';

if (pathName[0] === 'beta') {
  release = "/".concat(pathName.shift(), "/");
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _Utilities_store__WEBPACK_IMPORTED_MODULE_4__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: "".concat(release).concat(pathName[0], "/").concat(pathName[1])
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/redux/ActionTypes.js":
/*!**********************************!*\
  !*** ./src/redux/ActionTypes.js ***!
  \**********************************/
/*! exports provided: FETCH_REQUEST, FETCH_REQUESTS, UPDATE_REQUEST, FETCH_WORKFLOW, FETCH_WORKFLOWS, ADD_WORKFLOW, UPDATE_WORKFLOW, REMOVE_WORKFLOW */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_REQUEST", function() { return FETCH_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_REQUESTS", function() { return FETCH_REQUESTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_REQUEST", function() { return UPDATE_REQUEST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WORKFLOW", function() { return FETCH_WORKFLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_WORKFLOWS", function() { return FETCH_WORKFLOWS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_WORKFLOW", function() { return ADD_WORKFLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_WORKFLOW", function() { return UPDATE_WORKFLOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_WORKFLOW", function() { return REMOVE_WORKFLOW; });
var FETCH_REQUEST = 'FETCH_REQUEST';
var FETCH_REQUESTS = 'FETCH_REQUESTS';
var UPDATE_REQUEST = 'FETCH_REQUEST';
var FETCH_WORKFLOW = 'FETCH_WORKFLOW';
var FETCH_WORKFLOWS = 'FETCH_WORKFLOWS';
var ADD_WORKFLOW = 'ADD_WORKFLOW';
var UPDATE_WORKFLOW = 'UPDATE_WORKFLOW';
var REMOVE_WORKFLOW = 'REMOVE_WORKFLOW';

/***/ }),

/***/ "./src/redux/Actions/RequestActions.js":
/*!*********************************************!*\
  !*** ./src/redux/Actions/RequestActions.js ***!
  \*********************************************/
/*! exports provided: fetchRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRequests", function() { return fetchRequests; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionTypes */ "./src/redux/ActionTypes.js");
/* harmony import */ var _Helpers_Request_RequestHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Helpers/Request/RequestHelper */ "./src/Helpers/Request/RequestHelper.js");




var doFetchRequests = function doFetchRequests() {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_REQUESTS"],
    payload: _Helpers_Request_RequestHelper__WEBPACK_IMPORTED_MODULE_2__["fetchRequests"]().then(function (_ref) {
      var data = _ref.data;
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(data);
    })
  };
};

var fetchRequests = function fetchRequests() {
  return function (dispatch, getState) {
    var _getState = getState(),
        isRequestDataLoading = _getState.requestReducer.isRequestDataLoading;

    if (!isRequestDataLoading) {
      return dispatch(doFetchRequests());
    }
  };
};

/***/ }),

/***/ "./src/redux/Actions/WorkflowActions.js":
/*!**********************************************!*\
  !*** ./src/redux/Actions/WorkflowActions.js ***!
  \**********************************************/
/*! exports provided: doFetchWorkflows, fetchWorkflows, addWorkflow, updateWorkflow, removeWorkflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doFetchWorkflows", function() { return doFetchWorkflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWorkflows", function() { return fetchWorkflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWorkflow", function() { return addWorkflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWorkflow", function() { return updateWorkflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWorkflow", function() { return removeWorkflow; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ActionTypes */ "./src/redux/ActionTypes.js");
/* harmony import */ var _Helpers_Workflow_WorkflowHelper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Helpers/Workflow/WorkflowHelper */ "./src/Helpers/Workflow/WorkflowHelper.js");



var doFetchWorkflows = function doFetchWorkflows() {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_WORKFLOWS"],
    payload: _Helpers_Workflow_WorkflowHelper__WEBPACK_IMPORTED_MODULE_2__["fetchWorkflows"]().then(function (_ref) {
      var data = _ref.data;
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(data);
    })
  };
};
var fetchWorkflows = function fetchWorkflows(apiProps) {
  return function (dispatch, getState) {
    var _getState = getState(),
        isLoading = _getState.workflowReducer.isLoading;

    if (!isLoading) {
      return dispatch(doFetchWorkflows(apiProps));
    }
  };
};
var addWorkflow = function addWorkflow(workflowData) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_WORKFLOW"],
    payload: _Helpers_Workflow_WorkflowHelper__WEBPACK_IMPORTED_MODULE_2__["addWorkflow"](workflowData),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success adding workflow',
          description: 'The workflow was added successfully.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed adding workflow',
          description: 'The workflow was not added successfuly.'
        }
      }
    }
  };
};
var updateWorkflow = function updateWorkflow(workflowData) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE_WORKFLOW"],
    payload: _Helpers_Workflow_WorkflowHelper__WEBPACK_IMPORTED_MODULE_2__["updateWorkflow"](workflowData),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success updating workflow',
          description: 'The workflow was updated successfully.'
        },
        rejected: {
          variant: 'danger',
          title: 'Failed updating workflow',
          description: 'The workflow was not updated successfuly.'
        }
      }
    }
  };
};
var removeWorkflow = function removeWorkflow(workflow) {
  return {
    type: _ActionTypes__WEBPACK_IMPORTED_MODULE_1__["REMOVE_WORKFLOW"],
    payload: _Helpers_Workflow_WorkflowHelper__WEBPACK_IMPORTED_MODULE_2__["removeWorkflow"](workflow),
    meta: {
      notifications: {
        fulfilled: {
          variant: 'success',
          title: 'Success removing workflow',
          description: 'The workflow was removed successfully.'
        }
      }
    }
  };
};

/***/ }),

/***/ "./src/redux/reducers/requestReducer.js":
/*!**********************************************!*\
  !*** ./src/redux/reducers/requestReducer.js ***!
  \**********************************************/
/*! exports provided: requestInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestInitialState", function() { return requestInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/ActionTypes */ "./src/redux/ActionTypes.js");



var _$concat$$concat$$con;

 // Initial State

var requestInitialState = {
  requests: [],
  request: {},
  filterValue: '',
  isRequestDataLoading: false
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isRequestDataLoading: true
  });
};

var setRequests = function setRequests(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    requests: payload,
    isRequestDataLoading: false
  });
};

var selectRequest = function selectRequest(state, _ref2) {
  var payload = _ref2.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedRequest: payload,
    isRequestDataLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_REQUESTS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_REQUESTS"], "_FULFILLED"), setRequests), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_REQUEST"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_REQUEST"], "_FULFILLED"), selectRequest), _$concat$$concat$$con);

/***/ }),

/***/ "./src/redux/reducers/workflowReducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/workflowReducer.js ***!
  \***********************************************/
/*! exports provided: workflowInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workflowInitialState", function() { return workflowInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/ActionTypes */ "./src/redux/ActionTypes.js");



var _$concat$$concat$$con;

 // Initial State

var workflowInitialState = {
  workflows: [],
  workflow: {},
  filterValue: '',
  isLoading: false
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isLoading: true
  });
};

var setWorkflows = function setWorkflows(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    workflows: payload,
    isLoading: false
  });
};

var selectWorkflow = function selectWorkflow(state, _ref2) {
  var payload = _ref2.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    selectedWorkflow: payload,
    isLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_WORKFLOWS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_WORKFLOWS"], "_FULFILLED"), setWorkflows), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_WORKFLOW"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_ActionTypes__WEBPACK_IMPORTED_MODULE_2__["FETCH_WORKFLOW"], "_FULFILLED"), selectWorkflow), _$concat$$concat$$con);

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/App.js.map