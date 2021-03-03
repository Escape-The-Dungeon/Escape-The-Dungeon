import React from "react";
// import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    // <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div id="title">
        <b>Escape The Dungeon</b>
     
      </div>
        /* <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                
                  : "nav-link"
              }
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          
          
         
        </ul>
      </div> */
   
  );
}

export default Navbar;
