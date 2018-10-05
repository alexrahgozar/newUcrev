import React, {Component} from 'react'
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {Button, form, Form, FormGroup, ControlLabel, FormControl,
HelpBlock, InputGroup, Checkbox, Glyphicon } from 'react-bootstrap'
// import { Container, Row, Col } from 'react-bootstrap'

class NewUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      validationButton: null,
      controlId: null,
      validationState1: 'warning',
      validationState2: 'warning',
      validationState3: 'warning',
      validationState4: 'warning',
      info1: '',
      info2: '',
      info3: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      disabledSubmit: true,
      disabled1: true,
      disabled2: true,
      disabled3: true,
      disabled4: true,
      emailValidation: 'warning',
      input: '',
      data: null,
      createdAcct: '',
      errorAcct: '',
      login: false
    }
    this.validationButton = this.validationButton.bind(this);
    this.handleInputName = this.handleInputName.bind(this);
    this.handleInputEmail = this.handleInputEmail.bind(this);
    this.handleInputReEmail = this.handleInputReEmail.bind(this);
    this.handleInputPassword = this.handleInputPassword.bind(this);

    this.validationState1 = this.validationState1.bind(this);
    this.validationState2 = this.validationState2.bind(this);
    this.validationState3 = this.validationState3.bind(this);
    this.validationState4 = this.validationState4.bind(this);
    this.disabledSubmit = this.disabledSubmit.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInputName(event) {
    console.log(event.target.value)
      this.setState({
        value1: event.target.value
      });
      /// username

      if(event.target.value.length > 7) {
        console.log('yesss')
        this.setState({
          validationState1: 'success',
          info: '',
          disabled1: false
        })
      } else {
        this.setState({
          validationState1: 'error',
          info: 'User Name must be longer than 7 letters',
          disabled1: true
        })
      }
      if(this.state.disabled1 === false && this.state.disabled2 === false &&
      this.state.disabled3 === false && this.state.disabled4 === false) {
        this.setState({
          disabledSubmit: false
        })
      } else {
        this.setState({
          disabledSubmit: true
        })
      }
  }
  handleInputEmail(event) {
    this.setState({
      value2: event.target.value
    });
    let valid = this.state.value2.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
      if(valid !== null) {
        this.setState({
          validationState2: 'success',
          info: '',
          disabled2: false
      })
      } else {
        this.setState({
          validationState2: 'error',
          info: 'Please Enter A Valid Email',
          disabled2: true
        })
      }
      if(this.state.disabled1 === false && this.state.disabled2 === false &&
      this.state.disabled3 === false && this.state.disabled4 === false) {
        this.setState({
          disabledSubmit: false
        })
      } else {
        this.setState({
          disabledSubmit: true
        })
      }
  }

  handleInputReEmail(event) {
    this.setState({
      value3: event.target.value
    });

    if(this.state.value2 === event.target.value) {
      this.setState({
        validationState3: 'success',
        info: '',
        disabled3: false
        })
    } else {
      this.setState({
        validationState3: 'error',
        info: 'User Name must be longer than 7 letters',
        disabled3: true
        })
    }

    if(this.state.disabled1 === false && this.state.disabled2 === false &&
      this.state.disabled3 === false && this.state.disabled4 === false) {
        this.setState({
          disabledSubmit: false
        })
    } else {
      this.setState({
        disabledSubmit: true
      })
    }
  }

  handleInputPassword(event) {
    let symbols = '!@#$%^&*'
    let symbolValid = event.target.value.match(/[#@$-/:-?{-~!"^_`\[\]]/)
    let numberValid = event.target.value.match(/[0-9]/)
    let charValid = event.target.value.match(/[A-Za-z]/)
    let passwordLength = event.target.value.length
      this.setState({
        value4: event.target.value
      });

      if(symbolValid !== null && numberValid !== null && charValid !== null && passwordLength > 6) {
        this.setState({
          validationState4: 'success',
          info: '',
          disabled4: false
        })
      } else {
        this.setState({
          validationState4: 'error',
          info: 'User Name must be longer than 7 letters',
          disabled4: true
        })
      }

      if(this.state.disabled1 === false && this.state.disabled2 === false &&
        this.state.disabled3 === false && this.state.disabled4 === false) {
          this.setState({
            disabledSubmit: false
          })
      } else {
        this.setState({
          disabledSubmit: true
        })
      }
  }
      /// submit


  validationState1(event) {

  }
  validationState2() {

  }
  validationState3() {

  }
  validationState4() {

  }

  validationButton() {
    if(this.state.validationState !== "error"|| this.state.validationState !== null) {
      // this.setState({
      //   disabled: false
      // })
    }
  }

  disabledSubmit() {
    if(this.state.disabled1 === false && this.state.disabled2 === false &&
      this.state.disabled3 === false && this.state.disabled4 === false) {
        this.setState({
          disabledSubmit: false
        })
    } else {
        this.setState({
          disabledSubmit: true
        })
    }
  }

  handleSubmit(e) {
    this.setState({
      createdAcct: '',
      errorAcct: ''
    })

    var userInformation =
    {
      username: this.state.value1,
      email: this.state.value2,
      emailRe: this.state.value3,
      password: this.state.value4
  }
   console.log('UserInformation: ', userInformation)
   fetch('/newacct', {
     method: 'POST',
     headers: {
       'Accept': 'application/json',
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({
       username: this.state.value1,
       email: this.state.value2,
       emailRe: this.state.value3,
       password: this.state.value4
     })
   }).then(res => res.json())
   .then(response =>  this.setState({
     createdAcct: 'Hi ' + JSON.stringify(response.username).slice(1,-1) + ', Welcome To UcRev.',
     errorAcct: '',
     login: true
   }))
   .catch(error => this.setState({
     errorAcct: 'The email address is already taken. Please choose another one.',
   }));
   console.log('CreatedACCT: ',this.state.createdAcct)
   console.log('ErrorACCT: ',this.state.errorAcct)
   console.log("STATE: ", this.state.createdAcct.length)
    e.preventDefault()
    // this.props.saveInfo(data)
    // e.target.reset();
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit} autoComplete="off" style={{width:"20%", marginLeft: "10%",marginTop: "2%"}}>
        <div className="text-center mb-4">
          <img className="mb-4" src= "https://drive.google.com/uc?export=view&id=1JGmtRC0EGRGfyzvUkDEf3OwE_4yTdjH5" alt="" width="150" height="150"/>
          <p style={{fontFamily:"Times New Roman", fontSize:'22px'}}>Sign up to save your favorite restaurants and reviews.</p>
        </div>
          <FormGroup controlId="formValidationSuccess1" validationState={this.state.validationState1}>
            <ControlLabel>{this.state.info1}</ControlLabel>
            <FormControl
              autoComplete="off"
              type="text"
              value={this.state.value1}
              placeholder="Enter Name"
              onChange={this.handleInputName}/>
              <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formValidationSuccess2" validationState={this.state.validationState2}>
            <ControlLabel>{this.state.info2}</ControlLabel>
            <FormControl
              autoComplete="off"
              type="email"
              value={this.state.value2}
              placeholder="Enter Email"
              onChange={this.handleInputEmail}/>
              <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formValidationSuccess3" validationState={this.state.validationState3}>
            <ControlLabel>{this.state.info3}</ControlLabel>
            <FormControl
              autoComplete="off"
              type="email"
              value={this.state.value3}
              placeholder="Re-Enter Email"
              onChange={this.handleInputReEmail}/>
              <FormControl.Feedback />
          </FormGroup>

          <FormGroup controlId="formValidationSuccess4" validationState={this.state.validationState4}>
            <ControlLabel>{this.state.info4}</ControlLabel>
            <FormControl
              autoComplete="off"
              type="password"
              value={this.state.value4}
              placeholder="Password"
              onChange={this.handleInputPassword}/>
              <FormControl.Feedback />
          </FormGroup>
          <Button  disabled={this.state.disabledSubmit}  type="submit">Submit</Button>
        </form>
        <h1>{this.state.createdAcct}</h1>
        <h1>{this.state.errorAcct}</h1>
      </div>
    )
  }
}

export default NewUser;
