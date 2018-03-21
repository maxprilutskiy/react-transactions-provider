/// <reference types="react" />
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
    static displayName: string;
    static contextTypes: {
        transactionStore: PropTypes.Requireable<any>;
    };
    static childContextTypes: {
        transactionStore: PropTypes.Requireable<any>;
    };
    private pastTransactions;
    private futureTransactions;
    private _transactionStore;
    /**
     * Get all executed transactions
     *
     * @memberof TransactionProvider
     */
    getPastTransactions: () => ITransaction[];
    /**
     * Get all rollbacked transactions
     *
     * @memberof TransactionProvider
     */
    getFutureTransactions: () => ITransaction[];
    /**
     * Execute new transaction. Executes last rollbacked transaction if no transaction is provided
     *
     * @memberof TransactionProvider
     */
    executeTransaction: (tx?: ITransaction | undefined) => void;
    /**
     * Rollbacks last executed transaction
     *
     * @memberof TransactionProvider
     */
    rollbackTransaction: () => void;
    getChildContext(): {
        transactionStore: {
            parentStore: any;
            id: string | undefined;
            getPastTransactions: () => ITransaction[];
            getFutureTransactions: () => ITransaction[];
            executeTransaction: (tx?: ITransaction | undefined) => void;
            rollbackTransaction: () => void;
        };
    };
    /**
     * React lifecycle method
     *
     * @returns
     * @memberof TransactionProvider
     */
    render(): React.ReactNode;
}
