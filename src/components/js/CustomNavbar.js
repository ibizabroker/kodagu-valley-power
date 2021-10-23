import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
// import Container from 'react-bootstrap/Container'
import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default collapseOnSelect variant="dark">
        {/* <Container> */}
          <Navbar.Brand>
              <Link to="/">Sampaje Valley Power</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem 
                eventKey={1}
                componentClass={Link} 
                href="/" 
                to="/"
              >
                Home
              </NavItem>
              <NavItem
                eventKey={2}
                componentClass={Link}
                href="/about"
                to="/about"
              >
                About
              </NavItem>
              <NavItem 
                eventKey={3} 
                componentClass={Link} 
                href="/contact" 
                to="/contact"
              >
                Contact
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    );
  }
}
