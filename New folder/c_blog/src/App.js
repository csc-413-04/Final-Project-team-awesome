
import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import logo from './logo.svg';
import HomePage from "./Component/signup/homepage";
import Success from "./Component/signup/success";
import Already_Exists from "./Component/signup/already_exists";
import Intro from "./Component/intro";
import LoginForm from './Component/login/loginform';
import SuccessLog from './Component/login/success_log';
import AlreadyUser from './Component/login/already_user';
import NavBar from './Component/navbar';
import CreatePost from './Component/post/create_post';
import MyPost from './Component/post/my_post';
import Post from './Component/post/post';
import SearchPost from './Component/post/search_post';
import './App.css';
import "font-awesome/css/font-awesome.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

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
        <Route exact path="/login/alreadyexists" component={AlreadyUser} />
        <Route exact path="/createpost" component={CreatePost} />
        <Route exact path="/mypost" component={MyPost} />
        <Route exact path="/post" component={Post} />
        <Route exact path="/result" component={SearchPost} />
      </div>
      </BrowserRouter>
      
    );
  }
}

export default App;