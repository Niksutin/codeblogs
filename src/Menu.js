import React, { Component } from 'react';
import './Button.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }

  render() {
    return <div>
      <h1>{this.title}</h1>
      <button onClick={this.addPost} className="PostButton" id="add">Add</button>
    </div>
  }
}