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


class SignInPage extends Component {
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
export default SignInPage;
