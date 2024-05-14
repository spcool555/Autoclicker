"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/Tools/page",{

/***/ "(app-pages-browser)/./src/app/toolsChild/Mictest.js":
/*!***************************************!*\
  !*** ./src/app/toolsChild/Mictest.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _assets_camera_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/camera.gif */ \"(app-pages-browser)/./src/app/assets/camera.gif\");\n/* harmony import */ var _assets_wave_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/wave.gif */ \"(app-pages-browser)/./src/app/assets/wave.gif\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst MicTest = (props)=>{\n    _s();\n    // *********************style*******************\n    const style = {\n        webchilebox: {\n            alignItems: \"center\",\n            display: \"flex\",\n            justifyContent: \"space-between\"\n        },\n        webcamTitle: {\n            fontWeight: \"600\",\n            fontSize: \"20px\"\n        },\n        BoxCamera: {\n            boxShadow: \"rgba(0, 0, 0, 0.24) 0px 3px 8px\",\n            borderRadius: \"10px\",\n            margin: \"auto\",\n            padding: \"20px\",\n            width: \"45%\"\n        },\n        labeltext: {\n            textAlign: \"center\",\n            fontWeight: \"600\",\n            fontSize: \"20px\",\n            color: \"red\"\n        },\n        labeltextC: {\n            textAlign: \"center\",\n            fontWeight: \"600\",\n            fontSize: \"20px\",\n            color: \"green\"\n        },\n        micBox: {\n            borderRadius: \"15px\",\n            alignItems: \"center\",\n            justifyContent: \"center\",\n            display: \"flex\",\n            height: \"212px\",\n            width: \"100%\"\n        },\n        childBox: {\n            fontSize: \"95px\"\n        },\n        waveButton: {\n            justifyContent: \"center\",\n            display: \"flex\"\n        }\n    };\n    // *****************stop*******************\n    const [listening, setListening] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [transcript, setTranscript] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [recognition, setRecognition] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // Initialize the Web Speech API\n        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;\n        if (SpeechRecognition) {\n            const recognitionInstance = new SpeechRecognition();\n            recognitionInstance.continuous = false;\n            recognitionInstance.interimResults = true; // Set to true if you want to show interim results\n            recognitionInstance.lang = \"en-US\";\n            recognitionInstance.onresult = (event)=>{\n                let interimTranscript = \"\";\n                let finalTranscript = \"\";\n                for(let i = 0; i < event.results.length; i++){\n                    const transcriptPart = event.results[i][0].transcript;\n                    if (event.results[i].isFinal) {\n                        finalTranscript += transcriptPart;\n                    } else {\n                        interimTranscript += transcriptPart;\n                    }\n                }\n                setTranscript(finalTranscript || interimTranscript);\n            };\n            recognitionInstance.onerror = (event)=>{\n                console.error(\"Speech recognition error:\", event.error);\n            };\n            setRecognition(recognitionInstance);\n        } else {\n            console.error(\"SpeechRecognition API is not supported in this browser.\");\n        }\n    }, []);\n    const startListening = ()=>{\n        if (recognition) {\n            recognition.start();\n            setListening(true);\n            setTextToSpeak(transcript);\n        }\n    };\n    const stopListening = ()=>{\n        if (recognition) {\n            recognition.stop();\n            setListening(false);\n        }\n    };\n    const [textToSpeak, setTextToSpeak] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    // Initialize speech recognition\n    // Text to speech\n    const handleSpeak = ()=>{\n        const synth = window.speechSynthesis;\n        const utterance = new SpeechSynthesisUtterance(textToSpeak);\n        utterance.lang = \"en-US\";\n        synth.speak(utterance);\n    };\n    const handlechangetext = (e)=>{\n        setTextToSpeak(e.target.value);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"cameratestBox\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style.webchilebox,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            style: style.webcamTitle,\n                            children: \"Mic Test\"\n                        }, void 0, false, {\n                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                            lineNumber: 134,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                        lineNumber: 133,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: props.isclose,\n                            className: \"focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900\",\n                            children: \"Back\"\n                        }, void 0, false, {\n                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                            lineNumber: 137,\n                            columnNumber: 11\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                lineNumber: 132,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: style.BoxCamera,\n                className: \"BoxCamera\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: listening ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: style.micBox,\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                src: _assets_wave_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                width: \"100%\",\n                                style: {\n                                    borderRadius: \"10px\",\n                                    height: \"200px\"\n                                },\n                                alt: \"img\"\n                            }, void 0, false, {\n                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                lineNumber: 147,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                            lineNumber: 145,\n                            columnNumber: 15\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            style: style.micBox,\n                            className: \"p3\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                style: style.childBox,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                    className: \"fa fa-microphone\",\n                                    \"aria-hidden\": \"true\"\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                    lineNumber: 153,\n                                    columnNumber: 19\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                lineNumber: 152,\n                                columnNumber: 17\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                            lineNumber: 151,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                        lineNumber: 142,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: style.waveButton,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: startListening,\n                                disabled: listening,\n                                className: \"flex w-full justify-center rounded-md bg-indigo-600 px-3 mb-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                children: \"Start Listening\"\n                            }, void 0, false, {\n                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                lineNumber: 162,\n                                columnNumber: 11\n                            }, undefined),\n                            \"\\xa0 \\xa0\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                onClick: stopListening,\n                                disabled: !listening,\n                                className: \"flex w-full justify-center rounded-md bg-indigo-600 px-3 mb-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                children: \"Stop Listening\"\n                            }, void 0, false, {\n                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                lineNumber: 165,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                        lineNumber: 161,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                    type: \"text\",\n                                    className: \"p2\",\n                                    value: textToSpeak,\n                                    onChange: handlechangetext,\n                                    placeholder: \"Enter text to speak\"\n                                }, void 0, false, {\n                                    fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                    lineNumber: 170,\n                                    columnNumber: 10\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                lineNumber: 169,\n                                columnNumber: 10\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: \"flex justify-center rounded-md bg-indigo-600 px-3 mb-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600\",\n                                    onClick: handleSpeak,\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                            class: \"fa fa-volume-up\",\n                                            style: \"font-size:48px;color:red\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                            lineNumber: 180,\n                                            columnNumber: 11\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                            children: \"Speak\"\n                                        }, void 0, false, {\n                                            fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                            lineNumber: 181,\n                                            columnNumber: 11\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                    lineNumber: 179,\n                                    columnNumber: 11\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                                lineNumber: 178,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                        lineNumber: 168,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"I:\\\\cluematrix_project_asmita\\\\autoclicker\\\\autoclicker_frontend\\\\src\\\\app\\\\toolsChild\\\\Mictest.js\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, undefined);\n};\n_s(MicTest, \"UgpTnnoQRFpFlh7EVpOGDrWrSjc=\");\n_c = MicTest;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MicTest);\nvar _c;\n$RefreshReg$(_c, \"MicTest\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdG9vbHNDaGlsZC9NaWN0ZXN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMyRDtBQUM1QjtBQUNhO0FBQ1A7QUFFckMsTUFBTU8sVUFBVSxDQUFDQzs7SUFDZixnREFBZ0Q7SUFDaEQsTUFBTUMsUUFBUTtRQUNaQyxhQUFhO1lBQ1hDLFlBQVk7WUFDWkMsU0FBUztZQUNUQyxnQkFBZ0I7UUFDbEI7UUFDQUMsYUFBYTtZQUNYQyxZQUFZO1lBQ1pDLFVBQVU7UUFDWjtRQUNBQyxXQUFXO1lBQ1RDLFdBQVc7WUFDWEMsY0FBYztZQUNkQyxRQUFRO1lBQ1JDLFNBQVM7WUFDVEMsT0FBTztRQUVUO1FBQ0FDLFdBQVc7WUFDVEMsV0FBVztZQUNYVCxZQUFZO1lBQ1pDLFVBQVU7WUFDVlMsT0FBTztRQUNUO1FBQ0FDLFlBQVk7WUFDVkYsV0FBVztZQUNYVCxZQUFZO1lBQ1pDLFVBQVU7WUFDVlMsT0FBTztRQUNUO1FBRUFFLFFBQVE7WUFDTlIsY0FBYztZQUNkUixZQUFZO1lBQ1pFLGdCQUFnQjtZQUNoQkQsU0FBUztZQUNUZ0IsUUFBUTtZQUNSTixPQUFPO1FBRVQ7UUFDQU8sVUFBVTtZQUNSYixVQUFVO1FBQ1o7UUFDQWMsWUFBVztZQUNUakIsZ0JBQWU7WUFDZkQsU0FBUTtRQUNWO0lBRUY7SUFDQSwyQ0FBMkM7SUFDM0MsTUFBTSxDQUFDbUIsV0FBV0MsYUFBYSxHQUFHL0IsK0NBQVFBLENBQUM7SUFDM0MsTUFBTSxDQUFDZ0MsWUFBWUMsY0FBYyxHQUFHakMsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDa0MsYUFBYUMsZUFBZSxHQUFHbkMsK0NBQVFBLENBQUM7SUFFL0NFLGdEQUFTQSxDQUFDO1FBQ1IsZ0NBQWdDO1FBQ2hDLE1BQU1rQyxvQkFBb0JDLE9BQU9ELGlCQUFpQixJQUFJQyxPQUFPQyx1QkFBdUI7UUFFcEYsSUFBSUYsbUJBQW1CO1lBQ3JCLE1BQU1HLHNCQUFzQixJQUFJSDtZQUNoQ0cs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QUFDbkQ7Z0NBQWEwQyxXQUFVOzBDQUE4UDs7Ozs7Ozs7Ozs7O2tDQUdsVSw4REFBQ0Q7OzBDQUNBLDhEQUFDQTswQ0FDRCw0RUFBQ1c7b0NBQ0VDLE1BQUs7b0NBQ0xYLFdBQVU7b0NBQ1ZGLE9BQU9WO29DQUNQd0IsVUFBVWpCO29DQUNWa0IsYUFBWTs7Ozs7Ozs7Ozs7MENBR2QsOERBQUNkOzBDQUNELDRFQUFDRztvQ0FBT0YsV0FBVTtvQ0FBd1BHLFNBQVNkOztzREFDblIsOERBQUNkOzRDQUFFdUMsT0FBTTs0Q0FBa0I5RSxPQUFNOzs7Ozs7c0RBQ2pDLDhEQUFDaUU7c0RBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBYWpCO0dBM0xNbkU7S0FBQUE7QUE2TE4sK0RBQWVBLE9BQU9BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC90b29sc0NoaWxkL01pY3Rlc3QuanM/ZjNlZSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCdcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcbmltcG9ydCBDYW1lcmFHaWYgZnJvbSAnLi4vYXNzZXRzL2NhbWVyYS5naWYnXHJcbmltcG9ydCB3YXZlIGZyb20gJy4uL2Fzc2V0cy93YXZlLmdpZidcclxuXHJcbmNvbnN0IE1pY1Rlc3QgPSAocHJvcHMpID0+IHtcclxuICAvLyAqKioqKioqKioqKioqKioqKioqKipzdHlsZSoqKioqKioqKioqKioqKioqKipcclxuICBjb25zdCBzdHlsZSA9IHtcclxuICAgIHdlYmNoaWxlYm94OiB7XHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbidcclxuICAgIH0sXHJcbiAgICB3ZWJjYW1UaXRsZToge1xyXG4gICAgICBmb250V2VpZ2h0OiAnNjAwJyxcclxuICAgICAgZm9udFNpemU6ICcyMHB4J1xyXG4gICAgfSxcclxuICAgIEJveENhbWVyYToge1xyXG4gICAgICBib3hTaGFkb3c6ICdyZ2JhKDAsIDAsIDAsIDAuMjQpIDBweCAzcHggOHB4JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTBweCcsXHJcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxyXG4gICAgICBwYWRkaW5nOiAnMjBweCcsXHJcbiAgICAgIHdpZHRoOiAnNDUlJyxcclxuXHJcbiAgICB9LFxyXG4gICAgbGFiZWx0ZXh0OiB7XHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxyXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICBjb2xvcjogJ3JlZCdcclxuICAgIH0sXHJcbiAgICBsYWJlbHRleHRDOiB7XHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICc2MDAnLFxyXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgICBjb2xvcjogJ2dyZWVuJ1xyXG4gICAgfSxcclxuXHJcbiAgICBtaWNCb3g6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTVweCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgaGVpZ2h0OiAnMjEycHgnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICAvLyBiYWNrZ3JvdW5kOiAnIzFjMmI3MSdcclxuICAgIH0sXHJcbiAgICBjaGlsZEJveDoge1xyXG4gICAgICBmb250U2l6ZTogJzk1cHgnXHJcbiAgICB9LFxyXG4gICAgd2F2ZUJ1dHRvbjp7XHJcbiAgICAgIGp1c3RpZnlDb250ZW50OidjZW50ZXInLFxyXG4gICAgICBkaXNwbGF5OidmbGV4J1xyXG4gICAgfVxyXG5cclxuICB9O1xyXG4gIC8vICoqKioqKioqKioqKioqKioqc3RvcCoqKioqKioqKioqKioqKioqKipcclxuICBjb25zdCBbbGlzdGVuaW5nLCBzZXRMaXN0ZW5pbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFt0cmFuc2NyaXB0LCBzZXRUcmFuc2NyaXB0XSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbcmVjb2duaXRpb24sIHNldFJlY29nbml0aW9uXSA9IHVzZVN0YXRlKG51bGwpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgLy8gSW5pdGlhbGl6ZSB0aGUgV2ViIFNwZWVjaCBBUElcclxuICAgIGNvbnN0IFNwZWVjaFJlY29nbml0aW9uID0gd2luZG93LlNwZWVjaFJlY29nbml0aW9uIHx8IHdpbmRvdy53ZWJraXRTcGVlY2hSZWNvZ25pdGlvbjtcclxuXHJcbiAgICBpZiAoU3BlZWNoUmVjb2duaXRpb24pIHtcclxuICAgICAgY29uc3QgcmVjb2duaXRpb25JbnN0YW5jZSA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xyXG4gICAgICByZWNvZ25pdGlvbkluc3RhbmNlLmNvbnRpbnVvdXMgPSBmYWxzZTtcclxuICAgICAgcmVjb2duaXRpb25JbnN0YW5jZS5pbnRlcmltUmVzdWx0cyA9IHRydWU7IC8vIFNldCB0byB0cnVlIGlmIHlvdSB3YW50IHRvIHNob3cgaW50ZXJpbSByZXN1bHRzXHJcbiAgICAgIHJlY29nbml0aW9uSW5zdGFuY2UubGFuZyA9ICdlbi1VUyc7XHJcblxyXG4gICAgICByZWNvZ25pdGlvbkluc3RhbmNlLm9ucmVzdWx0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgbGV0IGludGVyaW1UcmFuc2NyaXB0ID0gJyc7XHJcbiAgICAgICAgbGV0IGZpbmFsVHJhbnNjcmlwdCA9ICcnO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXZlbnQucmVzdWx0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgY29uc3QgdHJhbnNjcmlwdFBhcnQgPSBldmVudC5yZXN1bHRzW2ldWzBdLnRyYW5zY3JpcHQ7XHJcbiAgICAgICAgICBpZiAoZXZlbnQucmVzdWx0c1tpXS5pc0ZpbmFsKSB7XHJcbiAgICAgICAgICAgIGZpbmFsVHJhbnNjcmlwdCArPSB0cmFuc2NyaXB0UGFydDtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGludGVyaW1UcmFuc2NyaXB0ICs9IHRyYW5zY3JpcHRQYXJ0O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRUcmFuc2NyaXB0KGZpbmFsVHJhbnNjcmlwdCB8fCBpbnRlcmltVHJhbnNjcmlwdCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICByZWNvZ25pdGlvbkluc3RhbmNlLm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdTcGVlY2ggcmVjb2duaXRpb24gZXJyb3I6JywgZXZlbnQuZXJyb3IpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgc2V0UmVjb2duaXRpb24ocmVjb2duaXRpb25JbnN0YW5jZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdTcGVlY2hSZWNvZ25pdGlvbiBBUEkgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXIuJyk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG5cclxuICBjb25zdCBzdGFydExpc3RlbmluZyA9ICgpID0+IHtcclxuICAgIGlmIChyZWNvZ25pdGlvbikge1xyXG4gICAgICByZWNvZ25pdGlvbi5zdGFydCgpO1xyXG4gICAgICBzZXRMaXN0ZW5pbmcodHJ1ZSk7XHJcbiAgICAgIHNldFRleHRUb1NwZWFrKHRyYW5zY3JpcHQpXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc3RvcExpc3RlbmluZyA9ICgpID0+IHtcclxuICAgIGlmIChyZWNvZ25pdGlvbikge1xyXG4gICAgICByZWNvZ25pdGlvbi5zdG9wKCk7XHJcbiAgICAgIHNldExpc3RlbmluZyhmYWxzZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBbdGV4dFRvU3BlYWssIHNldFRleHRUb1NwZWFrXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgLy8gSW5pdGlhbGl6ZSBzcGVlY2ggcmVjb2duaXRpb25cclxuXHJcblxyXG4gIC8vIFRleHQgdG8gc3BlZWNoXHJcbiAgY29uc3QgaGFuZGxlU3BlYWsgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBzeW50aCA9IHdpbmRvdy5zcGVlY2hTeW50aGVzaXM7XHJcbiAgICBjb25zdCB1dHRlcmFuY2UgPSBuZXcgU3BlZWNoU3ludGhlc2lzVXR0ZXJhbmNlKHRleHRUb1NwZWFrKTtcclxuICAgIHV0dGVyYW5jZS5sYW5nID0gJ2VuLVVTJztcclxuXHJcbiAgICBzeW50aC5zcGVhayh1dHRlcmFuY2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZWNoYW5nZXRleHQ9KGUpPT57XHJcbiAgICBzZXRUZXh0VG9TcGVhayhlLnRhcmdldC52YWx1ZSlcclxuICAgXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2NhbWVyYXRlc3RCb3gnPlxyXG4gICAgICA8ZGl2IHN0eWxlPXtzdHlsZS53ZWJjaGlsZWJveH0+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxsYWJlbCBzdHlsZT17c3R5bGUud2ViY2FtVGl0bGV9Pk1pYyBUZXN0PC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtwcm9wcy5pc2Nsb3NlfSBjbGFzc05hbWU9XCJmb2N1czpvdXRsaW5lLW5vbmUgdGV4dC13aGl0ZSBiZy1yZWQtNzAwIGhvdmVyOmJnLXJlZC04MDAgZm9jdXM6cmluZy00IGZvY3VzOnJpbmctcmVkLTMwMCBmb250LW1lZGl1bSByb3VuZGVkLWxnIHRleHQtc20gcHgtNSBweS0yLjUgbWUtMiBtYi0yIGRhcms6YmctcmVkLTYwMCBkYXJrOmhvdmVyOmJnLXJlZC03MDAgZGFyazpmb2N1czpyaW5nLXJlZC05MDBcIj5CYWNrPC9idXR0b24+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17c3R5bGUuQm94Q2FtZXJhfSBjbGFzc05hbWU9J0JveENhbWVyYSc+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGlzdGVuaW5nID9cclxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS5taWNCb3h9PlxyXG5cclxuICAgICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3dhdmV9IHdpZHRoPScxMDAlJyBzdHlsZT17eyBib3JkZXJSYWRpdXM6ICcxMHB4JywgaGVpZ2h0OiAnMjAwcHgnIH19IGFsdD0naW1nJyAvPlxyXG5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17c3R5bGUubWljQm94fSBjbGFzc05hbWU9J3AzJz5cclxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlLmNoaWxkQm94fT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbWljcm9waG9uZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZS53YXZlQnV0dG9ufT5cclxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17c3RhcnRMaXN0ZW5pbmd9IGRpc2FibGVkPXtsaXN0ZW5pbmd9ICAgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1pbmRpZ28tNjAwIHB4LTMgbWItMyBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWluZGlnby02MDBcIj5TdGFydCBMaXN0ZW5pbmc8L2J1dHRvbj5cclxuICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgJm5ic3A7XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0b3BMaXN0ZW5pbmd9IGRpc2FibGVkPXshbGlzdGVuaW5nfSAgIGNsYXNzTmFtZT1cImZsZXggdy1mdWxsIGp1c3RpZnktY2VudGVyIHJvdW5kZWQtbWQgYmctaW5kaWdvLTYwMCBweC0zIG1iLTMgcHktMS41IHRleHQtc20gZm9udC1zZW1pYm9sZCBsZWFkaW5nLTYgdGV4dC13aGl0ZSBzaGFkb3ctc20gaG92ZXI6YmctaW5kaWdvLTUwMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLW9mZnNldC0yIGZvY3VzLXZpc2libGU6b3V0bGluZS1pbmRpZ28tNjAwXCI+U3RvcCBMaXN0ZW5pbmc8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgPGRpdj5cclxuICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncDInXHJcbiAgICAgICAgICAgIHZhbHVlPXt0ZXh0VG9TcGVha31cclxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZWNoYW5nZXRleHR9XHJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgdGV4dCB0byBzcGVha1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgcm91bmRlZC1tZCBiZy1pbmRpZ28tNjAwIHB4LTMgbWItMyBweS0xLjUgdGV4dC1zbSBmb250LXNlbWlib2xkIGxlYWRpbmctNiB0ZXh0LXdoaXRlIHNoYWRvdy1zbSBob3ZlcjpiZy1pbmRpZ28tNTAwIGZvY3VzLXZpc2libGU6b3V0bGluZSBmb2N1cy12aXNpYmxlOm91dGxpbmUtMiBmb2N1cy12aXNpYmxlOm91dGxpbmUtb2Zmc2V0LTIgZm9jdXMtdmlzaWJsZTpvdXRsaW5lLWluZGlnby02MDBcIiAgb25DbGljaz17aGFuZGxlU3BlYWt9PlxyXG4gICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS12b2x1bWUtdXBcIiBzdHlsZT1cImZvbnQtc2l6ZTo0OHB4O2NvbG9yOnJlZFwiPjwvaT5cclxuICAgICAgICAgIDxsYWJlbD5TcGVhazwvbGFiZWw+XHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNwZWFrfT5TcGVhazwvYnV0dG9uPiAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKipuZXh0KioqKioqKioqKioqKioqKioqKioqKiogKi99XHJcblxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWljVGVzdDsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJlZiIsInVzZUVmZmVjdCIsIkltYWdlIiwiQ2FtZXJhR2lmIiwid2F2ZSIsIk1pY1Rlc3QiLCJwcm9wcyIsInN0eWxlIiwid2ViY2hpbGVib3giLCJhbGlnbkl0ZW1zIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwid2ViY2FtVGl0bGUiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJCb3hDYW1lcmEiLCJib3hTaGFkb3ciLCJib3JkZXJSYWRpdXMiLCJtYXJnaW4iLCJwYWRkaW5nIiwid2lkdGgiLCJsYWJlbHRleHQiLCJ0ZXh0QWxpZ24iLCJjb2xvciIsImxhYmVsdGV4dEMiLCJtaWNCb3giLCJoZWlnaHQiLCJjaGlsZEJveCIsIndhdmVCdXR0b24iLCJsaXN0ZW5pbmciLCJzZXRMaXN0ZW5pbmciLCJ0cmFuc2NyaXB0Iiwic2V0VHJhbnNjcmlwdCIsInJlY29nbml0aW9uIiwic2V0UmVjb2duaXRpb24iLCJTcGVlY2hSZWNvZ25pdGlvbiIsIndpbmRvdyIsIndlYmtpdFNwZWVjaFJlY29nbml0aW9uIiwicmVjb2duaXRpb25JbnN0YW5jZSIsImNvbnRpbnVvdXMiLCJpbnRlcmltUmVzdWx0cyIsImxhbmciLCJvbnJlc3VsdCIsImV2ZW50IiwiaW50ZXJpbVRyYW5zY3JpcHQiLCJmaW5hbFRyYW5zY3JpcHQiLCJpIiwicmVzdWx0cyIsImxlbmd0aCIsInRyYW5zY3JpcHRQYXJ0IiwiaXNGaW5hbCIsIm9uZXJyb3IiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGFydExpc3RlbmluZyIsInN0YXJ0Iiwic2V0VGV4dFRvU3BlYWsiLCJzdG9wTGlzdGVuaW5nIiwic3RvcCIsInRleHRUb1NwZWFrIiwiaGFuZGxlU3BlYWsiLCJzeW50aCIsInNwZWVjaFN5bnRoZXNpcyIsInV0dGVyYW5jZSIsIlNwZWVjaFN5bnRoZXNpc1V0dGVyYW5jZSIsInNwZWFrIiwiaGFuZGxlY2hhbmdldGV4dCIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsImxhYmVsIiwiYnV0dG9uIiwib25DbGljayIsImlzY2xvc2UiLCJzcmMiLCJhbHQiLCJhcmlhLWhpZGRlbiIsImJyIiwiZGlzYWJsZWQiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInBsYWNlaG9sZGVyIiwiY2xhc3MiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/toolsChild/Mictest.js\n"));

/***/ })

});