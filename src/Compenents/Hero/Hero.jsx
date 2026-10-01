import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'

const Hero = () => {
  return (
    <div className='hero'id="home">
      <img src={profile} alt="" className="profile" />
      <h1>
  I'm <span>Linda MAHDJOUB</span>, Fullstack Developer
</h1>

<p>
  Je suis développeuse Fullstack spécialisée dans la création
  d'applications web modernes et responsives avec React et Node.js.
  Je recherche une alternance en développement web.
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
