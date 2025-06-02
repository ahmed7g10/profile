import React from 'react'
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./footer.css"
const Footer = () => {
  return (
    <footer>
      <a href="#">AHMED</a>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="social">
      <a href='#'>  <FaGithub/></a>
        <a href='#'> <FaFacebookF/></a> 
        <a href='#'> <FaLinkedin/></a> 
      </div>
     <div className="footer__copy">
     <small>Copyright &copy; 2024</small>
     </div>

    </footer>
  )
}

export default Footer
