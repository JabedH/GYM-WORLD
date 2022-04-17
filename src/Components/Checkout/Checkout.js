import React from "react";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="delivery-details container">
        <div>
          <h4 className="text-center">Edit Delivery Details</h4>
          <div className="form-line"></div>
          <Form className="checkout-form">
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
              type="number"
              name="name"
              id=""
              placeholder="Enter Mobile Number"
              required
            />
            <input
              className="w-100 mt-3"
              type="text"
              name="name"
              id=""
              placeholder="your adders"
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
              Save & Continue
            </button>
            <div className="mt-2 text-center "></div>

            <div className="social-line">
              <dir className="or-line"></dir>
              <p>Or</p>
              <dir className="or-line"></dir>
            </div>
          </Form>
        </div>
        <div className="o-summary">
          <h5 className="mt-3">Order Summary</h5>
          <div className="order-item-align">
            <p>Plan</p>
            <p>ACCOUNTABILITY</p>
          </div>
          <div className="order-item-align">
            <p>Duration</p>
            <p>1 month</p>
          </div>
          <div className="order-line"></div>
          <div className="order-item-align">
            <h5>Total</h5>
            <h5>$80</h5>
          </div>
          <p className="text-end">every month</p>
          <button className="w-100 checkout-btn mt-3" type="submit">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
