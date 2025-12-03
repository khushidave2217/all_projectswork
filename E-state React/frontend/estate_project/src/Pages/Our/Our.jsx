import React, { useContext } from "react";

import "./Our.css";
import { Shopcontext } from '../../Context/Shopcontext'
import heroimg from "../../Components/Asstes/Our.jpg";
import all_product from "../../Components/Asstes/all_product";

const Our = () => {
     const { story } = useContext(Shopcontext)

  return (
    <>
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="hero-content">
        <h4 className="our-top-text">
        About
        </h4>

        <h1 className="our-title">
         Discover Our Story and Expertise
        </h1>
      </div>
    </section>


  <section className="passion">
      <div className="passion-inner">
        <div className="passion-image-wrapper">
          <img src={all_product.about_img} alt="Modern house"className="passion-image"
 />
        </div>

        <div className="passion-content">

          <h1 className="passion-title">
            Connecting people with
            <br />
            perfect homes is our
            <br />
            passion.
          </h1>

          <div className="passion-divider" />

          <p className="passion-description">
            With a genuine passion for helping people find their dream homes,
            we are dedicated to connecting buyers and sellers in the real estate
            market. Trust us to make your home buying or selling experience
            seamless and satisfying.
          </p>

          <button className="passion-btn">READ MORE</button>
        </div>
      </div>
    </section>


    <section className="approach-main">
                <h6>CLIENT-CENTRIC APPROACH</h6>
                <hr />
                <h1>Our Clients are our priority.Exceptional customer service and personalized experiences define our company culture.</h1>
    </section>


   <section className="story-section">
  <div className="story-image-wrapper">
    <img src={all_product.us} alt="Our story" className="story-image" />
  </div>
  <div className="story-content">
    {story.map((item) => (
      <div key={item.id} className="story-card">
        <h2 className="story-title">{item.title}</h2>
        <hr />
        <p className="story-text">{item.text}</p>
        <p className="story-description">{item.Description}</p>
      </div>
    ))}
  </div>
</section>





</>
  );
};

export default Our;
