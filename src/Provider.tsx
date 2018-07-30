import React from 'react';
import PropTypes from 'prop-types';
import ITransaction from './ITransaction';

/**
 * TransactionProvider component props
 *
 * @export
 * @interface ITransactionProviderProps
 */
export interface ITransactionProviderProps {
  id?: string;
}

/**
 * TransactionProvider component
 *
 * @class TransactionProvider
 * @extends {React.Component<ITransactionProviderProps>}
 */
export default class TransactionProvider extends React.Component<ITransactionProviderProps> {
  /**
   * TransactionProvider component displayName
   *
   * @static
   * @type {string}
   * @memberof TransactionProvider
   */
  static displayName: string = 'TransactionProvider';

  static contextTypes = {
    transactionStore: PropTypes.any,
  };

  static childContextTypes = {
    transactionStore: PropTypes.any,
  };

  private pastTransactions: ITransaction[] = [];
  private futureTransactions: ITransaction[] = [];

  private _transactionStore = null;

  /**
   * Clear transaction store
   *
   * @memberof TransactionProvider
   */
  clear = (): void => {
    this.pastTransactions = [];
    this.futureTransactions = [];
  }

  /**
   * Get all executed transactions
   *
   * @memberof TransactionProvider
   */
  getPastTransactions = (): ITransaction[] => [...this.pastTransactions];

  /**
   * Get all rollbacked transactions
   *
   * @memberof TransactionProvider
   */
  getFutureTransactions = (): ITransaction[] => [...this.futureTransactions];

  /**
   * Execute new transaction. Executes last rollbacked transaction if no transaction is provided
   *
   * @memberof TransactionProvider
   */
  executeTransaction = (tx?: ITransaction): void => {
    if (tx) {
      this.futureTransactions = [];
    }
    const _tx = tx || this.futureTransactions.pop();
    if (!_tx) { return; }
    this.pastTransactions.push(_tx);
    _tx.do();
  }

  /**
   * Rollbacks last executed transaction
   *
   * @memberof TransactionProvider
   */
  rollbackTransaction = (): void => {
    const lastTx = this.pastTransactions.pop();
    if (!lastTx) { return; }
    this.futureTransactions.push(lastTx);
    lastTx.undo();
  }

  getChildContext() {
    const transactionStore = this._transactionStore || {
      getPastTransactions: this.getPastTransactions,
      getFutureTransactions: this.getFutureTransactions,
      executeTransaction: this.executeTransaction,
      rollbackTransaction: this.rollbackTransaction,
      clear: this.clear,
    };
    return {
      transactionStore: {
        ...transactionStore,
        parentStore: this.context.transactionStore,
        id: this.props.id,
      },
    };
  }

  /**
   * React lifecycle method
   *
   * @returns
   * @memberof TransactionProvider
   */
  render() {
    return this.props.children;
  }
}
