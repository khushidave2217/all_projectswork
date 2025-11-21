import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("home")

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />

      <ul className='nav-menu'>
        <Link to='/' onClick={()=>setMenu("home")} className={menu==="home"?"active" : ""}>Home</Link>
                <a href='#about' onClick={()=>setMenu("about")} className={menu==="about"?"active":""}>About</a>
                <a href='#portfolio' onClick={()=>setMenu("portfolio")} className={menu==="portfolio"?"active":""}>Portfolio</a>
                <a href='#client' onClick={()=>setMenu("clients")} className={menu==="clients"?"active":""}>Clients</a>
                <a href='#contact' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>Contact Us</a>
      </ul>
    </div>
  )
}

export default Navbar
