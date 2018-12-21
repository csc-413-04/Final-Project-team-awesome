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
     
     handleUserChange(event) {
        this.setState({username: event.target.value});
    }
  
    handlePasswordChange(event) {
        this.setState({password: event.target.value});
    }

}
export default LoginForm;