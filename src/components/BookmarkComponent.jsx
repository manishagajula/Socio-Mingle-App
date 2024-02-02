import { useContext } from "react";

// import { Posts } from "./Posts.jsx"; / /how to import component???
import { PostCard } from "./PostCard";
import { UserContext } from "../context/UserContext";

// import { EditPost } from "./EditPost.jsx";
import { PostContext } from "../context/PostContext";
import { FaRegBookmark } from "react-icons/fa";
import { IoMdBookmark } from "react-icons/io";
import { Like } from "./LikeComponent.jsx";
import "../css/bookmark.css";
import { timeDuration } from "../Utils/postTime.js";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCommentAlt } from "react-icons/fa";
import { FiShare } from "react-icons/fi";
import { TipleDotsSvg } from "../svgs/TripleDotsSvg";

export const BookmarkComponent = () => {
  const {
    users: { allBookmarks, allUsers },
    removePostBookmark,
    addBookmark,
  } = useContext(UserContext);

  console.log(allBookmarks);
  console.log(allUsers);
  const {
    posts: { allPosts },
  } = useContext(PostContext);
  console.log(allPosts);
  console.log({ allBookmarks, as: allPosts });

  return (
    <div className="bookmarkCompleteComponent">
      {allBookmarks.length > 0 ? (
        // allBookmarks.map(({ _id, username, content, createdAt }) => {

        allBookmarks.map((bookmarkedPost) => {
          // const getPostLikesAndBookmarkedFlag = allPosts.find(
          //   (post) => post._id === _id
          // );

          // console.log({ allBookmarks, allPosts });
          // const getUserDetails = allUsers.find(
          //   (user) => user.username === username
          // );

          const getUserPost = allPosts.find(
            (singlePost) => singlePost._id === bookmarkedPost._id
          );

          // const getUserPost = allUsers.find(
          //   (user) => user.username === allBookmarks.username
          // );
          // console.log(getUserPost);
          // const isPostsBookmarked = (_id) => {
          //   return allPosts.find((post) => post._id === _id);
          // };
          // console.log(getUserPost);
          console.log({ allPosts });
          return (
            <PostCard post={getUserPost} />
            // // <div className="outerBookmark">
            // <div key={_id} className="fullBookmark">
            //   {/* <div className="tripledotsOnBookmark"> */}
            //   {/* </div> */}
            //   <div className="topbookmark">
            //     <div className="profileIconbookmarkimage">
            //       <img
            //         src={getUserDetails.profileAvatar}
            //         alt={""}
            //         className="profileBookmarkAvatar"
            //       />
            //     </div>
            //     <div className="bookmarkCont">
            //       <div className="bookmarkData">
            //         <div>
            //           <p className="userNameDetails">
            //             <span className="firstnamebookmark">
            //               {getUserDetails?.firstName}{" "}
            //             </span>
            //             <span className="lastnamebookmark">
            //               {getUserDetails?.lastName}
            //             </span>{" "}
            //             . {""}
            //             <span className="timeDurationOfBookmark">
            //               {timeDuration(createdAt)}
            //             </span>
            //           </p>
            //           <p className="usernameBookmark">@{username}</p>
            //         </div>

            //         {/* <TipleDotsSvg /> */}
            //         {/* <div className="middleContent"> */}
            //         {/* <div className="innermiddleContent"> */}
            //         <p className="bookmarkContent">{content}</p>
            //         <img
            //           src={getUserPost.postmediaURL}
            //           alt={""}
            //           className="bookmarkmedia"
            //         />
            //       </div>
            //       {/* </div> */}
            //       <div className="iconsOnBookmarkPage">
            //         <span className="heartIconBookmarkpage">
            //           {/* <FaRegHeart className="likeIconBookmark" /> */}
            //           {""}
            //           <span>
            //             <Like
            //               className="likeIconBookmark"
            //               LikeCount={
            //                 getPostLikesAndBookmarkedFlag?.likes?.likeCount
            //               }
            //               likedBy={getPostLikesAndBookmarkedFlag.likes.likedBy}
            //               postId={getPostLikesAndBookmarkedFlag._id}
            //             />

            //             {/* {getPostLikesAndBookmarkedFlag?.likes?.likeCount} */}
            //           </span>
            //         </span>

            //         <FaRegCommentAlt className="commentIconBookmark" />
            //         <p
            //           className="bookmarkIconbutton"
            //           onClick={(e) => {
            //             getPostLikesAndBookmarkedFlag
            //               ? removePostBookmark(_id)
            //               : addBookmark(_id);
            //             e.stopPropagation();
            //           }}
            //         >
            //           {getPostLikesAndBookmarkedFlag ? <IoMdBookmark /> : ""}
            //         </p>
            //         <div className="shareIconBookmark">
            //           <FiShare />
            //         </div>
            //       </div>
            //     </div>

            //     <div className="editbuttonBookmarkPage">
            //       <TipleDotsSvg />
            //       {/* <EditPost post={post} /> */}
            //     </div>
            //   </div>{" "}
            // </div>
          );
        })
      ) : (
        <div className="nobookmarksaddedyet">No Bookmarks added yet!</div>
      )}
    </div>
  );
};

{
  /* <FaRegBookmark /> */
}
