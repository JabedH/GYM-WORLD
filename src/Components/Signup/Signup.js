import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import bg from "../../img/bg.jpg";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="login-bg">
      <img src={bg} alt="" />
      <div>
        <Form className="mx-auto text-start">
          <input
            className="w-100"
            type="text"
            name="name"
            placeholder="Enter Name"
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
            className="w-100 mt-3"
            type="password"
            name="ConfirmPassword"
            placeholder="ConfirmPassword"
          />
          <button className="w-100 btn-color mt-3" type="submit">
            Submit
          </button>
          <div className="mt-2 text-center ">
            <Link to="/login" className="text-decoration-none account ">
              Already you have an account?
            </Link>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Signup;
