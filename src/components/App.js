import _ from 'lodash';
import React, { Component } from 'react';
import logo from '../img/logo.svg';
import PostList from './PostList';
import '../styles/App.css';
import SearchBar from "./SearchBar";

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
    fetch(url)
        .then(results => {
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
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        title: post.title,
        content: post.text,
        writer: 'testAuthor'
      })
    }).then(function (post) {
      console.log('Request success: ', post);
    }).catch(function (error) {
      console.log('Request failure: ', error);
    });
  }

  searchPosts(term) {
    console.log(term, 'term');
    if (term !== '') {
      let newPosts = [];
      this.state.posts.map((post) => {
        if (this.doesContain(term, post)) {
          newPosts.push(post);
        }
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
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Codeblogs</h1>
          <SearchBar onSearchTermChange={searchPosts}/>
        </header>
        <p className='App-intro'>
        </p>
        <PostList posts={this.state.visiblePosts}/>
      </div>
    );
  }
}

export default App;
