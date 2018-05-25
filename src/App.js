import React, { Component } from 'react';
import RPS from './screen/rps.screen';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="game">
         <RPS />
      </div>
    );
  }
}

export default App;
