import React from 'react'
import "./about.css"
import img from "../../assets/Clipped_image_20240602_224206.png"
import Card from '../Card'
import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { AiFillFolderOpen } from "react-icons/ai";

const About = () => {
  return (
    <section id='about' >
    <h5>Get To know</h5>
    <h2>About Me</h2>
    <div className="container about__container">
      <div className="about__left">
        <div className="about__img">
        <img src={img} alt="profile" />
        </div>
      </div>
      <div className="about__right">
        <div className="about__cards">
          <Card classn={"about__card"} content={
            (
              <>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>6+ Months</small>
              </>
            )
          }/>
          <Card classn={"about__card"} content={
            (
              <>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Soon</small>
              </>
            )
          }/>
          <Card classn={"about__card"} content={
            (
              <>
              <AiFillFolderOpen className='about__icon'/>
              <h5>Projects</h5>
              <small>25+ projects</small>
              </>
            )
          }/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Vero praesentium laborum,
           quidem ab quibusdam alias aspernatur perferendis porro rem harum!
           Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Vero praesentium laborum,
           quidem ab quibusdam alias aspernatur perferendis porro rem harum!
        </p>
        <a className='btn primary' href="#contact">
          Let,s Talk
        </a>
      </div>
    </div>
  </section>
  )
}

export default About
