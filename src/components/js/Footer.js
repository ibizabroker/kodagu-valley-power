import React, { Component } from 'react'
import { MDBContainer } from 'mdbreact'
import "../css/Footer.css"

export default class Footer extends Component {
    render() {
        return (
            <div>
              <footer class="text-center text-lg-start elegant-color text-white">  
                
                <section class="d-flex justify-content-center p-4 border-bottom"> 

                  <div className="marginleft">
                    <a href="https://www.facebook.com/rathan.kilar" class="me-4 text-reset">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/rathanbabu-kilar" class="me-4 text-reset">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/rathanbabu10" class="me-4 text-reset">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="https://github.com/tarun-gowda" class="me-4 text-reset">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>

                </section>

                  {/* <div class="container text-md-start mt-5"> */}
                  <MDBContainer className="mt-5 text-center">
                    <div class="row mt-3">

                      <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                          kodagu valley power
                        </h6>
                        <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "190px" }} />
                        <p>
                          Study of distribution system of Rural Karnataka 
                          and recommend remedial measures in public interest.
                        </p>
                      </div>

                      <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                          Projects
                        </h6>
                        <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "77px" }} />
                        <p>
                          <a href="https://docs.google.com/spreadsheets/d/1Wy37XSYDgFlaHExz3TOlZS21RScgMQtX/edit?usp=drivesdk&ouid=110030474125730334536&rtpof=true&sd=true" class="text-reset">Project 1</a>
                        </p>
                        <p>
                          <a href="https://docs.google.com/document/d/16YA5SFjQmKOJdpNN8WzuT9l-wQ5BcqqvzK2XmQAQr-Q/edit?usp=sharing" class="text-reset">Project 2</a>
                        </p>
                      </div>

                      <div class="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                          Contact
                        </h6>
                        <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "73px" }} />
                        <p>
                          <i class="fas fa-envelope me-3"></i>
                          ratankilar@gmail.com
                        </p>
                        {/* <p>
                          <i class="fas fa-envelope me-3"></i>
                          ratan_babu@hotmail.com
                        </p> */}
                        <p><i class="fas fa-phone me-3"></i>+ 91 94487 20722</p>
                      </div>

                    {/* </div> */}
                    
                  </div>
                  </MDBContainer>
                <div class="text-center p-4 elegant-color-dark">
                  © 2021 Copyright:
                  <strong> KODAGU VALLEY POWER </strong>
                </div>

              </footer>
            </div>
          );
    }
}