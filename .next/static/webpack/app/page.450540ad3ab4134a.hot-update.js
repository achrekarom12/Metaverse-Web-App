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

/***/ "./components/NewFeatures.jsx":
/*!************************************!*\
  !*** ./components/NewFeatures.jsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles */ \"./styles/index.js\");\n\n\nconst NewFeatures = (param)=>/*#__PURE__*/ {\n    let { imgUrl , title , subtitle  } = param;\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_styles__WEBPACK_IMPORTED_MODULE_1__[\"default\"].flexCenter, \" w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]\"),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: imgUrl,\n                    alt: \"icon\",\n                    className: \"w-1/2 h-1/2 object-contain\"\n                }, void 0, false, {\n                    fileName: \"/Users/omachrekar/My Work/Web Development Things/ReactJS/Metaverse-Web-App/components/NewFeatures.jsx\",\n                    lineNumber: 9,\n                    columnNumber: 7\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/omachrekar/My Work/Web Development Things/ReactJS/Metaverse-Web-App/components/NewFeatures.jsx\",\n                lineNumber: 6,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"mt-[26px] font-bold text-[24px] leading-[30.24px] text-white\",\n                children: [\n                    \"Title \",\n                    title\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/omachrekar/My Work/Web Development Things/ReactJS/Metaverse-Web-App/components/NewFeatures.jsx\",\n                lineNumber: 11,\n                columnNumber: 5\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: \"flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]\",\n                children: subtitle\n            }, void 0, false, {\n                fileName: \"/Users/omachrekar/My Work/Web Development Things/ReactJS/Metaverse-Web-App/components/NewFeatures.jsx\",\n                lineNumber: 14,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/omachrekar/My Work/Web Development Things/ReactJS/Metaverse-Web-App/components/NewFeatures.jsx\",\n        lineNumber: 5,\n        columnNumber: 3\n    }, undefined);\n};\n_c = NewFeatures;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NewFeatures);\nvar _c;\n$RefreshReg$(_c, \"NewFeatures\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld0ZlYXR1cmVzLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7QUFDQTtBQUErQjtBQUUvQixNQUFNQyxjQUFjLHVCQUNsQjtRQURtQixFQUFFQyxPQUFNLEVBQUVDLE1BQUssRUFBRUMsU0FBUSxFQUFFO1dBQzlDLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQ0NDLFdBQVcsR0FBcUIsT0FBbEJOLDBEQUFpQixFQUFDOzBCQUVoQyw0RUFBQ1E7b0JBQUlDLEtBQUtQO29CQUFRUSxLQUFJO29CQUFPSixXQUFVOzs7Ozs7Ozs7OzswQkFFekMsOERBQUNLO2dCQUFHTCxXQUFVOztvQkFBK0Q7b0JBQ3BFSDs7Ozs7OzswQkFFVCw4REFBQ1M7Z0JBQUVOLFdBQVU7MEJBQ1ZGOzs7Ozs7Ozs7Ozs7QUFFQTtLQWJESDtBQWdCTiwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL05ld0ZlYXR1cmVzLmpzeD83OGViIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMnO1xuXG5jb25zdCBOZXdGZWF0dXJlcyA9ICh7IGltZ1VybCwgdGl0bGUsIHN1YnRpdGxlIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgZmxleCBmbGV4LWNvbCBzbTptYXgtdy1bMjUwcHhdIG1pbi13LVsyMTBweF1cIj5cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5mbGV4Q2VudGVyfSB3LVs3MHB4XSBoLVs3MHB4XSByb3VuZGVkLVsyNHB4XSBiZy1bIzMyM0Y1RF1gfVxuICAgID5cbiAgICAgIDxpbWcgc3JjPXtpbWdVcmx9IGFsdD1cImljb25cIiBjbGFzc05hbWU9XCJ3LTEvMiBoLTEvMiBvYmplY3QtY29udGFpblwiIC8+XG4gICAgPC9kaXY+XG4gICAgPGgxIGNsYXNzTmFtZT1cIm10LVsyNnB4XSBmb250LWJvbGQgdGV4dC1bMjRweF0gbGVhZGluZy1bMzAuMjRweF0gdGV4dC13aGl0ZVwiPlxuICAgICAgVGl0bGUge3RpdGxlfVxuICAgIDwvaDE+XG4gICAgPHAgY2xhc3NOYW1lPVwiZmxleC0xIG10LVsxNnB4XSBmb250LW5vcm1hbCB0ZXh0LVsxOHB4XSB0ZXh0LVsjQjBCMEIwXSBsZWFkaW5nLVszMi40cHhdXCI+XG4gICAgICB7c3VidGl0bGV9XG4gICAgPC9wPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5ld0ZlYXR1cmVzOyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJOZXdGZWF0dXJlcyIsImltZ1VybCIsInRpdGxlIiwic3VidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJmbGV4Q2VudGVyIiwiaW1nIiwic3JjIiwiYWx0IiwiaDEiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NewFeatures.jsx\n"));

/***/ })

});