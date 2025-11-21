import React from 'react'
import './Hero.css'
import hero_section from '../Assests/hero-section.jpg'

const Hero = () => {
  return (
    <div className='hero-section'>
        <img id="box" src={hero_section} alt="" />
        <h2>New Collections Arrival</h2>
       <p>  Discover the latest trends in fashion and lifestyle at SHOPPER.  
  From stylish men’s wear to trendy women’s collections and fun kids’ outfits,  
  we bring you high-quality products at unbeatable prices.  
  Explore our new arrivals, seasonal collections, and exclusive deals </p>

        <button>Learn More</button>
        <p></p>
    </div>
    
  )
}

export default Hero