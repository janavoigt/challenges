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

/***/ "./components/Form/index.js":
/*!**********************************!*\
  !*** ./components/Form/index.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Form_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.styled */ \"./components/Form/Form.styled.js\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Form() {\n    _s();\n    const [mountain, setMountain] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"Mount Everest\",\n        values: {\n            altitude: 8848,\n            mountainRange: \"Himalayas\"\n        }\n    });\n    function handleNameChange(event) {\n        event.preventDefault();\n        let nameMountain = event.target.value;\n        setMountain({\n            ...mountain,\n            name: nameMountain\n        });\n    }\n    function handleAltitudeChange(event) {\n        event.preventDefault();\n        let altitudeMountain = event.target.value;\n        setMountain({\n            ...mountain,\n            values: {\n                ...mountain.values,\n                altitude: altitudeMountain\n            }\n        });\n    }\n    function handleMountainRangeChange(event) {\n        event.preventDefault();\n        let mountainRanges = event.target.value;\n        setMountain({\n            ...mountain,\n            values: {\n                ...mountain.values,\n                mountainRange: mountainRanges\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledForm, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"name\",\n                        value: mountain.name,\n                        onChange: handleNameChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"altitude\",\n                        children: \"Altitude:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"altitude\",\n                        value: mountain.values.altitude,\n                        onChange: handleAltitudeChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"mountainRange\",\n                        children: \"Mountain Range:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"mountainRange\",\n                        value: mountain.values.mountainRange,\n                        onChange: handleMountainRangeChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"output\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        children: mountain.name\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    \" is \",\n                    mountain.values.altitude,\n                    \" meters high\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this),\n                    \"(and located in the \",\n                    mountain.values.mountainRange,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"oBmhgv1UcnflRJC1Ig3CVrlME8Q=\");\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDZ0M7QUFFbEQsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBQztRQUN2Q00sTUFBTTtRQUNOQyxRQUFRO1lBQ05DLFVBQVU7WUFDVkMsZUFBZTtRQUNqQjtJQUNGO0lBRUEsU0FBU0MsaUJBQWlCQyxLQUFLO1FBQzdCQSxNQUFNQztRQUNOLElBQUlDLGVBQWVGLE1BQU1HLE9BQU9DO1FBQ2hDVixZQUFZO1lBQUUsR0FBR0QsUUFBUTtZQUFFRSxNQUFNTztRQUFhO0lBQ2hEO0lBRUEsU0FBU0cscUJBQXFCTCxLQUFLO1FBQ2pDQSxNQUFNQztRQUNOLElBQUlLLG1CQUFtQk4sTUFBTUcsT0FBT0M7UUFDcENWLFlBQVk7WUFDVixHQUFHRCxRQUFRO1lBQ1hHLFFBQVE7Z0JBQUUsR0FBR0gsU0FBU0csTUFBTTtnQkFBRUMsVUFBVVM7WUFBaUI7UUFDM0Q7SUFDRjtJQUVBLFNBQVNDLDBCQUEwQlAsS0FBSztRQUN0Q0EsTUFBTUM7UUFDTixJQUFJTyxpQkFBaUJSLE1BQU1HLE9BQU9DO1FBQ2xDVixZQUFZO1lBQ1YsR0FBR0QsUUFBUTtZQUNYRyxRQUFRO2dCQUFFLEdBQUdILFNBQVNHLE1BQU07Z0JBQUVFLGVBQWVVO1lBQWU7UUFDOUQ7SUFDRjtJQUVBLHFCQUNFLDhEQUFDbEIsb0RBQVVBOzswQkFDVCw4REFBQ0MsOERBQW9CQTs7a0NBQ25CLDhEQUFDa0I7d0JBQU1DLFNBQVE7a0NBQU87Ozs7OztrQ0FDdEIsOERBQUNDO3dCQUFNQyxJQUFHO3dCQUFPUixPQUFPWCxTQUFTRTt3QkFBTWtCLFVBQVVkOzs7Ozs7Ozs7Ozs7MEJBRW5ELDhEQUFDUiw4REFBb0JBOztrQ0FDbkIsOERBQUNrQjt3QkFBTUMsU0FBUTtrQ0FBVzs7Ozs7O2tDQUMxQiw4REFBQ0M7d0JBQ0NDLElBQUc7d0JBQ0hSLE9BQU9YLFNBQVNHLE9BQU9DO3dCQUN2QmdCLFVBQVVSOzs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNkLDhEQUFvQkE7O2tDQUNuQiw4REFBQ2tCO3dCQUFNQyxTQUFRO2tDQUFnQjs7Ozs7O2tDQUMvQiw4REFBQ0M7d0JBQ0NDLElBQUc7d0JBQ0hSLE9BQU9YLFNBQVNHLE9BQU9FO3dCQUN2QmUsVUFBVU47Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ087O2tDQUNDLDhEQUFDQztrQ0FBR3RCLFNBQVNFOzs7Ozs7b0JBQ1o7b0JBQ0FGLFNBQVNHLE9BQU9DO29CQUNoQjtrQ0FDRCw4REFBQ21COzs7OztvQkFBSztvQkFDZXZCLFNBQVNHLE9BQU9FO29CQUFjOzs7Ozs7Ozs7Ozs7O0FBSTNEO0dBakV3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL2luZGV4LmpzPzZjMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlZEZvcm0sIFN0eWxlZElucHV0Q29udGFpbmVyIH0gZnJvbSBcIi4vRm9ybS5zdHlsZWRcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9ybSgpIHtcbiAgY29uc3QgW21vdW50YWluLCBzZXRNb3VudGFpbl0gPSB1c2VTdGF0ZSh7XG4gICAgbmFtZTogXCJNb3VudCBFdmVyZXN0XCIsXG4gICAgdmFsdWVzOiB7XG4gICAgICBhbHRpdHVkZTogODg0OCxcbiAgICAgIG1vdW50YWluUmFuZ2U6IFwiSGltYWxheWFzXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlTmFtZUNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG5hbWVNb3VudGFpbiA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICBzZXRNb3VudGFpbih7IC4uLm1vdW50YWluLCBuYW1lOiBuYW1lTW91bnRhaW4gfSk7XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVBbHRpdHVkZUNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFsdGl0dWRlTW91bnRhaW4gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgc2V0TW91bnRhaW4oe1xuICAgICAgLi4ubW91bnRhaW4sXG4gICAgICB2YWx1ZXM6IHsgLi4ubW91bnRhaW4udmFsdWVzLCBhbHRpdHVkZTogYWx0aXR1ZGVNb3VudGFpbiB9LFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91bnRhaW5SYW5nZUNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG1vdW50YWluUmFuZ2VzID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHNldE1vdW50YWluKHtcbiAgICAgIC4uLm1vdW50YWluLFxuICAgICAgdmFsdWVzOiB7IC4uLm1vdW50YWluLnZhbHVlcywgbW91bnRhaW5SYW5nZTogbW91bnRhaW5SYW5nZXMgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEZvcm0+XG4gICAgICA8U3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHZhbHVlPXttb3VudGFpbi5uYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gLz5cbiAgICAgIDwvU3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICA8U3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWx0aXR1ZGVcIj5BbHRpdHVkZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImFsdGl0dWRlXCJcbiAgICAgICAgICB2YWx1ZT17bW91bnRhaW4udmFsdWVzLmFsdGl0dWRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbHRpdHVkZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICA8U3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibW91bnRhaW5SYW5nZVwiPk1vdW50YWluIFJhbmdlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwibW91bnRhaW5SYW5nZVwiXG4gICAgICAgICAgdmFsdWU9e21vdW50YWluLnZhbHVlcy5tb3VudGFpblJhbmdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNb3VudGFpblJhbmdlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRJbnB1dENvbnRhaW5lcj5cbiAgICAgIDxvdXRwdXQ+XG4gICAgICAgIDxpPnttb3VudGFpbi5uYW1lfTwvaT5cbiAgICAgICAge1wiIGlzIFwifVxuICAgICAgICB7bW91bnRhaW4udmFsdWVzLmFsdGl0dWRlfVxuICAgICAgICB7XCIgbWV0ZXJzIGhpZ2hcIn1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIChhbmQgbG9jYXRlZCBpbiB0aGUge21vdW50YWluLnZhbHVlcy5tb3VudGFpblJhbmdlfSlcbiAgICAgIDwvb3V0cHV0PlxuICAgIDwvU3R5bGVkRm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlN0eWxlZEZvcm0iLCJTdHlsZWRJbnB1dENvbnRhaW5lciIsIkZvcm0iLCJtb3VudGFpbiIsInNldE1vdW50YWluIiwibmFtZSIsInZhbHVlcyIsImFsdGl0dWRlIiwibW91bnRhaW5SYW5nZSIsImhhbmRsZU5hbWVDaGFuZ2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwibmFtZU1vdW50YWluIiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVBbHRpdHVkZUNoYW5nZSIsImFsdGl0dWRlTW91bnRhaW4iLCJoYW5kbGVNb3VudGFpblJhbmdlQ2hhbmdlIiwibW91bnRhaW5SYW5nZXMiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwib25DaGFuZ2UiLCJvdXRwdXQiLCJpIiwiYnIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Form/index.js\n"));

/***/ })

});