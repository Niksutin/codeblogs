import React, { Component } from 'react';

export default class AddPostPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPost: this.props.addPost,
      editing: true
    };
    this.editingSaveClicked = this.editingSaveClicked.bind(this);
    this.editingCancelClicked = this.editingCancelClicked.bind(this);
  }

  editingSaveClicked(event) {
    event.preventDefault();
    let updatedPost = {
      title: this.refs.title.value,
      content: this.refs.content.value,
      writer: this.refs.writer.value
    };
    let url = 'http://localhost:8080/posts';
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        id: this.id,
        title: updatedPost.title,
        content: updatedPost.content,
        writer: updatedPost.writer
      })
    }).then(function (post) {
      console.log('Request success: ', post);
    }).catch(function (error) {
      console.log('Request failure: ', error);
    });
    window.location.reload();
  }

  editingCancelClicked() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    if (this.state.editing) {
      return (
          <div>
            <form>
              Title
              <input ref="title" type="text"/>
              Content
              <input ref="content" type="textarea"/>
              Writer
              <input ref="writer" type="text"/>
              <input type="submit" onClick={this.editingSaveClicked} value="Save" />
            </form>
            <button onClick={this.editingCancelClicked}>Cancel</button>
          </div>
      );
    } else {
      return <div></div>
    }
  }
}