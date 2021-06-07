import React from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

function Navbar() {
  return (
      <>
      <br/>
    <nav className="navbar navbar-expand-lg navbar-light navstyle">
    <div className="container-fluid">
      <a className="nav-link active navtext" href="/">ChadChat</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link navtext" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navtext" href="/some/valid/uri">Chat Room</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navtext" href="/some/valid/uri">Forum</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navtext" href="/login" tabindex="-1" aria-disabled="true">Login</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navtext" href="/signup" tabindex="-1" aria-disabled="true">Signup</a>
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