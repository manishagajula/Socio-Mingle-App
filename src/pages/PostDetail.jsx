/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import { postConstants } from "../constants/post_constants";

export const PostDetail = () => {
  const { id } = useParams();
  const {
    setPosts,
    posts: { singlePost },
  } = useContext(PostContext);
  const { GET_SINGLE_POST } = postConstants;
  //   console.log(id);
  const getSinglePostDetail = async (id) => {
    try {
      //   console.log(id);
      const response = await axios.get(`/api/posts/${id}`);
      if (response.status === 200) {
        setPosts({ type: GET_SINGLE_POST, payload: response.data.posts });
      }
      //   console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(singlePost);
  useEffect(() => {
    getSinglePostDetail(id);
  }, [id]);
  return <div>ahsdksdksa</div>;
};
