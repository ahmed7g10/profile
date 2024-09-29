import React from 'react'
import "./experience.css"
import Card from '../Card'
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience' >
      <h5>The skills I have</h5>
    <h2>My Experience</h2>
    <div className="container experience__container">
      <Card classn={"experience__card"} 
      content={(
        <>
        <h3>Frontend Devlopment</h3>
        <div className="skills">
          <div className="skill">
            <BsPatchCheckFill className='skill__icon'/>
            <div className="skill__info">
            <h4>HTML</h4>
            <small className='text-light'>Good</small>
            </div>
          </div>

          <div className="skill">
            <BsPatchCheckFill className='skill__icon'/>
            <div className="skill__info">
            <h4>Css</h4>
            <small className='text-light'>Good</small>
            </div>
          </div>

          <div className="skill">
            <BsPatchCheckFill className='skill__icon'/>
            <div className="skill__info">
            <h4>React</h4>
            <small className='text-light'>Verey Good</small>
            </div>
          </div>

          <div className="skill">
            <BsPatchCheckFill className='skill__icon'/>
            <div className="skill__info">
            <h4>Java Script</h4>
            <small className='text-light'>Good</small>
            </div>
          </div>

          <div className="skill">
            <BsPatchCheckFill className='skill__icon'/>
            <div className="skill__info">
            <h4>Bootstrap</h4>
            <small className='text-light'>bigginer</small>
            </div>
          </div>

          
         
        </div>
        </>
      )}
      
      />
      <Card classn={"experience__card"}
       content={(
        <>
        <h3>Backend Devlopment</h3>
        <div className="skills">
          <div className="skill">
            <BsPatchCheckFill className='skill__icon'/>
            <div className="skill__info">
            <h4>MY SQL</h4>
            <small className='text-light'>Good</small>
            </div>
          </div>

          <div className="skill">
            <BsPatchCheckFill className='skill__icon'/>
            <div className="skill__info">
            <h4>PHP</h4>
            <small className='text-light'>good</small>
            </div>
          </div>

          <div className="skill">
            <BsPatchCheckFill className='skill__icon'/>
            <div className="skill__info">
            <h4>NODE JS</h4>
            <small className='text-light'>good</small>
            </div>
          </div>

          <div className="skill">
            <BsPatchCheckFill className='skill__icon'/>
            <div className="skill__info">
            <h4>MONGO</h4>
            <small className='text-light'>good</small>
            </div>
          </div>
         
        </div>
        </>
      )}
      />
    </div>
  </section>
  )
}

export default Experience
