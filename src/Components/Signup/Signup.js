import React, { useState } from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Sociallogin from "../Sociallogin/Sociallogin";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);

  const [newError, setNewError] = useState("");
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const ConfirmPass = event.target.confirmPass.value;
    createUserWithEmailAndPassword(email, password);
    await sendEmailVerification(email);

    if (password !== ConfirmPass) {
      setNewError("password did not match");
      return;
    }
    if (password.length < 6) {
      setNewError("password must be 6 characters or longer");
      return;
    } else {
      toast("Sent verification email");
    }
  };

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login-bg">
      <div className="form-padding container">
        <div className="full-form">
          <h3 className="text-center mt-2">Sign Up</h3>
          <Form onSubmit={handleSubmit} className=" text-start signup-form">
            <input
              className="w-100 mt-3"
              type="text"
              name="name"
              id=""
              placeholder="your name"
              required
            />
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
            <input
              className="w-100 mt-3 pl-2"
              type="password"
              name="confirmPass"
              placeholder="confirm Password"
              required
            />
            {newError}
            <button className="w-100 btn-color mt-3" type="submit">
              Sign Up
            </button>
            <div className="mt-2 text-center ">
              <Link to="/login" className="text-decoration-none account ">
                Already you have an account?
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

export default Signup;
