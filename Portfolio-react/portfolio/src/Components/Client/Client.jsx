import React from 'react'
import './Client.css'
import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'
import facebook from '../../assets/facebook.png'

const Client = () => {
  return (
    <div className='client' id='client'>
          <h1>My Clients</h1>
          <p>I’ve had the opportunity to work with amazing clients across different industries, helping them build modern and user-friendly digital solutions. Each project reflects a unique challenge and my commitment to delivering quality results.</p>

          <div className="client-image">
            <img src={walmart} alt="" />
            <img src={adobe} alt="" />
            <img src={microsoft} alt="" />
            <img src={facebook} alt="" />
          </div>
    </div>
  )
}

export default Client