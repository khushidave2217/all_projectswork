import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Home from './Pages/Home/Home'
import ShopcontextProvider from './Context/Shopcontext'  

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Appointment from './Components/Appointment/Appointment'
import Footer from './Components/Footer/Footer'
import Our from './Pages/Our/Our'
import Service from './Pages/Services/Service'
import Property from './Pages/Property/Property'
import Contact from './Pages/Contact/Contact'

function App() {
  return (
    <ShopcontextProvider>  
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
             <Route path="/Our" element={< Our/>} />
              <Route path="/services" element={< Service/>} />
                 <Route path="/property" element={< Property/>} />
                     <Route path="/contact" element={< Contact/>} />
        </Routes>
        <Appointment/>
        <Footer/>
      </Router>
    </ShopcontextProvider>
  )
}

export default App
