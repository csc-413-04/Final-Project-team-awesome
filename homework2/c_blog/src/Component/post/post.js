import React, {Component} from 'react';
import PostData from '../../post.json';
import TextData from '../../dataText.json';
import NavBar from '../../Component/navbar';

class Post extends Component {
	
	 constructor(props) {
        super();
        this.state = {
          username: TextData.username,
          link: "http://localhost:4321/create_post",
          posts: PostData.posts,
          trueorfalse: true
        }
	
	
}

   render(){

        return(
            <div>
            <NavBar />
            

            <div class="container">
            <table class="table">
            <thead>