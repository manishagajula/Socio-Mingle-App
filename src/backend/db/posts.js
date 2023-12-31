import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Hello from winter wonderland ❄️🤍",
    postmediaURL:
      "https://images.unsplash.com/photo-1530712024539-ecd73dfb1c9d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postmediaAlt: "BTS",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tara@15",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2020-04-17T01:06:00+05:30",
    updatedAt: "2020-04-17T01:06:00+05:30",
  },
  {
    _id: uuid(),
    content: "Everyday gratitude, endless joy.✌️ #BTS",
    postmediaURL:
      "https://images.unsplash.com/photo-1506682025334-be4f5a5ac8a1?q=80&w=2794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postmediaAlt: "winterImg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tara@15",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2019-10-08T01:06:00+05:30",
    updatedAt: "2019-10-08T01:06:00+05:30",
  },
  {
    _id: uuid(),
    content: "Finally added to my life",
    postmediaURL:
      "https://images.unsplash.com/photo-1695578130391-929bdfff85d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    postmediaAlt: "Iphone15",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "varunkapoor",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2020-06-12T01:06:00+05:30",
    updatedAt: "2020-06-12T01:06:00+05:30",
  },
  {
    _id: uuid(),
    content: "Brothers for life",
    postmediaURL:
      "https://images.unsplash.com/photo-1591980607162-923fa31e8240?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80",
    postmediaAlt: "Brother",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "varunkapoor",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2020-07-23T01:06:00+05:30",
    updatedAt: "2020-07-23T01:06:00+05:30",
  },
  {
    _id: uuid(),
    content: "Working and Learning at the same time is my way of moving ahead.",
    postmediaURL:
      "https://images.unsplash.com/photo-1551583899-d3f6258ec7c9?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postmediaAlt: "workImg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "arjun2023",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2022-01-01T01:06:00+05:30",
    updatedAt: "2022-01-01T01:06:00+05:30",
  },
  {
    _id: uuid(),
    content:
      "Day 39 of #100DaysOfCode: ☑️ Solved 1 @css_battle problem. ☑️ Solved 5 javascript problems.☑️ Solved 5 Problems based on React @neogcamp ☑️ Worked on Assignment 5 @neogcamp",

    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "arjun2023",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2022-05-15T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Had a great day! 🥳.",
    postmediaURL:
      "https://images.unsplash.com/photo-1555817129-2fa6b81bd8e5?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postmediaAlt: "friends",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tarinishah",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2020-02-12T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Random moments, everlasting memories",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tarinishah",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2020-07-03T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      " Pitch, hit, repeat India back in the game?!!! ❤️🇮🇳 #INDvsAUS #WorldcupFinal",

    postmediaURL:
      "https://revsportz.in/wp-content/uploads/2023/04/virat-kohli-india-cricket-t20-world-cup_5940705.jpg",
    postmediaAlt: "Indiawon",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Isha20",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2022-05-30T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "sports video",
    postmediaURL:
      "https://res.cloudinary.com/dmqqgsxrr/video/upload/v1702575249/sports_video_eeivvz.mp4",
    postmediaAlt: "",
    likes: {
      likeCount: 20,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Isha20",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2023-06-28T01:06:00+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Sore today, stronger tomorrow. Change your body by changing your thoughts.",
    postmediaURL:
      "https://images.unsplash.com/photo-1607962837359-5e7e89f86776?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postmediaAlt: "fitness",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hardikp",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "They say money can’t buy happiness… but it can buy a gym membership. And that’s basically the same thing.",

    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "hardikp",
    // createdAt: formatDate(),
    // updatedAt: formatDate(),
    createdAt: "2023-03-09T01:06:00+05:30",
    updatedAt: "2023-03-09T01:06:00+05:30",
  },
  {
    _id: uuid(),
    content:
      "Everybody should learn to program a computer because it teaches you how to think. – Steve Jobs",
    postmediaURL:
      "https://images.unsplash.com/photo-1535551951406-a19828b0a76b?q=80&w=2932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postmediaAlt: "coding",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rashmika96",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    // createdAt: "2023-12-20T01:06:00+05:30",
    // updatedAt: "2023-12-20T01:06:00+05:30",
  },
  {
    _id: uuid(),
    content:
      "You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity. Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it?",
    postmediaURL:
      "https://images.unsplash.com/photo-1549082984-1323b94df9a6?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    postmediaAlt: "coding",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    username: "rashmika96",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    // createdAt: "2023-12-02T01:06:00+05:30",
    // updatedAt: "2023-12-02T01:06:00+05:30",
  },
];
