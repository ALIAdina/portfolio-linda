import React from 'react'
import about from '../../assets/about.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
import mail_icon from '../../assets/mail_icon.svg'
import'./contact.css'
const contact = () => {
    
  return (
    <div className='contact' id='contact'>
        <div className="contact-title">
            <h1>Get in Touch</h1>
            <img src={about} alt="" className="" />
        </div>
    <div className="contact-section">
        <div className="contact-left">
            <h1>Lest's Talk</h1>
            <p>Have a project in mind or just want to say hello? Feel free to send me a message. I’m always happy to discuss new ideas, projects, or opportunities.</p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" className="" />
                    <p>mahdjoub.linda2024@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+33749569932</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>bry sur marne</p>
                </div>
            </div>
          
        </div>
        <form action="https://formspree.io/f/myezapra" className="contact-right" method='post'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' name='name' />
                <label htmlFor="">Your email</label>
                <input type="text" placeholder='Enter your email' name='email' />
                <label htmlFor="">write your message here</label>
                <textarea name="message" rows="8"placeholder='Enter your message'></textarea>
                <button className='contact-submit'>Submit Now</button>
            </form>
    </div>
    </div>
  )
}

export default contact
