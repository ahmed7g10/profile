import React from 'react'
import "./services.css"
import Card from '../Card'
import { GiCheckMark } from "react-icons/gi";

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>

        {/* Web Development */}
        <Card classn={"service_card"}
          content={(
            <>
              <h3>Web Development</h3>
              <div className="service_card_paragraphs">
                <div className="service_card_p">
                  <GiCheckMark className='service_card_icon'/>
                  <p>Designing and developing responsive and user-friendly websites and applications.</p>
                </div>
                <div className="service_card_p">
                  <GiCheckMark className='service_card_icon'/>
                  <p>Creating efficient backend solutions to support scalable and secure web services.</p>
                </div>
                <div className="service_card_p">
                  <GiCheckMark className='service_card_icon'/>
                  <p>Implementing smooth user experiences with modern web technologies and best practices.</p>
                </div>
                <div className="service_card_p">
                  <GiCheckMark className='service_card_icon'/>
                  <p>Ensuring cross-platform compatibility and optimal performance for all users.</p>
                </div>
              </div>
            </>
          )}
        />

        {/* Penetration Testing */}
        <Card classn={"service_card"}
          content={(
            <>
              <h3>Penetration Testing</h3>
              <div className="service_card_paragraphs">
                <div className="service_card_p">
                  <GiCheckMark className='service_card_icon'/>
                  <p>Conducting comprehensive security assessments to identify potential vulnerabilities.</p>
                </div>
                <div className="service_card_p">
                  <GiCheckMark className='service_card_icon'/>
                  <p>Analyzing system weaknesses and providing actionable recommendations for improvement.</p>
                </div>
                <div className="service_card_p">
                  <GiCheckMark className='service_card_icon'/>
                  <p>Performing simulated attacks to evaluate and enhance organizational security posture.</p>
                </div>
                <div className="service_card_p">
                  <GiCheckMark className='service_card_icon'/>
                  <p>Helping teams to understand risks and strengthen their defenses against cyber threats.</p>
                </div>
              </div>
            </>
          )}
        />

        {/* SOC Analyst & Malware Analysis */}
        <Card classn={"service_card"}
  content={(
    <>
      <h3>SOC Analyst, Malware Analysis & Reverse Engineering</h3>
      <div className="service_card_paragraphs">
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>Monitoring and analyzing security events to detect and respond to threats effectively.</p>
        </div>
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>Investigating malicious activities and understanding attacker behaviors.</p>
        </div>
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>Performing deep malware analysis and reverse engineering to uncover hidden functionalities and threats.</p>
        </div>
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>Developing strategies to mitigate risks and improve overall cybersecurity resilience.</p>
        </div>
        <div className="service_card_p">
          <GiCheckMark className='service_card_icon'/>
          <p>Collaborating with teams to strengthen incident response and threat intelligence capabilities.</p>
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
