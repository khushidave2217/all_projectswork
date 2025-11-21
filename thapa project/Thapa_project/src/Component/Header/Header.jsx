import React, { useState } from 'react'
import './Header.css'
import Menu from '../Header/Menuapi'

const Header = ({menudata}) => {
  return (
  <>
    {menudata.map((curElem)=>{
         const { id, name, category, description } =curElem;
        return(
  <div className='card-container'>
            <div className="card">
                <div className="card-body">
                    <span className='card-number card-circle subtle'>{id}</span>
                    <span className='card-author subtle'>{name}</span>
                    <h2 className='card-title'>Maggi</h2>
                    <span className='card-description subtle'>
                       {description}
                    </span>
                    <div className="card-read">{category}</div>
                </div>
            
            </div>

    </div>
        )
    })}
  
  
    </>
  )
}

export default Header