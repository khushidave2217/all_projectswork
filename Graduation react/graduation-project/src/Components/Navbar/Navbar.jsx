import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import './Navbar.css'

const Navbar = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <h1>ACADEMIA</h1>
        <p>ONLINE EDUCATION & LEARNING</p>
      </div>
       <div className="social-icons">
          <a href="https://facebook.com" target="_blank">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="https://instagram.com" target="_blank">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>

           <a href="https://twitter.com" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>

          <a href="https://youtube.com" target="_blank">
            <FontAwesomeIcon icon={faYoutube} className="icon" />
          </a>

          
        </div>

      <ul className="navbar">
        <Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
        <a href="#all courses" onClick={() => setMenu("all courses")} className={menu === "all courses" ? "active" : ""}>All Courses</a>
        <a href="#about" onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</a>
        <a href="#team" onClick={() => setMenu("team")} className={menu === "team" ? "active" : ""}>Team</a>
        <a href="#pricing" onClick={() => setMenu("pricing")} className={menu === "pricing" ? "active" : ""}>Pricing</a>
        <a href="#journal" onClick={() => setMenu("journal")} className={menu === "journal" ? "active" : ""}>Journal</a>
        <a href="#contact" onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</a>
        <button>GET CERTIFICATE</button>
      </ul>
    </div>
  )
}

export default Navbar
