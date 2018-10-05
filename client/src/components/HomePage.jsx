import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {MenuItem, NavDropdown, Nav, Button, input, Toggle, form, bsClass, NavItem,  Header, Navbar, Brand, Collapse} from 'react-bootstrap'
import CarouselHomePage from './CarouselHomePage.jsx'
const Col = require('react-bootstrap').Col
const Row = require('react-bootstrap').Row

class HomePage extends Component {
  render() {
    return(
      <div>
        <Row>
          <Col lg={7} lg={18}>
            <CarouselHomePage/>
            </Col>
        </Row>

        <Row>
          <Col>
            <form className="form-inline mt-2 mt-md-0" style={styleForm1}>
              <input  className="form-control" style={styleInput1} type="text" placeholder="Search" aria-label="Search"/>
                <Button style={styleButton1}  bsStyle='primary'  type="submit">Search</Button>
            </form>
          </Col>
        </Row>
      </div>
    )
  }
}

let styleForm1 = {marginLeft: "15%", marginTop: "20px"};
let styleInput1 = {paddingLeft:"30px", width: "700px", height:"60px", border: "2px solid black", fontSize:"20px"};
let styleButton1 = {marginRight:"5%", width: "200px", height:"60px", fontSize:"20px"};
export default HomePage;
