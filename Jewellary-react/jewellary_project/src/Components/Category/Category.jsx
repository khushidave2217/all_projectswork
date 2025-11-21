import React from 'react'
import all_product from '../Assets/all_product'
import './Category.css'

const Category = () => {
  
  return (
    <div className='category-container' id="category">
      <div className="category-main-left">
        <img src={all_product.box_1} alt="" />
        <div className="category-content1">
          <h6>Beautiful</h6>
       <h3>Wedding Ring</h3>
       <button>Shop Now</button>
</div>
      </div>

      <div className="category-main-right">
        <img src={all_product.box_2} alt="" />
      <div className="category">
        <h3>Earring </h3>
        <h5>Floary</h5>
     <button>Shop Now</button>
        </div>
        <img src={all_product.box_3} alt="" />
        <div className="category-content">
           <h6>New Arrivals</h6>
        <h5>Pearl Necklaces</h5>
        <button>Shop Now</button>
        </div>
       
      



      </div>

    </div>
  )
}

export default Category