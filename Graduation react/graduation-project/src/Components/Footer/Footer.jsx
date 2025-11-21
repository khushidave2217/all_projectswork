import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Footer.css'
import { faArrowRightArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'

const Footer = () => {
    return (
        <div className='footer-container' id='contact'>
            <div className="footer-content">
                <div className="footer">
                    <h1>ACADEMIA</h1>
                    <h6>ONLINE EDUCATION & LEARNING</h6>

                    <p>A small river named Duden <br /> flows by their place and <br />supplies it with the necessary <br />
                     regelialia. </p>

                  
                        <a href="https://facebook.com" target="_blank">
                            <FontAwesomeIcon icon={faFacebook} className="icon" />
                        </a>
                        <a href="https://instagram.com" target="_blank">
                            <FontAwesomeIcon icon={faInstagram} className="icon" />
                        </a>

                        <a href="https://twitter.com" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} className="icon" />
                        </a>

                        <a href="https://youtube.com" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} className="icon" />
                        </a>
                    
                </div>
                <div className="footer">
                    <h3>Explore</h3>

                    <ul className='ul-footer'>
                        
                            <li><FontAwesomeIcon icon={faArrowRight} className="icon2" />  About Us</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="icon2" /> Services</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="icon2" /> Courses</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="icon2" /> Blog</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="icon2" /> Contact Us</li>
                    </ul>
                </div>


                    <div className="footer">
                    <h3>Quick Links</h3>

                    <ul className='ul-footer'>
                            <li><FontAwesomeIcon icon={faArrowRight} className="icon3" /> Contact Us</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="icon3" /> Pricing</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="icon3" /> Terms & Condition</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="icon3" /> Privacy</li>
                            <li><FontAwesomeIcon icon={faArrowRight} className="icon3" /> Feedback</li>
                    </ul>
                </div>

                   <div className="footer">
                    <h3 className='footer-question'>Have a Questions?</h3>
                            <p>203 Fake st.Mountain view ,<br />
                            Iskon Ahmedabad</p>
                            <h2>+91 9845918798</h2>
                            <h4>info@yourdomain.com</h4>
                </div>
            </div>

        </div>
    )
}

export default Footer