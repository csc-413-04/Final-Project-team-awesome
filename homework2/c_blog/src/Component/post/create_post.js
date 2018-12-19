import React, {Component} from 'react';
import NavBar from '../navbar';
import TextData from '../../dataText.json';

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
                    </form> 
            </div>
        );
    }
}