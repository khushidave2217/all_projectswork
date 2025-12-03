import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className="footer-main">
        <h1>Real <span>Estate</span></h1>
      </div>

      <div className="footer-main">
        <h3>About Us</h3>
        <p>
          At Real Estate, we pride ourselves on being a trusted and reputable
          name in the real estate industry with years of experience.
        </p>
      </div>

      <div className="footer-main">
        <h3>Contact Info</h3>
        <p>13, Fifth Avenue, New York, NY 101660</p>
        <h6>contact@info.com</h6>
        <h5>555-345-4599</h5>
      </div>

      <div className="footer-main">
        <h3>Search Properties</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, accusamus.</p>

        <div className="footer-search-box">
          <input
            type="text"
            placeholder="Search properties..."
            className="footer-search-input"
          />
          <button className="footer-search-icon">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Footer
