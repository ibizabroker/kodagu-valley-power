import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import "../css/Home.css";

class Home extends Component {
  render() {
    return (
      <Container>
          <h2>Sampaje Valley Power.</h2>
          <p>
            Short description about this Sampaje Valley Power. Rest can be written in About. <br></br>
            Can add links to the docs in this home page. <br></br>
            API to maybe display the preview of google sheets?
          </p>
          {/* <Link to="/about">
            <Button bsStyle="primary">About</Button>
          </Link> */}
        {/* <Row className="show-grid text-center">
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-1.jpg" circle className="profile-pic" />
            <h2> Frank </h2>
            <p>This is a random one that I am learning.</p>
          </Col>

          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-2.jpg" circle className="profile-pic" />
            <h2> Marie </h2>
            <p>This is a random one that I am learning.</p>
          </Col>
          <Col xs={12} sm={4} className="person-wrapper">
            <Image src="assets/person-3.jpg" circle className="profile-pic" />
            <h2> Sujan </h2>
            <p>This is a random one that I am learning.</p>
          </Col>
        </Row> */}
        <p>Display the links embed in fancy fonts maybe.</p>
      </Container>
    );
  }
}

export default Home;
