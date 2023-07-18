import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [AllEntry, setAllEntry] = useState([]);

  const navigate = useNavigate();

  const submitForm = async (e) => {
    e.preventDefault();
    const newEntry = { email, password };

    setAllEntry([...AllEntry, newEntry]);

    const response = await axios.post("/api/auth/login", {
      username: email,
      password,
    });

    console.log({ response });
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
