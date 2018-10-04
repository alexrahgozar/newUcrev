import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import NavbarFrame from './components/NavbarFrame.jsx'
import SignFrame from './components/SignFrame.jsx'
import CarouselHomePage from './components/CarouselHomePage.jsx'
import SignInPage from './components/SignInPage.jsx'
import NewUser from './components/CreateAcctPage.jsx'
import HomePage from './components/HomePage.jsx'
import HappyHourPage from './components/HappyHourPage.jsx'
import NearByPage from './components/NearByPage.jsx'
import DealsPage from './components/DealsPage.jsx'
import ContactPage from './components/ContactPage.jsx'

// import { Container, Row, Col } from 'react-bootstrap'
const BrowserRouter = require('react-router-dom').BrowserRouter
const Route = require('react-router-dom').Route
const Link = require('react-router-dom').Link
const Col = require('react-bootstrap').Col
const Row = require('react-bootstrap').Row



// const Home = () => (
//   <div>
//     <h2>Home</h2>
//       <SearchBar/>
//   </div>
// )

const About = () => (
  <div>
    <h2>About</h2>
  </div>
)

const Topic = () => (
  <div>

    <h3>Topic</h3>
  </div>
)



class App extends Component {
  constructor(props) {
    super(props)
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

  render () {
    return (

        <BrowserRouter>
      <div>
        <NavbarFrame/>
      <Route exact path="/" component={HomePage}/>
      <Route path="/login"  component={SignInPage}/>
      <Route exact path="/topics" component={Topic}/>
      <Route  path="/newacct" component={NewUser}/>
      <Route path="/happyhour" component={HappyHourPage}/>
      <Route path="/nearby" component={NearByPage}/>
      <Route path="/deals" component={DealsPage}/>
      <Route path="/contact" component={ContactPage}/>
      </div>
      </BrowserRouter>

      )
  }
}
ReactDOM.render(<App/>, document.getElementById('app'))
// <div>
//   <Navbars/>
//     <Row>
//       <Col md={6} sm={6}> <SignBoot/> </Col>
//       <Col md={5} md={5}> <Carouselz/> </Col>
//     </Row>
//
//   </div>
