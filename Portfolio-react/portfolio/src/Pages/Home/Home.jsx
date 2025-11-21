import React from 'react'
import Header from '../../Components/Header/Header'
import About from '../../Components/About/About'
import Portfolio from '../../Components/Portfolio/Portfolio'
import Client from '../../Components/Client/Client'

const Home = () => {
  return (
    <div>
        <Header/>
        <About/>
        <Portfolio/>
        <Client/>
        
    </div>
  )
}

export default Home