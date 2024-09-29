import React from 'react'
import "./portfolio.css"
import Card from '../Card'

import pro1 from "../../assets/Screenshot 2024-05-08 180014.png"
const Portfolio = () => {
  return (
    <section id='portfolio' >
      <h5>My Recent Work</h5>
    <h2>Portfolio</h2>
    <div className="container portfolio__container">
      <Card classn={"portfolio__card"} 
      content={(<>
      <div className="portfolio_img">
          <img src={pro1} alt="" />
      </div>
      <h3>Profile Website Lorem, ipsum.</h3>
        <div className="profile__btn">
          <a className='btn' href="#">Github</a>
          <a className='btn primary' href="#">Live Demo</a>
        </div>
      </>)}
      />
       <Card classn={"portfolio__card"} 
      content={(<>
      <div className="portfolio_img">
          <img src={pro1} alt="" />
      </div>
      <h3>Profile Website Lorem, ipsum.</h3>
        <div className="profile__btn">
          <a className='btn' href="#">Github</a>
          <a className='btn primary' href="#">Live Demo</a>
        </div>
      </>)}
      />
       <Card classn={"portfolio__card"} 
      content={(<>
      <div className="portfolio_img">
          <img src={pro1} alt="" />
      </div>
      <h3>Profile Website Lorem, ipsum.</h3>
        <div className="profile__btn">
          <a className='btn' href="#">Github</a>
          <a className='btn primary' href="#">Live Demo</a>
        </div>
      </>)}
      />
       <Card classn={"portfolio__card"} 
      content={(<>
      <div className="portfolio_img">
          <img src={pro1} alt="" />
      </div>
      <h3>Profile Website Lorem, ipsum.</h3>
        <div className="profile__btn">
          <a className='btn' href="#">Github</a>
          <a className='btn primary' href="#">Live Demo</a>
        </div>
      </>)}
      />
       <Card classn={"portfolio__card"} 
      content={(<>
      <div className="portfolio_img">
          <img src={pro1} alt="" />
      </div>
      <h3>Profile Website Lorem, ipsum.</h3>
        <div className="profile__btn">
          <a className='btn' href="#">Github</a>
          <a className='btn primary' href="#">Live Demo</a>
        </div>
      </>)}
      />
      
       <Card classn={"portfolio__card"} 
      content={(<>
      <div className="portfolio_img">
          <img src={pro1} alt="" />
      </div>
      <h3>Profile Website Lorem, ipsum.</h3>
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
