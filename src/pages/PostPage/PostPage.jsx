import Layout from "../../components/Layout";
import { useEffect } from "react";
import { loadPost } from "./posts";
import { useState } from "react";
import Comments from "./Comments";

export default function PostPage({ id }) {
  const [post, setPost] = useState(null);
  useEffect(() => {
    loadPost(id).then(({ data }) => setPost(data));
  }, [id]);

  return (
    <Layout>
      {!post ? (
        <p>loading..</p>
      ) : (
        <>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
          <Comments postId={post.id} />
        </>
      )}
    </Layout>
  );
}
