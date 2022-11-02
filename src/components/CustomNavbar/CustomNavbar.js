import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from "./bumn.svg";
import Logobri from "./bri.svg";
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
            <img src={Logobri} width="100" height="80" alt="Logo BRIFIRST" />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
