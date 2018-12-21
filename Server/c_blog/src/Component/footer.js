import React, {Component} from "react";
import TextData from '../dataText.json';
import {check} from "./navbar_action/checkUser";
import { DH_NOT_SUITABLE_GENERATOR } from "constants";
import Intro from './intro';
import { Row, Col, Container, Fa, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Footer } from "mdbreact";

class FooterReact extends Component {
  constructor(props) {
    super();
    this.state = {
      username: TextData.username,
      display: true
    }
  }
 

  render () {
    return(
        <Footer color="default-color" className="page-footer font-medium pt-4 mt-4" style={{clear: 'both'}}>
    <Container className="text-left">
        <Row>
            <Col md="6">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Footer Content</h5>
                <p className="text mb-4 mt-3 mb-4 mt-3">Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                amet, consectetur adipisicing elit.</p>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="2">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="2">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </Col>
            <hr className="clearfix w-100 d-md-none" />
            <Col md="2">
                <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Links</h5>
                <ul className="list-unstyled">
                    <li><a href="#!">Link 1</a></li>
                    <li><a href="#!">Link 2</a></li>
                    <li><a href="#!">Link 3</a></li>
                    <li><a href="#!">Link 4</a></li>
                </ul>
            </Col>
        </Row>
    </Container>
    <hr />
    <div className="text-center py-3">
        <ul className="list-unstyled list-inline mb-0">
            <li className="list-inline-item">
                <h5 className="mb-1">Register for free</h5>
            </li>
            <li className="list-inline-item"><a href="/signup" className="btn btn-danger btn-rounded">Sign up!</a></li>
        </ul>
    </div>
    <hr />
    <div className="text-center">
        <ul className="list-unstyled list-inline">
            <li className="list-inline-item"><a className="btn-floating btn-lg btn-fb "><i className="fa fa-facebook"> </i></a></li>
            <li className="list-inline-item"><a className="btn-floating btn-lg btn-tw mx-1"><i className="fa fa-twitter"> </i></a></li>
            <li className="list-inline-item"><a className="btn-floating btn-lg btn-gplus mx-1"><i className="fa fa-google-plus"> </i></a></li>
            <li className="list-inline-item"><a className="btn-floating btn-lg btn-li mx-1"><i className="fa fa-linkedin"> </i></a></li>
            <li className="list-inline-item"><a className="btn-floating btn-lg btn-dribbble mx-1"><i className="fa fa-dribbble"> </i></a></li>
        </ul>
    </div>
    <div className="footer-copyright text-center">
        <Container fluid>
            &copy; {(new Date().getFullYear())} Copyright: <a href="/"> Team Awesome </a>
        </Container>
    </div>
</Footer>
    );
        
    }
    
}

export default FooterReact;