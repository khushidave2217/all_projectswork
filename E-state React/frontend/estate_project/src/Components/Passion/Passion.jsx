import React from "react";
import "./Passion.css";   // CSS file import
import all_product from "../Asstes/all_product";

const Passion = () => {
  return (
    <section className="passion">
      <div className="passion-inner">
        <div className="passion-image-wrapper">
          <img src={all_product.outside} alt="Modern house"className="passion-image"
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
  );
};

export default Passion;
