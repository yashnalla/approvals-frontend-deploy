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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _Routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Routes */ "./src/Routes.js");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./App.scss */ "./src/App.scss");
/* harmony import */ var _App_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_App_scss__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _smart_components_app_tabs_app_tabs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./smart-components/app-tabs/app-tabs */ "./src/smart-components/app-tabs/app-tabs.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications.css */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.css");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");




















var App =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(App, _Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
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
      insights.chrome.identifyApp('approval');
    }
  }, {
    key: "render",
    value: function render() {
      var auth = this.state.auth;

      if (!auth) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_18__["AppPlaceholder"], null);
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_16__["NotificationsPortal"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__["PageHeader"], {
        style: {
          paddingBottom: 0
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_15__["Title"], {
        headingLevel: "h1",
        size: "2xl"
      }, "Approval"), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_smart_components_app_tabs_app_tabs__WEBPACK_IMPORTED_MODULE_13__["default"], null)), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_14__["Main"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_Routes__WEBPACK_IMPORTED_MODULE_11__["Routes"], null)));
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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./presentational-components/shared/loader-placeholders */ "./src/presentational-components/shared/loader-placeholders.js");






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
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./smart-components/request/requests */ "./src/smart-components/request/requests.js"));
  });
});
var Workflows = Object(react__WEBPACK_IMPORTED_MODULE_4__["lazy"])(function () {
  return Promise.resolve().then(function () {
    return _babel_runtime_helpers_interopRequireWildcard__WEBPACK_IMPORTED_MODULE_1___default()(__webpack_require__(/*! ./smart-components/workflow/workflows */ "./src/smart-components/workflow/workflows.js"));
  });
});
var paths = {
  approval: '/',
  requests: '/requests',
  workflows: '/workflows'
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

var Routes = function Routes() {
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4__["Suspense"], {
    fallback: react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_presentational_components_shared_loader_placeholders__WEBPACK_IMPORTED_MODULE_5__["AppPlaceholder"], null)
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Switch"], null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.requests,
    component: Requests,
    rootClass: "requests"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(InsightsRoute, {
    path: paths.workflows,
    component: Workflows,
    rootClass: "workflows"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Route"], {
    render: function render() {
      return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Redirect"], {
        to: paths.workflows
      });
    }
  })));
};

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
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _utilities_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utilities/store */ "./src/utilities/store.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App */ "./src/App.js");






var pathName = window.location.pathname.split('/');
pathName.shift();
var release = '/';

if (pathName[0] === 'beta') {
  release = "/".concat(pathName.shift(), "/");
}

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_redux__WEBPACK_IMPORTED_MODULE_3__["Provider"], {
  store: _utilities_store__WEBPACK_IMPORTED_MODULE_4__["default"]
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["BrowserRouter"], {
  basename: "".concat(release).concat(pathName[0], "/").concat(pathName[1])
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_5__["default"], null))), document.getElementById('root'));

/***/ }),

/***/ "./src/forms/workflow-form.schema.js":
/*!*******************************************!*\
  !*** ./src/forms/workflow-form.schema.js ***!
  \*******************************************/
/*! exports provided: createWorkflowSchema */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createWorkflowSchema", function() { return createWorkflowSchema; });
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @data-driven-forms/react-form-renderer */ "./node_modules/@data-driven-forms/react-form-renderer/dist/index.js");
/* harmony import */ var _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__);

var createWorkflowSchema = function createWorkflowSchema(newRecord, rbacGroups) {
  return {
    fields: [{
      component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["componentTypes"].WIZARD,
      name: 'workflow_wizard',
      fields: [{
        title: 'Workflow information',
        name: 'wf_step_info',
        stepKey: 1,
        nextStep: 'wf_step_stages',
        fields: [{
          component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["componentTypes"].TEXTAREA_FIELD,
          name: 'name',
          type: 'text',
          isRequired: true,
          label: 'Name',
          validate: [{
            type: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["validatorTypes"].REQUIRED
          }]
        }, {
          component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["componentTypes"].TEXTAREA_FIELD,
          name: 'description',
          type: 'text',
          label: 'Description'
        }]
      }, {
        stepKey: 'wf_step_stages',
        title: 'Set Approval Stages',
        name: 'wf_step_stages',
        nextStep: 'summary',
        fields: [{
          component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["componentTypes"].SELECT,
          name: 'stage-1',
          isRequired: false,
          label: '1st Stage',
          options: rbacGroups
        }, {
          component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["componentTypes"].SELECT,
          name: 'stage-2',
          label: '2nd Stage',
          options: rbacGroups
        }, {
          component: _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_0__["componentTypes"].SELECT,
          name: 'stage-3',
          label: '3rd Stage',
          options: rbacGroups
        }]
      }, {
        fields: [{
          name: 'summary',
          component: 'summary'
        }],
        stepKey: 'summary',
        name: 'summary'
      }]
    }]
  };
};

/***/ }),

/***/ "./src/helpers/group/group-helper.js":
/*!*******************************************!*\
  !*** ./src/helpers/group/group-helper.js ***!
  \*******************************************/
/*! exports provided: getRbacGroups, fetchGroup, fetchGroupNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacGroups", function() { return getRbacGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroup", function() { return fetchGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchGroupNames", function() { return fetchGroupNames; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");



var api = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_2__["getRbacGroupApi"])();
function getRbacGroups() {
  return _getRbacGroups.apply(this, arguments);
}

function _getRbacGroups() {
  _getRbacGroups = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return api.listGroups();

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getRbacGroups.apply(this, arguments);
}

function fetchGroup(_x) {
  return _fetchGroup.apply(this, arguments);
}

function _fetchGroup() {
  _fetchGroup = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return api.getGroup(id);

          case 2:
            return _context2.abrupt("return", _context2.sent);

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _fetchGroup.apply(this, arguments);
}

function fetchGroupNames(_x2) {
  return _fetchGroupNames.apply(this, arguments);
}

function _fetchGroupNames() {
  _fetchGroupNames = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(groupRefs) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            if (!groupRefs) {
              _context4.next = 2;
              break;
            }

            return _context4.abrupt("return", Promise.all(groupRefs.map(
            /*#__PURE__*/
            function () {
              var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(id) {
                var group;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
                  while (1) {
                    switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return api.getGroup(id);

                      case 2:
                        group = _context3.sent;
                        return _context3.abrupt("return", group.name);

                      case 4:
                      case "end":
                        return _context3.stop();
                    }
                  }
                }, _callee3);
              }));

              return function (_x3) {
                return _ref.apply(this, arguments);
              };
            }())));

          case 2:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _fetchGroupNames.apply(this, arguments);
}

