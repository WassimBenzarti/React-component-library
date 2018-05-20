"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var H1 = styled_components_1.default.h1(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    &:hover{\n        color:black !important;\n    }\n"], ["\n    &:hover{\n        color:black !important;\n    }\n"])));
var MySuperCoolComponent = /** @class */ (function (_super) {
    __extends(MySuperCoolComponent, _super);
    function MySuperCoolComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleClick = function () {
            console.log("Click!");
        };
        return _this;
    }
    MySuperCoolComponent.prototype.render = function () {
        var _a = this.props, color = _a.color, children = _a.children, huge = _a.huge;
        return (react_1.default.createElement(H1, { style: { color: color, fontSize: huge ? 10 : 60 } }, children));
    };
    return MySuperCoolComponent;
}(react_1.Component));
exports.default = MySuperCoolComponent;
var templateObject_1;
//# sourceMappingURL=index.js.map