"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNBiometricProvider = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var AReactIdentityViewManager = react_native_1.requireNativeComponent('AReactIdentityViewManager');
var RNBiometricProvider = /** @class */ (function (_super) {
    __extends(RNBiometricProvider, _super);
    function RNBiometricProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.props = props;
        return _this;
    }
    RNBiometricProvider.prototype.initialize = function (config) {
        console.log("IBiometricProviderConfig::License = " + config.License);
        var viewId = react_native_1.findNodeHandle(this.ProviderView);
        react_native_1.UIManager.dispatchViewManagerCommand(viewId, "update", ["Simple string from RN working"]);
    };
    RNBiometricProvider.prototype.render = function () {
        var _this = this;
        return (React.createElement(AReactIdentityViewManager, { style: this.props.style, ref: function (component) {
                _this.ProviderView = component;
            } }));
    };
    return RNBiometricProvider;
}(React.Component));
exports.RNBiometricProvider = RNBiometricProvider;
;
//# sourceMappingURL=RNBiometricProvider.js.map