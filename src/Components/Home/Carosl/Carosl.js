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
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={g2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={g3} alt="Third slide" />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carosl;
