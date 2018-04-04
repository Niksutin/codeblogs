import React, { Component } from 'react';
import './styles/Button.css';
import './styles/Post.css';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.editClicked = this.editClicked.bind(this);
    this.saveClicked = this.saveClicked.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
    this.state = {
      index: props.index,
      editing: false,
      text: props.children,
      title: "Default",
      editPost: props.editPost,
      removePost: props.removePost
      };
  }

  componentWillReceiveProps(props) {
    this.setState({text: props.children})
  }

  editClicked() {
    this.setState({editing: true});
  }

  deleteClicked() {
    this.state.removePost(this.state.index);
  }

  saveClicked() {
    console.log(this.refs.newText.value);
    this.state.editPost(this.refs.newText.value, this.state.index);
    this.setState({editing: false});
  }

  renderNormal() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.text}</p>
        <br/>
        <button onClick={this.editClicked} className="PostButton" id="edit">Edit</button>
        <button onClick={this.deleteClicked} className="PostButton" id="delete" >Delete</button>
      </div>
    );
  }

  renderForm() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <textarea ref="newText" defaultValue={this.state.text}/>
        <br/>
        <button onClick={this.saveClicked} className="PostButton" id="save">Save</button>
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