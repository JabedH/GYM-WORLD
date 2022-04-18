import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="blog ">
      <div className="blog1">
        <h3>Difference between authorization and authentication</h3>
        <p>
          authentication is the process of verifying who is user. Authentication
          works through passwords, email, biometric information, etc.
          Authentication is the first step of a identity. Authentication
          information , password can be change by the user.
        </p>
        <p>
          authorization is the process of verifying that specific applications
          user can be access. Authorization works by the organization.
          Authorization always takes place and give access to data Authorization
          data is not changeable by user
        </p>
      </div>
      <div className="blog1">
        <h3>Why we are using firebase?</h3>
        <p>
          Firebase manages all data real-time in the database and we can use
          this data for future use. After using this feature we can create the
          user and sign-in user very easily and protected data and we can send
          email verification also. Anyone reliably receives and delivers
          messages on web , android, iOs without any cost.
        </p>
        <h5>what other option do you have to implement authentication</h5>
        <p>
          1) Password-based authentication. Passwords are the most common
          methods of authentication. <br /> 2) Multi-factor authentication.{" "}
          <br /> 3) Certificate-based authentication. <br /> 4) Biometric
          authentication. <br /> 5) Token-based authentication.
        </p>
      </div>
      <div className="blog1">
        <h3>
          What other service does firebase provide other than authentication
        </h3>
        <p>Google firebase they are providing many services.</p>
        <p>
          1) Realtime database <br /> 2) Remote Config <br /> 3) Firebase ML{" "}
          <br /> 4) Cloud Functions <br /> 5) Cloud Messaging <br /> 6) Hosting{" "}
          <br /> 7) Cloud Storage
        </p>
      </div>
    </div>
  );
};

export default Blog;
