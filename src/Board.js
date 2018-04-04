import React, { Component } from 'react';
import Post from './Post.js';
import './styles/Board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
    this.add = this.add.bind(this);
    this.removePost = this.removePost.bind(this);
    this.editPost = this.editPost.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/posts')
      .then(results => {
        return results.json();
      }).then(data => {
        console.log("posts", data);
        let fetchedPosts = data.map((post) => {
          return post.content;
        });
        this.setState({posts: fetchedPosts});
      });
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

  render() {
    return (
        <div>
          <button onClick={this.add.bind(null, 'Default text')} className="PostButton" id="add">Add</button>
          { this.state.posts.map((text, i) => {
            return (
                <Post key={i} index={i} editPost={this.editPost} removePost={this.removePost.bind(this)}>
                  {text}
                </Post>
            )
          })}
        </div>
    );
  }
}