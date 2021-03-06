import React from 'react';
import Post from './Post';

const PostList = (props) => {
  const posts = props.posts.map((post) => {
    return (
        <Post
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.content}
            writer={post.writer}
            date={post.date}
            commentCount={post.comments.length}
            likeCount={post.likes}
            tags={post.tags} />
    )
  });

  return (
      <div>
        {posts}
      </div>
  );
};

export default PostList;