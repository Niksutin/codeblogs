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
        <div className="comment-container">
          <div className="Post-footer-item">
            <i className="material-icons">portrait</i>
            <p>{this.state.writer}</p>
          </div>
          <div className="Post-footer-item">
            <i className="material-icons">query_builder</i>
            <p>{this.state.date}</p>
          </div>
          <p>{this.state.content}</p>
        </div>
    );
  }
}