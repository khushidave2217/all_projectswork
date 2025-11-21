import React from 'react'
import './Header.css'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Loginsignup'); 
  }
  return (
    <div className='header-section'>
         
        <h1>Family Jewellary <br />Collection</h1>
        <p>Designer jewelry,Necklaces,Braceletes,Earing</p>

        <button onClick={handleClick}>Shop Now</button>
    </div>
  )
}

export default Header