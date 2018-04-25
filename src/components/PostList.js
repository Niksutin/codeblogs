import React from 'react';
import Post from './Post';

const PostList = (props) => {
  const posts = props.posts.map((post) => {
    return (
      <Post
        addClicked={post.addClicked}
        deleteClicked={post.deleteClicked}
        key={post.id}
        title={post.title}
        content={post.content}
        writer={post.writer}
        date={post.date} />
    )
  });

  return (
    <div>
      {posts}
    </div>
  );
};

export default PostList;