import Layout from "../../components/Layout";
import "./style.css";
import { get } from "../../services/http";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../../components/Card";

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    get("http://localhost:5000/posts").then(({ data }) => {
      setPosts(data);
    });
  }, []);

  const postsCards = posts.map((post, index) => {
    const variant = index === 0 ? "item-1" : "";
    return (
      <Card
        variant={variant}
        data={{
          target: `/post/${post.id}`,
          background: post.image,
          title: post.title,
          summary: post.summary,
        }}
      />
    );
  });

  return (
    <Layout>
      <header>
        <h1>Cool Articles</h1>
      </header>
      <div className="band">{postsCards}</div>
    </Layout>
  );
}
