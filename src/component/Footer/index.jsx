import React from 'react';
import './footer.css';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaWhatsapp} from 'react-icons/fa';

const index = () => {
  return (
    <footer>
      <a href="#home" className='footer-logo'>&lt;Jimmie&gt;</a>

      <ul className='footer-links'>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer-socials">
      <a href="https://www.linkedin.com/in/olufolajimi-ijimakinde-40993a226/"target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
        <a href="https://github.com/Folajimmie" target="_blank" rel="noopener noreferrer"><FaGithub size={25}/></a>
        <a href="https://twitter.com/olufolajimmie" target="_blank" rel="noopener noreferrer"><FaTwitter size={25}/></a>
        <a href="https://wa.me/message/LDZTTKZ2JGPCE1" target="_blank" rel="noopener noreferrer"><FaWhatsapp size={23}/></a>
      </div>

      <div className="footer-copyright">
        <small>&copy;Olufolajimi.<br />All rights reserved.</small>
      </div>
    </footer>
  )
}

export default index