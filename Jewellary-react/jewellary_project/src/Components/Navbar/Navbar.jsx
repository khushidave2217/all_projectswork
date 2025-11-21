import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import all_product from '../Assets/all_product'

import './Navbar.css'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
    return (
        <div className='navbar-container'>
            <img src={all_product.logo} alt="" />
            <div className='navbar-ul'>
                <ul>
                    <Link to='/' onClick={() => setMenu("home")} className={"home" ? "active" : ""}>Home</Link>
                    <a href="#category" onClick={() => setMenu("category")} className={"category" ? "active" : ""}>Category</a>
                    <a href="#product" onClick={() => setMenu("product")} className={"product" ? "active" : ""}>Products</a>
                    <a href="#testimonial" onClick={() => setMenu("testimonial")} className={"testimonial" ? "active" : ""}>Testimonials</a>
                    <a href="#blog" onClick={() => setMenu("blog")} className={"blog" ? "active" : ""}>Blog</a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar