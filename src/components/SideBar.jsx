import { Link } from "react-router-dom";

import "../App.css";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";

export const SideBar = () => {
  const { handleLogout, currentUser } = useContext(AuthContext);
  const { getProfile } = useContext(UserContext);

  return (
    <div className="sideBar">
      <nav>
        <Link to="/">
          <strong className="link"> Home </strong>
        </Link>
        <Link to="/explore">
          {" "}
          <strong className="link">Explore </strong>
        </Link>
        <Link to="/profile" onClick={() => getProfile(currentUser._id)}>
          {" "}
          <strong className="link">Profile </strong>
        </Link>
        <Link to="/bookmark">
          <strong className="link">Bookmarks </strong>
        </Link>
        <button>
          <strong className="post"> Post </strong>
        </button>
        <Link to="/login">
          <button onClick={handleLogout}>
            <strong className="post"> Logout </strong>
          </button>
        </Link>
      </nav>
    </div>
  );
};
