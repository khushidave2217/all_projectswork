  import './App.css'
  import Navbar from './Components/Navbar/Navbar'
  import Contact from './Components/Contact/Contact'
  import Home from './Pages/Home/Home'
  // import About from './Pages/About/About'
  // import Portfolio from './Pages/Portfolio/Portfolio'
  // import Clients from './Pages/Clients/Clients'

  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

  function App() {
    return (
      <Router>
        <Navbar />     
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          {/* <Route path="/portfolio" element={<Portfolio />} /> */}
          {/* <Route path="/clients" element={<Clients />} /> */}
          {/* <Route path="/contact" element={<Contact />} /> */}
        </Routes>
        <Contact />
      </Router>
    )
  }

  export default App
