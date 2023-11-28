import React from "react";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";

import "../css/editPost.css";

import { PostCard } from "./PostCard";

export const Posts = () => {
  const { posts } = useContext(PostContext);
  console.log(posts);
  return (
    <div className="postsContainer">
      {posts.allPosts.map((post) => {
        return <PostCard post={post} />;
      })}
    </div>
  );
};
