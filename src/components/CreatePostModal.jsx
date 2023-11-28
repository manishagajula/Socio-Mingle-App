import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import { postConstants } from "../constants/post_constants";

export const CreatePostModal = ({ setShowCreatePostModal }) => {
  const [createPost, setCreatePost] = useState("");
  const { token } = useContext(AuthContext);
  const { setPosts } = useContext(PostContext);
  const { CREATE_POST } = postConstants;

  const handlePost = async (postData) => {
    try {
      const response = await axios.post(
        `/api/posts`,
        { postData },
        {
          headers: { authorization: token },
        }
      );

      if (response.status === 201) {
        setPosts({ type: CREATE_POST, payload: response.data.posts });
      }
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
        <textarea
          type="text"
          value={createPost}
          rows={5}
          cols={20}
          width="100%"
          onChange={(e) => setCreatePost(e.target.value)}
        />

        <button
          onClick={() => {
            setShowCreatePostModal(false);
            handlePost(createPost);
          }}
        >
          Post
        </button>
        <button
          onClick={() => {
            setShowCreatePostModal(false);
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
