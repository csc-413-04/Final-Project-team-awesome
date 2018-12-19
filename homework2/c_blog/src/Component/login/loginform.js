import React, {Component} from 'react';
import NavBar from '../navbar';
class LoginForm extends Component {
    render() {
        return (
            <div>
                        <NavBar />
                        <h1>Log-in</h1>
                        <br />
                        <br />
                        <form action="http://localhost:4321/login?" method="GET">
                        Username:<br/>
                        <input type="text" name="username" />
                        <br/>
                        Password:<br/>
                        <input type="text" name="password"/>
                        <br/><br/>
                        <input type="submit"  value="Submit" />
                    </form> 
            </div>
        );
    }
}

export default LoginForm;