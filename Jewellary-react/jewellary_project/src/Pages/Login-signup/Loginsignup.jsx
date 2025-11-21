import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Loginsignup.css'

const Loginsignup = () => {

    const [action,setAction] = useState("Sign Up")
  return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>

        <div className="inputs">
            {action ==="Login"?<div></div>:<div className="input">
                <i className="fa-solid fa-user icon"></i>
                <input type="text" placeholder="Enter your name" />
            </div>}
            

            <div className="input">
                <i className="fa-solid fa-envelope icon"></i>
                <input type="email" placeholder="Enter your email" />
            </div>

            <div className="input">
                <i className="fa-solid fa-lock icon"></i>
                <input type="password" placeholder="Enter your password" />
            </div>
        </div>
        {action==="Sign Up"?<div></div>: <div className="forgot-password">Lost Password? <span>Click Here!</span></div>}
       
        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up </div>
               <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
        </div>
    </div>
  )
}

export default Loginsignup
