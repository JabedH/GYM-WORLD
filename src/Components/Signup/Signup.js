import React from "react";
import { Form } from "react-bootstrap";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import bg from "../../img/bg.jpg";
import Sociallogin from "../Sociallogin/Sociallogin";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [sendEmailVerification, sending, error1] =
    useSendEmailVerification(auth);
  const location = useLocation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    createUserWithEmailAndPassword(email, password);
    await sendEmailVerification(email);
    alert("Sent email");
  };
  let from = location.state?.from?.pathname || "/";

  if (user) {
    navigate(from, { replace: true });
  }
  return (
    <div className="login-bg">
      <img src={bg} alt="" />
      <div className="form-padding container">
        <div className="full-form">
          <Form onSubmit={handleSubmit} className=" text-start">
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
        </div>
      </div>
    </div>
  );
};

export default Signup;