/***/ }),

/***/ "./src/helpers/request/request-helper.js":
/*!***********************************************!*\
  !*** ./src/helpers/request/request-helper.js ***!
  \***********************************************/
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
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");



var requestApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_2__["getRequestApi"])();
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
    }, _callee);
  }));
  return _updateRequest.apply(this, arguments);
}

/***/ }),

/***/ "./src/helpers/shared/helpers.js":
/*!***************************************!*\
  !*** ./src/helpers/shared/helpers.js ***!
  \***************************************/
/*! exports provided: scrollToTop, getCurrentPage, getNewPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scrollToTop", function() { return scrollToTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentPage", function() { return getCurrentPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNewPage", function() { return getNewPage; });
var scrollToTop = function scrollToTop() {
  return document.getElementById('root').scrollTo({
    behavior: 'smooth',
    top: 0,
    left: 0
  });
};
var getCurrentPage = function getCurrentPage() {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return Math.floor(offset / limit) + 1;
};
var getNewPage = function getNewPage() {
  var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var offset = arguments.length > 1 ? arguments[1] : undefined;
  return (page - 1) * offset;
};

/***/ }),

/***/ "./src/helpers/shared/user-login.js":
/*!******************************************!*\
  !*** ./src/helpers/shared/user-login.js ***!
  \******************************************/
/*! exports provided: getRequestApi, getTemplateApi, getWorkflowApi, getActionApi, getRbacAccessApi, getRbacPrincipalApi, getRbacGroupApi */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRequestApi", function() { return getRequestApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTemplateApi", function() { return getTemplateApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWorkflowApi", function() { return getWorkflowApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActionApi", function() { return getActionApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacAccessApi", function() { return getRbacAccessApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacPrincipalApi", function() { return getRbacPrincipalApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRbacGroupApi", function() { return getRbacGroupApi; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utilities_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utilities/constants */ "./src/utilities/constants.js");
/* harmony import */ var _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @redhat-cloud-services/rbac-client */ "./node_modules/@redhat-cloud-services/rbac-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @redhat-cloud-services/approval-client */ "./node_modules/@redhat-cloud-services/approval-client/dist/index.js");
/* harmony import */ var _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__);




var axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create();

var resolveInterceptor = function resolveInterceptor(response) {
  return response.data || response;
};

axiosInstance.interceptors.response.use(resolveInterceptor);
var workflowApi = new _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__["WorkflowApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_1__["APPROVAL_API_BASE"], axiosInstance);
var actionApi = new _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__["ActionApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_1__["APPROVAL_API_BASE"], axiosInstance);
var requestApi = new _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__["RequestApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_1__["APPROVAL_API_BASE"], axiosInstance);
var templateApi = new _redhat_cloud_services_approval_client__WEBPACK_IMPORTED_MODULE_3__["TemplateApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_1__["APPROVAL_API_BASE"], axiosInstance);
var rbacAccessApi = new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_2__["AccessApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_1__["RBAC_API_BASE"], axiosInstance);
var rbacPrincipalApi = new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_2__["PrincipalApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_1__["RBAC_API_BASE"], axiosInstance);
var rbacGroupApi = new _redhat_cloud_services_rbac_client__WEBPACK_IMPORTED_MODULE_2__["GroupApi"](undefined, _utilities_constants__WEBPACK_IMPORTED_MODULE_1__["RBAC_API_BASE"], axiosInstance);
function getRequestApi() {
  return requestApi;
}
function getTemplateApi() {
  return templateApi;
}
function getWorkflowApi() {
  return workflowApi;
}
function getActionApi() {
  return actionApi;
}
function getRbacAccessApi() {
  return rbacAccessApi;
}
function getRbacPrincipalApi() {
  return rbacPrincipalApi;
}
function getRbacGroupApi() {
  return rbacGroupApi;
}

/***/ }),

/***/ "./src/helpers/workflow/workflow-helper.js":
/*!*************************************************!*\
  !*** ./src/helpers/workflow/workflow-helper.js ***!
  \*************************************************/
/*! exports provided: fetchWorkflows, fetchWorkflowsWithGroups, fetchWorkflowWithGroups, fetchWorkflow, updateWorkflow, addWorkflow, removeWorkflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWorkflows", function() { return fetchWorkflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWorkflowsWithGroups", function() { return fetchWorkflowsWithGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWorkflowWithGroups", function() { return fetchWorkflowWithGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWorkflow", function() { return fetchWorkflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWorkflow", function() { return updateWorkflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWorkflow", function() { return addWorkflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWorkflow", function() { return removeWorkflow; });
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_user_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/user-login */ "./src/helpers/shared/user-login.js");
/* harmony import */ var _group_group_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../group/group-helper */ "./src/helpers/group/group-helper.js");





var workflowApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_3__["getWorkflowApi"])();
var templateApi = Object(_shared_user_login__WEBPACK_IMPORTED_MODULE_3__["getTemplateApi"])();
function fetchWorkflows(_x) {
  return _fetchWorkflows.apply(this, arguments);
}

function _fetchWorkflows() {
  _fetchWorkflows = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(_ref) {
    var _ref$limit, limit, _ref$offset, offset;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ref$limit = _ref.limit, limit = _ref$limit === void 0 ? 10 : _ref$limit, _ref$offset = _ref.offset, offset = _ref$offset === void 0 ? 0 : _ref$offset;
            _context.next = 3;
            return workflowApi.listWorkflows(limit, offset);

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _fetchWorkflows.apply(this, arguments);
}

function fetchWorkflowsWithGroups(_x2) {
  return _fetchWorkflowsWithGroups.apply(this, arguments);
}

function _fetchWorkflowsWithGroups() {
  _fetchWorkflowsWithGroups = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(_ref2) {
    var _ref2$limit, limit, _ref2$offset, offset, wfData, workflows;

    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _ref2$limit = _ref2.limit, limit = _ref2$limit === void 0 ? 10 : _ref2$limit, _ref2$offset = _ref2.offset, offset = _ref2$offset === void 0 ? 0 : _ref2$offset;
            _context3.next = 3;
            return workflowApi.listWorkflows(limit, offset);

          case 3:
            wfData = _context3.sent;
            workflows = wfData.data;
            return _context3.abrupt("return", Promise.all(workflows.map(
            /*#__PURE__*/
            function () {
              var _ref4 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
              /*#__PURE__*/
              _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(wf) {
                var wfWithGroups;
                return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return Object(_group_group_helper__WEBPACK_IMPORTED_MODULE_4__["fetchGroupNames"])(wf.group_refs);

                      case 2:
                        wfWithGroups = _context2.sent;
                        return _context2.abrupt("return", _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, wf, {
                          group_names: wfWithGroups
                        }));

                      case 4:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2);
              }));

              return function (_x7) {
                return _ref4.apply(this, arguments);
              };
            }())).then(function (data) {
              return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, wfData, {
                data: data
              });
            }));

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _fetchWorkflowsWithGroups.apply(this, arguments);
}

