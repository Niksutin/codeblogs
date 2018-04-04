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
      text: props.text,
      title: props.title,
      editPost: props.editPost,
      removePost: props.removePost,
      editing: props.editing
    };
  }

  componentWillReceiveProps(props) {
    this.setState({text: props.text,
                  title: props.title});
  }

  editClicked() {
    this.setState({editing: true});
  }

  deleteClicked() {
    console.log(this.state.index, " delete clicked");
    this.state.removePost(this.state.index);
  }

  saveClicked() {
    this.state.editPost(this.refs.newText.value,this.refs.newTitle.value, this.state.index);
    this.setState({editing: false});
  }

  renderNormal() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <br/>
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
        <textarea ref="newTitle" className="title" defaultValue={this.state.title}/>
        <br/>
        <textarea ref="newText" className="text" defaultValue={this.state.text}/>
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