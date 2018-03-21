import React, { Component } from 'react';
import Post from './Post.js';
import Menu from "./Menu";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Menu title="Codeblogs"/>
        </header>
        <div className="App-posts">
          <Post title="JavaScript basics!">Javascript is a programming language.</Post>
          <Post title="HTML struggling...">HTML is short from Hyper Text Markup Language!</Post>
        </div>
      </div>
    );
  }
}

export default App;
