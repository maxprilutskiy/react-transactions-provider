# React Transactions Provider

Simple API for handling undo/redo behavior in React applications

## Installation
`npm i --save react-transactions-provider react prop-types`

## Usage

```
const App = () => (
  <TransactionsProvider>
    <Home />
  </TransactionsProvider>
);

render(<App />, document.querySelector('#root'));
```

```
class Home extends React.Component {
  // ...
}

export default withTransactions()(Home);
```
