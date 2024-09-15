"use strict";
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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyDocument)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n// // import { Html, Head, Main, NextScript } from 'next/document'\n// // export default function Document() {\n// //   return (\n// //     <Html lang=\"en\">\n// //       <Head />\n// //       <body>\n// //         <Main />\n// //         <NextScript />\n// //       </body>\n// //     </Html>\n// //   )\n// // }\n// import Document from 'next/document';\n// import { ServerStyleSheet } from 'styled-components';\n// export default class MyDocument extends Document {\n//   static async getInitialProps(ctx) {\n//     const sheet = new ServerStyleSheet();\n//     const originalRenderPage = ctx.renderPage;\n//     try {\n//       ctx.renderPage = () =>\n//         originalRenderPage({\n//           enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),\n//         });\n//       const initialProps = await Document.getInitialProps(ctx);\n//       return {\n//         ...initialProps,\n//         styles: (\n//           <>\n//             {initialProps.styles}\n//             {sheet.getStyleElement()}\n//           </>\n//         ),\n//       };\n//     } finally {\n//       sheet.seal();\n//     }\n//   }\n// }\n\n\n\nclass MyDocument extends (next_document__WEBPACK_IMPORTED_MODULE_1___default()) {\n    static async getInitialProps(ctx) {\n        const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__.ServerStyleSheet();\n        const originalRenderPage = ctx.renderPage;\n        try {\n            ctx.renderPage = ()=>originalRenderPage({\n                    enhanceApp: (App)=>(props)=>sheet.collectStyles(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                                ...props\n                            }, void 0, false, {\n                                fileName: \"/Users/dominicfreytag/projekte/oelker/pages/_document.js\",\n                                lineNumber: 54,\n                                columnNumber: 63\n                            }, this))\n                });\n            const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default().getInitialProps(ctx);\n            return {\n                ...initialProps,\n                styles: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        initialProps.styles,\n                        sheet.getStyleElement()\n                    ]\n                }, void 0, true)\n            };\n        } finally{\n            sheet.seal();\n        }\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGtFQUFrRTtBQUVsRSwwQ0FBMEM7QUFDMUMsZ0JBQWdCO0FBQ2hCLDBCQUEwQjtBQUMxQixvQkFBb0I7QUFDcEIsa0JBQWtCO0FBQ2xCLHNCQUFzQjtBQUN0Qiw0QkFBNEI7QUFDNUIsbUJBQW1CO0FBQ25CLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QsT0FBTztBQUNQLHdDQUF3QztBQUN4Qyx3REFBd0Q7QUFFeEQscURBQXFEO0FBQ3JELHdDQUF3QztBQUN4Qyw0Q0FBNEM7QUFDNUMsaURBQWlEO0FBRWpELFlBQVk7QUFDWiwrQkFBK0I7QUFDL0IsK0JBQStCO0FBQy9CLHFGQUFxRjtBQUNyRixjQUFjO0FBRWQsa0VBQWtFO0FBQ2xFLGlCQUFpQjtBQUNqQiwyQkFBMkI7QUFDM0Isb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixvQ0FBb0M7QUFDcEMsd0NBQXdDO0FBQ3hDLGdCQUFnQjtBQUNoQixhQUFhO0FBQ2IsV0FBVztBQUNYLGtCQUFrQjtBQUNsQixzQkFBc0I7QUFDdEIsUUFBUTtBQUNSLE1BQU07QUFDTixJQUFJOztBQUNpQztBQUNnQjtBQUV0QyxNQUFNRSxtQkFBbUJGLHNEQUFRQTtJQUM5QyxhQUFhRyxnQkFBZ0JDLEdBQUcsRUFBRTtRQUNoQyxNQUFNQyxRQUFRLElBQUlKLCtEQUFnQkE7UUFDbEMsTUFBTUsscUJBQXFCRixJQUFJRyxVQUFVO1FBRXpDLElBQUk7WUFDRkgsSUFBSUcsVUFBVSxHQUFHLElBQ2ZELG1CQUFtQjtvQkFDakJFLFlBQVksQ0FBQ0MsTUFBUSxDQUFDQyxRQUFVTCxNQUFNTSxhQUFhLGVBQUMsOERBQUNGO2dDQUFLLEdBQUdDLEtBQUs7Ozs7OztnQkFDcEU7WUFFRixNQUFNRSxlQUFlLE1BQU1aLG9FQUF3QixDQUFDSTtZQUNwRCxPQUFPO2dCQUNMLEdBQUdRLFlBQVk7Z0JBQ2ZDLHNCQUNFOzt3QkFDR0QsYUFBYUMsTUFBTTt3QkFDbkJSLE1BQU1TLGVBQWU7OztZQUc1QjtRQUNGLFNBQVU7WUFDUlQsTUFBTVUsSUFBSTtRQUNaO0lBQ0Y7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL29lbGtlci8uL3BhZ2VzL19kb2N1bWVudC5qcz81MzhiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIC8vIGltcG9ydCB7IEh0bWwsIEhlYWQsIE1haW4sIE5leHRTY3JpcHQgfSBmcm9tICduZXh0L2RvY3VtZW50J1xuXG4vLyAvLyBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEb2N1bWVudCgpIHtcbi8vIC8vICAgcmV0dXJuIChcbi8vIC8vICAgICA8SHRtbCBsYW5nPVwiZW5cIj5cbi8vIC8vICAgICAgIDxIZWFkIC8+XG4vLyAvLyAgICAgICA8Ym9keT5cbi8vIC8vICAgICAgICAgPE1haW4gLz5cbi8vIC8vICAgICAgICAgPE5leHRTY3JpcHQgLz5cbi8vIC8vICAgICAgIDwvYm9keT5cbi8vIC8vICAgICA8L0h0bWw+XG4vLyAvLyAgIClcbi8vIC8vIH1cbi8vIGltcG9ydCBEb2N1bWVudCBmcm9tICduZXh0L2RvY3VtZW50Jztcbi8vIGltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cyc7XG5cbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE15RG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XG4vLyAgIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoY3R4KSB7XG4vLyAgICAgY29uc3Qgc2hlZXQgPSBuZXcgU2VydmVyU3R5bGVTaGVldCgpO1xuLy8gICAgIGNvbnN0IG9yaWdpbmFsUmVuZGVyUGFnZSA9IGN0eC5yZW5kZXJQYWdlO1xuXG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIGN0eC5yZW5kZXJQYWdlID0gKCkgPT5cbi8vICAgICAgICAgb3JpZ2luYWxSZW5kZXJQYWdlKHtcbi8vICAgICAgICAgICBlbmhhbmNlQXBwOiAoQXBwKSA9PiAocHJvcHMpID0+IHNoZWV0LmNvbGxlY3RTdHlsZXMoPEFwcCB7Li4ucHJvcHN9IC8+KSxcbi8vICAgICAgICAgfSk7XG5cbi8vICAgICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xuLy8gICAgICAgcmV0dXJuIHtcbi8vICAgICAgICAgLi4uaW5pdGlhbFByb3BzLFxuLy8gICAgICAgICBzdHlsZXM6IChcbi8vICAgICAgICAgICA8PlxuLy8gICAgICAgICAgICAge2luaXRpYWxQcm9wcy5zdHlsZXN9XG4vLyAgICAgICAgICAgICB7c2hlZXQuZ2V0U3R5bGVFbGVtZW50KCl9XG4vLyAgICAgICAgICAgPC8+XG4vLyAgICAgICAgICksXG4vLyAgICAgICB9O1xuLy8gICAgIH0gZmluYWxseSB7XG4vLyAgICAgICBzaGVldC5zZWFsKCk7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5pbXBvcnQgRG9jdW1lbnQgZnJvbSAnbmV4dC9kb2N1bWVudCc7XG5pbXBvcnQgeyBTZXJ2ZXJTdHlsZVNoZWV0IH0gZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNeURvY3VtZW50IGV4dGVuZHMgRG9jdW1lbnQge1xuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKGN0eCkge1xuICAgIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKTtcbiAgICBjb25zdCBvcmlnaW5hbFJlbmRlclBhZ2UgPSBjdHgucmVuZGVyUGFnZTtcblxuICAgIHRyeSB7XG4gICAgICBjdHgucmVuZGVyUGFnZSA9ICgpID0+XG4gICAgICAgIG9yaWdpbmFsUmVuZGVyUGFnZSh7XG4gICAgICAgICAgZW5oYW5jZUFwcDogKEFwcCkgPT4gKHByb3BzKSA9PiBzaGVldC5jb2xsZWN0U3R5bGVzKDxBcHAgey4uLnByb3BzfSAvPiksXG4gICAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpbml0aWFsUHJvcHMgPSBhd2FpdCBEb2N1bWVudC5nZXRJbml0aWFsUHJvcHMoY3R4KTtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC4uLmluaXRpYWxQcm9wcyxcbiAgICAgICAgc3R5bGVzOiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIHtpbml0aWFsUHJvcHMuc3R5bGVzfVxuICAgICAgICAgICAge3NoZWV0LmdldFN0eWxlRWxlbWVudCgpfVxuICAgICAgICAgIDwvPlxuICAgICAgICApLFxuICAgICAgfTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2hlZXQuc2VhbCgpO1xuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbIkRvY3VtZW50IiwiU2VydmVyU3R5bGVTaGVldCIsIk15RG9jdW1lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJjdHgiLCJzaGVldCIsIm9yaWdpbmFsUmVuZGVyUGFnZSIsInJlbmRlclBhZ2UiLCJlbmhhbmNlQXBwIiwiQXBwIiwicHJvcHMiLCJjb2xsZWN0U3R5bGVzIiwiaW5pdGlhbFByb3BzIiwic3R5bGVzIiwiZ2V0U3R5bGVFbGVtZW50Iiwic2VhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.js\n");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.js")));
module.exports = __webpack_exports__;

})();