import React, {Component} from "react";
import TextData from '../dataText.json';
import {check} from "./navbar_action/checkUser";
import { DH_NOT_SUITABLE_GENERATOR } from "constants";
import Intro from './intro';
import { Navbar, NavbarBrand, NavbarNav, NavItem, Fa, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem } from "mdbreact";

class NavBar extends Component {
  constructor(props) {
    super();
    this.state = {
      username: TextData.username,
      display: true,
      search: '',
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSearchChange(event) {
    this.setState({search: event.target.value});
}

handleSubmit(event) {
  
  if(this.state.search === null ||  this.state.search.length <1) {
      alert("Please enter the query");
      event.returnValue = false;
      event.preventDefault();
  }
   


  else {
      event.returnValue = true;
  }
}

  render () {
        if (this.state.username === '') {
          this.state.display = true;
        }
        else {
          this.state.display = false;
        }
        return(
          
          <Navbar color="default-color" dark expand="md" style={{marginTop: "20px",fontSize:12}}>
          <NavbarBrand>
            <strong className="white-text" style={{fontSize:22}}>Cooking Blog</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={this.toggleCollapse}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/post">Post</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/createpost" style ={{ display: this.state.display ? 'none' : 'block'}}>Create Post</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
                        <form action="http://localhost:4321/result"id="search_bar" class="navbar-form navbar-left" onSubmit={this.handleSubmit}>
                          <div class="form-group">
                            <input type="text" class="form-control" placeholder="Search" name="search" value={this.state.search} onChange={this.handleSearchChange}/>
                          </div>
                          <button type="submit" class="btn btn-default">Submit</button>
                        </form>
                        <ul className="waves-effect waves-light">
                        <li id="user" style ={{ display: this.state.display ? 'none' : 'block'}} ><a href="/mypost">{this.state.username}</a></li>
                        <li id="user" style ={{ display: this.state.display ? 'none' : 'block'}} ><a href="http://localhost:4321/signout">Sign out</a></li>
                        <li id="nouser1"style ={{ display: this.state.display ? 'block' : 'none'}} ref="nouser"><a href="/login"><Fa icon="user" />Sign-in</a></li>
                          <li id="nouser2"style ={{ display: this.state.display ? 'block' : 'none'}}>
                            <a href="/signup" role="button" aria-haspopup="true" aria-expanded="false"><Fa icon="user-plus" />Sign Up</a>
                          </li>
                        </ul>
              </NavbarNav>
          </Collapse>
      </Navbar>
        
        );

    }
    
}

export default NavBar;