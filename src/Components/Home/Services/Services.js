import React from "react";
import "./Services.css";
import { Card, CardGroup, ListGroup, ListGroupItem } from "react-bootstrap";
import s1 from "../../../img/s1.jpg";
import s2 from "../../../img/s2.jpg";
import s3 from "../../../img/s3.jpg";

const Services = () => {
  return (
    <div className="container all-card ">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={s1} />
        <Card.Body>
          <h1>ACCOUNTABILITY</h1>
          <Card.Title>ACCOUNTABILITY</Card.Title>
          <h2>
            $100 <small>/month</small>{" "}
          </h2>
          <Card.Text>
            If you are confident in the hows and whys of traning and have a
            pretty solid knowledge of traning, this package is for you. You're
            confident in the gym abd want the extra push for me
          </Card.Text>
        </Card.Body>
        <Card.Body>
          <button>Proceed Checkout</button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={s2} />
        <Card.Body>
          <Card.Title>ACCOUNTABILITY</Card.Title>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Text></Card.Text>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={s3} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>Cras justo odio</ListGroupItem>
          <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
          <ListGroupItem>Vestibulum at eros</ListGroupItem>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Services;
