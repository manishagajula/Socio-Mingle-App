import { userConstants } from "../constants/user_constants";

const {
  GET_ALL_USERS,
  FOLLOW_USER,
  UNFOLLOW_USER,
  SELECTED_USER_PROFILE,
  GET_BOOKMARKS,
  BOOKMARK_POST,
  REMOVE_BOOKMARK,
} = userConstants;

export const usersReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_USERS:
      return { ...state, allUsers: action.payload };
    case FOLLOW_USER:
    case UNFOLLOW_USER:
      return {
        ...state,
        allUsers: state.allUsers.map((user) => {
          const isChangedUser = action.payload.find(
            ({ _id }) => _id === user._id
          );
          return isChangedUser ? isChangedUser : user;
        }),
      };
    case SELECTED_USER_PROFILE:
      return {
        ...state,
        selectedUser: action.payload,
      };
    case GET_BOOKMARKS:
      return { ...state, allBookmarks: action.payload };
    case BOOKMARK_POST:
      return {
        ...state,
        allBookmarks: action.payload,
      };

    case REMOVE_BOOKMARK:
      return {
        ...state,
        allBookmarks: action.payload,
      };
    default:
      return state;
  }
};

export const initialUsers = {
  allUsers: [],
  selectedUser: {},
  allBookmarks: [],
};
