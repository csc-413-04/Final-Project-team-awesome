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
  
    handleSubmit(event) {
      
      if(this.state.username === null ||  this.state.username.length <1) {
          alert("Please enter your username");
          event.returnValue = false;
          event.preventDefault();
      }
       
      if(this.state.password === null ||  this.state.password.length <1) {
          alert("Please enter your password");
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
            <div>
                        <NavBar />
                        <h1>Log-in</h1>
                        <br />
                        <br />
                        <form action="http://localhost:4321/login?" method="GET" onSubmit={this.handleSubmit}>
                        Username:<br/>
                        <input type="text" name="username" value={this.state.username} onChange={this.handleUserChange} />
                        <br/>
                        Password:<br/>
                        <input type="text" name="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                        <br/><br/>
                        <input type="submit"  value="Submit" />
                    </form> 
            </div>
        );
    }
}
export default LoginForm;