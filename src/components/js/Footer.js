import React, { Component, Fragment } from 'react'
import "../css/Footer.css"
// import Container from 'react-bootstrap/Container'
import { Container, Navbar, Nav } from 'react-bootstrap'
// import NavTop from './CustomNavbar'

class Footer extends Component {
    render() {
        return(
            <div>
                {/* <Container fluid style={{ height: 1000, backgroundColor: "blue" }}>
                    <Container style={{ height:1000, backgroundColor: "red" }}></Container>
                </Container> */}
                <Navbar bg="dark" variant="dark">
                    <Nav className="mr-auto flex-column">
                        <Nav.Link to="/privacy" className="nav-link">
                            Privacy
                        </Nav.Link>
                        <Nav.Link to="/terms" className="nav-link">
                            Terms &amp; Conditions
                        </Nav.Link>
                        <Nav.Link to="/policy" className="nav-link">
                            Policy
                        </Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Footer;