import React from 'react'
import "./contact.css"
import Card from './../Card';
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id='contact' >
    <h5>Get In Touch</h5>
    <h2>Contact</h2>
    <div className="container contact__container">
      <div className="contact__left">
          <Card classn={"contact__card"}
          content={(<>
            <MdOutlineMail  className='contact__icon'/>
            <h4>Email</h4>
            <small className="text-light">alinshwan33@gmail.com</small>
            <a href="mailto:alinshwan33@gmail.com">Send a message</a>
          </>)}
          />

<Card classn={"contact__card"}
          content={(<>
            <FaFacebookMessenger className='contact__icon'/>
            <h4>Messenger</h4>
            <small className="text-light">alinshwan33@gmail.com</small>
            <a href="">Send a message</a>
          </>)}
          />

<Card classn={"contact__card"}
          content={(<>
            <FaWhatsapp className='contact__icon'/>
            <h4>WhatsApp</h4>
            <small className="text-light">
              +967 775061281
            </small>
            <a href="">Send a message</a>
          </>)}
          />
      </div>
      
            <form action="">
              <input type="text" name='name' placeholder="Your Full Name" />
              <input type="email" name='email' placeholder="Email" />
              <textarea name="" id=""   rows="7" placeholder="Message"></textarea>
              <button className='btn primary'  type="submit">Send Message</button>
            </form>
      
    </div>
  </section>
  )
}

export default Contact
