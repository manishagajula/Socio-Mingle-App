import React from "react";
import { useContext } from "react";
import { PostContext } from "../context/PostContext";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export const Posts = () => {
  const { posts } = useContext(PostContext);
  const {
    addBookmark,
    users: { allBookmarks },
    removePostBookmark,
  } = useContext(UserContext);
  const navigate = useNavigate();
  const handlePostDetail = (id) => {
    navigate(`/post/${id}`);
  };

  //   const removeBookmark = async (_id) => {
  //     try {
  //       const response = await axios.post(
  //         `/users/remove-bookmark/${_id}/`,
  //         {},
  //         {
  //           headers: { authorization: token },
  //         }
  //       );
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     getBookmark();
  //   }, []);

  const isPostsBookmarked = (_id) => {
    return allBookmarks?.find((post) => post._id === _id);
  };

  return (
    <div className="postsContainer">
      {posts.allPosts.map(
        ({ content, createdAt, id, _id, likes, updatedAt, username }) => (
          <div
            key={id}
            className="postCardWrapper"
            onClick={() => {
              handlePostDetail(_id);
            }}
          >
            {/* function add(a,b){
              return (a + b)
            }
            add(3,5) */}
            <div className="container">
              <p>{username}</p>
              <p>{createdAt}</p>
              <p>{content}</p>
              {/* <p>{likes.likedBy}</p> */}
              {/* <p>{likes.dislikedBy}</p> */}
              {/* <p>{updatedAt}</p> */}
            </div>
            <div>
              <button>Like{likes.likeCount}</button>
              <button
                onClick={() =>
                  isPostsBookmarked(_id)
                    ? removePostBookmark(_id)
                    : addBookmark(_id)
                }
              >
                {isPostsBookmarked(_id)
                  ? "remove from bookmark"
                  : "add to bookmark"}
              </button>
            </div>
          </div>
        )
      )}
    </div>
  );
};