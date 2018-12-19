import React, {Component} from 'react';
import NavBar from '../navbar';
import Already_Exists from '../already_exists';
class AlreadyUser extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>Failed to Sign-in!</h1> 
            </div>
        );
    }
}

export default AlreadyUser;