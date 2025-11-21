import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane, faComments, faCreditCard } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  return (
    <div className='about-container'>
      <div className="about">
        <FontAwesomeIcon icon={faPlane} className='about-icon' />
        <h6>Free Shipping</h6>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="about">
        <FontAwesomeIcon icon={faComments} className='about-icon' />
        <h6>Support 24/7</h6>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div className="about">
        <FontAwesomeIcon icon={faCreditCard} className='about-icon' />
        <h6>100% Payment Secure</h6>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
    </div>
  )
}

export default About
