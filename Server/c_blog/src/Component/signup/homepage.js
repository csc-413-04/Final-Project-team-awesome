import React, { Component } from "react";
import NavBar from '../navbar'
import TextData from '../../dataText.json';
import {reduxForm} from 'redux-form';
import FooterReact from '../footer';
import SweetAlert from "react-bootstrap-sweetalert/lib/dist/SweetAlert";
import { timingSafeEqual } from "crypto";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
class HomePage extends Component {
    constructor(props){
    super(props);

    this.state = {
        email: '',
        password: '',
        username: '',
    
    
    }
    
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
 }

    handleChange(event) {
    this.setState({email: event.target.value});
  }

  handleUserChange(event) {
      this.setState({username: event.target.value});
  }

  handlePasswordChange(event) {
      this.setState({password: event.target.value});
  }

  handleSubmit(event) {
    
    if(this.state.username === null ||  this.state.username.length <1) {
        alert("Please enter your username");
        event.returnValue = false;
        event.preventDefault();
    }
     
    if(this.state.password === null ||  this.state.password.length <1) {
        alert("Please enter your password");
        event.returnValue = false;
        event.preventDefault();
    }

    if (this.state.email === null || this.state.email.length < 1) {
        alert("Please enter your email");
        event.returnValue = false;
        event.preventDefault();
    }

    else {
        alert("Success");
        event.returnValue = true;
    }
  }
 
 
    render () {
        
        
        return (
            <MDBContainer fluid>
            <NavBar />
            <div className=".col-md-6 .offset-md-3">
          <MDBRow>
          <MDBCol class="col-lg-3"></MDBCol>
            <MDBCol class="col-lg-3">
              <form action="http://localhost:4321/newuser?" method="get" onSubmit={this.handleSubmit}> 
                <p className="h5 text-center mb-4">Sign up</p>
                <div className="grey-text">
                  <MDBInput
                    label="Name"
                    name="username"
                    value={this.state.username}
                    onChange = {this.handleUserChange}
                    icon="user"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  
                  <MDBInput
                    label="Email"
                    name="email"
                    //value=""
                    icon="envelope"
                    group
                    type="email"
                    value = {this.state.email}
                    onChange = {this.handleChange}
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Confirm your email"
                    icon="exclamation-triangle"
                    group
                    type="text"
                    validate
                    error="wrong"
                    success="right"
                  />
                  <MDBInput
                    label="Password"
                    icon="lock"
                    value = {this.state.password}
                    onChange= {this.handlePasswordChange}
                    group
                    type="password"
                    name="password"
                    validate
                  />
                  <MDBInput
                    label="Confirm password"
                    icon="exclamation-triangle"
                    group
                    type="password"
                    validate
                  />
                </div>
                <div className="text-center">
                  <MDBBtn color="primary"type="submit" value="Submit">Sign up</MDBBtn>
                </div>
              </form>
            </MDBCol>
            <MDBCol class="col-lg-3"></MDBCol>
          </MDBRow>
          </div>
          <FooterReact/>
        </MDBContainer>
        );
    }

}



export default HomePage;