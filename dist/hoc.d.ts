/// <reference types="react" />
import React from 'react';
import PropTypes from 'prop-types';
import ITransactionStore from './ITransactionStore';
export declare type MapTransactionStoreToProps<P> = (txStore: ITransactionStore, ownProps: P) => any;
/**
 * Connects a container to transaction store
 *
 * @export
 * @template P Container's props type
 * @param {MapTransactionStoreToProps<P>} [mapTransactionStoreToProps] Transaction store to props mapper function
 * @returns
 */
export default function withTransactions<P>(mapTransactionStoreToProps?: MapTransactionStoreToProps<P>): (WrappedComponent: React.ComponentType<P>) => {
    new (props: P, context?: any): {
        readonly injectedProps: any;
        render(): JSX.Element;
        setState<K extends never>(state: {} | ((prevState: Readonly<{}>, props: P) => {} | Pick<{}, K> | null) | Pick<{}, K> | null, callback?: (() => void) | undefined): void;
        forceUpdate(callBack?: (() => void) | undefined): void;
        props: Readonly<{
            children?: React.ReactNode;
        }> & Readonly<P>;
        state: Readonly<{}>;
        context: any;
        refs: {
            [key: string]: React.ReactInstance;
        };
    };
    contextTypes: {
        transactionStore: PropTypes.Requireable<any>;
    };
};
