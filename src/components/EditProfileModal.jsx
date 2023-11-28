import { useState, useContext } from "react";
import "../css/editProfileModal.css";
import { avatarImages } from "../Utils/image";
import { UserContext } from "../context/UserContext";
import { dummyProfileImage } from "../Utils/image";
import { UserAvatar } from "./UserAvatar";

export const EditProfileModal = ({ setEditUserProfileModal }) => {
  const {
    users: { selectedUser },
  } = useContext(UserContext);

  const submitForm = (e) => {
    setEditUserProfileModal(false);
    e.stopPropagation();
    e.preventDefault();
    console.log("insidehahaha");

    editUser(
      editFirstNameDetails,
      editLastNameDetails,
      editBioDetails,
      editWebsiteDetails,
      backgroundCover,
      profileImage
    );
  };
  // const userData = {
  //   editFirstNameDetails,
  //   editLastNameDetails,
  //   editBioDetails,
  //   editWebsiteDetails,
  //   backgroundCover,
  //   profileImage,
  //   editAvatarOptions,
  //   showAvatarOptionsModal,
  // };
  const { editUser } = useContext(UserContext);
  const [editFirstNameDetails, setEditFirstNameDetails] = useState(
    selectedUser?.firstName
  );
  const [editLastNameDetails, setEditLastNameDetails] = useState(
    selectedUser?.lastName
  );
  const [editBioDetails, setEditBioDetails] = useState(selectedUser?.bio);
  const [editWebsiteDetails, setEditWebsiteDetails] = useState(
    selectedUser?.website
  );
  const [backgroundCover, setBackgroundCover] = useState(
    selectedUser?.profileBackgroundCover
  );
  const [profileImage, setProfileImage] = useState(selectedUser?.profileAvatar);

  const [showAvatarOptionsModal, setShowAvatarOptionsModal] = useState(false);

  return (
    <div
      className="editProfileWrapper"
      onClick={() => {
        console.log("clicked");
        setEditUserProfileModal(false);
      }}
    >
      <form action="" onSubmit={submitForm}>
        <div className="innerEditProfileWrapper">
          <div
            className="profileHeader"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <button
              className="savebutton"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Save
            </button>
            <h3 className="editProfile">Edit Profile</h3>
          </div>
          <div className="backgroundCoverImage">
            <img
              src={
                backgroundCover
                  ? // URL.createObjectURL
                    backgroundCover
                  : dummyProfileImage
              }
              alt={backgroundCover ? "updatedCoverImage" : "coverImage"}
              className="bgCoverImage"
            />

            <input
              type="file"
              accept="image/*"
              className="coverImageFileSelect"
              onChange={(e) => {
                setBackgroundCover(URL?.createObjectURL(e.target.files[0]));
              }}
            />
          </div>

          <div className="updateAvatarWrapper">
            <div className="profileImage">
              <UserAvatar
                selectedUser={selectedUser}
                profileImage={profileImage}
                openedFromMyProfile={true}
              />
              <label htmlFor="profileImageChange" className="cameraContainer">
                <input
                  id="profileImageChange"
                  type="file"
                  accept="image/*"
                  className="profileModalHiddenImage"
                  onChange={(e) => {
                    setProfileImage(URL?.createObjectURL(e.target.files[0]));
                  }}
                />
                <img
                  src="https://res.cloudinary.com/dmqqgsxrr/image/upload/v1695045786/photo-camera_vywktn.png"
                  alt="addImage"
                  className="cameraicon"
                />
              </label>
            </div>
            <div
              className="profileImage"
              onClick={() => {
                setShowAvatarOptionsModal(true);
              }}
            >
              <UserAvatar
                selectedUser={selectedUser}
                profileImage={profileImage}
                openedFromMyProfile={true}
              />
              <div className="cameraContainer">
                <img
                  src="https://res.cloudinary.com/dmqqgsxrr/image/upload/v1695045786/photo-camera_vywktn.png"
                  alt="addImage"
                  className="cameraicon"
                />
              </div>
            </div>
          </div>
          <div className="inputFields">
            <div className="field">
              <label id="firstname"> FirstName</label>
              <input
                type="text"
                value={editFirstNameDetails}
                for="firstname"
                rows={5}
                cols={20}
                width="100%"
                onChange={(e) => setEditFirstNameDetails(e.target.value)}
              />
            </div>
            <div className="field">
              <label id="lastname">LastName</label>
              <input
                type="text"
                value={editLastNameDetails}
                for="lastname"
                rows={5}
                cols={20}
                width="100%"
                onChange={(e) => setEditLastNameDetails(e.target.value)}
              />
            </div>
            <div className="field">
              <label id="bio">Bio</label>
              <input
                type="text"
                value={editBioDetails}
                for="bio"
                rows={5}
                cols={20}
                width="100%"
                onChange={(e) => setEditBioDetails(e.target.value)}
              />
            </div>
            <div className="field">
              <label id="website">Website</label>
              <input
                type="text"
                value={editWebsiteDetails}
                for="website"
                rows={5}
                cols={20}
                width="100%"
                onChange={(e) => setEditWebsiteDetails(e.target.value)}
              />
            </div>
          </div>
        </div>
        {/* <Modal open={showAvatarOptions} onClose={() => setShowAvatarOptions}></Modal> */}
      </form>

      {showAvatarOptionsModal && (
        <div className="chooseAvatarButtonOption">
          <div className="avatarHeader">
            <button
              className="closeButton"
              onClick={(e) => {
                setShowAvatarOptionsModal(false);
                e.stopPropagation();
              }}
            >
              close
            </button>
            <span className="chooseAvatarButton">Choose Your Avatar</span>
          </div>

          <div className="avataroptionsmodal">
            {avatarImages.map((avatar, index) => (
              <span
                key={index}
                className="avataroptions"
                onClick={() => {
                  setShowAvatarOptionsModal(false);
                  setProfileImage(avatar);
                }}
              >
                <img
                  src={avatar}
                  alt={`Avatar ${index}`}
                  className="avatarImagesize"
                />
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
