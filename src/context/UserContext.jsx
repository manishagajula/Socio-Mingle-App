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
  const { token, setCurrentUser } = useContext(AuthContext);
  console.log(users);

  // const [post, setPost] = useReducer(postReducer, initialPost);

  const {
    GET_ALL_USERS,
    FOLLOW_USER,
    UNFOLLOW_USER,
    SELECTED_USER_PROFILE,
    GET_BOOKMARKS,
    BOOKMARK_POST,
    REMOVE_BOOKMARK,
    EDIT_USER,
  } = userConstants;

  const handleFollow = async (_id) => {
    console.log({ _id });
    const response = await axios.post(
      `/api/users/follow/${_id}`,
      {},
      {
        headers: { authorization: token },
      }
    );
    console.log(response);
    const {
      status,
      data: { user, followUser },
    } = response;
    if (status === 200) {
      setUsers({ type: FOLLOW_USER, payload: [user, followUser] });
      // setCurrentUser(user);
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
    console.log(response);
    const {
      status,
      data: { user, followUser },
    } = response;
    if (status === 200) {
      setUsers({ type: UNFOLLOW_USER, payload: [user, followUser] });
      // setCurrentUser(user);
    }
    console.log(response);
  };

  const getProfile = async (username) => {
    try {
      const response = await axios.get(`/api/users/${username}`);
      if (response.status === 200) {
        setUsers({
          type: SELECTED_USER_PROFILE,
          payload: response?.data?.user,
        });
        // return response.data.users;
        console.log(response?.data?.users);
        console.log(response);
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
        // always write headers:{authorization: token} in post request during api calls
      );
      console.log({ response });
      const {
        status,
        data: { bookmarks },
      } = response;
      console.log(bookmarks);
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
          // in post request after await.axios.post("/api/...", we are going to add a curly braces starting with comma and write the data that we need to pass to the api in curly braces like here we have passed in signup and login eg-of signup:-{ username:email,password,firstName,lastName,confirmPassword, _id:uuid()}) we have to send the data to the api call hence we have to write this curly brackets  // always write headers:{authorization: token} in post request during api calls, but here in login and signup apis we have not written {headers:{authorization:token}} in curly braces cause we are getting token after the api call in response hence we have not written {headers:{authorization:token}} in curly braces.
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
          payload: bookmarks,
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
      console.log({ response });
    } catch (error) {
      console.error(error);
    }
  };

  const editUser = async (
    editFirstNameDetails,
    editLastNameDetails,
    editBioDetails,
    editWebsiteDetails,
    backgroundCover,
    profileImage
  ) => {
    try {
      const response = await axios.post(
        "/api/users/edit",
        {
          userData: {
            firstName: editFirstNameDetails,
            lastName: editLastNameDetails,
            bio: editBioDetails,
            website: editWebsiteDetails,
            profileBackgroundCover: backgroundCover,
            profileAvatar: profileImage,
          },
        },
        { headers: { authorization: token } }
      );
      console.log({ response });
      const {
        status,
        data: { user },
      } = response;
      if (status === 201) {
        setUsers({ type: EDIT_USER, payload: user });
        setCurrentUser(user);
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
        editUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
