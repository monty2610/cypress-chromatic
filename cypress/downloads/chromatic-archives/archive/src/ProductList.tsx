import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/src/ProductList.tsx");if (!window.$RefreshReg$) throw new Error("React refresh preamble was not loaded. Something is wrong.");
const prevRefreshReg = window.$RefreshReg$;
const prevRefreshSig = window.$RefreshSig$;
window.$RefreshReg$ = RefreshRuntime.getRefreshReg("/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx");
window.$RefreshSig$ = RefreshRuntime.createSignatureFunctionForTransform;

import * as RefreshRuntime from "/@react-refresh";

import __vite__cjsImport1_react_jsxDevRuntime from "/node_modules/.vite/deps/react_jsx-dev-runtime.js?v=9b8ed802"; const _jsxDEV = __vite__cjsImport1_react_jsxDevRuntime["jsxDEV"];
var _s = $RefreshSig$();
import __vite__cjsImport2_react from "/node_modules/.vite/deps/react.js?v=9e05d56b"; const React = __vite__cjsImport2_react.__esModule ? __vite__cjsImport2_react.default : __vite__cjsImport2_react; const useEffect = __vite__cjsImport2_react["useEffect"]; const useState = __vite__cjsImport2_react["useState"];
const ProductList = ()=>{
    _s();
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        const fetchProducts = async ()=>{
            const response = await fetch('https://fakestoreapi.com/products?sort=asc');
            const data = await response.json();
            setProducts(data);
        };
        fetchProducts();
    }, []);
    return /*#__PURE__*/ _jsxDEV("div", {
        className: "grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4",
        children: products.map((product)=>/*#__PURE__*/ _jsxDEV("div", {
                className: "border p-4 flex flex-col",
                children: [
                    /*#__PURE__*/ _jsxDEV("img", {
                        src: product.image,
                        alt: product.title,
                        className: "w-full h-48 object-cover mb-2"
                    }, void 0, false, {
                        fileName: "/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("h3", {
                        className: "text-lg font-bold",
                        children: product.title
                    }, void 0, false, {
                        fileName: "/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("p", {
                        className: "text-gray-800",
                        children: [
                            "$",
                            product.price
                        ]
                    }, void 0, true, {
                        fileName: "/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ _jsxDEV("div", {
                        className: "flex",
                        children: [
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "text-sm text-gray-600",
                                children: [
                                    product.rating.rate,
                                    " / 5"
                                ]
                            }, void 0, true, {
                                fileName: "/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ _jsxDEV("span", {
                                className: "text-xs text-gray-500 ml-2",
                                children: [
                                    "(",
                                    product.rating.count,
                                    " reviews)"
                                ]
                            }, void 0, true, {
                                fileName: "/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this)
                ]
            }, product.id, true, {
                fileName: "/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx",
                lineNumber: 32,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
};
_s(ProductList, "f86L6rLANGURv6GE6gupp7+oOp4=");
_c = ProductList;
export default ProductList;
var _c;
$RefreshReg$(_c, "ProductList");


window.$RefreshReg$ = prevRefreshReg;
window.$RefreshSig$ = prevRefreshSig;

RefreshRuntime.__hmr_import(import.meta.url).then((currentExports) => {
  RefreshRuntime.registerExportsForReactRefresh("/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx", currentExports);
  import.meta.hot.accept((nextExports) => {
    if (!nextExports) return;
    const invalidateMessage = RefreshRuntime.validateRefreshBoundaryAndEnqueueUpdate("/Users/namjain0/visual_regression/examples/cypress-example/src/ProductList.tsx", currentExports, nextExports);
    if (invalidateMessage) import.meta.hot.invalidate(invalidateMessage);
  });
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIlByb2R1Y3RMaXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbiBpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxudHlwZSBQcm9kdWN0ID0ge1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBwcmljZTogbnVtYmVyO1xuICBpbWFnZTogc3RyaW5nO1xuICByYXRpbmc6IHtcbiAgICByYXRlOiBudW1iZXI7XG4gICAgY291bnQ6IG51bWJlcjtcbiAgfTtcbn07XG5cbmNvbnN0IFByb2R1Y3RMaXN0OiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZTxQcm9kdWN0W10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoUHJvZHVjdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL2Zha2VzdG9yZWFwaS5jb20vcHJvZHVjdHM/c29ydD1hc2MnKTtcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBzZXRQcm9kdWN0cyhkYXRhKTtcbiAgICB9O1xuXG4gICAgZmV0Y2hQcm9kdWN0cygpO1xuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTEgbWQ6Z3JpZC1jb2xzLTMgbGc6Z3JpZC1jb2xzLTQgZ2FwLTQgcC00XCI+XG4gICAgICAgIFxuICAgICAge3Byb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgPGRpdiBrZXk9e3Byb2R1Y3QuaWR9IGNsYXNzTmFtZT1cImJvcmRlciBwLTQgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtwcm9kdWN0LmltYWdlfSBhbHQ9e3Byb2R1Y3QudGl0bGV9IGNsYXNzTmFtZT1cInctZnVsbCBoLTQ4IG9iamVjdC1jb3ZlciBtYi0yXCIgLz5cbiAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidGV4dC1sZyBmb250LWJvbGRcIj57cHJvZHVjdC50aXRsZX08L2gzPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS04MDBcIj4ke3Byb2R1Y3QucHJpY2V9PC9wPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWdyYXktNjAwXCI+e3Byb2R1Y3QucmF0aW5nLnJhdGV9IC8gNTwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteHMgdGV4dC1ncmF5LTUwMCBtbC0yXCI+KHtwcm9kdWN0LnJhdGluZy5jb3VudH0gcmV2aWV3cyk8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiUHJvZHVjdExpc3QiLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiZmV0Y2hQcm9kdWN0cyIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsInByb2R1Y3QiLCJpbWciLCJzcmMiLCJpbWFnZSIsImFsdCIsInRpdGxlIiwiaDMiLCJwIiwicHJpY2UiLCJzcGFuIiwicmF0aW5nIiwicmF0ZSIsImNvdW50IiwiaWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQyxPQUFPQSxTQUFTQyxTQUFTLEVBQUVDLFFBQVEsUUFBUSxRQUFRO0FBYXBELE1BQU1DLGNBQXdCOztJQUM1QixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsU0FBb0IsRUFBRTtJQUV0REQsVUFBVTtRQUNSLE1BQU1LLGdCQUFnQjtZQUNwQixNQUFNQyxXQUFXLE1BQU1DLE1BQU07WUFDN0IsTUFBTUMsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBQ2hDTCxZQUFZSTtRQUNkO1FBRUFIO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsUUFBQ0s7UUFBSUMsV0FBVTtrQkFFWlIsU0FBU1MsR0FBRyxDQUFDQyxDQUFBQSx3QkFDWixRQUFDSDtnQkFBcUJDLFdBQVU7O2tDQUM5QixRQUFDRzt3QkFBSUMsS0FBS0YsUUFBUUcsS0FBSzt3QkFBRUMsS0FBS0osUUFBUUssS0FBSzt3QkFBRVAsV0FBVTs7Ozs7O2tDQUN2RCxRQUFDUTt3QkFBR1IsV0FBVTtrQ0FBcUJFLFFBQVFLLEtBQUs7Ozs7OztrQ0FDaEQsUUFBQ0U7d0JBQUVULFdBQVU7OzRCQUFnQjs0QkFBRUUsUUFBUVEsS0FBSzs7Ozs7OztrQ0FDNUMsUUFBQ1g7d0JBQUlDLFdBQVU7OzBDQUNiLFFBQUNXO2dDQUFLWCxXQUFVOztvQ0FBeUJFLFFBQVFVLE1BQU0sQ0FBQ0MsSUFBSTtvQ0FBQzs7Ozs7OzswQ0FDN0QsUUFBQ0Y7Z0NBQUtYLFdBQVU7O29DQUE2QjtvQ0FBRUUsUUFBUVUsTUFBTSxDQUFDRSxLQUFLO29DQUFDOzs7Ozs7Ozs7Ozs7OztlQU45RFosUUFBUWEsRUFBRTs7Ozs7Ozs7OztBQVk1QjtHQTdCTXhCO0tBQUFBO0FBK0JOLGVBQWVBLFlBQVkifQ==