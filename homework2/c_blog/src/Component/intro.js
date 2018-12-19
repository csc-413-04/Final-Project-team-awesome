import React, { Component } from "react";
import NavBar from './navbar';
import cooking_blog from '../picture/cooking.jpg';
import sell_out from '../picture/sell_out.jpg';
class Intro extends Component {



    render() {
        return (
            <div>
                <NavBar/>
                <body>
                <div style={{background:'bisque', position: 'relative', bottom:20, height:200,}}>        
            <h1 id="head" style={{align:'center', fontSize: 60, position:'relative', top:30, left: 550}}>Cooking Blog</h1>
            <br/><br/><br/>
        </div>
        <div style ={{maxHeight: 2000, maxWidth: 2000, position: 'relative', left:200}}>
            <img style ={{maxWidth:2000, maxHeight:2000, height:'auto'}} id="cooking" src={cooking_blog} />
        </div>
        <br/>
        <div class="col-md-3">
            <img src={sell_out}/>
        </div>
        <div class="col-md-6">
            <h1 id="head" style={{align:'center'}}>
                Popular Posts
            </h1>
            <br/>
            <div class="form-control" id="pop_post">
                <p id="head">How to Make Delicious Carbonara</p>
            </div>
            <div class="form-control" id="pop_post">
                <p id="head">how to make Pasta</p>
            </div>
            <div class="form-control" id="pop_post">
                <p id="head">how to make Pasta</p>
            </div>
            <div class="form-control" id="pop_post">
                    <p id="head">how to make Pasta</p>
            </div>
            <div class="form-control" id="pop_post">
                    <p id="head">how to make Pasta</p>
            </div>
            <br/><br/>
            <br/><br/>
        </div>
        <div class="col-md-3" style={{align:'right'}}>
            
            <img src={sell_out} />
        
        </div>
                </body>
                <br/>
                <br/>
            </div>
        );
    }
}

export default Intro;