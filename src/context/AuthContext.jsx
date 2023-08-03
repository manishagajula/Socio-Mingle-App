import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
// import { json } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("logindetails"));

  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  const [token, setToken] = useState(localStorageToken?.token);

  const LoginHandler = async (email, password) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username: email,
        password,
      });

      const {
        status,
        data: { foundUser, encodedToken },
      } = response;
      console.log({ encodedToken });
      if (status === 200) {
        setCurrentUser(foundUser);
        setToken(encodedToken);
        localStorage.setItem(
          "logindetails",
          JSON.stringify({ token: encodedToken, user: foundUser })
        );
      }
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };

  const SignupHandler = async (
    email,
    password,
    firstName,
    lastName,
    confirmPassword
  ) => {
    const response = await axios.post("/api/auth/signup", {
      username: email,
      password,
      firstName,
      lastName,
      confirmPassword,
      _id: uuid(),
    });

    const {
      status,
      data: { createdUser, encodedToken },
    } = response;
    console.log({ encodedToken });
    if (status === 201) {
      setCurrentUser(createdUser);
      setToken(encodedToken);
      localStorage.setItem(
        "logindetails",
        JSON.stringify({ token: encodedToken, user: createdUser })
      );
    }
    console.log(response);
    // console.log(currentUser, token);
  };

  const handleLogout = () => {
    localStorage.removeItem("logindetails");
    setToken(null);
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ SignupHandler, LoginHandler, token, currentUser, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
