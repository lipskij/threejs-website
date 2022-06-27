"use strict";
exports.id = 58;
exports.ids = [58];
exports.modules = {

/***/ 7058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Nav)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/dist/shared/lib/styled-jsx"
var styled_jsx_ = __webpack_require__(7561);
var styled_jsx_default = /*#__PURE__*/__webpack_require__.n(styled_jsx_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/Drower.tsx



// @ts-ignore
const Drawer = ({ children , isOpen , className =""  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: styled_jsx_default().dynamic([
            [
                "9aa6668f28f264b",
                [
                    isOpen ? `:global(body) { overflow: hidden; } ` : ``
                ]
            ]
        ]) + " " + `root ${className} ${isOpen ? "isOpen" : ""}`,
        children: [
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "9aa6668f28f264b",
                dynamic: [
                    isOpen ? `:global(body) { overflow: hidden; } ` : ``
                ],
                children: `.root.__jsx-style-dynamic-selector{background-color:#141b1e;position:absolute;width:100vw;height:100vh;left:0;right:0;bottom:0;top:0;-webkit-transform:translateY(-100%);-moz-transform:translateY(-100%);-ms-transform:translateY(-100%);-o-transform:translateY(-100%);transform:translateY(-100%);-webkit-transition:-webkit-transform 300ms;-moz-transition:-moz-transform 300ms;-o-transition:-o-transform 300ms;transition:-webkit-transform 300ms;transition:-moz-transform 300ms;transition:-o-transform 300ms;transition:transform 300ms;z-index:2}.isOpen.__jsx-style-dynamic-selector{-webkit-transform:translateY(0);-moz-transform:translateY(0);-ms-transform:translateY(0);-o-transform:translateY(0);transform:translateY(0)}${isOpen ? `:global(body) { overflow: hidden; } ` : ``}
      `
            }),
            children
        ]
    });
};
/* harmony default export */ const Drower = (Drawer);

;// CONCATENATED MODULE: ./components/Hamburger.tsx



// @ts-ignore
const Hamburger = ({ onClick , toggled , className =""  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
        "aria-label": "navigation",
        onClick: onClick,
        className: "jsx-3268e2348078a95f " + styled_jsx_default().dynamic([
            [
                "cf3d6c99cba6cd3e",
                [
                    toggled ? "250%" : 0,
                    toggled ? "45deg" : 0,
                    toggled ? 0 : 1,
                    toggled ? "-250%" : 0,
                    toggled ? "-45deg" : 0
                ]
            ]
        ]) + " " + `root ${className}`,
        children: [
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "3268e2348078a95f",
                children: ".root.jsx-3268e2348078a95f{border:none;outline:none;background:none;position:relative;padding:5px 2px 2px 2px;min-width:45px;min-height:45px;margin-right:.5rem;z-index:3}.bar.jsx-3268e2348078a95f{background-color:#dbf2fe;min-height:4px;min-width:20px;-webkit-transition:-webkit-transform 300ms;-moz-transition:-moz-transform 300ms;-o-transition:-o-transform 300ms;transition:-webkit-transform 300ms;transition:-moz-transform 300ms;transition:-o-transform 300ms;transition:transform 300ms}.bar.jsx-3268e2348078a95f~.bar.jsx-3268e2348078a95f{margin-top:6px}"
            }),
            jsx_runtime_.jsx((styled_jsx_default()), {
                id: "cf3d6c99cba6cd3e",
                dynamic: [
                    toggled ? "250%" : 0,
                    toggled ? "45deg" : 0,
                    toggled ? 0 : 1,
                    toggled ? "-250%" : 0,
                    toggled ? "-45deg" : 0
                ],
                children: `.first.__jsx-style-dynamic-selector{-webkit-transform:translateY(${toggled ? "250%" : 0})rotateZ(${toggled ? "45deg" : 0});-moz-transform:translateY(${toggled ? "250%" : 0})rotateZ(${toggled ? "45deg" : 0});transform:translateY(${toggled ? "250%" : 0})rotateZ(${toggled ? "45deg" : 0})}.second.__jsx-style-dynamic-selector{-webkit-transform:scaleX(${toggled ? 0 : 1});-moz-transform:scaleX(${toggled ? 0 : 1});-ms-transform:scaleX(${toggled ? 0 : 1});-o-transform:scaleX(${toggled ? 0 : 1});transform:scaleX(${toggled ? 0 : 1})}.third.__jsx-style-dynamic-selector{-webkit-transform:translateY(${toggled ? "-250%" : 0})rotateZ(${toggled ? "-45deg" : 0});-moz-transform:translateY(${toggled ? "-250%" : 0})rotateZ(${toggled ? "-45deg" : 0});transform:translateY(${toggled ? "-250%" : 0})rotateZ(${toggled ? "-45deg" : 0})}`
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-3268e2348078a95f " + styled_jsx_default().dynamic([
                    [
                        "cf3d6c99cba6cd3e",
                        [
                            toggled ? "250%" : 0,
                            toggled ? "45deg" : 0,
                            toggled ? 0 : 1,
                            toggled ? "-250%" : 0,
                            toggled ? "-45deg" : 0
                        ]
                    ]
                ]) + " " + "bar first"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-3268e2348078a95f " + styled_jsx_default().dynamic([
                    [
                        "cf3d6c99cba6cd3e",
                        [
                            toggled ? "250%" : 0,
                            toggled ? "45deg" : 0,
                            toggled ? 0 : 1,
                            toggled ? "-250%" : 0,
                            toggled ? "-45deg" : 0
                        ]
                    ]
                ]) + " " + "bar second"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "jsx-3268e2348078a95f " + styled_jsx_default().dynamic([
                    [
                        "cf3d6c99cba6cd3e",
                        [
                            toggled ? "250%" : 0,
                            toggled ? "45deg" : 0,
                            toggled ? 0 : 1,
                            toggled ? "-250%" : 0,
                            toggled ? "-45deg" : 0
                        ]
                    ]
                ]) + " " + "bar third"
            })
        ]
    });
};
/* harmony default export */ const components_Hamburger = (Hamburger);

