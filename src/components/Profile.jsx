import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import { PostContext } from "../context/PostContext";
import { Like } from "./LikeComponent";
import { BookmarkBtn } from "./BookmarkBtn";
import "../css/profile.css";
import { UserAvatar } from "./UserAvatar";
import { dummyProfileImage } from "../Utils/image";
import { AuthContext } from "../context/AuthContext";
import { EditProfileModal } from "./EditProfileModal";
import { PostCard } from "./PostCard";
import { FaRegCalendarAlt } from "react-icons/fa";
import { TiAttachment } from "react-icons/ti";

export const Profile = () => {
  const { username } = useParams();
  const { currentUser } = useContext(AuthContext);
  const { handleFollow, handleUnFollow } = useContext(UserContext);
  const {
    users: { selectedUser, allBookmarks },
    getProfile,
  } = useContext(UserContext);
  //   const [data, setData] = useState({});
  // const { currentUser } = useContext(AuthContext);
  console.log(allBookmarks);
  const {
    posts: { allPosts },
  } = useContext(PostContext);

  console.log(selectedUser);
  console.log(allPosts);

  // const getCount = (allposts) => allposts.map((allpost) => allpost.length);
  // console.log(getCount);

  const [editUserProfileModal, setEditUserProfileModal] = useState(false);
  const [profileImage, setProfileImage] = useState(selectedUser?.profileAvatar);

  const displayPosts = allPosts?.filter(
    (posts) => posts.username === selectedUser.username
  );

  const userAlreadyFollowing = selectedUser?.followers?.find(
    (user) => user.username === currentUser.username
  );

  useEffect(() => {
    getProfile(username);
    // getPostsByUsernameOrLoggedInUser(selectedUser?.username);
  }, [username]);

  return (
    <div>
      <h1>
        {selectedUser.firstName}
        <span>{selectedUser.lastName}</span>
      </h1>
      <h3>{displayPosts.length} posts</h3>
      <div className="profile-border">
        <div className="Edit-profile">
          <div className="profilecover-image">
            <img
              src={
                selectedUser.profileBackgroundCover
                  ? selectedUser.profileBackgroundCover
                  : dummyProfileImage
              }
              alt={
                selectedUser.username
                  ? selectedUser.username + "profilebg"
                  : "twitterbgs"
              }
              className="profilebg"
            />
          </div>
          <div className="profile-image">
            <UserAvatar selectedUser={selectedUser} />
            <div>
              {selectedUser?.username === currentUser?.username ? (
                <>
                  <button
                    className="editbutton"
                    onClick={() => setEditUserProfileModal(true)}
                  >
                    Edit Profile
                  </button>
                  <button className="logoutbutton">Logout</button>
                </>
              ) : (
                <>
                  {" "}
                  <button
                    className="buttonFollowProfilePage"
                    onClick={() =>
                      userAlreadyFollowing ? handleUnFollow : handleFollow
                    }
                  >
                    {" "}
                    {userAlreadyFollowing ? "UnFollow" : "Follow"}
                  </button>
                </>
              )}{" "}
            </div>
          </div>
        </div>
        <div>
          <div className="profile-data">
            <p className="firstname">
              <span>{selectedUser.firstName}</span>
              {selectedUser.lastName}{" "}
            </p>
            <div className="profileUsername">@{selectedUser.username}</div>

            <p>
              {selectedUser.bio && <p>{selectedUser.bio}</p>}
              <TiAttachment />{" "}
              {selectedUser.website && (
                <a
                  href={selectedUser?.website}
                  target="_blank"
                  rel="noreferrer"
                  className="linkOfSelectedUser"
                >
                  {selectedUser.website}
                </a>
              )}
            </p>
            <div class="profile-details">
              <p>
                {" "}
                <FaRegCalendarAlt />{" "}
                <span>{selectedUser?.createdAt?.split("T")[0]} </span>
              </p>
              <span> {selectedUser?.followers?.length} </span>
              <span> Followers </span>
              <span> {selectedUser?.following?.length} </span>
              <span> Following </span>{" "}
            </div>
          </div>
        </div>
        <br></br>
      </div>
      <div>
        {displayPosts.map((post) => (
          <PostCard post={post} />
        ))}
      </div>
      {editUserProfileModal && (
        <EditProfileModal setEditUserProfileModal={setEditUserProfileModal} />
      )}
    </div>
  );
};
