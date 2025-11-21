import React from 'react'
import './Contact.css'
import facebook_icon from '../../assets/facebook-icon.png'
import twitter from '../../assets/twitter.png'
import youtube from '../../assets/youtube.png'
import instagram from '../../assets/instagram.png'
const Contact = () => {
  return (
    <div className='contact' id='contact'>
          <h1>Contact Me</h1>
                <p>Please fill out the form below to discuss any work opportunities.</p>

                <div className="contact-main">
                    <input type="text" name="name" placeholder='Your Name'/><br /><br />
                    <input type="email" name="email" placeholder='Your Email'/><br /><br />
                  <textarea name="message" id="message" cols={'10'} rows={'5'} placeholder='Your Message'></textarea><br />

                 <button >Submit</button>

                 <div className="contact-icon">
                    <img src={facebook_icon} alt="" />
                    <img src={twitter} alt="" />
                    <img src={youtube} alt="" />
                    <img src={instagram} alt="" />
                 </div>
                   </div>
                   <div className="p-contact">
                     <p>CopyRights @ 2023 Dave Khushi,All Rights reserved.</p>
                </div>
                </div>
                
  
  )
}

export default Contact