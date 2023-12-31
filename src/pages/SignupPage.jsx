import { useContext, useState } from "react";

import { useNavigate } from "react-router-dom";
import "../css/Signup.css";
import { AuthContext } from "../context/AuthContext";
import { TbBrandHipchat } from "react-icons/tb";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";

export const SignupPage = () => {
  const { SignupHandler } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showeyeIcon, setshoweyeIcon] = useState(false);
  const [showConfirmpasswordIcon, setshowConfirmPasswordIcon] = useState(false);

  const [AllEntry, setAllEntry] = useState([]);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    const newEntry = { email, password, firstName, lastName, confirmPassword };

    SignupHandler(email, password, firstName, lastName, confirmPassword);

    navigate("/explore");

    setAllEntry([...AllEntry, newEntry]);
  };

  const handleEyeIcon = () => {
    setshoweyeIcon(!showeyeIcon);
  };

  const handleShowConfirmPasswordIcon = () => {
    setshowConfirmPasswordIcon(!showConfirmpasswordIcon);
  };

  return (
    <div className="signup_page">
      {/* <p className="sub-title">Please login using your userName and password</p> */}
      <div className="signupPageImageandInfo">
        <div className="signupFormData">
          <div>
            <img
              className="signupImage"
              src={
                "https://images.unsplash.com/photo-1462841764092-352b1d22ced3?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={"loginimage"}
            />
          </div>

          <div className="signupformDataLogin">
            <form action="" onSubmit={submitForm} className="signupformOfLogin">
              <div className="outertitleofSignup">
                <h1 className="signuptitle">
                  <span className="appLogo">
                    <TbBrandHipchat />
                  </span>
                  SOCIOMINGLE
                </h1>
              </div>

              <div className="signupformcontent">
                <h2 className="signupsubtitle">SIGN IN </h2>
                <div className="lableEmail">
                  <label htmlFor="email">
                    {" "}
                    <input
                      // className="signup_input"
                      className="signup_input"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </label>
                </div>
                <label htmlFor="email">
                  <input
                    // className="signup_input"
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
                    // className="signup_input"
                    className="signup_input"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Lastname"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </label>
                <div className="labelPassword">
                  <label htmlFor="password">
                    {" "}
                    <input
                      // className="signup_input"
                      className="signup_input"
                      type={showConfirmpasswordIcon ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>
                  {password.length > 0 && (
                    <div
                      onClick={handleShowConfirmPasswordIcon}
                      className="showSignupPassword"
                    >
                      {showConfirmpasswordIcon ? <IoMdEye /> : <IoMdEyeOff />}{" "}
                    </div>
                  )}
                </div>
                {/* <IoMdEye /> <IoMdEyeOff /> */}
                <div className="labelConfirmPassword">
                  <label htmlFor="password">
                    <input
                      className="signup_input"
                      type={showeyeIcon ? "text" : "password"}
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </label>
                  {confirmPassword.length > 0 && (
                    <div
                      onClick={handleEyeIcon}
                      className="showconfirmPassword"
                    >
                      {" "}
                      {showeyeIcon ? <IoMdEye /> : <IoMdEyeOff />}
                    </div>
                  )}
                </div>
                <button
                  type="submit"
                  // className="signup_btn"
                  className="signuppage_btn"
                  style={{
                    // marginBottom: "15px",
                    cursor: "pointer",
                  }}
                >
                  <h3 className="signupbutton">Sign up</h3>
                </button>
              </div>
            </form>

            <div>
              <p>
                <h3 className="doSignupbtn">
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
            </div>
            <h6 className="termsofsignup">Terms of use.Privacy policy</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
