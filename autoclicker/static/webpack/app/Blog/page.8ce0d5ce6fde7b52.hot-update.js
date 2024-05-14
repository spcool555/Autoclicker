"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Blog/page",{

/***/ "(app-pages-browser)/./src/app/Blog/page.js":
/*!******************************!*\
  !*** ./src/app/Blog/page.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _seo_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seo/Seo */ \"(app-pages-browser)/./src/app/seo/Seo.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Blog = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            input3: \"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png\",\n            input1: \"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkk\"\n        }\n    ]);\n    const [leddata, setleData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            input3: \"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png\",\n            input1: \"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkk\"\n        },\n        {\n            id: 2,\n            input3: \"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png\",\n            input1: \"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkk\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        GetAllFeaturebox();\n    }, []);\n    const GetAllFeaturebox = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://65.2.172.195:8081/public/newsbox\").then((res)=>{\n            setData(res.data);\n            console.log(\"data...\", res.data);\n        }).catch((err)=>{\n            console.log(\"err\", err);\n        });\n    };\n    const MAX_WORDS = 25;\n    const truncateText = (text, maxWords)=>{\n        const words = text.split(\" \");\n        if (words.length > maxWords) {\n            return words.slice(0, maxWords).join(\" \") + \"...\";\n        }\n        return text;\n    };\n    let metaData = {\n        title: \"blog page\",\n        description: \"blog decription\",\n        ogTitle: \"blog ogtitle\",\n        ogDescription: \"blog ogtitle Description\",\n        conicalurl: \"conicalurl\" || 0,\n        plaintext: \"blog plaintext\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_seo_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: metaData === null || metaData === void 0 ? void 0 : metaData.title,\n                description: metaData === null || metaData === void 0 ? void 0 : metaData.description,\n                ogTitle: metaData === null || metaData === void 0 ? void 0 : metaData.ogTitle,\n                ogDescription: metaData === null || metaData === void 0 ? void 0 : metaData.ogDescription,\n                plaintext: metaData === null || metaData === void 0 ? void 0 : metaData.plaintext,\n                conicalurl: metaData === null || metaData === void 0 ? void 0 : metaData.conicalurl\n            }, void 0, false, {\n                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                lineNumber: 70,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-white dark:bg-gray-900 p0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-screen-md text-center mb-8 lg:mb-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 p4 dark:text-white\",\n                                children: \"AutoClicker\"\n                            }, void 0, false, {\n                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                lineNumber: 100,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 p4\",\n                                children: \"A full-fledged autoclicker with two modes of autoclicking\"\n                            }, void 0, false, {\n                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                lineNumber: 101,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                        lineNumber: 99,\n                        columnNumber: 5\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                    lineNumber: 98,\n                    columnNumber: 3\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                lineNumber: 97,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flexWrap: \"wrap\",\n                    justifyContent: \"center\",\n                    display: \"flex\",\n                    padding: \"30px\"\n                },\n                children: leddata.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"400px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.input3,\n                                    alt: \"img\",\n                                    className: \"standard-image\"\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 3\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                lineNumber: 113,\n                                columnNumber: 3\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                    children: item.input1\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                    lineNumber: 117,\n                                    columnNumber: 5\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                lineNumber: 116,\n                                columnNumber: 3\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                        lineNumber: 112,\n                        columnNumber: 1\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                lineNumber: 106,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Blog, \"NwdDr7uxRnt0gvduGUKMP/gK834=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQmxvZy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM2QjtBQUNxQjtBQUN4QjtBQUNrQjtBQUNmO0FBRTdCLE1BQU1PLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO1FBQzlCO1lBQ0VPLElBQUc7WUFDSEMsUUFBTztZQUNQQyxRQUFPO1FBRVQ7S0FDRDtJQUNELE1BQU0sQ0FBQ0MsU0FBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztRQUNuQztZQUNFTyxJQUFHO1lBQ0hDLFFBQU87WUFDUEMsUUFBTztRQUVUO1FBQ0E7WUFDRUYsSUFBRztZQUNIQyxRQUFPO1lBQ1BDLFFBQU87UUFFVDtLQUNEO0lBR0xWLGdEQUFTQSxDQUFDO1FBQ05hO0lBQ0YsR0FBRSxFQUFFO0lBQ0YsTUFBTUEsbUJBQW1CO1FBQ3JCWCw2Q0FBS0EsQ0FBQ1ksR0FBRyxDQUFDLDJDQUEyQ0MsSUFBSSxDQUFDLENBQUNDO1lBQ3ZEVCxRQUFRUyxJQUFJVixJQUFJO1lBQ2hCVyxRQUFRQyxHQUFHLENBQUMsV0FBVUYsSUFBSVYsSUFBSTtRQUNoQyxHQUFHYSxLQUFLLENBQUMsQ0FBQ0M7WUFDUkgsUUFBUUMsR0FBRyxDQUFDLE9BQU1FO1FBQ3BCO0lBRU47SUFJQSxNQUFNQyxZQUFZO0lBRWxCLE1BQU1DLGVBQWUsQ0FBQ0MsTUFBTUM7UUFDMUIsTUFBTUMsUUFBUUYsS0FBS0csS0FBSyxDQUFDO1FBQ3pCLElBQUlELE1BQU1FLE1BQU0sR0FBR0gsVUFBVTtZQUMzQixPQUFPQyxNQUFNRyxLQUFLLENBQUMsR0FBR0osVUFBVUssSUFBSSxDQUFDLE9BQU87UUFDOUM7UUFDQSxPQUFPTjtJQUNUO0lBQ0EsSUFBSU8sV0FBVztRQUNiQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQ0ksZ0JBQ0MsQ0FBcUI7UUFDMUJDLFdBQVc7SUFDYjtJQUNGLHFCQUVGOzswQkFDQSw4REFBQ2hDLGdEQUFHQTtnQkFBQzJCLEtBQUssRUFBRUQscUJBQUFBLCtCQUFBQSxTQUFVQyxLQUFLO2dCQUFFQyxXQUFXLEVBQUVGLHFCQUFBQSwrQkFBQUEsU0FBVUUsV0FBVztnQkFBRUMsT0FBTyxFQUFFSCxxQkFBQUEsK0JBQUFBLFNBQVVHLE9BQU87Z0JBQUVDLGFBQWEsRUFBRUoscUJBQUFBLCtCQUFBQSxTQUFVSSxhQUFhO2dCQUFFRSxTQUFTLEVBQUVOLHFCQUFBQSwrQkFBQUEsU0FBVU0sU0FBUztnQkFBRUQsVUFBVSxFQUFFTCxxQkFBQUEsK0JBQUFBLFNBQVVLLFVBQVU7Ozs7OzswQkEyQnJNLDhEQUFDRTtnQkFBUUMsV0FBVTswQkFDakIsNEVBQUNDO29CQUFJRCxXQUFVOzhCQUNiLDRFQUFDQzt3QkFBSUQsV0FBVTs7MENBQ2IsOERBQUNFO2dDQUFHRixXQUFVOzBDQUErRTs7Ozs7OzBDQUM3Riw4REFBQ0c7Z0NBQUVILFdBQVU7MENBQWlFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtwRiw4REFBQ0M7Z0JBQUlHLE9BQU87b0JBQUNDLFVBQVU7b0JBQ25CQyxnQkFBZ0I7b0JBQ2hCQyxTQUFTO29CQUNUQyxTQUFTO2dCQUFNOzBCQUVmbkMsUUFBUW9DLEdBQUcsQ0FBQyxDQUFDQyxNQUFLQyxzQkFDdEIsOERBQUNWO3dCQUFnQkcsT0FBTzs0QkFBQ1EsT0FBTTt3QkFBTzs7MENBQ3BDLDhEQUFDWDswQ0FDRCw0RUFBQ1k7b0NBQUlDLEtBQUtKLEtBQUt2QyxNQUFNO29DQUFFNEMsS0FBSTtvQ0FBTWYsV0FBVTs7Ozs7Ozs7Ozs7MENBRTNDLDhEQUFDQzswQ0FDQyw0RUFBQ2U7OENBQUlOLEtBQUt0QyxNQUFNOzs7Ozs7Ozs7Ozs7dUJBTFZ1Qzs7Ozs7Ozs7Ozs7O0FBNkJWO0dBcklNNUM7S0FBQUE7QUF1SU4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9CbG9nL3BhZ2UuanM/Y2E4NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgU0VPIGZyb20gXCIuLi9zZW8vU2VvXCI7XG5cbmNvbnN0IEJsb2cgPSAoKSA9PiB7XG4gICAgY29uc3QgW2RhdGEsc2V0RGF0YV0gPSB1c2VTdGF0ZShbXG4gICAgICB7XG4gICAgICAgIGlkOjEsXG4gICAgICAgIGlucHV0MzpcImh0dHBzOi8vNS5pbWltZy5jb20vZGF0YTUvU0VMTEVSL0RlZmF1bHQvMjAyMy83LzMyNjM3MTA1NS9BUC9CVi9TUS80MzIyMjM1NS9jaWZlcm9uLXJlc3RhdXJhbnQtYmlsbGluZy1zb2Z0d2FyZS0yNTB4MjUwLnBuZ1wiLFxuICAgICAgICBpbnB1dDE6XCJqaGZqaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGtra1wiLFxuICAgICAgICBcbiAgICAgIH1cbiAgICBdKTtcbiAgICBjb25zdCBbbGVkZGF0YSxzZXRsZURhdGFdID0gdXNlU3RhdGUoW1xuICAgICAge1xuICAgICAgICBpZDoxLFxuICAgICAgICBpbnB1dDM6XCJodHRwczovLzUuaW1pbWcuY29tL2RhdGE1L1NFTExFUi9EZWZhdWx0LzIwMjMvNy8zMjYzNzEwNTUvQVAvQlYvU1EvNDMyMjIzNTUvY2lmZXJvbi1yZXN0YXVyYW50LWJpbGxpbmctc29mdHdhcmUtMjUweDI1MC5wbmdcIixcbiAgICAgICAgaW5wdXQxOlwiamhmamhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhra2tcIixcbiAgICAgICAgXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDoyLFxuICAgICAgICBpbnB1dDM6XCJodHRwczovLzUuaW1pbWcuY29tL2RhdGE1L1NFTExFUi9EZWZhdWx0LzIwMjMvNy8zMjYzNzEwNTUvQVAvQlYvU1EvNDMyMjIzNTUvY2lmZXJvbi1yZXN0YXVyYW50LWJpbGxpbmctc29mdHdhcmUtMjUweDI1MC5wbmdcIixcbiAgICAgICAgaW5wdXQxOlwiamhmamhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhra2tcIixcbiAgICAgICAgXG4gICAgICB9XG4gICAgXSk7XG4gICAgXG4gICAgXG51c2VFZmZlY3QoKCk9PntcbiAgICBHZXRBbGxGZWF0dXJlYm94KCk7XG4gIH0sW10pO1xuICAgIGNvbnN0IEdldEFsbEZlYXR1cmVib3ggPSAoKT0+e1xuICAgICAgICBheGlvcy5nZXQoJ2h0dHA6Ly82NS4yLjE3Mi4xOTU6ODA4MS9wdWJsaWMvbmV3c2JveCcpLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIHNldERhdGEocmVzLmRhdGEpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGEuLi5cIixyZXMuZGF0YSlcbiAgICAgICAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJcIixlcnIpXG4gICAgICAgICAgfSlcbiAgICAgICAgXG4gICAgfVxuXG4gICAgXG5cbiAgICBjb25zdCBNQVhfV09SRFMgPSAyNTtcblxuICAgIGNvbnN0IHRydW5jYXRlVGV4dCA9ICh0ZXh0LCBtYXhXb3JkcykgPT4ge1xuICAgICAgY29uc3Qgd29yZHMgPSB0ZXh0LnNwbGl0KCcgJyk7XG4gICAgICBpZiAod29yZHMubGVuZ3RoID4gbWF4V29yZHMpIHtcbiAgICAgICAgcmV0dXJuIHdvcmRzLnNsaWNlKDAsIG1heFdvcmRzKS5qb2luKCcgJykgKyAnLi4uJztcbiAgICAgIH1cbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH07XG4gICAgbGV0IG1ldGFEYXRhID0ge1xuICAgICAgdGl0bGU6IFwiYmxvZyBwYWdlXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJibG9nIGRlY3JpcHRpb25cIixcbiAgICAgIG9nVGl0bGU6IFwiYmxvZyBvZ3RpdGxlXCIsXG4gICAgICBvZ0Rlc2NyaXB0aW9uOiBcImJsb2cgb2d0aXRsZSBEZXNjcmlwdGlvblwiLFxuICAgICAgY29uaWNhbHVybFxuICAgICAgICA6IFwiY29uaWNhbHVybFwiXG4gICAgICAgIHx8IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgcGxhaW50ZXh0OiBcImJsb2cgcGxhaW50ZXh0XCIsXG4gICAgfVxuICByZXR1cm4gKFxuICBcbjw+XG48U0VPIHRpdGxlPXttZXRhRGF0YT8udGl0bGV9IGRlc2NyaXB0aW9uPXttZXRhRGF0YT8uZGVzY3JpcHRpb259IG9nVGl0bGU9e21ldGFEYXRhPy5vZ1RpdGxlfSBvZ0Rlc2NyaXB0aW9uPXttZXRhRGF0YT8ub2dEZXNjcmlwdGlvbn0gcGxhaW50ZXh0PXttZXRhRGF0YT8ucGxhaW50ZXh0fSBjb25pY2FsdXJsPXttZXRhRGF0YT8uY29uaWNhbHVybH0gIC8+XG5cbnsvKiA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwIHAwXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwicHktOCBweC00IG14LWF1dG8gbWF4LXctc2NyZWVuLXhsIGxnOnB5LTE2IGxnOnB4LTZcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctc2NyZWVuLW1kIHRleHQtY2VudGVyIG1iLTggbGc6bWItMTJcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00IHRleHQtNHhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgcDQgZGFyazp0ZXh0LXdoaXRlXCI+QXV0b0NsaWNrZXI8L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgc206dGV4dC14bCBkYXJrOnRleHQtZ3JheS00MDAgcDRcIj5BIGZ1bGwtZmxlZGdlZCBhdXRvY2xpY2tlciB3aXRoIHR3byBtb2RlcyBvZiBhdXRvY2xpY2tpbmc8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC02IHNtOmdhcC02IHhsOmdhcC0xMFwiPlxuICAgICAge1xuICAgICAgICBsZWRkYXRhLm1hcCgoaXRlbSwgaW5kKSA9PiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOic0MDBweCd9fSBrZXk9e2luZH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTYgbXgtYXV0byBtYXgtdy1sZyB0ZXh0LWNlbnRlciBwMyBiZy1zbGF0ZS0xMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXllbGxvdy0zMDAgZGFyazpib3JkZXItZ3JheS02MDAgeGw6cC04IGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Ym9yZGVyLWJsdWUtNDAwIGhvdmVyOnNoYWRvdy1sZ1wiPlxuICAgICAgPGltZyBzcmM9e2l0ZW0uaW5wdXQzfSBhbHQ9XCJpbWdcIiBjbGFzc2VOYW1lPVwic3RhbmRhcmQtaW1hZ2VcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtYmFzZWxpbmUgbXktOFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTIgdGV4dC01eGwgZm9udC1leHRyYWJvbGRcIiAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5pbnB1dDEgfX0+PC9zcGFuPlxuICAgICAgPC9kaXY+IFxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1saWdodCBwNCBzbTp0ZXh0LWxnIGRhcms6dGV4dC1ncmF5LTQwMFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdHJ1bmNhdGVUZXh0KGl0ZW0uaW5wdXQxLCBNQVhfV09SRFMpIH19PjwvcD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvQmlnQmxvZz9pZD0ke2l0ZW0uaWR9YH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTIwMCB2aWEtcmVkLTMwMCB0by15ZWxsb3ctMjAwIGhvdmVyOmJnLWdyYWRpZW50LXRvLWJsIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1yZWQtMTAwIGRhcms6Zm9jdXM6cmluZy1yZWQtNDAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBtZS0yIG1iLTJcIj5SZWFkIE1vcmU8L0xpbms+XG4gICAgICAgXG4gICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPiAqL31cblxuXG48c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwIHAwXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwicHktOCBweC00IG14LWF1dG8gbWF4LXctc2NyZWVuLXhsIGxnOnB5LTE2IGxnOnB4LTZcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctc2NyZWVuLW1kIHRleHQtY2VudGVyIG1iLTggbGc6bWItMTJcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00IHRleHQtNHhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgcDQgZGFyazp0ZXh0LXdoaXRlXCI+QXV0b0NsaWNrZXI8L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgc206dGV4dC14bCBkYXJrOnRleHQtZ3JheS00MDAgcDRcIj5BIGZ1bGwtZmxlZGdlZCBhdXRvY2xpY2tlciB3aXRoIHR3byBtb2RlcyBvZiBhdXRvY2xpY2tpbmc8L3A+XG4gICAgPC9kaXY+XG4gICBcbiAgPC9kaXY+XG48L3NlY3Rpb24+XG48ZGl2IHN0eWxlPXt7ZmxleFdyYXA6ICd3cmFwJyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmc6ICczMHB4J319PlxuICB7XG4gICAgbGVkZGF0YS5tYXAoKGl0ZW0saW5kZXgpPT4oXG48ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7d2lkdGg6JzQwMHB4J319PlxuICA8ZGl2PlxuICA8aW1nIHNyYz17aXRlbS5pbnB1dDN9IGFsdD1cImltZ1wiIGNsYXNzTmFtZT1cInN0YW5kYXJkLWltYWdlXCIgLz5cbiAgPC9kaXY+XG4gIDxkaXY+XG4gICAgPGgzPntpdGVtLmlucHV0MX08L2gzPlxuICA8L2Rpdj5cbjwvZGl2PlxuICAgICkpXG4gIH1cbjwvZGl2Plxuey8qIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNiBzbTpnYXAtNiB4bDpnYXAtMTBcIj5cbiAgICAgIHtcbiAgICAgICAgbGVkZGF0YS5tYXAoKGl0ZW0sIGluZCkgPT4gKFxuICAgICAgICAgIDxkaXYgc3R5bGU9e3t3aWR0aDonNDAwcHgnfX0ga2V5PXtpbmR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgcC02IG14LWF1dG8gbWF4LXctbGcgdGV4dC1jZW50ZXIgcDMgYmctc2xhdGUtMTAwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci15ZWxsb3ctMzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIHhsOnAtOCBkYXJrOmJnLWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmJvcmRlci1ibHVlLTQwMCBob3ZlcjpzaGFkb3ctbGdcIj5cbiAgICAgIDxpbWcgc3JjPXtpdGVtLmlucHV0M30gYWx0PVwiaW1nXCIgY2xhc3NOYW1lPVwic3RhbmRhcmQtaW1hZ2VcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtYmFzZWxpbmUgbXktOFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTIgdGV4dC01eGwgZm9udC1leHRyYWJvbGRcIiAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5pbnB1dDEgfX0+PC9zcGFuPlxuICAgICAgPC9kaXY+IFxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1saWdodCBwNCBzbTp0ZXh0LWxnIGRhcms6dGV4dC1ncmF5LTQwMFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdHJ1bmNhdGVUZXh0KGl0ZW0uaW5wdXQxLCBNQVhfV09SRFMpIH19PjwvcD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvQmlnQmxvZz9pZD0ke2l0ZW0uaWR9YH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTIwMCB2aWEtcmVkLTMwMCB0by15ZWxsb3ctMjAwIGhvdmVyOmJnLWdyYWRpZW50LXRvLWJsIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1yZWQtMTAwIGRhcms6Zm9jdXM6cmluZy1yZWQtNDAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBtZS0yIG1iLTJcIj5SZWFkIE1vcmU8L0xpbms+XG4gICAgICAgXG4gICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9kaXY+ICovfVxuXG48Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNvbnRhaW5lciIsIlNFTyIsIkJsb2ciLCJkYXRhIiwic2V0RGF0YSIsImlkIiwiaW5wdXQzIiwiaW5wdXQxIiwibGVkZGF0YSIsInNldGxlRGF0YSIsIkdldEFsbEZlYXR1cmVib3giLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiTUFYX1dPUkRTIiwidHJ1bmNhdGVUZXh0IiwidGV4dCIsIm1heFdvcmRzIiwid29yZHMiLCJzcGxpdCIsImxlbmd0aCIsInNsaWNlIiwiam9pbiIsIm1ldGFEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9nVGl0bGUiLCJvZ0Rlc2NyaXB0aW9uIiwiY29uaWNhbHVybCIsInBsYWludGV4dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiLCJzdHlsZSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJkaXNwbGF5IiwicGFkZGluZyIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIndpZHRoIiwiaW1nIiwic3JjIiwiYWx0IiwiaDMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Blog/page.js\n"));

/***/ })

});