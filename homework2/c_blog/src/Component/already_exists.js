import React, { Component } from "react";
import NavBar from "./navbar";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';
class Already_Exists extends Component {
    render () {
        return(
            <div>
                <NavBar />
                <h1>Username already exists!</h1>
            </div>
        );
    }
}

export default Already_Exists;
