import React from "react";
import LoginSheet from "../component/log.js";

function LoginPage(props) {
  return <LoginSheet userLoggedIn={props.userLoggedIn}/>;
}

export default LoginPage;