import React, { Component } from "react";
import NavBar from './navbar';
import FooterReact from './footer';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';
class Success extends Component {
    render () {
        
        return (
            <div>
                <NavBar />
                <h1>Success!!!</h1>
            <FooterReact/>
            </div>
        );
    }
}

export default Success;
