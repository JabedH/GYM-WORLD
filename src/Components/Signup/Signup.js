import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from "../../img/bg.jpg";
import Sociallogin from "../Sociallogin/Sociallogin";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="login-bg">
      <img src={bg} alt="" />
      <div className="form-padding container">
        <div className="full-form">
          <Form className=" text-start">
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
