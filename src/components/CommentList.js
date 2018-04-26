import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {
  const comments = props.comments.map((comment) => {
    return (
        <Comment
            key={comment.id}
            id={comment.id}
            content={comment.content}
            writer={comment.writer}
            date={comment.date} />
    )
  });

  return (
      <div>
        {comments}
      </div>
  );
};

export default CommentList;