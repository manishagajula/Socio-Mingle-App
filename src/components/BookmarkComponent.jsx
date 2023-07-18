import { useContext } from "react";

import { UserContext } from "../context/UserContext";

export const BookmarkComponent = () => {
  const {
    users: { allBookmarks },
  } = useContext(UserContext);

  console.log(allBookmarks);

  return (
    <div>
      {allBookmarks.map(({ _id, username, content }) => {
        return (
          <div key={_id}>
            <p>{username}</p>
            <p>{content}</p>
          </div>
        );
      })}
    </div>
  );
};