function fetchWorkflowWithGroups(_x3) {
  return _fetchWorkflowWithGroups.apply(this, arguments);
}

function _fetchWorkflowWithGroups() {
  _fetchWorkflowWithGroups = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(id) {
    var wfData, wfGroups;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return workflowApi.showWorkflow(id);

          case 2:
            wfData = _context4.sent;
            _context4.next = 5;
            return Object(_group_group_helper__WEBPACK_IMPORTED_MODULE_4__["fetchGroupNames"])(wfData.group_refs);

          case 5:
            wfGroups = _context4.sent;
            return _context4.abrupt("return", _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, wfData, {
              group_names: wfGroups
            }));

          case 7:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _fetchWorkflowWithGroups.apply(this, arguments);
}

function fetchWorkflow(_x4) {
  return _fetchWorkflow.apply(this, arguments);
}

function _fetchWorkflow() {
  _fetchWorkflow = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(id) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return workflowApi.showWorkflow(id);

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));
  return _fetchWorkflow.apply(this, arguments);
}

function updateWorkflow(_x5) {
  return _updateWorkflow.apply(this, arguments);
}

function _updateWorkflow() {
  _updateWorkflow = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee6(data) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return workflowApi.updateWorkflow(data.id, data);

          case 2:
            return _context6.abrupt("return", _context6.sent);

          case 3:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _updateWorkflow.apply(this, arguments);
}

function addWorkflow(workflow) {
  return templateApi.listTemplates().then(function (_ref3) {
    var data = _ref3.data;

    // workaround for v1. Need to pass template ID with the workflow. Assigning to first template
    if (!data[0]) {
      throw new Error('No template exists');
    }

    return data[0].id;
  }).then(function (id) {
    return workflowApi.addWorkflowToTemplate(id, workflow, {});
  });
}
function removeWorkflow(_x6) {
  return _removeWorkflow.apply(this, arguments);
}

function _removeWorkflow() {
  _removeWorkflow = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee7(workflowId) {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return workflowApi.destroyWorkflow(workflowId);

          case 2:
            return _context7.abrupt("return", _context7.sent);

          case 3:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _removeWorkflow.apply(this, arguments);
}

/***/ }),

/***/ "./src/presentational-components/shared/filter-toolbar-item.js":
/*!*********************************************************************!*\
  !*** ./src/presentational-components/shared/filter-toolbar-item.js ***!
  \*********************************************************************/
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
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/***/ "./src/presentational-components/shared/loader-placeholders.js":
/*!*********************************************************************!*\
  !*** ./src/presentational-components/shared/loader-placeholders.js ***!
  \*********************************************************************/
/*! exports provided: CardLoader, AppPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardLoader", function() { return CardLoader; });
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

/***/ "./src/presentational-components/shared/pf4-select-wrapper.js":
/*!********************************************************************!*\
  !*** ./src/presentational-components/shared/pf4-select-wrapper.js ***!
  \********************************************************************/
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

/***/ "./src/redux/action-types.js":
/*!***********************************!*\
  !*** ./src/redux/action-types.js ***!
  \***********************************/
/*! exports provided: FETCH_REQUEST, FETCH_REQUESTS, UPDATE_REQUEST, FETCH_WORKFLOW, FETCH_WORKFLOWS, ADD_WORKFLOW, UPDATE_WORKFLOW, REMOVE_WORKFLOW, FETCH_RBAC_GROUPS, FETCH_RBAC_GROUP */
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RBAC_GROUPS", function() { return FETCH_RBAC_GROUPS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_RBAC_GROUP", function() { return FETCH_RBAC_GROUP; });
var FETCH_REQUEST = 'FETCH_REQUEST';
var FETCH_REQUESTS = 'FETCH_REQUESTS';
var UPDATE_REQUEST = 'FETCH_REQUEST';
var FETCH_WORKFLOW = 'FETCH_WORKFLOW';
var FETCH_WORKFLOWS = 'FETCH_WORKFLOWS';
var ADD_WORKFLOW = 'ADD_WORKFLOW';
var UPDATE_WORKFLOW = 'UPDATE_WORKFLOW';
var REMOVE_WORKFLOW = 'REMOVE_WORKFLOW';
var FETCH_RBAC_GROUPS = 'FETCH_RBAC_GROUPS';
var FETCH_RBAC_GROUP = 'FETCH_RBAC_GROUP';

/***/ }),

/***/ "./src/redux/actions/group-actions.js":
/*!********************************************!*\
  !*** ./src/redux/actions/group-actions.js ***!
  \********************************************/
/*! exports provided: fetchRbacGroups, fetchRbacGroup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRbacGroups", function() { return fetchRbacGroups; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRbacGroup", function() { return fetchRbacGroup; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/group/group-helper */ "./src/helpers/group/group-helper.js");



var fetchRbacGroups = function fetchRbacGroups() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_RBAC_GROUPS"],
    payload: Object(_helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_2__["getRbacGroups"])().then(function (_ref) {
      var data = _ref.data;
      return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(data.map(function (_ref2) {
        var uuid = _ref2.uuid,
            name = _ref2.name;
        return {
          value: uuid,
          label: name
        };
      }));
    })
  };
};
var fetchRbacGroup = function fetchRbacGroup(apiProps) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_GROUP"],
    payload: Object(_helpers_group_group_helper__WEBPACK_IMPORTED_MODULE_2__["fetchGroup"])(apiProps)
  };
};

/***/ }),

/***/ "./src/redux/actions/request-actions.js":
/*!**********************************************!*\
  !*** ./src/redux/actions/request-actions.js ***!
  \**********************************************/
/*! exports provided: fetchRequests */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRequests", function() { return fetchRequests; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/request/request-helper */ "./src/helpers/request/request-helper.js");




