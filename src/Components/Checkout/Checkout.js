import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="delivery-details container">
        <div>
          <h1 className="text-center">Edit Delivery Details</h1>
          <Form className="text-start">
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
              className="w-100 mt-3"
              type="text"
              name="name"
              id=""
              placeholder="your name"
              required
            />
            <input
              className="w-100 mt-3"
              type="text"
              name="name"
              id=""
              placeholder="your name"
              required
            />

            <div className="text-area">
              <textarea
                className="mt-3"
                rows="4"
                cols="100"
                name="comment"
                form="usrform"
                placeholder="instruction"
              ></textarea>
            </div>
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
        </div>
        <div className="o-summary">
          <h1>Order summary</h1>
          <div className="order-item-align">
            <p>Plan</p>
            <p>Gold Membership</p>
          </div>
          <div className="order-item-align">
            <p>Duration</p>
            <p>12 months</p>
          </div>

          <div className="order-line"></div>
          <div className="order-item-align">
            <h5>Total</h5>
            <h5>$25</h5>
          </div>
          <p className="text-end">every month</p>
          <button className="w-100 btn-color mt-3" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
