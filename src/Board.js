import React, { Component } from 'react';
import Post from './Post.js';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: [
        'HTML is for nerds.',
        'HTML is short from Hyper Text Markup Language!',
        'JavaScript basics!',
        'Javascript is a "programming" language.',
        'Java, beauty and the beast.',
        'Swedish study finds out Java is the best language LOL.'
      ]};
    this.add = this.add.bind(this);
    this.removePost = this.removePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.forEachPost = this.forEachPost.bind(this);
  }

  add(text) {
    let array = this.state.posts;
    array.push(text);
    this.setState({posts: array});
  }

  removePost(i) {
    let array = this.state.posts;
    array.splice(i, 1);
    this.setState({posts: array});
  }

  editPost(inputText, i) {
    let array = this.state.posts;
    array[i] = inputText;
    this.setState({posts: array});
  }

  forEachPost(text, i) {
    return (
      <Post key={i} index={i} editPost={this.editPost} removePost={this.removePost}>
        {text}
      </Post>
    )
  }

  render() {
    return (
        <div>
          <button onClick={this.add.bind(null, 'Default text')} className="PostButton" id="add">Add</button>
          { this.state.posts.map(this.forEachPost) }
        </div>
    );
  }
}