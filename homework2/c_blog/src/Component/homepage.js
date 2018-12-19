import React, { Component } from "react";
import NavBar from './navbar'
class HomePage extends Component {
    render () {
        return (
            <div>
                <NavBar/>
                <h1 >Sign Up</h1>
                    <br/>
                    <br/>
                    <form action="http://localhost:4321/newuser?" method="GET">
                        
                        Username:<br/>
                        <input type="text" name="username" />
                        <br/>
                        Password:<br/>
                        <input type="text" name="password"/>
                        <br/>
                        Email:
                        <br/>
                        <input type="text" name="email" />
                        <br/><br/>
                        <input type="submit"  value="Submit" />
                    </form> 

            </div>
        );
    }
}

export default HomePage;