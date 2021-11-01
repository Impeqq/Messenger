"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkfrontend"] = self["webpackChunkfrontend"] || []).push([["src_pages_Auth_index_tsx"],{

/***/ "./src/assets/svg/google-logo.svg":
/*!****************************************!*\
  !*** ./src/assets/svg/google-logo.svg ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\nvar _path, _path2, _path3, _path4;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nfunction SvgGoogleLogo(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", _extends({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    width: 24,\n    height: 24\n  }, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    fill: \"#4285F4\",\n    d: \"M23.745 12.27c0-.79-.07-1.54-.19-2.27h-11.3v4.51h6.47c-.29 1.48-1.14 2.73-2.4 3.58v3h3.86c2.26-2.09 3.56-5.17 3.56-8.82z\"\n  })), _path2 || (_path2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    fill: \"#34A853\",\n    d: \"M12.255 24c3.24 0 5.95-1.08 7.93-2.91l-3.86-3c-1.08.72-2.45 1.16-4.07 1.16-3.13 0-5.78-2.11-6.73-4.96h-3.98v3.09C3.515 21.3 7.565 24 12.255 24z\"\n  })), _path3 || (_path3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    fill: \"#FBBC05\",\n    d: \"M5.525 14.29c-.25-.72-.38-1.49-.38-2.29s.14-1.57.38-2.29V6.62h-3.98a11.86 11.86 0 000 10.76l3.98-3.09z\"\n  })), _path4 || (_path4 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    fill: \"#EA4335\",\n    d: \"M12.255 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C18.205 1.19 15.495 0 12.255 0c-4.69 0-8.74 2.7-10.71 6.62l3.98 3.09c.95-2.85 3.6-4.96 6.73-4.96z\"\n  })));\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SvgGoogleLogo);\n\n//# sourceURL=webpack://frontend/./src/assets/svg/google-logo.svg?");

/***/ }),

/***/ "./src/features/models.ts":
/*!********************************!*\
  !*** ./src/features/models.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loginModel\": function() { return /* binding */ loginModel; },\n/* harmony export */   \"registerModel\": function() { return /* binding */ registerModel; }\n/* harmony export */ });\nvar loginModel = {\n  email: \"email\",\n  password: \"password\"\n};\nvar registerModel = {\n  email: \"email\",\n  password: \"password\",\n  firstName: \"firstName\",\n  lastName: \"lastName\"\n};\n\n//# sourceURL=webpack://frontend/./src/features/models.ts?");

/***/ }),

/***/ "./src/pages/Auth/index.tsx":
/*!**********************************!*\
  !*** ./src/pages/Auth/index.tsx ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ui */ \"./src/ui/index.ts\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.scss */ \"./src/pages/Auth/styles.scss\");\n/* harmony import */ var _login_block_login_block__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-block/login-block */ \"./src/pages/Auth/login-block/login-block.tsx\");\n/* harmony import */ var _register_block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-block */ \"./src/pages/Auth/register-block/index.ts\");\n/* harmony import */ var _mobile_images_mobile_images__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mobile-images/mobile-images */ \"./src/pages/Auth/mobile-images/mobile-images.tsx\");\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\n\n\nvar Auth = function Auth() {\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui__WEBPACK_IMPORTED_MODULE_1__.Guest, __assign({\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_2__.default.main\n  }, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_mobile_images_mobile_images__WEBPACK_IMPORTED_MODULE_5__.default, {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({\n      className: _styles_scss__WEBPACK_IMPORTED_MODULE_2__.default.authBlock\n    }, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_login_block_login_block__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_register_block__WEBPACK_IMPORTED_MODULE_4__.RegisterBlock, {}, void 0)]\n    }), void 0)]\n  }), void 0);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\n\n//# sourceURL=webpack://frontend/./src/pages/Auth/index.tsx?");

/***/ }),

