
import React from 'react'
import Hero from '../Components/Hero/Hero'  // Hero ni correct path aapjo
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import Newcollection from '../Components/Newcollections/Newcollection'
import Newletter from '../Components/Newsletter/Newletter'
import Footer from '../Components/Footer/Footer'


const Shop = () => {
  return (
    <div>
        <Hero />
        <Popular />
        <Offers />
        <Newcollection />
        <Newletter />
    </div>
  )
}

export default Shop
