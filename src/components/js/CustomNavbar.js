import React, { Component } from "react";
import "../css/CustomNavbar.css"
import { Container, Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
              Sampaje Valley Power
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
             <Nav.Link as={Link} to="/">Home</Nav.Link>
             <Nav.Link as={Link} to="/about">About</Nav.Link>
             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
           </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      // <Navbar bg="dark" variant="dark">
      //   <Container>
      //   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      //   <Nav className="me-auto">
      //     <Nav.Link href="#home">Home</Nav.Link>
      //     <Nav.Link href="#features">Features</Nav.Link>
      //     <Nav.Link href="#pricing">Pricing</Nav.Link>
      //   </Nav>
      //   </Container>
      // </Navbar>
    );
  }
}
