import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import "../components/Signup.css"
import { Container, Row } from "react-bootstrap";

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      EmailAddress: "",
      password: "",
      cpassword: "",
      fname: "",
      lname: "",
      dob: "",
      mobile: "",
      gender: "",
      isClickedSubmit: false,
      validateEmailMsg: "",
      validateFnameMsg: "",
      validateLnameMsg: "",
      validatePassMsg: "",
      validateRadMsg: "",
      validateMobMsg: "",
      validateCPassMsg: "",
      isClickedSignIn: false,
      isClickedHome: false

    }
  }

  state = {
    startDate: new Date()
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  myEmailAddressFun = (event) => {
    this.setState({
      EmailAddress: event.target.value
    })

  }


  myPasswordFun = (event) => {
    this.setState({
      password: event.target.value
    })

  }

  myCPasswordFun = (event) => {
    this.setState({
      cpassword: event.target.value
    })

  }

  myFNameFun = (event) => {
    this.setState({
      fname: event.target.value
    })

  }

  myLNameFun = (event) => {
    this.setState({
      lname: event.target.value
    })

  }

  myDobFun = (event) => {
    this.setState({
      dob: event.target.value
    })

  }

  myMobileNumberFun = (event) => {
    this.setState({
      mobile: event.target.value
    })

  }

  myGenderFun = (event) => {


    this.setState({
      gender: event.target.value
    })



  }

  redirectSignInFun = () => {
    this.setState({ isClickedSignIn: true });
  }


  redirectHome = () => {

    this.setState({ isClickedHome: true });
  }



  mySubmitFun = (event) => {

    let validateEmailMsg = "";
    let validateFnameMsg = "";
    let validateLnameMsg = "";
    let validateRadMsg = "";
    let validateMobMsg = "";
    let validatePassMsg = "";
    let validateCPassMsg = "";


    event.preventDefault();

    if (this.state.EmailAddress.includes('@')) {
      this.setState({ validateEmailMsg })
    }
    else if (!this.state.EmailAddress.includes('@')) {
      validateEmailMsg = "Email Address is invalid. Please provide @ in your Email address";
      if (validateEmailMsg) {
        this.setState({ validateEmailMsg })
      }
    }


    if (this.state.fname.length !== 0 || this.state.fname.trim() !== "") {
      this.setState({ validateFnameMsg })
    }
    else if (this.state.fname.length === 0 || this.state.fname.trim() === "") {
      validateFnameMsg = "Please provide First Name. It cannot be empty.";
      if (validateFnameMsg) {
        this.setState({ validateFnameMsg })
      }
    }

    if (this.state.lname.length !== 0 || this.state.lname.trim() !== "") {
      this.setState({ validateLnameMsg })
    }
    else if (this.state.lname.length === 0 || this.state.lname.trim() === "") {
      validateLnameMsg = "Please provide Last Name. It cannot be empty.";
      if (validateLnameMsg) {
        this.setState({ validateLnameMsg })
      }
    }

    if (this.state.gender.length !== 0 || this.state.gender.trim() !== "") {
      this.setState({ validateRadMsg })
    }
    else if (this.state.gender.length === 0 || this.state.gender.trim() === "") {
      validateRadMsg = "Please choose gender. It cannot be empty.";
      if (validateRadMsg) {
        this.setState({ validateRadMsg })
      }
    }

    if (this.state.mobile.length !== 0 || this.state.mobile.trim() !== "") {
      this.setState({ validateMobMsg })
    }
    else if (this.state.mobile.length === 0 || this.state.mobile.trim() === "") {
      validateMobMsg = "Please provide Mobile Number. It cannot be empty.";
      if (validateMobMsg) {
        this.setState({ validateMobMsg })
      }
    }

    if (this.state.password.length !== 0 || this.state.password.trim() !== "") {
      this.setState({ validatePassMsg })
    }
    else if (this.state.password.length === 0 || this.state.password.trim() === "") {
      validatePassMsg = "Please provide Password. It cannot be empty.";
      if (validatePassMsg) {
        this.setState({ validatePassMsg })
      }
    }

    if (this.state.cpassword.length !== 0 || this.state.cpassword.trim() !== "") {
      this.setState({ validateCPassMsg })
      if (this.state.password === this.state.cpassword) {
        alert("You have successfully Registered.")
        this.setState({ isClickedSubmit: true });
      }
      else {
        alert("Sorry, Password and Confirm-Password does not match. Please Re-Type.")

      }
    }
    else if (this.state.cpassword.length === 0 || this.state.cpassword.trim() === "") {
      validateCPassMsg = "Please provide Matching Confirm Password. It cannot be empty.";
      if (validateCPassMsg) {
        this.setState({ validateCPassMsg })
      }
    }

  }

  render() {



    if (this.state.isClickedSubmit) {

      return <Redirect to={{ pathname: "/login" }}></Redirect>
    }

    return (
      <div>



        <div>
          <div className="restex">
            <p className="TxtAlign">Welcome to Signup Page</p>
          </div>
          <div className="SBox">
            <Container>
              <form onSubmit={this.mySubmitFun}>
                <Row>
                  <img src="/images/email.png" className="AllMyImg" alt="email" />
                  <p ><strong>  Email address</strong> </p>
                  <input className="form-control" type="text" placeholder="Enter Email address" value={this.state.EmailAddress} onChange={this.myEmailAddressFun}></input>

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.validateEmailMsg}
                  </div>
                </Row>
                <br />

                <Row>
                  <img src="/images/fname.png" className="AllMyImg" alt="fname" />
                  <p><strong>  First Name</strong></p>
                  <input className="form-control" type="text" placeholder="First Name" value={this.state.fname} onChange={this.myFNameFun} ></input>

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.validateFnameMsg}
                  </div>
                </Row>
                <br />

                <Row>
                  <img src="/images/fname.png" className="AllMyImg" alt="fname" />
                  <p><strong>  Last Name</strong></p>
                  <input className="form-control" type="text" placeholder="Last Name" value={this.state.lname} onChange={this.myLNameFun} ></input>

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.validateLnameMsg}
                  </div>
                </Row>
                <br />

                <Row>
                  <img src="/images/gender.png" className="AllMyImg" alt="fname" />
                  <p><strong> Gender </strong></p>

                  <input type="radio" className="RadioBut" name="gender" value="Male" onChange={this.myGenderFun} ></input>Male


                    <input type="radio" className="RadioBut" name="gender" value="Female" onChange={this.myGenderFun} ></input>Female


                    <input type="radio" className="RadioBut" name="gender" value="Not to Disclose" onChange={this.myGenderFun}></input>Not to Disclose


                    <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.validateRadMsg}
                  </div>


                </Row>
                <br />

                <Row>
                  <img src="/images/pass2.png" className="AllMyImg" alt="mobile" />
                  <p><strong> Password</strong></p>
                  <input className="form-control" type="password" placeholder="Enter Password" value={this.state.password} onChange={this.myPasswordFun} ></input>

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.validatePassMsg}
                  </div>
                </Row>
                <br />

                <Row>
                  <img src="/images/pass2.png" className="AllMyImg" alt="mobile" />
                  <p><strong>Confirm Password</strong></p>
                  <input className="form-control" type="password" placeholder="Re-Type Password" value={this.state.cpassword} onChange={this.myCPasswordFun} ></input>

                  <div style={{ fontSize: 12, color: "red" }}>
                    {this.state.validateCPassMsg}
                  </div>
                </Row>
                <br />

                <Row className="justify-content-center align-items-center">

                  <button type="submit" className="btn btn-danger navbar-btn" >Submit</button>

                </Row>
              </form>
            </Container>


          </div>

        </div>

      </div>

    );
  }
}

export default SignUp;