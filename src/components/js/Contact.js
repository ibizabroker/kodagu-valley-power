import React, { Component } from "react";
import "../css/Contact.css";
import { Container, Row, Col, Image } from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div>
        <Container>
          {/* <h2>Contact</h2> */}
          <Col xs={12} sm={8} smOffset={0}>
            <Image
              src="assets/profile-pic.jpg"
              className="about-profile-pic"
              rounded
            />
            <h3>Rathanbabu Kilar</h3>
            <h4>B.E.El; FIE; Chartered Engineer</h4>
            <p>
              Born in Madikeri Coorg. Formative Education till matricalaiton in different Kannada Medium Schools of Coorg Government.
              PUC in Madikeri in 1958. Studied Electrical Engineering in Univerisity College of Engineering, Bangalore (State's first College).
            </p>
            <p>
              Had the previlage of serving Karnataka State Electricity Board for 35 years (1965-2000). 
              Served State Electrical inspectorate for 7 years in Mangalore.
              Headed the State System Improvement Cell Bangalore for 2 years (94-96), managed Operational and Maintainance of Mangalore City Distribution.
            </p>
            <p>
              "As Consultant Energy Solutions" had the previlage of studying Power System Constraints in Kodagu both in Urban and Rural Areas spread over the Western Ghat hilly regions.
            </p>
          </Col>
        </Container>
      </div>
    );
  }
}

export default Contact;
