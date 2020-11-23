import React, { Component } from "react";
import { Jumbotron, Container, Row, Col, Image } from "react-bootstrap";
import "./Home.css";
import "./About.css"
import logo from "../Assets/PHOTO.jpg"
import b2 from "../Assets/images.jpg"
import b1 from "../Assets/mtc.jpg"
import b3 from "../Assets/immigration.jpg"
import Carousel from 'react-bootstrap/Carousel'

class About extends Component {
  render() {
    return (
      <div>
        <Container>
          <Jumbotron>
            <h2>Connect Immigrants</h2>
            <p>
              By using this web application we are helping users to connect people from different countries
              who are aiming at the same places or universities and help them get more insight into the immigration process.
          </p>
          </Jumbotron>
          <Carousel>
            <Carousel.Item interval={500}>
              <Carousel.Caption>
                <h3 >Helping people who is interested to immigrate from Canada to India for study or work</h3>
              </Carousel.Caption>
              <img
                className="d-block w-100"
                src={b1}
                alt="Firstslide"
                width={400} height={500}
              />
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={b2}
                alt="Second slide"
                width={400} height={500}
              />
              <Carousel.Caption>
                <h3>We will help you to get connected with International students who were successful in immigration to Canada</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={b3}
                alt="Third slide"
                width={400} height={500}
              />
              <Carousel.Caption>
                <h3>We will help you to get connected with trusted and professional consultants who can serve you better</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <h1 style={{ color: "white" }}>Application Developers</h1>
          <Row className="show-grid text-center">
            <Col xs={8} sm={3} className="person-wrapper">
              <Image src={logo} className="profile-pic" roundedCircle />
              <h3 style={{ color: "white" }}>Pavansai <br></br> Kuramsetti</h3>
              <p style={{ color: "white" }}>
                Pavansai completed his bachelor’s in Computer Science
                at Anurag Group of Institutions,
                Hyderabad, India. He is currently
                pursuing a Master of Applied
                Computer Science at Dalhousie
                University. Throughout his
                education, he was exposed to
                building various web
                applications. He is a good team
                player
            </p>
            </Col>
            <Col xs={8} sm={3} className="person-wrapper">
              <Image src={logo} circle className="profile-pic" roundedCircle />
              <h3 style={{ color: "white" }}>Smit
              <br></br>Panchal</h3>
              <p style={{ color: "white" }}>
                Smit currently pursuing a
                Masters of Applied Computer
                Science at Dalhousie University.
                He has hands-on experience and
                interested in developing the
                front-end and back-end of the
                web-application. He has
                developed several webapplication
                which includes web
                technology such as - HTML5,
                CSS3, React, Node.js, Express.js,
                AngularJS, Bootstrap, Sails.js.
            </p>
            </Col>
            <Col xs={8} sm={3} className="person-wrapper">
              <Image src={logo} circle className="profile-pic" roundedCircle />
              <h3 style={{ color: "white" }}>Sumith Sai Rachakonda</h3>
              <p style={{ color: "white" }}>
                Familiar with Java development,
                Node JS development, Android
                development, testing, and
                documentation.
            </p>
            </Col>
            <Col xs={8} sm={3} className="person-wrapper">
              <Image src={logo} circle className="profile-pic" roundedCircle />
              <h3 style={{ color: "white" }}>Yuganthi Krishnamurthy</h3>
              <p style={{ color: "white" }}>
                Pursuing a Master’s in Applied
                Computer Science at Dalhousie
                University. Have a good handson
                experience in developing web
                and android application.
                Adaptive person and has a good
                ability to handle multiple parallel
                priorities
            </p>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default About;
