import axios from "axios";
import React, { useEffect, useState } from "react";

const Posts = () => {
  useEffect(() => {
    const location = window.location.href.split("/");

    const fetchPosts = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${location[4]}`
      );

      setPost(response.data);
    };

    fetchPosts();
  }, []);

  const [post, setPost] = useState([]);
  const listSinglePost = () => (
    <div>
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
    </div>
  );
  return <div>{post ? listSinglePost() : "Loading..."}</div>;
};

export default Posts;
