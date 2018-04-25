import React, { Component } from 'react';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onPostSelect: props.onPostSelect,
      title: props.title,
      content: props.content,
      writer: props.writer,
      date: props.date
    };
  }

  render() {
    return (
        <div>
          <h1>{this.state.title}</h1>
          <br/>
          <p>{this.state.content}</p>
          <br/>
          <p>{this.state.writer}</p>
          <br/>
          <p>{this.state.date}</p>
          <button onClick={this.props.addClicked} id='edit'>Add</button>
          <button onClick={this.props.deleteClicked} id='delete' >Delete</button>
        </div>
    );
  }
}