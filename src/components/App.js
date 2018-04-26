import _ from 'lodash';
import React, { Component } from 'react';
import PostList from './PostList';
import '../styles/App.css';
import SearchBar from './SearchBar';
import AddPostPopup from './AddPostPopup';
import { Container } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      visiblePosts: [],
    };
    this.fetchPosts();
  }

  fetchPosts() {
    let url = 'http://localhost:8080/posts';
    fetch(url, {
      method: 'GET',
      headers: new Headers({
        'content-type': 'application/json'
        }),
      }).then(results => {
          return results.json();
        }).then(data => {
        console.log('posts ', data);
        this.setState({ posts: data, visiblePosts: data });
    }).catch(function(error) {
      console.log(error);
    });
  }

  addPost(post) {
    let url = 'http://localhost:8080/posts';
    post = {
      title: 'This is great Title',
      content: 'bla bla bla',
      writer: 'Rami'
    };
    fetch(url, {
      method: 'POST',
      headers: new Headers({
        'content-type': 'application/json'
      }),
      body: JSON.stringify({
        title: post.title,
        content: post.text,
        writer: post.writer
      })
    }).then(function (post) {
      console.log('Request success: ', post);
    }).catch(function (error) {
      console.log('Request failure: ', error);
    });
    window.location.reload();
  }

  searchPosts(term) {
    console.log(term, 'term');
    if (term !== '') {
      let newPosts = [];
      this.state.posts.map((post) => {
        if (this.doesContain(term, post)) {
          newPosts.push(post);
          return true;
        }
        return false;
      });
      this.setState({ visiblePosts: newPosts });
    } else {
      this.setState({ visiblePosts: this.state.posts});
    }
  }

  doesContain(term, post) {
    let title = post.title.toLowerCase();
    let writer = post.writer.toLowerCase();
    return title.includes(term) || writer.includes(term);
  }

  render() {
    const searchPosts = _.debounce((term) => { this.searchPosts(term) }, 300);
    return (
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Codeblogs</h1>
          <SearchBar onSearchTermChange={searchPosts}/>
          <br/>
          <button onClick={this.addPost}>Add Post</button>
        </header>
        <Container className="postList-container">
        <PostList posts={this.state.visiblePosts}/>
        </Container>
        <div className="app-footer"/>
      </div>
    );
}
}

export default App;
