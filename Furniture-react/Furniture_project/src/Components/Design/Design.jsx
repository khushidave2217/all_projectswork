import React from 'react'
import all_product from '../Assets/all_product'
import './Design.css'

const Design = () => {
  return (
    <div className='design-container'>

      <div className="design-left">
        <img src={all_product.dots_green} alt="dots" className="dots" />
        <div className="design-images">
          <div className="img-box big">
            <img src={all_product.img_grid_1} alt="grid1" />
          </div>
          <div className="img-box small top">
            <img src={all_product.img_grid_2} alt="grid2" />
          </div>
          <div className="img-box small bottom">
            <img src={all_product.img_grid_3} alt="grid3" />
          </div>
        </div>
      </div>

      {/* RIGHT TEXT SIDE */}
      <div className="design-right">
        <h2>We Help You Make Modern Interior Design</h2>
        <p>
          Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio quis nisl 
          dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet 
          dolor tempor tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada.
        </p>
        <ul>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
          <li>Donec vitae odio quis nisl dapibus malesuada</li>
        </ul>
        <button className="explore-btn">Explore</button>
      </div>
    </div>
  )
}

export default Design
