import React from 'react'
import './RecentBlog.css'
import { Blog } from '../Assets/testimonialapi'

const RecentBlog = () => {
  return (
    <div className='recent-container'>
         <h2>Recent Blog</h2>
      <div className="recent-text">
       
        {Blog.map((item) => (
          <div key={item.id} className='blog-card'>
            <img src={item.image} alt={item.title} className="blog-img" />
            <p className="blog-text">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RecentBlog
