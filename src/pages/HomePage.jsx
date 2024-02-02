import React from "react";
import { Home } from "../components/Home";
import "../css/home.css";
import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export const HomePage = () => {
  const { search, setSearch } = useContext(SearchContext);
  return (
    <div
      className="homepageouterdiv"
      onClick={() => {
        setSearch("");
        // setAllUsersList([]);
      }}
    >
      <div>
        <h1 className="homeHeader"> Home </h1>
      </div>
      <Home />
    </div>
  );
};
