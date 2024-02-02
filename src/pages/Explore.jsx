// import { useContext } from "react";
// import { PostContext } from "../context/PostContext";

import "../css/explore.css";
// import { SideBar } from "../components/SideBar";
// import { Follow } from "../components/Follow";
// import { Search } from "../components/Search";
import { Posts } from "../components/Posts";

export const Explore = () => {
  return (
    <div className="explorepageouterdiv">
      <h1 className="exploreHeader">Explore</h1>
      <Posts />
    </div>
  );
};
