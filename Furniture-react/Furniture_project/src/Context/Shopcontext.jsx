import React, { createContext } from 'react'
import data, { shopdata } from '../Components/Assets/data'


export const Shopcontext = createContext(null)

const ShopcontextProvider = (props)=>{
    const contextvalue  = {data,shopdata}

    return(
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )
}
  

export default ShopcontextProvider