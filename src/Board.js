import React, { Component } from 'react';
import Post from './Post.js';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {posts: [{
          title: 'HTML is for nerds',
          text: 'HTML is short from Hyper Text Markup Language!'
        }, {
          title: 'JavaScript basics!',
          text: 'Javascript is a "programming" language.'
        }, {
          title: 'Java, beauty and the beast',
          text: 'Swedish study finds out Java is the best language LOL'
        }
      ]};
  }

  render() {
    return (
        <div>
          {
            this.state.posts.map(function(post, i) {
              return <Post key={i} title={post.title}>{post.text}</Post>;
            })
          }
        </div>
    );
  }
}