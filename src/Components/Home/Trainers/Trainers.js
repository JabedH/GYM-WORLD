import React from "react";
import "./Trainers.css";
import { Card } from "react-bootstrap";
import trainer1 from "../../../img/trainer1.jpg";
import trainer2 from "../../../img/trainer2.jpg";
import trainer3 from "../../../img/trainer3.jpg";

const Trainers = () => {
  return (
    <div className="mt-5 ">
      <h1 className=" text-center">Our Trainers</h1>
      <div className="line mb-2"></div>
      <p className=" text-center mb-5 Trainers-text">
        Always free from repetition repeat predefined chunks injected humour
      </p>
      <div className="container all-card ">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={trainer1} />
          <Card.Body>
            <Card.Title className="text-center">MARTHA SMITH</Card.Title>
            <h5 className="text-center">Cardio Trainer</h5>
            <Card.Text className="text-center">
              Majority have suffered alteration in some form, as opposed to
              using
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={trainer3} />
          <Card.Body>
            <Card.Title className="text-center">MARTHA SMITH</Card.Title>
            <h5 className="text-center">Dance Trainer</h5>
            <Card.Text className="text-center">
              Majority have suffered alteration in some form, as opposed to
              using
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={trainer2} />
          <Card.Body>
            <Card.Title className="text-center">MARTHA SMITH</Card.Title>
            <h5 className="text-center">Yoga Trainer</h5>
            <Card.Text className="text-center">
              Majority have suffered alteration in some form, as opposed to
              using
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Trainers;
