import "../css/mobileNavbar.css";
import { CreatePostModal } from "../components/CreatePostModal";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
import { BiHomeAlt2 } from "react-icons/bi";
import { MdExplore } from "react-icons/md";
import { IoBookmarks } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";

import { MdAddCircleOutline } from "react-icons/md";
import { IoLogOut } from "react-icons/io5";

export const MobileNavbar = () => {
  const { handleLogout, currentUser } = useContext(AuthContext);
  const { getProfile } = useContext(UserContext);

  const [showCreatePostModal, setShowCreatePostModal] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      <ul className="navWrapper">
        <Link to="/">
          <li>
            <BiHomeAlt2 className="sidebarIcons" />
          </li>
        </Link>
        <Link to="/search">
          <li>
            {" "}
            <FaSearch className="sidebarIcons" />{" "}
          </li>
        </Link>
        <Link to="/explore">
          <li>
            {" "}
            <MdExplore className="sidebarIcons" />
          </li>
        </Link>
        <Link to="/bookmark">
          {" "}
          <li>
            <IoBookmarks className="sidebarIcons" />
          </li>
        </Link>
        <Link
          to={`/profile/${currentUser?.username}`}
          onClick={() => getProfile(currentUser?.username)}
        >
          <li>
            <CgProfile className="sidebarIcons" />
          </li>
        </Link>
        <li onClick={() => setShowCreatePostModal(true)}>
          {" "}
          <MdAddCircleOutline className="sidebarIcons" />
        </li>
      </ul>
      {showCreatePostModal && (
        <CreatePostModal setShowCreatePostModal={setShowCreatePostModal} />
      )}
    </div>
  );
};

{
  /* <Link to="/login">
          <li onClick={handleLogout}>
            <IoLogOut className="sidebarIcons" />
          </li>
        </Link> */
}
