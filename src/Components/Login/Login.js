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
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

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
    console.log(user);
    navigate(from, { replace: true });
  }
  let ErrorElement;

  if (error) {
    ErrorElement = (
      <div>
        <p>password didn't match</p>
      </div>
    );
  }
  const handleSignUp = () => {
    navigate("Signup");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await signInWithEmailAndPassword(email, password);
  };
  const resetPassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast("sent reset email");
    } else {
      toast("please enter your email address");
    }
  };
  return (
    <div className="login-bg">
      <div className="form-padding ">
        <div className="full-form">
          <h3 className="text-center mt-2">Login</h3>
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

            <div className="text-center mt-2" style={{ color: "red" }}>
              {ErrorElement}
            </div>

            <button className="w-100 btn-color mt-2" type="submit">
              <span>Login</span>
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
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Login;
