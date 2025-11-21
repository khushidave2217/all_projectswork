import React from 'react'
import './Newsletter.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const Newsletter = () => {
  return (
    <div className='newsletter-main'>
      <div className="newsletter-container">
        
        <div className="newsletter-text">
          <h1>Newsletter - Stay tuned and get the latest update</h1>
          <p>Far far away, behind the word mountains</p>
        </div>

        <div className="newsletter-input">
          <input type="email" name='email' placeholder='Enter Email address'/>
           <FontAwesomeIcon icon={faPaperPlane} className='send-icon'/>
        </div>

      </div>
    </div>
  )
}

export default Newsletter
