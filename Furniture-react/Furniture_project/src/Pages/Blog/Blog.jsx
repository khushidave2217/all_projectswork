import React from 'react'
import { Testimonialcontext } from '../../Context/Testimonialcontext'
import  { useContext } from 'react';
import './Blog.css'


const Blog = () => {
     const {testi,blogdata} = useContext(Testimonialcontext)
  return (
    <>
     <div className="blog-header">
      <h2>Blog</h2>
    </div>
    <div className='blog-container'>
            <div className="blog-main">
              {blogdata.map((item) => (
                        <div key={item.id} className='blog-card'>
                          <img src={item.image} alt={item.title} className="blog-img" />
                          <p className="blog-text">{item.text}</p>
                        </div>
                      ))}
                 {testi.map((item) => (
          <div key={item.id} className='testimonial-card'>
            <img src={item.image} alt={item.name} className="testi-img" />
            <p className="testimonial-p">"{item.text}"</p>
            <h6>{item.name}</h6>
            <h5>{item.role}</h5>
          </div>
        ))}
            </div>
    </div>
    </>
  )
}

export default Blog