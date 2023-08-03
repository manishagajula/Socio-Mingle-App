import { Link, NavLink } from "react-router-dom";

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
        <Link to="/"> Twitter 2.0 </Link>
        <NavLink to="/">
          <strong className="link"> Home </strong>
        </NavLink>
        <NavLink to="/explore">
          {" "}
          <strong className="link">Explore </strong>
        </NavLink>
        <NavLink
          to={`/profile/${currentUser?.username}`}
          onClick={() => getProfile(currentUser?.username)}
        >
          {" "}
          <strong className="link">Profile </strong>
        </NavLink>
        <NavLink to="/bookmark">
          <strong className="link">Bookmarks </strong>
        </NavLink>
        <button>
          <strong className="post"> Post </strong>
        </button>
        <NavLink to="/login">
          <button onClick={handleLogout}>
            <strong className="post"> Logout </strong>
          </button>
        </NavLink>
      </nav>
    </div>
  );
};
