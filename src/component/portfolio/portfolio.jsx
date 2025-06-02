import React from 'react'
import "./portfolio.css"
import Card from '../Card'

import pro1 from "../../assets/Screenshot 2024-05-08 180014.png"
import pro2 from "../../assets/image1.png"
import pro3 from "../../assets/image.png"

const Portfolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      <Card classn={"portfolio__card"} 
      content={(<>
      <div className="portfolio_img">
          <img src={pro1} alt="Project image" />
      </div>
      <h3>Profile Website.</h3>
        <div className="profile__btn">
          <a className='btn' href="#">Github</a>
          <a className='btn primary' href="#">Live Demo</a>
        </div>
      </>)}
      />
       <Card classn={"portfolio__card"} 
      content={(<>
      <div className="portfolio_img">
          <img src={pro2} alt="" />
      </div>
      <h3>Order Food <br></br>App Online</h3>
        <div className="profile__btn">
          <a className='btn' href="#">Github</a>
          <a className='btn primary' href="#">Live Demo</a>
        </div>
      </>)}
      />
       <Card classn={"portfolio__card"} 
      content={(<>
      <div className="portfolio_img">
          <img src={pro3} alt="Project image" />
      </div>
      <h3>Authentaction App With Verfication Code</h3>
        <div className="profile__btn">
          <a className='btn' href="#">Github</a>
          <a className='btn primary' href="#">Live Demo</a>
        </div>
      </>)}
      />
     
    </div>

  </section>
  )
}

export default Portfolio
