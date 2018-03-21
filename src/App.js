import React, { Component } from 'react';
import Menu from "./Menu";
import Board from './Board.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu title="Codeblogs"/>
        </header>
        <div className="App-posts">
          <Board/>
        </div>
      </div>
    );
  }
}

export default App;
