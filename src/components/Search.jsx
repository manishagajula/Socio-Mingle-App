import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import { UserContext } from "../context/UserContext";

export const Search = () => {
  const { search, setSearch } = useContext(SearchContext);
  const { setUsers } = useContext(UserContext);
  // console.log(users);

  //   const inputHandler = (e) => {
  //     setSearch(e.target.value);
  //     e.target.value === ""
  //       ? setUsers([])
  //       : setUsers(() =>
  //           users.filter(
  //             (user) =>
  //               user.firstName.toLowerCase().includes ===
  //               e.target.value.toLowerCase()
  //           )
  //         );
  //   };
  //   console.log(users);

  return (
    <div>
      <label htmlFor="search">
        Search:
        <input
          className="search_input"
          type="text"
          name="search"
          placeholder="Search here"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setUsers((prev) =>
              prev.filter(
                ({ firstName, lastName, username }) =>
                  firstName
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                  lastName
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase()) ||
                  username.toLowerCase().includes(e.target.value.toLowerCase())
              )
            );
          }}
        />
      </label>
      {/* <div>{users.map((user) => user.firstName === e.target.value)}</div> */}
    </div>
  );
};
