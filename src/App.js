import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/js/Home";
import Aboutme from "./components/js/Aboutme";
import CustomNavbar from "./components/js/CustomNavbar";
import Footer from "./components/js/Footer"

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <CustomNavbar />
          <Route exact path="/" component={Home} />
          <Route path="/aboutme" component={Aboutme} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
