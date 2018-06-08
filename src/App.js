import React, { Component } from 'react';
import logo from './logo.svg';
import Number from './Components/Number/Number';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <Number
            value={ 123456789 }
          />
          <Number
            value={ -987654321 }
          />
          <Number
            value={ 0 }
          />
        </p>
      </div>
    );
  }
}

export default App;
