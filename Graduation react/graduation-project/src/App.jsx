
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Footer from './Components/Footer/Footer'

import Browse from './Components/Browse/Browse'
import Registration from './Components/Registration/Registration'

function App() {
  return (
    <> 
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path="/browse" element={<Browse />} />
        <Route path="/registration" element={<Registration />} />
   
    </Routes>
     <Footer/>
  </>
  )
}

export default App
