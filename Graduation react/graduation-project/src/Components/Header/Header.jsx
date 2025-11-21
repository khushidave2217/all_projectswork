import React from 'react'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header-section'>
        <h2>WELCOME To ACADEMIA</h2>
        <h1>Best Online Education <br /> Expertise</h1>

        <p>Far far away, behind the world mountains, far from the countries <br /> Vokalia and Consonantia, there live the blind texts.</p>

        <button className='start-now' onClick={()=>navigate('/Registration')}>
          GET STARTED NOW <FontAwesomeIcon icon={faArrowRight} className="icon" />
        </button>

        <button 
          className='visit' 
          onClick={() => navigate('/browse')}
        >
          VIEW COURSE <FontAwesomeIcon icon={faArrowRight} className="icon" />
        </button>
    </div>
  )
}

export default Header
