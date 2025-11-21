import React from 'react'
import './About.css'
import website_design from '../../assets/website-design.png';
import ui_design from '../../assets/ui-design.png';

import app_design from '../../assets/app-design.png';

const About = () => {
  return (
    <div className='about-container' id='about'>
                <h1>What I do</h1>
                <p>I build modern and responsive web applications using the MERN stack. I love creating smooth user  experiences and efficient backend solutions.Crafting dynamic websites and web apps with MongoDB .I combine creativity with code to deliver seamless digital experiences.I love creating smooth user experiences and efficient backend solutions.</p>

                <div className="about-main">
                    <img src={website_design} alt="" />
                    <h2>Website Design</h2>
                   <div className='p-main'>
                    <p>This demo text can be changed while making  the production ready site.</p>
                </div>
                 </div>

             
                <div className="about-main">
                    <img src={ui_design} alt="" />
                    <h2>UI/UX Design</h2>
                    <div className='p-main'>
                    <p>This demo text can be changed while making  the production ready site.</p>
                </div>
                </div>
                
                <div className="about-main">
                    <img src={app_design} alt="" />
                    <h2>App Design</h2>
                  <div className='p-main'>
                    <p>This demo text can be changed while making  the production ready site.</p>
                </div>
                  </div>



                
              
    </div>
  )
}

export default About