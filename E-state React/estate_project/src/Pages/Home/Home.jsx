import React from 'react'
import Hero from '../../Components/Hero/Hero'
import About from '../../Components/About/About'
import Featured from '../../Components/Featured/Featured'
import Testimonial from '../../Components/Testimonial/Testimonial'
import Passion from '../../Components/Passion/Passion'

const Home = () => {
  return (
    <div>
       <Hero/>
       <About/>
       <Featured/>
       <Testimonial/>
       <Passion/>
    </div>
  )
}

export default Home