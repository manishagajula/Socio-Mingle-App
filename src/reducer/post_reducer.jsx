import { postConstants } from "../constants/post_constants";

const { GET_ALL_POSTS, GET_SINGLE_POST, LIKE_POSTS, EDIT_POST, DELETE_POST } =
  postConstants;

export const postsReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return { ...state, allPosts: action.payload };
    case GET_SINGLE_POST:
      return { ...state, singlePost: action.payload };
    case LIKE_POSTS:
      return { ...state, allPosts: action.payload };
    case EDIT_POST:
      return { ...state, allPosts: action.payload };
    case DELETE_POST:
      return { ...state, allPosts: action.payload };
    default:
      return state;
  }
};

export const initialPosts = {
  allPosts: [],
  singlePost: {},
};

// const [post, setPosts] = useReducer(postReducerFunction, initialState)
// initalPosts =this is an object
