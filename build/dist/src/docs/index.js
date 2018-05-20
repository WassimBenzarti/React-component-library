"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var lib_1 = require("../../lib");
require("./styles.css");
function Demo() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", null, "Demo with examples of the component"),
        react_1.default.createElement(lib_1.default, { small: true, color: "brown" }, "Wow what a button")));
}
react_dom_1.render(react_1.default.createElement(Demo, null), document.getElementById("app"));
//# sourceMappingURL=index.js.map