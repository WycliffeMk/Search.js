import React from 'react';
import './App.css';
import Search from './Components/Search';
import NewTransactions from './Components/NewTransactions';
import TransactionsList from './Components/TransactionList';

function App() {
  return (
    <>
      <h1 className='Header'>The Royal Bank Of Flatiron</h1>
      <div className="App">
        <Search/>
        <NewTransactions/>
        <TransactionsList/>
      </div>
      </>
  );
}

export default App;
