import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavbarFrame from './NavbarFrame.jsx'
import SignFrame from './SignFrame.jsx'
import CarouselForSignIn from './CarouselForSignIn.jsx'
// import { Container, Row, Col } from 'react-bootstrap'
const BrowserRouter = require('react-router-dom').BrowserRouter
const Route = require('react-router-dom').Route
const Link = require('react-router-dom').Link
const Col = require('react-bootstrap').Col
const Row = require('react-bootstrap').Row



const Home = () => (
  <div>

    <h2>Home</h2>
  </div>
)
//
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

const Topic = () => (
  <div>

    <h3>Topic</h3>
  </div>
)



class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    }

  }

//   <BrowserRouter>
// <div>
// <ul>
// <li><Link to="/">Home</Link></li>
// <li><Link to="/about">About</Link></li>
// <li><Link to="/topics">Topics</Link></li>
// </ul>
//
// <hr/>
//
// <Route exact path="/" component={Home}/>
// <Route exact path="/about" component={About}/>
// <Route exact path="/topics" component={Topic}/>
// </div>
// </BrowserRouter>
    // <Navbars/>
  render () {
    return (
      <div>
          <Row>
            <Col md={4} sm={4}> <SignFrame/> </Col>
            <Col md={7} lg={6} style= {{backgroundColor: "white"}}> <CarouselForSignIn /> </Col>
          </Row>
        </div>
      )
  }
};
export default SignInPage
