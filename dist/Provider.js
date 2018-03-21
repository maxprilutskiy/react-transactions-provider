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
 * TransactionProvider component
 *
 * @class TransactionProvider
 * @extends {React.Component<ITransactionProviderProps>}
 */
var TransactionProvider = /** @class */ (function (_super) {
    __extends(TransactionProvider, _super);
    function TransactionProvider() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.pastTransactions = [];
        _this.futureTransactions = [];
        _this._transactionStore = null;
        /**
         * Get all executed transactions
         *
         * @memberof TransactionProvider
         */
        _this.getPastTransactions = function () { return _this.pastTransactions.slice(); };
        /**
         * Get all rollbacked transactions
         *
         * @memberof TransactionProvider
         */
        _this.getFutureTransactions = function () { return _this.futureTransactions.slice(); };
        /**
         * Execute new transaction. Executes last rollbacked transaction if no transaction is provided
         *
         * @memberof TransactionProvider
         */
        _this.executeTransaction = function (tx) {
            if (tx) {
                _this.futureTransactions = [];
            }
            var _tx = tx || _this.futureTransactions.pop();
            if (!_tx) {
                return;
            }
            _this.pastTransactions.push(_tx);
            _tx.do();
        };
        /**
         * Rollbacks last executed transaction
         *
         * @memberof TransactionProvider
         */
        _this.rollbackTransaction = function () {
            var lastTx = _this.pastTransactions.pop();
            if (!lastTx) {
                return;
            }
            _this.futureTransactions.push(lastTx);
            lastTx.undo();
        };
        return _this;
    }
    TransactionProvider.prototype.getChildContext = function () {
        var transactionStore = this._transactionStore || {
            getPastTransactions: this.getPastTransactions,
            getFutureTransactions: this.getFutureTransactions,
            executeTransaction: this.executeTransaction,
            rollbackTransaction: this.rollbackTransaction,
        };
        return {
            transactionStore: __assign({}, transactionStore, { parentStore: this.context.transactionStore, id: this.props.id }),
        };
    };
    /**
     * React lifecycle method
     *
     * @returns
     * @memberof TransactionProvider
     */
    TransactionProvider.prototype.render = function () {
        return this.props.children;
    };
    /**
     * TransactionProvider component displayName
     *
     * @static
     * @type {string}
     * @memberof TransactionProvider
     */
    TransactionProvider.displayName = 'TransactionProvider';
    TransactionProvider.contextTypes = {
        transactionStore: PropTypes.any,
    };
    TransactionProvider.childContextTypes = {
        transactionStore: PropTypes.any,
    };
    return TransactionProvider;
}(React.Component));
export default TransactionProvider;
//# sourceMappingURL=Provider.js.map