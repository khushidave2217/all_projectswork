import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/Shopcontext'
import'./About.css'

const About = () => {
  const { about } = useContext(Shopcontext)

  return (
    <div className='about-container'>
  <h2>What We Do</h2>
  <p>
    Simplify the Journey of buying, selling, and renting properties. 
    Our expert team provides comprehensive real estate solutions tailored to your needs.
  </p>

  <hr />

  {/* NEW WRAPPER */}
  <div className="about-grid">
    {about.map((item) => (
      <div key={item.id} className='about-card'>
        <div className='about-main'>
          <h6 className='about-number'>{item.number}</h6>
          <h1 className='about-text'>{item.title}</h1>
          <p className='about-description'>{item.Description}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}

export default About
