import {
  // useState,
  useEffect,
  createContext,
  useContext,
  useReducer,
} from "react";

import axios from "axios";
import { AuthContext } from "./AuthContext";
import { usersReducer, initialUsers } from "../reducer/user_reducer";
import { userConstants } from "../constants/user_constants";

export const UserContext = createContext();

export function UserProvider({ children }) {
  // const [users, setUsers] = useState([]);
  const [users, setUsers] = useReducer(usersReducer, initialUsers);
  const { token } = useContext(AuthContext);
  //   console.log(users);

  // const [post, setPost] = useReducer(postReducer, initialPost);

  const {
    GET_ALL_USERS,
    FOLLOW_USER,
    UNFOLLOW_USER,
    SELECTED_USER_PROFILE,
    GET_BOOKMARKS,
    BOOKMARK_POST,
    REMOVE_BOOKMARK,
  } = userConstants;

  const handleFollow = async (_id) => {
    const response = await axios.post(
      `/api/users/follow/${_id}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    const {
      status,
      data: { user, followUser },
    } = response;
    if (status === 200) {
      setUsers({ type: FOLLOW_USER, payload: [user, followUser] });
    }
    console.log({ response });
  };

  const handleUnFollow = async (_id) => {
    const response = await axios.post(
      `/api/users/unfollow/${_id}`,
      {},
      {
        headers: { authorization: token },
      }
    );

    const {
      status,
      data: { user, followUser },
    } = response;
    if (status === 200) {
      setUsers({ type: UNFOLLOW_USER, payload: [user, followUser] });
    }
    // console.log({ response });
  };

  const getProfile = async (_id) => {
    try {
      const response = await axios.get(`/api/users/${_id}`);
      if (response.status === 200) {
        // console.log(response);
        setUsers({
          type: SELECTED_USER_PROFILE,
          payload: response?.data?.user,
        });
        // return response.data.users;
      }
    } catch (e) {
      console.error(e);
    }
  };

  const addBookmark = async (_id) => {
    // console.log({ _id, token });
    try {
      const response = await axios.post(
        `/api/users/bookmark/${_id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      console.log({ response });
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200) {
        setUsers({ type: BOOKMARK_POST, payload: bookmarks });
      }
    } catch (error) {
      console.error(error);
    }
    console.log(addBookmark);
  };

  // console.log({ response });

  const removePostBookmark = async (_id) => {
    try {
      const response = await axios.post(
        `/api/users/remove-bookmark/${_id}`,
        {},
        {
          headers: { authorization: token },
        }
      );
      console.log({ response });
      const {
        status,
        data: { bookmarks },
      } = response;
      if (status === 200) {
        setUsers({
          type: REMOVE_BOOKMARK,
          payload: [bookmarks],
        });
      }
    } catch (error) {
      console.error(error);
    }
    console.log(removePostBookmark);
  };

  const getUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      if (response.status === 200) {
        setUsers({ type: GET_ALL_USERS, payload: response.data.users });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getBookmarks = async () => {
    try {
      const response = await axios.get("/api/users/bookmark", {
        headers: { authorization: token },
      });
      setUsers({ type: GET_BOOKMARKS, payload: response.data.bookmarks });
      console.log({ response });
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getUsers();
    if (token) {
      getBookmarks();
    }
  }, [token]);

  return (
    <UserContext.Provider
      value={{
        users,
        setUsers,
        handleFollow,
        handleUnFollow,
        getProfile,
        addBookmark,
        removePostBookmark,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
