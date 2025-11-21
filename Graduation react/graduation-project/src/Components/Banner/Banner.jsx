import React from 'react'
import './Banner.css'
import all_product from '../Assets/all_product'

const Banner = () => {
  return (
    <div className='banner-container'>
      <div className="banner-image">
        <img src={all_product.banner_learning} alt="Banner" />
      </div>
      <div className="banner-main">
        <div className="banner-text">
            <img src={all_product.eduacation_banner} alt="" />
          <h1>3000</h1>
          <h6>SUCCESS STORIES</h6>
        </div>
        <div className="banner-text">
             <img src={all_product.trusted_banner} alt="" />
          <h1>320</h1>
          <h6>TRUSTED TUTORS</h6>
        </div>
        <div className="banner-text">
             <img src={all_product.scheduled_banner} alt="" />
          <h1>1000</h1>
          <h6>SCHEDULES DAILY</h6>
        </div>
        <div className="banner-text">
             <img src={all_product.course_banner} alt="" />
          <h1>587</h1>
          <h6>COURSES AVAILABLE</h6>
        </div>
      </div>
    </div>
  )
}

export default Banner
