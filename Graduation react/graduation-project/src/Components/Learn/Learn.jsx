import React from 'react'
import './Learn.css'
import all_product from '../Assets/all_product.js'  

const Learn = () => {
  return (
    <div className='learn-container' id='about'>
      <h2>LEARN ANYTHING</h2>
      <p>Benefits About Online <br /> Learning Expertise</p>

      <div className="learn-left">
        <img src={all_product.learn_img} alt="Learn" />
      </div>

      <div className="learn-right">
        <div className="learn-content">
          <img src={all_product.book_icon} alt="" />
          <div className="learn-text">
          <h4>Online Courses</h4>
          <p className='p-learn'>Far far away, behind the world mountains, far from the countries vokalia and Consonantia, there live the blind texts.</p>
        </div>
</div>
        <div className="learn-content">
           <img src={all_product.certificate_icon} alt="" />
          <div className="learn-text">
          <h4>Earn A  Certificates</h4>
          <p className='p-learn'>Far far away, behind the world mountains, far from the countries vokalia and Consonantia, there live the blind texts.</p>
        </div>
        </div>

        <div className="learn-content">
           <img src={all_product.experts_icon} alt="" />
          <div className="learn-text">
          <h4>Learn With Experts</h4>
          <p className='p-learn'>Far far away, behind the world mountains, far from the countries vokalia and Consonantia, there live the blind texts.</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Learn
