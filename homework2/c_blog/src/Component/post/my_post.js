import React, {Component} from 'react';
import NavBar from '../navbar';
import TextData from '../../dataText.json';
import PostData from '../../post.json';
import Popup from "reactjs-popup";
import SweetAlert from "react-bootstrap-sweetalert";
import { check } from '../navbar_action/checkUser';
import ReactDOM from 'react-dom'

var values;

class Post extends Component {
  constructor(props) {
        super();
        this.state = {
          username: TextData.username,
          link: "http://localhost:4321/create_post",
          posts: PostData.posts,
          trueorfalse: true,
          
        }

      }
}
