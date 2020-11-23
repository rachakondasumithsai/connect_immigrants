import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./Navigationbar.css";

class Navigationbar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Brand href="/">ConnectImmigrants</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavItem>
              <Nav.Link href="/">Home</Nav.Link>
            </NavItem>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <NavItem>
              <Nav.Link href="/login">Login</Nav.Link>
            </NavItem>
            <NavItem>
              <Nav.Link href="/signup">Signup</Nav.Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default Navigationbar;
