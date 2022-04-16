import React from "react";
import "./Services.css";
import { Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import s1 from "../../../img/s1.jpg";
import s2 from "../../../img/s2.jpg";
import s3 from "../../../img/s3.jpg";

const Services = () => {
  return (
    <div className="mt-5 ">
      <h1 className=" text-center">Our Services</h1>
      <div className="line mb-5"></div>
      <div className="container all-card ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={s1} />
          <Card.Body>
            <Card.Title>ACCOUNTABILITY</Card.Title>
            <div className="price">
              <h2>
                $80 <sub>/month</sub>
              </h2>
            </div>
            <Card.Text>
              If you are confident in the hows and whys of trancing and have a
              pretty solid knowledge of trancing, this package is for you.
              You're confident in the gym abd want the extra push for me
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <button>Proceed Checkout</button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={s2} />
          <Card.Body>
            <Card.Title>FAST TRACK</Card.Title>
            <div className="price">
              <h2>
                $150 <sub>/month</sub>
              </h2>
            </div>
            <Card.Text>
              If you strive for real results and want to receive the guidance
              you need tos et yourself up for success, then this is the package
              for you. You'll be working with me directly and checking in twice
              a week.
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <button>Proceed Checkout</button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={s3} />
          <Card.Body>
            <Card.Title>ULTIMATE 16 WEEK</Card.Title>
            <div className="price">
              <h2>
                $210 <sub>/month</sub>
              </h2>
            </div>
            <Card.Text>
              If you are confident in the hows and whys of trancing and have a
              pretty solid knowledge of trancing, this package is for you.
              You're confident in the gym abd want the extra push for me
            </Card.Text>
          </Card.Body>
          <Card.Body>
            <button>Proceed Checkout</button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Services;
