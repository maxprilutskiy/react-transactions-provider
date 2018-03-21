/**
 * Transaction interface
 *
 * @export
 * @interface ITransaction
 */
export default interface ITransaction {
  do(): void;
  undo(): void;
}
