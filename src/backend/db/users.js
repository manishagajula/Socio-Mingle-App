import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Varun",
    lastName: "Kapoor",
    username: "varunkapoor",
    password: "varunkapoor123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
    website: "https://varunkapoor.com",
    bio: "Aspiring Frontend Developer",
    profileAvatar:
      "https://res.cloudinary.com/dmqqgsxrr/image/upload/v1694629113/image1_d1zahy.jpg",
    profileBackgroundCover:
      "https://res.cloudinary.com/dmqqgsxrr/image/upload/v1694629968/backgroundimage1-unsplash_n5s9wk.jpg",
  },
  {
    _id: uuid(),
    firstName: "Tara",
    lastName: "Shetty",
    username: "tara@15",
    password: "tara15",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
    website: "https://dribbble.com/tags/books-website",
    bio: "Content creator",
    profileAvatar:
      "https://images.unsplash.com/photo-1588516903720-8ceb67f9ef84?q=80&w=2844&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileBackgroundCover:
      "https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?q=80&w=1919&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: uuid(),
    firstName: "Tarini",
    lastName: "shah",
    username: "tarinishah",
    password: "tarinishah",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
    website: "https://www.hondacarindia.com/",
    bio: "Just me and my favourites ..!",
    profileAvatar:
      "https://images.unsplash.com/photo-1481214110143-ed630356e1bb?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileBackgroundCover:
      "https://images.unsplash.com/photo-1520013817300-1f4c1cb245ef?q=80&w=3013&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: uuid(),
    firstName: "Arjun",
    lastName: "shinde",
    username: "arjun2023",
    password: "arjunshinde2023",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
    website: "https://disneyland.disney.go.com/",
    bio: "cracked technical interview google | Part time freelancer",
    profileAvatar:
      "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=2896&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileBackgroundCover:
      "https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
