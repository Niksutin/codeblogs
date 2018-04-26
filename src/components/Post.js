import React, { Component } from 'react';
import { Badge, Button, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import CommentList from './CommentList';
import AddComment from './AddComment';

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.id = props.id;
    this.state = {
      onPostSelect: props.onPostSelect,
      title: props.title,
      tags: props.tags,
      content: props.content,
      writer: props.writer,
      date: props.date,
      commentCount: props.commentCount,
      likeCount: props.likeCount,
      expanded: false,
      editing: false,
      comments: []
    };
    this.postClicked = this.postClicked.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
    this.likeClicked = this.likeClicked.bind(this);
    this.deleteClicked = this.deleteClicked.bind(this);
    this.editClicked = this.editClicked.bind(this);
    this.editingCancelClicked = this.editingCancelClicked.bind(this);
    this.editingSaveClicked = this.editingSaveClicked.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  fetchComments() {
    let url = `http://localhost:8080/posts/${this.id}/comments`;
    fetch(url, {
      method: 'get',
      headers: new Headers({
        'content-type': 'application/json'
        }),
      }).then(results => {
          return results.json();
        }).then(data => {
      console.log('comments ', data);
      this.setState({ comments: data});
    }).catch(function(error) {
      console.log(error);
    });
  }

  deleteClicked() {
    let url = `http://localhost:8080/posts/${this.id}`;
    fetch(url, {
      method: 'delete'
    }).then(results => {
      return console.log(results);
    }).catch(function(error) {
      console.log(error);
    });
    window.location.reload();
  }

  editClicked() {
    this.setState({editing: !this.state.editing});
  }

  editingCancelClicked() {
    this.setState({editing: !this.state.editing});
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
      method: 'PUT',
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

  likeClicked() {
    let url = `http://localhost:8080/posts/${this.id}/like`;
    fetch(url, {
      method: 'POST',
    }).then(res => res.json())
      .then(res => { this.setState({ likeCount: res}) })
      .catch(error => console.log('Request failure: ', error))
  }

  postClicked() {
    if (this.state.expanded === false) {
      this.fetchComments();
    } else {
      this.setState({ comments: [] });
    }
    this.setState({ expanded: !this.state.expanded });
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

  renderEditing() {
    return (
        <div>
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
            <Button onClick={this.editingSaveClicked}>Save</Button>
            <Button onClick={this.editingCancelClicked}>Cancel</Button>
          </Form>
        </div>
    );
  }

  renderMin() {
    return (
      <Row>
        <div onClick={this.postClicked} className="post-container">
          <div className="Post">
            <div>
              <h2 className="Post-title">{this.state.title}</h2>
              <div className="Post-tag-container">
                {this.state.tags.map((tag, i) => {
                  return <Badge key={tag + i} color="secondary">{tag}</Badge>
                })}
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
              <p>{this.state.likeCount}</p>
            </div>
          </div>
        </div>
      </Row>
    )
  }

  renderExpanded() {
    if (this.state.editing) {
      return this.renderEditing();
    } else {
      return (
          <Row>
            <div className="post-container">
              <div className="Post-expanded">
                <div className="post-buttons">
                  <Button onClick={this.deleteClicked}>
                    <i className="material-icons">delete</i>
                  </Button>
                  <Button onClick={this.editClicked}>
                    <i className="material-icons">mode_edit</i>
                  </Button>
                  <Button onClick={this.postClicked}>
                    <i className="material-icons">close</i>
                  </Button>
                </div>
                <div className="post-title-container">
                  <h2 className="Post-title">{this.state.title}</h2>
                  <div className="Post-tag-container">
                    {this.state.tags.map((tag, i) => {
                      return <Badge key={tag + i} color="secondary">{tag}</Badge>
                    })}
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
                <Button onClick={this.likeClicked} className="post-like">
                  <i className="material-icons">thumb_up</i>
                  <p>{this.state.likeCount}</p>
                </Button>
              </div>
              <div className="comment-container">
                <div className="post-comments-title">
                  <h5>Response to "{this.state.title}"</h5>
                  <AddComment postId={this.id} />
                  </div>
                </div>
              <div className="post-comments-title">
                <h5>{this.state.commentCount} responses to "{this.state.title}"</h5>
              </div>
              <div className="post-comments">
                <CommentList comments={this.state.comments}/>
              </div>
            </div>
          </Row>
      );
    }
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
    if (this.state.expanded) {
      return this.renderExpanded();
    } else {
      return this.renderMin();
    }
  }
}