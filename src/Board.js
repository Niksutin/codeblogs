import React, { Component } from 'react';
import Post from './Post.js';
import './styles/Board.css';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postData: [
        {title: "test1", text: "text1", key: 0, editing: false},
        {title: "test2", text: "text2", key: 1, editing: false},
        {title: "test3", text: "text3", key: 2, editing: false}
      ],
      latestId: 0,
      url: 'http://localhost:8080/posts'
    };
    this.add = this.add.bind(this);
    this.removePost = this.removePost.bind(this);
    this.editPost = this.editPost.bind(this);
    this.fetchPosts = this.fetchPosts.bind(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts() {
    let id = 0;
    fetch(this.state.url)
        .then(results => {
          return results.json();
        }).then(data => {
      console.log("posts ", data);
      let fetchedPosts = data.map((post) => {
        console.log(post.id, " id");
        id = post.id;
        return {title: post.title, text: post.content, key: post.id, editing: false};
      });
      this.setState({postData: fetchedPosts, latestId: id});
    }).catch(function(error) {
      console.log(error);
    });
  }

  // This will be used later on
  postPosts(data) {
    fetch(this.state.url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title: data.title,
        content: data.text,
        writer: 'testAuthor'
      })
    })
    .then(function (data) {
      console.log('Request success: ', data);
    })
    .catch(function (error) {
      console.log('Request failure: ', error);
    });
  }

  add(text) {
    let array = this.state.postData;
    array.push({title: text, text: "Default text", key: this.state.latestId + 1, editing: true});
    this.setState({postData: array, latestId: this.state.latestId + 1});
  }

  removePost(id) {
    let array = this.state.postData;
    console.log(array[id], " array");
    for(let i = 0; i < array.length; i++) {
      if (array[i].key === id) {
        array.splice(i, 1);
      }
    }
    this.setState({postData: array});
  }

  editPost(text, title, id) {
    let array = this.state.postData;
    console.log(array, " array");
    for(let i = 0; i < array.length; i++) {
      if (array[i].key === id) {
        console.log(id, " id");
        console.log(array[i].key, " i");
        array[i].title = title;
        array[i].text = text;
      }
    }
    this.setState({postData: array});
  }

  render() {
    return (
        <div>
          <button onClick={this.add.bind(null, 'Write your title here')} className="PostButton" id="add">Add</button>
          {this.state.postData.map(item => {
            return (
              <Post
                key={item.key}
                index={item.key}
                editPost={this.editPost}
                removePost={this.removePost.bind(this)}
                editing={item.editing}
                title={item.title}
                text={item.text}/>
            )
          })}
        </div>
    );
  }
}