import React from "react";
import LoginSheet from "../component/log.js";

function LoginPage(props) {
  return <LoginSheet userLoggedIn={props.userLoggedIn} useForumUser={props.useForumUser}/>;
}

export default LoginPage;