import axios from "axios";
// import React, { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { postConstants } from "../constants/post_constants";
import { FaRegHeart } from "react-icons/fa";
import "../css/like.css";

export const Like = ({ LikeCount, likedBy, postId }) => {
  const {
    posts: { allPosts },
  } = useContext(PostContext);
  //   const [likeCount, setLikeCount] = useState(0);
  const { token, currentUser } = useContext(AuthContext);
  const { setPosts } = useContext(PostContext);
  const { LIKE_POSTS } = postConstants;

  // console.log({ allPosts });

  const isAlreadyLiked = likedBy?.find(({ _id }) => _id === currentUser?._id);

  //   console.log({ postId });

  // const { currentUser } = useContext(AuthContext);

  // const isAlreadyLiked = (id) => {
  //   return updatedCurrent;
  // };

  const handleLikeCount = async (postId, token) => {
    console.log({ postId, token });
    try {
      const response = await axios.post(
        `/api/posts/like/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log({ response });
      if (response.status === 201) {
        setPosts({ type: LIKE_POSTS, payload: response.data.posts });
      }
      console.log(response.data.posts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDisLikeCount = async (postId, token) => {
    console.log(postId, token);
    try {
      const response = await axios.post(
        `/api/posts/dislike/${postId}`,
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      console.log(response);
      if (response.status === 201) {
        setPosts({ type: LIKE_POSTS, payload: response.data.posts });
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div onClick={(e) => e.stopPropagation(e)}>
      <button
        className="like"
        onClick={(e) => {
          isAlreadyLiked
            ? handleDisLikeCount(postId, token)
            : handleLikeCount(postId, token);
          e.stopPropagation();
        }}
      >
        <FaRegHeart /> <span>{LikeCount}</span>
      </button>
    </div>
  );
};
