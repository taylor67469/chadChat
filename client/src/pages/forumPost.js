import React, {useEffect,useState } from "react";
import axios from "axios";
import api from "../utils/API"
import { Link } from "react-router-dom";

function ForumPost(props) {
    const [forumposted,setForumPost]=useState({
        title:"",
        description:""
    });
    const handleInputChange = (event) => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;
    
        // Updating the input's state\
        setForumPost({...forumposted, [name]:value})
        // this.setState({
        //   [name]: value
        // });
      };
      const handleFormSubmit = (event) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();
        api.getForumPost(forumposted)
        .then(res=>{
            console.log(res);
        })
        // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
        alert(`Thank you ${props.forumUser}, for your post of ${forumposted.title}.`);
        setForumPost({
            title:"",
            description:""
        });
      };
    return (
        <div>

            <div className="card">
                <div className="card-header">
                    <h1>Forum Title</h1>
                    <input 
                    type="text" 
                    name="title" 
                    placeholder="Forum Title" 
                    id="fTitle"
                    onChange={handleInputChange}
                    ></input>
                </div>
                <div className="card-body">
                    <h1>Forum Post</h1>
                    <input type="text" 
                    name="description" 
                    placeholder="Forum Post" 
                    id="fPost"
                    onChange={handleInputChange}
                    ></input>
                    
                </div>
                <button type="submit" 
                name="submit"
                onClick={handleFormSubmit}
                >Post</button>
            </div>
        </div>
    )
}
export default ForumPost;