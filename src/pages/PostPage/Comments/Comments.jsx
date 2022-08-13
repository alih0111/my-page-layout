import React from "react";
import { useState, useEffect } from "react";
import { loadComments } from "./commentsApi";

export default function Comments({ postId }) {
  const [comments, setComments] = useState(null);

  useEffect(() => {
    loadComments(postId).then(({ data }) => setComments(data));
  }, [postId]);

  const commentsList = !comments ? (
    <p>loading...</p>
  ) : (
    comments.map((comment) => <li key={comment.id}>{comment.summary}</li>)
  );
  return <ul>{commentsList}</ul>;
}
