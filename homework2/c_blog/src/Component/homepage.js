import React, { Component } from "react";
import NavBar from './navbar';
import FooterReact from './footer';

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';
class HomePage extends Component {
    render () {
        return (
            <div>
                <NavBar/>
                <h1 >Sign Up</h1>
                    <br/>
                    <br/>
                    <form action="http://localhost:4321/newuser?" method="GET">
                        
                        Username:<br/>
                        <input type="text" name="username" />
                        <br/>
                        Password:<br/>
                        <input type="text" name="password"/>
                        <br/>
                        Email:
                        <br/>
                        <input type="text" name="email" />
                        <br/><br/>
                        <input type="submit"  value="Submit" />
                    </form> 
                <FooterReact/>
            </div>
        );
    }
}

export default HomePage;
