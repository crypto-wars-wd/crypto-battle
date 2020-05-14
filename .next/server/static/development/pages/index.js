module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AuthPage/AuthPage.tsx":
/*!******************************************!*\
  !*** ./components/AuthPage/AuthPage.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styledComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styledComponent */ "./components/AuthPage/styledComponent.ts");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-google-login */ "react-google-login");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-facebook-login */ "react-facebook-login");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/andrey/programming/projects/TemplateNext/components/AuthPage/AuthPage.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];






const responseGoogle = response => {
  console.log(response);
};

const responseFacebook = response => {
  console.log(response);
};

const AuthPage = props => {
  return __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["AuthMain"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["HeaderStyled"], {
    block: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_2___default.a, {
    clientId: "411912187634-09e2pudtp337atlucsnlfaeb13ie4ntj.apps.googleusercontent.com",
    buttonText: "",
    onSuccess: responseGoogle,
    onFailure: responseGoogle,
    cookiePolicy: 'single_host_origin',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 17
    }
  }), __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_3___default.a, {
    appId: "263020944839635",
    autoLoad: false,
    textButton: "",
    fields: "name,email,picture",
    onClick: responseFacebook,
    callback: responseFacebook,
    icon: "fa-facebook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 17
    }
  }), __jsx("button", {
    onClick: props.sayHello,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  })), __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["AuthContentWrapper"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }, __jsx(_styledComponent__WEBPACK_IMPORTED_MODULE_1__["AuthContent"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })));
};

const mapDispatchToProps = dispatch => ({
  sayHello: () => dispatch({
    type: 'HELLO'
  })
});

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_4__["connect"])(null, mapDispatchToProps)(AuthPage));

/***/ }),

/***/ "./components/AuthPage/styledComponent.ts":
/*!************************************************!*\
  !*** ./components/AuthPage/styledComponent.ts ***!
  \************************************************/
/*! exports provided: AuthMain, AuthContentWrapper, AuthContent, HeaderStyled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthMain", function() { return AuthMain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContentWrapper", function() { return AuthContentWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthContent", function() { return AuthContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderStyled", function() { return HeaderStyled; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);


const AuthMain = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 100%;
    height: 100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`;
const AuthContentWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 100%;
    height: 100%;
    display:flex;
    justify-content: center;
    align-items: center;
    background: blue;
`;
const AuthContent = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div`
    width: 80%;
    height: 100%;
    background: white;
`;
const HeaderStyled = styled_components__WEBPACK_IMPORTED_MODULE_0___default()(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Header"])({
  margin: '0!important',
  display: 'flex',
  justifyContent: 'flex-end'
});

/***/ }),

/***/ "./pages/auth.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/AuthPage/AuthPage */ "./components/AuthPage/AuthPage.tsx");
var _jsxFileName = "/home/andrey/programming/projects/TemplateNext/pages/home.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
// import * as React from 'react';
// import Router from 'next/router'
//
// const Home: React.FC = () => <h1 onClick={() => Router.push('/')}>Home</h1>;
//
// export default Home;



const Auth = () => __jsx(_components_AuthPage_AuthPage__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 31
  }
});

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth */ "./pages/auth.tsx");
/* harmony import */ var _redux_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/configureStore */ "./redux/configureStore.ts");
var _jsxFileName = "/home/andrey/programming/projects/TemplateNext/pages/index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0__["createElement"];
// import * as React from 'react';
// import ListComponent from './List';
// import styled from 'styled-components';
//
// const Container = styled.div`
//   width: 100%;
//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `;
//
// const App: React.FC = () => (
//     <Container>
//         <ListComponent />
//     </Container>
// );
//
// export default App;




const store = Object(_redux_configureStore__WEBPACK_IMPORTED_MODULE_3__["default"])();

const App = () => __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
  store: store,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 29
  }
}, __jsx(_auth__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29,
    columnNumber: 53
  }
}));

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./redux/configureStore.ts":
/*!*********************************!*\
  !*** ./redux/configureStore.ts ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-saga */ "redux-saga");
/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _redux_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/reducers/rootReducer */ "./redux/reducers/rootReducer.ts");
/* harmony import */ var _saga_rootSaga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./saga/rootSaga */ "./redux/saga/rootSaga.ts");




const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_1___default()();

const configureStore = () => {
  const store = Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(_redux_reducers_rootReducer__WEBPACK_IMPORTED_MODULE_2__["default"], Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])(sagaMiddleware));
  sagaMiddleware.run(_saga_rootSaga__WEBPACK_IMPORTED_MODULE_3__["default"]);
  return store;
};

/* harmony default export */ __webpack_exports__["default"] = (configureStore);

/***/ }),

/***/ "./redux/reducers/rootReducer.ts":
/*!***************************************!*\
  !*** ./redux/reducers/rootReducer.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _userData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./userData */ "./redux/reducers/userData.ts");


const rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_0__["combineReducers"])({
  lyrics: _userData__WEBPACK_IMPORTED_MODULE_1__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (rootReducer);

/***/ }),

/***/ "./redux/reducers/userData.ts":
/*!************************************!*\
  !*** ./redux/reducers/userData.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return userDataReducer; });
// import * as actions from "../actionTypes/lyricsActionTypes";
const initialState = {
  userData: {
    name: ''
  }
};
function userDataReducer(state = initialState, action) {
  switch (action.type) {
    case 'Hello':
      return {
        userData: {
          name: 'Andrey'
        }
      };

    default:
      return state;
  }
}

/***/ }),

/***/ "./redux/saga/dataUser/watchDataUser.ts":
/*!**********************************************!*\
  !*** ./redux/saga/dataUser/watchDataUser.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return watchDataUser; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _workerDataUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workerDataUser */ "./redux/saga/dataUser/workerDataUser.ts");


function* watchDataUser() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["takeEvery"])('HELLO', _workerDataUser__WEBPACK_IMPORTED_MODULE_1__["sayHello"]);
}

/***/ }),

/***/ "./redux/saga/dataUser/workerDataUser.ts":
/*!***********************************************!*\
  !*** ./redux/saga/dataUser/workerDataUser.ts ***!
  \***********************************************/
/*! exports provided: sayHello */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sayHello", function() { return sayHello; });
function* sayHello() {
  yield console.log('HELLO');
}

/***/ }),

/***/ "./redux/saga/rootSaga.ts":
/*!********************************!*\
  !*** ./redux/saga/rootSaga.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return rootSaga; });
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ "redux-saga/effects");
/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dataUser_watchDataUser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataUser/watchDataUser */ "./redux/saga/dataUser/watchDataUser.ts");


const sagas = [_dataUser_watchDataUser__WEBPACK_IMPORTED_MODULE_1__["default"]];
function* rootSaga() {
  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["all"])(sagas.map(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__["fork"]));
}

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/andrey/programming/projects/TemplateNext/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-facebook-login":
/*!***************************************!*\
  !*** external "react-facebook-login" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-facebook-login");

/***/ }),

/***/ "react-google-login":
/*!*************************************!*\
  !*** external "react-google-login" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-google-login");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map