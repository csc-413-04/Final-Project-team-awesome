import React, {Component} from 'react';
import NavBar from '../navbar';
import FooterReact from '../../Component/footer';
import TextData from '../../dataText.json';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';

class CreatePost extends Component {
    constructor(props) {
        super();
        this.state = {
          username: TextData.username,
          link: "http://localhost:4321/create_post" 
        }
      }
      render() {

        return(
            
            <div>
                <NavBar />
                <h1 >Create Post</h1>
                <br/>
                    <br/>
                    <form action={this.state.link} method="GET">
                    <input style={{width:1, height: 1, position:'relative', bottom: 500}} name="username" value= {TextData.username}/> <br/>
                    Title:<br/>
                        <input type="text" name="title" />
                        <br/>
                        Body:<br/>
                        <input type="textarea" class="form-control lg" style={{height: 300, width: 600}} name="body"/>
                        
                        <br/><br/>
                        <input type="submit"  value="Submit" />
                    </form>
                <FooterReact/>
            </div>
        );
    }
}
export default CreatePost;
