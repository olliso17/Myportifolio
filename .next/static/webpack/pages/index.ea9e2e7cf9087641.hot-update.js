"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/box/box_context.tsx":
/*!****************************************!*\
  !*** ./components/box/box_context.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BoxContext: function() { return /* binding */ BoxContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/api */ \"./core/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst BoxContext = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getUsers = async ()=>{\n        await _core_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"users/olliso17/repos\").then((res)=>{\n            setUsers(res.data);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUsers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {\n        direction: \"column\",\n        bg: \"pink.400\",\n        color: \"black\",\n        height: \"100vh\",\n        width: \"50vw\",\n        maxW: \"50vw\",\n        children: users && users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        children: user.name\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/Myportifolio/components/box/box_context.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                        children: user.html_url\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/Myportifolio/components/box/box_context.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 13\n                    }, undefined),\n                    \" | \",\n                    user.language\n                ]\n            }, user.id, true, {\n                fileName: \"/home/patricia/Documentos/estudo_go/Myportifolio/components/box/box_context.tsx\",\n                lineNumber: 32,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/Myportifolio/components/box/box_context.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BoxContext, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n_c = BoxContext;\nvar _c;\n$RefreshReg$(_c, \"BoxContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JveC9ib3hfY29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStEO0FBQ25CO0FBQ1g7QUFFMUIsTUFBTU8sYUFBYTs7SUFDeEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFRLEVBQUU7SUFDNUMsTUFBTUssV0FBVztRQUNmLE1BQU1KLHFEQUNBLENBQUMsd0JBQ0pNLElBQUksQ0FBQyxDQUFDQztZQUNMSixTQUFTSSxJQUFJQyxJQUFJO1FBQ25CLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0o7SUFDQVosZ0RBQVNBLENBQUM7UUFDUk07SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1Qsa0RBQUlBO1FBQ0hpQixXQUFXO1FBQ1hDLElBQUc7UUFDSEMsT0FBTTtRQUNOQyxRQUFRO1FBQ1JDLE9BQU87UUFDUEMsTUFBTTtrQkFFTGYsU0FDQ0EsTUFBTWdCLEdBQUcsQ0FBQyxDQUFDQyxxQkFDVCw4REFBQ3pCLGtEQUFJQTs7a0NBQ0gsOERBQUNHLGtEQUFJQTtrQ0FBRXNCLEtBQUtDLElBQUk7Ozs7OztrQ0FDaEIsOERBQUN4QixrREFBSUE7a0NBQUV1QixLQUFLRSxRQUFROzs7Ozs7b0JBQVE7b0JBQUlGLEtBQUtHLFFBQVE7O2VBRnBDSCxLQUFLSSxFQUFFOzs7Ozs7Ozs7O0FBTzVCLEVBQUU7R0FsQ1d0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2JveC9ib3hfY29udGV4dC50c3g/NDA4ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhcmQsIEZsZXgsIExpbmssIFRleHQgfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGFwaSBmcm9tIFwiLi4vLi4vY29yZS9hcGlcIjtcblxuZXhwb3J0IGNvbnN0IEJveENvbnRleHQgPSAoKSA9PiB7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8YW55W10+KFtdKTtcbiAgY29uc3QgZ2V0VXNlcnMgPSBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgYXBpXG4gICAgICAuZ2V0KFwidXNlcnMvb2xsaXNvMTcvcmVwb3NcIilcbiAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgc2V0VXNlcnMocmVzLmRhdGEpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBnZXRVc2VycygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8RmxleFxuICAgICAgZGlyZWN0aW9uPXtcImNvbHVtblwifVxuICAgICAgYmc9XCJwaW5rLjQwMFwiXG4gICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgIGhlaWdodD17XCIxMDB2aFwifVxuICAgICAgd2lkdGg9e1wiNTB2d1wifVxuICAgICAgbWF4Vz17XCI1MHZ3XCJ9XG4gICAgPlxuICAgICAge3VzZXJzICYmXG4gICAgICAgIHVzZXJzLm1hcCgodXNlcikgPT4gKFxuICAgICAgICAgIDxDYXJkIGtleT17dXNlci5pZH0+XG4gICAgICAgICAgICA8VGV4dD57dXNlci5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgIDxMaW5rPnt1c2VyLmh0bWxfdXJsfTwvTGluaz4gfCB7dXNlci5sYW5ndWFnZX1cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpfVxuICAgIDwvRmxleD5cbiAgKTtcbn07XG4iXSwibmFtZXMiOlsiQ2FyZCIsIkZsZXgiLCJMaW5rIiwiVGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiYXBpIiwiQm94Q29udGV4dCIsInVzZXJzIiwic2V0VXNlcnMiLCJnZXRVc2VycyIsImdldCIsInRoZW4iLCJyZXMiLCJkYXRhIiwiY2F0Y2giLCJlcnJvciIsImNvbnNvbGUiLCJkaXJlY3Rpb24iLCJiZyIsImNvbG9yIiwiaGVpZ2h0Iiwid2lkdGgiLCJtYXhXIiwibWFwIiwidXNlciIsIm5hbWUiLCJodG1sX3VybCIsImxhbmd1YWdlIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/box/box_context.tsx\n"));

/***/ })

});