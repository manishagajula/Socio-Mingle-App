import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { PostProvider } from "./context/PostContext";
import { UserProvider } from "./context/UserContext";

import { BrowserRouter as Router } from "react-router-dom";
import { SearchProvider } from "./context/SearchContext";
import { AuthProvider } from "./context/AuthContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <UserProvider>
          <PostProvider>
            <SearchProvider>
              <App />
            </SearchProvider>
          </PostProvider>
        </UserProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);
