import { TipleDotsSvg } from "../svgs/TripleDotsSvg";
import { useContext, useState } from "react";
import { EditPostModal } from "./EditPostModal";
import { AuthContext } from "../context/AuthContext";
import axios from "axios";
import { PostContext } from "../context/PostContext";
import { postConstants } from "../constants/post_constants";
import { UserContext } from "../context/UserContext";
import "../css/editPost.css";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { RiUserFollowFill } from "react-icons/ri";
import { RiUserUnfollowFill } from "react-icons/ri";

export const EditPost = ({ post }) => {
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
  const {
    _id,
    username,
    postmedialURL,
    // likes: { likeCount },
    // likes: { dislikeBy },
  } = post;
  console.log(post);
  console.log(username);
  console.log(allUsers);

  // console.log(dislikeBy[0,1,2..])

  const postOwner = allUsers.find((user) => user.username === username);
  console.log(postOwner);

  const followOptionOnPosts = postOwner?.followers?.find(
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

  console.log({ post, allUsers, postOwner });
  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        setShowEditPostModal(false);
        setShowOptions(false);
      }}
    >
      <div
        className="tripleDots"
        onClick={(e) => {
          e.stopPropagation();
          setShowOptions((prev) => !prev); //same as toggle functionality, instead of return toggle, it shows true if false and if false if true means prev functionality.
          // console.log(setShowOptions);
        }}
      >
        {" "}
        <TipleDotsSvg />
      </div>

      {showOptions && (
        <div className="editOptionsOnPost">
          {username === currentUser?.username ? (
            <>
              <div className="tripledotsOptions">
                <div className="editbtn">
                  <button
                    className="editbtnOption"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowEditPostModal(true);
                      setShowOptions(false);
                    }}
                  >
                    <span className="editIcon">
                      <MdEdit />
                    </span>
                    Edit
                  </button>
                </div>
                <div className="editbtn">
                  <button
                    className="deletebtnOption"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowEditPostModal(false);
                      handleDelete(_id);
                      // setShowOptions(false);
                      setShowOptions((prev) => !prev);
                    }}
                  >
                    <span className="deleteIcon">
                      <MdDelete />
                    </span>
                    Delete
                  </button>
                </div>
              </div>
            </>
          ) : (
            <div className="tripleDotsOption">
              <button
                className="followOptionbtn"
                onClick={(e) => {
                  e.stopPropagation();
                  followOptionOnPosts
                    ? handleUnFollow(postOwner._id)
                    : handleFollow(postOwner._id);
                  setShowOptions(false);
                }}
              >
                <span className="followIcon"></span>
                {followOptionOnPosts ? (
                  <>
                    {" "}
                    <RiUserUnfollowFill className="followIcon" />
                    Unfollow
                  </>
                ) : (
                  <>
                    {/* <RiUserFollowFill className="followIcon" /> */}
                    <RiUserFollowFill className="unFollowIcon" />
                    Follow{" "}
                  </>
                )}
              </button>
            </div>
          )}
        </div>
      )}
      {showEditPostModal && (
        <EditPostModal
          postId={_id}
          setShowEditPostModal={setShowEditPostModal}
          post={post}
        />
      )}
    </div>
  );
};
