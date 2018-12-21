import React, {Component} from 'react';
import NavBar from '../navbar';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';
import FooterReact from '../footer';
class LoginForm extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            username: '',
            password: '',
            
        
        
        }
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
  
      else {
          alert("Success");
          event.returnValue = true;
      }
    }
    render() {
        return (
            <div>
                       <MDBContainer fluid>
                <NavBar />
      <MDBRow>
        <MDBCol class="col-lg-3"></MDBCol>
        <MDBCol class="col-lg-3">
          <form action="http://localhost:4321/login?" method="get" onSubmit={this.handleSubmit}>
            <p className="h5 text-center mb-4">Sign in</p>
            <div className="grey-text">
              <MDBInput
                label="Username"
                icon="envelope"
                group
                type="text"
                name="username"
                value = {this.state.username}
                onChange = {this.handleUserChange}
                
              />
              <MDBInput
                label="Password"
                icon="lock"
                name="password"
                group
                type="password"
                value = {this.state.password}
                onChange = {this.handlePasswordChange}
                
              />
            </div>
            <div className="text-center">
              <MDBBtn color="primary"type="submit" value="Submit">Login</MDBBtn>
            </div>
          </form >
        </MDBCol>
        <MDBCol class="col-lg-3"></MDBCol>
      </MDBRow>
      
      <MDBRow >
          <MDBCol style={{height: 100}}>
          
          </MDBCol>
      </MDBRow>
      <FooterReact/>
    </MDBContainer>
            </div>
        );
    }
}

export default LoginForm;