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
  },
  {
    _id: uuid(),
    firstName: "Tara",
    lastName: "Shetty",
    username: "tara@15",
    password: "tara15",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Tarini",
    lastName: "shah",
    username: "tarinishah",
    password: "tarinishah",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Arjun",
    lastName: "shinde",
    username: "arjun2023",
    password: "arjunshinde2023",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
