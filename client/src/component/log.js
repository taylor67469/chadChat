import React, { useEffect,useState } from "react";
import api from "../utils/API"

const Login=()=>{
  // Setting the component's initial state
  // state = {
  //   username: "",
  //   password: ""
  // };
  const [login,setLogin]=useState({
    username:"",
    password:""
  })

  const handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state\
    setLogin({...login, [name]:value})
    // this.setState({
    //   [name]: value
    // });
  };

  const handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    api.getlogin(login)
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${login.username}`);
    setLogin({
      username: "",
    });
  };
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      // <div>
      //   <p>
      //     Hello {login.username}
      //   </p>
      //   <form className="form">
      //     <input
      //       value={login.username}
      //       name="firstName"
      //       onChange={handleInputChange}
      //       type="text"
      //       placeholder="Username"
      //     />
      //     <input
      //       value={login.password}
      //       name="password"
      //       onChange={handleInputChange}
      //       type="password"
      //       placeholder="password"
      //     />
      //     <button onClick={handleFormSubmit}>Submit</button>
      //   </form>
      // </div>

      <div className="container login-container">
            <div className="row justify-content-center">
                <div className="col-7 login-form-1" style={{textAlign: "center"}}>
                    <h3>Login to ChadChat</h3>
                    <form>
                        <div className="form-group">
                            <input className="form-control" 
                            value={login.username}
                            name="username"
                            onChange={handleInputChange}
                            type="text"
                            placeholder="Your Username *" />
                        </div>
                        <div className="form-group">
                            <input className="form-control"
                            value={login.password}
                            name="password"
                            onChange={handleInputChange}
                            type="password"
                            placeholder="Your Password *" 
                            />
                        </div>
                        <div className="form-group">
                            {/* <input type="submit" className="btnSubmit" value="Login" /> */}
                            <button className="btnSubmit" 
                            onClick={handleFormSubmit}>Login</button>
                        </div>
                        <div className="form-group">
                            <a href="/signup" className="orSign">or SignUp?</a>
                        </div>
                    </form>
                </div>
                </div>
            </div>
    );
  }

export default Login;