/***/ "./src/pages/Auth/login-block/login-block.tsx":
/*!****************************************************!*\
  !*** ./src/pages/Auth/login-block/login-block.tsx ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ LoginBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components */ \"./src/components/index.ts\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui */ \"./src/ui/index.ts\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/pages/Auth/login-block/styles.scss\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router-dom/esm/react-router-dom.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/react/hooks/useMutation.js\");\n/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @schemas */ \"./src/schemas.ts\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _features_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/models */ \"./src/features/models.ts\");\n/* harmony import */ var _features_constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @features/constants */ \"./src/features/constants/index.ts\");\n/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @pages/routes */ \"./src/pages/routes/index.ts\");\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\n\n\n\n\n\n\nfunction LoginBlock() {\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();\n\n  var _a = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_10__.useMutation)(_schemas__WEBPACK_IMPORTED_MODULE_4__.SEND_LOGIN, {\n    notifyOnNetworkStatusChange: true,\n    fetchPolicy: \"network-only\",\n    onCompleted: function onCompleted(_a) {\n      var signIn = _a.signIn;\n      localStorage.setItem(_features_constants__WEBPACK_IMPORTED_MODULE_7__.AUTH_TOKEN, signIn);\n      history.push(_pages_routes__WEBPACK_IMPORTED_MODULE_8__.routePath.main.path);\n    }\n  }),\n      sendLogin = _a[0],\n      _b = _a[1],\n      loading = _b.loading,\n      error = _b.error;\n\n  var handleSubmit = function handleSubmit(data) {\n    sendLogin({\n      variables: {\n        email: data === null || data === void 0 ? void 0 : data[_features_models__WEBPACK_IMPORTED_MODULE_6__.loginModel.email],\n        password: data === null || data === void 0 ? void 0 : data[_features_models__WEBPACK_IMPORTED_MODULE_6__.loginModel.password]\n      }\n    });\n  };\n\n  var formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({\n    mode: \"onBlur\",\n    reValidateMode: \"onBlur\"\n  });\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.BaseForm, __assign({\n    formMethods: formMethods,\n    onSubmit: handleSubmit,\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3__.default.loginBlock\n  }, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {\n      placeholder: \"Email\",\n      name: _features_models__WEBPACK_IMPORTED_MODULE_6__.loginModel.email\n    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {\n      placeholder: \"Password\",\n      name: _features_models__WEBPACK_IMPORTED_MODULE_6__.loginModel.password,\n      type: \"password\"\n    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {\n      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3__.default.errorMessage,\n      message: error === null || error === void 0 ? void 0 : error.message\n    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({\n      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3__.default.buttonGroup\n    }, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        text: \"Sign In\",\n        type: _ui__WEBPACK_IMPORTED_MODULE_2__.ButtonType.SUBMIT,\n        loading: loading\n      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(react_router_dom__WEBPACK_IMPORTED_MODULE_11__.Link, __assign({\n        to: \"passwordnepomny\"\n      }, {\n        children: \"Forgot your password?\"\n      }), void 0)]\n    }), void 0)]\n  }), void 0);\n}\n\n//# sourceURL=webpack://frontend/./src/pages/Auth/login-block/login-block.tsx?");

/***/ }),

/***/ "./src/pages/Auth/mobile-images/mobile-images.tsx":
/*!********************************************************!*\
  !*** ./src/pages/Auth/mobile-images/mobile-images.tsx ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ MobileImages; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _assets_images_example1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @assets/images/example1.png */ \"./src/assets/images/example1.png\");\n/* harmony import */ var _assets_images_example2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @assets/images/example2.png */ \"./src/assets/images/example2.png\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles.scss */ \"./src/pages/Auth/mobile-images/styles.scss\");\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\n\n\n\n\nfunction MobileImages() {\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_3__.default.images\n  }, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", __assign({\n      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3__.default.title\n    }, {\n      children: \"Messenger for the mobile devices\"\n    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", __assign({\n      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3__.default.description\n    }, {\n      children: \"Always keep in touch with your friends\"\n    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(\"div\", __assign({\n      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3__.default.imagesGroup\n    }, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n        src: _assets_images_example1_png__WEBPACK_IMPORTED_MODULE_1__.default,\n        alt: \"Our application\"\n      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"img\", {\n        src: _assets_images_example2_png__WEBPACK_IMPORTED_MODULE_2__.default,\n        alt: \"The best!\"\n      }, void 0)]\n    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", __assign({\n      className: _styles_scss__WEBPACK_IMPORTED_MODULE_3__.default.mobileInfo\n    }, {\n      children: \"Coming soon! :)\"\n    }), void 0)]\n  }), void 0);\n}\n\n//# sourceURL=webpack://frontend/./src/pages/Auth/mobile-images/mobile-images.tsx?");

/***/ }),

/***/ "./src/pages/Auth/register-block/index.ts":
/*!************************************************!*\
  !*** ./src/pages/Auth/register-block/index.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegisterBlock\": function() { return /* reexport safe */ _register_block__WEBPACK_IMPORTED_MODULE_0__.RegisterBlock; }\n/* harmony export */ });\n/* harmony import */ var _register_block__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-block */ \"./src/pages/Auth/register-block/register-block.tsx\");\n\n\n//# sourceURL=webpack://frontend/./src/pages/Auth/register-block/index.ts?");

