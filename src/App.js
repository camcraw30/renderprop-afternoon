import React, { Component } from 'react';
import './App.css';

import CurrencyConverter from './components/CurrencyConverter';
import CurrencyDisplay from './components/CurrencyDisplay';

class App extends Component {
  render() {
    return (
      <>
        <h2>Render Props</h2>
        <CurrencyConverter render={(currencyData, amount) => (
          <CurrencyDisplay currencyData={currencyData} amount={amount} />
        )} />
      </>
    );
  }
}

export default App;
