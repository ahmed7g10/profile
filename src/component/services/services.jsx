import React from 'react'
import "./services.css"
import Card from '../Card'
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
<section id='services'>
    <h5>What I Offer</h5>
    <h2>services</h2>
    <div className='container services__container'>
      <Card classn={"service_card"}
        content={(
          <>
          <h3>UI /UX</h3>
         <div className="service_card_paragraphs">
          <div className="service_card_p">
            <GiCheckMark className='service_card_icon'/>
            <p>
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit.
               Minus, alias.
            </p>
          </div>
          <div className="service_card_p">
            <GiCheckMark className='service_card_icon'/>
            <p>
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit.
               Minus, alias.
            </p>
          </div>
          <div className="service_card_p">
            <GiCheckMark className='service_card_icon'/>
            <p>
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit.
               Minus, alias.
            </p>
          </div>
         </div>
          </>
        )}
       />

      <Card classn={"service_card"}
         content={(
          <>
          <h3>Frontend Web Development</h3>
         <div className="service_card_paragraphs">
          <div className="service_card_p">
            <GiCheckMark className='service_card_icon'/>
            <p>
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit.
               Minus, alias.
            </p>
          </div>
          <div className="service_card_p">
            <GiCheckMark className='service_card_icon'/>
            <p>
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit.
               Minus, alias.
            </p>
          </div>
          <div className="service_card_p">
            <GiCheckMark className='service_card_icon'/>
            <p>
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit.
               Minus, alias.
            </p>
          </div>
          <div className="service_card_p">
            <GiCheckMark className='service_card_icon'/>
            <p>
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit.
               Minus, alias.
            </p>
          </div>
          <div className="service_card_p">
            <GiCheckMark className='service_card_icon'/>
            <p>
              Lorem ipsum dolor sit, 
              amet consectetur adipisicing elit.
               Minus, alias.
            </p>
          </div>
         </div>
          </>
        )}

       />

      <Card classn={"service_card"}
       content={(
        <>
        <h3>Backend Web Development</h3>
       <div className="service_card_paragraphs">
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>
            Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit.
             Minus, alias.
          </p>
        </div>
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>
            Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit.
             Minus, alias.
          </p>
        </div>
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>
            Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit.
             Minus, alias.
          </p>
        </div>
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>
            Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit.
             Minus, alias.
          </p>
        </div>
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>
            Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit.
             Minus, alias.
          </p>
        </div>
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>
            Lorem ipsum dolor sit, 
            amet consectetur adipisicing elit.
             Minus, alias.
          </p>
        </div>
       </div>
        </>
      )}

       />

    </div>
  </section>
  )
}

export default Services
