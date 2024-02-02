import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
// import { json } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("logindetails"));
  // syntax

  const [currentUser, setCurrentUser] = useState(localStorageToken?.user);
  console.log(currentUser);
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
      console.log(response);
      console.log({ encodedToken });
      if (status === 200) {
        setCurrentUser(foundUser);
        setToken(encodedToken);
        localStorage.setItem(
          "logindetails",
          JSON.stringify({ token: encodedToken, user: foundUser })

          // localStorage.setItem(
          //   "firstname",
          //   JSON.stringify(firstname)
          // if u want to use the multiple values then write in object format otherwise directly we have to write like this=localStorage.setItem("bgcolor", "red");
          // and if the data is object then only write JSON.stringify otherwise just write like this localStorage.setItem("bgcolor", "red");
        );
      }
      // localStorage.setItem(key),JSON.stringify({token:, user:})

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
    const response = await axios.post(
      "/api/auth/signup",
      {
        // in post request after await.axios.post("/api/...", we are going to add a curly braces starting with comma and write the data that we need to pass to the api in curly braces like here we have passed in signup and login eg-of signup:-{ username:email,password,firstName,lastName,confirmPassword, _id:uuid()}) we have to send the data to the api call hence we have to write this curly brackets  // always write headers:{authorization: token} in post request during api calls, but here in login and signup apis we have not written {headers:{authorization:token}} in curly braces cause we are getting token after the api call in response hence we have not written {headers:{authorization:token}} in curly braces.
        username: email,
        password,
        firstName,
        lastName,
        confirmPassword,
        _id: uuid(),
      },
      { headers: { "Content-Type": "application/octet-stream" } }
    );

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
      value={{
        SignupHandler,
        LoginHandler,
        token,
        currentUser,
        setCurrentUser,
        handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
