import React from 'react';
import './portfolio.css';
// import IMAGE1 from '../../assets/images/portfolio1.jpg';
import {FaGithub} from 'react-icons/fa';
import {MdOutlineOpenInNew} from 'react-icons/md';
import Portfolio from '../../component/portofolio.json'

const index = () => {
  return (
    <section id='portfolio' className='portfolio'>
      <h5>Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-container">
        {
          Portfolio.map( ({id, image, title, github, page, stack}) =>{
            return(
            <div key={id} className="porfolio-item">
          <img src={image} alt={title} />
          <div className="overlay">
            <div className="overlay-content">
              <h3>{title}</h3>
              <p>{stack}</p>
              <div className="overlay-icon">
              <a href={github} target="_blank" rel="noopener noreferrer"><FaGithub className='icon'/></a>
              <a href={page} target="_blank" rel="noopener noreferrer"><MdOutlineOpenInNew className='icon'/></a>
              </div>
            </div>
          </div>
        </div>
        );
          })
        };
      </div>
    </section>
  )
};

export default index