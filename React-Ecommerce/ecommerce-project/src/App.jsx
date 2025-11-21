import './App.css'
import Navbar from './Components/Navbar/Navbar'
import LoginSignup from './Pages/LoginSignup'
import Product from './Pages/Product'
import Shopcategory from './Pages/Shopcategory'
import Shop from './Pages/Shop'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assests/banner_mens.png'
import women_banner from './Components/Assests/banner_women.png'
import kid_banner from './Components/Assests/banner_kids.png'

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<Shopcategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<Shopcategory banner={kid_banner} category="kid" />} />
                  <Route path="/product/:productId" element={<Product />} />

          <Route path='/login' element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
