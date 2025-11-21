import React from 'react'
import './Portfolio.css'
import portfolio_1 from '../../assets/portfolio-1.png'
import portfolio_2 from '../../assets/portfolio-2.png'
import portfolio_3 from '../../assets/portfolio-3.png'
import portfolio_4 from '../../assets/portfolio-4.png'
import portfolio_5 from '../../assets/portfolio-5.png'
import portfolio_6 from '../../assets/portfolio-6.png'

const Portfolio = () => {
  return (
    <div className='portfolio' id='portfolio'>
               <h1>My Portfolio</h1>
                <p>I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help businesses achieve their goals and create  a strong online presence.</p>

           <div className="portfolio-grid">
        <img src={portfolio_1} alt="" />
        <img src={portfolio_2} alt="" />
        <img src={portfolio_3} alt="" />
        <img src={portfolio_4} alt="" />
        <img src={portfolio_5} alt="" />
        <img src={portfolio_6} alt="" />
      </div>
                <button>See more</button>
    </div>
  )
}

export default Portfolio