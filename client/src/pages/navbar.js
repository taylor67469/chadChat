import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
      <>
      <br/>
    <nav className="navbar navbar-light navstyle p-0 m-0 d-flex w-100%">
    {/* <div className="container p-0 m-0"> */}
      <Link className="nav-link navtext" to="/">ChadChat</Link>
        <ul className="navbar-nav flex-row">
          <li className="nav-item">
            <Link className="nav-link navtext pr-2" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navtext pr-2" to="/room">Chat Room</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navtext pr-2" to="/forumpost">Forum</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navtext pr-2" to="/login" tabindex="-1" aria-disabled="true">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navtext pr-2"to="/signup" tabindex="-1" aria-disabled="true">Signup</Link>
          </li>
        </ul>
    {/* </div> */}
  </nav>
  <br></br>
  </>
  );
}

export default Navbar;