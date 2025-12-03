import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { about, featured, story, testimonials, featuredservice } from "../Components/Asstes/all_product";

export const Shopcontext = createContext(null);

const ShopcontextProvider = ({ children }) => {

  const [serviceStories, setServiceStories] = useState([]);

  // Fetch Services From API
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/service/getservices")
      .then((res) => {
        setServiceStories(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const contextvalue = {  about,  featured, testimonials, story, featuredservice,serviceStories  };

  return (
    <Shopcontext.Provider value={contextvalue}>
      {children}
    </Shopcontext.Provider>
  );
};

export default ShopcontextProvider;
