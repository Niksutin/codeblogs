import React, { Component } from 'react';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';

export default class AddPostPopup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addPost: this.props.addPost,
      title: '',
      content: '',
      writer: '',
      editing: true
    };
    this.editingSaveClicked = this.editingSaveClicked.bind(this);
    this.editingCancelClicked = this.editingCancelClicked.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  editingSaveClicked(event) {
    event.preventDefault();
    let updatedPost = {
      title: this.state.title,
      content: this.state.content,
      writer: this.state.writer
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

  onChange(event) {
    if (event.target.name === 'post-title') {
      this.setState({title: event.target.value});
    } else if (event.target.name === 'post-content') {
      this.setState({content: event.target.value});
    } else {
      this.setState({writer: event.target.value});
    }
  }

  editingCancelClicked() {
    this.setState({editing: !this.state.editing});
  }

  render() {
    if (this.state.editing) {
      return (
        <div className="post-container">
          <div className="Post-expanded">
            <Form>
              <FormGroup>
                <Label for="post-title">Title</Label>
                <Input onChange={this.onChange} className="comment-writer" type="username" name="post-title" id="post-title"/>
              </FormGroup>
              <FormGroup>
                <Label for="post-content">Post content</Label>
                <Input onChange={this.onChange} className="comment-input" type="textarea" name="post-content" id="post-content"/>
              </FormGroup>
              <FormGroup>
                <Label for="post-writer">Your name</Label>
                <Input onChange={this.onChange} className="comment-writer" type="username" name="post-writer" id="post-writer"/>
              </FormGroup>
              <div className="add-post-buttons">
                <Button onClick={this.editingSaveClicked}>Save</Button>
                <Button onClick={this.editingCancelClicked}>Cancel</Button>
              </div>
            </Form>
          </div>
        </div>
      );
    } else {
      return <div></div>
    }
  }
}