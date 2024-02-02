import { dummyProfileImage } from "../Utils/image";
import "../css/userAvatar.css";
export const UserAvatar = ({
  selectedUser,
  profileImage,
  openedFromMyProfile,
}) => {
  console.log({ AGM: selectedUser, GM: profileImage });
  return (
    <div className="profileAvatarOptions">
      {selectedUser?.profileAvatar ? (
        <img
          src={profileImage || selectedUser?.profileAvatar}
          alt={selectedUser?.firstName}
          className={openedFromMyProfile ? "editProfileImage" : "dummyImage"}
          width={30}
          height={30}
        />
      ) : (
        <img
          src={profileImage || dummyProfileImage}
          alt="DummyProfile"
          className={openedFromMyProfile ? "editProfileImage" : "dummyImage"}
          width={30}
          height={30}
        />
      )}
    </div>
  );
};
