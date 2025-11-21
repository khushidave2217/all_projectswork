import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
import all_product from '../Assets/all_product';

const Navbar = () => {
    const [menu, setMenu] = useState("home");

    return (
        <>
        <div className='navbar-container'>
            <div className="navbar-logo">
                <h1>Furni.</h1>
            </div>

            <ul className='navbar'>
                <li><Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link> </li>
                <li> <Link to='/shop' onClick={() => setMenu("shop")} className={menu === "shop" ? "active" : ""} >Shop</Link> </li>
                <li> <Link to='/services' onClick={() => setMenu("services")} className={menu === "services" ? "active" : ""} >Services</Link> </li>
                 <li><Link to='/blog' onClick={() => setMenu("blog")} className={menu === "blog" ? "active" : ""}>Blog</Link> </li>
                <li> <Link to='/contact us' onClick={() => setMenu("contact us")} className={menu === "contact us" ? "active" : ""} >Contact Us</Link> </li>
            </ul>
        </div>
        <div className="header-section">
         
            <div className="header-content">
                <h1>Modern Interior Design <br /> Studio</h1>
                <p>Donec vitae odio quis nisi dapibus malesuada.Nullam ac aliquet velit.Aliqum vulputate velit imperdiet dolor tempor tristique. </p>

                <button className='shop-button'>Shop Now</button> <button>Explore</button>
            </div>
               <div className="header-section-img">
                <img src={all_product.navbar_img} alt="" />
            </div>
        </div>
        </>
    )
}

export default Navbar
