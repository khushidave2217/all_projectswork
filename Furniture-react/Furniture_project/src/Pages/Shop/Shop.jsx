import React, { useContext } from 'react'
import { Shopcontext } from '../../Context/Shopcontext'
import './Shop.css'

const Shop = () => {
  const { shopdata } = useContext(Shopcontext)

  return (
    <>
    <div className="shop-header">
      <h2>Shop</h2>
    </div>
    <div className='shop-main'>
      <div className='shop-container'>
        <div className="shop-grid">
          {shopdata.map((item) => (
            <div key={item.id} className="shop-card">
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p>₹{item.price}.00</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  )

}

export default Shop
