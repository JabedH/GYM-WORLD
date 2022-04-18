import React from "react";
import "./Carosl.css";
import { Carousel } from "react-bootstrap";
import g1 from "../../../img/g1.jpg";
import g2 from "../../../img/g2.jpg";
import g3 from "../../../img/g3.jpg";

const Carosl = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item className="Carosl-item">
          <img className="d-block w-100 " src={g1} alt="First slide" />
          <Carousel.Caption>
            <h3>Commit to be fit.</h3>
            <p>LOVE YOURSELF ENOUGH TO WORK HARDER.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={g2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Turn fat into fit</h3>
            <p>WILLPOWER KNOWS NO OBSTACLES..</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={g3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Get in the groove</h3>
            <p>EXERCISE YOUR MIND AND BODY.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carosl;
