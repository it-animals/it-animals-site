"use strict";
exports.id = 915;
exports.ids = [915];
exports.modules = {

/***/ 5915:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ED": () => (/* binding */ getHistoryPageData),
/* harmony export */   "YG": () => (/* binding */ getHistoryContent),
/* harmony export */   "mJ": () => (/* binding */ getHistoryContentById),
/* harmony export */   "oD": () => (/* binding */ getHistoryMediaContentById)
/* harmony export */ });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5747);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9064);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _path__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6362);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const contentDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(_path__WEBPACK_IMPORTED_MODULE_3__/* .getContentPath */ .k, "/history-page.md");
const historyPostDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(_path__WEBPACK_IMPORTED_MODULE_3__/* .getContentPath */ .k, "/history");
const historyMediaDirectory = path__WEBPACK_IMPORTED_MODULE_1___default().join(_path__WEBPACK_IMPORTED_MODULE_3__/* .getPublicPath */ .A, "/images/history");
const getHistoryPageData = () => {
  const data = fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(contentDirectory, "utf8");
  return gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(data).data;
};
const getHistoryContent = () => {
  const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(historyPostDirectory);
  return files.map(file => {
    const id = file.replace(".md", "");
    const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(historyPostDirectory, file);
    return _objectSpread(_objectSpread({}, gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath)).data), {}, {
      content: gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath)).content,
      id
    });
  });
};
const getHistoryContentById = id => {
  const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(historyPostDirectory);
  const neededFile = files.find(item => item.includes(id.toString()));
  const filePath = path__WEBPACK_IMPORTED_MODULE_1___default().join(historyPostDirectory, neededFile);
  return _objectSpread(_objectSpread({}, gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath)).data), {}, {
    content: gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(fs__WEBPACK_IMPORTED_MODULE_0___default().readFileSync(filePath)).content
  });
};
const getHistoryMediaContentById = id => {
  const directories = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(historyMediaDirectory);
  const needDir = directories.includes(id.toString());

  if (needDir) {
    const files = fs__WEBPACK_IMPORTED_MODULE_0___default().readdirSync(path__WEBPACK_IMPORTED_MODULE_1___default().join(historyMediaDirectory, `/${id}`));
    return files.map(file => `/images/history/${id}/${file}`);
  }

  return [];
};

/***/ }),

/***/ 6362:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ getContentPath),
/* harmony export */   "A": () => (/* binding */ getPublicPath)
/* harmony export */ });
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5622);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);

const getContentPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "content");
const getPublicPath = path__WEBPACK_IMPORTED_MODULE_0___default().join(process.cwd(), "public");

/***/ })

};
;