import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home/Home'
import Loginsignup from "./Pages/Login-signup/Loginsignup"
import Cart from "./Pages/Cart/Cart"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/loginsignup' element={<Loginsignup />} />
        <Route path="/cart" element={<Cart />} />

    </Routes>
  )
}

export default App
