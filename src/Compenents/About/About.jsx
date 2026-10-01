import React from 'react'
import './About.css'
import profile from '../../assets/profile.jpg'
import about from '../../assets/about.svg'


const About = () => {
  return (
    <div className="about"id='about'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={about} alt="" />
        </div>
        <div className="about-section">
           
            <div className="about-right">
                <div className="about-para">
                    <p>I am a passionate web developer who enjoys creating modern and useful applications. I have learned both front-end and back-end development, and I am always motivated to learn new technologies and improve my skills.
                    </p>
                </div>
              
                <div className="about-skills">
                   
                    <div className="about-skills">
                    <div className="about-skill">
                        <p>HTML & CSS</p>
                        <hr style={{width:"50%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>REACT JS</p>
                        <hr style={{width:"50%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>Java Script</p>
                        <hr style={{width:"50%"}}></hr>
                    </div>
                    <div className="about-skill">
                        <p>Node JS</p>
                        <hr style={{width:"50%"}}></hr>
                    </div>
                </div>
                </div>
            </div>
            {/* <img src={} alt="" /> */}
        </div>
    </div>
  )
}

export default About
