import "../css/editPostModal.css";
import { useContext, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { postConstants } from "../constants/post_constants";
import { PostContext } from "../context/PostContext";

export const EditPostModal = ({ content, postId, setShowEditPostModal }) => {
  const [editContent, setEditContent] = useState(content);
  const { token } = useContext(AuthContext);
  const { setPosts } = useContext(PostContext);
  const { EDIT_POST } = postConstants;

  const handleSavePost = async (postId) => {
    console.log(postId);
    try {
      const response = await axios.post(
        `/api/posts/edit/${postId}`,
        { postData: { content: editContent } },
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

  return (
    <div className="modalOuterWrapper">
      <div
        className="modalInnerWrapper"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <p> Edit your post: (Inside edit post modal) </p>
        <textarea
          type="text"
          value={editContent}
          rows={5}
          cols={20}
          width="100%"
          onChange={(e) => setEditContent(e.target.value)}
        />
        <button
          onClick={() => {
            setShowEditPostModal(false);
            handleSavePost(postId);
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};
