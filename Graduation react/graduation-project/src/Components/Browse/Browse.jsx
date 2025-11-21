import React from 'react'
import './Browse.css'
import all_product from '../Assets/all_product'

const Browse = () => {
  return (
    <div className='browser-container' id='all courses'>
          <h4>COURSES</h4>
          <p className='browser-p'>Browse Our Online Courses</p>

          <div className="grid-container">
            <div className="grid">
              <img src={all_product.ui_icon} alt="" />
              <h2>UI/UX Design Courses</h2>
              <p>25 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.art_icon} alt="" />
              <h2>Art & Design</h2>
              <p>25 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.science_icon} alt="" />
              <h2>Computer Science</h2>
              <p>10 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.history_icon} alt="" />
              <h2>History & Archelogic</h2>
              <p>15 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.engi_icon} alt="" />
              <h2>Software Engineering</h2>
              <p>30 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.information_icon} alt="" />
              <h2>Information Software</h2>
              <p>60 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.health}alt="" />
              <h2>Health & Fitness</h2>
              <p>10 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.marketing_icon} alt="" />
              <h2>Marketing</h2>
              <p>30 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.graphic_icon} alt="" />
              <h2>Graphic Design</h2>
              <p>80 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.music_icon} alt="" />
              <h2>Music</h2>
              <p>120 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.business_icon} alt="" />
              <h2>Business Administration</h2>
              <p>25 Courses</p>
            </div>
            <div className="grid">
              <img src={all_product.develop_icon} alt="" />
              <h2>Web Management</h2>
              <p>17 Courses</p>
            </div>
          </div>
              </div>
  )
}

export default Browse