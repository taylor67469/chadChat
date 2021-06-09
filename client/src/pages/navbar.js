import React from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import "./navbar.css";

function Navbar() {
  return (
      <>
      <br/>
    <nav className="navbar navbar-expand-lg navbar-light navstyle">
    <div className="container-fluid">
      <Link className="nav-link active navtext" to="/">ChadChat</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link navtext" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navtext" to="/room">Chat Room</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navtext" to="/forumpost">Forum</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navtext" to="/login" tabindex="-1" aria-disabled="true">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link navtext" to="/signup" tabindex="-1" aria-disabled="true">Signup</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <br></br>
  </>
  );
}

export default Navbar;