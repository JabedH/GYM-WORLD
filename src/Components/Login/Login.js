import React, { useRef, useState } from "react";
import "./Login.css";
import { Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import bg from "../../img/bg.jpg";
import Sociallogin from "../Sociallogin/Sociallogin";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
  useUpdatePassword,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending1, error1] =
    useSendPasswordResetEmail(auth);
  const navigate = useNavigate();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const location = useLocation();

  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  const handleSignUp = () => {
    navigate("Signup");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    console.log(email);
    await sendPasswordResetEmail(email);
    alert("sent reset email");
  };
  return (
    <div className="login-bg">
      <img src={bg} alt="" />
      <div className="form-padding ">
        <div className="full-form">
          <Form onSubmit={handleSubmit} className=" text-start">
            <input
              ref={emailRef}
              className="w-100 mt-3"
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <input
              ref={passwordRef}
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
                haven't any account?
              </Link>
            </div>
            <div className="mt-2 text-center ">
              <Link
                to="/login"
                onClick={resetPassword}
                className="text-decoration-none account "
              >
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
