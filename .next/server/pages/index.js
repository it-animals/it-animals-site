"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

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

/***/ }),

/***/ 9271:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/ui/components/PageComponent/Wrapper/Wrapper.tsx
var Wrapper = __webpack_require__(8567);
// EXTERNAL MODULE: ./src/ui/components/Header/Header.tsx + 3 modules
var Header = __webpack_require__(1940);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/ui/styles/_variables.ts
var _variables = __webpack_require__(8027);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/ui/components/AccentButton/AccentButton.tsx





const Layout = external_styled_components_default().div.withConfig({
  displayName: "AccentButton__Layout",
  componentId: "sc-189ea7l-0"
})(["min-width:120px;width:120px;height:120px;background-color:", ";outline:none;padding-top:30px;padding-left:15px;display:flex;flex-direction:column;justify-content:space-between;padding-bottom:25px;font-size:18px;cursor:pointer;color:", ";& svg{transition:0.2s ease-in-out;width:91px;}&:hover{& svg{width:85px;}}"], _variables/* default.accentColor */.Z.accentColor, _variables/* default.textColorPrimary */.Z.textColorPrimary);
const AccentButton = ({
  title
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Layout, {
    children: [title, /*#__PURE__*/jsx_runtime_.jsx("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      height: "16",
      viewBox: "0 0 91 16",
      fill: "none",
      children: /*#__PURE__*/jsx_runtime_.jsx("path", {
        d: "M90.7071 8.70711C91.0976 8.31658 91.0976 7.68342 90.7071 7.29289L84.3431 0.928932C83.9526 0.538408 83.3195 0.538408 82.9289 0.928932C82.5384 1.31946 82.5384 1.95262 82.9289 2.34315L88.5858 8L82.9289 13.6569C82.5384 14.0474 82.5384 14.6805 82.9289 15.0711C83.3195 15.4616 83.9526 15.4616 84.3431 15.0711L90.7071 8.70711ZM0 9H90V7H0V9Z",
        fill: "currentColor"
      })
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./src/ui/styles/_mixin.ts
var _mixin = __webpack_require__(7419);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
;// CONCATENATED MODULE: ./src/ui/styles/pages/index.style.ts




const Main = external_styled_components_default().main.withConfig({
  displayName: "indexstyle__Main",
  componentId: "sc-girmen-0"
})(["min-height:100vh;background:rgb(255,255,255);background:linear-gradient( 90deg,transparent 0%,transparent 300px,", " 300px,", " 100% );", ""], _variables/* default.primaryColor */.Z.primaryColor, _variables/* default.primaryColor */.Z.primaryColor, (0,_mixin/* mxm */.we)(1366, (0,external_styled_components_.css)(["background:linear-gradient( 90deg,", " 0%,", " 75px,", " 75px,", " 100% );height:auto;"], _variables/* default.backgroundColor */.Z.backgroundColor, _variables/* default.backgroundColor */.Z.backgroundColor, _variables/* default.primaryColor */.Z.primaryColor, _variables/* default.primaryColor */.Z.primaryColor)));
const Heading = external_styled_components_default()(external_framer_motion_.motion.h1).withConfig({
  displayName: "indexstyle__Heading",
  componentId: "sc-girmen-1"
})(["font-size:104px;line-height:80px;font-family:", ";text-transform:uppercase;", " ", " ", ""], _variables/* default.secondaryFont */.Z.secondaryFont, (0,_mixin/* mxm */.we)(1700, (0,external_styled_components_.css)(["font-size:70px;line-height:55px;"])), (0,_mixin/* mxm */.we)(1366, (0,external_styled_components_.css)(["font-size:70px;line-height:80px;font-family:", ";text-transform:uppercase;"], _variables/* default.secondaryFont */.Z.secondaryFont)), (0,_mixin/* mxm */.we)(780, (0,external_styled_components_.css)(["font-size:48px;line-height:52px;font-family:", ";text-transform:uppercase;"], _variables/* default.secondaryFont */.Z.secondaryFont)));
const Content = external_styled_components_default().div.withConfig({
  displayName: "indexstyle__Content",
  componentId: "sc-girmen-2"
})(["display:flex;margin-top:35px;justify-content:space-between;", " ", ""], (0,_mixin/* mxm */.we)(1366, (0,external_styled_components_.css)(["flex-direction:column;"])), (0,_mixin/* mxm */.we)(780, (0,external_styled_components_.css)(["justify-content:center;align-items:center;"])));
const ContentText = external_styled_components_default().div.withConfig({
  displayName: "indexstyle__ContentText",
  componentId: "sc-girmen-3"
})(["display:flex;flex-direction:column;"]);
const AccentLink = external_styled_components_default().a.withConfig({
  displayName: "indexstyle__AccentLink",
  componentId: "sc-girmen-4"
})(["text-decoration:none;"]);
const Accent = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "indexstyle__Accent",
  componentId: "sc-girmen-5"
})(["margin-top:100px;display:flex;position:relative;z-index:12;align-items:center;", ""], (0,_mixin/* mxm */.we)(1366, (0,external_styled_components_.css)(["align-self:flex-end;margin-top:15px;"])));
const AccentText = external_styled_components_default().p.withConfig({
  displayName: "indexstyle__AccentText",
  componentId: "sc-girmen-6"
})(["margin-left:50px;font-size:22px;line-height:22px;margin-bottom:0;", ""], (0,_mixin/* mxm */.we)(535, (0,external_styled_components_.css)(["font-size:18px;margin-left:15px;"])));
const TeamImage = external_styled_components_default()(external_framer_motion_.motion.div).withConfig({
  displayName: "indexstyle__TeamImage",
  componentId: "sc-girmen-7"
})(["position:relative;z-index:11;width:920px;margin-right:85px;position:relative;", " ", " ", ""], (0,_mixin/* mxm */.we)(1700, (0,external_styled_components_.css)(["margin-right:0;top:-45px;width:575px;"])), (0,_mixin/* mxm */.we)(1420, (0,external_styled_components_.css)(["margin-right:0;top:-45px;width:575px;"])), (0,_mixin/* mxm */.we)(1366, (0,external_styled_components_.css)(["top:-20px;width:800px;max-width:95%;"])));
// EXTERNAL MODULE: ./src/ui/components/BackgroundEffect/BackgroundEffect.tsx + 6 modules
var BackgroundEffect = __webpack_require__(1579);
;// CONCATENATED MODULE: ./src/ui/components/CenterContent/CenterContent.tsx


const Center = external_styled_components_default().div.withConfig({
  displayName: "CenterContent__Center",
  componentId: "sc-dp9xcm-0"
})(["display:flex;min-height:100vh;width:100%;align-items:center;"]);
const CenterContent = ({
  children,
  className
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Center, {
    className: className,
    children: children
  });
};
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(9064);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./src/lib/path.ts
var path = __webpack_require__(6362);
;// CONCATENATED MODULE: ./src/lib/mainPage.ts




const contentDirectory = external_path_default().join(path/* getContentPath */.k, "/main-page.md");
const getMainPageInfo = () => {
  const data = external_fs_default().readFileSync(contentDirectory, "utf8");
  return external_gray_matter_default()(data).data;
};
// EXTERNAL MODULE: external "react-html-parser"
var external_react_html_parser_ = __webpack_require__(7795);
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_);
;// CONCATENATED MODULE: ./src/pages/index.tsx















const Home = ({
  data
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)((head_default()), {
      children: [/*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Create Next App"
      }), /*#__PURE__*/jsx_runtime_.jsx("meta", {
        name: "description",
        content: "Generated by create next app"
      }), /*#__PURE__*/jsx_runtime_.jsx("link", {
        rel: "icon",
        href: "/favicon.ico"
      })]
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Main, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* Header */.h, {
        forPreviewPage: true
      }), /*#__PURE__*/jsx_runtime_.jsx(BackgroundEffect/* BackgroundEffect */.v, {
        forPreview: true
      }), /*#__PURE__*/jsx_runtime_.jsx(CenterContent, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper/* Wrapper */.i, {
          children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Content, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(ContentText, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(Heading, {
                initial: {
                  opacity: 0,
                  x: -50
                },
                animate: {
                  opacity: 1,
                  x: 0
                },
                transition: {
                  duration: 1
                },
                children: external_react_html_parser_default()(data.heading)
              }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Accent, {
                initial: {
                  opacity: 0,
                  x: -50
                },
                animate: {
                  opacity: 1,
                  x: 0
                },
                transition: {
                  duration: 1,
                  delay: 0.7
                },
                children: [/*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
                  href: "/command/",
                  children: /*#__PURE__*/jsx_runtime_.jsx(AccentLink, {
                    children: /*#__PURE__*/jsx_runtime_.jsx(AccentButton, {
                      title: "Узнать подробнее"
                    })
                  })
                }), /*#__PURE__*/jsx_runtime_.jsx(AccentText, {
                  children: external_react_html_parser_default()(data.accent)
                })]
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(TeamImage, {
              initial: {
                opacity: 0,
                y: -100
              },
              animate: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 1,
                delay: 0.4
              },
              children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
                layout: "responsive",
                objectFit: "cover",
                src: "/images/it-animals.svg",
                width: "100%",
                height: "100%"
              })
            })]
          })
        })
      })]
    })]
  });
};

async function getStaticProps() {
  // Получение и прокидывание данных перед самой сборкой статики
  const data = getMainPageInfo();
  return {
    props: {
      data
    }
  };
}
/* harmony default export */ const pages = (Home);

/***/ }),

/***/ 4058:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 762:
/***/ ((module) => {

module.exports = require("framer-motion");

/***/ }),

/***/ 5747:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 9064:
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ 9325:
/***/ ((module) => {

module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 5622:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 7158:
/***/ ((module) => {

module.exports = require("polished");

/***/ }),

/***/ 9297:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 810:
/***/ ((module) => {

module.exports = require("react-hook-use-window-width");

/***/ }),

/***/ 7795:
/***/ ((module) => {

module.exports = require("react-html-parser");

/***/ }),

/***/ 5394:
/***/ ((module) => {

module.exports = require("react-particles-js");

/***/ }),

/***/ 7174:
/***/ ((module) => {

module.exports = require("react-scrolllock");

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
var __webpack_exports__ = __webpack_require__.X(0, [61,855], () => (__webpack_exec__(9271)));
module.exports = __webpack_exports__;

})();