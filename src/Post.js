import React, { Component } from 'react';
import './Button.css';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.index = props.index;
    this.title = "";
    this.text = props.children;
    this.editPost = props.editPost;
    this.removePost = props.removePost;
    this.editClicked = this.editClicked.bind(this);
    this.saveClicked = this.saveClicked.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
    this.state = {editing: false};
  }

  editClicked() {
    this.setState({editing: true});
  }

  deleteClicked() {
    this.removePost(this.index);
  }

  saveClicked() {
    console.log(this.refs.newText.value);
    this.editPost(this.refs.newText.value, this.id);
    this.setState({editing: false});
  }

  renderNormal() {
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.text}</p>
        <button onClick={this.editClicked} className="PostButton" id="edit">Edit</button>
        <button onClick={this.deleteClicked} className="PostButton" id="delete" >Delete</button>
      </div>
    );
  }

  renderForm() {
    return (
      <div>
        <h1>{this.title}</h1>
        <textarea ref="newText" defaultValue={this.text}/>
        <button onClick={this.saveClicked} className="PostButton" id="save">Save</button>
        <button onClick={this.deleteClicked} className="PostButton" id="delete" >Delete</button>
      </div>
    );
  }

  render() {
    if (this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  };
}