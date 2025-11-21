import React from "react";
import "./Appointment.css";
import bgImg from "../../Components/Asstes/all_product";
import all_product from "../../Components/Asstes/all_product";
 

const Appointment = () => {
  return (
    <section
      className="contact-section"
      style={{
        backgroundImage: `url(${all_product.inside})`,
      }}
    >
      <div className="contact-card">
        <p className="contact-small-title">CONTACT US</p>

        <h2 className="contact-main-title">Schedule an Appointment</h2>

        <div className="contact-divider"></div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" rows="3" />
          </div>

          <button type="submit" className="contact-btn">
            REQUEST A CALL BACK
          </button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
