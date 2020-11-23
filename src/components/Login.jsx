import React, { Component } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeHandler = (event) => {
    let name = event.target.name;
    console.log(name);
    this.setState({ [name]: event.target.value });
  };
  onSubmit = () => {
 
    if (
      this.state.email === "pavansaikuramsetti8@gmail.com" &&
      this.state.password === "pavan"
    ) {
      // localStorage.setItem("auth", "true");
      // this.props.updateAuth(true);
      this.props.history.push("/home");
    } else {
      alert("Sign-up to sign in");
    }
  };
  render() {
    console.log("login page");
    return (
      <div className="Login">
      <Form onSubmit={this.onSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label className="form label">Email</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            name="email" // <-- event.target.name is set to "name" here
            placeholder="email"
            onChange={this.changeHandler}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
           type="password"
           name="password" // <-- event.target.name is set to "name" here
           placeholder="password"
           onChange={this.changeHandler}
          />
        </Form.Group>
        <Button block size="lg" type="submit" >
          Login
        </Button>
      </Form>
    </div>
    );
  }
}

export default Login;