"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "./sections/Hero.jsx":
/*!***************************!*\
  !*** ./sections/Hero.jsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n/* harmony import */ var _utils_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/motion */ \"./utils/motion.js\");\n\n\n\n\nconst Hero = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: \"${styles.yPaddings} sm:pl-16 pl-6\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n            variants: _utils_motion__WEBPACK_IMPORTED_MODULE_2__.staggerContainer,\n            initial: \"hidden\",\n            whileInView: \"show\",\n            viewport: {\n                once: false,\n                amount: 0.25\n            },\n            className: \"${styles.innerWidth} mx-auto flex flex-col\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex justify-center items-center flex-col relative z-10\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h1, {\n                        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(1.1),\n                        className: _styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].heroHeading,\n                        children: \"Metaverse\"\n                    }, void 0, false, {\n                        fileName: \"/Users/omachrekar/My Work/Web Development Things/ReactJS/Metaverse-Web-App/sections/Hero.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {\n                        variants: (0,_utils_motion__WEBPACK_IMPORTED_MODULE_2__.textVariant)(1.2),\n                        classname: \"flex flex-row justify-center items-center\"\n                    }, void 0, false, {\n                        fileName: \"/Users/omachrekar/My Work/Web Development Things/ReactJS/Metaverse-Web-App/sections/Hero.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/omachrekar/My Work/Web Development Things/ReactJS/Metaverse-Web-App/sections/Hero.jsx\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/omachrekar/My Work/Web Development Things/ReactJS/Metaverse-Web-App/sections/Hero.jsx\",\n            lineNumber: 9,\n            columnNumber: 5\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/omachrekar/My Work/Web Development Things/ReactJS/Metaverse-Web-App/sections/Hero.jsx\",\n        lineNumber: 8,\n        columnNumber: 3\n    }, undefined);\n_c = Hero;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Hero);\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZWN0aW9ucy9IZXJvLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBRXVDO0FBQ1I7QUFDMEM7QUFFekUsTUFBTUssT0FBTyxrQkFDWCw4REFBQ0M7UUFBUUMsV0FBVztrQkFDbEIsNEVBQUNQLHFEQUFVO1lBQ1hTLFVBQVlOLDJEQUFnQkE7WUFDNUJPLFNBQVU7WUFDVkMsYUFBYztZQUNkQyxVQUFZO2dCQUFDQyxNQUFNLEtBQUs7Z0JBQUVDLFFBQVE7WUFBSTtZQUN0Q1AsV0FBVztzQkFDVCw0RUFBQ0M7Z0JBQUlELFdBQVU7O2tDQUNiLDhEQUFDUCxvREFBUzt3QkFDVlMsVUFBWUwsMERBQVdBLENBQUM7d0JBQU1HLFdBQVdOLDJEQUFrQjtrQ0FBRTs7Ozs7O2tDQUc3RCw4REFBQ0QscURBQVU7d0JBQUNTLFVBQVdMLDBEQUFXQSxDQUFDO3dCQUFNYSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBYnJEWjtBQXNCTiwrREFBZUEsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zZWN0aW9ucy9IZXJvLmpzeD81OGM3Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50JztcblxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlc1wiO1xuaW1wb3J0IHsgc2xpZGVJbiwgc3RhZ2dlckNvbnRhaW5lciwgdGV4dFZhcmlhbnQgfSBmcm9tIFwiLi4vdXRpbHMvbW90aW9uXCI7XG5cbmNvbnN0IEhlcm8gPSAoKSA9PiAoXG4gIDxzZWN0aW9uIGNsYXNzTmFtZT17XCIke3N0eWxlcy55UGFkZGluZ3N9IHNtOnBsLTE2IHBsLTZcIn0+XG4gICAgPG1vdGlvbi5kaXYgXG4gICAgdmFyaWFudHMgPSB7c3RhZ2dlckNvbnRhaW5lcn1cbiAgICBpbml0aWFsID0gXCJoaWRkZW5cIlxuICAgIHdoaWxlSW5WaWV3ID0gXCJzaG93XCJcbiAgICB2aWV3cG9ydCA9IHt7b25jZTogZmFsc2UsIGFtb3VudDogMC4yNX19IFxuICAgIGNsYXNzTmFtZT17XCIke3N0eWxlcy5pbm5lcldpZHRofSBteC1hdXRvIGZsZXggZmxleC1jb2xcIn0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZsZXgtY29sIHJlbGF0aXZlIHotMTBcIj5cbiAgICAgICAgPG1vdGlvbi5oMVxuICAgICAgICB2YXJpYW50cyA9IHt0ZXh0VmFyaWFudCgxLjEpfSBjbGFzc05hbWU9e3N0eWxlcy5oZXJvSGVhZGluZ30+XG4gICAgICAgICAgTWV0YXZlcnNlXG4gICAgICAgIDwvbW90aW9uLmgxPlxuICAgICAgICA8bW90aW9uLmRpdiB2YXJpYW50cz0ge3RleHRWYXJpYW50KDEuMil9IGNsYXNzbmFtZT0nZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXInPlxuICAgICAgICAgIFxuXG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbW90aW9uLmRpdj5cbiAgPC9zZWN0aW9uPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSGVybztcbiJdLCJuYW1lcyI6WyJtb3Rpb24iLCJzdHlsZXMiLCJzbGlkZUluIiwic3RhZ2dlckNvbnRhaW5lciIsInRleHRWYXJpYW50IiwiSGVybyIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJ2YXJpYW50cyIsImluaXRpYWwiLCJ3aGlsZUluVmlldyIsInZpZXdwb3J0Iiwib25jZSIsImFtb3VudCIsImgxIiwiaGVyb0hlYWRpbmciLCJjbGFzc25hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./sections/Hero.jsx\n"));

/***/ })

});