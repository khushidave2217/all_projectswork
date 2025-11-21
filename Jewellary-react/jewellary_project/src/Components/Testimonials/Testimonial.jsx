import React from 'react'
import './Testimonial.css'
import all_product from '../Assets/all_product'

const Testimonial = () => {
  return (
    <div className='testimonial-container' id="testimonial">
      <h1 className="testimonial-title">Testimonials</h1>
      <p className="testimonial-subtitle">What our clients say about us</p>

    
      <div className="testimonial-wrapper">
        <div className="testimonial-main">
          <img src={all_product.t1_img} alt="" />
          <h2>Adward Mcavay</h2>
          <h6>Client</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum accusamus tenetur eligendi blanditiis debitis?</p>
        </div>

        <div className="testimonial-main">
          <img src={all_product.t2_img} alt="" />
          <h2>Sarah Williams</h2>
          <h6>Client</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum accusamus tenetur eligendi blanditiis debitis?</p>
        </div>

        <div className="testimonial-main">
          <img src={all_product.t3_img} alt="" />
          <h2>Michael Brown</h2>
          <h6>Client</h6>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime ipsum accusamus tenetur eligendi blanditiis debitis?</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
