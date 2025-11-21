import React from 'react'
import './Middle.css'
import all_product from '../Assets/all_product'

const Middle = () => {
  return (
    <div className='middle-container'>
      <div className="middle">
        <img src={all_product.img1_middle} alt="Ring 1" />
        <div className="middle-content">
          <h2>RING</h2>
        </div>
      </div>

      <div className="middle">
        <img src={all_product.img2_middle} alt="Ring 2" />
        <div className="middle-content">
          <h2>NECKLACE</h2>
        </div>
      </div>

      <div className="middle">
        <img src={all_product.img3_middle} alt="Ring 3" />
        <div className="middle-content">
          <h2>EARRING</h2>
        </div>
      </div>

      <div className="middle">
        <img src={all_product.img4_middle} alt="Ring 4" />
        <div className="middle-content">
          <h2>BRACELET</h2>
        </div>
      </div>
    </div>
  )
}

export default Middle
