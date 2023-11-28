import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { UserContext } from "../context/UserContext";
import { FaSearch } from "react-icons/fa";
import "../css/search.css";
import { useState } from "react";

export const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  const {
    users: { allUsers },
  } = useContext(UserContext);
  const [allUsersList, setAllUsersList] = useState([]);

  console.log({ allUsers });
  return (
    <div className="searchItem" style={{ zIndex: "1" }}>
      <div className="searchcenter">
        <div>
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
        </div>
        <div className="searchLogo">
          <FaSearch />
        </div>
      </div>

      {search.length > 0 && (
        <ul
          style={{
            backgroundColor: "white",
            listStyle: "none",
            position: "fixed",
            width: "auto",
          }}
        >
          {allUsersList.map(({ firstName }) => (
            <li>{firstName}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
