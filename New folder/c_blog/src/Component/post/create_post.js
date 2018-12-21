import React, {Component} from 'react';
import NavBar from '../navbar';
import TextData from '../../dataText.json';
import ReactDOM from 'react-dom';
import { relative } from 'path';
import { MDBContainer, MDBRow, MDBCol} from 'mdbreact';
import FooterReact from '../footer'
class CreatePost extends Component {
    constructor(props) {
        super();
        this.state = {
          username: TextData.username,
          title: '',
          body: '',
          link: "http://localhost:4321/create_post" 
        }
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleBodyChange = this.handleBodyChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      handleTitleChange(event) {
        this.setState({title: event.target.value});
    }
  
    handleBodyChange(event) {
        this.setState({body: event.target.value});
    }
  
    handleSubmit(event) {
      
      if(this.state.title === null ||  this.state.title.length <1) {
          alert("Please enter your title");
          event.returnValue = false;
          event.preventDefault();
      }
       
      if(this.state.body === null ||  this.state.body.length <1) {
          alert("Please enter your body");
          event.returnValue = false;
          event.preventDefault();
      }
  
  
      else {
          alert("Success");
          event.returnValue = true;
      }
    }
   

    render() {
        return (
           
                <MDBContainer>
                <NavBar />
                <h1 >Create Post</h1>
                    <br/>
                    <br/>
                    <MDBRow>
                        <MDBCol md="6">
                            <form action={this.state.link} method="GET" onSubmit={this.handleSubmit}>
                            <input style={{width:1, height: 1, position:'relative', bottom: 500}} name="username" value= {TextData.username}/> <br/>
                                Title:<br/>
                                <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange}/>
                                <br/>
                                Body:<br/>
                                <textarea name="body" value={this.state.body} onChange={this.handleBodyChange}>
                                
                                </textarea>
                        
        
                                <br/><br/>
                                <input type="submit"  value="Submit" />
                            </form>
                        </MDBCol>
                    </MDBRow>
                    <FooterReact/>         
            </MDBContainer>
           
        );
    }
}

export default CreatePost;