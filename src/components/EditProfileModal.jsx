import { useState, useContext } from "react";
import "../css/editProfileModal.css";
import { avatarImages } from "../Utils/image";
import { UserContext } from "../context/UserContext";
import { dummyProfileImage } from "../Utils/image";
import { UserAvatar } from "./UserAvatar";

import { IoMdCamera } from "react-icons/io";
import { PiUserCircleFill } from "react-icons/pi";
import { FaCamera } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

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

  console.log({ showAvatarOptionsModal });
  return (
    <div
      className="editProfileWrapper"
      onClick={() => {
        console.log("clicked");
        // setEditUserProfileModal(false);
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
            <div className="closeIcon">
              {" "}
              <button
                className="closeIconpart2"
                onClick={(e) => {
                  setEditUserProfileModal(false);
                }}
              >
                <IoClose />
              </button>
            </div>
            <h3 className="editProfileHeader">Edit Profile</h3>

            {/* <span className="editProfilename"></span> */}

            <button
              className="savebutton"
              type="submit"
              style={{ cursor: "pointer" }}
            >
              Save
            </button>
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
            <span className="camIcon">
              <FaCamera />
            </span>
            <input
              type="file"
              accept="image/*"
              className="coverImageFileSelect"
              onChange={(e) => {
                setBackgroundCover(URL?.createObjectURL(e.target.files[0]));
              }}
              style={{ opacity: 0 }}
            />
            {/* 
              for(let i=0;i< e.target.files.length; i++){
                const response = await api(e.target.files[i])
                setBackgroundCover(respsonce)
              }
            */}
            {/*  api*/}
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
                <div className="chooseProfileAvatar">
                  <IoMdCamera className="uploadProfilePic" />{" "}
                </div>

                {/* <img
                  src="https://res.cloudinary.com/dmqqgsxrr/image/upload/v1695045786/photo-camera_vywktn.png"
                  alt="addImage"
                  className="cameraicon"
                /> */}
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
              <div className="profilePhotoFromOptions">
                <PiUserCircleFill className="avatarOptionsPhotos" />
              </div>
            </div>
          </div>
          <div className="inputFields">
            <div className="firstInputField">
              <label id="firstname">
                {" "}
                <div className="field">FirstName</div>
                <input
                  type="text"
                  className="textField"
                  value={editFirstNameDetails}
                  for="firstname"
                  rows={5}
                  cols={20}
                  width="100%"
                  onChange={(e) => setEditFirstNameDetails(e.target.value)}
                />
              </label>
            </div>
            <div className="firstInputField">
              <label id="lastname">
                <div className="field">LastName</div>
                <input
                  type="text"
                  className="textField"
                  value={editLastNameDetails}
                  for="lastname"
                  rows={5}
                  cols={20}
                  width="100%"
                  onChange={(e) => setEditLastNameDetails(e.target.value)}
                />
              </label>
            </div>
            <div className="firstInputField">
              <label id="bio">
                <div className="field">Bio</div>
                <input
                  type="text"
                  className="textField"
                  value={editBioDetails}
                  for="bio"
                  rows={5}
                  cols={20}
                  width="100%"
                  onChange={(e) => setEditBioDetails(e.target.value)}
                />
              </label>
            </div>
            <div className="firstInputField">
              <label id="website">
                <div className="field">Website</div>
                <input
                  type="text"
                  className="textField"
                  value={editWebsiteDetails}
                  for="website"
                  rows={5}
                  cols={20}
                  width="100%"
                  onChange={(e) => setEditWebsiteDetails(e.target.value)}
                />
              </label>
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
              <IoClose className="closemodal" />
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
