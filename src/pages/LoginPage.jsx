import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { LoginHandler } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    LoginHandler(email, password);

    navigate("/explore");
  };

  return (
    <div className="login_page">
      <h1 className="title">Log in to Twitter 2.0</h1>
      {/* <p className="sub-title">Please login using your userName and password</p> */}
      <form action="" onSubmit={submitForm}>
        <label htmlFor="email">
          <input
            className="login_input"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          {" "}
          <input
            className="login_input"
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="login_btn"
          style={{
            marginBottom: "15px",
            cursor: "pointer",
          }}
        >
          <h3>Login</h3>
        </button>
        <p>
          <h3>
            Forgot Password?{" "}
            <strong
              onClick={() => {
                navigate("/signup");
              }}
              style={{
                marginBottom: "15px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Sign up
            </strong>
          </h3>
        </p>
      </form>
    </div>
  );
};
