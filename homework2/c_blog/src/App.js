import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from "./Component/homepage";
import Success from "./Component/success";
import Already_Exists from "./Component/already_exists";
import Intro from "./Component/intro";
import LoginForm from './Component/login/loginform';
import SuccessLog from './Component/login/success_log';
import AlreadyUser from './Component/login/already_user';
import CreatePost from './Component/post/create_post';
import NavBar from './Component/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Route exact path="/" component={Intro}/>
        <Route exact path="/signup" component={HomePage}/>
        <Route exact path="/signup/success"  component={Success}/>
        <Route exact path="/signup/alreadyexists" component={Already_Exists} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/login/success" component={SuccessLog} />
        <Route exact path="/login/alreadyexists" component={AlreadyUser} />
      </div>

      </BrowserRouter>

    );
  }
}



export default App;
