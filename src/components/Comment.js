import React, { Component } from 'react';

export default class Comment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: props.content,
      writer: props.writer,
      date: props.date
    };
  }

  render() {
    return (
        <div>
          <p>{this.state.content}</p>
          <p>{this.state.writer}</p>
          <p>{this.state.date}</p>
        </div>
    );
  }
}