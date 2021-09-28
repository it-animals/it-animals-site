exports.id = 855;
exports.ids = [855];
exports.modules = {

/***/ 1579:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "v": () => (/* binding */ BackgroundEffect)
});

// UNUSED EXPORTS: Background

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: external "react-particles-js"
var external_react_particles_js_ = __webpack_require__(5394);
var external_react_particles_js_default = /*#__PURE__*/__webpack_require__.n(external_react_particles_js_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "react-hook-use-window-width"
var external_react_hook_use_window_width_ = __webpack_require__(810);
var external_react_hook_use_window_width_default = /*#__PURE__*/__webpack_require__.n(external_react_hook_use_window_width_);
// EXTERNAL MODULE: ./src/ui/styles/_variables.ts
var _variables = __webpack_require__(8027);
;// CONCATENATED MODULE: ./src/ui/components/BackgroundEffect/effectConfig/default.ts

/* harmony default export */ const effectConfig_default = ({
  particles: {
    number: {
      value: 25,
      density: {
        enable: false
      }
    },
    color: {
      value: [_variables/* default.secondColor */.Z.secondColor, _variables/* default.primaryColor */.Z.primaryColor, _variables/* default.accentColor */.Z.accentColor]
    },
    size: {
      value: 8,
      random: true,
      anim: {
        speed: 2,
        size_min: 0.3
      }
    },
    line_linked: {
      enable: false
    },
    shape: {
      type: ["square"]
    },
    move: {
      random: false,
      speed: 0.2,
      direction: "top",
      out_mode: "out"
    }
  }
});
;// CONCATENATED MODULE: ./src/ui/components/BackgroundEffect/effectConfig/dima.ts
/* harmony default export */ const dima = ({
  particles: {
    number: {
      value: 50,
      density: {
        enable: false
      }
    },
    size: {
      value: 15,
      random: false // anim: {
      //   speed: 2,
      //   size_min: 0.3,
      // },

    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 1
      }
    },
    line_linked: {
      enable: false
    },
    shape: {
      type: ["images"],
      images: [{
        src: "/images/dima/docker.svg"
      }, {
        src: "/images/dima/nginx-1.svg"
      }, {
        src: "/images/dima/php-1.svg"
      }, {
        src: "/images/dima/postgresql.svg"
      }]
    },
    move: {
      random: false,
      speed: 0.2,
      direction: "top",
      out_mode: "out"
    }
  }
});
;// CONCATENATED MODULE: ./src/ui/components/BackgroundEffect/effectConfig/sergey.ts
/* harmony default export */ const sergey = ({
  particles: {
    number: {
      value: 50,
      density: {
        enable: false
      }
    },
    size: {
      value: 15,
      random: false // anim: {
      //   speed: 2,
      //   size_min: 0.3,
      // },

    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 1
      }
    },
    line_linked: {
      enable: false
    },
    shape: {
      type: ["images"],
      images: [{
        src: "/images/sergey/html-1.svg"
      }, {
        src: "/images/sergey/logo-javascript.svg"
      }, {
        src: "/images/sergey/react-2.svg"
      }, {
        src: "/images/sergey/typescript.svg"
      }]
    },
    move: {
      random: false,
      speed: 0.2,
      direction: "top",
      out_mode: "out"
    }
  }
});
;// CONCATENATED MODULE: ./src/ui/components/BackgroundEffect/effectConfig/ilya.ts
/* harmony default export */ const ilya = ({
  particles: {
    number: {
      value: 50,
      density: {
        enable: false
      }
    },
    size: {
      value: 15,
      random: false // anim: {
      //   speed: 2,
      //   size_min: 0.3,
      // },

    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 1
      }
    },
    line_linked: {
      enable: false
    },
    shape: {
      type: ["images"],
      images: [{
        src: "/images/ilya/linux-mint.svg"
      }, {
        src: "/images/ilya/netbeans-1.svg"
      }, {
        src: "/images/ilya/postgresql.svg"
      }, {
        src: "/images/ilya/yii.svg"
      }]
    },
    move: {
      random: false,
      speed: 0.2,
      direction: "top",
      out_mode: "out"
    }
  }
});
;// CONCATENATED MODULE: ./src/ui/components/BackgroundEffect/effectConfig/marina.ts
/* harmony default export */ const marina = ({
  particles: {
    number: {
      value: 50,
      density: {
        enable: false
      }
    },
    size: {
      value: 15,
      random: false // anim: {
      //   speed: 2,
      //   size_min: 0.3,
      // },

    },
    opacity: {
      anim: {
        enable: false,
        opacity_min: 1
      }
    },
    line_linked: {
      enable: false
    },
    shape: {
      type: ["images"],
      images: [{
        src: "/images/marina/microsoft-excel-2013.svg"
      }, {
        src: "/images/marina/microsoft-word-2013-logo.svg"
      }, {
        src: "/images/marina/miro-2.svg"
      }]
    },
    move: {
      random: false,
      speed: 0.2,
      direction: "top",
      out_mode: "out"
    }
  }
});
;// CONCATENATED MODULE: ./src/ui/components/BackgroundEffect/effectConfig/index.ts





