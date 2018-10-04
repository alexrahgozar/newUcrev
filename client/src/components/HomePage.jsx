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
        <Col lg={10} lg={16}>
          <CarouselHomePage/>
        </Col>
      </Row>

      <Row>
          <Col>
          <form className="form-inline mt-2 mt-md-0" style={{marginLeft: "15%", marginTop: "20px"}}>
              <input  className="form-control" style={{paddingLeft:"30px", width: "700px", height:"60px", border: "2px solid black", fontSize:"20px"}} type="text" placeholder="Search" aria-label="Search"/>
                <Button style={{marginRight:"5%", width: "200px", height:"60px", fontSize:"20px"}}  bsStyle='primary'  type="submit">Search</Button>
            </form>
          </Col>
      </Row>
      </div>
    )
  }
}

export default HomePage;
