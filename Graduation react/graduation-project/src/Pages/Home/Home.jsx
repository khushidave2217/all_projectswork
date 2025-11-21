import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import Learn from '../../Components/Learn/Learn'
import Banner from '../../Components/Banner/Banner'
import Course from '../../Components/Courses/Course'
import Browse from '../../Components/Browse/Browse'
import Testimonial from '../../Components/Testimonials/Testimonial'
import Blog from '../../Components/Blog/Blog'
import Pricing from '../../Components/Pricing/Pricing'
import Newsletter from '../../Components/Newsletter/Newsletter'

const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>
        <Header/>
        <Learn/>
        <Banner/>
        <Course/>
        <Browse/>
        <Testimonial/>
        <Blog/>
        <Pricing/>
        <Newsletter/>
    </div>
  )
}

export default Home