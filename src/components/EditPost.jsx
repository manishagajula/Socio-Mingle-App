import { TipleDotsSvg } from "../svgs/TripleDotsSvg";
import { useContext, useState } from "react";
import { EditPostModal } from "./EditPostModal";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import { postConstants } from "../constants/post_constants";
import { UserContext } from "../context/UserContext";

export const EditPost = ({ content, post }) => {
  const [showEditPostModal, setShowEditPostModal] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  // const [followOption, setShowFollowOption] = useState(false);
  const { token, currentUser } = useContext(AuthContext);
  const { DELETE_POST } = postConstants;
  const { setPosts } = useContext(PostContext);
  const {
    users: { allUsers },
    handleFollow,
    handleUnFollow,
  } = useContext(UserContext);
  const { _id, username } = post;
  console.log(post);
  console.log(username);
  console.log(allUsers);

  const updatedCurrentUser = allUsers.find(
    (user) => user.username === username
  );

  console.log(updatedCurrentUser);

  const followOptionOnPosts = updatedCurrentUser.followers.find(
    (user) => user.username === currentUser.username
  );

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
    <div
      onClick={(e) => {
        e.stopPropagation();
        setShowEditPostModal(false);
        setShowOptions(false);
      }}
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
          setShowOptions((prev) => !prev);
        }}
      >
        {" "}
        <TipleDotsSvg />
      </div>

      {showOptions && (
        <div>
          {username === currentUser?.username ? (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowEditPostModal(true);
                  setShowOptions(false);
                }}
              >
                Edit
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowEditPostModal(false);
                  handleDelete(_id);
                  // setShowOptions(false);
                  setShowOptions((prev) => !prev);
                }}
              >
                Delete
              </button>
            </>
          ) : (
            <button
              onClick={(e) => {
                e.stopPropagation();
                followOptionOnPosts ? handleUnFollow(_id) : handleFollow(_id);
                setShowOptions(false);
              }}
            >
              {followOptionOnPosts ? <>Unfollow</> : <>Follow</>}
            </button>
          )}
        </div>
      )}
      {showEditPostModal && (
        <EditPostModal
          content={content}
          postId={_id}
          setShowEditPostModal={setShowEditPostModal}
        />
      )}
    </div>
  );
};
