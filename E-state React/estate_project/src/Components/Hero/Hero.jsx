import React from "react";
import "./Hero.css";
import heroimg from "../../Components/Asstes/header_1.jpg"; 

const Hero = () => {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="hero-content">
        <h4 className="hero-top-text">
          Discover Your Dream Home with Us
        </h4>

        <h1 className="hero-title">
          Find the Perfect Property <br /> for Your Lifestyle
        </h1>

        <button className="hero-btn">START SEARCHING</button>
      </div>
    </section>
  );
};

export default Hero;
