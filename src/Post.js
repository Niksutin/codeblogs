import React, { Component } from 'react';
import './Button.css';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.title = props.title;
    this.text = props.children;
    this.editPost = this.editPost.bind(this);
    this.savePost = this.savePost.bind(this);
    this.state = {editing: false};
  }

  editPost() {
    this.setState({editing: true});
  }

  deletePost() {
    alert("Post deleted!");
  }

  savePost() {
    let text = this.refs.newText.value;
    console.log(text);
    this.setState({editing: false});
  }

  renderNormal() {
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.text}</p>
        <button onClick={this.editPost} className="PostButton" id="edit">Edit</button>
        <button onClick={this.deletePost} className="PostButton" id="delete" >Delete</button>
      </div>
    );
  }

  renderForm() {
    return (
      <div>
        <h1>{this.title}</h1>
        <textarea ref="newText" defaultValue={this.text}/>
        <button onClick={this.savePost} className="PostButton" id="save">Save</button>
        <button onClick={Post.deletePost} className="PostButton" id="delete" >Delete</button>
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