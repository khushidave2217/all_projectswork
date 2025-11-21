import React from 'react'
import './Course.css'
import all_product from '../Assets/all_product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Course = () => {
    return (
        <div className='courses-section' id='team'>
            <h6>OUR COURSES</h6>
            <p className='course-p'>Explore Our Popular Online Courses</p>
            <div className="course-main">
                <div className="courses-card">
                    <div className="course-header">
                        <img src={all_product.software_icon} alt="" />
                        <h2>Introducing to Software Engineering</h2>
                    </div>

                    <div className="course-rate">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                    <div className="course-detail">
                        <img src={all_product.women_icon} alt="" />
                        <h6>by John Smith</h6>

                    </div>
                    <h5>50 lecture (190 hrs)</h5>
                    <p>$300 All Courses / $15 per month</p>
                    <button>ENROLL NOW</button>
                </div>

                <div className="courses-card">
                    <div className="course-header">
                        <img src={all_product.photoshop_icon} alt="" />
                        <h2>Introducing to Software Engineering</h2>
                    </div>
                    <div className="course-rate">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                    <div className="course-detail">
                        <img src={all_product.women_icon} alt="" />
                        <h6>by John Smith</h6><br />

                    </div>
                    <h5>50 lecture (190 hrs)</h5>
                    <p>$300 All Courses / $15 per month</p>
                    <button>ENROLL NOW</button>
                </div>

                <div className="courses-card">
                    <div className="course-header">
                        <img src={all_product.web_icon} alt="" />
                        <h2>Introducing to Software Engineering</h2>
                    </div>
                    <div className="course-rate">
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStar} />
                        <FontAwesomeIcon icon={faStarHalfAlt} />
                    </div>
                    <div className="course-detail">
                        <img src={all_product.women_icon} alt="" />
                        <h6>by John Smith</h6>

                    </div>
                    <h5>50 lecture (190 hrs)</h5>
                    <p>$300 All Courses / $15 per month</p>
                    <button>ENROLL NOW</button>
                </div>
            </div></div>
    )
}

export default Course