var doFetchRequests = function doFetchRequests() {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_1__["FETCH_REQUESTS"],
    payload: _helpers_request_request_helper__WEBPACK_IMPORTED_MODULE_2__["fetchRequests"]().then(function (_ref) {
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

/***/ "./src/redux/actions/workflow-actions.js":
/*!***********************************************!*\
  !*** ./src/redux/actions/workflow-actions.js ***!
  \***********************************************/
/*! exports provided: fetchWorkflows, fetchWorkflow, addWorkflow, updateWorkflow, removeWorkflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWorkflows", function() { return fetchWorkflows; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchWorkflow", function() { return fetchWorkflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addWorkflow", function() { return addWorkflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateWorkflow", function() { return updateWorkflow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeWorkflow", function() { return removeWorkflow; });
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");
/* harmony import */ var _helpers_workflow_workflow_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../helpers/workflow/workflow-helper */ "./src/helpers/workflow/workflow-helper.js");


var fetchWorkflows = function fetchWorkflows() {
  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_WORKFLOWS"],
    payload: _helpers_workflow_workflow_helper__WEBPACK_IMPORTED_MODULE_1__["fetchWorkflowsWithGroups"](options)
  };
};
var fetchWorkflow = function fetchWorkflow(apiProps) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["FETCH_WORKFLOW"],
    payload: _helpers_workflow_workflow_helper__WEBPACK_IMPORTED_MODULE_1__["fetchWorkflowWithGroups"](apiProps)
  };
};
var addWorkflow = function addWorkflow(workflowData) {
  return {
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["ADD_WORKFLOW"],
    payload: _helpers_workflow_workflow_helper__WEBPACK_IMPORTED_MODULE_1__["addWorkflow"](workflowData),
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
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_WORKFLOW"],
    payload: _helpers_workflow_workflow_helper__WEBPACK_IMPORTED_MODULE_1__["updateWorkflow"](workflowData),
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
    type: _action_types__WEBPACK_IMPORTED_MODULE_0__["REMOVE_WORKFLOW"],
    payload: _helpers_workflow_workflow_helper__WEBPACK_IMPORTED_MODULE_1__["removeWorkflow"](workflow),
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

/***/ "./src/redux/reducers/group-reducer.js":
/*!*********************************************!*\
  !*** ./src/redux/reducers/group-reducer.js ***!
  \*********************************************/
/*! exports provided: groupsInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "groupsInitialState", function() { return groupsInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../action-types */ "./src/redux/action-types.js");



var _$concat$$concat;

 // Initial State

var groupsInitialState = {
  groups: [],
  isLoading: false
};

var setLoadingState = function setLoadingState(state) {
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    isLoading: true
  });
};

var setGroups = function setGroups(state, _ref) {
  var payload = _ref.payload;
  return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default()({}, state, {
    groups: payload,
    isLoading: false
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_RBAC_GROUPS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat, "".concat(_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_RBAC_GROUPS"], "_FULFILLED"), setGroups), _$concat$$concat);

/***/ }),

/***/ "./src/redux/reducers/request-reducer.js":
/*!***********************************************!*\
  !*** ./src/redux/reducers/request-reducer.js ***!
  \***********************************************/
/*! exports provided: requestInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestInitialState", function() { return requestInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/action-types */ "./src/redux/action-types.js");



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

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_REQUESTS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_REQUESTS"], "_FULFILLED"), setRequests), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_REQUEST"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_REQUEST"], "_FULFILLED"), selectRequest), _$concat$$concat$$con);

/***/ }),

/***/ "./src/redux/reducers/workflow-reducer.js":
/*!************************************************!*\
  !*** ./src/redux/reducers/workflow-reducer.js ***!
  \************************************************/
/*! exports provided: workflowsInitialState, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "workflowsInitialState", function() { return workflowsInitialState; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_action_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../redux/action-types */ "./src/redux/action-types.js");



var _$concat$$concat$$con;

 // Initial State

var workflowsInitialState = {
  workflows: {
    data: [],
    meta: {
      count: 0,
      limit: 10,
      offset: 0
    }
  },
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

/* harmony default export */ __webpack_exports__["default"] = (_$concat$$concat$$con = {}, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_WORKFLOWS"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_WORKFLOWS"], "_FULFILLED"), setWorkflows), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_WORKFLOW"], "_PENDING"), setLoadingState), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_$concat$$concat$$con, "".concat(_redux_action_types__WEBPACK_IMPORTED_MODULE_2__["FETCH_WORKFLOW"], "_FULFILLED"), selectWorkflow), _$concat$$concat$$con);

/***/ }),

/***/ "./src/smart-components/app-tabs/app-tabs.js":
/*!***************************************************!*\
  !*** ./src/smart-components/app-tabs/app-tabs.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var tabItems = [{
  eventKey: 0,
  title: 'Requests',
  name: '/requests'
}, {
  eventKey: 1,
  title: 'Workflows',
  name: '/workflows'
}];

var AppTabs = function AppTabs(_ref) {
  var push = _ref.history.push,
      pathname = _ref.location.pathname;
  var activeTab = tabItems.find(function (_ref2) {
    var name = _ref2.name;
    return pathname.includes(name);
  });

  var handleTabClick = function handleTabClick(_event, tabIndex) {
    return push(tabItems[tabIndex].name);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tabs"], {
    className: "pf-u-mt-md",
    activeKey: activeTab ? activeTab.eventKey : 0,
    onSelect: handleTabClick
  }, tabItems.map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Tab"], {
      title: item.title,
      key: item.eventKey,
      eventKey: item.eventKey,
      name: item.name
    });
  }));
};

AppTabs.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node, prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.node)]),
  location: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    pathname: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
  }),
  history: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.shape({
    push: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired
  })
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(AppTabs));

/***/ }),

/***/ "./src/smart-components/common/form-renderer.js":
/*!******************************************************!*\
  !*** ./src/smart-components/common/form-renderer.js ***!
  \******************************************************/
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
/* harmony import */ var _presentational_components_shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../presentational-components/shared/pf4-select-wrapper */ "./src/presentational-components/shared/pf4-select-wrapper.js");









var buttonPositioning = {
  "default": {},
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
    }, _data_driven_forms_react_form_renderer__WEBPACK_IMPORTED_MODULE_6__["componentTypes"].SELECT, _presentational_components_shared_pf4_select_wrapper__WEBPACK_IMPORTED_MODULE_8__["default"])),
    layoutMapper: _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_7__["layoutMapper"]
  }, buttonPositioning[formContainer], rest)));
};

FormRenderer.propTypes = {
  componentMapper: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  formContainer: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['default', 'modal'])
};
FormRenderer.defaultProps = {
  componentMapper: {},
  formContainer: 'default'
};
/* harmony default export */ __webpack_exports__["default"] = (FormRenderer);

/***/ }),

