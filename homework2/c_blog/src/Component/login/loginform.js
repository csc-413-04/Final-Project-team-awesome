import React, {Component} from 'react';
import NavBar from '../navbar';
class LoginForm extends Component {

    constructor(props){
        super(props);
    
        this.state = {
            username: '',
            password: '',
            
        
        
        }
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
     }

}
export default LoginForm;