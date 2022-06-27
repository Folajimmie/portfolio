import React, {useRef} from 'react';
import emailjs from 'emailjs-com';
import './contact.css';
import ContactImage from '../../assets/images/contactme.png';
import {FaWhatsapp} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaLinkedin} from 'react-icons/fa';

const Index = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_l1ne1ka', 'template_5pm59ye', form.current, 'RyaJ22lUDC9o4f4l5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  }; 
  return (
    <section id='contact' className='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-container">
        <div className="contact-img">
          <img src={ContactImage} alt="Contact" />
        </div>
        <div className="contact-content">
          <div className="contact-message">
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Full Name' required/>
              <input type="email" name='email' placeholder='Email Address' required/>
              <textarea name="message" rows="10" placeholder='Message' required></textarea>
              <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
          </div>

          <div className="contact-socials">
              <div className="socials-contact">
                <a href="https://wa.me/message/LDZTTKZ2JGPCE1" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={23}/></a>
                <a href="https://twitter.com/olufolajimmie" target="_blank" rel="noopener noreferrer"><FaTwitter size={23}/></a> 
                <a href="https://www.linkedin.com/in/olufolajimi-ijimakinde-40993a226/ "target="_blank" rel="noopener noreferrer"><FaLinkedin size={23}/></a>
              </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Index