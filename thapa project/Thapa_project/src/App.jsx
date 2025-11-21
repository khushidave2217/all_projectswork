import { useState } from 'react'
import './App.css'
import Header from './Component/Header/Header'
import Menu from './Component/Header/Menuapi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
function App() {
    const[menudata,setMenudata] = useState(Menu)
  return (
    <>
      <div>
      
        <BrowserRouter>
           <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Header menudata={menudata} />
      
   
    </BrowserRouter>
      </div>
     
     
    </>
  )
}

export default App
