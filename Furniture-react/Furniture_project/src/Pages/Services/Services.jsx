import React from 'react'
import './Services.css'
import data from '../../Components/Assets/data'


import all_product from '../../Components/Assets/all_product'

const Services = () => {
  return (
   <>
  
<div className="service-header">
      <h2>Services</h2>
    </div>
    <div className="service-features">
    <div className="service-main">
      <img src={all_product.truck_icon} alt="" /> 
      <div>
        <h6>Fast & Free Shipping</h6>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </div>

    <div className="service-main">
      <img src={all_product.bag_icon} alt="" /> 
      <div>
        <h6>Easy Returns</h6>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </div>

    <div className="service-main">
      <img src={all_product.support_icon} alt="" /> 
      <div>
        <h6>Best Quality</h6>
       <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </div>

    <div className="service-main">
      <img src={all_product.return_icon} alt="" /> 
      <div>
        <h6>Secure Payment</h6>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </div>
     <div className="service-main">
      <img src={all_product.bag_icon} alt="" /> 
      <div>
        <h6>Easy Returns</h6>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </div>
      <div className="service-main">
      <img src={all_product.support_icon} alt="" /> 
      <div>
        <h6>24/7 Support</h6>
       <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </div>
  </div> 

  <div className='services-drop-container'>
      {/* Left Section */}
      <div className="services-drop-text">
        <h2>Crafted with excellent <br />material.</h2>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button>Explore</button>
      </div>

      {/* Right Section */}
      <div className="services-drop-main">
        {data.map((item) => (
          <div key={item.id} className="services-drop-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}.00</p>
          </div>
        ))}
      </div>
    </div>
   
    </>
    
  )
}

export default Services