import "../css/createEditPostModal.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { postConstants } from "../constants/post_constants";
import { PostContext } from "../context/PostContext";
import { UserContext } from "../context/UserContext";
import { FaRegWindowClose } from "react-icons/fa";

export const EditPostModal = ({ postId, setShowEditPostModal, post }) => {
  const [editContent, setEditContent] = useState(post.content);
  const [mediaUrl, setMediaUrl] = useState(post.postmediaURL);
  // const [deleteImage, setDeleteImage] = useState(false);
  const { token } = useContext(AuthContext);
  const { setPosts } = useContext(PostContext);
  const { EDIT_POST } = postConstants;
  const { DELETE_POST } = postConstants;
  const {
    users: { selectedUser },
  } = useContext(UserContext);

  // const { postmediaURL } = post;
  // console.log(postmediaURL);

  const handleSavePost = async (postId, postmediaURL) => {
    console.log(postId);
    try {
      const response = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData: { content: editContent, postmediaURL } },
        {
          headers: { authorization: token },
        }
      );
      if (response.status === 201) {
        setPosts({ type: EDIT_POST, payload: response.data.posts });
      }
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  // const handleDelete = async (postId) => {
  //   console.log(postId);
  //   try {
  //     const response = await axios.delete(`/api/posts/${postId}`, {
  //       headers: { authorization: token },
  //     });
  //     console.log(response);
  //     if (response.status === 201) {
  //       setPosts({ type: DELETE_POST, payload: response.data.posts });
  //     }
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // useEffect(() => {
  //   setMediaUrl(post.postmedialURL);
  // }, [post]);

  // const handleDelete = (e) => {
  //   console.log("click");
  // };

  console.log({ mediaUrl, post });

  return (
    <div className="modalOuterWrapperOnEditButton">
      <div
        className="modalInnerWrapperOnEditButton"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <img
          src={selectedUser.profileAvatar}
          alt={""}
          className="newPostimageavatar"
        />
        <div className="editPostModalEdit">
          <div className="textareaAndImage">
            {/* <p> Edit your post: (Inside edit post modal) </p> */}
            <textarea
              type="text"
              placeholder="What is happening?!"
              value={editContent}
              rows={50}
              cols={100}
              // width="100%"
              // height="2rem"
              onChange={(e) => setEditContent(e.target.value)}
              className="inputareaOnEditButton"
            />
            {mediaUrl && (
              <div>
                <span className="closeIcons" onClick={() => setMediaUrl("")}>
                  <FaRegWindowClose />
                </span>
                <img
                  src={mediaUrl}
                  alt={post.postmediaAlt}
                  className="imageEditModal"
                />
              </div>
            )}
          </div>
          <div className="buttonsOnEditPostModal">
            <button
              onClick={() => {
                setShowEditPostModal(false);
                handleSavePost(postId, mediaUrl);
              }}
              className="savebuttononEditPostModal"
            >
              Save
            </button>
            <button
              onClick={(e) => {
                setShowEditPostModal(false);
                e.stopPropagation();
              }}
              className="cancelbtnonEditPostModal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
