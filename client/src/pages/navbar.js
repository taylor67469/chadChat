import React from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

function Navbar() {
  return (
      <>
      <br/>
    <nav className="navbar navbar-expand-lg navbar-light navstyle">
    <div className="container-fluid">
      <a className="nav-link active navtext" href="/some/valid/uri">ChadChat</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link navtext" aria-current="page" href="/some/valid/uri">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navtext" href="/some/valid/uri">Features</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navtext" href="/some/valid/uri">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link navtext" href="/some/valid/uri" tabindex="-1" aria-disabled="true">Disabled</a>
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