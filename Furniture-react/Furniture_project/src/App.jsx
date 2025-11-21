import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Shop from './Pages/Shop/Shop'
import Blog from './Pages/Blog/Blog'
import ShopContextProvider from './Context/Shopcontext'
import TestimonialcontextProvider from './Context/Testimonialcontext'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Footer from './Components/Footer/Footer'
import Services from './Pages/Services/Services'
import Contact from './Pages/Contact/Contact'
// import Underabout from './Pages/Underabout/Underabout'



function App() {
  return (
    <TestimonialcontextProvider>
      <ShopContextProvider>
        <BrowserRouter>
      
         
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/blog' element={<Blog />} />
              {/* <Route path='/underabout' element={<Underabout />} />
              */}
               <Route path='/services' element={<Services />} />
                <Route path='/contact us' element={<Contact />} />
               
          </Routes>
<Footer/>
        
        </BrowserRouter>
      </ShopContextProvider>
    </TestimonialcontextProvider>
  )
}

export default App
