import React from 'react';
import "./experience.css";
import Card from '../Card';
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id='experience'>
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        
        {/* Web Development */}
        <Card classn={"experience__card"} 
          content={(
            <>
              <h3>Web Development (MERN Stack)</h3>
              <div className="skills">
                {[
                  { name: "HTML", level: "Very Good" },
                  { name: "CSS", level: "Very Good" },
                  { name: "JavaScript", level: "Very Good" },
                  { name: "React.js", level: "Excellent" },
                  { name: "Tailwind CSS", level: "Very Good" },
                  { name: "Redux", level: "Good" },
                  { name: "Vite", level: "Good" },
                  { name: "Node.js", level: "Very Good" },
                  { name: "Express.js", level: "Very Good" },
                  { name: "MongoDB", level: "Very Good" },
                  { name: "RESTful APIs", level: "Excellent" },
                  { name: "Socket.io", level: "Good" },
                  { name: "JWT / Cookies Auth", level: "Very Good" },
                  { name: "Render & GitHub Pages", level: "Good" },
                ].map(skill => (
                  <div className="skill" key={skill.name}>
                    <BsPatchCheckFill className='skill__icon' />
                    <div className="skill__info">
                      <h4>{skill.name}</h4>
                      <small className='text-light'>{skill.level}</small>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        />

        {/* Penetration Testing */}
        <Card classn={"experience__card"} 
          content={(
            <>
              <h3>Penetration Testing</h3>
              <div className="skills">
                {[
                  { name: "Bug Hunting (XSS, CSRF, etc.)", level: "Intermediate" },
                  { name: "OWASP Top 10", level: "Good Knowledge" },
                  { name: "Manual Testing", level: "Practical" },
                  { name: "Burp Suite", level: "Intermediate" },
                  { name: "Recon & Payload Crafting", level: "Intermediate" },
                  { name: "Malware Development", level: "Intermediate" },

                ].map(skill => (
                  <div className="skill" key={skill.name}>
                    <BsPatchCheckFill className='skill__icon' />
                    <div className="skill__info">
                      <h4>{skill.name}</h4>
                      <small className='text-light'>{skill.level}</small>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        />

        {/* SOC Analyst / Malware Analysis */}
        <Card classn={"experience__card"} 
          content={(
            <>
              <h3>SOC Analyst & Malware Analysis</h3>
              <div className="skills">
                {[
                  { name: "Malware Analysis (Windows/Linux)", level: "Intermediate" },
                  { name: "Static & Dynamic Analysis", level: "Good" },
                  { name: "Reverse Engineering (x64/C/Assembly)", level: "Learning" },
                  { name: "Buffer Overflow / ROP", level: "Practicing" },
                  { name: "Splunk SIEM Queries", level: "Good" },
                  { name: "MITRE ATT&CK Mapping", level: "Good" },
                  { name: "YARA Rule Creation", level: "Good" },
                                 ].map(skill => (
                  <div className="skill" key={skill.name}>
                    <BsPatchCheckFill className='skill__icon' />
                    <div className="skill__info">
                      <h4>{skill.name}</h4>
                      <small className='text-light'>{skill.level}</small>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        />

      </div>
    </section>
  );
};

export default Experience;
