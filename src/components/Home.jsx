import { useContext, useEffect, useState } from "react";
import { PostContext } from "../context/PostContext";
import { Like } from "./LikeComponent";
import { PostCard } from "./PostCard";
import "../css/home.css";
import { UserContext } from "../context/UserContext.jsx";
// import "../css/editPostModal.css";
import toast from "react-hot-toast";
import { AuthContext } from "../context/AuthContext";
import { postConstants } from "../constants/post_constants";
import axios from "axios";

export const Home = () => {
  const {
    posts: { allPosts },

    // to write directly in place of posts.username,post.firstname we have written posts: {allPosts} so that we can destructure it and use it as {username}, {firstname}
  } = useContext(PostContext);

  const { currentUser } = useContext(AuthContext);

  const {
    users: { selectedUser },
  } = useContext(UserContext);

  console.log({ allPosts });
  // const []
  const [sorted, setSorted] = useState(allPosts);
  const [whatsYourPost, setWhatsYourPost] = useState("");
  // const [trendingPost, setTrendingPost] = useState(false);
  // const [latestPost, setLatestPost] = useState(false);
  // const [oldest, setOldest] = useState(false);
  // const [activePosts, setActivePosts] = useState("");
  const [activePosts, setActivePosts] = useState({
    trending: false,
    latest: false,
    oldest: false,
  });

  // const [activeTab, setActiveTab] = useState(false);

  const { CREATE_POST } = postConstants;

  const { token } = useContext(AuthContext);
  const { setPosts } = useContext(PostContext);
  console.log(setWhatsYourPost);
  console.log(whatsYourPost);

  const handlePost = async (postData) => {
    console.log({ postData });
    try {
      const response = await axios.post(
        `/api/posts`,
        { postData },
        {
          headers: { authorization: token },
        }
      );
      console.log(response);
      if (response.status === 201) {
        setPosts({ type: CREATE_POST, payload: response.data.posts });
        toast.success("Successfully created!");
      }
    } catch (e) {
      console.error(e);
    }
  };

  // let toogleBtn = activeTab ? "active" : null;

  const handleTrendingPosts = () => {
    console.log({ ss: sorted });
    // const sortedPosts = [...sorted].sort(
    //   (a, b) => b.likes.likeCount - a.likes.likeCount
    // );
    const sortedPosts = sorted
      .slice()
      .sort((a, b) => b.likes.likeCount - a.likes.likeCount);

    setSorted(sortedPosts);
    // setActivePosts("trending");
    setActivePosts(() => ({
      trending: true,
      latest: false,
      oldest: false,
    }));

    // setTrendingPost(true);
    // setLatestPost(false);
    // setOldest(false);
    // setActiveTab((activeTab) => !activeTab);
  };

  const handleLatest = () => {
    const trendingPosts = sorted
      .slice()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    setSorted(trendingPosts);
    // setActivePosts("latest");
    setActivePosts(() => ({
      trending: false,
      latest: true,
      oldest: false,
    }));
    // setLatestPost(true);
    // setOldest(false);
    // setTrendingPost(false);
    // setLatestPost(false);
  };

  const handleOldest = () => {
    const latestPosts = sorted
      .slice()
      .sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    setSorted(latestPosts);
    // setActivePosts("oldest");
    setActivePosts(() => ({
      trending: false,
      latest: false,
      oldest: true,
    }));

    // setOldest(true);
    // setTrendingPost(false);
    // setLatestPost(false);
    // setOldest(false);
  };

  useEffect(() => {
    setSorted(allPosts);
  }, [allPosts]);

  console.log({ sorted });
  return (
    <>
      <div className="whatsHappening">
        <div className="homeavatar">
          <img
            src={currentUser?.profileAvatar}
            alt={""}
            className="homeimageavatar"
          />
        </div>
        <form className="textAreaToPost">
          <textarea
            name="textarea"
            rows={10}
            column={10}
            value={whatsYourPost}
            placeholder="What is happening?!"
            className="textAreaHome"
            onChange={(e) => setWhatsYourPost(e.target.value)}
          ></textarea>
        </form>

        <div className="PostbtnOnHome">
          <button
            className="PostButton"
            // style={{ backgroundColor: trendingPost ? "#07a0c3" : "#c0f0fa" }}

            onClick={() => {
              handlePost(whatsYourPost);
              // array.push({whatsYourPost})
              setWhatsYourPost("");
            }}
            disabled={whatsYourPost === ""}
          >
            Post
          </button>
        </div>
      </div>

      <div className="sorting">
        {/* <input type= {"checkbox"} ></input> */}
        <button
          style={{
            backgroundColor: activePosts.trending && "#07a0c3",
          }}
          onClick={handleTrendingPosts}
          className="trendingbtn"
          // className=""
        >
          Trending
        </button>
        <button
          style={{
            backgroundColor: activePosts.latest && "#07a0c3",
          }}
          onClick={handleLatest}
          className="latestbtn"
        >
          {" "}
          Latest{" "}
        </button>
        <button
          style={{
            backgroundColor: activePosts.oldest && "#07a0c3",
          }}
          onClick={handleOldest}
          className="oldestbtn"
        >
          {" "}
          Oldest{" "}
        </button>
      </div>
      {sorted?.map((post) => (
        <PostCard post={post} />
      ))}
    </>
  );
};
