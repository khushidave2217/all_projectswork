import React, { useContext } from "react";
import "./Service.css";
import { Shopcontext } from '../../Context/Shopcontext'
import heroimg from "../../Components/Asstes/service.jpg"; 



const Service = () => {
    const { serviceStories } = useContext(Shopcontext)
  return (
     <>
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="hero-content">
        <h4 className="service-top-text">
          Services
        </h4>

        <h1 className="service-title">
         We offer a wide Range of Services
        </h1>
      </div>
    </section>


  <section className="servicestory-section">
  <div className="servicestory-content">
    {serviceStories.map((item, index) => (
      <div key={item.id} className={`servicestory-card ${index % 2 === 1 ? "reverse" : ""}`}>
        <div className="servicestory-card-image-wrap">
          <img
            src={item.img}
            alt={item.title}
            className="servicestory-card-image"
          />
        </div>
        <div className="servicestory-card-text">
          <span className="servicestory-number">
            {String(item.id).padStart(2, "0")}
          </span>
          <h2 className="servicestory-title">{item.title}</h2>
       <hr />
          <p className="servicestory-description">{item.Description}</p>
        </div>
      </div>
    ))}
  </div>
</section>

</>
  );
};

export default Service;
