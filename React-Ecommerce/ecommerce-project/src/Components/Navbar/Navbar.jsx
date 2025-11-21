import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../Assests/logo.jpg'


const Navbar = () => {
  const [menu,setMenu] = useState("shop")
  return (
   <div className="navbar">
  <img src={logo} alt="logo" />
  <p>SHOPPER</p>
  <ul className="nav-menu">
    <li onClick={()=>{setMenu("shop")}}><Link style={{ textDecoration:"none" ,color: "black"}} to = '/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none" ,color: "black"}} to = '/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("womens")}}><Link style={{textDecoration:"none" ,color: "black"}} to = '/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
    <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:"none" ,color: "black"}} to = '/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
  </ul>
  <div className="nav-login-cart">
   <Link to ='/login'> <button>Login</button></Link>
  </div>
</div>

  )
}

export default Navbar