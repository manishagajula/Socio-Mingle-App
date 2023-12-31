import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";
import { UserContext } from "../context/UserContext";
import { FaSearch } from "react-icons/fa";
import "../css/mobileSearchBar.css";
export const MobileSearchBar = () => {
  const { search, setSearch } = useContext(SearchContext);
  const {
    users: { allUsers },
  } = useContext(UserContext);
  const [allUsersList, setAllUsersList] = useState([]);
  return (
    <div className="searchItemMobile" style={{ zIndex: "1" }}>
      <div className="searchcenterMobile">
        {/* <div> */}
        <label htmlFor="search">
          <input
            className="searchbarForMobile"
            placeholder="Search here"
            name="search"
            type="text"
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
        <div className="searchLogoMobile">
          <FaSearch />
        </div>
        {/* </div> */}
      </div>
      {search.length > 0 && allUsersList.length > 0 ? (
        <ul className="searchListNameForMobile">
          {allUsersList.map(
            ({ firstName, lastName, username, profileAvatar }) => (
              <li className="searchListMobile">
                <div>
                  <div className="searchNameMobile">
                    <span>
                      <img
                        src={profileAvatar}
                        alt={""}
                        className="searchNameAvatarMobile"
                      />
                    </span>
                    <div className="searchUsersMobile">
                      <div className="searchUserFirstNameMobile">
                        {firstName} {lastName}
                      </div>
                      <div className="searchUserNameMobile"> {username}</div>
                    </div>
                  </div>
                </div>
              </li>
            )
          )}
        </ul>
      ) : search.length > 0 ? (
        allUsersList.length === 0 && (
          <p className="searchListNameForMobile"> No Results Found</p>
        )
      ) : null}
    </div>
  );
};
