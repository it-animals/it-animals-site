"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 392:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
;// CONCATENATED MODULE: ./src/ui/styles/_reset.ts

const _reset = (0,external_styled_components_.css)(["html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,menu,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,main,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section{display:block;}*[hidden]{display:none;}body{line-height:1;}menu,ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:\"\";content:none;}table{border-collapse:collapse;border-spacing:0;}"]);
// EXTERNAL MODULE: ./src/ui/styles/_variables.ts
var _variables = __webpack_require__(8027);
;// CONCATENATED MODULE: ./src/ui/styles/_fonts.ts

const _fonts = (0,external_styled_components_.css)(["@font-face{font-family:\"AnotherCastle3\";font-weight:normal;font-style:normal;src:url(\"/fonts/Another-Castle3.woff2\");}@font-face{font-family:\"Inter\";font-weight:normal;font-style:normal;src:url(\"/fonts/Inter-Regular.woff2\");}@font-face{font-family:\"Inter\";font-weight:bold;font-style:normal;src:url(\"/fonts/Inter-Bold.woff2\");}"]);
// EXTERNAL MODULE: ./src/ui/styles/_mixin.ts
var _mixin = __webpack_require__(7419);
;// CONCATENATED MODULE: ./src/ui/styles/elements/_headings.ts



const _headings = (0,external_styled_components_.css)(["h1,h2,h3,h4,h5,h6{font-family:", ";margin-bottom:1.2rem;}h2{font-size:70px;line-height:80px;", "}h5{font-size:32px;}"], _variables/* default.secondaryFont */.Z.secondaryFont, (0,_mixin/* mxm */.we)(600, (0,external_styled_components_.css)(["font-size:55px;line-height:52px;"])));
;// CONCATENATED MODULE: ./src/ui/styles/_global.ts





const includes = (0,external_styled_components_.css)(["", " ", " ", ""], _reset, _fonts, _headings);
const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["body{font-size:16px;line-height:24px;position:relative;}", " *{box-sizing:border-box;}html{background-color:", ";}body{font-family:", ";overflow-x:hidden;}p{margin-bottom:1em;font-size:18px;line-height:26px;}"], includes, _variables/* default.backgroundColor */.Z.backgroundColor, _variables/* default.primaryFont */.Z.primaryFont);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/jsx_runtime_.jsx(jsx_runtime_.Fragment, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
      theme: {},
      children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {}), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))]
    })
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 7419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "we": () => (/* binding */ mxm)
/* harmony export */ });
/* unused harmony exports hexToRgb, toHex */
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

class AnyIfEmpty {}

const mxm = (width, rules) => (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["@media screen and (max-width:", "px){", "}"], width, rules);
const toHex = hex => css(["", ""], hexToRgb(hex));

/***/ }),

/***/ 8027:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  primaryColor: "#27A8E0",
  accentColor: "#ED1066",
  secondColor: "#C3B6B6",
  activeColor: "black",
  textColorSecondary: "black",
  textColorPrimary: "white",
  backgroundAccent: "#AAE0F5",
  backgroundColor: "white",
  primaryFont: "Inter",
  secondaryFont: "AnotherCastle3"
});

/***/ }),

/***/ 5282:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 9914:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(392));
module.exports = __webpack_exports__;

})();