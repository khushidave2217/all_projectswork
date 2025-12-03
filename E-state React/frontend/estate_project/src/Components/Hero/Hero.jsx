import React from "react";
import "./Hero.css";
import heroimg from "../../Components/Asstes/header_1.jpg"; 
import AuthPopup from "../AuthPopup/AuthPopup";

const Hero = () => {
  return (
    <>
    <AuthPopup />
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="hero-content">
        <h4 className="hero-top-text">
          Discover Your Dream Home with Us
        </h4>

        <h1 className="hero-title">
          Find the Perfect Property for Your <br /> <span>Lifestyle</span> 
        </h1>

        <button className="hero-btn">START SEARCHING</button>
      </div>
    </section>
    </>
  );
};

export default Hero;
