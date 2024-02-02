import { Link, NavLink } from "react-router-dom";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { TbBrandHipchat } from "react-icons/tb";

import "../css/sideBar.css";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
import { CreatePostModal } from "./CreatePostModal";
import { MdAddCircleOutline } from "react-icons/md";

export const SideBar = () => {
  const { handleLogout, currentUser } = useContext(AuthContext);
  const { getProfile } = useContext(UserContext);
  const [showCreatePostModal, setShowCreatePostModal] = useState(false);

  return (
    <>
      <nav className="sideBar">
        <div className="innerSideBar">
          <div className="brandLogo2">
            <Link to="/home" className="Link">
              <div className="brandLogo3">
                <span>
                  <TbBrandHipchat className="reactIcons" />
                  {/* <img
                    src="../svgs/chat.png"
                    alt=""
                    className=""
                    style={{ width: "10px", height: "10px" }}
                  /> */}
                </span>
                <span className="brandLogo">Twitter2.0 </span>
              </div>
            </Link>
          </div>

          <ul className="sidebarLinks">
            <Link to="/" className="Link">
              {/* <HomeIcon /> */}
              <div className="logo">
                <div>
                  <BiHomeAlt2 className="sidebarIcons" />{" "}
                </div>
                <div>
                  <strong className="tabLink"> Home</strong>
                </div>
              </div>
            </Link>
            <Link to="/explore" className="Link">
              {" "}
              {/* <ExploreIcon/> */}
              <div className="logo">
                <MdExplore className="sidebarIcons" />
                <span>
                  <strong className="tabLink">Explore </strong>
                </span>
              </div>
            </Link>
            <Link
              className="Link"
              to={`/profile/${currentUser?.username}`}
              onClick={() => getProfile(currentUser?.username)}
            >
              {" "}
              {/* <ProfileIcon/> */}
              <div className="logo">
                <CgProfile className="sidebarIcons" />
                <span>
                  <strong className="tabLink">Profile </strong>
                </span>
              </div>
            </Link>
            <Link to="/bookmark" className="Link">
              {/* <BookmarkIcon /> */}
              <div className="logo">
                <IoBookmarks className="sidebarIcons" />
                <span>
                  <strong className="tabLink">Bookmarks </strong>
                </span>
              </div>
            </Link>
          </ul>
          <div className="navBtns">
            {/* <div></div> */}
            <button
              className="btn"
              onClick={() => {
                setShowCreatePostModal(true);
              }}
            >
              <div className="addIcon">
                <MdAddCircleOutline />
              </div>
              New Post
            </button>
          </div>
        </div>

        <div className="logout">
          <Link to="/login">
            <button onClick={handleLogout} className="logoutbtn">
              Logout
            </button>
          </Link>
        </div>
      </nav>

      {showCreatePostModal && (
        <CreatePostModal setShowCreatePostModal={setShowCreatePostModal} />
      )}
    </>
  );
};
