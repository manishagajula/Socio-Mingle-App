import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { Like } from "./LikeComponent";
import { PostCard } from "./PostCard";

export const Home = () => {
  const {
    posts: { allPosts },

    // to write directly in place of posts.username,post.firstname we have written posts: {allPosts} so that we can destructure it and use it as {username}, {firstname}
  } = useContext(PostContext);

  console.log(allPosts);
  return (
    <div>
      {allPosts.map((post) => (
        <PostCard post={post} />
      ))}
    </div>
  );
};
