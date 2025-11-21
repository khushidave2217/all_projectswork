import React from 'react'
import data from '../Assets/data'
import './Material.css'

const Material = () => {
  return (
    <div className='material-container'>
      {/* Left Section */}
      <div className="material-text">
        <h2>Crafted with excellent <br />material.</h2>
        <p>
          Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
          Aliquam vulputate velit imperdiet dolor tempor tristique.
        </p>
        <button>Explore</button>
      </div>

      {/* Right Section */}
      <div className="material-main">
        {data.map((item) => (
          <div key={item.id} className="material-card">
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <p>₹{item.price}.00</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Material
