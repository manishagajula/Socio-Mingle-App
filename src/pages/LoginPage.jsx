import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../css/Login.css";
import { AuthContext } from "../context/AuthContext";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { TbBrandHipchat } from "react-icons/tb";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showeyeIcon, setshoweyeIcon] = useState(false);
  const { LoginHandler } = useContext(AuthContext);

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    LoginHandler(email, password);

    navigate("/home");
  };

  const handleEyeIcon = () => {
    setshoweyeIcon(!showeyeIcon);
  };

  const guestLoginHandler = () => {
    // e.preventDefault();

    LoginHandler("varunkapoor", "varunkapoor123");

    navigate("/home");
  };

  console.log({ showeyeIcon });
  return (
    <div className="login_page">
      <div className="loginPageImageandInfo">
        <div className="loginFormData">
          {/* <p className="sub-title">Please login using your userName and password</p> */}
          <div>
            <img
              className="loginImage"
              src={
                "https://images.unsplash.com/photo-1462841764092-352b1d22ced3?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt={"loginimage"}
            />
          </div>

          <div className="formDataLogin">
            <form action="" onSubmit={submitForm} className="formOfLogin">
              <div className="outertitleofLogin">
                <h1 className="logintitle">
                  {" "}
                  <span className="appLogo">
                    <TbBrandHipchat />
                  </span>
                  SOCIOMINGLE
                </h1>
              </div>
              <h2 className="subtitle">LOG IN </h2>
              <div className="lableEmail">
                <label htmlFor="email">
                  <input
                    className="login_input"
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </label>
              </div>
              <div className="labelPassword">
                <label htmlFor="password">
                  {" "}
                  <input
                    className="login_input"
                    type={showeyeIcon ? "text" : "password"}
                    name="password"
                    id="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </label>
                {password.length > 0 && (
                  // <div onClick={() => setshoweyeIcon((prev) => !prev)}>
                  <div className="showPassword" onClick={handleEyeIcon}>
                    {showeyeIcon ? <IoMdEye /> : <IoMdEyeOff />}
                  </div>
                )}
              </div>
              <button
                type="submit"
                className="loginpage_btn"
                style={{
                  // marginBottom: "15px",
                  cursor: "pointer",
                }}
              >
                Login
              </button>
              <button
                className="loginasguest_btn"
                style={{
                  // marginBottom: "15px",
                  cursor: "pointer",
                }}
                onClick={guestLoginHandler}
              >
                Login as guest
              </button>
            </form>
            <h5 className="forgotPassword">Forgot Password</h5> {/* </div> */}
            <div>
              {/* <div> */}
              {/* <div className="upperforgottopass"> */}

              <h3 className="forgotToSignup">
                Don't have an account?{" "}
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
              {/* </div> */}
            </div>
            <h6 className="termsofLogin">Terms of use.Privacy policy</h6>
          </div>
        </div>
      </div>
    </div>
  );
};
