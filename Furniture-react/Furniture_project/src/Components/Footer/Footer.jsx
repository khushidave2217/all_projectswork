import React from 'react';
import './Footer.css';


import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="footer">
      
      <div className="footer-top">
        <div className="newsletter">
          <p>Subscribe to Newsletter</p>
          <div className="newsletter-inputs">
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
          
          </div>
        </div>

        <div className="footer-links">
          <div>
            <h4>Company</h4>
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Knowledge base</li>
              <li>Live chat</li>
            </ul>
          </div>
          <div>
            <h4>Careers</h4>
            <ul>
              <li>Jobs</li>
              <li>Our team</li>
              <li>Leadership</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li>Nordic Chair</li>
              <li>Kruzo Aero</li>
              <li>Ergonomic Chair</li>
            </ul>
          </div>
        </div>

        <div className="social-icons">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedinIn />
        </div>
      </div>

      <div className="footer-bottom">
        <p>©2025 All Rights Reserved. — Designed with love by Untree.co</p>
        <div>
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
