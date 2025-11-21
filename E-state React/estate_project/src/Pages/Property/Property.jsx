import React, { useContext } from 'react'
import heroimg from "../../Components/Asstes/property_main.jpg"; 
import './Property.css'
import { Shopcontext } from '../../Context/Shopcontext'

const Property = () => {
    const { featuredservice } = useContext(Shopcontext)
  return (
    <>
     <section
         className="hero-section"
         style={{ backgroundImage: `url(${heroimg})` }}
       >
         <div className="hero-content">
           <h4 className="service-top-text">
             Properties
           </h4>
   
           <h1 className="service-title">
           Looking to Buy, Sell, Rent, Invest or Manage?
           </h1>
         </div>
       </section>

        <div className='featured-container'>
      <div className="featured-grid">
        {featuredservice.map((item) => (
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
       </>
  )
}

export default Property