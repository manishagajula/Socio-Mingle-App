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

  // const [isFollowing, setIsFollowing] = useState(false);
  // console.log({ users });

  const { currentUser } = useContext(AuthContext);
  const updatedCurrentUser = allUsers?.find(
    ({ username }) => username === currentUser?.username
  );
  // const [follow, unfollow] = useState([]);

  const isFollowing = (_id) => {
    return updatedCurrentUser?.following?.some((item) => item?._id === _id);
  };

  const navigate = useNavigate();
  const handleSelectedUser = (_id) => {
    navigate(`/profile/${_id}`);
  };

  // console.log(updatedCurrentUser, allUsers, currentUser);

  // const handleUnFollow = async () => {
  //   const response = await axios.post("/api/users/unfollow/:followUserId/", {
  //     followUserId: !users._id,
  //   });

  //   console.log({ response });
  // };

  //   const handleUnFollow = async () => {
  //     try {
  //       const response = await axios.post("/users/unfollow/:followUserId/");
  //       console.log({ response });
  //       setUsers({
  //         ...users,
  //         followers: users.followers.filter(
  //           (follower) => follower.id !== users.id
  //         ),
  //       });
  //     } catch (e) {
  //       console.error(e);
  //     }
  //   };
  // };

  return (
    <div className="followContainer">
      <div>
        <h1>Who to Follow</h1>
      </div>
      <div className="content">
        {/* <img src="" alt="diplay" /> */}

        {allUsers
          ?.filter(({ username }) => username !== currentUser?.username)
          ?.map(({ username, _id, firstName, lastName }) => (
            <ul key={_id} className="followUserContainer">
              <div
                onClick={() => {
                  handleSelectedUser(_id);
                }}
              >
                <p className="name">
                  <span>{firstName}</span> {lastName}
                </p>
                <p className="username">@{username}</p>
              </div>
              <button
                className="followBtn"
                onClick={() =>
                  isFollowing(_id) ? handleUnFollow(_id) : handleFollow(_id)
                }
              >
                {!isFollowing(_id) ? "follow" : "unFollow"}
              </button>

              {/* <button
              className="followBtn"
              onClick={() => {
                setIsFollowing((prev) => !prev);
                !isFollowing ? handleFollow(_id) : handleUnFollow(_id);
              }}
            >
              {!isFollowing ? "follow" : "unFollow"}
            </button> */}
            </ul>
          ))}
      </div>
    </div>
  );
};