const particlesConfig = {
  default: effectConfig_default,
  dima: dima,
  sergey: sergey,
  ilya: ilya,
  marina: marina
};
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/ui/components/BackgroundEffect/BackgroundEffect.tsx






const Background = external_styled_components_default().div.withConfig({
  displayName: "BackgroundEffect__Background",
  componentId: "sc-1f6aakp-0"
})(["position:absolute;top:0;left:0;z-index:", ";"], props => props.forPreview ? "0" : "1");
const BackgroundEffect = /*#__PURE__*/external_react_default().memo(({
  forPreview = false,
  width,
  height,
  config = "default"
}) => {
  const {
    0: effectWidth,
    1: setEffectWidth
  } = (0,external_react_.useState)("0px");
  const {
    0: wHeight,
    1: setHeight
  } = (0,external_react_.useState)(0);
  const wWidth = external_react_hook_use_window_width_default()(); // Счет ширины окна

  (0,external_react_.useEffect)(() => {
    if (forPreview) {
      setEffectWidth(wWidth < 1320 ? "75px" : "300px");
      return;
    }

    setEffectWidth(width !== null && width !== void 0 ? width : "100%");
  }, [wWidth]);
  (0,external_react_.useEffect)(() => {
    setTimeout(() => {
      setHeight(1);
    }, 50);
  }, []); //Счет высоты body

  (0,external_react_.useEffect)(() => {
    if (document) {
      setHeight(document.body.clientHeight - 5);
    }
  });
  return /*#__PURE__*/jsx_runtime_.jsx(Background, {
    forPreview: forPreview,
    style: {
      width: effectWidth,
      height: height !== null && height !== void 0 ? height : "100%"
    },
    children: /*#__PURE__*/jsx_runtime_.jsx((external_react_particles_js_default()), {
      width: effectWidth !== null && effectWidth !== void 0 ? effectWidth : "100%",
      height: `${wHeight}px`,
      params: particlesConfig[config]
    })
  });
});

/***/ }),

/***/ 1940:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* binding */ Header)
});

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-hook-use-window-width"
var external_react_hook_use_window_width_ = __webpack_require__(810);
var external_react_hook_use_window_width_default = /*#__PURE__*/__webpack_require__.n(external_react_hook_use_window_width_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(9914);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./src/ui/styles/_mixin.ts
var _mixin = __webpack_require__(7419);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(4058);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./src/ui/components/Burger/Burger.tsx





const Burg = external_styled_components_default().button.withConfig({
  displayName: "Burger__Burg",
  componentId: "sc-1qrrzjm-0"
})(["display:flex;flex-direction:column;justify-content:space-between;width:35px;height:30px;border:none;background:transparent;outline:none;transition:0.3s ease;& .dash{width:35px;height:5px;background:", ";border-radius:20px;transition:0.25s;}&.active .dash:nth-of-type(1){transform:translateY(5px);}&.active .dash:nth-of-type(2){opacity:0;}&.active .dash:nth-of-type(3){transform:translateY(-5px);}"], props => props.forPrimaryPage ? "black" : props.isActive ? "black" : "white");
const Burger = ({
  forPrimaryPage = false,
  onClick = () => {},
  isActive = false,
  className
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(Burg, {
    isActive: isActive,
    forPrimaryPage: forPrimaryPage,
    className: external_classnames_default()(isActive && "active" || "", className),
    onClick: () => onClick(!isActive),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dash"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dash"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "dash"
    })]
  });
};
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./src/ui/components/Logo/Logo.tsx




