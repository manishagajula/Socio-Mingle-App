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
    createdAt: "2017-05-12T01:06:00+05:30",
    // createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
    website: "https://varunkapoor.com",
    bio: "Aspiring Frontend Developer",
    profileAvatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=2662&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileBackgroundCover:
      "https://images.unsplash.com/photo-1594470117722-de4b9a02ebed?q=80&w=2858&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: uuid(),
    firstName: "Tara",
    lastName: "Shetty",
    username: "tara@15",
    password: "tara15",
    createdAt: "2019-08-15T01:06:00+05:30",
    // createdAt: formatDate(),
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
    createdAt: "2020-01-03T01:06:00+05:30",
    // createdAt: formatDate(),
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
    createdAt: "2021-09-08T01:06:00+05:30",
    // createdAt: formatDate(),
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
  {
    _id: uuid(),
    firstName: "Isha",
    lastName: "Patel",
    username: "Isha20",
    password: "hiIsha",
    createdAt: "2022-04-22T01:06:00+05:30",
    // createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
    website: "https://www.espn.in/",
    bio: "Sports enthusiast",
    profileAvatar:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileBackgroundCover:
      "https://images.unsplash.com/photo-1520960858461-ac671067213e?q=80&w=2994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: uuid(),
    firstName: "Hardik",
    lastName: "Pandya",
    username: "hardikp",
    password: "hardikPandya",
    createdAt: "2023-02-02T01:06:00+05:30",
    // createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
    website: "https://www.espn.in/",
    bio: "Full Stack Developer | Simplifying web development for you 🚀",
    profileAvatar:
      "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileBackgroundCover:
      "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    _id: uuid(),
    firstName: "Rashmika",
    lastName: "Bose",
    username: "rashmika96",
    password: "rashmika",
    createdAt: "2023-11-20T01:06:00+05:30",
    // createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [],
    followers: [],
    bookmarks: [],
    website: "https://www.espn.in/",
    bio: "HTML5 | CSS3 | Javascript | ReactJS | Github",
    profileAvatar:
      "https://images.unsplash.com/photo-1584670747386-1e7424adab51?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    profileBackgroundCover:
      "https://images.unsplash.com/photo-1516062423079-7ca13cdc7f5a?q=80&w=2466&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