/***/ "./src/smart-components/request/add-request-modal.js":
/*!***********************************************************!*\
  !*** ./src/smart-components/request/add-request-modal.js ***!
  \***********************************************************/
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
/* harmony import */ var _common_form_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/form-renderer */ "./src/smart-components/common/form-renderer.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _redux_actions_request_actions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../redux/actions/request-actions */ "./src/redux/actions/request-actions.js");












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
    addNotification({
      variant: 'warning',
      title: 'Editing request',
      description: 'Edit request was cancelled by the user.'
    });
    goBack();
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_common_form_renderer__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
    fetchRequests: _redux_actions_request_actions__WEBPACK_IMPORTED_MODULE_10__["fetchRequests"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(AddRequestModal)));

/***/ }),

/***/ "./src/smart-components/request/request-list.js":
/*!******************************************************!*\
  !*** ./src/smart-components/request/request-list.js ***!
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components */ "./node_modules/@red-hat-insights/insights-frontend-components/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./request */ "./src/smart-components/request/request.js");














var RequestList =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(RequestList, _Component);

  function RequestList() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, RequestList);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(RequestList)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      expanded: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "toggleExpand", function (id) {
      var expanded = _this.state.expanded;
      var index = expanded.indexOf(id);
      var newExpanded = index >= 0 ? [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded.slice(0, index)), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded.slice(index + 1, expanded.length))) : [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(expanded), [id]);

      _this.setState(function () {
        return {
          expanded: newExpanded
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "isExpanded", function (key) {
      return _this.state.expanded.includes(key);
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(RequestList, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (this.props.isLoading || this.props.items.length === 0) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeader"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitle"], {
          title: this.props.noItems
        }));
      }

      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, this.props.items && this.props.items.length > 0 && react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_11__["DataList"], {
        "aria-label": "Expandable data list"
      }, this.props.items.map(function (item) {
        return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_request__WEBPACK_IMPORTED_MODULE_12__["default"], {
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

/***/ "./src/smart-components/request/request.js":
/*!*************************************************!*\
  !*** ./src/smart-components/request/request.js ***!
  \*************************************************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");












var Request =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(Request, _Component);

  function Request() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Request);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3___default()(Request)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "state", {
      isKebabOpen: false
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onKebabToggle", function (isOpen) {
      _this.setState({
        isKebabOpen: isOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "onKebabSelect", function () {
      _this.setState({
        isKebabOpen: !_this.state.isKebabOpen
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "buildRequestActionKebab", function (request) {
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

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), "fetchRequestDetails", function (request) {
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

/***/ "./src/smart-components/request/requests.js":
/*!**************************************************!*\
  !*** ./src/smart-components/request/requests.js ***!
  \**************************************************/
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
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _request_list__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./request-list */ "./src/smart-components/request/request-list.js");
/* harmony import */ var _presentational_components_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../presentational-components/shared/filter-toolbar-item */ "./src/presentational-components/shared/filter-toolbar-item.js");
/* harmony import */ var _redux_actions_request_actions__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../redux/actions/request-actions */ "./src/redux/actions/request-actions.js");
/* harmony import */ var _add_request_modal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./add-request-modal */ "./src/smart-components/request/add-request-modal.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/TableToolbar */ "./node_modules/@red-hat-insights/insights-frontend-components/components/TableToolbar.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_18__);




















var Requests =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Requests, _Component);

  function Requests() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Requests);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Requests)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      filteredItems: [],
      isOpen: false,
      filterValue: ''
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "fetchData", function () {
      _this.props.fetchRequests();
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onFilterChange", function (filterValue) {
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
      Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_17__["scrollToTop"])();
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_18__["TableToolbar"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Level"], {
        style: {
          flex: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_12__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_14__["default"], {
        onFilterChange: this.onFilterChange,
        searchValue: this.state.filterValue,
        placeholder: "Find a Request"
      }))))));
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
        component: _add_request_modal__WEBPACK_IMPORTED_MODULE_16__["default"]
      }), this.renderToolbar(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_request_list__WEBPACK_IMPORTED_MODULE_13__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, filteredItems, {
        noItems: 'No Requests'
      })));
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
      return dispatch(Object(_redux_actions_request_actions__WEBPACK_IMPORTED_MODULE_15__["fetchRequests"])(apiProps));
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

/***/ "./src/smart-components/workflow/add-workflow-modal.js":
/*!*************************************************************!*\
  !*** ./src/smart-components/workflow/add-workflow-modal.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Notifications */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Notifications.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @data-driven-forms/pf4-component-mapper */ "./node_modules/@data-driven-forms/pf4-component-mapper/dist/index.js");
/* harmony import */ var _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_form_renderer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../common/form-renderer */ "./src/smart-components/common/form-renderer.js");
/* harmony import */ var _forms_workflow_form_schema__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../forms/workflow-form.schema */ "./src/forms/workflow-form.schema.js");
/* harmony import */ var _redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../redux/actions/workflow-actions */ "./src/redux/actions/workflow-actions.js");
/* harmony import */ var _summary_content__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./summary_content */ "./src/smart-components/workflow/summary_content.js");

















var AddWorkflowModal = function AddWorkflowModal(_ref) {
  var push = _ref.history.push,
      addWorkflow = _ref.addWorkflow,
      addNotification = _ref.addNotification,
      fetchWorkflow = _ref.fetchWorkflow,
      fetchWorkflows = _ref.fetchWorkflows,
      initialValues = _ref.initialValues,
      updateWorkflow = _ref.updateWorkflow,
      initialGroups = _ref.initialGroups,
      workflowId = _ref.workflowId,
      rbacGroups = _ref.rbacGroups;
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    if (workflowId) {
      fetchWorkflow(workflowId).then(function (data) {
        return setInitialGroups(data);
      });
    }
  }, [workflowId]);

  var onSubmit = function onSubmit(data) {
    var name = data.name,
        description = data.description,
        wfGroups = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_3___default()(data, ["name", "description"]);

    var workflowData = {
      name: name,
      description: description,
      group_refs: Object.values(wfGroups)
    };
    initialValues ? updateWorkflow(workflowData).then(push('/workflosws')).then(function () {
      return fetchWorkflows();
    }) : addWorkflow(workflowData).then(push('/workflows')).then(function () {
      return fetchWorkflows();
    });
  };

  var onCancel = function onCancel() {
    addNotification({
      variant: 'warning',
      title: initialValues ? 'Editing workflow' : 'Creating workflow',
      description: initialValues ? 'Edit workflow was cancelled by the user.' : 'Creating workflow was cancelled by the user.'
    });
    push('/workflows');
  };

  var groupOptions = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(rbacGroups), [{
    value: undefined,
    label: 'None'
  }]);

  var Summary = function Summary(data) {
    return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_summary_content__WEBPACK_IMPORTED_MODULE_15__["default"], {
      values: data.formOptions.getState().values,
      groupOptions: groupOptions
    });
  };

  var setInitialGroups = function setInitialGroups(workflow) {
    var initialGroupList = workflow.value.group_refs.map(function (group, idx) {
      return _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()({}, "stage-".concat(idx + 1), group);
    });
    return initialGroupList.reduce(function (acc, curr) {
      return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, acc, curr);
    }, {});
  };

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
    title: initialValues ? 'Edit workflow' : 'Create workflow',
    isOpen: true,
    onClose: onCancel,
    isSmall: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: {
      padding: 8
    }
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_common_form_renderer__WEBPACK_IMPORTED_MODULE_12__["default"], {
    schema: Object(_forms_workflow_form_schema__WEBPACK_IMPORTED_MODULE_13__["createWorkflowSchema"])(!initialValues, groupOptions),
    schemaType: "default",
    onSubmit: onSubmit,
    onCancel: onCancel,
    initialValues: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, initialValues, initialGroups),
    formFieldsMapper: _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, _data_driven_forms_pf4_component_mapper__WEBPACK_IMPORTED_MODULE_11__["formFieldsMapper"], {
      summary: Summary
    }),
    formContainer: "modal",
    showFormControls: false,
    buttonsLabels: {
      submitLabel: 'Confirm'
    }
  })));
};

