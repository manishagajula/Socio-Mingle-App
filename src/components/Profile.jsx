import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
import { PostContext } from "../context/PostContext";
import { Like } from "./LikeComponent";

export const Profile = () => {
  const { username } = useParams();
  const {
    users: { selectedUser },
    getProfile,
  } = useContext(UserContext);
  //   const [data, setData] = useState({});
  // const { currentUser } = useContext(AuthContext);
  const {
    posts: { allPosts },
  } = useContext(PostContext);

  console.log(selectedUser);
  const displayPosts = allPosts?.filter(
    (posts) => posts.username === selectedUser.username
  );
  useEffect(() => {
    getProfile(username);
    // getPostsByUsernameOrLoggedInUser(selectedUser?.username);
  }, [username]);

  return (
    <div>
      <div>
        <p>{selectedUser.firstName}</p>
        <p>{selectedUser.lastName}</p>
        <p>{selectedUser.username}</p>
        <p>{selectedUser.followers}</p>
        <p>{selectedUser.following}</p>
        <p>{selectedUser.createdAt}</p>
        {/* <p>{currentUserPosts.content}</p> */}
      </div>
      <div>
        {displayPosts.map(
          ({ content, createdAt, id, likes, updatedAt, username }) => (
            <div key={id}>
              <p>{username}</p>
              <p>{updatedAt}</p>
              <p>{createdAt}</p>
              <p>
                <p>{content}</p>
                <p>{likes.likeCount}</p>
                <Like LikeCount={likes.likeCount} postId={id} />
                <p>{likes.likeBy}</p>
                <p>{likes.dislikedBy}</p>
              </p>
            </div>
          )
        )}
      </div>
      {/* {Object.keys(selectedUser).length === 0 ||
        (selectedUser?.username === currentUserPosts[0]?.username && (
          <div>
            {currentUserPosts.map(
              ({ content, createdAt, id, likes, updatedAt, username }) => (
                <div key={id}>
                  <p>{username}</p>
                  <p>{updatedAt}</p>
                  <p>{createdAt}</p>
                  <p>
                    <p>{likes.likeCount}</p>
                    <Like LikeCount={likes.likeCount} postId={id} />
                    <p>{likes.likeBy}</p>
                    <p>{likes.dislikedBy}</p>
                  </p>
                  <p>{content}</p>
                </div>
              )
            )}
          </div>
        ))} */}
    </div>
  );
};
