import React from 'react';
import './Testimonial.css';
import testi from '../Assets/testimonialapi';

const Testimonial = () => {
  return (
    <div className='testimonial-container'>
      <h1>Testimonials</h1>
    
      <div className="testimonial-main">
        {testi.map((item) => (
          <div key={item.id} className='testimonial-card'>
            <img src={item.image} alt={item.name} className="testimonial-img" />
            <p className="testimonial-text">"{item.text}"</p>
            <h6>{item.name}</h6>
            <h5>{item.role}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
