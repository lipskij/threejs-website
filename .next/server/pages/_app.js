/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"home\": \"Home_home__V_V4i\",\n\t\"homeText\": \"Home_homeText__SEMvo\",\n\t\"homeText1\": \"Home_homeText1__FDklL\",\n\t\"homeText2\": \"Home_homeText2__dTuRn\",\n\t\"homeBtn\": \"Home_homeBtn__AUBsn\",\n\t\"loader\": \"Home_loader__7Zjim\",\n\t\"letter\": \"Home_letter__X_VVM\",\n\t\"lol\": \"Home_lol__JjJP4\",\n\t\"footer\": \"Home_footer____T7K\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZW1pbC13ZWIvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzP2IxNzAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJob21lXCI6IFwiSG9tZV9ob21lX19WX1Y0aVwiLFxuXHRcImhvbWVUZXh0XCI6IFwiSG9tZV9ob21lVGV4dF9fU0VNdm9cIixcblx0XCJob21lVGV4dDFcIjogXCJIb21lX2hvbWVUZXh0MV9fRkRrbExcIixcblx0XCJob21lVGV4dDJcIjogXCJIb21lX2hvbWVUZXh0Ml9fZFR1Um5cIixcblx0XCJob21lQnRuXCI6IFwiSG9tZV9ob21lQnRuX19BVUJzblwiLFxuXHRcImxvYWRlclwiOiBcIkhvbWVfbG9hZGVyX183WmppbVwiLFxuXHRcImxldHRlclwiOiBcIkhvbWVfbGV0dGVyX19YX1ZWTVwiLFxuXHRcImxvbFwiOiBcIkhvbWVfbG9sX19KakpQNFwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiXG59O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"framer-motion\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_4__]);\nframer_motion__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\nfunction MyApp({ Component , pageProps , router  }) {\n    const url = `http://localhost:3000${router.route}`;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        animate: \"background\",\n        variants: {\n            background: {\n                transform: \"rotate(360deg)\",\n                transition: {\n                    duration: 0.3\n                }\n            }\n        },\n        style: {\n            backgroundColor: \"#141b1e\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_3___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Emil Lipskij\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emillipskij/Documents/new-shit/pages/_app.tsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Personal website of Emil Lipskij front end developer\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emillipskij/Documents/new-shit/pages/_app.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/emillipskij/Documents/new-shit/pages/_app.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/emillipskij/Documents/new-shit/pages/_app.tsx\",\n                lineNumber: 23,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.AnimatePresence, {\n                exitBeforeEnter: true,\n                initial: false,\n                onExitComplete: ()=>window.scrollTo(0, 0)\n                ,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                    initial: \"pageInitial\",\n                    animate: \"pageAnimate\",\n                    exit: \"pageExit\",\n                    variants: {\n                        pageInitial: {\n                            opacity: 0,\n                            transition: {\n                                duration: 0.3,\n                                ease: \"easeInOut\"\n                            }\n                        },\n                        pageAnimate: {\n                            opacity: 1,\n                            transition: {\n                                duration: 0.3\n                            }\n                        },\n                        pageExit: {\n                            opacity: 0,\n                            transform: \"translateX(-100px)\",\n                            transition: {\n                                duration: 0.3\n                            }\n                        }\n                    },\n                    children: /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(Component, {\n                        ...pageProps,\n                        canonical: url,\n                        key: url,\n                        __source: {\n                            fileName: \"/Users/emillipskij/Documents/new-shit/pages/_app.tsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        },\n                        __self: this\n                    })\n                }, router.route, false, {\n                    fileName: \"/Users/emillipskij/Documents/new-shit/pages/_app.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emillipskij/Documents/new-shit/pages/_app.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().footer),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Made by Emil Lipskij 2022\"\n                }, void 0, false, {\n                    fileName: \"/Users/emillipskij/Documents/new-shit/pages/_app.tsx\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/emillipskij/Documents/new-shit/pages/_app.tsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/emillipskij/Documents/new-shit/pages/_app.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBK0I7QUFDRjtBQUUyQjtBQUNUO0FBRS9DLFNBQVNJLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRUMsTUFBTSxHQUFZLEVBQUU7SUFDekQsTUFBTUMsR0FBRyxHQUFHLENBQUMscUJBQXFCLEVBQUVELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDLENBQUM7SUFFbEQscUJBQ0UsOERBQUNQLHFEQUFVO1FBQ1RTLE9BQU8sRUFBQyxZQUFZO1FBQ3BCQyxRQUFRLEVBQUU7WUFDUkMsVUFBVSxFQUFFO2dCQUNWQyxTQUFTLEVBQUUsZ0JBQWdCO2dCQUMzQkMsVUFBVSxFQUFFO29CQUNWQyxRQUFRLEVBQUUsR0FBRztpQkFDZDthQUNGO1NBQ0Y7UUFDREMsS0FBSyxFQUFFO1lBQUVDLGVBQWUsRUFBRSxTQUFTO1NBQUU7OzBCQUVyQyw4REFBQ2xCLGtEQUFJOztrQ0FDSCw4REFBQ21CLE9BQUs7a0NBQUMsY0FBWTs7Ozs7NEJBQVE7a0NBQzNCLDhEQUFDQyxNQUFJO3dCQUNIQyxJQUFJLEVBQUMsYUFBYTt3QkFDbEJDLE9BQU8sRUFBQyxzREFBc0Q7Ozs7OzRCQUM5RDtrQ0FDRiw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs0QkFBRzs7Ozs7O29CQUNsQzswQkFDUCw4REFBQ3hCLDBEQUFlO2dCQUNkeUIsZUFBZTtnQkFDZkMsT0FBTyxFQUFFLEtBQUs7Z0JBQ2RDLGNBQWMsRUFBRSxJQUFNQyxNQUFNLENBQUNDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUFBOzBCQUUzQyw0RUFBQzVCLHFEQUFVO29CQUVUeUIsT0FBTyxFQUFDLGFBQWE7b0JBQ3JCaEIsT0FBTyxFQUFDLGFBQWE7b0JBQ3JCb0IsSUFBSSxFQUFDLFVBQVU7b0JBQ2ZuQixRQUFRLEVBQUU7d0JBQ1JvQixXQUFXLEVBQUU7NEJBQ1hDLE9BQU8sRUFBRSxDQUFDOzRCQUNWbEIsVUFBVSxFQUFFO2dDQUNWQyxRQUFRLEVBQUUsR0FBRztnQ0FDYmtCLElBQUksRUFBRSxXQUFXOzZCQUNsQjt5QkFDRjt3QkFDREMsV0FBVyxFQUFFOzRCQUNYRixPQUFPLEVBQUUsQ0FBQzs0QkFDVmxCLFVBQVUsRUFBRTtnQ0FDVkMsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7d0JBQ0RvQixRQUFRLEVBQUU7NEJBQ1JILE9BQU8sRUFBRSxDQUFDOzRCQUNWbkIsU0FBUyxFQUFFLG9CQUFvQjs0QkFDL0JDLFVBQVUsRUFBRTtnQ0FDVkMsUUFBUSxFQUFFLEdBQUc7NkJBQ2Q7eUJBQ0Y7cUJBQ0Y7OEJBRUQsbUVBQUNYLFNBQVM7d0JBQUUsR0FBR0MsU0FBUzt3QkFBRStCLFNBQVMsRUFBRTdCLEdBQUc7d0JBQUU4QixHQUFHLEVBQUU5QixHQUFHOzs7Ozs7O3NCQUFJO21CQTNCakRELE1BQU0sQ0FBQ0UsS0FBSzs7Ozt3QkE0Qk47Ozs7O29CQUNHOzBCQUNsQiw4REFBQzhCLFFBQU07Z0JBQUNDLFNBQVMsRUFBRXJDLHVFQUFhOzBCQUM1Qiw0RUFBQ3NDLEdBQUM7OEJBQUMsMkJBQXlCOzs7Ozt3QkFBSTs7Ozs7b0JBQ3pCOzs7Ozs7WUFDQSxDQUNiO0NBQ0g7QUFFRCxpRUFBZXJDLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2VtaWwtd2ViLy4vcGFnZXMvX2FwcC50c3g/MmZiZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCIuLi9zdHlsZXMvZ2xvYmFscy5jc3NcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcbmltcG9ydCB7IEFuaW1hdGVQcmVzZW5jZSwgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcywgcm91dGVyIH06IEFwcFByb3BzKSB7XG4gIGNvbnN0IHVybCA9IGBodHRwOi8vbG9jYWxob3N0OjMwMDAke3JvdXRlci5yb3V0ZX1gO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGFuaW1hdGU9J2JhY2tncm91bmQnXG4gICAgICB2YXJpYW50cz17e1xuICAgICAgICBiYWNrZ3JvdW5kOiB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInJvdGF0ZSgzNjBkZWcpXCIsXG4gICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfX1cbiAgICAgIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCIjMTQxYjFlXCIgfX1cbiAgICA+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkVtaWwgTGlwc2tpajwvdGl0bGU+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgbmFtZT0nZGVzY3JpcHRpb24nXG4gICAgICAgICAgY29udGVudD0nUGVyc29uYWwgd2Vic2l0ZSBvZiBFbWlsIExpcHNraWogZnJvbnQgZW5kIGRldmVsb3BlcidcbiAgICAgICAgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdpY29uJyBocmVmPScvZmF2aWNvbi5pY28nIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8QW5pbWF0ZVByZXNlbmNlXG4gICAgICAgIGV4aXRCZWZvcmVFbnRlclxuICAgICAgICBpbml0aWFsPXtmYWxzZX1cbiAgICAgICAgb25FeGl0Q29tcGxldGU9eygpID0+IHdpbmRvdy5zY3JvbGxUbygwLCAwKX1cbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBrZXk9e3JvdXRlci5yb3V0ZX1cbiAgICAgICAgICBpbml0aWFsPSdwYWdlSW5pdGlhbCdcbiAgICAgICAgICBhbmltYXRlPSdwYWdlQW5pbWF0ZSdcbiAgICAgICAgICBleGl0PSdwYWdlRXhpdCdcbiAgICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgICAgcGFnZUluaXRpYWw6IHtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjMsXG4gICAgICAgICAgICAgICAgZWFzZTogXCJlYXNlSW5PdXRcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWdlQW5pbWF0ZToge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuMyxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwYWdlRXhpdDoge1xuICAgICAgICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IFwidHJhbnNsYXRlWCgtMTAwcHgpXCIsXG4gICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC4zLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBjYW5vbmljYWw9e3VybH0ga2V5PXt1cmx9IC8+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvQW5pbWF0ZVByZXNlbmNlPlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgICAgIDxwPk1hZGUgYnkgRW1pbCBMaXBza2lqIDIwMjI8L3A+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgIDwvbW90aW9uLmRpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiSGVhZCIsIkFuaW1hdGVQcmVzZW5jZSIsIm1vdGlvbiIsInN0eWxlcyIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwidXJsIiwicm91dGUiLCJkaXYiLCJhbmltYXRlIiwidmFyaWFudHMiLCJiYWNrZ3JvdW5kIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiZXhpdEJlZm9yZUVudGVyIiwiaW5pdGlhbCIsIm9uRXhpdENvbXBsZXRlIiwid2luZG93Iiwic2Nyb2xsVG8iLCJleGl0IiwicGFnZUluaXRpYWwiLCJvcGFjaXR5IiwiZWFzZSIsInBhZ2VBbmltYXRlIiwicGFnZUV4aXQiLCJjYW5vbmljYWwiLCJrZXkiLCJmb290ZXIiLCJjbGFzc05hbWUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();