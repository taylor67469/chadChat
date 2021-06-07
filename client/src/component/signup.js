import React, {useEffect,useState } from "react";
import axios from "axios";

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
    // useEffect((event)=>{
      //let loginCred = {}
      const { name, value } = event.target;
      // console.log(name);
      // console.log(value);
      setRegister({...register, [name]:value})
      // setRegister({
      //   [name]: value
      // });
    // },[])
    
  };

  const HandleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${register.username}`);
    setRegister({
      username:""
    });
  };

  // const render=() =>{
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {register.username}
        </p>
        <form className="form">
          <input
            value={register.username}
            name="username"
            onChange={HandleInputChange}
            type="text"
            placeholder="Username"
          />
          {/* <input
            value={this.state.lastName}
            name="lastName"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Last Name"
          /> */}
          <input
            value={register.email}
            name="email"
            onChange={HandleInputChange}
            type="text"
            placeholder="Email"
          />
          <input
            value={register.password}
            name="password"
            onChange={HandleInputChange}
            type="password"
            placeholder="Password"
          />
          {/* <input
            value={this.state.city}
            name="city"
            onChange={this.handleInputChange}
            type="text"
            placeholder="city"
          /> */}
          
          
          <button onClick={HandleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
// }

export default Signup;
