import React from "react";
import Table from "./Table"
import Table2 from "./Table2"
import slide1 from "../assets/kodagu-frontpage.png"
import slide2 from "../assets/KFG_GRID_2_front.png"
import slide3 from "../assets/transmission-lines.png"
import cardpic from "../assets/KFG_GRID_2.png"
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, 
  MDBBtn, MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdbreact";

const Home = () => {
  return (
    <div>
     {/* <MDBContainer> */}
      <MDBCarousel
      activeItem={1}
      length={3}
      showControls={true}
      showIndicators={true}
      className="z-depth-1"
    >
      <MDBCarouselInner>
        <MDBCarouselItem itemId="1">
          <MDBView>
            <img
              className="d-block w-100"
              src={slide1}
              alt="First slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">KODAGU District</h3>
            {/* <p>Description</p> */}
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="2">
          <MDBView>
            <img
              className="d-block w-100"
              src={slide2}
              alt="Second slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">66 and 33kV Networks of KODAGU District</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
        <MDBCarouselItem itemId="3">
          <MDBView>
            <img
              className="d-block w-100"
              src={slide3}
              alt="Third slide"
            />
          <MDBMask overlay="black-light" />
          </MDBView>
          <MDBCarouselCaption>
            <h3 className="h3-responsive">Transmission Lines</h3>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    {/* </MDBContainer> */}

    <MDBContainer>
    <section className="text-center my-5">
      <h2 className="h1-responsive font-weight-bold my-5">
        Power Projects
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        KODAGU District
      </p>

      <MDBRow className="text-center">
      
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={cardpic}
              alt=""
              className="img-fluid"
            />
            <a href="https://docs.google.com/spreadsheets/d/1rX6Sm-TkFH6s_eHrrXxcPG05Gy8mcOCP/edit?usp=drivesdk&ouid=110030474125730334536&rtpof=true&sd=true">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Sampaje 66/11 KV 12.50 MVA</h4>
            <p className="grey-text">
              <ul className="text-left">
                <li>Proposed to tap Madikeri-Bhagamandala line at Madenadu with tapping structure for 21 kms on narrow based towers.</li> 
                <li>Will improve voltage to power consumers of Mel Chembu, Uru Bylu Chembu, Sampaje and Peraje and Arekallu.</li>
                <li>Will reduce energy loss to the tune of 15 Lakh Units per Annum to CESCOM.</li>
                <li>Provide infrastructure to cater power to new prospective MSME and promote rural economy.</li>
                <li>Benefit students and young scholars of rural parts of Western Ghat remote Villages deprived of social benefits.</li>
              </ul>
            </p>
            <MDBBtn 
              color="black" 
              size="md" 
              className="white-text" 
              href="https://docs.google.com/spreadsheets/d/1oyzVAB3ewLM0B1SuXXReK6jqjyicnXz1/edit?usp=drivesdk&ouid=110030474125730334536&rtpof=true&sd=true"
            >
              Present System
            </MDBBtn>
            <MDBBtn 
              color="black" 
              size="md" 
              className="white-text" 
              href="https://docs.google.com/spreadsheets/d/1rX6Sm-TkFH6s_eHrrXxcPG05Gy8mcOCP/edit?usp=drivesdk&ouid=110030474125730334536&rtpof=true&sd=true"
            >
              KPTCL Write Up
            </MDBBtn>
            <MDBBtn 
              color="black" 
              size="md" 
              className="white-text" 
              href="https://docs.google.com/spreadsheets/d/1Wy37XSYDgFlaHExz3TOlZS21RScgMQtX/edit?usp=drivesdk&ouid=110030474125730334536&rtpof=true&sd=true"
            >
              After Improvement
            </MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={cardpic}
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Maragodu 66/11 KV 8.00 MVA</h4>
            <p className="grey-text">
              <ul className="text-left">
                <li>Proposed to tap Madikeri-Virajpet 66 transmission line by LILO.</li>
                <li>Will improve voltage and power system to agriculturists of Arekadu, Kattemadu, Hoskeri, Maragodu, Hulithada, Hakatthuru, Biligeri Villages.</li>
                <li>Will reduce energy loss to the tune of 6 Lakh Units per Annum to CESCOM and promote industrial growth.</li>
                <li>Facilitate storage of Horticulture products(Anthurium) and other exotic fruits.</li>
                <li>Provide facility for coffee curing and processing units.</li>
              </ul>
            </p>
            <MDBBtn 
              color="black" 
              size="md" 
              className="white-text"
              href=""  
            >
              Present system
            </MDBBtn>
            <MDBBtn 
              color="black" 
              size="md" 
              className="white-text"
              href=""  
            >
              After Improvement
            </MDBBtn>

          </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src={cardpic}
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">NAPOKLU Hobli</h4>
            <p className="grey-text">
              <ul className="text-left">
              <li>At present Napoklu Hobli Headquarters and surrounding villages of Hoddur, Nelaji, Parane, Balamuri and fed from Murnad substation.</li>
              <li>To conduct feasibility study and audit of feeders and examine the needs for improvements.</li>
              </ul>
            </p>
            <MDBBtn 
              color="black" 
              size="md" 
              className="white-text"
              href="http://wikiedit.org/India/Napoklu/221739/"
            >
              Project Under Study
            </MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>

    <h4>11KV ARANTHODU Feeder: SULYA</h4>
    <Table />
    <p>
      <strong>Total - </strong>
      Distance in kms: 24.05, 
      Load in KVA: 2986
    </p>
    <br></br>

    <h4>Proposal: 66/11 KV 12.5 MVA Substation</h4>
    <Table2 />
    <p>
      <strong>Energy received in F8-Feeder: </strong>
      4451560
      <br></br>
      <strong>Energy Export at GADIKALLU: </strong>
      -1012038
      <br></br>
      <strong>Import from Sulya to PERAJE: </strong>
      980000
    </p>
    <br></br>
    </MDBContainer>
  </div>
  );
}

export default Home;