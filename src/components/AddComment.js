import React, {Component} from 'react';
import {Form, FormGroup, Input, Button, Label} from 'reactstrap';

export default class AddComment extends Component {
  constructor(props) {
    super(props);

    this.postId = props.postId;
    this.state = {
        writer: '',
        comment: ''
    };

    this.submitComment = this.submitComment.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  submitComment(event) {
    event.preventDefault();
     let url = `http://localhost:8080/posts/${this.postId}/comments`;
     let comment = {writer: this.state.writer, text: this.state.comment};
     fetch(url, {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        writer: comment.writer,
        content: comment.text
      })
    }).then(function (post) {
      console.log('Request success: ', post);
    }).catch(function (error) {
      console.log('Request failure: ', error);
    });
    window.location.reload();
  }

  onChange(event) {
    if (event.target.name === 'comment-writer') {
      this.setState({writer: event.target.value});
    } else {
      this.setState({comment: event.target.value});
    }
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.submitComment}>
          <FormGroup>
            <Label for="comment-writer">Name</Label>
            <Input onChange={this.onChange} className="comment-writer" type="username" name="comment-writer" id="comment-writer"/>
          </FormGroup>
          <FormGroup>
            <Label for="comment">Your comment</Label>
            <Input onChange={this.onChange} className="comment-input" type="textarea" name="comment" id="comment"/>
          </FormGroup>
          <Button>Send</Button>
        </Form>
      </div>
    );
  }
}