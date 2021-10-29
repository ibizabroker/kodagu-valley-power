import React from "react";
import { MDBCarousel, MDBCarouselCaption, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer, 
  MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow, MDBIcon } from "mdbreact";

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
              src="assets/kodagu-frontpage.png"
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
              src="assets/KFG_GRID.png"
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
              src="assets/transmission-lines.png"
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
        My projects
      </h2>
      <p className="grey-text w-responsive mx-auto mb-5">
        Description
      </p>

      <MDBRow className="text-center">
      
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/58.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Title of the project</h4>
            <p className="grey-text">
              Laborum mollit cillum ullamco consectetur qui dolor enim magna ipsum occaecat labore. 
              Lorem quis mollit incididunt id laborum id consectetur cupidatat ullamco laborum consectetur proident. 
              Nostrud consectetur velit reprehenderit incididunt ut ut adipisicing proident laboris irure. 
              Eu nostrud consequat in enim. Tempor consequat eiusmod ex veniam. 
              Proident duis proident proident amet ex commodo duis dolore dolor esse enim aliquip adipisicing incididunt.
            </p>
            <MDBBtn color="black" size="md" className="white-text">
              {/* <MDBIcon far icon="clone" className="left" /> View Project */}
              View Project
            </MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      
        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/project4.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Title of the project</h4>
            <p className="grey-text">
              Laborum mollit cillum ullamco consectetur qui dolor enim magna ipsum occaecat labore. 
              Lorem quis mollit incididunt id laborum id consectetur cupidatat ullamco laborum consectetur proident. 
              Nostrud consectetur velit reprehenderit incididunt ut ut adipisicing proident laboris irure. 
              Eu nostrud consequat in enim. Tempor consequat eiusmod ex veniam. 
              Proident duis proident proident amet ex commodo duis dolore dolor esse enim aliquip adipisicing incididunt.
            </p>
            <MDBBtn color="black" size="md" className="white-text">
              View Project
            </MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
          <MDBCard>
          <MDBView className="overlay rounded z-depth-1" waves>
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/88.jpg"
              alt=""
              className="img-fluid"
            />
            <a href="#!">
              <MDBMask overlay="white-slight" />
            </a>
          </MDBView>
          <MDBCardBody className="pb-0">
            <h4 className="font-weight-bold my-3">Title of the project</h4>
            <p className="grey-text">
              Laborum mollit cillum ullamco consectetur qui dolor enim magna ipsum occaecat labore. 
              Lorem quis mollit incididunt id laborum id consectetur cupidatat ullamco laborum consectetur proident. 
              Nostrud consectetur velit reprehenderit incididunt ut ut adipisicing proident laboris irure. 
              Eu nostrud consequat in enim. Tempor consequat eiusmod ex veniam. 
              Proident duis proident proident amet ex commodo duis dolore dolor esse enim aliquip adipisicing incididunt.
            </p>
            <MDBBtn color="black" size="md" className="white-text">
              View Project
            </MDBBtn>
          </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </section>
    </MDBContainer>
  </div>
  );
}

export default Home;