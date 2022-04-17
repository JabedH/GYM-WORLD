import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
  };

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
              {user ? (
                <Link onClick={handleLogout} className="signout" to="About">
                  lOGOUT
                </Link>
              ) : (
                <Link to="Login">lOGIN</Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
