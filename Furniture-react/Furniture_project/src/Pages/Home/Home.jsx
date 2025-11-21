import React, { useState } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Material from '../../Components/Material/Material'
import data from '../../Components/Assets/data'
import About from '../../Components/About/About'
import Design from '../../Components/Design/Design'
import Testimonial from '../../Components/Testimonials/Testimonial'
import testi, { Blog } from '../../Components/Assets/testimonialapi'
import RecentBlog from '../../Components/RecentBlog/RecentBlog'



const Home = () => {
  const [mymenu, setmymenu] = useState(data)
  const[mydata,setMydata] = useState(testi)
  const[myblog,setMyblog] = useState(Blog)

  return (
    <div>
      <Navbar />
      <Material mymenu={mymenu} />
      <About />
      <Design/>
      <Testimonial mydata={mydata}/>
      <RecentBlog myblog={myblog}/>
     
      
    </div>
  )
}

export default Home
