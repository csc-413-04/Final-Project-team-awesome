import React, {Component} from 'react';
import NavBar from '../navbar';
import Success from '../success';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';

class SuccessLog extends Component {
    render() {
        return (
            <div>
                <Success />
            </div>
        );
    }
}

export default SuccessLog;
