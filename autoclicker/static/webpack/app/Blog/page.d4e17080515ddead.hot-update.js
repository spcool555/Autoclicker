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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _seo_Seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seo/Seo */ \"(app-pages-browser)/./src/app/seo/Seo.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst Blog = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            input3: \"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png\",\n            input1: \"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkk\"\n        }\n    ]);\n    const [leddata, setleData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\n        {\n            id: 1,\n            input3: \"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png\",\n            input1: \"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk\"\n        },\n        {\n            id: 2,\n            input3: \"https://5.imimg.com/data5/SELLER/Default/2023/7/326371055/AP/BV/SQ/43222355/ciferon-restaurant-billing-software-250x250.png\",\n            input1: \"jhfjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhkkkkkkkkkkkkkkkkkkkkkk\"\n        }\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        GetAllFeaturebox();\n    }, []);\n    const GetAllFeaturebox = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].get(\"http://65.2.172.195:8081/public/newsbox\").then((res)=>{\n            const processedData = res.data.map((newsItem)=>({\n                    ...newsItem,\n                    imageUrl: \"data:image/jpeg;base64,\".concat(newsItem.input3) // Assuming input3 contains base64 encoded image data\n                }));\n            setData(processedData);\n            console.log(\"Processed data:\", processedData);\n        }).catch((err)=>{\n            console.log(\"Error fetching data:\", err);\n        });\n    };\n    const MAX_WORDS = 15;\n    const truncateText = (text, maxWords)=>{\n        const words = text.split(\" \");\n        if (words.length > maxWords) {\n            return words.slice(0, maxWords).join(\" \") + \"...\";\n        }\n        return text;\n    };\n    let metaData = {\n        title: \"blog page\",\n        description: \"blog decription\",\n        ogTitle: \"blog ogtitle\",\n        ogDescription: \"blog ogtitle Description\",\n        conicalurl: \"conicalurl\" || 0,\n        plaintext: \"blog plaintext\"\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_seo_Seo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                title: metaData === null || metaData === void 0 ? void 0 : metaData.title,\n                description: metaData === null || metaData === void 0 ? void 0 : metaData.description,\n                ogTitle: metaData === null || metaData === void 0 ? void 0 : metaData.ogTitle,\n                ogDescription: metaData === null || metaData === void 0 ? void 0 : metaData.ogDescription,\n                plaintext: metaData === null || metaData === void 0 ? void 0 : metaData.plaintext,\n                conicalurl: metaData === null || metaData === void 0 ? void 0 : metaData.conicalurl\n            }, void 0, false, {\n                fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                lineNumber: 76,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"bg-white dark:bg-gray-900 p0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto max-w-screen-md text-center mb-8 lg:mb-12\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                    className: \"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 p4 dark:text-white\",\n                                    children: \"AutoClicker\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 7\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 p4\",\n                                    children: \"A full-fledged autoclicker with two modes of autoclicking\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 7\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                            lineNumber: 80,\n                            columnNumber: 5\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"grid grid-cols-3 gap-6 sm:gap-6 xl:gap-10\",\n                            children: data.map((item, ind)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    class: \"flex flex-col p-6 mx-auto max-w-lg text-center p3 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: item.imageUrl,\n                                            alt: \"img\",\n                                            className: \"standard-image\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                            lineNumber: 88,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            class: \"flex justify-center items-baseline my-8\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                class: \"mr-2 text-5xl font-extrabold\",\n                                                dangerouslySetInnerHTML: {\n                                                    __html: item.input1\n                                                }\n                                            }, void 0, false, {\n                                                fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                                lineNumber: 90,\n                                                columnNumber: 9\n                                            }, undefined)\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                            lineNumber: 89,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"font-light p4 sm:text-lg dark:text-gray-400\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: truncateText(item.input1, MAX_WORDS)\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                            lineNumber: 92,\n                                            columnNumber: 7\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                            href: \"/BigBlog?id=\".concat(item.id),\n                                            className: \"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2\",\n                                            children: \"Read More\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                            lineNumber: 93,\n                                            columnNumber: 7\n                                        }, undefined)\n                                    ]\n                                }, ind, true, {\n                                    fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                    lineNumber: 87,\n                                    columnNumber: 11\n                                }, undefined))\n                        }, void 0, false, {\n                            fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                            lineNumber: 84,\n                            columnNumber: 5\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                    lineNumber: 79,\n                    columnNumber: 3\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                lineNumber: 78,\n                columnNumber: 1\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    flexWrap: \"wrap\",\n                    justifyContent: \"center\",\n                    display: \"flex\",\n                    padding: \"30px\"\n                },\n                children: leddata.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            width: \"400px\"\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                    src: item.input3,\n                                    alt: \"img\",\n                                    className: \"standard-image\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                    lineNumber: 120,\n                                    columnNumber: 3\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                lineNumber: 119,\n                                columnNumber: 3\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                    children: item.input1\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                    lineNumber: 123,\n                                    columnNumber: 5\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                lineNumber: 122,\n                                columnNumber: 3\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                        lineNumber: 118,\n                        columnNumber: 1\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                lineNumber: 112,\n                columnNumber: 1\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Blog, \"dBRzLPQ95s0j/dDVHHzWNWs6ksg=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQmxvZy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUM2QjtBQUNxQjtBQUN4QjtBQUNrQjtBQUNmO0FBRTdCLE1BQU1PLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUdOLCtDQUFRQSxDQUFDO1FBQzlCO1lBQ0VPLElBQUc7WUFDSEMsUUFBTztZQUNQQyxRQUFPO1FBRVQ7S0FDRDtJQUNELE1BQU0sQ0FBQ0MsU0FBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztRQUNuQztZQUNFTyxJQUFHO1lBQ0hDLFFBQU87WUFDUEMsUUFBTztRQUVUO1FBQ0E7WUFDRUYsSUFBRztZQUNIQyxRQUFPO1lBQ1BDLFFBQU87UUFFVDtLQUNEO0lBR0xWLGdEQUFTQSxDQUFDO1FBQ05hO0lBQ0YsR0FBRSxFQUFFO0lBQ0osTUFBTUEsbUJBQW1CO1FBQ3ZCWCw2Q0FBS0EsQ0FBQ1ksR0FBRyxDQUFDLHdDQUNQQyxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxNQUFNQyxnQkFBZ0JELElBQUlWLElBQUksQ0FBQ1ksR0FBRyxDQUFDQyxDQUFBQSxXQUFhO29CQUM5QyxHQUFHQSxRQUFRO29CQUNYQyxVQUFVLDBCQUEwQyxPQUFoQkQsU0FBU1YsTUFBTSxFQUFHLHFEQUFxRDtnQkFDN0c7WUFDQUYsUUFBUVU7WUFDUkksUUFBUUMsR0FBRyxDQUFDLG1CQUFtQkw7UUFDakMsR0FDQ00sS0FBSyxDQUFDLENBQUNDO1lBQ05ILFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JFO1FBQ3RDO0lBQ0o7SUFLRSxNQUFNQyxZQUFZO0lBRWxCLE1BQU1DLGVBQWUsQ0FBQ0MsTUFBTUM7UUFDMUIsTUFBTUMsUUFBUUYsS0FBS0csS0FBSyxDQUFDO1FBQ3pCLElBQUlELE1BQU1FLE1BQU0sR0FBR0gsVUFBVTtZQUMzQixPQUFPQyxNQUFNRyxLQUFLLENBQUMsR0FBR0osVUFBVUssSUFBSSxDQUFDLE9BQU87UUFDOUM7UUFDQSxPQUFPTjtJQUNUO0lBQ0EsSUFBSU8sV0FBVztRQUNiQyxPQUFPO1FBQ1BDLGFBQWE7UUFDYkMsU0FBUztRQUNUQyxlQUFlO1FBQ2ZDLFlBQ0ksZ0JBQ0MsQ0FBcUI7UUFDMUJDLFdBQVc7SUFDYjtJQUNGLHFCQUVGOzswQkFDQSw4REFBQ3BDLGdEQUFHQTtnQkFBQytCLEtBQUssRUFBRUQscUJBQUFBLCtCQUFBQSxTQUFVQyxLQUFLO2dCQUFFQyxXQUFXLEVBQUVGLHFCQUFBQSwrQkFBQUEsU0FBVUUsV0FBVztnQkFBRUMsT0FBTyxFQUFFSCxxQkFBQUEsK0JBQUFBLFNBQVVHLE9BQU87Z0JBQUVDLGFBQWEsRUFBRUoscUJBQUFBLCtCQUFBQSxTQUFVSSxhQUFhO2dCQUFFRSxTQUFTLEVBQUVOLHFCQUFBQSwrQkFBQUEsU0FBVU0sU0FBUztnQkFBRUQsVUFBVSxFQUFFTCxxQkFBQUEsK0JBQUFBLFNBQVVLLFVBQVU7Ozs7OzswQkFFck0sOERBQUNFO2dCQUFRQyxXQUFVOzBCQUNqQiw0RUFBQ0M7b0JBQUlELFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBSUQsV0FBVTs7OENBQ2IsOERBQUNFO29DQUFHRixXQUFVOzhDQUErRTs7Ozs7OzhDQUM3Riw4REFBQ0c7b0NBQUVILFdBQVU7OENBQWlFOzs7Ozs7Ozs7Ozs7c0NBRWhGLDhEQUFDQzs0QkFBSUQsV0FBVTtzQ0FFWHBDLEtBQUtZLEdBQUcsQ0FBQyxDQUFDNEIsTUFBTUMsb0JBQ2QsOERBQUNKO29DQUFjSyxPQUFNOztzREFDekIsOERBQUNDOzRDQUFJQyxLQUFLSixLQUFLMUIsUUFBUTs0Q0FBRStCLEtBQUk7NENBQU1ULFdBQVU7Ozs7OztzREFDN0MsOERBQUNDOzRDQUFJSyxPQUFNO3NEQUNULDRFQUFDSTtnREFBS0osT0FBTTtnREFBaUNLLHlCQUF5QjtvREFBRUMsUUFBUVIsS0FBS3BDLE1BQU07Z0RBQUM7Ozs7Ozs7Ozs7O3NEQUU5Riw4REFBQ21DOzRDQUFFSCxXQUFVOzRDQUE4Q1cseUJBQXlCO2dEQUFFQyxRQUFRNUIsYUFBYW9CLEtBQUtwQyxNQUFNLEVBQUVlOzRDQUFXOzs7Ozs7c0RBQ25JLDhEQUFDM0IsaURBQUlBOzRDQUFDeUQsTUFBTSxlQUF1QixPQUFSVCxLQUFLdEMsRUFBRTs0Q0FBSWtDLFdBQVU7c0RBQTRPOzs7Ozs7O21DQU45UUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkF5QnBCLDhEQUFDSjtnQkFBSWEsT0FBTztvQkFBQ0MsVUFBVTtvQkFDbkJDLGdCQUFnQjtvQkFDaEJDLFNBQVM7b0JBQ1RDLFNBQVM7Z0JBQU07MEJBRWZqRCxRQUFRTyxHQUFHLENBQUMsQ0FBQzRCLE1BQUtlLHNCQUN0Qiw4REFBQ2xCO3dCQUFnQmEsT0FBTzs0QkFBQ00sT0FBTTt3QkFBTzs7MENBQ3BDLDhEQUFDbkI7MENBQ0QsNEVBQUNNO29DQUFJQyxLQUFLSixLQUFLckMsTUFBTTtvQ0FBRTBDLEtBQUk7b0NBQU1ULFdBQVU7Ozs7Ozs7Ozs7OzBDQUUzQyw4REFBQ0M7MENBQ0MsNEVBQUNvQjs4Q0FBT2pCLEtBQUtwQyxNQUFNOzs7Ozs7Ozs7Ozs7dUJBTGJtRDs7Ozs7Ozs7Ozs7O0FBZVY7R0E3SE14RDtLQUFBQTtBQStITiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL0Jsb2cvcGFnZS5qcz9jYTg2Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xyXG5pbXBvcnQgU0VPIGZyb20gXCIuLi9zZW8vU2VvXCI7XHJcblxyXG5jb25zdCBCbG9nID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2RhdGEsc2V0RGF0YV0gPSB1c2VTdGF0ZShbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDoxLFxyXG4gICAgICAgIGlucHV0MzpcImh0dHBzOi8vNS5pbWltZy5jb20vZGF0YTUvU0VMTEVSL0RlZmF1bHQvMjAyMy83LzMyNjM3MTA1NS9BUC9CVi9TUS80MzIyMjM1NS9jaWZlcm9uLXJlc3RhdXJhbnQtYmlsbGluZy1zb2Z0d2FyZS0yNTB4MjUwLnBuZ1wiLFxyXG4gICAgICAgIGlucHV0MTpcImpoZmpoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa2trXCIsXHJcbiAgICAgICAgXHJcbiAgICAgIH1cclxuICAgIF0pO1xyXG4gICAgY29uc3QgW2xlZGRhdGEsc2V0bGVEYXRhXSA9IHVzZVN0YXRlKFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOjEsXHJcbiAgICAgICAgaW5wdXQzOlwiaHR0cHM6Ly81LmltaW1nLmNvbS9kYXRhNS9TRUxMRVIvRGVmYXVsdC8yMDIzLzcvMzI2MzcxMDU1L0FQL0JWL1NRLzQzMjIyMzU1L2NpZmVyb24tcmVzdGF1cmFudC1iaWxsaW5nLXNvZnR3YXJlLTI1MHgyNTAucG5nXCIsXHJcbiAgICAgICAgaW5wdXQxOlwiamhmamhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhra2tra2tra2tra2tra2tra2tra2tra2tra2tra2trXCIsXHJcbiAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDoyLFxyXG4gICAgICAgIGlucHV0MzpcImh0dHBzOi8vNS5pbWltZy5jb20vZGF0YTUvU0VMTEVSL0RlZmF1bHQvMjAyMy83LzMyNjM3MTA1NS9BUC9CVi9TUS80MzIyMjM1NS9jaWZlcm9uLXJlc3RhdXJhbnQtYmlsbGluZy1zb2Z0d2FyZS0yNTB4MjUwLnBuZ1wiLFxyXG4gICAgICAgIGlucHV0MTpcImpoZmpoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoaGhoa2tra2tra2tra2tra2tra2tra2tra1wiLFxyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICBdKTtcclxuICAgIFxyXG4gICAgXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgR2V0QWxsRmVhdHVyZWJveCgpO1xyXG4gIH0sW10pO1xyXG4gIGNvbnN0IEdldEFsbEZlYXR1cmVib3ggPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9wdWJsaWMvbmV3c2JveCcpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9jZXNzZWREYXRhID0gcmVzLmRhdGEubWFwKG5ld3NJdGVtID0+ICh7XHJcbiAgICAgICAgICAuLi5uZXdzSXRlbSxcclxuICAgICAgICAgIGltYWdlVXJsOiBgZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwke25ld3NJdGVtLmlucHV0M31gIC8vIEFzc3VtaW5nIGlucHV0MyBjb250YWlucyBiYXNlNjQgZW5jb2RlZCBpbWFnZSBkYXRhXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHNldERhdGEocHJvY2Vzc2VkRGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9jZXNzZWQgZGF0YTpcIiwgcHJvY2Vzc2VkRGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIFxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IE1BWF9XT1JEUyA9IDE1O1xyXG5cclxuICAgIGNvbnN0IHRydW5jYXRlVGV4dCA9ICh0ZXh0LCBtYXhXb3JkcykgPT4ge1xyXG4gICAgICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoJyAnKTtcclxuICAgICAgaWYgKHdvcmRzLmxlbmd0aCA+IG1heFdvcmRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHdvcmRzLnNsaWNlKDAsIG1heFdvcmRzKS5qb2luKCcgJykgKyAnLi4uJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGV4dDtcclxuICAgIH07XHJcbiAgICBsZXQgbWV0YURhdGEgPSB7XHJcbiAgICAgIHRpdGxlOiBcImJsb2cgcGFnZVwiLFxyXG4gICAgICBkZXNjcmlwdGlvbjogXCJibG9nIGRlY3JpcHRpb25cIixcclxuICAgICAgb2dUaXRsZTogXCJibG9nIG9ndGl0bGVcIixcclxuICAgICAgb2dEZXNjcmlwdGlvbjogXCJibG9nIG9ndGl0bGUgRGVzY3JpcHRpb25cIixcclxuICAgICAgY29uaWNhbHVybFxyXG4gICAgICAgIDogXCJjb25pY2FsdXJsXCJcclxuICAgICAgICB8fCBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcclxuICAgICAgcGxhaW50ZXh0OiBcImJsb2cgcGxhaW50ZXh0XCIsXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuICBcclxuPD5cclxuPFNFTyB0aXRsZT17bWV0YURhdGE/LnRpdGxlfSBkZXNjcmlwdGlvbj17bWV0YURhdGE/LmRlc2NyaXB0aW9ufSBvZ1RpdGxlPXttZXRhRGF0YT8ub2dUaXRsZX0gb2dEZXNjcmlwdGlvbj17bWV0YURhdGE/Lm9nRGVzY3JpcHRpb259IHBsYWludGV4dD17bWV0YURhdGE/LnBsYWludGV4dH0gY29uaWNhbHVybD17bWV0YURhdGE/LmNvbmljYWx1cmx9ICAvPlxyXG5cclxuPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMCBwMFwiPlxyXG4gIDxkaXYgY2xhc3NOYW1lPVwicHktOCBweC00IG14LWF1dG8gbWF4LXctc2NyZWVuLXhsIGxnOnB5LTE2IGxnOnB4LTZcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy1zY3JlZW4tbWQgdGV4dC1jZW50ZXIgbWItOCBsZzptYi0xMlwiPlxyXG4gICAgICA8aDIgY2xhc3NOYW1lPVwibWItNCB0ZXh0LTR4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHA0IGRhcms6dGV4dC13aGl0ZVwiPkF1dG9DbGlja2VyPC9oMj5cclxuICAgICAgPHAgY2xhc3NOYW1lPVwibWItNSBmb250LWxpZ2h0IHRleHQtZ3JheS01MDAgc206dGV4dC14bCBkYXJrOnRleHQtZ3JheS00MDAgcDRcIj5BIGZ1bGwtZmxlZGdlZCBhdXRvY2xpY2tlciB3aXRoIHR3byBtb2RlcyBvZiBhdXRvY2xpY2tpbmc8L3A+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMyBnYXAtNiBzbTpnYXAtNiB4bDpnYXAtMTBcIj5cclxuICAgICAge1xyXG4gICAgICAgIGRhdGEubWFwKChpdGVtLCBpbmQpID0+IChcclxuICAgICAgICAgIDxkaXYga2V5PXtpbmR9IGNsYXNzPVwiZmxleCBmbGV4LWNvbCBwLTYgbXgtYXV0byBtYXgtdy1sZyB0ZXh0LWNlbnRlciBwMyBiZy1zbGF0ZS0xMDAgcm91bmRlZC1sZyBib3JkZXIgYm9yZGVyLXllbGxvdy0zMDAgZGFyazpib3JkZXItZ3JheS02MDAgeGw6cC04IGRhcms6YmctZ3JheS04MDAgZGFyazp0ZXh0LXdoaXRlIHRyYW5zaXRpb24gZHVyYXRpb24tMzAwIGVhc2UtaW4tb3V0IHRyYW5zZm9ybSBob3ZlcjpzY2FsZS0xMDUgaG92ZXI6Ym9yZGVyLWJsdWUtNDAwIGhvdmVyOnNoYWRvdy1sZ1wiPlxyXG4gICAgICA8aW1nIHNyYz17aXRlbS5pbWFnZVVybH0gYWx0PVwiaW1nXCIgY2xhc3NOYW1lPVwic3RhbmRhcmQtaW1hZ2VcIiAvPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1iYXNlbGluZSBteS04XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJtci0yIHRleHQtNXhsIGZvbnQtZXh0cmFib2xkXCIgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGl0ZW0uaW5wdXQxIH19Pjwvc3Bhbj5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJmb250LWxpZ2h0IHA0IHNtOnRleHQtbGcgZGFyazp0ZXh0LWdyYXktNDAwXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0cnVuY2F0ZVRleHQoaXRlbS5pbnB1dDEsIE1BWF9XT1JEUykgfX0+PC9wPlxyXG4gICAgICA8TGluayBocmVmPXtgL0JpZ0Jsb2c/aWQ9JHtpdGVtLmlkfWB9IGNsYXNzTmFtZT1cInRleHQtZ3JheS05MDAgYmctZ3JhZGllbnQtdG8tciBmcm9tLXJlZC0yMDAgdmlhLXJlZC0zMDAgdG8teWVsbG93LTIwMCBob3ZlcjpiZy1ncmFkaWVudC10by1ibCBmb2N1czpyaW5nLTQgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctcmVkLTEwMCBkYXJrOmZvY3VzOnJpbmctcmVkLTQwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgdGV4dC1jZW50ZXIgbWUtMiBtYi0yXCI+UmVhZCBNb3JlPC9MaW5rPlxyXG4gICAgICAgXHJcbiAgICA8L2Rpdj5cclxuICAgICAgICApKVxyXG4gICAgICB9XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPlxyXG5cclxuXHJcbnsvKiA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBkYXJrOmJnLWdyYXktOTAwIHAwXCI+XHJcbiAgPGRpdiBjbGFzc05hbWU9XCJweS04IHB4LTQgbXgtYXV0byBtYXgtdy1zY3JlZW4teGwgbGc6cHktMTYgbGc6cHgtNlwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LXNjcmVlbi1tZCB0ZXh0LWNlbnRlciBtYi04IGxnOm1iLTEyXCI+XHJcbiAgICAgIDxoMiBjbGFzc05hbWU9XCJtYi00IHRleHQtNHhsIHRyYWNraW5nLXRpZ2h0IGZvbnQtZXh0cmFib2xkIHRleHQtZ3JheS05MDAgcDQgZGFyazp0ZXh0LXdoaXRlXCI+QXV0b0NsaWNrZXI8L2gyPlxyXG4gICAgICA8cCBjbGFzc05hbWU9XCJtYi01IGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBzbTp0ZXh0LXhsIGRhcms6dGV4dC1ncmF5LTQwMCBwNFwiPkEgZnVsbC1mbGVkZ2VkIGF1dG9jbGlja2VyIHdpdGggdHdvIG1vZGVzIG9mIGF1dG9jbGlja2luZzwvcD5cclxuICAgIDwvZGl2PlxyXG4gICBcclxuICA8L2Rpdj5cclxuPC9zZWN0aW9uPiAqL31cclxuPGRpdiBzdHlsZT17e2ZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBwYWRkaW5nOiAnMzBweCd9fT5cclxuICB7XHJcbiAgICBsZWRkYXRhLm1hcCgoaXRlbSxpbmRleCk9PihcclxuPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17e3dpZHRoOic0MDBweCd9fT5cclxuICA8ZGl2PlxyXG4gIDxpbWcgc3JjPXtpdGVtLmlucHV0M30gYWx0PVwiaW1nXCIgY2xhc3NOYW1lPVwic3RhbmRhcmQtaW1hZ2VcIiAvPlxyXG4gIDwvZGl2PlxyXG4gIDxkaXY+XHJcbiAgICA8bGFiZWw+e2l0ZW0uaW5wdXQxfTwvbGFiZWw+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4gICAgKSlcclxuICB9XHJcbjwvZGl2PlxyXG5cclxuXHJcbjwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1xyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNvbnRhaW5lciIsIlNFTyIsIkJsb2ciLCJkYXRhIiwic2V0RGF0YSIsImlkIiwiaW5wdXQzIiwiaW5wdXQxIiwibGVkZGF0YSIsInNldGxlRGF0YSIsIkdldEFsbEZlYXR1cmVib3giLCJnZXQiLCJ0aGVuIiwicmVzIiwicHJvY2Vzc2VkRGF0YSIsIm1hcCIsIm5ld3NJdGVtIiwiaW1hZ2VVcmwiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJNQVhfV09SRFMiLCJ0cnVuY2F0ZVRleHQiLCJ0ZXh0IiwibWF4V29yZHMiLCJ3b3JkcyIsInNwbGl0IiwibGVuZ3RoIiwic2xpY2UiLCJqb2luIiwibWV0YURhdGEiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwib2dUaXRsZSIsIm9nRGVzY3JpcHRpb24iLCJjb25pY2FsdXJsIiwicGxhaW50ZXh0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsImRpdiIsImgyIiwicCIsIml0ZW0iLCJpbmQiLCJjbGFzcyIsImltZyIsInNyYyIsImFsdCIsInNwYW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImhyZWYiLCJzdHlsZSIsImZsZXhXcmFwIiwianVzdGlmeUNvbnRlbnQiLCJkaXNwbGF5IiwicGFkZGluZyIsImluZGV4Iiwid2lkdGgiLCJsYWJlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Blog/page.js\n"));

/***/ })

});