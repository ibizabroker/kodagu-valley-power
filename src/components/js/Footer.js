import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div>
              <footer class="text-center text-lg-start elegant-color text-white">  
                
                <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"> 

                  <div class="me-5 d-none d-lg-block">
                    <span>Get connected with me on social networks:</span>
                  </div>

                  <div>
                    <a href="" target="_blank" class="me-4 text-reset">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a href="" target="_blank" class="me-4 text-reset">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a href="" target="_blank" class="me-4 text-reset">
                      <i class="fab fa-google"></i>
                    </a>
                    <a href="" target="_blank" class="me-4 text-reset">
                      <i class="fab fa-linkedin"></i>
                    </a>
                    <a href="https://github.com/tarun-gowda" target="_blank" class="me-4 text-reset">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>

                </section>

                <section class="">

                  <div class="container text-md-start mt-5">
                    <div class="row mt-3">

                      <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                          kodagu valley power
                        </h6>
                        <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "195px" }} />
                        <p>
                          Study of distribution system of Rural Karnataka
                           and recommend remidial measures in public interest.
                        </p>
                      </div>

                      <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                          Products
                        </h6>
                        <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "85px" }} />
                        <p>
                          <a href="#!" class="text-reset">Product 1</a>
                        </p>
                        <p>
                          <a href="#!" class="text-reset">Product 2</a>
                        </p>
                      </div>

                      <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                        <h6 class="text-uppercase fw-bold mb-4">
                          Contact
                        </h6>
                        <hr className="white accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: "73px" }} />
                        <p>
                          <i class="fas fa-envelope me-3"></i>
                          ratankilar@gmail.com
                        </p>
                        <p>
                          <i class="fas fa-envelope me-3"></i>
                          ratan_babu@hotmail.com
                        </p>
                        <p><i class="fas fa-phone me-3"></i>+ 91 94487 20722</p>
                      </div>

                    </div>
                  </div>

                </section>

                <div class="text-center p-4 elegant-color-dark">
                  © 2021 Copyright:
                  <strong> KODAGU VALLEY POWER </strong>
                </div>
                
              </footer>
            </div>
          );
    }
}