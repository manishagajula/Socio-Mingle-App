import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const { id } = useParams();
  const {
    users: { selectedUser },
    getProfile,
  } = useContext(UserContext);
  //   const [data, setData] = useState({});

  useEffect(() => {
    getProfile(id);
  }, []);

  console.log({ selectedUser });
  return (
    <div>
      <div>
        <p>{selectedUser.firstName}</p>
        <p>{selectedUser.lastName}</p>
        <p>{selectedUser.username}</p>
        <p>{selectedUser.followers}</p>
        <p>{selectedUser.following}</p>
        <p>{selectedUser.createdAt}</p>
      </div>
    </div>
  );
};
