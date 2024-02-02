import React from "react";
import { Search } from "../components/Search";
import "../css/search.css";

export const SearchPage = () => {
  return (
    <div style={{ height: "100vh", width: "auto" }}>
      <h1 className="searchHeader">Search</h1>
      <Search />
    </div>
  );
};
