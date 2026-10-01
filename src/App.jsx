import React from 'react'
import './index.css'
import Navbar from './Compenents/Navbar/Navbar'
import Hero from './Compenents/Hero/Hero'
import About from './Compenents/About/About'
import MyProjects from './Compenents/Myprojects/MyProjects'
import Contact from './Compenents/contact/Contact'
import Footer from './Compenents/footer/Footer'


const App = () => {
  return (
    <div>
      
      <Navbar />
      <Hero />
      <About />
      <MyProjects />
      <Contact />
      <Footer/>

    </div>
  )
}

export default App