/***/ }),

/***/ "./src/pages/Auth/register-block/register-block.tsx":
/*!**********************************************************!*\
  !*** ./src/pages/Auth/register-block/register-block.tsx ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RegisterBlock\": function() { return /* binding */ RegisterBlock; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ \"./node_modules/react/jsx-runtime.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @components */ \"./src/components/index.ts\");\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ui */ \"./src/ui/index.ts\");\n/* harmony import */ var _assets_svg_google_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @assets/svg/google-logo.svg */ \"./src/assets/svg/google-logo.svg\");\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./styles.scss */ \"./src/pages/Auth/register-block/styles.scss\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-hook-form */ \"./node_modules/react-hook-form/dist/index.esm.js\");\n/* harmony import */ var _features_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @features/models */ \"./src/features/models.ts\");\n/* harmony import */ var _schemas__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @schemas */ \"./src/schemas.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/react/hooks/useMutation.js\");\n/* harmony import */ var _features_constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @features/constants */ \"./src/features/constants/index.ts\");\n/* harmony import */ var _pages_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @pages/routes */ \"./src/pages/routes/index.ts\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ \"./node_modules/react-router/esm/react-router.js\");\nvar __assign = undefined && undefined.__assign || function () {\n  __assign = Object.assign || function (t) {\n    for (var s, i = 1, n = arguments.length; i < n; i++) {\n      s = arguments[i];\n\n      for (var p in s) {\n        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];\n      }\n    }\n\n    return t;\n  };\n\n  return __assign.apply(this, arguments);\n};\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar RegisterBlock = function RegisterBlock() {\n  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useHistory)();\n\n  var _a = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_11__.useMutation)(_schemas__WEBPACK_IMPORTED_MODULE_7__.SEND_REGISTER, {\n    notifyOnNetworkStatusChange: true,\n    fetchPolicy: \"network-only\",\n    onCompleted: function onCompleted(_a) {\n      var signUp = _a.signUp;\n      localStorage.setItem(_features_constants__WEBPACK_IMPORTED_MODULE_8__.AUTH_TOKEN, signUp);\n      history.push(_pages_routes__WEBPACK_IMPORTED_MODULE_9__.routePath.main.path);\n    }\n  }),\n      sendRegister = _a[0],\n      _b = _a[1],\n      loading = _b.loading,\n      error = _b.error;\n\n  var formMethods = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_5__.useForm)({\n    mode: \"onBlur\",\n    reValidateMode: \"onBlur\"\n  });\n\n  var handleSubmit = function handleSubmit(data) {\n    sendRegister({\n      variables: {\n        email: data === null || data === void 0 ? void 0 : data[_features_models__WEBPACK_IMPORTED_MODULE_6__.registerModel.email],\n        password: data === null || data === void 0 ? void 0 : data[_features_models__WEBPACK_IMPORTED_MODULE_6__.registerModel.password],\n        firstName: data === null || data === void 0 ? void 0 : data[_features_models__WEBPACK_IMPORTED_MODULE_6__.registerModel.firstName],\n        lastName: data === null || data === void 0 ? void 0 : data[_features_models__WEBPACK_IMPORTED_MODULE_6__.registerModel.lastName]\n      }\n    });\n  };\n\n  var handleRegisterGoogle = function handleRegisterGoogle() {\n    console.log(\"google\");\n  };\n\n  return (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__.BaseForm, __assign({\n    formMethods: formMethods,\n    onSubmit: handleSubmit,\n    className: _styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.registerBlock\n  }, {\n    children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", __assign({\n      className: _styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.title\n    }, {\n      children: \"New to the messenger?\"\n    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(\"span\", __assign({\n      className: _styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.description\n    }, {\n      children: \"Instant registration\"\n    }), void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {\n      placeholder: \"First name\",\n      name: _features_models__WEBPACK_IMPORTED_MODULE_6__.registerModel.firstName\n    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {\n      placeholder: \"Last name\",\n      name: _features_models__WEBPACK_IMPORTED_MODULE_6__.registerModel.lastName\n    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {\n      placeholder: \"Email\",\n      name: _features_models__WEBPACK_IMPORTED_MODULE_6__.registerModel.email\n    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.Input, {\n      placeholder: \"Password\",\n      name: _features_models__WEBPACK_IMPORTED_MODULE_6__.registerModel.password,\n      type: \"password\"\n    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.ErrorMessage, {\n      className: _styles_scss__WEBPACK_IMPORTED_MODULE_4__.default.errorMessage,\n      message: error === null || error === void 0 ? void 0 : error.message\n    }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_ui__WEBPACK_IMPORTED_MODULE_2__.InputGroup, {\n      children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        text: \"Sign Up\",\n        type: _ui__WEBPACK_IMPORTED_MODULE_2__.ButtonType.SUBMIT,\n        loading: loading\n      }, void 0), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_ui__WEBPACK_IMPORTED_MODULE_2__.Button, {\n        text: \"Sign Up\",\n        iconDirection: _ui__WEBPACK_IMPORTED_MODULE_2__.IconDirection.RIGHT,\n        icon: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_assets_svg_google_logo_svg__WEBPACK_IMPORTED_MODULE_3__.default, {}, void 0),\n        style: _ui__WEBPACK_IMPORTED_MODULE_2__.ButtonStyle.OUTLINE,\n        onClick: handleRegisterGoogle\n      }, void 0)]\n    }, void 0)]\n  }), void 0);\n};\n\n//# sourceURL=webpack://frontend/./src/pages/Auth/register-block/register-block.tsx?");

/***/ }),

