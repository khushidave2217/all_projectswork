import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="contact-header">
        <h2>Contact</h2>
      </div>

      <div className="contact-container">
        <div className="contact-main">

          <form className="contact-form">
            <h3>Get In Touch</h3>

            <div className="input-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </div>

            <div className="input-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="input-group">
              <label>Subject</label>
              <input type="text" placeholder="Enter subject" required />
            </div>

            <div className="input-group">
              <label>Message</label>
              <textarea placeholder="Write your message..." rows="5" required></textarea>
            </div>

            <button type="submit" className="contact-btn">Send Message</button>
          </form>

          <div className="contact-info">
            <h3>Contact Info</h3>
            <p><i className="fa-solid fa-location-dot"></i> Ahmedabad, Gujarat</p>
            <p><i className="fa-solid fa-envelope"></i> support@example.com</p>
            <p><i className="fa-solid fa-phone"></i> +91 98765 43210</p>
          </div>

        </div>
      </div>
    </>
  );
};

export default Contact;
