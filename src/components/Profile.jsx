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
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { parseISO } from "date-fns";
import { MonthAndYearInfo } from "./MonthAndYearInfo";
import { RiChatSettingsLine } from "react-icons/ri";

export const Profile = () => {
  const [editUserProfileModal, setEditUserProfileModal] = useState(false);
  // const [profileImage, setProfileImage] = useState(selectedUser?.profileAvatar);
  const { username } = useParams();
  const { currentUser, handleLogout } = useContext(AuthContext);
  const {
    handleFollow,
    handleUnFollow,
    users: { allUsers },
  } = useContext(UserContext);
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

  const date = parseISO(selectedUser?.createdAt);

  console.log(selectedUser);
  console.log(allPosts);

  const handleLogoutHandler = () => {
    handleLogout();
    navigate("/login");
  };

  // const getCount = (allposts) => allposts.map((allpost) => allpost.length);
  // console.log(getCount);

  const displayPosts = allPosts?.filter(
    (posts) => posts.username === selectedUser.username
  );

  const updatedCurrentUser = allUsers.find(
    (user) => user.username === currentUser.username
  );
  const userAlreadyFollowing = updatedCurrentUser?.following?.find(
    (user) => user._id === selectedUser?._id
  );

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explore");
  };

  useEffect(() => {
    getProfile(username);
    // getPostsByUsernameOrLoggedInUser(selectedUser?.username);
  }, [username]);

  console.log({ currentUser, selectedUser, updatedCurrentUser, allUsers });
  return (
    <div>
      <div className="ProfileHeaderProMax">
        <div onClick={() => handleClick()} className="arrowIcon">
          <FaArrowLeft />
        </div>
        <div className="profileHeaderName">
          <h1 className="profileHeader">
            {selectedUser.firstName} {selectedUser.lastName}
          </h1>

          <h3 className="profilePostsCount">{displayPosts.length} posts</h3>
        </div>
      </div>
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
                  <button
                    className="logoutbutton"
                    onClick={() => handleLogoutHandler()}
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  {" "}
                  <button
                    className="buttonFollowProfilePage"
                    onClick={
                      () =>
                        userAlreadyFollowing
                          ? handleUnFollow(selectedUser?._id)
                          : handleFollow(selectedUser?._id)
                      // always pass the id whom you want to follow i.e- tara, arjun etc.
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
              <span>{selectedUser.firstName}</span> {selectedUser.lastName}{" "}
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
                {/* <span>{selectedUser?.createdAt?.split("T")[0]} </span> */}
                <MonthAndYearInfo timestamp={selectedUser?.createdAt} />
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
