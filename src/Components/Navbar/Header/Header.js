import React from "react";
import "./Header.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div className="header">
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Link to="/" className="icon">
            GYM WORLD
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav className="nav-item">
              <CustomLink to="/">HOME</CustomLink>
              <CustomLink to="About">ABOUT</CustomLink>

              <CustomLink to="Blog">BLOG</CustomLink>
              {user ? (
                <Link onClick={handleLogout} className="signout" to="/">
                  lOGOUT
                </Link>
              ) : (
                <CustomLink className="signint" to="Login">
                  lOGIN
                </CustomLink>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
