import React, { Component } from "react";
import { Grid, Col, Image } from "react-bootstrap";
import "../css/About.css";

class About extends Component {
  render() {
    return (
      <div>
        <h2>KODAGU Map</h2>
        <Image src="assets/kodagu.png" className="header-image" />
        <h2>Vision</h2>
        <p>Helping Rural Karnataka - Distribution of equitable quality Electricity to rural areas.</p>
        <h3>Mission</h3>
        <p>Interaction with public utilities</p>
        {/* <Grid>
          <Col xs={12} sm={8} smOffset={2}>
            <Image
              src="assets/person-1.jpg"
              className="about-profile-pic"
              rounded
            />
            <h3> Frank The Tank</h3>
            <p> Description over here it is indeed.</p>
          </Col>
        </Grid> */}
      </div>
    );
  }
}

export default About;
