import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Header from '../../Components/Header/Header'
import About from '../../Components/About/About'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Products/Product'
import Middle from '../../Components/Middle/Middle'
import Featured from '../../Components/Featured/Featured'
import Testimonial from '../../Components/Testimonials/Testimonial'
import Blog from '../../Components/Blog/Blog'


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Header/>
        <About/>
        <Category/>
        <Product/>
        <Middle/>
        <Featured/>
        <Testimonial/>
        <Blog/>
    
    </div>
  )
}

export default Home