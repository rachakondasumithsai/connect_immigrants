import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Navigationbar from "./components/Navigationbar";
import Login from "./components/Login";
import InHome from "./components/InHome";
import NavBar from "./components/NavBar";
import FindPeople from "./components/FindPeople";
import Signup from "./components/Signup";
import professionalconsultants from "./components/ProfessionalConsultants";
import BookAppointment from "./components/BookAppointment";
import Connections from "./components/Connections"
import { Helmet } from 'react-helmet'

const TITLE = 'ConnectImmigrants'


const LoginContainer = () => (
  <div>
    {/* <Route exact path="/" render={() => <Redirect to="/signup" />} /> */}
    <NavBar />
    <Route exact path="/home" component={InHome} />
    <Route path="/home/findpeople" component={FindPeople} />
    <Route exact path="/home/professionalconsultants" component={professionalconsultants} />
    <Route path="/home/professionalconsultants/book" component={BookAppointment} />
    <Route path="/home/connections" component={Connections} />
  </div>
)
const DefaultContainer = () => (
  <div className="App-view">
    <Navigationbar />
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/login" component={Login} />
    <Route path="/signup" component={Signup} />

  </div>

)

class App extends Component {


  render() {
    return (
      <Router>
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <Switch>
          <Route exact path="/home" component={LoginContainer} />
          <Route exact path="/home/findpeople" component={LoginContainer} />
          <Route exact path="/home/professionalconsultants" component={LoginContainer} />
          <Route path="/home/professionalconsultants/book" component={LoginContainer} />
          <Route path="/home/connections" component={LoginContainer} />
          <Route component={DefaultContainer} />
        </Switch>
      </Router>);
  }
}

export default App;


