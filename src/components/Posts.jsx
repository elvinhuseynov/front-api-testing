import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Posts = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      setPosts(response.data);
    };

    fetchPosts();
  }, []);

  const [posts, setPosts] = useState([]);
  const listPosts = () =>
    posts.map((post) => (
      <Link to={`posts/${post.id}`} key={post.id}>
        <div>
          <strong>User id:</strong> {post.userId}
        </div>
        <div>
          <strong>Post id:</strong> {post.id}
        </div>
        <div>
          <strong>Post title:</strong> {post.title}
        </div>
        <div>
          <strong>Post body:</strong> {post.body}
        </div>
        <hr />
      </Link>
    ));
  return <div>{posts ? listPosts() : "Loading..."}</div>;
};

export default Posts;
