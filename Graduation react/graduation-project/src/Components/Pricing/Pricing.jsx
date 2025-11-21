import React from 'react'
import './pricing.css'

const Pricing = () => {
    return (
        <div className='price-container' id='pricing'>
            <h4>OUR PRICING</h4>
            <p className='main-p'>Pricing & Package</p>

            <div className="price-main">
                <div className="price">
                    <h6>BASIC PLAN</h6>
                    <h5>$<span>79K</span></h5>

                    <p className='price-p'> Far Far Far far away ,behind the world mountains,far from the countries vokalia and Consonantia,there live the blind texts.</p>
                    <button>GET STARTED</button>
                </div>

                <div className="price">
                    <h6>BEGINNER PLAN</h6>
                    <h5>$<span>109K</span></h5>

                    <p className='price-p'>Far Far Far far away ,behind the world mountains,far from the countries vokalia and Consonantia,there live the blind.</p>
                    <button>GET STARTED</button>
                </div>
                <div className="price">
                    <h6>PREMIUM PLAN</h6>
                    <h5>$<span>149K</span></h5>

                    <p className='price-p'>Far Far Far far away ,behind the world mountains,far from the countries vokalia and Consonantia,there live the blind.</p>
                     <button>GET STARTED</button>
                </div>
                <div className="price">
                    <h6>ULTIMATE PLAN</h6>
                    <h5>$<span>49K</span></h5>

                    <p className='price-p'>Far Far Far far away ,behind the world mountains,far from the countries vokalia and Consonantia,there live the blind.</p>
                    <button>GET STARTED</button>
                    </div>
                </div>
            </div>

    )
}

export default Pricing