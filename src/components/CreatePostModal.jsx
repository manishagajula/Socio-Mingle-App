import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import { postConstants } from "../constants/post_constants";
import "../css/editPostModal.css";
import toast from "react-hot-toast";
import { UserContext } from "../context/UserContext";

export const CreatePostModal = ({ setShowCreatePostModal }) => {
  const [createPost, setCreatePost] = useState("");
  const { token } = useContext(AuthContext);
  const { setPosts } = useContext(PostContext);
  const { CREATE_POST } = postConstants;

  const {
    users: { selectedUser },
  } = useContext(UserContext);

  const handlePost = async (postData) => {
    try {
      const response = await axios.post(
        `/api/posts`,
        { postData },
        {
          headers: { authorization: token },
        }
      );
      console.log(postData);
      console.log(response);
      if (response.status === 201) {
        setPosts({ type: CREATE_POST, payload: response.data.posts });
        toast.success("Successfully created!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="modalOuterWrapperOnsideBar">
      <div
        className="modalInnerWrapperOnsideBar"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        {/* <textarea
          type="text"
          value={createPost}
          rows={50}
          cols={20}
          width="100%"
          onChange={(e) => setCreatePost(e.target.value)}
          className="inputArea"
        /> */}

        {/* <textarea name="" id="" cols="30" rows="10"></textarea> */}
        <img
          src={selectedUser.profileAvatar}
          alt={""}
          className="newPostimageavatar"
        />
        <textarea
          name="textarea"
          id=""
          className="inputArea"
          value={createPost}
          placeholder="What is happening?!"
          onChange={(e) => setCreatePost(e.target.value)}
        ></textarea>
        <div className="createPostButtonss">
          <button
            className="postbutton"
            onClick={() => {
              setShowCreatePostModal(false);
              handlePost(createPost);
            }}
          >
            Post
          </button>
          <button
            className="cancelbtn"
            onClick={() => {
              setShowCreatePostModal(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
