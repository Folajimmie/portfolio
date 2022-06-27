import React from 'react';
import './skills.css';
import {FaHtml5} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {IoLogoJavascript} from 'react-icons/io';
import {FaBootstrap} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';
import {FaReact} from 'react-icons/fa';
import {SiNextdotjs} from 'react-icons/si';
import {FaPython} from 'react-icons/fa';
import {DiMysql} from 'react-icons/di';
import {SiStyledcomponents} from 'react-icons/si';

const index = () => {
  return (
    <section id='skills' className='skills'>
       <h5>Skills I Have</h5>
       <h2>Skills</h2>

       <div className="container skills-container">
          <div className="frontend-skills">
            <h3>Frontend Development</h3>
            <div className="skills-content">
              <article className='skills-details'>
                <FaHtml5 className='i'/>
                <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills-details'>
                <FaCss3Alt className='i'/>
                <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills-details'>
                <IoLogoJavascript className='i'/>
                <div>
                <h4>JAVASCRIPT</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills-details'>
                <FaBootstrap className='i'/>
                <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills-details'>
                <SiTailwindcss className='i'/>
                <div>
                <h4>TAILWIND</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills-details'>
                <FaReact className='i'/>
                <div>
                <h4>REACT</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
              <article className='skills-details'>
                <SiNextdotjs className='i'/>
                <div>
                <h4>NEXT.JS</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='skills-details'>
                <FaPython className='i'/>
                <div>
                <h4>PYTHON</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='skills-details'>
                <DiMysql className='i'/>
                <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermediate</small>
                </div>
              </article>
              <article className='skills-details'>
                <SiStyledcomponents className='i'/>
                <div>
                <h4>Styled Component</h4>
                <small className='text-light'>Experienced</small>
                </div>
              </article>
            </div>
          </div>
       </div>
    </section>
    
  )
}

export default index