import React, { Component } from 'react';
import './styles/Button.css';
import './styles/Menu.css';

export default class Menu extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
  }

  render() {
    return <div>
      <h1>{this.title}</h1>
    </div>
  }
}