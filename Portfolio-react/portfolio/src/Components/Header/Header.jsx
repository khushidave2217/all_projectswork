import React from 'react';
import image from '../../assets/image.jpeg';
import './Header.css'; 
const Header = () => {
  

  return (
    <div className='header-section' id='home'>
      <div className="header-section-left">
        <h2>Hello,</h2><br />
        <h1>I'am <span>Khushi</span></h1><br />
        <h1 className='h1-sub'>MernStack Developer</h1>
        <p className='h1-p'>I am a skilled and passionate web designer
          &nbsp;&nbsp;&nbsp; with experience in creating visually appealing.</p>
        <button>Hire me</button>
      </div>

      <div className="header-section-right">
        <img src={image} alt="header" />
      </div>
    </div>
  )
}

export default Header;
