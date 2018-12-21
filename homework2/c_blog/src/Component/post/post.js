import React, {Component} from 'react';
import PostData from '../../post.json';
import TextData from '../../dataText.json';
import NavBar from '../../Component/navbar';
import FooterReact from '../../Component/footer';

import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';

class Post extends Component {
	
	 constructor(props) {
        super();
        this.state = {
          username: TextData.username,
          link: "http://localhost:4321/create_post",
          posts: PostData.posts,
          trueorfalse: true
        }
	
	
}

   render(){

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
                if (keys.username===this.state.username) {
                    this.state.trueorfalse = true;
                }
                else {
                    this.state.trueorfalse = false;
                }
                
               return <tr>
               <td>{keys.title}</td>
               </tr>
               
            })}
            
               </tbody>
          
            </table>

            </div>
		<FooterReact/>
            </div>
        );
    }
}

export default Post;
