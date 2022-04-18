import React from "react";
import "./Reviews.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Card } from "react-bootstrap";
import revw1 from "../../../img/rev/1.png";
import revw2 from "../../../img/rev/2.png";
import revw3 from "../../../img/rev/3.png";
import Rating from "react-rating";

const Reviews = () => {
  return (
    <div className="mt-5 ">
      <h1 className=" text-center">Reviews </h1>
      <div className="line mb-4"></div>
      <div className="container reviews-card ">
        <Card className="single-card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={revw1} />
          <Card.Body>
            <h5 className="text-center">MARTHA SMITH</h5>
            <Card.Text className="text-center">
              AMAZING GYM! The staff here is incredibly friendly and extremely
              qualified! They know how to push you to the limit in the best way
              possible with your workouts. I highly recommend checking this gym
              out.
            </Card.Text>
            <div className="cart-item">
              <Rating
                initialRating={4}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            </div>
          </Card.Body>
        </Card>
        <Card className="single-card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={revw2} />
          <Card.Body>
            <h5 className="text-center">JAMES ROBERT</h5>
            <Card.Text className="text-center">
              I love this place. I highly recommend this place to anyone who
              wants to get in shape. The trainers are really awesome and
              helpful, they make you feel really comfortable. Everyday is a new
              training, so it is never boring.
            </Card.Text>
            <div className="cart-item">
              <Rating
                initialRating={4.5}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            </div>
          </Card.Body>
        </Card>
        <Card className="single-card" style={{ width: "18rem" }}>
          <Card.Img variant="top" src={revw3} />
          <Card.Body>
            <h5 className="text-center">AMELIA AMILI</h5>
            <Card.Text className="text-center">
              Excellent personal training. Trainers who really care and go above
              and beyond to help you achieve your goals. Small and private gym
              that feels more personal.It’s great! I feel 10 years younger!
              Highly recommended!
            </Card.Text>
            <div className="cart-item">
              <Rating
                initialRating={5}
                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                fullSymbol={
                  <FontAwesomeIcon
                    style={{ color: "goldenrod" }}
                    icon={faStar}
                  />
                }
                readonly
              ></Rating>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Reviews;