AddWorkflowModal.defaultProps = {
  rbacGroups: [],
  initialGroups: []
};
AddWorkflowModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired
  }).isRequired,
  addWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  addNotification: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  fetchWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  fetchWorkflows: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  initialValues: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,
  updateWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func.isRequired,
  workflowId: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,
  initialGroups: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.array,
  rbacGroups: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.arrayOf(prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    value: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]).isRequired,
    label: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string.isRequired
  })).isRequired
};

var mapStateToProps = function mapStateToProps(state, _ref3) {
  var id = _ref3.match.params.id;
  var selectedWorkflow = state.workflowReducer.selectedWorkflow;
  return {
    rbacGroups: state.groupReducer.groups,
    initialValues: id && selectedWorkflow,
    workflowId: id
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_7__["bindActionCreators"])({
    addNotification: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_10__["addNotification"],
    addWorkflow: _redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_14__["addWorkflow"],
    updateWorkflow: _redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_14__["updateWorkflow"],
    fetchWorkflows: _redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_14__["fetchWorkflows"],
    fetchWorkflow: _redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_14__["fetchWorkflow"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_8__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(AddWorkflowModal)));

/***/ }),

/***/ "./src/smart-components/workflow/expandable-content.js":
/*!*************************************************************!*\
  !*** ./src/smart-components/workflow/expandable-content.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");




var ExpandableContent = function ExpandableContent(_ref) {
  var description = _ref.description,
      groups = _ref.groups;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "data-table-detail heading",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "data-table-detail content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "data-table-detail heading",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].small
  }, "Groups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    className: "data-table-detail content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_2__["TextVariants"].h5
  }, groups.join(','))));
};

ExpandableContent.propTypes = {
  description: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  groups: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (ExpandableContent);

/***/ }),

/***/ "./src/smart-components/workflow/remove-workflow-modal.js":
/*!****************************************************************!*\
  !*** ./src/smart-components/workflow/remove-workflow-modal.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../redux/actions/workflow-actions */ "./src/redux/actions/workflow-actions.js");








var RemoveWorkflowModal = function RemoveWorkflowModal(_ref) {
  var _ref$history = _ref.history,
      goBack = _ref$history.goBack,
      push = _ref$history.push,
      removeWorkflow = _ref.removeWorkflow,
      fetchWorkflows = _ref.fetchWorkflows,
      fetchWorkflow = _ref.fetchWorkflow,
      workflowId = _ref.workflowId,
      workflow = _ref.workflow;
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (workflowId) {
      fetchWorkflow(workflowId);
    }
  }, [workflowId]);

  if (!workflow) {
    return null;
  }

  var onSubmit = function onSubmit() {
    return removeWorkflow(workflowId).then(function () {
      fetchWorkflows();
      push('/workflows');
    });
  };

  var onCancel = function onCancel() {
    return goBack();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Modal"], {
    isOpen: true,
    isSmall: true,
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Bullseye"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["Text"], {
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_5__["TextVariants"].h1
  }, "Removing Workflow:  ", workflow.name))));
};

RemoveWorkflowModal.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
  }).isRequired,
  removeWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchWorkflows: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  fetchWorkflow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  workflowId: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  workflow: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object
};

var mapStateToProps = function mapStateToProps(_ref2, _ref3) {
  var _ref2$workflowReducer = _ref2.workflowReducer,
      selectedWorkflow = _ref2$workflowReducer.selectedWorkflow,
      isLoading = _ref2$workflowReducer.isLoading;
  var id = _ref3.match.params.id;
  return {
    workflowId: id,
    workflow: selectedWorkflow,
    isLoading: isLoading
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return Object(redux__WEBPACK_IMPORTED_MODULE_4__["bindActionCreators"])({
    fetchWorkflow: _redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_6__["fetchWorkflow"],
    fetchWorkflows: _redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_6__["fetchWorkflows"],
    removeWorkflow: _redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_6__["removeWorkflow"]
  }, dispatch);
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, mapDispatchToProps)(RemoveWorkflowModal)));

/***/ }),

/***/ "./src/smart-components/workflow/summary_content.js":
/*!**********************************************************!*\
  !*** ./src/smart-components/workflow/summary_content.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
/* harmony import */ var _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");





var SummaryContent = function SummaryContent(values) {
  var _values$values = values.values,
      name = _values$values.name,
      description = _values$values.description,
      stages = _babel_runtime_helpers_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_0___default()(_values$values, ["name", "description"]);

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "data-table-detail heading",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].h5
  }, "Please review the workflow details")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "data-table-detail heading",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].h5
  }, "Name"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "data-table-detail content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].p
  }, name)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "data-table-detail heading",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].h5
  }, "Description"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "data-table-detail content",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].p
  }, description)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextContent"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    className: "data-table-detail heading",
    component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].h5
  }, "Approval Stages"), Object.keys(stages).map(function (key) {
    return key.startsWith('stage') && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["Text"], {
      key: key,
      className: "data-table-detail content",
      component: _patternfly_react_core__WEBPACK_IMPORTED_MODULE_3__["TextVariants"].p
    }, "".concat(key, " : ").concat(values.groupOptions.find(function (group) {
      return group.value === stages[key];
    }).label));
  })));
};

SummaryContent.propTypes = {
  name: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  description: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  groups: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.array
};
/* harmony default export */ __webpack_exports__["default"] = (SummaryContent);

/***/ }),

