import { createContext, useEffect, useContext, useReducer } from "react";

import axios from "axios";
import { AuthContext } from "./AuthContext";
import { postsReducer, initialPosts } from "../reducer/post_reducer";
import { postConstants } from "../constants/post_constants";
export const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useReducer(postsReducer, initialPosts);
  console.log(posts);
  const { token } = useContext(AuthContext);
  const { GET_ALL_POSTS } = postConstants;

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/posts", {
          headers: { authorization: token },
        });
        if (response.status === 200) {
          // console.log({ data: response.data.posts });
          setPosts({ type: GET_ALL_POSTS, payload: response.data.posts });
          console.log(response.data.posts);
          // console.log(response);
          // console.log({ data: response.data.posts });
          // setPost({ type: GET_BOOKMARKS, payload: response.data.posts });
          console.log({ response });
        }
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <PostContext.Provider
      value={{
        posts,
        setPosts,
        // getPostsByUsernameOrLoggedInUser,
        // currentUserPosts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
}
