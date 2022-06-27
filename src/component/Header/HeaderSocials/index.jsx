import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import './HeaderSocials.css'

const HeaderSocials = () => {
  return (
    <div className='header-socials'>
        <a href="https://www.linkedin.com/in/olufolajimi-ijimakinde-40993a226/"target="_blank" rel="noopener noreferrer"><FaLinkedin size={25}/></a>
        <a href="https://github.com/Folajimmie" target="_blank" rel="noopener noreferrer"><FaGithub size={25}/></a>
        <a href="https://twitter.com/olufolajimmie" target="_blank" rel="noopener noreferrer"><FaTwitter size={25}/></a> 
    </div>
  )
}

export default HeaderSocials