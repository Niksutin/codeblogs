import React, { Component } from 'react';
import {Badge, Button, Container, Form, FormGroup, Input, Label, Row} from 'reactstrap';
import CommentList from './CommentList';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      onPostSelect: props.onPostSelect,
      title: props.title,
      content: props.content,
      writer: props.writer,
      date: props.date,
      commentCount: props.commentCount,
      showComments: false,
      comments: []
    };
    this.commentsClicked = this.commentsClicked.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
  }

  fetchComments() {
    let url = `http://localhost:8080/posts/${this.id}/comments`;
    fetch(url)
        .then(results => {
          console.log(results, '>resuslts');
          return results.json();
        }).then(data => {
      console.log('comments ', data);
      this.setState({ comments: data});
    }).catch(function(error) {
      console.log(error);
    });
  }

  commentsClicked() {
    console.log(this.props);
    if (this.state.showComments === false) {
      this.fetchComments();
    } else {
      this.setState( { comments:[] } );
    }
    this.setState({ showComments: !this.state.showComments });
  }

  renderMin() {
    return (
      <Row>
        <div onClick={this.commentsClicked} className="post-container">
          <div className="Post">
            <div>
              <h2 className="Post-title">{this.state.title}</h2>
              <div className="Post-tag-container">
                <Badge color="secondary">Java</Badge>
                <Badge color="secondary">MySQL</Badge>
              </div>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">portrait</i>
              <p>{this.state.writer}</p>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">query_builder</i>
              <p>{this.state.date}</p>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">chat_bubble_outline</i>
              <p>{this.state.commentCount}</p>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">thumb_up</i>
              <p>46</p>
            </div>
          </div>
        </div>
      </Row>

    )
  }

  renderExpanded() {
    return (
      <Row>
        <div className="post-container">
          <div onClick={this.commentsClicked} className="Post">
            <div>
              <h2 className="Post-title">{this.state.title}</h2>
              <div className="Post-tag-container">
                <Badge color="secondary">Java</Badge>
                <Badge color="secondary">MySQL</Badge>
              </div>
            </div>
            <div>
              <p>{this.state.content}</p>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">portrait</i>
              <p>{this.state.writer}</p>
            </div>
            <div className="Post-footer-item">
              <i className="material-icons">query_builder</i>
              <p>{this.state.date}</p>
            </div>
            <Button className="post-like">
                <i className="material-icons">thumb_up</i>
                <p>46</p>
            </Button>
          </div>
          <div className="comment-container">
            <div className="post-comments-title">
              <h5>Response to "{this.state.title}"</h5>
            </div>
            <Form >
              <FormGroup>
                <Label for="comment-writer">Name</Label>
                <Input className="comment-writer" type="username" name="comment-writer" id="comment-writer"/>
              </FormGroup>
              <FormGroup>
                <Label for="comment">Your comment</Label>
                <Input className="comment-input" type="textarea" name="comment" id="comment"/>
              </FormGroup>
              <Button>Send</Button>
            </Form>
          </div>
          <div className="post-comments-title">
            <h5>{this.state.commentCount} responses to "{this.state.title}"</h5>
          </div>
          <div className="post-comments">
            <CommentList comments={this.state.comments} />
          </div>
        </div>
      </Row>
    );
  }

  renderLogin() {
    return (
      <Container>
        <div className="row justify-content-center">
          <div className="col-10 col-sm-7 col-md-5 col-lg-4">
            <h1>Login</h1>
            <Form className="form">
              <FormGroup>
                <Label for="username">Username</Label>
                <Input type="username" name="username" id="username" placeholder="admin"/>
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="password"/>
              </FormGroup>
              <Button>Log In</Button>
            </Form>
          </div>
        </div>
      </Container>
    );
  }

  render() {
    if (this.state.showComments) {
      return this.renderExpanded();
    } else {
      return this.renderMin();
    }
  }
}