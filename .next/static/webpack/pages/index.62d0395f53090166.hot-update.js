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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   BoxContext: function() { return /* binding */ BoxContext; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _core_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../core/api */ \"./core/api.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst BoxContext = ()=>{\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const getUsers = async ()=>{\n        await _core_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"users/olliso17/repos\").then((res)=>{\n            setUsers(res.data);\n        }).catch((error)=>{\n            console.error(error);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        getUsers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {\n        direction: \"column\",\n        bg: \"pink.400\",\n        color: \"black\",\n        width: \"100vw\",\n        justifyContent: \"center\",\n        alignItems: \"center\",\n        margin: 0,\n        padding: 0,\n        children: users && users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Card, {\n                width: \"40\",\n                height: \"20vh\",\n                margin: \"1vh\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        children: user.name\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/Myportifolio/components/box/box_context.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Link, {\n                        children: user.html_url\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/Myportifolio/components/box/box_context.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Text, {\n                        children: user.language\n                    }, void 0, false, {\n                        fileName: \"/home/patricia/Documentos/estudo_go/Myportifolio/components/box/box_context.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, user.id, true, {\n                fileName: \"/home/patricia/Documentos/estudo_go/Myportifolio/components/box/box_context.tsx\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/home/patricia/Documentos/estudo_go/Myportifolio/components/box/box_context.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, undefined);\n};\n_s(BoxContext, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n_c = BoxContext;\nvar _c;\n$RefreshReg$(_c, \"BoxContext\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2JveC9ib3hfY29udGV4dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStEO0FBQ25CO0FBQ1g7QUFFMUIsTUFBTU8sYUFBYTs7SUFDeEIsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFRLEVBQUU7SUFDNUMsTUFBTUssV0FBVztRQUNmLE1BQU1KLHFEQUNBLENBQUMsd0JBQ0pNLElBQUksQ0FBQyxDQUFDQztZQUNMSixTQUFTSSxJQUFJQyxJQUFJO1FBQ25CLEdBQ0NDLEtBQUssQ0FBQyxDQUFDQztZQUNOQyxRQUFRRCxLQUFLLENBQUNBO1FBQ2hCO0lBQ0o7SUFDQVosZ0RBQVNBLENBQUM7UUFDUk07SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ1YsaURBQUdBO1FBQ0ZrQixXQUFXO1FBQ1hDLElBQUc7UUFDSEMsT0FBTTtRQUNOQyxPQUFPO1FBQ1BDLGdCQUFnQjtRQUNoQkMsWUFBWTtRQUNaQyxRQUFRO1FBQ1JDLFNBQVM7a0JBRVJqQixTQUNDQSxNQUFNa0IsR0FBRyxDQUFDLENBQUNDLHFCQUNULDhEQUFDMUIsa0RBQUlBO2dCQUFDb0IsT0FBTztnQkFBTU8sUUFBUTtnQkFBc0JKLFFBQVE7O2tDQUN2RCw4REFBQ3JCLGtEQUFJQTtrQ0FBRXdCLEtBQUtFLElBQUk7Ozs7OztrQ0FDaEIsOERBQUMzQixrREFBSUE7a0NBQUV5QixLQUFLRyxRQUFROzs7Ozs7a0NBQ3BCLDhEQUFDM0Isa0RBQUlBO2tDQUFFd0IsS0FBS0ksUUFBUTs7Ozs7OztlQUhrQkosS0FBS0ssRUFBRTs7Ozs7Ozs7OztBQVF6RCxFQUFFO0dBckNXekI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ib3gvYm94X2NvbnRleHQudHN4PzQwOGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDYXJkLCBGbGV4LCBMaW5rLCBUZXh0IH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBhcGkgZnJvbSBcIi4uLy4uL2NvcmUvYXBpXCI7XG5cbmV4cG9ydCBjb25zdCBCb3hDb250ZXh0ID0gKCkgPT4ge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG4gIGNvbnN0IGdldFVzZXJzID0gYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGFwaVxuICAgICAgLmdldChcInVzZXJzL29sbGlzbzE3L3JlcG9zXCIpXG4gICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgIHNldFVzZXJzKHJlcy5kYXRhKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZ2V0VXNlcnMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPEJveFxuICAgICAgZGlyZWN0aW9uPXtcImNvbHVtblwifVxuICAgICAgYmc9XCJwaW5rLjQwMFwiXG4gICAgICBjb2xvcj1cImJsYWNrXCJcbiAgICAgIHdpZHRoPXtcIjEwMHZ3XCJ9XG4gICAgICBqdXN0aWZ5Q29udGVudD17XCJjZW50ZXJcIn1cbiAgICAgIGFsaWduSXRlbXM9e1wiY2VudGVyXCJ9XG4gICAgICBtYXJnaW49ezB9XG4gICAgICBwYWRkaW5nPXswfVxuICAgID5cbiAgICAgIHt1c2VycyAmJlxuICAgICAgICB1c2Vycy5tYXAoKHVzZXIpID0+IChcbiAgICAgICAgICA8Q2FyZCB3aWR0aD17XCI0MFwifSBoZWlnaHQ9e1wiMjB2aFwifSBrZXk9e3VzZXIuaWR9IG1hcmdpbj17XCIxdmhcIn0+XG4gICAgICAgICAgICA8VGV4dD57dXNlci5uYW1lfTwvVGV4dD5cbiAgICAgICAgICAgIDxMaW5rPnt1c2VyLmh0bWxfdXJsfTwvTGluaz5cbiAgICAgICAgICAgIDxUZXh0Pnt1c2VyLmxhbmd1YWdlfTwvVGV4dD5cbiAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICkpfVxuICAgIDwvQm94PlxuICApO1xufTtcbiJdLCJuYW1lcyI6WyJCb3giLCJDYXJkIiwiTGluayIsIlRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsIkJveENvbnRleHQiLCJ1c2VycyIsInNldFVzZXJzIiwiZ2V0VXNlcnMiLCJnZXQiLCJ0aGVuIiwicmVzIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGlyZWN0aW9uIiwiYmciLCJjb2xvciIsIndpZHRoIiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwicGFkZGluZyIsIm1hcCIsInVzZXIiLCJoZWlnaHQiLCJuYW1lIiwiaHRtbF91cmwiLCJsYW5ndWFnZSIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/box/box_context.tsx\n"));

/***/ })

});