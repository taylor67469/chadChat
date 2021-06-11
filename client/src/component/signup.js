import React, {useEffect,useState } from "react";
import axios from "axios";
import api from "../utils/API"
import { Link } from "react-router-dom";
const Signup =()=>{
  // Setting the component's initial state

  const [register,setRegister]=useState({
    username:"",
    email:"",
    password:""
  })
  // state = {
  //   username:"",
  //   email:"",
  //   password:"",
  // };

  const HandleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    // Updating the input's state
      const { name, value } = event.target;
      setRegister({...register, [name]:value})
      
    
  };

  const HandleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    api.getsignup(register);
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${register.username}`);
    setRegister({
      username:""
    });
  };

  // const render=() =>{
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
        <>  

<div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-7 login-form-1" style={{textAlign: "center"}}>
                    <h3>SignUp to ChadChat</h3>
                    <form>
                        <div className="form-group">
                            <input className="form-control" 
                                value={register.username}
                                name="username"
                                onChange={HandleInputChange}
                                type="text"
                                placeholder="Username *"
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control" 
                                value={register.email}
                                name="email"
                                onChange={HandleInputChange}
                                type="text"
                                placeholder="Email *"
                            />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                                value={register.password}
                                name="password"
                                onChange={HandleInputChange}
                                type="password"
                                placeholder="Type secure password *"
                            />
                        </div>
                        <div className="form-group">
                            <button className="btnSubmit" 
                            onClick={HandleFormSubmit}>SignUp</button>
                        </div>
                        <div className="form-group">
                            <Link to="/login" className="orSign" value="Login">Or Login Here</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </>
        
    );
  }

export default Signup;
