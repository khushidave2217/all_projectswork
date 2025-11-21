import React, { createContext } from "react";
import { about, featured, story, testimonials,serviceStories,featuredservice } from "../Components/Asstes/all_product";

export const Shopcontext = createContext(null);

const ShopcontextProvider = ({ children }) => {
  const contextvalue = { about,featured,testimonials,story,serviceStories,featuredservice };

  return (
    <Shopcontext.Provider value={contextvalue}>
      {children}
    </Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
