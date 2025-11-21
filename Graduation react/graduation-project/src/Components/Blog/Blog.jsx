import React from 'react'
import './Blog.css'
import all_product from '../Assets/all_product'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faCalendarAlt, faComment } from '@fortawesome/free-solid-svg-icons'

const Blog = () => {
  return (
    <div className='blog-container'>
      <h4>OUR BLOG</h4>
      <h6>Recent From Blog</h6>

      <div className="blog-main">

        <div className="blog">
          <img src={all_product.blog_1} alt="" />
          <div className="blog-h4">
            <div className="blog-info"><FontAwesomeIcon icon={faUser} /> <span>ADMIN</span></div>
            <div className="blog-info"><FontAwesomeIcon icon={faCalendarAlt} /> <span>JAN 18,2021</span></div>
            <div className="blog-info"><FontAwesomeIcon icon={faComment} /> <span>COMMENTS</span></div>
          </div>
          <div className='blog-p'>
           
            <p>A small river named duden flows by their place and supplies it with the necessary.</p>
          </div>
        </div>

        <div className="blog">
          <img src={all_product.blog_2} alt="" />
          <div className="blog-h4">
            <div className="blog-info"><FontAwesomeIcon icon={faUser} /> <span>ADMIN</span></div>
            <div className="blog-info"><FontAwesomeIcon icon={faCalendarAlt} /> <span>JAN 18,2021</span></div>
            <div className="blog-info"><FontAwesomeIcon icon={faComment} /> <span> COMMENTS</span></div>
          </div>
          <div className='blog-p'>
           
            <p>A small river named duden flows by their place and supplies it with the necessary.</p>
          </div>
        </div>

        <div className="blog">
          <img src={all_product.blog_3} alt="" />
          <div className="blog-h4">
            <div className="blog-info"><FontAwesomeIcon icon={faUser} /> <span>ADMIN</span></div>
            <div className="blog-info"><FontAwesomeIcon icon={faCalendarAlt} /> <span>JAN 18,2021</span></div>
            <div className="blog-info"><FontAwesomeIcon icon={faComment} /> <span>COMMENTS</span></div>
          </div>
          <div className='blog-p'>
           
            <p>A small river named duden flows by their place and supplies it with the necessary.</p>
          </div>
        </div>

      </div>
    </div>
  
  )
}

export default Blog
