import { useNavigate } from "react-router-dom";
import { Like } from "./LikeComponent";
import { BookmarkBtn } from "./BookmarkBtn";
import { EditPost } from "./EditPost";
import "../css/postCard.css";
import { UserContext } from "../context/UserContext";
import { dummyProfileImage } from "../Utils/image";
import { useContext } from "react";

export const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const handlePostDetail = (id) => {
    navigate(`/post/${id}`);
  };
  const {
    users: { selectedUser, allUsers },
  } = useContext(UserContext);
  console.log(allUsers);

  const profiledp = allUsers.find(
    (user) => user.username === selectedUser.username
  );

  console.log(profiledp);

  const getUserName = allUsers.find(
    (user) => user?.username === post?.username
  );
  console.log(getUserName);
  return (
    <div
      key={post.id}
      className="postCardWrapper"
      onClick={(e) => handlePostDetail(post._id)}
    >
      <div className="postCardcontainerssss">
        <div className="iconimage">
          <img
            src={getUserName?.profileAvatar || dummyProfileImage}
            alt={""}
            className="icon"
          />
        </div>
        <div className="postCont">
          <div className="postData">
            <p className="nameEdit">
              <span className="firstNameEdit">{getUserName.firstName}</span>
              <span className="lastNameEdit"> {getUserName.lastName}</span>
            </p>
            <p className="usernameProfile">@{post.username}</p>
            <p>{post.createdAt}</p>
            <p>{post.content}</p>
            <img
              src={post.postmediaURL}
              alt={post.postmediaAlt}
              className="image"
            />
            {/* </div> */}
          </div>
          <div className="likeBookmark">
            <Like
              LikeCount={post.likes.likeCount}
              likedBy={post.likes.likedBy}
              postId={post._id}
            />

            <BookmarkBtn postId={post._id} />
          </div>
        </div>

        <div className="dotsIcon">
          <EditPost content={post.content} post={post} />
        </div>
      </div>
    </div>
  );
};
