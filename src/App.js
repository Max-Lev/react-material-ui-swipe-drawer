import React, { Component } from 'react';
import SwipeableDrawerComponent from './components/drawer.layout.component';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SwipeableDrawerComponent></SwipeableDrawerComponent>
      </div>
    );
  }
}

export default App;
