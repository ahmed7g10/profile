import React from 'react'
import "./header.css"
import { FaFacebookF } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import img from "../../assets/Clipped_image_20240602_224206.png";
const Header = () => {
  return (
  <header>
     <section className="container header__container">
      <h5>Hello I am </h5>
      <h2>Ahmed</h2>
      <h5 className='text-light'>Frontend Developer</h5>
      <div className="header_btns">
         <a   className="btn ">Download CV</a>
         <a href='#contact' className="btn primary">lets talk</a>
      </div>
      <div className="me">
        <img src={img} alt="" />
      </div>
      <ul className="header__socials">
        <a href='#'>  <FaGithub/></a>
        <a href='#'> <FaFacebookF/></a> 
        <a href='#'> <FaLinkedin/></a> 
      </ul>
       
         <a href='#contact' className='scroll__down'> Scroll Down</a>
      
   </section>
  </header>
  )
}

export default Header
