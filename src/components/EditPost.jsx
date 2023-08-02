import { TipleDotsSvg } from "../svgs/TripleDotsSvg";
import { useContext, useState } from "react";
import { EditPostModal } from "./EditPostModal";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import { postConstants } from "../constants/post_constants";

export const EditPost = ({ content, postId }) => {
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const { token } = useContext(AuthContext);
  const { DELETE_POST } = postConstants;
  const { setPosts } = useContext(PostContext);

  const handleDelete = async (postId) => {
    console.log(postId);
    try {
      const response = await axios.delete(`/api/posts/${postId}`, {
        headers: { authorization: token },
      });
      console.log(response);
      if (response.status === 201) {
        setPosts({ type: DELETE_POST, payload: response.data.posts });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <TipleDotsSvg />
      <div>
        <p
          onClick={(e) => {
            e.stopPropagation();
            setShowEditPostModal(true);
          }}
        >
          Edit
        </p>
        <p
          onClick={(e) => {
            e.stopPropagation();
            setShowEditPostModal(false);
            handleDelete(postId);
          }}
        >
          Delete
        </p>
      </div>
      {showEditPostModal && (
        <EditPostModal
          content={content}
          postId={postId}
          setShowEditPostModal={setShowEditPostModal}
        />
      )}
    </div>
  );
};
