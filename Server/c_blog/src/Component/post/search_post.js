import React, {Component} from 'react';
import NavBar from '../navbar';
import TextData from '../../dataText.json';
import PostData from '../../post.json';
import QueryData from '../../query.json';
import Popup from "reactjs-popup";
import SweetAlert from "react-bootstrap-sweetalert";
import { check } from '../navbar_action/checkUser';
import ReactDOM from 'react-dom'
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';

var values;

class SearchPost extends Component {
    constructor(props) {
        super();
        this.state = {
          username: TextData.username,
          link: "http://localhost:4321/create_post",
          posts: PostData.posts,
          trueorfalse: true,
          query: QueryData.result,
          counter: 0,
          
        }

      }
      

   
        // ...
 

    render() {
        return(
           
           
            <div>
                <NavBar />
                
                <div class="container">
                <table class="table">
                <thead>
                    <tr>
                        <th>Archive</th>
                    </tr>
                </thead>
                <tbody>
                {this.state.posts.map((keys)=>{
                    if (keys.title.includes(this.state.query)) {
                        this.state.trueorfalse = false;
                    }
                    else {
                        this.state.trueorfalse = true;
                    }
                    
                   return <MDBListGroupItem style={{ display: this.state.trueorfalse ? 'none' : 'block'}}>
                      
                      <Popup style={{}} trigger={<a href="#">{keys.title}</a>}>
                      
                      {close => (
                    <div>
    {keys.body}
    <a className="close" onClick={close}>
                    &times;
                </a>
 </div>
 )}

                      
                      </Popup>
                            
                   </MDBListGroupItem>
                   
                })}
                </tbody>
              
                </table>
                </div>

            
            </div>
        );
    }
}

export default SearchPost;
