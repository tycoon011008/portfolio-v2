"use strict";
exports.id = 994;
exports.ids = [994];
exports.modules = {

/***/ 1468:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ AnimatedLogo)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


function AnimatedLogo() {
    const iconVariant = {
        hidden: {
            pathLength: 0,
            fill: "rgba(0, 0, 0, 0)"
        },
        visible: {
            pathLength: 1,
            // Set fill as per your theme
            fill: "#1f8d93"
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.svg, {
            viewBox: "0 0 450 450",
            xmlns: "http://www.w3.org/2000/svg",
            className: "h-full w-full fill-accent stroke-accent",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.path, {
                d: "M321.955 420L179.465 127.143L224.998 36.1755L416.91 420H321.955ZM204.867 263.253L128.055 420H33.0897L158.769 168.608L204.867 263.253Z",
                strokeWidth: "15",
                variants: iconVariant,
                initial: "hidden",
                animate: "visible",
                transition: {
                    default: {
                        duration: 3,
                        ease: "easeInOut"
                    },
                    fill: {
                        duration: 3,
                        ease: [
                            1,
                            0,
                            0.8,
                            1
                        ]
                    }
                }
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 309:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ classNames)
/* harmony export */ });
function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}


/***/ })

};
;