/***/ "./src/assets/images/example1.png":
/*!****************************************!*\
  !*** ./src/assets/images/example1.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/images/example1.png\");\n\n//# sourceURL=webpack://frontend/./src/assets/images/example1.png?");

/***/ }),

/***/ "./src/assets/images/example2.png":
/*!****************************************!*\
  !*** ./src/assets/images/example2.png ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"src/assets/images/example2.png\");\n\n//# sourceURL=webpack://frontend/./src/assets/images/example2.png?");

/***/ }),

/***/ "./src/pages/Auth/login-block/styles.scss":
/*!************************************************!*\
  !*** ./src/pages/Auth/login-block/styles.scss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"login-block\":\"styles__login-block__aVIeH\",\"loginBlock\":\"styles__login-block__aVIeH\",\"error-message\":\"styles__error-message__Jnal7\",\"errorMessage\":\"styles__error-message__Jnal7\",\"button-group\":\"styles__button-group__BWvhj\",\"buttonGroup\":\"styles__button-group__BWvhj\"});\n\n//# sourceURL=webpack://frontend/./src/pages/Auth/login-block/styles.scss?");

/***/ }),

/***/ "./src/pages/Auth/mobile-images/styles.scss":
/*!**************************************************!*\
  !*** ./src/pages/Auth/mobile-images/styles.scss ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"images\":\"styles__images___kY0s\",\"title\":\"styles__title___DOtI\",\"description\":\"styles__description__VPkUW\",\"images-group\":\"styles__images-group__TqskX\",\"imagesGroup\":\"styles__images-group__TqskX\",\"mobile-info\":\"styles__mobile-info__Obe_8\",\"mobileInfo\":\"styles__mobile-info__Obe_8\"});\n\n//# sourceURL=webpack://frontend/./src/pages/Auth/mobile-images/styles.scss?");

/***/ }),

/***/ "./src/pages/Auth/register-block/styles.scss":
/*!***************************************************!*\
  !*** ./src/pages/Auth/register-block/styles.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"register-block\":\"styles__register-block__Gxr1B\",\"registerBlock\":\"styles__register-block__Gxr1B\",\"title\":\"styles__title__l997p\",\"description\":\"styles__description__GH_qF\",\"error-message\":\"styles__error-message__Ca_qY\",\"errorMessage\":\"styles__error-message__Ca_qY\"});\n\n//# sourceURL=webpack://frontend/./src/pages/Auth/register-block/styles.scss?");

/***/ }),

/***/ "./src/pages/Auth/styles.scss":
/*!************************************!*\
  !*** ./src/pages/Auth/styles.scss ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\"main\":\"styles__main__pwin5\",\"auth-block\":\"styles__auth-block__ARq7O\",\"authBlock\":\"styles__auth-block__ARq7O\"});\n\n//# sourceURL=webpack://frontend/./src/pages/Auth/styles.scss?");

/***/ })

}]);