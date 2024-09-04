import React from 'react'
import "./App.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
function Footer() {
  return (
    <>
    <footer className="footer">
  <div className="footer-content">
    <div className="footer-section about">
      <h1 className="footer-logo">YourLogo</h1>
      <p>Short description about your company or website. This can be a few sentences long, giving a quick overview of what you do.</p>
    </div>
    <div className="footer-section links">
      <h2>Quick Links</h2>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>
    <div className="footer-section contact">
      <h2>Contact Us</h2>
      <p>Email: info@yourwebsite.com</p>
      <p>Phone: +123 456 7890</p>
      <p><FaFacebook size={30}/> <FaInstagram  size={30}/><FaTwitterSquare size={30}/></p>

    </div>
  </div>
  <div className="footer-bottom">
    <p>&copy;  2024-COPYRIGHT| Designed by NIKHIL</p>
  </div>
</footer>

    </>
  )
}

export default Footer