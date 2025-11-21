import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/Shopcontext'
import './testimonial.css' 

const Testimonial = () => {
  const { testimonials } = useContext(Shopcontext)

  return (
    <section className="testimonial-section">
      <div className="testimonial-wrapper">
        <div className="testimonial-left">
          <div className="big-quote">“</div>

          <h2 className="testi-heading">
            Read from clients who have found the perfect place where they can
            create...
          </h2>

          <div className="testi-line"></div>

          <p className="testi-desc">
            Discover testimonials from satisfied clients who have found their dream
            properties with Real Estate, the trusted experts in helping you find the
            perfect place to call home.
          </p>

          <button className="testi-btn">More Testimonials</button>
        </div>

        {/* RIGHT SIDE – CARDS FROM CONTEXT */}
        <div className="testimonial-right">
          {testimonials && testimonials.map((item, index) => (
            <article key={index} className="testi-card">
              <div className="testi-stars-text">
                <div className="stars">
                  {/* 5 star static – જો rating api માંથી આવે તો according to item.rating map કરી શકીએ */}
                  <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                </div>
                <p className="testi-text">
                  {item.text}
                </p>
              </div>
              <p className="testi-name">
                {item.name?.toUpperCase()}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
