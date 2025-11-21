import React from 'react'
import './About.css'
import all_product from '../Assets/all_product'

const About = () => {
  return (
    <div className='about-container'>
         <div className="about-container-left">
  <h5>Why Choose Us</h5>
 <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>

  <div className="about-features">
    <div className="about-main">
      <img src={all_product.truck_icon} alt="" /> 
      <div>
        <h6>Fast & Free Shipping</h6>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </div>

    <div className="about-main">
      <img src={all_product.bag_icon} alt="" /> 
      <div>
        <h6>Easy Returns</h6>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </div>

    <div className="about-main">
      <img src={all_product.support_icon} alt="" /> 
      <div>
        <h6>Best Quality</h6>
       <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </div>

    <div className="about-main">
      <img src={all_product.return_icon} alt="" /> 
      <div>
        <h6>Secure Payment</h6>
        <p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
      </div>
    </div>
  </div>
</div>

            <div className="about-container-right">
                <img src={all_product.dots_yellow} alt="" />
                <img src={all_product.about} alt="" className='about-main'/>
            </div>
    </div>
  )
}

export default About