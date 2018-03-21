import ITransaction from './ITransaction';
/**
 * Transaction store interface
 *
 * @export
 * @interface ITransactionStore
 */
export default interface ITransactionStore {
    parentStore: ITransactionStore;
    id: string;
    getPastTransactions(): ITransaction[];
    getFutureTransactions(): ITransaction[];
    executeTransaction(tx?: ITransaction): void;
    rollbackTransaction(): void;
}
