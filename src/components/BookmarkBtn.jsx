import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import "../css/bookmark.css";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdBookmark } from "react-icons/io";

export const BookmarkBtn = ({ postId }) => {
  const {
    addBookmark,
    users: { allBookmarks },
    removePostBookmark,
  } = useContext(UserContext);

  const isPostsBookmarked = (_id) => {
    return allBookmarks?.find((post) => post._id === _id);
  };

  return (
    <button
      className="bookmrkbtn"
      onClick={(e) => {
        isPostsBookmarked(postId)
          ? removePostBookmark(postId)
          : addBookmark(postId);
        e.stopPropagation();
      }}
    >
      {/* {isPostsBookmarked(postId) ? "remove from bookmark" : "add to bookmark"} */}
      {isPostsBookmarked(postId) ? <IoMdBookmark /> : <FaRegBookmark />}
    </button>
  );
};
