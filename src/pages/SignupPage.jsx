import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import "../css/Signup.css";
import { AuthContext } from "../context/AuthContext";

export const SignupPage = () => {
  const { SignupHandler } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [AllEntry, setAllEntry] = useState([]);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email, password, firstName, lastName, confirmPassword };

    SignupHandler(email, password, firstName, lastName, confirmPassword);

    navigate("/explore");

    setAllEntry([...AllEntry, newEntry]);
  };

  return (
    <div className="signup_page">
      <h1 className="title">Join Twitter 2.0 Today</h1>
      {/* <p className="sub-title">Please login using your userName and password</p> */}
      <form action="" onSubmit={submitForm}>
        <label htmlFor="email">
          {" "}
          <input
            className="signup_input"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <input
            className="signup_input"
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <label htmlFor="email">
          <input
            className="signup_input"
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>

        <label htmlFor="password">
          {" "}
          <input
            className="signup_input"
            type="text"
            name="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          <input
            className="signup_input"
            type="text"
            name="confirm password"
            id="confirm password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="signup_btn"
          style={{
            marginBottom: "15px",
            cursor: "pointer",
          }}
        >
          <h3>Sign up</h3>
        </button>
        <p>
          <h3>
            Already have an account?{" "}
            <strong
              onClick={() => {
                navigate("/login");
              }}
              style={{
                marginBottom: "15px",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Login here
            </strong>{" "}
          </h3>
        </p>
      </form>
    </div>
  );
};
