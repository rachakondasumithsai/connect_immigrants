import React, { Component } from "react";
import { Link } from "react-router-dom";
import About from "./About"
import { Jumbotron, Container, Button } from "react-bootstrap";
import "./Home.css";
import Stp from "./ScrollToTop"

class Home extends Component {
  render() {
    return (
      <div>
        <Container>
        <Jumbotron className="view">
          <br></br>
          <h2>Welcome to ConnectImmigrants</h2>
          <p>
            This applications helps you connect with immigrants with in the
            location that you are aiming
          </p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
        <About/>
        <Stp />
        </Container>
      </div>
    );
  }
}
export default Home;
