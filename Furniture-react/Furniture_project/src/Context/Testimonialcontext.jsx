import React, { createContext } from 'react'
import  testi, {  blogdata } from '../Components/Assets/testimonialapi'

export const Testimonialcontext = createContext(null)

const TestimonialcontextProvider = (props) => {
  const contextValue = {  blogdata,testi }

  return (
    <Testimonialcontext.Provider value={contextValue}>
      {props.children}
    </Testimonialcontext.Provider>
  )
}

export default TestimonialcontextProvider
