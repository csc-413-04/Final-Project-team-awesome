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
                  
            </div>
        );
    }
}