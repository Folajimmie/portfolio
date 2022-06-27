import React from 'react';
import './about.css';
import Jimmie from '../../assets/images/me.jpg';
import {FaAward} from 'react-icons/fa';
import {FaUserSecret} from 'react-icons/fa';
import {FaFolderOpen } from 'react-icons/fa';

const index = () => {
  return (
    <section id='about' className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-container">
        <div className="about-background">
          <div className="about-img">
            <img src={Jimmie} alt="Jimmie" />
          </div>

        </div>
        <div className="about-content">
        <p>
        Meticulous web developer with over 1 year of front end experience and passion for responsive website design and a firm believer in the mobile-first approach, adept at creating successful websites that meet customer/users needs.
        </p>
          <div className="about-card">
            
            <article className='card'>
            <FaAward className='about-card-icon'/>
              <h5>Experience</h5>
              <small>1+ years Experience</small>
            </article>
            
            <article className='card'>
            <FaUserSecret className='about-card-icon'/>
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>
            
            <article className='card'>
            <FaFolderOpen className='about-card-icon'/>
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default index

