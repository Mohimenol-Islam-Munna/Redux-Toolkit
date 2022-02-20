import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { fetchPosts } from "../store/slices/postSlice";

const Posts = () => {
  const posts = useSelector((state) => state.posts.posts);
  const dispatch = useDispatch();

  console.log("post list ::", posts);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch(fetchPosts({ posts: res.data }));
      })
      .catch((err) => console.log("data fetching error ::", err));
  }, []);

  return (
    <div>
      <div
        style={{
          width: "60%",
          margin: "20px auto",
          padding: "10px",
          border: "1px solid palegreen",
          borderRadius: "10px",
        }}
      >
        <h2>All Posts</h2>
      </div>

      {posts.map((post) => (
        <div
          style={{
            width: "60%",
            margin: "20px auto",
            padding: "20px",
            border: "1px solid salmon",
            borderRadius: "10px",
            textAlign: "left",
          }}
          key={post.id}
        >
          <h3>Post Title : {post.title}</h3>
          <p>
            <b>Post Description :</b> {post.body}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
