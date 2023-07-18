import { useState, createContext } from "react";

// import axios from "axios";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [search, setSearch] = useState([]);

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
}
