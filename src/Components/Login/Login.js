import React from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import bg from "../../img/bg.jpg";
import Sociallogin from "../Sociallogin/Sociallogin";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleSignUp = () => {
    navigate("Signup");
  };
  if (user) {
    navigate("/");
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="login-bg">
      <img src={bg} alt="" />
      <div className="form-padding ">
        <div className="full-form">
          <Form onSubmit={handleSubmit} className=" text-start">
            <input
              className="w-100 mt-3"
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <input
              className="w-100 mt-3 pl-2"
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            {/* <input
          className="w-100 mt-3"
          type="password"
          name="ConfirmPassword"
          placeholder="ConfirmPassword"
        /> */}
            <button className="w-100 btn-color mt-3" type="submit">
              Submit
            </button>
            <div className="mt-2 text-center ">
              <Link
                to="/Signup"
                onClick={handleSignUp}
                className="text-decoration-none account "
              >
                Already you have an account?
              </Link>
            </div>
            <div className="mt-2 text-center ">
              <Link to="/login" className="text-decoration-none account ">
                Forget Password?
              </Link>
            </div>
            <div className="social-line">
              <dir className="or-line"></dir>
              <p>Or</p>
              <dir className="or-line"></dir>
            </div>
          </Form>
          <Sociallogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
