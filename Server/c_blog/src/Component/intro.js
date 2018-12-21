import React, { Component } from "react";
import NavBar from './navbar';
import FooterReact from './footer';
import cooking_blog from '../picture/cooking.jpg';
import sell_out from '../picture/sell_out.jpg';
import Popup from "reactjs-popup";
import PostData from '../post.json';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBListGroup, MDBListGroupItem, Col, Container, Row } from 'mdbreact';


class Intro extends Component {
    constructor(props) {
        super();
        this.state = {
          link: "http://localhost:4321/create_post",
          posts: PostData.posts,
          trueorfalse: true,
          counter: 0
        }

      }
    render() {
        return (
            <MDBContainer fluid style={{fontSize: 12}}>
                <div>
                    <NavBar/>
                    <body>
                        <div style={{background:'bisque', position: 'relative', bottom:20, height:200,}}>  
                            <br/><br/><br/>
                            <h1 class="text-center" id="head" style={{fontSize: 60}}>Cooking Blog</h1>
                        </div>
                        
                        <div style={{padding: 0, margin: 0}}>
                            <img className="rounded mx-auto d-block" id="cooking" src={cooking_blog} style={{width: "100%", padding: 0, margin: 0}}/>
                        </div>
                        <br/>
                        
                        <div class="col-lg-3" style={{margin: 0, padding:0}}>
                            <img src={sell_out}/>
                        </div>


                        
                        <div class="col-lg-6" style={{margin: 0, padding:0}}>
                        <MDBListGroup fluid style={{fontSize: 15}}>
                            <h1 id="head" style={{align:'center'}}>
                                Popular Posts
                            </h1>
                            <br/>
                            {this.state.posts.map((keys)=>{
                               this.state.counter = this.state.counter + 1;
                                if (this.state.counter >= 6) {
                                    this.state.trueorfalse = false;
                                }
                    return <MDBListGroupItem style={{display: this.state.trueorfalse ? 'block' : 'none' }}>
                           
                         <a href="/">{keys.title}</a>
                     
                                  
                    </MDBListGroupItem>
                    
                 })}
                        </MDBListGroup>
                        </div>
                        <div class="col-lg-3" style={{ margin: 0, padding:0}}>
                            
                            <img src={sell_out} style={{float: 'right' }}/>
                                
                        </div>
                    </body>

                    
                    <br/>
                    <br/>

                    <FooterReact/>
                </div>    
            </MDBContainer>
        );
    }
}

export default Intro;