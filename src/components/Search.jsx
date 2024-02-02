import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { UserContext } from "../context/UserContext";
import { FaSearch } from "react-icons/fa";
import "../css/search.css";
import { useState } from "react";
import { dummyProfileImage } from "../Utils/image";
import { useNavigate } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

export const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  const {
    users: { allUsers },
  } = useContext(UserContext);
  const [allUsersList, setAllUsersList] = useState([]);

  console.log({ allUsers });

  const navigate = useNavigate();
  const handleSearchPage = (username) => {
    navigate(`/profile/${username}`);
    setSearch("");
    setAllUsersList([]);
  };
  return (
    <div className="searchItem" style={{ zIndex: "1" }}>
      <div className="searchcenter">
        <label htmlFor="search">
          {/* Search: */}
          <input
            className="search_input"
            type="text"
            name="search"
            placeholder="Search here"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setAllUsersList(() =>
                allUsers.filter(
                  ({ firstName, lastName, username }) =>
                    firstName
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase()) ||
                    lastName
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase()) ||
                    username
                      .toLowerCase()
                      .includes(e.target.value.toLowerCase())
                )
              );
            }}
          />
        </label>

        <div className="searchLogo">
          {search.length > 0 ? (
            <span onClick={() => setSearch("")}>
              <IoMdClose />{" "}
            </span>
          ) : (
            <FaSearch />
          )}
        </div>
      </div>

      {search.length > 0 && allUsersList.length > 0 && (
        <ul
          className="searchListName"
          // style={{
          //   // backgroundColor: "white",
          //   listStyle: "none",
          //   position: "fixed",
          //   width: "auto",
          // }}
        >
          {allUsersList.map(
            ({ firstName, lastName, username, profileAvatar }) => (
              <li className="searchList">
                <div>
                  {/* <div className="searchListName"> */}
                  <div
                    className="searchName"
                    onClick={() => {
                      handleSearchPage(username);
                    }}
                  >
                    <span>
                      {" "}
                      <img
                        src={profileAvatar || dummyProfileImage}
                        alt={""}
                        className="searchNameAvatar"
                      />
                    </span>
                    <div className="searchUsers">
                      <div className="searchUserFirstName">
                        {firstName} {lastName}
                      </div>
                      <div className="searchUserName">{username}</div>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </li>
            )
          )}
        </ul>
      )}
      {search.length > 0 && allUsersList.length === 0 && (
        <p className="searchListName">No Results Found</p>
      )}
    </div>
  );
};