/***/ "./src/smart-components/workflow/workflow-table-helpers.js":
/*!*****************************************************************!*\
  !*** ./src/smart-components/workflow/workflow-table-helpers.js ***!
  \*****************************************************************/
/*! exports provided: createInitialRows */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createInitialRows", function() { return createInitialRows; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _expandable_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expandable-content */ "./src/smart-components/workflow/expandable-content.js");



var createInitialRows = function createInitialRows(data) {
  return data.filter(function (item) {
    return item.name !== 'Always approve';
  }).reduce(function (acc, _ref, key) {
    var id = _ref.id,
        name = _ref.name,
        description = _ref.description,
        group_names = _ref.group_names;
    return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(acc), [{
      id: id,
      isOpen: false,
      cells: [name, description, group_names.length]
    }, {
      parent: key * 2,
      cells: [{
        title: react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_expandable_content__WEBPACK_IMPORTED_MODULE_2__["default"], {
          description: description,
          groups: group_names
        })
      }]
    }]);
  }, []);
};

/***/ }),

/***/ "./src/smart-components/workflow/workflows.js":
/*!****************************************************!*\
  !*** ./src/smart-components/workflow/workflows.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/objectSpread */ "./node_modules/@babel/runtime/helpers/objectSpread.js");
/* harmony import */ var _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lodash/isEqual */ "./node_modules/lodash/isEqual.js");
/* harmony import */ var lodash_isEqual__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(lodash_isEqual__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! awesome-debounce-promise */ "./node_modules/awesome-debounce-promise/dist/index.es.js");
/* harmony import */ var _patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @patternfly/react-core */ "./node_modules/@patternfly/react-core/dist/esm/index.js");
/* harmony import */ var _patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @patternfly/react-table */ "./node_modules/@patternfly/react-table/dist/esm/index.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/Pagination */ "./node_modules/@red-hat-insights/insights-frontend-components/components/Pagination.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../redux/actions/workflow-actions */ "./src/redux/actions/workflow-actions.js");
/* harmony import */ var _add_workflow_modal__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-workflow-modal */ "./src/smart-components/workflow/add-workflow-modal.js");
/* harmony import */ var _remove_workflow_modal__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./remove-workflow-modal */ "./src/smart-components/workflow/remove-workflow-modal.js");
/* harmony import */ var _helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../helpers/shared/helpers */ "./src/helpers/shared/helpers.js");
/* harmony import */ var _redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../redux/actions/group-actions */ "./src/redux/actions/group-actions.js");
/* harmony import */ var _workflow_table_helpers__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./workflow-table-helpers */ "./src/smart-components/workflow/workflow-table-helpers.js");
/* harmony import */ var _presentational_components_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../presentational-components/shared/filter-toolbar-item */ "./src/presentational-components/shared/filter-toolbar-item.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @red-hat-insights/insights-frontend-components/components/TableToolbar */ "./node_modules/@red-hat-insights/insights-frontend-components/components/TableToolbar.js");
/* harmony import */ var _red_hat_insights_insights_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_red_hat_insights_insights_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_24__);

























var columns = [{
  title: 'Name',
  cellFormatters: [_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["expandable"]]
}, 'Description', 'Groups'];

var Workflows =
/*#__PURE__*/
function (_Component) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Workflows, _Component);

  function Workflows() {
    var _getPrototypeOf2;

    var _this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Workflows);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Workflows)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "state", {
      filteredItems: [],
      isOpen: false,
      filterValue: '',
      rows: []
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "fetchData", function () {
      _this.props.fetchRbacGroups();

      _this.props.fetchWorkflows().then(function () {
        return _this.setState({
          rows: Object(_workflow_table_helpers__WEBPACK_IMPORTED_MODULE_22__["createInitialRows"])(_this.props.workflows)
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleOnPerPageSelect", function (limit) {
      return _this.props.fetchWorkflows({
        offset: _this.props.pagination.offset,
        limit: limit
      }).then(function () {
        return _this.setState({
          rows: Object(_workflow_table_helpers__WEBPACK_IMPORTED_MODULE_22__["createInitialRows"])(_this.props.workflows)
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "handleSetPage", function (number, debounce) {
      var options = {
        offset: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_20__["getNewPage"])(number, _this.props.pagination.limit),
        limit: _this.props.pagination.limit
      };

      var request = function request() {
        return _this.props.fetchWorkflows(options);
      };

      if (debounce) {
        return Object(awesome_debounce_promise__WEBPACK_IMPORTED_MODULE_13__["default"])(request, 250)();
      }

      return request().then(function () {
        return _this.setState({
          rows: Object(_workflow_table_helpers__WEBPACK_IMPORTED_MODULE_22__["createInitialRows"])(_this.props.workflows)
        });
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "setOpen", function (data, id) {
      return data.map(function (row) {
        if (row.id === id) {
          return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, row, {
            isOpen: !row.isOpen
          });
        }

        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, row);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "setSelected", function (data, id) {
      return data.map(function (row) {
        if (row.id === id) {
          return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, row, {
            selected: !row.selected
          });
        }

        return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, row);
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onFilterChange", function (filterValue) {
      return _this.setState({
        filterValue: filterValue
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "onCollapse", function (_event, _index, _isOpen, _ref) {
      var id = _ref.id;
      return _this.setState(function (_ref2) {
        var rows = _ref2.rows;
        return {
          rows: _this.setOpen(rows, id)
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "selectRow", function (_event, selected, index) {
      var _ref3 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
          id = _ref3.id;

      return index === -1 ? _this.setState(function (_ref4) {
        var rows = _ref4.rows;
        return {
          rows: rows.map(function (row) {
            return _babel_runtime_helpers_objectSpread__WEBPACK_IMPORTED_MODULE_0___default()({}, row, {
              selected: selected
            });
          })
        };
      }) : _this.setState(function (_ref5) {
        var rows = _ref5.rows;
        return {
          rows: _this.setSelected(rows, id)
        };
      });
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_7___default()(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this), "actionResolver", function (workflowData, _ref6) {
      var rowIndex = _ref6.rowIndex;

      if (rowIndex === 1) {
        return null;
      }

      return [{
        title: 'Edit',
        onClick: function onClick(event, rowId, workflow) {
          return _this.props.history.push("/workflows/edit/".concat(workflow.id));
        }
      }, {
        title: 'Delete',
        style: {
          color: 'var(--pf-global--danger-color--100)'
        },
        onClick: function onClick(event, rowId, workflow) {
          return _this.props.history.push("/workflows/remove/".concat(workflow.id));
        }
      }];
    });

    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Workflows, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.fetchData();
      Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_20__["scrollToTop"])();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!lodash_isEqual__WEBPACK_IMPORTED_MODULE_12___default()(this.props.workflows, prevProps.workflows)) {
        this.setState({
          rows: Object(_workflow_table_helpers__WEBPACK_IMPORTED_MODULE_22__["createInitialRows"])(this.props.workflows)
        });
      }
    }
  }, {
    key: "renderToolbar",
    value: function renderToolbar() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components_components_TableToolbar__WEBPACK_IMPORTED_MODULE_24__["TableToolbar"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Level"], {
        style: {
          flex: 1
        }
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_presentational_components_shared_filter_toolbar_item__WEBPACK_IMPORTED_MODULE_23__["default"], {
        onFilterChange: this.onFilterChange,
        searchValue: this.state.filterValue,
        placeholder: "Find a Workflow"
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Link"], {
        to: "/workflows/add-workflow"
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Button"], {
        variant: "primary",
        "aria-label": "Create Workflow"
      }, "Create Workflow")))))), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["LevelItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["Toolbar"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["ToolbarGroup"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_core__WEBPACK_IMPORTED_MODULE_14__["ToolbarItem"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_red_hat_insights_insights_frontend_components_components_Pagination__WEBPACK_IMPORTED_MODULE_16__["Pagination"], {
        itemsPerPage: this.props.pagination.limit || 50,
        numberOfItems: this.props.pagination.count || 50,
        onPerPageSelect: this.handleOnPerPageSelect,
        page: Object(_helpers_shared_helpers__WEBPACK_IMPORTED_MODULE_20__["getCurrentPage"])(this.props.pagination.limit, this.props.pagination.offset),
        onSetPage: this.handleSetPage,
        direction: "down"
      })))))));
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_8__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/workflows/add-workflow",
        component: _add_workflow_modal__WEBPACK_IMPORTED_MODULE_18__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/workflows/edit/:id",
        component: _add_workflow_modal__WEBPACK_IMPORTED_MODULE_18__["default"]
      }), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__["Route"], {
        exact: true,
        path: "/workflows/remove/:id",
        component: _remove_workflow_modal__WEBPACK_IMPORTED_MODULE_19__["default"]
      }), this.renderToolbar(), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["Table"], {
        "aria-label": "Approval Workflows table",
        onCollapse: this.onCollapse,
        rows: this.state.rows,
        cells: columns,
        onSelect: this.selectRow,
        actionResolver: this.actionResolver
      }, react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["TableHeader"], null), react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement(_patternfly_react_table__WEBPACK_IMPORTED_MODULE_15__["TableBody"], null)));
    }
  }]);

  return Workflows;
}(react__WEBPACK_IMPORTED_MODULE_8__["Component"]);

