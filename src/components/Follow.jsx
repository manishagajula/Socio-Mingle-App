import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

import "../css/Follow.css";
import { AuthContext } from "../context/AuthContext";

export const Follow = () => {
  const {
    users: { allUsers },
    handleFollow,
    handleUnFollow,
  } = useContext(UserContext);

  const { currentUser } = useContext(AuthContext);

  // const updatedCurrentUser = allUsers?.find(
  //   ({ username }) => username === currentUser?.username
  // );
  // console.log(updatedCurrentUser);

  const updatedCurrentUser = allUsers?.find(
    ({ username }) => username === currentUser?.username
  );
  console.log(updatedCurrentUser);

  const isFollowing = (_id) => {
    return updatedCurrentUser?.following?.some((item) => item?._id === _id);
    // ask-- what is _id matching with item._id?tell him your explanation what you are understanding from this...!!!
  };
  // console.log({ updatedCurrentUser, isFollowing });

  const navigate = useNavigate();
  const handleSelectedUser = (username) => {
    navigate(`/profile/${username}`);
  };
  console.log({ ABV: allUsers, currentUser });
  return (
    <div className="followContainer">
      <div>
        <h1 className="followHeader">Who to Follow</h1>
      </div>
      <div className="content">
        {/* <img src="" alt="diplay" /> */}

        {allUsers
          ?.filter(({ username }) => username !== currentUser?.username)
          ?.map(({ username, _id, firstName, lastName, profileAvatar }) => (
            <ul key={_id} className="followUserContainer">
              <div className="followUser">
                <div
                  className="followName"
                  onClick={() => {
                    handleSelectedUser(username);
                  }}
                >
                  <div>
                    <img src={profileAvatar} alt="" className="followAvatar" />
                  </div>
                  <div className="follownames">
                    <div className="name">
                      <span>{firstName}</span> {lastName}
                    </div>
                    <p className="username">@{username}</p>
                  </div>
                </div>
                <div className="followBtn">
                  <button
                    className="followBtns"
                    onClick={() =>
                      isFollowing(_id) ? handleUnFollow(_id) : handleFollow(_id)
                    }
                  >
                    {!isFollowing(_id) ? "Follow" : "unFollow"}
                  </button>
                </div>
              </div>
            </ul>
          ))}
      </div>
    </div>
  );
};
