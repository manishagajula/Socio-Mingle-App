import { useContext } from "react";
import { PostContext } from "../context/PostContext";
// import { Link } from "react-router-dom";
// import { Follow } from "../components/Follow";

export const LandingPage = () => {
  const { data } = useContext(PostContext);

  return (
    <div>
      {/* <h1>landingpage</h1>
      {data.map(({ content, createdAt, id, likes, updatedAt, username }) => (
        <ul key={id}>
          <p> {content}</p>
          <p>{createdAt} </p>
          <p>
            {Object.entries(likes).map(({ likeCount, likedBy, dislikedBy }) => (
              <div>
                <p> {likeCount}</p>
                <p> {likedBy}</p>
                <p>{dislikedBy} </p>
              </div>
            ))}
          </p>

          <p>{updatedAt}</p>
          <p>{username}</p>
        </ul>
      ))} */}
    </div>
  );
};