;// CONCATENATED MODULE: ./components/Nav.tsx






const { className: hamburgerClassName , styles: hamburgerStyles  } = {
    styles: jsx_runtime_.jsx((styled_jsx_default()), {
        id: "b77285ae59fb4c06",
        children: "@media screen and (min-width:480px){.root.jsx-b77285ae59fb4c06{display:none}}"
    }),
    className: "jsx-b77285ae59fb4c06"
};
const Nav = ()=>{
    const { /*#__PURE__*/ 0: isOpen , 1: setIsOpen  } = (0,external_react_.useState)(false);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                width: "105",
                height: "81",
                viewBox: "0 0 75 51",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                style: {
                    padding: "0 0 0 2rem"
                },
                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                    d: "M13.7829 21.4192C19.0757 21.3221 24.6529 20.7405 28.8266 17.1479C31.0902 15.1994 33.7118 11.8825 32.3127 8.69957C30.7623 5.17255 24.4417 3.1335 21.0849 2.40258C16.016 1.29887 9.56825 0.923743 4.92628 3.67454C1.00122 6.0005 1.41921 11.2171 1.86415 15.1693C3.1066 26.2051 10.4161 35.7665 19.5303 41.7391C30.4181 48.8741 46.0336 52.0279 57.4535 44.3145C66.2556 38.3692 70.7668 28.5642 73.141 18.5926",
                    stroke: "#abbbc7",
                    strokeWidth: "3",
                    strokeLinecap: "round"
                })
            }),
            hamburgerStyles,
            /*#__PURE__*/ jsx_runtime_.jsx(components_Hamburger, {
                className: hamburgerClassName,
                toggled: isOpen,
                onClick: ()=>setIsOpen(!isOpen)
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: "desctop-nav",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            children: "HOME"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/about",
                            children: "ABOUT"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/work",
                            children: "WORK"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/contacts",
                            children: "CONTACTS"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Drower, {
                className: hamburgerClassName,
                isOpen: isOpen,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    onClick: ()=>setIsOpen(!isOpen)
                    ,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                children: "HOME"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                children: "ABOUT"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/work ",
                                children: "WORK"
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contacts",
                                children: "CONTACTS"
                            })
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const components_Nav = (Nav);


/***/ })

};
;