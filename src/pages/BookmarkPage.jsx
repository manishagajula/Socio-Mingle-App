import React from "react";
import { BookmarkComponent } from "../components/BookmarkComponent";
import "../css/bookmarkPage.css";

export const Bookmark = () => {
  return (
    <div>
      <div>
        <h1 className="bookmarkHeader"> Bookmarks </h1>
      </div>
      {/* <div> */}
      <BookmarkComponent />
      {/* </div> */}
    </div>
  );
};
