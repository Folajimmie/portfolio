import React from 'react';
import CTA from './CTA';
import './header.css';
import Navbar from './Navbar';
import Me from '../../assets/images/jim.jpg';
import HeaderSocials from './HeaderSocials';


const index = () => {
  return (
    <header id='home'>
      <Navbar />
      <div className="container header__container">
        <div className="header">
          <div className="header-content">
            <h1>Hello, I'm</h1>
            <h1 className='jimi'>Olufolajimi,</h1>
            <h1>
              a Frontend Engineer
            </h1>
            <p>Let me take you on a journey of my work so far</p>
            <CTA />
          </div>
          <div className="me">
            <img src={Me} alt="Olufolajimi" />
          </div>
          <HeaderSocials />
        </div>
      </div>
      
      
    </header>
  )
}

export default index;