var mapStateToProps = function mapStateToProps(_ref7) {
  var _ref7$workflowReducer = _ref7.workflowReducer,
      workflows = _ref7$workflowReducer.workflows,
      isLoading = _ref7$workflowReducer.isLoading,
      _ref7$groupReducer = _ref7.groupReducer,
      groups = _ref7$groupReducer.groups,
      filterValue = _ref7$groupReducer.filterValue;
  return {
    workflows: workflows.data,
    pagination: workflows.meta,
    rbacGroups: groups,
    isLoading: isLoading,
    searchFilter: filterValue
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    fetchWorkflows: function fetchWorkflows(apiProps) {
      return dispatch(Object(_redux_actions_workflow_actions__WEBPACK_IMPORTED_MODULE_17__["fetchWorkflows"])(apiProps));
    },
    fetchRbacGroups: function fetchRbacGroups(apiProps) {
      return dispatch(Object(_redux_actions_group_actions__WEBPACK_IMPORTED_MODULE_21__["fetchRbacGroups"])(apiProps));
    }
  };
};

Workflows.propTypes = {
  history: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    goBack: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
    push: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired
  }).isRequired,
  filteredItems: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  workflows: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  platforms: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.array,
  isLoading: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.bool,
  searchFilter: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.string,
  fetchWorkflows: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  fetchRbacGroups: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.func.isRequired,
  pagination: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.shape({
    limit: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
    offset: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired,
    count: prop_types__WEBPACK_IMPORTED_MODULE_10___default.a.number.isRequired
  })
};
Workflows.defaultProps = {
  workflows: [],
  pagination: {}
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_9__["connect"])(mapStateToProps, mapDispatchToProps)(Workflows));

/***/ }),

/***/ "./src/utilities/constants.js":
/*!************************************!*\
  !*** ./src/utilities/constants.js ***!
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

/***/ "./src/utilities/store.js":
/*!********************************!*\
  !*** ./src/utilities/store.js ***!
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
/* harmony import */ var _redux_reducers_request_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../redux/reducers/request-reducer */ "./src/redux/reducers/request-reducer.js");
/* harmony import */ var _redux_reducers_workflow_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../redux/reducers/workflow-reducer */ "./src/redux/reducers/workflow-reducer.js");
/* harmony import */ var _redux_reducers_group_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../redux/reducers/group-reducer */ "./src/redux/reducers/group-reducer.js");








var registry = new _red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["ReducerRegistry"]({}, [redux_thunk__WEBPACK_IMPORTED_MODULE_4__["default"], Object(redux_promise_middleware__WEBPACK_IMPORTED_MODULE_0__["default"])(), Object(_red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__["notificationsMiddleware"])({
  errorTitleKey: ['message'],
  errorDescriptionKey: ['errors', 'stack']
}), redux_logger__WEBPACK_IMPORTED_MODULE_3___default.a]);
registry.register({
  requestReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_request_reducer__WEBPACK_IMPORTED_MODULE_5__["default"], _redux_reducers_request_reducer__WEBPACK_IMPORTED_MODULE_5__["requestInitialState"]),
  workflowReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_workflow_reducer__WEBPACK_IMPORTED_MODULE_6__["default"], _redux_reducers_workflow_reducer__WEBPACK_IMPORTED_MODULE_6__["workflowsInitialState"]),
  groupReducer: Object(_red_hat_insights_insights_frontend_components__WEBPACK_IMPORTED_MODULE_1__["applyReducerHash"])(_redux_reducers_group_reducer__WEBPACK_IMPORTED_MODULE_7__["default"], _redux_reducers_group_reducer__WEBPACK_IMPORTED_MODULE_7__["groupsInitialState"]),
  notifications: _red_hat_insights_insights_frontend_components_components_Notifications__WEBPACK_IMPORTED_MODULE_2__["notifications"]
});
/* harmony default export */ __webpack_exports__["default"] = (registry.getStore());

/***/ })

/******/ });
//# sourceMappingURL=../sourcemaps/App.js.map