"use strict";
(() => {
var exports = {};
exports.id = 179;
exports.ids = [179];
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

/***/ 3923:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ command),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./src/ui/components/Header/Header.tsx + 3 modules
var Header = __webpack_require__(1940);
// EXTERNAL MODULE: ./src/ui/components/PageComponent/Wrapper/Wrapper.tsx
var Wrapper = __webpack_require__(8567);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-html-parser"
var external_react_html_parser_ = __webpack_require__(7795);
var external_react_html_parser_default = /*#__PURE__*/__webpack_require__.n(external_react_html_parser_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(7158);
// EXTERNAL MODULE: ./src/ui/styles/_variables.ts
var _variables = __webpack_require__(8027);
// EXTERNAL MODULE: ./src/ui/components/Button/Button.tsx
var Button = __webpack_require__(690);
// EXTERNAL MODULE: ./src/ui/styles/_mixin.ts
var _mixin = __webpack_require__(7419);
;// CONCATENATED MODULE: ./src/ui/components/CommandList/CommandList.style.ts






const Section = external_styled_components_default().section.withConfig({
  displayName: "CommandListstyle__Section",
  componentId: "sc-4xu1ji-0"
})(["width:100%;padding:20px 0;min-height:100px;"]);
const CardList = external_styled_components_default().ul.withConfig({
  displayName: "CommandListstyle__CardList",
  componentId: "sc-4xu1ji-1"
})(["width:100%;display:flex;align-items:center;justify-content:center;column-gap:40px;row-gap:40px;flex-wrap:wrap;"]);
const Card = external_styled_components_default()(external_framer_motion_.motion.li).withConfig({
  displayName: "CommandListstyle__Card",
  componentId: "sc-4xu1ji-2"
})(["display:flex;width:310px;padding:30px 20px;display:flex;border:1px solid ", ";border-radius:3px;flex-direction:column;background-color:", ";position:relative;z-index:1;align-items:center;"], (0,external_polished_.rgba)(_variables/* default.secondColor */.Z.secondColor, 0.2), _variables/* default.backgroundColor */.Z.backgroundColor);
const ImageWrap = external_styled_components_default().div.withConfig({
  displayName: "CommandListstyle__ImageWrap",
  componentId: "sc-4xu1ji-3"
})(["width:100%;display:flex;justify-content:center;"]);
const ImageSticker = external_styled_components_default().img.withConfig({
  displayName: "CommandListstyle__ImageSticker",
  componentId: "sc-4xu1ji-4"
})(["width:240px;display:block;height:240px;margin:0 auto;"]);
const CardTextContent = external_styled_components_default().div.withConfig({
  displayName: "CommandListstyle__CardTextContent",
  componentId: "sc-4xu1ji-5"
})(["display:flex;flex-direction:column;"]);
const CardHeading = external_styled_components_default().h5.withConfig({
  displayName: "CommandListstyle__CardHeading",
  componentId: "sc-4xu1ji-6"
})(["margin-bottom:0;line-height:36px;font-size:36px;text-align:center;"]);
const Subtitle = external_styled_components_default().p.withConfig({
  displayName: "CommandListstyle__Subtitle",
  componentId: "sc-4xu1ji-7"
})(["font-size:15px;text-transform:uppercase;margin-bottom:4px;text-align:center;"]);
const CardDescription = external_styled_components_default().p.withConfig({
  displayName: "CommandListstyle__CardDescription",
  componentId: "sc-4xu1ji-8"
})(["font-size:14px;color:", ";line-height:18px;font-weight:300;text-align:center;margin-bottom:0;"], _variables/* default.secondColor */.Z.secondColor);
const TeamContentLine = external_styled_components_default().div.withConfig({
  displayName: "CommandListstyle__TeamContentLine",
  componentId: "sc-4xu1ji-9"
})(["display:flex;justify-content:space-around;align-items:center;width:100%;"]);
const Decoration = external_styled_components_default().img.withConfig({
  displayName: "CommandListstyle__Decoration",
  componentId: "sc-4xu1ji-10"
})(["", ""], (0,_mixin/* mxm */.we)(1780, (0,external_styled_components_.css)(["display:none;"])));
const CardButton = external_styled_components_default()(Button/* Button */.z).withConfig({
  displayName: "CommandListstyle__CardButton",
  componentId: "sc-4xu1ji-11"
})(["margin-top:20px;min-width:140px;"]);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/ui/components/CommandList/CommandList.tsx






const CommandList = ({
  className,
  data
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx(Section, {
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx(Wrapper/* Wrapper */.i, {
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(TeamContentLine, {
        children: [/*#__PURE__*/jsx_runtime_.jsx(Decoration, {
          src: "/images/unicorn2.svg",
          height: 299,
          width: 120
        }), /*#__PURE__*/jsx_runtime_.jsx(CardList, {
          children: data.map((item, i) => /*#__PURE__*/(0,jsx_runtime_.jsxs)(Card, {
            initial: {
              opacity: 0,
              y: -50
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              ease: ["easeInOut"],
              duration: 0.7,
              delay: 0.7 + 0.2 * i
            },
            children: [/*#__PURE__*/jsx_runtime_.jsx(ImageWrap, {
              children: /*#__PURE__*/jsx_runtime_.jsx(ImageSticker, {
                src: item.pathSticker,
                alt: ""
              })
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(CardTextContent, {
              children: [/*#__PURE__*/jsx_runtime_.jsx(CardHeading, {
                children: item.name.split(" ")[0]
              }), /*#__PURE__*/jsx_runtime_.jsx(Subtitle, {
                children: item.job
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(CardDescription, {
              children: external_react_html_parser_default()(item.tagline)
            }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: item.link,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: /*#__PURE__*/jsx_runtime_.jsx(CardButton, {
                  children: "\u041F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435"
                })
              })
            })]
          }, item.name))
        }), /*#__PURE__*/jsx_runtime_.jsx(Decoration, {
          src: "/images/unicorn1.svg",
          height: 299,
          width: 120
        })]
      })
    })
  });
};
// EXTERNAL MODULE: ./src/ui/components/SectionSeparator/SectionSeparator.tsx
var SectionSeparator = __webpack_require__(124);
// EXTERNAL MODULE: ./src/ui/components/BackgroundEffect/BackgroundEffect.tsx + 6 modules
var BackgroundEffect = __webpack_require__(1579);
;// CONCATENATED MODULE: ./src/ui/components/StickerGallery/StickerGallery.tsx




const rotate = (0,external_styled_components_.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const stickerAnimate = (0,external_styled_components_.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(-360deg);}"]);
const Container = external_styled_components_default().div.withConfig({
  displayName: "StickerGallery__Container",
  componentId: "sc-a46lrx-0"
})(["width:360px;height:360px;position:relative;animation:", " 180s linear infinite;transform-origin:center;"], rotate);
const Sticker = external_styled_components_default().div.withConfig({
  displayName: "StickerGallery__Sticker",
  componentId: "sc-a46lrx-1"
})(["width:120px;height:120px;transform-origin:center;background-size:85%;background-repeat:no-repeat;background-position:center;background-color:", ";"], _variables/* default.backgroundColor */.Z.backgroundColor);
const Center = external_styled_components_default().div.withConfig({
  displayName: "StickerGallery__Center",
  componentId: "sc-a46lrx-2"
})(["display:flex;justify-content:center;height:33.3333333%;align-items:center;"]);
const Between = external_styled_components_default().div.withConfig({
  displayName: "StickerGallery__Between",
  componentId: "sc-a46lrx-3"
})(["display:flex;align-items:center;justify-content:space-between;height:33.3333333%;"]);
const StickerTop = external_styled_components_default()(Sticker).withConfig({
  displayName: "StickerGallery__StickerTop",
  componentId: "sc-a46lrx-4"
})(["animation:", " 180s linear infinite;background-image:url(\"/images/sticker1.svg\");"], stickerAnimate);
const StickerCenterLeft = external_styled_components_default()(Sticker).withConfig({
  displayName: "StickerGallery__StickerCenterLeft",
  componentId: "sc-a46lrx-5"
})(["top:50%;left:0;animation:", " 180s linear infinite;background-image:url(\"/images/sticker2.svg\");"], stickerAnimate);
const StickerCenterRight = external_styled_components_default()(Sticker).withConfig({
  displayName: "StickerGallery__StickerCenterRight",
  componentId: "sc-a46lrx-6"
})(["top:50%;right:0;animation:", " 180s linear infinite;background-image:url(\"/images/sticker3.svg\");"], stickerAnimate);
const StickerBottom = external_styled_components_default()(Sticker).withConfig({
  displayName: "StickerGallery__StickerBottom",
  componentId: "sc-a46lrx-7"
})(["animation:", " 180s linear infinite;background-image:url(\"/images/sticker4.svg\");"], stickerAnimate);
const StickerGallery = ({
  className
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Container, {
    className: className,
    children: [/*#__PURE__*/jsx_runtime_.jsx(Center, {
      children: /*#__PURE__*/jsx_runtime_.jsx(StickerTop, {})
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)(Between, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(StickerCenterLeft, {}), /*#__PURE__*/jsx_runtime_.jsx(StickerCenterRight, {})]
    }), /*#__PURE__*/jsx_runtime_.jsx(Center, {
      children: /*#__PURE__*/jsx_runtime_.jsx(StickerBottom, {})
    })]
  });
};
;// CONCATENATED MODULE: ./src/ui/styles/pages/command.style.ts



const Stickers = external_styled_components_default()(StickerGallery).withConfig({
  displayName: "commandstyle__Stickers",
  componentId: "sc-9s2k7x-0"
})(["margin:60px 40px 0 0;", ""], (0,_mixin/* mxm */.we)(800, (0,external_styled_components_.css)(["display:none;"])));
// EXTERNAL MODULE: ./src/ui/styles/_pageElements.ts
var _pageElements = __webpack_require__(5662);
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
;// CONCATENATED MODULE: ./src/lib/commanPage.ts




const contentDirectory = external_path_default().join(path/* getContentPath */.k, "/command-page.md");
const getCommandPageInfo = () => {
  const data = external_fs_default().readFileSync(contentDirectory, "utf8");
  return external_gray_matter_default()(data).data;
};
;// CONCATENATED MODULE: ./src/lib/commandData.ts




const commandData_contentDirectory = external_path_default().join(path/* getContentPath */.k, "/command");
const getCommandInfo = () => {
  const files = external_fs_default().readdirSync(commandData_contentDirectory);
  return files.map(file => {
    const filePath = external_path_default().join(commandData_contentDirectory, file);
    return external_gray_matter_default()(external_fs_default().readFileSync(filePath)).data;
  });
};
;// CONCATENATED MODULE: ./src/pages/command/index.tsx
















const Command = ({
  pageData,
  commandData
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
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("main", {
      children: [/*#__PURE__*/jsx_runtime_.jsx(BackgroundEffect/* BackgroundEffect */.v, {
        forPreview: false
      }), /*#__PURE__*/jsx_runtime_.jsx(Header/* Header */.h, {}), /*#__PURE__*/jsx_runtime_.jsx(_pageElements/* Section */.$0, {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Wrapper/* Wrapper */.i, {
          children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)(_pageElements/* TopLine */.q0, {
            children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
              children: [/*#__PURE__*/jsx_runtime_.jsx(_pageElements/* Heading */.X6, {
                initial: {
                  opacity: 0,
                  y: -50
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  ease: ["easeInOut"],
                  duration: 0.7,
                  delay: 0
                },
                children: external_react_html_parser_default()(pageData.heading)
              }), /*#__PURE__*/jsx_runtime_.jsx(_pageElements/* TextBlock */.al, {
                initial: {
                  opacity: 0,
                  y: -50
                },
                animate: {
                  opacity: 1,
                  y: 0
                },
                transition: {
                  ease: ["easeInOut"],
                  duration: 0.7,
                  delay: 0.4
                },
                children: external_react_html_parser_default()(pageData.description)
              })]
            }), /*#__PURE__*/jsx_runtime_.jsx(Stickers, {})]
          }), /*#__PURE__*/jsx_runtime_.jsx(SectionSeparator/* SectionSeparator */.d, {})]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx(CommandList, {
        data: commandData
      }), /*#__PURE__*/jsx_runtime_.jsx(SectionSeparator/* SectionSeparator */.d, {
        inverted: true
      })]
    })]
  });
};

async function getStaticProps() {
  // Получение и прокидывание данных перед самой сборкой статики
  const pageData = getCommandPageInfo();
  const commandData = getCommandInfo();
  return {
    props: {
      pageData,
      commandData
    }
  };
}
/* harmony default export */ const command = (Command);

/***/ }),

/***/ 124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "d": () => (/* binding */ SectionSeparator)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8027);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



const Separator = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "SectionSeparator__Separator",
  componentId: "sc-1wxmte1-0"
})(["height:18px;width:60px;position:relative;margin:20px auto;&:before{width:100%;position:absolute;left:50%;top:", ";transform:translateX(-50%);display:block;height:6px;border-radius:25px;content:\"\";margin:0 auto;background-color:", ";}&:after{width:40%;position:absolute;display:block;left:50%;top:", ";transform:translateX(-50%);margin:0 auto;border-radius:25px;height:6px;content:\"\";background-color:", ";}"], props => props.inverted ? "0" : "100%", _styles_variables__WEBPACK_IMPORTED_MODULE_1__/* .default.primaryColor */ .Z.primaryColor, props => props.inverted ? "100%" : "0", _styles_variables__WEBPACK_IMPORTED_MODULE_1__/* .default.primaryColor */ .Z.primaryColor);
const SectionSeparator = ({
  inverted = false
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Separator, {
    inverted: inverted
  });
};

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
var __webpack_exports__ = __webpack_require__.X(0, [61,855,860], () => (__webpack_exec__(3923)));
module.exports = __webpack_exports__;

})();