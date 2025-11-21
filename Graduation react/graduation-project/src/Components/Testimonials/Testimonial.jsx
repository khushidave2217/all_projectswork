import React from 'react'
import './Testimonial.css'
import all_product from '../Assets/all_product'

const Testimonial = () => {
    return (
        <div className='testimonial-container' id='journal'>
            <h4>TESTIMONIAL</h4>
            <p>Our Successful Student</p>
            <div className="testimonial-main">
                <div className="testimonial">
                    <img src={all_product.test_1} alt="" />
                    <h4>ROGER SCOTT</h4>
                    <h6>MARKETING MANAGER</h6>
               
                <div className='testi-p'>
                    <p> Far Far Far far away ,behind the world mountains,far from the countries  vokalia and Consonantia,there live the blind texts.</p>
                </div>
                 </div>

                <div className="testimonial">
                    <img src={all_product.test_2} alt="" />
                    <h4>ROGER SCOTT</h4>
                    <h6>MARKETING MANAGER</h6>
               
                <div className='testi-p'>
   <p> Far Far Far far away ,behind the world mountains,far from the countries  vokalia and Consonantia,there live the blind texts.</p>
                </div>
                 </div>

                <div className="testimonial">
                    <img src={all_product.test_3} alt="" />
                    <h4>ROGER SCOTT</h4>
                    <h6>MARKETING MANAGER</h6>
                
               <div className='testi-p'>
                       <p> Far Far Far far away ,behind the world mountains,far from the countries  vokalia and Consonantia,there live the blind texts.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonial