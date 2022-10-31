import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./Logo.svg";
import "./CustomNavbar.css"

const CustomNavbar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      style={{ "--bs-bg-opacity": "0" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} width="200" height="50" alt="Logo BRIFIRST" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link  href="#home"><div className="NoBold">Home</div></Nav.Link>
            <Nav.Link  href="#about"><div className="NoBold">About</div></Nav.Link>
            <Nav.Link  href="#news"><div className="NoBold">News</div></Nav.Link>
            <Nav.Link  href="#contact"><div className="NoBold">Contact</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