const Logo = ({
  className,
  coloredLogo = false
}) => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: className,
    children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
      href: "/",
      passHref: true,
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          width: 247,
          height: 38,
          src: `${coloredLogo ? "/images/logo2.svg" : "/images/logo.svg"}`
        })
      })
    })
  });
};
// EXTERNAL MODULE: external "framer-motion"
var external_framer_motion_ = __webpack_require__(762);
// EXTERNAL MODULE: external "polished"
var external_polished_ = __webpack_require__(7158);
// EXTERNAL MODULE: ./src/ui/styles/_variables.ts
var _variables = __webpack_require__(8027);
// EXTERNAL MODULE: ./src/ui/components/PageComponent/Wrapper/Wrapper.tsx
var Wrapper = __webpack_require__(8567);
;// CONCATENATED MODULE: ./src/ui/components/Header/Header.style.ts








const BurgerHeader = external_styled_components_default()(Burger).withConfig({
  displayName: "Headerstyle__BurgerHeader",
  componentId: "sc-1o4im0m-0"
})(["display:none;", ""], (0,_mixin/* mxm */.we)(1180, (0,external_styled_components_.css)(["position:relative;z-index:16;display:flex;margin-right:35px;"])));
const HeaderLogo = external_styled_components_default()(Logo).withConfig({
  displayName: "Headerstyle__HeaderLogo",
  componentId: "sc-1o4im0m-1"
})(["position:relative;z-index:18;"]);
const HeaderStyle = external_styled_components_default().header.withConfig({
  displayName: "Headerstyle__HeaderStyle",
  componentId: "sc-1o4im0m-2"
})(["width:100%;height:65px;z-index:20;padding:10px 0;font-size:18px;position:relative;text-decoration:none;background-color:", ";", ""], props => props.forPreviewPage ? "transparent" : _variables/* default.primaryColor */.Z.primaryColor, (0,_mixin/* mxm */.we)(1180, (0,external_styled_components_.css)(["height:65px;"])));
const HeaderWrapper = external_styled_components_default()(Wrapper/* Wrapper */.i).withConfig({
  displayName: "Headerstyle__HeaderWrapper",
  componentId: "sc-1o4im0m-3"
})(["display:flex;align-items:center;justify-content:space-between;", ""], (0,_mixin/* mxm */.we)(1180, (0,external_styled_components_.css)(["display:flex;justify-content:flex-start;"])));
const NavList = external_styled_components_default()(external_framer_motion_.motion.ul).withConfig({
  displayName: "Headerstyle__NavList",
  componentId: "sc-1o4im0m-4"
})(["display:flex;position:relative;top:3px;align-items:center;", ""], (0,_mixin/* mxm */.we)(1180, (0,external_styled_components_.css)(["position:absolute;background-color:", ";display:block;top:-10px;padding-top:120px;left:0px;z-index:15;height:100vh;overflow-x:hidden;width:0;"], (0,external_polished_.rgba)(_variables/* default.backgroundColor */.Z.backgroundColor, 0.95))));
const NavItem = external_styled_components_default().li.withConfig({
  displayName: "Headerstyle__NavItem",
  componentId: "sc-1o4im0m-5"
})(["margin-left:70px;&:last-child{margin-right:20px;}& a{text-decoration:none;color:", ";position:relative;font-weight:bold;&:before{transition:0.2s ease-in-out;content:\"\";position:absolute;left:0;bottom:-5px;width:0;background-color:", ";height:", ";}&:hover{&:before{width:calc(100% + 5px);}}}", ""], props => props.isOpen ? "black" : "white", props => props.isOpen ? "black" : "white", props => props.isOpen ? "4px" : "2px", (0,_mixin/* mxm */.we)(1180, (0,external_styled_components_.css)(["margin-left:0;margin-bottom:25px;& a{font-size:45px;}"])));
const Navigation = external_styled_components_default().nav.withConfig({
  displayName: "Headerstyle__Navigation",
  componentId: "sc-1o4im0m-6"
})(["display:flex;align-items:center;justify-content:flex-end;"]);
// EXTERNAL MODULE: external "react-scrolllock"
var external_react_scrolllock_ = __webpack_require__(7174);
var external_react_scrolllock_default = /*#__PURE__*/__webpack_require__.n(external_react_scrolllock_);
;// CONCATENATED MODULE: ./src/ui/components/Header/Header.tsx







