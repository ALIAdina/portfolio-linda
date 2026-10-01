import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <div className='hero'id="home">
      <img src={profile} alt="" className="profile" />
      <h1><span>I'm Linda MAHDJOUB,</span> Fullstack developerrr</h1>
      <p>I'm Linda MAHDJOUB, Fullstack developer
      Je suis développeur React.
Je crée des applications web.
Je recherche une alternance.
      </p>
      <div className="hero_action">
        <div className="hero_connect"><a href='#contact'>
            Connect with mem</a>
        </div>
        <div className="hero_resume"><a href='#myprojects'>My projects</a></div>
      </div>
    </div>
  )
}

export default Hero
