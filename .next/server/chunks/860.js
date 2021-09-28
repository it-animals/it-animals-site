"use strict";
exports.id = 860;
exports.ids = [860];
exports.modules = {

/***/ 690:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8027);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);
const _excluded = ["className", "children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }





const Component = styled_components__WEBPACK_IMPORTED_MODULE_0___default().button.withConfig({
  displayName: "Button__Component",
  componentId: "sc-1t3k7rp-0"
})(["outline:none;background-color:", ";padding:12px 25px;outline:none;border:none;cursor:pointer;font-family:", ";color:white;font-size:18px;transition:0.2s ease-in-out;opacity:0.65;&:hover{transform:scale(1.1);opacity:1;}&:disabled{opacity:0.5;cursor:no-drop;}"], _styles_variables__WEBPACK_IMPORTED_MODULE_1__/* .default.primaryColor */ .Z.primaryColor, _styles_variables__WEBPACK_IMPORTED_MODULE_1__/* .default.secondaryFont */ .Z.secondaryFont);
const Button = _ref => {
  let {
    className,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Component, _objectSpread(_objectSpread({}, rest), {}, {
    className: className,
    children: children
  }));
};

/***/ }),

/***/ 5662:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "al": () => (/* binding */ TextBlock),
/* harmony export */   "q0": () => (/* binding */ TopLine),
/* harmony export */   "$0": () => (/* binding */ Section),
/* harmony export */   "X6": () => (/* binding */ Heading)
/* harmony export */ });
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(762);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const TextBlock = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.div).withConfig({
  displayName: "_pageElements__TextBlock",
  componentId: "sc-me8iyi-0"
})(["max-width:550px;"]);
const TopLine = styled_components__WEBPACK_IMPORTED_MODULE_1___default().div.withConfig({
  displayName: "_pageElements__TopLine",
  componentId: "sc-me8iyi-1"
})(["display:flex;justify-content:space-between;align-items:center;"]);
const Section = styled_components__WEBPACK_IMPORTED_MODULE_1___default().main.withConfig({
  displayName: "_pageElements__Section",
  componentId: "sc-me8iyi-2"
})(["margin-top:35px;"]);
const Heading = framer_motion__WEBPACK_IMPORTED_MODULE_0__.motion.h2;

/***/ })

};
;