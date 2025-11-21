import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar-container'>
      <div className="navbar-main">
        <ul>
          <li>
            <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
          </li>
          <li>
            <a href="#about" onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</a>
          </li>
          <li>
            <a href="#service" onClick={() => setMenu("service")} className={menu === "service" ? "active" : ""}>Service</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
