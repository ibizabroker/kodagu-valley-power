import React, { Component } from 'react'
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

export default class Footer extends Component {
    render() {
        return (
            <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
              <MDBContainer className="text-center text-md-left">
                <MDBRow className="text-center text-md-left mt-3 pb-3">
                  <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">
                      sampaje valley power
                    </h6>
                    <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "195px" }} />
                    <p>
                      A short description for the footer, around 3 lines will do. asdfa dsfads fa adsf af af af df afasfadsf adsf adsf adsf adfsa fadf.
                    </p>
                  </MDBCol>
                  <hr className="w-100 clearfix d-md-none" />
                  <MDBCol md="2" lg="2" xl="2" className="mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                    <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "85px" }} />
                    <p>
                      <a href="#!">Product 1</a>
                    </p>
                    <p>
                      <a href="#!">Product 2</a>
                    </p>
                    <p>
                      <a href="#!">Product 3</a>
                    </p>
                    <p>
                      <a href="#!">Product 4</a>
                    </p>
                  </MDBCol>
                  <hr className="w-100 clearfix d-md-none" />
                  <MDBCol md="4" lg="3" xl="3" className="mx-auto mt-3">
                    <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                    <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "73px" }} />
                    <p>
                      <i className="fa fa-envelope mr-3" /> rathanbabu@gmail.com
                    </p>
                    <p>
                      <i className="fa fa-phone mr-3" /> + 91 94487 20722
                    </p>
                  </MDBCol>
                </MDBRow>
                <hr />
                <MDBRow className="d-flex align-items-center">
                  <MDBCol md="8" lg="8">
                    <p className="text-center text-md-left grey-text">
                      &copy; {new Date().getFullYear()} Copyright:{" "}
                      SAMPAJE VALLEY POWER
                    </p>
                  </MDBCol>
                  <MDBCol md="4" lg="4" className="ml-lg-0">
                    <div className="text-center text-md-right">
                      <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                          <a href="#" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                            <i className="fab fa-facebook-f" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                            <i className="fab fa-twitter" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                            <i className="fab fa-google-plus" />
                          </a>
                        </li>
                        <li className="list-inline-item">
                          <a href="#" target="_blank" className="btn-floating btn-sm rgba-white-slight mx-1">
                            <i className="fab fa-linkedin-in" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </MDBCol>
                </MDBRow>
              </MDBContainer>
            </MDBFooter>
          );
    }
}