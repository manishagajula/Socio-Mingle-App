/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import { postConstants } from "../constants/post_constants";
import { UserContext } from "../context/UserContext";
import "../css/postDetails.css";
import { PostCard } from "../components/PostCard";
import { Like } from "../components/LikeComponent";

export const PostDetail = () => {
  const { id } = useParams();
  const {
    setPosts,
    posts: { allPosts, singlePost },
  } = useContext(PostContext);

  const {
    users: { selectedUser, allUsers },
  } = useContext(UserContext);
  console.log(selectedUser);
  console.log(allUsers);

  const getSinglePost = allPosts.find((post) => post._id === singlePost._id);

  console.log(singlePost);

  const { GET_SINGLE_POST } = postConstants;
  //   console.log(id);
  const getSinglePostDetail = async (id) => {
    try {
      //   console.log(id);
      const response = await axios?.get(`/api/posts/${id}`);
      if (response.status === 200) {
        setPosts({ type: GET_SINGLE_POST, payload: response?.data?.post });
      }
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSinglePostDetail(id);
  }, []);

  console.log({ singlePost });
  return (
    <div>
      <div className="postDetailHeader">Post</div>

      {"_id" in singlePost && <PostCard post={getSinglePost} />}
      {/* <Like
        LikeCount={singlePost?.likes?.likeCount}
        likedBy={singlePost.likes.likedBy}
        postId={singlePost._id}
      /> */}
    </div>
  );
};
