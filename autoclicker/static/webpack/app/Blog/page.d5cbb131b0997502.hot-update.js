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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _seo_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seo/Seo */ \"(app-pages-browser)/./src/app/seo/Seo.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Blog = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            input3: \"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png\",\n            input1: \"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkk\"\n        }\n    ]);\n    const [leddata, setleData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            input3: \"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png\",\n            input1: \"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkk\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        GetAllFeaturebox();\n    }, []);\n    const GetAllFeaturebox = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://65.2.172.195:8081/public/newsbox\").then((res)=>{\n            setData(res.data);\n            console.log(\"data...\", res.data);\n        }).catch((err)=>{\n            console.log(\"err\", err);\n        });\n    };\n    const MAX_WORDS = 25;\n    const truncateText = (text, maxWords)=>{\n        const words = text.split(\" \");\n        if (words.length > maxWords) {\n            return words.slice(0, maxWords).join(\" \") + \"...\";\n        }\n        return text;\n    };\n    let metaData = {\n        title: \"blog page\",\n        description: \"blog decription\",\n        ogTitle: \"blog ogtitle\",\n        ogDescription: \"blog ogtitle Description\",\n        conicalurl: \"conicalurl\" || 0,\n        plaintext: \"blog plaintext\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_seo_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: metaData === null || metaData === void 0 ? void 0 : metaData.title,\n                description: metaData === null || metaData === void 0 ? void 0 : metaData.description,\n                ogTitle: metaData === null || metaData === void 0 ? void 0 : metaData.ogTitle,\n                ogDescription: metaData === null || metaData === void 0 ? void 0 : metaData.ogDescription,\n                plaintext: metaData === null || metaData === void 0 ? void 0 : metaData.plaintext,\n                conicalurl: metaData === null || metaData === void 0 ? void 0 : metaData.conicalurl\n            }, void 0, false, {\n                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                lineNumber: 64,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-white dark:bg-gray-900 p0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto max-w-screen-md text-center mb-8 lg:mb-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 p4 dark:text-white\",\n                                    children: \"AutoClicker\"\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                    lineNumber: 69,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 p4\",\n                                    children: \"A full-fledged autoclicker with two modes of autoclicking\"\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                            lineNumber: 68,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-3 gap-6 sm:gap-6 xl:gap-10\",\n                            children: leddata.map((item, ind)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    style: {\n                                        width: \"400px\"\n                                    },\n                                    className: \"flex flex-col p-6 mx-auto max-w-lg text-center p3 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: item.input3,\n                                            alt: \"img\",\n                                            classeName: \"standard-image\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                            lineNumber: 76,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"flex justify-center items-baseline my-8\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                class: \"mr-2 text-5xl font-extrabold\",\n                                                dangerouslySetInnerHTML: {\n                                                    __html: item.input1\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                                lineNumber: 78,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                            lineNumber: 77,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-light p4 sm:text-lg dark:text-gray-400\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: truncateText(item.input1, MAX_WORDS)\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                            lineNumber: 80,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/BigBlog?id=\".concat(item.id),\n                                            className: \"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2\",\n                                            children: \"Read More\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                            lineNumber: 81,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    ]\n                                }, ind, true, {\n                                    fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 11\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                            lineNumber: 72,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                    lineNumber: 67,\n                    columnNumber: 3\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\Blog\\\\page.js\",\n                lineNumber: 66,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Blog, \"Cpb2A2UM2e6pqP5OJ9+GhnshNS0=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQmxvZy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM2QjtBQUNxQjtBQUN4QjtBQUNrQjtBQUNmO0FBRTdCLE1BQU1PLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO1FBQzlCO1lBQ0VPLElBQUc7WUFDSEMsUUFBTztZQUNQQyxRQUFPO1FBRVQ7S0FDRDtJQUNELE1BQU0sQ0FBQ0MsU0FBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztRQUNuQztZQUNFTyxJQUFHO1lBQ0hDLFFBQU87WUFDUEMsUUFBTztRQUVUO0tBQ0Q7SUFHTFYsZ0RBQVNBLENBQUM7UUFDTmE7SUFDRixHQUFFLEVBQUU7SUFDRixNQUFNQSxtQkFBbUI7UUFDckJYLDZDQUFLQSxDQUFDWSxHQUFHLENBQUMsMkNBQTJDQyxJQUFJLENBQUMsQ0FBQ0M7WUFDdkRULFFBQVFTLElBQUlWLElBQUk7WUFDaEJXLFFBQVFDLEdBQUcsQ0FBQyxXQUFVRixJQUFJVixJQUFJO1FBQ2hDLEdBQUdhLEtBQUssQ0FBQyxDQUFDQztZQUNSSCxRQUFRQyxHQUFHLENBQUMsT0FBTUU7UUFDcEI7SUFFTjtJQUlBLE1BQU1DLFlBQVk7SUFFbEIsTUFBTUMsZUFBZSxDQUFDQyxNQUFNQztRQUMxQixNQUFNQyxRQUFRRixLQUFLRyxLQUFLLENBQUM7UUFDekIsSUFBSUQsTUFBTUUsTUFBTSxHQUFHSCxVQUFVO1lBQzNCLE9BQU9DLE1BQU1HLEtBQUssQ0FBQyxHQUFHSixVQUFVSyxJQUFJLENBQUMsT0FBTztRQUM5QztRQUNBLE9BQU9OO0lBQ1Q7SUFDQSxJQUFJTyxXQUFXO1FBQ2JDLE9BQU87UUFDUEMsYUFBYTtRQUNiQyxTQUFTO1FBQ1RDLGVBQWU7UUFDZkMsWUFDSSxnQkFDQyxDQUFxQjtRQUMxQkMsV0FBVztJQUNiO0lBQ0YscUJBRUY7OzBCQUNBLDhEQUFDaEMsZ0RBQUdBO2dCQUFDMkIsS0FBSyxFQUFFRCxxQkFBQUEsK0JBQUFBLFNBQVVDLEtBQUs7Z0JBQUVDLFdBQVcsRUFBRUYscUJBQUFBLCtCQUFBQSxTQUFVRSxXQUFXO2dCQUFFQyxPQUFPLEVBQUVILHFCQUFBQSwrQkFBQUEsU0FBVUcsT0FBTztnQkFBRUMsYUFBYSxFQUFFSixxQkFBQUEsK0JBQUFBLFNBQVVJLGFBQWE7Z0JBQUVFLFNBQVMsRUFBRU4scUJBQUFBLCtCQUFBQSxTQUFVTSxTQUFTO2dCQUFFRCxVQUFVLEVBQUVMLHFCQUFBQSwrQkFBQUEsU0FBVUssVUFBVTs7Ozs7OzBCQUVyTSw4REFBQ0U7Z0JBQVFDLFdBQVU7MEJBQ2pCLDRFQUFDQztvQkFBSUQsV0FBVTs7c0NBQ2IsOERBQUNDOzRCQUFJRCxXQUFVOzs4Q0FDYiw4REFBQ0U7b0NBQUdGLFdBQVU7OENBQStFOzs7Ozs7OENBQzdGLDhEQUFDRztvQ0FBRUgsV0FBVTs4Q0FBaUU7Ozs7Ozs7Ozs7OztzQ0FFaEYsOERBQUNDOzRCQUFJRCxXQUFVO3NDQUVYM0IsUUFBUStCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxvQkFDakIsOERBQUNMO29DQUFJTSxPQUFPO3dDQUFDQyxPQUFNO29DQUFPO29DQUFhUixXQUFVOztzREFDckQsOERBQUNTOzRDQUFJQyxLQUFLTCxLQUFLbEMsTUFBTTs0Q0FBRXdDLEtBQUk7NENBQU1DLFlBQVc7Ozs7OztzREFDNUMsOERBQUNYOzRDQUFJWSxPQUFNO3NEQUNULDRFQUFDQztnREFBS0QsT0FBTTtnREFBaUNFLHlCQUF5QjtvREFBRUMsUUFBUVgsS0FBS2pDLE1BQU07Z0RBQUM7Ozs7Ozs7Ozs7O3NEQUU5Riw4REFBQytCOzRDQUFFSCxXQUFVOzRDQUE4Q2UseUJBQXlCO2dEQUFFQyxRQUFRaEMsYUFBYXFCLEtBQUtqQyxNQUFNLEVBQUVXOzRDQUFXOzs7Ozs7c0RBQ25JLDhEQUFDdkIsaURBQUlBOzRDQUFDeUQsTUFBTSxlQUF1QixPQUFSWixLQUFLbkMsRUFBRTs0Q0FBSThCLFdBQVU7c0RBQTRPOzs7Ozs7O21DQU50UE07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUI1QztHQXBGTXZDO0tBQUFBO0FBc0ZOLCtEQUFlQSxJQUFJQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvQmxvZy9wYWdlLmpzP2NhODYiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IFNFTyBmcm9tIFwiLi4vc2VvL1Nlb1wiO1xuXG5jb25zdCBCbG9nID0gKCkgPT4ge1xuICAgIGNvbnN0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGUoW1xuICAgICAge1xuICAgICAgICBpZDoxLFxuICAgICAgICBpbnB1dDM6XCJodHRwczovLzUuaW1pbWcuY29tL2RhdGE1L1NFTExFUi9EZWZhdWx0LzIwMjMvNy8zMjYzNzEwNTUvQVAvQlYvU1EvNDMyMjIzNTUvY2lmZXJvbi1yZXN0YXVyYW50LWJpbGxpbmctc29mdHdhcmUtMjUweDI1MC5wbmdcIixcbiAgICAgICAgaW5wdXQxOlwiamhmamhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhra2tcIixcbiAgICAgICAgXG4gICAgICB9XG4gICAgXSk7XG4gICAgY29uc3QgW2xlZGRhdGEsc2V0bGVEYXRhXSA9IHVzZVN0YXRlKFtcbiAgICAgIHtcbiAgICAgICAgaWQ6MSxcbiAgICAgICAgaW5wdXQzOlwiaHR0cHM6Ly81LmltaW1nLmNvbS9kYXRhNS9TRUxMRVIvRGVmYXVsdC8yMDIzLzcvMzI2MzcxMDU1L0FQL0JWL1NRLzQzMjIyMzU1L2NpZmVyb24tcmVzdGF1cmFudC1iaWxsaW5nLXNvZnR3YXJlLTI1MHgyNTAucG5nXCIsXG4gICAgICAgIGlucHV0MTpcImpoZmpoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa2trXCIsXG4gICAgICAgIFxuICAgICAgfVxuICAgIF0pO1xuICAgIFxuICAgIFxudXNlRWZmZWN0KCgpPT57XG4gICAgR2V0QWxsRmVhdHVyZWJveCgpO1xuICB9LFtdKTtcbiAgICBjb25zdCBHZXRBbGxGZWF0dXJlYm94ID0gKCk9PntcbiAgICAgICAgYXhpb3MuZ2V0KCdodHRwOi8vNjUuMi4xNzIuMTk1OjgwODEvcHVibGljL25ld3Nib3gnKS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBzZXREYXRhKHJlcy5kYXRhKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkYXRhLi4uXCIscmVzLmRhdGEpXG4gICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsZXJyKVxuICAgICAgICAgIH0pXG4gICAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgY29uc3QgTUFYX1dPUkRTID0gMjU7XG5cbiAgICBjb25zdCB0cnVuY2F0ZVRleHQgPSAodGV4dCwgbWF4V29yZHMpID0+IHtcbiAgICAgIGNvbnN0IHdvcmRzID0gdGV4dC5zcGxpdCgnICcpO1xuICAgICAgaWYgKHdvcmRzLmxlbmd0aCA+IG1heFdvcmRzKSB7XG4gICAgICAgIHJldHVybiB3b3Jkcy5zbGljZSgwLCBtYXhXb3Jkcykuam9pbignICcpICsgJy4uLic7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGV4dDtcbiAgICB9O1xuICAgIGxldCBtZXRhRGF0YSA9IHtcbiAgICAgIHRpdGxlOiBcImJsb2cgcGFnZVwiLFxuICAgICAgZGVzY3JpcHRpb246IFwiYmxvZyBkZWNyaXB0aW9uXCIsXG4gICAgICBvZ1RpdGxlOiBcImJsb2cgb2d0aXRsZVwiLFxuICAgICAgb2dEZXNjcmlwdGlvbjogXCJibG9nIG9ndGl0bGUgRGVzY3JpcHRpb25cIixcbiAgICAgIGNvbmljYWx1cmxcbiAgICAgICAgOiBcImNvbmljYWx1cmxcIlxuICAgICAgICB8fCBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIHBsYWludGV4dDogXCJibG9nIHBsYWludGV4dFwiLFxuICAgIH1cbiAgcmV0dXJuIChcbiAgXG48PlxuPFNFTyB0aXRsZT17bWV0YURhdGE/LnRpdGxlfSBkZXNjcmlwdGlvbj17bWV0YURhdGE/LmRlc2NyaXB0aW9ufSBvZ1RpdGxlPXttZXRhRGF0YT8ub2dUaXRsZX0gb2dEZXNjcmlwdGlvbj17bWV0YURhdGE/Lm9nRGVzY3JpcHRpb259IHBsYWludGV4dD17bWV0YURhdGE/LnBsYWludGV4dH0gY29uaWNhbHVybD17bWV0YURhdGE/LmNvbmljYWx1cmx9ICAvPlxuXG48c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwIHAwXCI+XG4gIDxkaXYgY2xhc3NOYW1lPVwicHktOCBweC00IG14LWF1dG8gbWF4LXctc2NyZWVuLXhsIGxnOnB5LTE2IGxnOnB4LTZcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctc2NyZWVuLW1kIHRleHQtY2VudGVyIG1iLTggbGc6bWItMTJcIj5cbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00IHRleHQtNHhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgcDQgZGFyazp0ZXh0LXdoaXRlXCI+QXV0b0NsaWNrZXI8L2gyPlxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgc206dGV4dC14bCBkYXJrOnRleHQtZ3JheS00MDAgcDRcIj5BIGZ1bGwtZmxlZGdlZCBhdXRvY2xpY2tlciB3aXRoIHR3byBtb2RlcyBvZiBhdXRvY2xpY2tpbmc8L3A+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC02IHNtOmdhcC02IHhsOmdhcC0xMFwiPlxuICAgICAge1xuICAgICAgICBsZWRkYXRhLm1hcCgoaXRlbSwgaW5kKSA9PiAoXG4gICAgICAgICAgPGRpdiBzdHlsZT17e3dpZHRoOic0MDBweCd9fSBrZXk9e2luZH0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBwLTYgbXgtYXV0byBtYXgtdy1sZyB0ZXh0LWNlbnRlciBwMyBiZy1zbGF0ZS0xMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXllbGxvdy0zMDAgZGFyazpib3JkZXItZ3JheS02MDAgeGw6cC04IGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Ym9yZGVyLWJsdWUtNDAwIGhvdmVyOnNoYWRvdy1sZ1wiPlxuICAgICAgPGltZyBzcmM9e2l0ZW0uaW5wdXQzfSBhbHQ9XCJpbWdcIiBjbGFzc2VOYW1lPVwic3RhbmRhcmQtaW1hZ2VcIiAvPlxuICAgICAgPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtYmFzZWxpbmUgbXktOFwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTIgdGV4dC01eGwgZm9udC1leHRyYWJvbGRcIiAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5pbnB1dDEgfX0+PC9zcGFuPlxuICAgICAgPC9kaXY+IFxuICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1saWdodCBwNCBzbTp0ZXh0LWxnIGRhcms6dGV4dC1ncmF5LTQwMFwiIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogdHJ1bmNhdGVUZXh0KGl0ZW0uaW5wdXQxLCBNQVhfV09SRFMpIH19PjwvcD5cbiAgICAgIDxMaW5rIGhyZWY9e2AvQmlnQmxvZz9pZD0ke2l0ZW0uaWR9YH0gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTkwMCBiZy1ncmFkaWVudC10by1yIGZyb20tcmVkLTIwMCB2aWEtcmVkLTMwMCB0by15ZWxsb3ctMjAwIGhvdmVyOmJnLWdyYWRpZW50LXRvLWJsIGZvY3VzOnJpbmctNCBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy1yZWQtMTAwIGRhcms6Zm9jdXM6cmluZy1yZWQtNDAwIGZvbnQtbWVkaXVtIHJvdW5kZWQtbGcgdGV4dC1zbSBweC01IHB5LTIuNSB0ZXh0LWNlbnRlciBtZS0yIG1iLTJcIj5SZWFkIE1vcmU8L0xpbms+XG4gICAgICAgXG4gICAgPC9kaXY+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuXG48Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBCbG9nXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNvbnRhaW5lciIsIlNFTyIsIkJsb2ciLCJkYXRhIiwic2V0RGF0YSIsImlkIiwiaW5wdXQzIiwiaW5wdXQxIiwibGVkZGF0YSIsInNldGxlRGF0YSIsIkdldEFsbEZlYXR1cmVib3giLCJnZXQiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNhdGNoIiwiZXJyIiwiTUFYX1dPUkRTIiwidHJ1bmNhdGVUZXh0IiwidGV4dCIsIm1heFdvcmRzIiwid29yZHMiLCJzcGxpdCIsImxlbmd0aCIsInNsaWNlIiwiam9pbiIsIm1ldGFEYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsIm9nVGl0bGUiLCJvZ0Rlc2NyaXB0aW9uIiwiY29uaWNhbHVybCIsInBsYWludGV4dCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJkaXYiLCJoMiIsInAiLCJtYXAiLCJpdGVtIiwiaW5kIiwic3R5bGUiLCJ3aWR0aCIsImltZyIsInNyYyIsImFsdCIsImNsYXNzZU5hbWUiLCJjbGFzcyIsInNwYW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Blog/page.js\n"));

/***/ })

});