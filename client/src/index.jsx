import React, { Component } from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import NavbarFrame from "./components/NavbarFrame.jsx";
import SignFrame from "./components/SignFrame.jsx";
import CarouselHomePage from "./components/CarouselHomePage.jsx";
import SignInPage from "./components/SignInPage.jsx";
import NewUser from "./components/CreateAcctPage.jsx";
import HomePage from "./components/HomePage.jsx";
import HappyHourPage from "./components/HappyHourPage.jsx";
import NearByPage from "./components/NearByPage.jsx";
import DealsPage from "./components/DealsPage.jsx";
import ContactPage from "./components/ContactPage.jsx";
// import { Container, Row, Col } from 'react-bootstrap'
const BrowserRouter = require("react-router-dom").BrowserRouter;
const Route = require("react-router-dom").Route;
const Link = require("react-router-dom").Link;
const Col = require("react-bootstrap").Col;
const Row = require("react-bootstrap").Row;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <NavbarFrame />
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={SignInPage} />
          <Route path="/newacct" component={NewUser} />
          <Route path="/happyhour" component={HappyHourPage} />
          <Route path="/nearby" component={NearByPage} />
          <Route path="/deals" component={DealsPage} />
          <Route path="/contact" component={ContactPage} />
        </div>
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
