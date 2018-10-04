import React from 'react';
import ReactDOM from 'react-dom';
import {MenuItem, NavDropdown, Nav, Button, input, Toggle, form, bsClass, NavItem,  Header, Navbar, Brand, Collapse} from 'react-bootstrap'
// import  UC1 from './uc2.jpg'
// <img classNameName="u-header__navbar-brand-default" src={UC1} alt="Logo"/>
const Link = require('react-router-dom').Link
// var Link = require('react-router-dom').Link
class NavbarFrame extends React.Component {
  constructor(prop) {
    super(prop)
    this.state = {
      info: []
    }
    this.onClickSpecial= this.onClickSpecial.bind(this);
    this.onClickNearMe = this.onClickNearMe.bind(this);
    this.onClickHappyHour = this.onClickHappyHour.bind(this);
  }

  onClickSpecial() {
    console.log('ZOMATO')
    $.get('/spcial', function(zomatoData) {
      console.log('Hello Data Zomato:  ', zomatoData)
    })
    .done(zomatoData => {
      this.setState({
        info: zomatoData
      });
    });
  }

  onClickNearMe() {
    console.log('ZOMATO')
    $.get('/nearme', function(zomatoData) {
      console.log('Hello Data Zomato:  ', zomatoData)
    })
    .done(zomatoData => {
      this.setState({
        info: zomatoData
      });
    });
  }

  onClickHappyHour() {

    // $.get('/happyhour', function(zomatoData) {
    //   console.log('Hello Data Zomato:  ', zomatoData)
    // })
    // .done(zomatoData => {
    //   this.setState({
    //     info: zomatoData
    //   });
    // });
  }
  render() {
    // console.log('STATE:', this.state.info)
  // <a href="#brand">UCRev®</a>
  //   <a href="newAcct.html">Create Account</a>
    return(
      <div>
      <Navbar inverse collapseOnSelect>
<Navbar.Header >
<Navbar.Brand>
    <a href="/">UCRev®</a>
</Navbar.Brand>
<Navbar.Toggle />
</Navbar.Header>
<Navbar.Collapse>
<Nav>
  <NavItem  href="/login">
    Login
    </NavItem>
  <NavItem  href="/newacct" onClick={this.onClickNewAcct}>
    Create Account
  </NavItem>

  <NavDropdown eventkey={3} title="Menu" id="basic-nav-dropdown">
    <MenuItem href="/deals" onClick={this.onClickSpecial} eventkey={3.1}>Under $30</MenuItem>
    <MenuItem href="/nearby" onClick={this.onClickNearMe} eventkey={3.2}>Near by</MenuItem>
    <MenuItem href="/happyhour" onClick={this.onClickHappyHour}eventkey={3.3}>Happy Hours</MenuItem>
    <MenuItem divider />
    <MenuItem href="/contact" onClick={this.onClickNearMe}eventkey={3.3}>Contact Us</MenuItem>
  </NavDropdown>
</Nav>
<Nav pullRight>
</Nav>
</Navbar.Collapse>
</Navbar>
      </div>
    )
  }
}


export default NavbarFrame
