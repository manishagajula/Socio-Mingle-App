import { useNavigate } from "react-router-dom";
import { Like } from "./LikeComponent.jsx";
import { BookmarkBtn } from "./BookmarkBtn.jsx";
import { EditPost } from "./EditPost.jsx";
import "../css/postCard.css";
import { UserContext } from "../context/UserContext.jsx";
import { dummyProfileImage } from "../Utils/image.js";
import { useContext } from "react";
import { TimeWhileAgo } from "./TimeWhileAgo.jsx";
import { MonthAndYearInfo } from "./MonthAndYearInfo.jsx";
import { timeDuration } from "../Utils/postTime.js";
import { FaRegCommentAlt } from "react-icons/fa";
import { FiShare } from "react-icons/fi";

export const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const handlePostDetail = (id) => {
    navigate(`/post/${id}`);
  };

  const {
    users: { selectedUser, allUsers },
  } = useContext(UserContext);
  console.log(allUsers);

  const getUserName = allUsers.find(
    (user) => user?.username === post?.username
  );

  const showSelectedUserDp = selectedUser.username === post.username;
  let imageRegex = new RegExp(
    /[^\s]+(.*?).(jpg|jpeg|png|gif|JPG|JPEG|PNG|GIF)$/
  );
  return (
    <div
      key={post.id}
      className="postCardWrapper"
      onClick={(e) => handlePostDetail(post._id)}
    >
      <div className="postCardcontainerssss">
        <div className="iconimage">
          <img
            src={
              showSelectedUserDp
                ? selectedUser.profileAvatar
                : getUserName?.profileAvatar || dummyProfileImage
            }
            alt={""}
            className="icon"
          />
        </div>
        <div className="postCont">
          <div className="postData">
            <div>
              <p className="nameEdit">
                <span className="firstNameEdit">{getUserName.firstName}</span>
                <span className="lastNameEdit">
                  {" "}
                  {getUserName.lastName}
                </span> .{" "}
                <span className="postCreatedDate">
                  {timeDuration(post.createdAt)}
                </span>
              </p>
              <p className="usernameProfile">@{post.username}</p>
            </div>

            <p className="postContent">{post.content}</p>
            {post?.postmediaURL && (
              <>
                {imageRegex.test(post?.postmediaURL) ||
                post?.postmediaURL?.includes("unsplash.com") ? (
                  <img
                    src={post.postmediaURL}
                    alt={post.postmediaAlt}
                    className="image"
                  />
                ) : (
                  <video controls autoPlay loop muted className="image">
                    <source src={post.postmediaURL} type="video/mp4" />
                  </video>
                )}
              </>
            )}
          </div>
          <div className="likeBookmark">
            <Like
              LikeCount={post?.likes?.likeCount}
              likedBy={post?.likes?.likedBy}
              postId={post._id}
            />
            <FaRegCommentAlt />

            <BookmarkBtn postId={post._id} />
            <FiShare />
          </div>
        </div>

        <div className="dotsIcon">
          <EditPost post={post} />
        </div>
      </div>
    </div>
  );
};
