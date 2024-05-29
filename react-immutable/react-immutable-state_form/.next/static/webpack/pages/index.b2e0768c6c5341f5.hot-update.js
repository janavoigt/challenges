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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Form_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Form.styled */ \"./components/Form/Form.styled.js\");\n/* harmony import */ var use_immer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! use-immer */ \"./node_modules/use-immer/dist/use-immer.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Form() {\n    _s();\n    const [mountain, updateMountain] = (0,use_immer__WEBPACK_IMPORTED_MODULE_3__.useImmer)({\n        name: \"Mount Everest\",\n        values: {\n            altitude: 8848,\n            mountainRange: \"Himalayas\"\n        }\n    });\n    const handleNameChange = (event)=>{\n        event.preventDefault();\n        let nameMountain = event.target.value;\n        updateMountain((draft)=>{\n            draft.name = nameMountain;\n        });\n    };\n    function handleAltitudeChange(event) {\n        event.preventDefault();\n        let altitudeMountain = event.target.value;\n        updateMountain({\n            ...mountain,\n            values: {\n                ...mountain.values,\n                altitude: altitudeMountain\n            }\n        });\n    }\n    function handleMountainRangeChange(event) {\n        event.preventDefault();\n        let mountainRanges = event.target.value;\n        updateMountain({\n            ...mountain,\n            values: {\n                ...mountain.values,\n                mountainRange: mountainRanges\n            }\n        });\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledForm, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 43,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"name\",\n                        value: mountain.name,\n                        onChange: handleNameChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"altitude\",\n                        children: \"Altitude:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 47,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"altitude\",\n                        value: mountain.values.altitude,\n                        onChange: handleAltitudeChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Form_styled__WEBPACK_IMPORTED_MODULE_2__.StyledInputContainer, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"mountainRange\",\n                        children: \"Mountain Range:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"mountainRange\",\n                        value: mountain.values.mountainRange,\n                        onChange: handleMountainRangeChange\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"output\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                        children: mountain.name\n                    }, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this),\n                    \" is \",\n                    mountain.values.altitude,\n                    \" meters high\",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, this),\n                    \"(and located in the \",\n                    mountain.values.mountainRange,\n                    \")\"\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jana/Desktop/spiced-bootcamp/challenges/react-immutable/react-immutable-state_form/components/Form/index.js\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Form, \"M7/sQFw+CVs2zwBIMuX6NIPB8go=\", false, function() {\n    return [\n        use_immer__WEBPACK_IMPORTED_MODULE_3__.useImmer\n    ];\n});\n_c = Form;\nvar _c;\n$RefreshReg$(_c, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0vaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2dDO0FBQzVCO0FBRXRCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLFVBQVVDLGVBQWUsR0FBR0gsbURBQVFBLENBQUM7UUFDMUNJLE1BQU07UUFDTkMsUUFBUTtZQUNOQyxVQUFVO1lBQ1ZDLGVBQWU7UUFDakI7SUFDRjtJQUVBLE1BQU1DLG1CQUFtQixDQUFDQztRQUN4QkEsTUFBTUM7UUFDTixJQUFJQyxlQUFlRixNQUFNRyxPQUFPQztRQUNoQ1YsZUFBZSxDQUFDVztZQUNkQSxNQUFNVixPQUFPTztRQUNmO0lBQ0Y7SUFFQSxTQUFTSSxxQkFBcUJOLEtBQUs7UUFDakNBLE1BQU1DO1FBQ04sSUFBSU0sbUJBQW1CUCxNQUFNRyxPQUFPQztRQUNwQ1YsZUFBZTtZQUNiLEdBQUdELFFBQVE7WUFDWEcsUUFBUTtnQkFBRSxHQUFHSCxTQUFTRyxNQUFNO2dCQUFFQyxVQUFVVTtZQUFpQjtRQUMzRDtJQUNGO0lBRUEsU0FBU0MsMEJBQTBCUixLQUFLO1FBQ3RDQSxNQUFNQztRQUNOLElBQUlRLGlCQUFpQlQsTUFBTUcsT0FBT0M7UUFDbENWLGVBQWU7WUFDYixHQUFHRCxRQUFRO1lBQ1hHLFFBQVE7Z0JBQUUsR0FBR0gsU0FBU0csTUFBTTtnQkFBRUUsZUFBZVc7WUFBZTtRQUM5RDtJQUNGO0lBRUEscUJBQ0UsOERBQUNwQixvREFBVUE7OzBCQUNULDhEQUFDQyw4REFBb0JBOztrQ0FDbkIsOERBQUNvQjt3QkFBTUMsU0FBUTtrQ0FBTzs7Ozs7O2tDQUN0Qiw4REFBQ0M7d0JBQU1DLElBQUc7d0JBQU9ULE9BQU9YLFNBQVNFO3dCQUFNbUIsVUFBVWY7Ozs7Ozs7Ozs7OzswQkFFbkQsOERBQUNULDhEQUFvQkE7O2tDQUNuQiw4REFBQ29CO3dCQUFNQyxTQUFRO2tDQUFXOzs7Ozs7a0NBQzFCLDhEQUFDQzt3QkFDQ0MsSUFBRzt3QkFDSFQsT0FBT1gsU0FBU0csT0FBT0M7d0JBQ3ZCaUIsVUFBVVI7Ozs7Ozs7Ozs7OzswQkFHZCw4REFBQ2hCLDhEQUFvQkE7O2tDQUNuQiw4REFBQ29CO3dCQUFNQyxTQUFRO2tDQUFnQjs7Ozs7O2tDQUMvQiw4REFBQ0M7d0JBQ0NDLElBQUc7d0JBQ0hULE9BQU9YLFNBQVNHLE9BQU9FO3dCQUN2QmdCLFVBQVVOOzs7Ozs7Ozs7Ozs7MEJBR2QsOERBQUNPOztrQ0FDQyw4REFBQ0M7a0NBQUd2QixTQUFTRTs7Ozs7O29CQUNaO29CQUNBRixTQUFTRyxPQUFPQztvQkFDaEI7a0NBQ0QsOERBQUNvQjs7Ozs7b0JBQUs7b0JBQ2V4QixTQUFTRyxPQUFPRTtvQkFBYzs7Ozs7Ozs7Ozs7OztBQUkzRDtHQW5Fd0JOOztRQUNhRCwrQ0FBUUE7OztLQURyQkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Gb3JtL2luZGV4LmpzPzZjMWYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN0eWxlZEZvcm0sIFN0eWxlZElucHV0Q29udGFpbmVyIH0gZnJvbSBcIi4vRm9ybS5zdHlsZWRcIjtcbmltcG9ydCB7IHVzZUltbWVyIH0gZnJvbSBcInVzZS1pbW1lclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb3JtKCkge1xuICBjb25zdCBbbW91bnRhaW4sIHVwZGF0ZU1vdW50YWluXSA9IHVzZUltbWVyKHtcbiAgICBuYW1lOiBcIk1vdW50IEV2ZXJlc3RcIixcbiAgICB2YWx1ZXM6IHtcbiAgICAgIGFsdGl0dWRlOiA4ODQ4LFxuICAgICAgbW91bnRhaW5SYW5nZTogXCJIaW1hbGF5YXNcIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBoYW5kbGVOYW1lQ2hhbmdlID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgbmFtZU1vdW50YWluID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHVwZGF0ZU1vdW50YWluKChkcmFmdCkgPT4ge1xuICAgICAgZHJhZnQubmFtZSA9IG5hbWVNb3VudGFpbjtcbiAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVBbHRpdHVkZUNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGFsdGl0dWRlTW91bnRhaW4gPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdXBkYXRlTW91bnRhaW4oe1xuICAgICAgLi4ubW91bnRhaW4sXG4gICAgICB2YWx1ZXM6IHsgLi4ubW91bnRhaW4udmFsdWVzLCBhbHRpdHVkZTogYWx0aXR1ZGVNb3VudGFpbiB9LFxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFuZGxlTW91bnRhaW5SYW5nZUNoYW5nZShldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IG1vdW50YWluUmFuZ2VzID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICAgIHVwZGF0ZU1vdW50YWluKHtcbiAgICAgIC4uLm1vdW50YWluLFxuICAgICAgdmFsdWVzOiB7IC4uLm1vdW50YWluLnZhbHVlcywgbW91bnRhaW5SYW5nZTogbW91bnRhaW5SYW5nZXMgfSxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPFN0eWxlZEZvcm0+XG4gICAgICA8U3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwibmFtZVwiIHZhbHVlPXttb3VudGFpbi5uYW1lfSBvbkNoYW5nZT17aGFuZGxlTmFtZUNoYW5nZX0gLz5cbiAgICAgIDwvU3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICA8U3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYWx0aXR1ZGVcIj5BbHRpdHVkZTo8L2xhYmVsPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImFsdGl0dWRlXCJcbiAgICAgICAgICB2YWx1ZT17bW91bnRhaW4udmFsdWVzLmFsdGl0dWRlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVBbHRpdHVkZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvU3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICA8U3R5bGVkSW5wdXRDb250YWluZXI+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibW91bnRhaW5SYW5nZVwiPk1vdW50YWluIFJhbmdlOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwibW91bnRhaW5SYW5nZVwiXG4gICAgICAgICAgdmFsdWU9e21vdW50YWluLnZhbHVlcy5tb3VudGFpblJhbmdlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVNb3VudGFpblJhbmdlQ2hhbmdlfVxuICAgICAgICAvPlxuICAgICAgPC9TdHlsZWRJbnB1dENvbnRhaW5lcj5cbiAgICAgIDxvdXRwdXQ+XG4gICAgICAgIDxpPnttb3VudGFpbi5uYW1lfTwvaT5cbiAgICAgICAge1wiIGlzIFwifVxuICAgICAgICB7bW91bnRhaW4udmFsdWVzLmFsdGl0dWRlfVxuICAgICAgICB7XCIgbWV0ZXJzIGhpZ2hcIn1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIChhbmQgbG9jYXRlZCBpbiB0aGUge21vdW50YWluLnZhbHVlcy5tb3VudGFpblJhbmdlfSlcbiAgICAgIDwvb3V0cHV0PlxuICAgIDwvU3R5bGVkRm9ybT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIlN0eWxlZEZvcm0iLCJTdHlsZWRJbnB1dENvbnRhaW5lciIsInVzZUltbWVyIiwiRm9ybSIsIm1vdW50YWluIiwidXBkYXRlTW91bnRhaW4iLCJuYW1lIiwidmFsdWVzIiwiYWx0aXR1ZGUiLCJtb3VudGFpblJhbmdlIiwiaGFuZGxlTmFtZUNoYW5nZSIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJuYW1lTW91bnRhaW4iLCJ0YXJnZXQiLCJ2YWx1ZSIsImRyYWZ0IiwiaGFuZGxlQWx0aXR1ZGVDaGFuZ2UiLCJhbHRpdHVkZU1vdW50YWluIiwiaGFuZGxlTW91bnRhaW5SYW5nZUNoYW5nZSIsIm1vdW50YWluUmFuZ2VzIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIm9uQ2hhbmdlIiwib3V0cHV0IiwiaSIsImJyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Form/index.js\n"));

/***/ })

});