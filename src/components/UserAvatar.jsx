import { dummyProfileImage } from "../Utils/image";
import "../css/userAvatar.css";
export const UserAvatar = ({
  selectedUser,
  profileImage,
  openedFromMyProfile,
}) => {
  console.log({ ASO: selectedUser });
  return (
    <div className="profileAvatarOptions">
      {profileImage ? (
        <img
          src={profileImage}
          alt={selectedUser?.firstName}
          className={openedFromMyProfile ? "editProfileImage" : "dummyImage"}
          width={30}
          height={30}
        />
      ) : (
        <img
          src={selectedUser?.profileAvatar}
          alt="DummyProfile"
          className={openedFromMyProfile ? "editProfileImage" : "dummyImage"}
          width={30}
          height={30}
        />
      )}
    </div>
  );
};
