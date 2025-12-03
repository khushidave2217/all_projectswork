import React, { useContext } from 'react'
import './Featured.css'
import { Shopcontext } from '../../Context/Shopcontext'

const Featured = () => {
  const { featured } = useContext(Shopcontext)

  return (
    <div className='featured-container'>
      <div className="featured-grid">
        {featured.map((item) => (
          <div key={item.id} className='feature-card'>
            <div className='feature-main'>
              {/* Image */}
              <img src={item.image} alt={item.title} className="feature-img" />

              {/* Top text (APARTMENT-QUEENS) */}
              <h6 className="feature-text">{item.text}</h6>

              {/* Title */}
              <h2 className='feature-title'>{item.title}</h2>

              {/* Description */}
              <p className='feature-description'>{item.Description}</p>

              {/* Amount / Price */}
              <p className='feature-amount'>{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Featured
