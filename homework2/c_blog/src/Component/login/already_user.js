import React, {Component} from 'react';
import NavBar from '../navbar';
import Already_Exists from '../already_exists';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';

class AlreadyUser extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>Failed to Sign-in!</h1> 
            </div>
        );
    }
}

export default AlreadyUser;
