import React from "react";
import "./App.css";
import apple from '/apple.png'
import { Link } from "react-router-dom";
function Navbar() {
  
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <a href="#">{apple}</a>
        </div>
        <ul className="navbar-links">
          <li>
            <Link to={'/'}>Home</Link>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <Link to={'/add-to-cart'}>Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
