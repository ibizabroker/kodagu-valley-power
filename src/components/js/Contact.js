import React, { Component } from "react";
import "../css/Contact.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import { MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";

class Contact extends Component {
  render() {
    return (
      <div>
        <MDBContainer>
        <br></br>

        <MDBRow>
          <MDBCol className="text-center">
          <h2>
            Rathanbabu Kilar
          </h2>
          </MDBCol>
        </MDBRow>
        <br></br>

        <MDBRow>
          <MDBCol className="text-center">
          <img src="assets/profile-pic.jpeg" height="500px" width="500px" className="img-fluid z-depth-1 rounded-circle" alt="" />
          </MDBCol>          
        </MDBRow>
        <br></br>

        <MDBRow>
          <MDBCol className="text-center">
          <MDBBtn color="white" size="xl" className="black-text">
            B.E.El
          </MDBBtn>
          <MDBBtn color="white" size="xl" className="black-text">
            FIE
          </MDBBtn>
          <MDBBtn color="white" size="xl" className="black-text">
            Chartered Engineer
          </MDBBtn>
          </MDBCol>
        </MDBRow>
        <br></br>

        <MDBRow>
          <MDBCol>
          <p>
            Born in Madikeri Coorg. Formative Education in different Kannada Medium Schools of Coorg Government.
            PUC in Madikeri in 1958. Studied Electrical Engineering in Univerisity College of Engineering, Bangalore (State's first College).
          </p>
          <p>
            Had the previlage of serving Karnataka State Electricity Board for 35 years (1965-2000). 
            Served State Electrical inspectorate for 7 years in Mangalore on Deputation.
            Served in survey and investigation subdivision and Mangalore zonal office technical section of major works(84-88).
            Meters and transformer testing subdivision Mysore with jurisdiction of 5 districs(88-91).
            Establishing one of 100 MVA 220/66 KV receiving station at Torekadanahalli and 66 KV stations at Akkurmole and Harobele and Koppa in Maddur taluk(91-93).
            Managed Mysore City north zone subdivision distribution system of industrial/residential areas of city and rural(93-94).
            Headed the State System Improvement Cell Bangalore for 2 years (94-96). Managed Operational and Maintainance of Mangalore City Distribution(96-98).
            Managed major works circle at Hubbali overseeing the 220 KV transmission lines and stations at Haveri, Chikkodi, Gadag, Karwar, Sirci
            and 220 KV link lines for evacuation of Kaiga Power to Karnataka grid. Interconnect Basavana Bagevadi with Chikkodi via Almatti.
            Life member of KEB Engineers Association, Bangalore. Fellow of Institution of Engineers(India, Mysore center).
          </p>
          <p>
            Worked as Consultant Energy Solutions with INFODESK Manipal, Millers Road, Bangalore(2000-2001).
            Had the previlage of studying Power System Constraints in different parts of Karnataka state both in Urban and Rural Areas spread over the Western Ghat hilly regions.
          </p>
          <p>
            Had exposure to frequency conversion from 25 to 50 cycles in Kollejal(1965).
            Had the previlage of managing 66 KV MUSS, RCC pole production center stores and accounting office and taluk distributin in Chanapatna(65-70) and Doddaballapur taluk(70-71)
          </p>
          </MDBCol>
        </MDBRow>
        <br></br>

      </MDBContainer>    
      </div>
    );
  }
}

export default Contact;