const items = [{
  title: "Главная",
  src: "/"
}, {
  title: "Команда",
  src: "/command"
}, {
  title: "Деятельность",
  src: "/history"
}, {
  title: "Связь",
  src: "/mail"
}];
const Header = ({
  forPreviewPage = false
}) => {
  const {
    0: isOpenMenu,
    1: setOpenMenu
  } = (0,external_react_.useState)(false);
  const wWidth = external_react_hook_use_window_width_default()();
  const animVariants = wWidth <= 1180 ? {
    open: {
      width: "100vw",
      paddingLeft: "50px"
    },
    close: {
      width: "0",
      paddingLeft: "0px"
    }
  } : {
    open: {
      width: "auto",
      paddingLeft: "0px"
    },
    close: {
      width: "auto",
      paddingLeft: "0px"
    }
  };
  const navAnimate = isOpenMenu ? animVariants.open : animVariants.close;
  const navTransition = wWidth <= 1180 ? {
    duration: 0.3
  } : {
    duration: 0
  };
  return /*#__PURE__*/jsx_runtime_.jsx(HeaderStyle, {
    forPreviewPage: forPreviewPage,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(HeaderWrapper, {
      children: [/*#__PURE__*/jsx_runtime_.jsx(BurgerHeader, {
        forPrimaryPage: forPreviewPage,
        isActive: isOpenMenu,
        onClick: setOpenMenu
      }), /*#__PURE__*/jsx_runtime_.jsx(HeaderLogo, {
        coloredLogo: !forPreviewPage
      }), /*#__PURE__*/jsx_runtime_.jsx(Navigation, {
        children: /*#__PURE__*/jsx_runtime_.jsx(NavList, {
          active: isOpenMenu,
          animate: navAnimate,
          transition: navTransition,
          children: items.map(({
            title,
            src
          }) => /*#__PURE__*/jsx_runtime_.jsx(NavItem, {
            isOpen: isOpenMenu,
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              passHref: true,
              href: src,
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                children: title
              })
            })
          }, src))
        })
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_scrolllock_default()), {
        isActive: isOpenMenu
      })]
    })
  });
};

/***/ }),

/***/ 8567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9914);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7419);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




const Content = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({
  displayName: "Wrapper__Content",
  componentId: "sc-cbtwc5-0"
})(["max-width:1920px;margin:0 auto;position:relative;z-index:16;", ""], (0,_styles_mixin__WEBPACK_IMPORTED_MODULE_1__/* .mxm */ .we)(1920, (0,styled_components__WEBPACK_IMPORTED_MODULE_0__.css)(["width:100%;padding:0 15px;"])));
const Wrapper = ({
  className,
  children
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(Content, {
    className: className,
    children: children
  });
};

/***/ }),

/***/ 7419:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

"use strict";
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

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;