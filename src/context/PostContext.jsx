import { createContext, useEffect, useContext, useReducer } from "react";

import axios from "axios";
import { AuthContext } from "./AuthContext";
import { postsReducer, initialPosts } from "../reducer/post_reducer";
import { postConstants } from "../constants/post_constants";
export const PostContext = createContext();

export function PostProvider({ children }) {
  // const [data, setData] = useState([]);
  const [posts, setPosts] = useReducer(postsReducer, initialPosts);
  const { token, currentUser } = useContext(AuthContext);

  // console.log({ response });

  //   const {
  //     status,
  //     data: { user, followUser },
  //   } = response;
  //   if (status === 200) {
  //     setUsers({ type: UNFOLLOW_USER, payload: [user, followUser] });
  //   }
  //   // console.log({ response });
  // };

  const { GET_ALL_POSTS } = postConstants;

  const getDetailOfPost = async (username) => {
    try {
      const response = await axios.get(`/api/posts/user/${username}`);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(getDetailOfPost(currentUser?.username));

  const getPosts = async (postID) => {
    try {
      const response = await axios.get(`/api/posts/${postID}`);
      if (response.status === 200) {
        setPosts({ type: GET_ALL_POSTS, payload: response.data.post });
        console.log(response);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("/api/posts");
        if (response.status === 200) {
          // console.log({ data: response.data.posts });
          setPosts({ type: GET_ALL_POSTS, payload: response.data.posts });
          console.log(response);
          // console.log({ data: response.data.posts });
          // setPost({ type: GET_BOOKMARKS, payload: response.data.posts });
          // console.log({ response });
        }
      } catch (error) {
        console.error(error);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <PostContext.Provider value={{ posts, setPosts }}>
      {children}
    </PostContext.Provider>
  );
}
