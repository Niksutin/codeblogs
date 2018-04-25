import React, { Component } from 'react';
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
      likeCount: props.likeCount,
      showComments: false,
      comments: []
    };
    this.commentsClicked = this.commentsClicked.bind(this);
    this.fetchComments = this.fetchComments.bind(this);
    this.likeClicked = this.likeClicked.bind(this);
  }

  fetchComments() {
    let url = `http://localhost:8080/posts/${this.id}/comments`;
    fetch(url)
        .then(results => {
          return results.json();
        }).then(data => {
      console.log('comments ', data);
      this.setState({ comments: data});
    }).catch(function(error) {
      console.log(error);
    });
  }

  likeClicked() {
    let url = `http://localhost:8080/posts/${this.id}/like`;
    fetch(url, {
      method: 'POST'
    }).then(res => res.json())
      .then(res => { this.setState({ likeCount: res}) })
      .catch(error => console.log('Request failure: ', error))
  }

  commentsClicked() {
    if (this.state.showComments === false) {
      this.fetchComments();
    } else {
      this.setState({ comments: [] });
    }
    this.setState({ showComments: !this.state.showComments });
  }

  render() {
    if (this.state.showComments) {
      return (
          <div>
            <h1>{this.state.title}</h1>
            <p>{this.state.content}</p>
            <p>Writer: {this.state.writer}</p>
            <p>Date: {this.state.date}</p>
            <p>Comments: {this.state.commentCount}</p>
            <p>Likes: {this.state.likeCount}</p>
            <button onClick={this.commentsClicked}>Comments</button>
            <br/>
            <CommentList comments={this.state.comments}/>
          </div>
      );
    } else {
      return (
          <div>
            <h1>{this.state.title}</h1>
            <p>{this.state.content}</p>
            <p>Writer: {this.state.writer}</p>
            <p>Date: {this.state.date}</p>
            <p>Comments: {this.state.commentCount}</p>
            <p>Likes: {this.state.likeCount} <button onClick={this.likeClicked}>Like</button></p>
            <button onClick={this.commentsClicked}>Comments</button>
            <br/>
          </div>
      );
    }
  }
}