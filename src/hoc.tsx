import * as React from 'react';
import * as PropTypes from 'prop-types';
import ITransactionStore from './ITransactionStore';

export type MapTransactionStoreToProps<P> = (txStore: ITransactionStore, ownProps: P) => any;

/**
 * Connects a container to transaction store
 *
 * @export
 * @template P Container's props type
 * @param {MapTransactionStoreToProps<P>} [mapTransactionStoreToProps] Transaction store to props mapper function
 * @returns
 */
export default function withTransactions<P>(mapTransactionStoreToProps?: MapTransactionStoreToProps<P>) {
  return function (WrappedComponent: React.ComponentType<P>) {
    return class extends React.Component<P> {
      static contextTypes = {
        transactionStore: PropTypes.any,
      };

      get injectedProps() {
        return mapTransactionStoreToProps ?
          mapTransactionStoreToProps(this.context.transactionStore, this.props) :
          { transactionStore: this.context.transactionStore };
      }

      render() {
        const ExtendedWrappedComponent =
          WrappedComponent as React.ComponentType<P & { transactionStore: ITransactionStore; }>;
        return (
          <ExtendedWrappedComponent {...this.props} {...this.injectedProps} />
        );
      }
    };
  };
}

