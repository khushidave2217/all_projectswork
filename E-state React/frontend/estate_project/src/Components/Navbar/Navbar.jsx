import React, { useState } from 'react'
import all_product from '../Asstes/all_product'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
    return (
        <div className='navbar-container'>
            <div className="navbar-logo">
                <h1>Real <span>Estate</span></h1>
            </div>
            <ul className='ul-main'>
                <li><Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link></li>
                <li><Link to='/Our' onClick={() => setMenu("about")} className={menu === "about" ? "active" : ""}>About</Link></li>
                <li><Link to='/services' onClick={() => setMenu("service")} className={menu === "service" ? "active" : ""}>Services</Link></li>
                <li><Link to='/property' onClick={() => setMenu("property")} className={menu === "property" ? "active" : ""}>Properties</Link></li>
                <li><Link to='/contact' onClick={() => setMenu("contact")} className={menu === "contact" ? "active" : ""}>Contact</Link></li>



            </ul>
        </div>
       
    )
}

export default Navbar