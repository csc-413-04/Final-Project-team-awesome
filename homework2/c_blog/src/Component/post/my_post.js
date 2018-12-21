import React, {Component} from 'react';
import NavBar from '../navbar';
import TextData from '../../dataText.json';
import PostData from '../../post.json';
import Popup from "reactjs-popup";
import SweetAlert from "react-bootstrap-sweetalert";
import { check } from '../navbar_action/checkUser';
import ReactDOM from 'react-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';

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
render() {        
        return(          
           
            <div>
                <NavBar />
                
                <div class="container">
                <table class="table">
                <thead>
                    <tr>
                        <th>{this.state.username}'s posts</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.posts.map((keys)=>{
                    if (keys.username===this.state.username) {
                        this.state.trueorfalse = true;
                    }
                    else {
                        this.state.trueorfalse = false;
                    }
                    
                   return <tr>
                       <td style={{display: this.state.trueorfalse ? 'block' : 'none' }}>
                        <Popup style={{}} trigger={<a href="#">{keys.title}</a>}>
                        {keys.body}
                        </Popup>
                       </td>           
                   </tr>
                   
                })}
                </tbody>
              
                </table>
                </div>

            
            </div>
        );
    }
}

export default Post;
