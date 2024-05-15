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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Blog = ()=>{\n    _s();\n    const [data, setData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        GetAllFeaturebox();\n    }, []);\n    const GetAllFeaturebox = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"http://65.2.172.195:8081/public/newsbox\").then((res)=>{\n            const processedData = res.data.map((newsItem)=>({\n                    ...newsItem,\n                    imageUrl: \"data:image/jpeg;base64,\".concat(newsItem.input3) // Assuming input3 contains base64 encoded image data\n                }));\n            setData(processedData);\n            console.log(\"Processed data:\", processedData);\n        }).catch((err)=>{\n            console.log(\"Error fetching data:\", err);\n        });\n    };\n    const MAX_WORDS = 25;\n    const truncateText = (text, maxWords)=>{\n        const words = text.split(\" \");\n        if (words.length > maxWords) {\n            return words.slice(0, maxWords).join(\" \") + \"...\";\n        }\n        return text;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n            class: \"bg-white dark:bg-gray-900 p0\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                class: \"py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"mx-auto max-w-screen-md text-center mb-8 lg:mb-12\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                class: \"mb-4 text-4xl tracking-tight font-extrabold text-gray-900 p4 dark:text-white\",\n                                children: \"AutoClicker\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                lineNumber: 46,\n                                columnNumber: 7\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                class: \"mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400 p4\",\n                                children: \"A full-fledged autoclicker with two modes of autoclicking\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                lineNumber: 47,\n                                columnNumber: 7\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                        lineNumber: 45,\n                        columnNumber: 5\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        class: \"grid grid-cols-3 gap-6 sm:gap-6 xl:gap-10\",\n                        children: data.map((item, ind)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                class: \"flex flex-col p-6 mx-auto max-w-lg text-center p3 bg-slate-100 rounded-lg border border-yellow-300 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition duration-300 ease-in-out transform hover:scale-105 hover:border-blue-400 hover:shadow-lg\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                        src: item.input3,\n                                        alt: \"img\",\n                                        className: \"standard-image\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        class: \"flex justify-center items-baseline my-8\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            class: \"mr-2 text-5xl font-extrabold\",\n                                            dangerouslySetInnerHTML: {\n                                                __html: item.input1\n                                            }\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                            lineNumber: 55,\n                                            columnNumber: 9\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                        lineNumber: 54,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"font-light p4 sm:text-lg dark:text-gray-400\",\n                                        dangerouslySetInnerHTML: {\n                                            __html: truncateText(item.input2, MAX_WORDS)\n                                        }\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                        lineNumber: 57,\n                                        columnNumber: 7\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                                        href: \"/BigBlog?id=\".concat(item.id),\n                                        class: \"text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2\",\n                                        children: \"Read More\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 7\n                                    }, undefined)\n                                ]\n                            }, ind, true, {\n                                fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined))\n                    }, void 0, false, {\n                        fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                        lineNumber: 49,\n                        columnNumber: 5\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n                lineNumber: 44,\n                columnNumber: 3\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"D:\\\\autoclicker\\\\Autoclickers\\\\src\\\\app\\\\Blog\\\\page.js\",\n            lineNumber: 43,\n            columnNumber: 1\n        }, undefined)\n    }, void 0, false);\n};\n_s(Blog, \"FTfFkLfVdcj0Uk2EahF49AUIgmY=\");\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvQmxvZy9wYWdlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzZCO0FBQ3FCO0FBQ3hCO0FBQ2tCO0FBQzVDLE1BQU1NLE9BQU87O0lBQ1QsTUFBTSxDQUFDQyxNQUFLQyxRQUFRLEdBQUdMLCtDQUFRQSxDQUFDLEVBQUU7SUFFdENELGdEQUFTQSxDQUFDO1FBQ05PO0lBQ0YsR0FBRSxFQUFFO0lBQ0osTUFBTUEsbUJBQW1CO1FBQ3ZCTCw2Q0FBS0EsQ0FBQ00sR0FBRyxDQUFDLHdDQUNQQyxJQUFJLENBQUMsQ0FBQ0M7WUFDTCxNQUFNQyxnQkFBZ0JELElBQUlMLElBQUksQ0FBQ08sR0FBRyxDQUFDQyxDQUFBQSxXQUFhO29CQUM5QyxHQUFHQSxRQUFRO29CQUNYQyxVQUFVLDBCQUEwQyxPQUFoQkQsU0FBU0UsTUFBTSxFQUFHLHFEQUFxRDtnQkFDN0c7WUFDQVQsUUFBUUs7WUFDUkssUUFBUUMsR0FBRyxDQUFDLG1CQUFtQk47UUFDakMsR0FDQ08sS0FBSyxDQUFDLENBQUNDO1lBQ05ILFFBQVFDLEdBQUcsQ0FBQyx3QkFBd0JFO1FBQ3RDO0lBQ0o7SUFLRSxNQUFNQyxZQUFZO0lBRWxCLE1BQU1DLGVBQWUsQ0FBQ0MsTUFBTUM7UUFDMUIsTUFBTUMsUUFBUUYsS0FBS0csS0FBSyxDQUFDO1FBQ3pCLElBQUlELE1BQU1FLE1BQU0sR0FBR0gsVUFBVTtZQUMzQixPQUFPQyxNQUFNRyxLQUFLLENBQUMsR0FBR0osVUFBVUssSUFBSSxDQUFDLE9BQU87UUFDOUM7UUFDQSxPQUFPTjtJQUNUO0lBQ0YscUJBRUY7a0JBRUEsNEVBQUNPO1lBQVFDLE9BQU07c0JBQ2IsNEVBQUNDO2dCQUFJRCxPQUFNOztrQ0FDVCw4REFBQ0M7d0JBQUlELE9BQU07OzBDQUNULDhEQUFDRTtnQ0FBR0YsT0FBTTswQ0FBK0U7Ozs7OzswQ0FDekYsOERBQUNHO2dDQUFFSCxPQUFNOzBDQUFpRTs7Ozs7Ozs7Ozs7O2tDQUU1RSw4REFBQ0M7d0JBQUlELE9BQU07a0NBRVB6QixLQUFLTyxHQUFHLENBQUMsQ0FBQ3NCLE1BQU1DLG9CQUNkLDhEQUFDSjtnQ0FBY0QsT0FBTTs7a0RBQ3pCLDhEQUFDTTt3Q0FBSUMsS0FBS0gsS0FBS25CLE1BQU07d0NBQUV1QixLQUFJO3dDQUFNQyxXQUFVOzs7Ozs7a0RBQzNDLDhEQUFDUjt3Q0FBSUQsT0FBTTtrREFDVCw0RUFBQ1U7NENBQUtWLE9BQU07NENBQWlDVyx5QkFBeUI7Z0RBQUVDLFFBQVFSLEtBQUtTLE1BQU07NENBQUM7Ozs7Ozs7Ozs7O2tEQUU5Riw4REFBQ1Y7d0NBQUVNLFdBQVU7d0NBQThDRSx5QkFBeUI7NENBQUVDLFFBQVFyQixhQUFhYSxLQUFLVSxNQUFNLEVBQUV4Qjt3Q0FBVzs7Ozs7O2tEQUNuSSw4REFBQ3RCLGlEQUFJQTt3Q0FBQytDLE1BQU0sZUFBdUIsT0FBUlgsS0FBS1ksRUFBRTt3Q0FBSWhCLE9BQU07a0RBQTRPOzs7Ozs7OytCQU4xUUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQnBCO0dBL0RNL0I7S0FBQUE7QUFpRU4sK0RBQWVBLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9CbG9nL3BhZ2UuanM/Y2E4NiJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcclxuY29uc3QgQmxvZyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXRhLHNldERhdGFdID0gdXNlU3RhdGUoW10pO1xyXG4gICAgXHJcbnVzZUVmZmVjdCgoKT0+e1xyXG4gICAgR2V0QWxsRmVhdHVyZWJveCgpO1xyXG4gIH0sW10pO1xyXG4gIGNvbnN0IEdldEFsbEZlYXR1cmVib3ggPSAoKSA9PiB7XHJcbiAgICBheGlvcy5nZXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9wdWJsaWMvbmV3c2JveCcpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zdCBwcm9jZXNzZWREYXRhID0gcmVzLmRhdGEubWFwKG5ld3NJdGVtID0+ICh7XHJcbiAgICAgICAgICAuLi5uZXdzSXRlbSxcclxuICAgICAgICAgIGltYWdlVXJsOiBgZGF0YTppbWFnZS9qcGVnO2Jhc2U2NCwke25ld3NJdGVtLmlucHV0M31gIC8vIEFzc3VtaW5nIGlucHV0MyBjb250YWlucyBiYXNlNjQgZW5jb2RlZCBpbWFnZSBkYXRhXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHNldERhdGEocHJvY2Vzc2VkRGF0YSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9jZXNzZWQgZGF0YTpcIiwgcHJvY2Vzc2VkRGF0YSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciBmZXRjaGluZyBkYXRhOlwiLCBlcnIpO1xyXG4gICAgICB9KTtcclxuICB9O1xyXG4gIFxyXG5cclxuICAgIFxyXG5cclxuICAgIGNvbnN0IE1BWF9XT1JEUyA9IDI1O1xyXG5cclxuICAgIGNvbnN0IHRydW5jYXRlVGV4dCA9ICh0ZXh0LCBtYXhXb3JkcykgPT4ge1xyXG4gICAgICBjb25zdCB3b3JkcyA9IHRleHQuc3BsaXQoJyAnKTtcclxuICAgICAgaWYgKHdvcmRzLmxlbmd0aCA+IG1heFdvcmRzKSB7XHJcbiAgICAgICAgcmV0dXJuIHdvcmRzLnNsaWNlKDAsIG1heFdvcmRzKS5qb2luKCcgJykgKyAnLi4uJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gdGV4dDtcclxuICAgIH07XHJcbiAgcmV0dXJuIChcclxuICBcclxuPD5cclxuXHJcbjxzZWN0aW9uIGNsYXNzPVwiYmctd2hpdGUgZGFyazpiZy1ncmF5LTkwMCBwMFwiPlxyXG4gIDxkaXYgY2xhc3M9XCJweS04IHB4LTQgbXgtYXV0byBtYXgtdy1zY3JlZW4teGwgbGc6cHktMTYgbGc6cHgtNlwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm14LWF1dG8gbWF4LXctc2NyZWVuLW1kIHRleHQtY2VudGVyIG1iLTggbGc6bWItMTJcIj5cclxuICAgICAgPGgyIGNsYXNzPVwibWItNCB0ZXh0LTR4bCB0cmFja2luZy10aWdodCBmb250LWV4dHJhYm9sZCB0ZXh0LWdyYXktOTAwIHA0IGRhcms6dGV4dC13aGl0ZVwiPkF1dG9DbGlja2VyPC9oMj5cclxuICAgICAgPHAgY2xhc3M9XCJtYi01IGZvbnQtbGlnaHQgdGV4dC1ncmF5LTUwMCBzbTp0ZXh0LXhsIGRhcms6dGV4dC1ncmF5LTQwMCBwNFwiPkEgZnVsbC1mbGVkZ2VkIGF1dG9jbGlja2VyIHdpdGggdHdvIG1vZGVzIG9mIGF1dG9jbGlja2luZzwvcD5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImdyaWQgZ3JpZC1jb2xzLTMgZ2FwLTYgc206Z2FwLTYgeGw6Z2FwLTEwXCI+XHJcbiAgICAgIHtcclxuICAgICAgICBkYXRhLm1hcCgoaXRlbSwgaW5kKSA9PiAoXHJcbiAgICAgICAgICA8ZGl2IGtleT17aW5kfSBjbGFzcz1cImZsZXggZmxleC1jb2wgcC02IG14LWF1dG8gbWF4LXctbGcgdGV4dC1jZW50ZXIgcDMgYmctc2xhdGUtMTAwIHJvdW5kZWQtbGcgYm9yZGVyIGJvcmRlci15ZWxsb3ctMzAwIGRhcms6Ym9yZGVyLWdyYXktNjAwIHhsOnAtOCBkYXJrOmJnLWdyYXktODAwIGRhcms6dGV4dC13aGl0ZSB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTA1IGhvdmVyOmJvcmRlci1ibHVlLTQwMCBob3ZlcjpzaGFkb3ctbGdcIj5cclxuICAgICAgPGltZyBzcmM9e2l0ZW0uaW5wdXQzfSBhbHQ9XCJpbWdcIiBjbGFzc05hbWU9XCJzdGFuZGFyZC1pbWFnZVwiIC8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWJhc2VsaW5lIG15LThcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1yLTIgdGV4dC01eGwgZm9udC1leHRyYWJvbGRcIiAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogaXRlbS5pbnB1dDEgfX0+PC9zcGFuPlxyXG4gICAgICA8L2Rpdj4gXHJcbiAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgcDQgc206dGV4dC1sZyBkYXJrOnRleHQtZ3JheS00MDBcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRydW5jYXRlVGV4dChpdGVtLmlucHV0MiwgTUFYX1dPUkRTKSB9fT48L3A+XHJcbiAgICAgIDxMaW5rIGhyZWY9e2AvQmlnQmxvZz9pZD0ke2l0ZW0uaWR9YH0gY2xhc3M9XCJ0ZXh0LWdyYXktOTAwIGJnLWdyYWRpZW50LXRvLXIgZnJvbS1yZWQtMjAwIHZpYS1yZWQtMzAwIHRvLXllbGxvdy0yMDAgaG92ZXI6YmctZ3JhZGllbnQtdG8tYmwgZm9jdXM6cmluZy00IGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLXJlZC0xMDAgZGFyazpmb2N1czpyaW5nLXJlZC00MDAgZm9udC1tZWRpdW0gcm91bmRlZC1sZyB0ZXh0LXNtIHB4LTUgcHktMi41IHRleHQtY2VudGVyIG1lLTIgbWItMlwiPlJlYWQgTW9yZTwvTGluaz5cclxuICAgICAgIFxyXG4gICAgPC9kaXY+XHJcbiAgICAgICAgKSlcclxuICAgICAgfVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvc2VjdGlvbj5cclxuXHJcbjwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1xyXG4iXSwibmFtZXMiOlsiTGluayIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJheGlvcyIsIkNvbnRhaW5lciIsIkJsb2ciLCJkYXRhIiwic2V0RGF0YSIsIkdldEFsbEZlYXR1cmVib3giLCJnZXQiLCJ0aGVuIiwicmVzIiwicHJvY2Vzc2VkRGF0YSIsIm1hcCIsIm5ld3NJdGVtIiwiaW1hZ2VVcmwiLCJpbnB1dDMiLCJjb25zb2xlIiwibG9nIiwiY2F0Y2giLCJlcnIiLCJNQVhfV09SRFMiLCJ0cnVuY2F0ZVRleHQiLCJ0ZXh0IiwibWF4V29yZHMiLCJ3b3JkcyIsInNwbGl0IiwibGVuZ3RoIiwic2xpY2UiLCJqb2luIiwic2VjdGlvbiIsImNsYXNzIiwiZGl2IiwiaDIiLCJwIiwiaXRlbSIsImluZCIsImltZyIsInNyYyIsImFsdCIsImNsYXNzTmFtZSIsInNwYW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImlucHV0MSIsImlucHV0MiIsImhyZWYiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/Blog/page.js\n"));

/***/ })

});