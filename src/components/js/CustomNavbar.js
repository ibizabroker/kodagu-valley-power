import React, { Component } from "react";
import "../css/CustomNavbar.css"
import { Link } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark elegant-color-dark">
        <div class="container-fluid">
          <a class="navbar-brand"><Link to= {"/"}>Kodagu Valley Power</Link></a>
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav"> {/* ms-auto mb-2 mb-lg-0 in class for right allign */}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page"><Link to= {"/"}>Home</Link></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" aria-current="page"><Link to= {"/about"}>About</Link></a>
              </li>
              <li class="nav-item">
              <a class="nav-link" aria-current="page"><Link to= {"/contact"}>Contact</Link></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
