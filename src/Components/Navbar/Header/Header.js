import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="icon">
            <Navbar.Brand href="/">WORLD GYM</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="nav-item">
              <Link to="/">HOME</Link>
              <Link to="About">ABOUT</Link>
              <Link to="Classes">CLASSES</Link>
              <Link to="Blog">BLOG</Link>
              <Link to="Login">lOGIN</Link>
              {/* <Link to="About">lOGOUT</Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
