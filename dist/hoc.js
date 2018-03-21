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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import React from 'react';
import PropTypes from 'prop-types';
/**
 * Connects a container to transaction store
 *
 * @export
 * @template P Container's props type
 * @param {MapTransactionStoreToProps<P>} [mapTransactionStoreToProps] Transaction store to props mapper function
 * @returns
 */
export default function withTransactions(mapTransactionStoreToProps) {
    return function (WrappedComponent) {
        return _a = /** @class */ (function (_super) {
                __extends(class_1, _super);
                function class_1() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(class_1.prototype, "injectedProps", {
                    get: function () {
                        return mapTransactionStoreToProps ?
                            mapTransactionStoreToProps(this.context.transactionStore, this.props) :
                            { transactionStore: this.context.transactionStore };
                    },
                    enumerable: true,
                    configurable: true
                });
                class_1.prototype.render = function () {
                    var ExtendedWrappedComponent = WrappedComponent;
                    return (React.createElement(ExtendedWrappedComponent, __assign({}, this.props, this.injectedProps)));
                };
                return class_1;
            }(React.Component)),
            _a.contextTypes = {
                transactionStore: PropTypes.any,
            },
            _a;
        var _a;
    };
}
//# sourceMappingURL=hoc.js.map