// import { useContext } from "react";
// import { PostContext } from "../context/PostContext";
import "../css/explore.css";
import { SideBar } from "../components/SideBar";
import { Follow } from "../components/Follow";
import { Search } from "../components/Search";
import { Posts } from "../components/Posts";

export const Explore = () => {
  // const { data } = useContext(PostContext);

  // console.log(data);

  //   const handleClick = (id) => {
  //     setData();
  //   };

  return (
    <div className="flex">
      <SideBar />

      <Posts />
      <div>
        <Search />
        <Follow />
      </div>
    </div>
  );
};
