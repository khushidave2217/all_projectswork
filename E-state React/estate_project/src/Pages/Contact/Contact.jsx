import React from 'react'
import heroimg from "../../Components/Asstes/contact_main.jpg"; 
import './Contact.css'

const Contact = () => {
  return (
    <>
   <section
         className="hero-section"
         style={{ backgroundImage: `url(${heroimg})` }}
       >
         <div className="hero-content">
           <h4 className="our-top-text">
          Contact Us
           </h4>
   
           <h1 className="our-title">
           We’re Just a Phone Call or Message Away
           </h1>
         </div>
       </section>


        
    <section className="contact-section">
      {/* Left side text + info */}
      <div className="contact-left">
        <h2 className="contact-heading">
          We are excited to connect with you and assist you with your
          <br />
          real estate needs
        </h2>

        <div className="contact-info-block">
          <div className="contact-info-item">
            <p className="contact-label">Phone</p>
            <p className="contact-value">P: 555-1234-678</p>
          </div>

          <div className="contact-info-item">
            <p className="contact-label">Email</p>
            <p className="contact-value">contact@info.com</p>
          </div>

          <div className="contact-info-item">
            <p className="contact-label">Address</p>
            <p className="contact-value">
              A: 13 Fifth Avenue, New York, NY 101660
            </p>
          </div>
        </div>
      </div>

      {/* Right side form card */}
      <div className="appointment-right">
        <div className="appointment-card">
          <p className="appointment-card-label">Contact Us</p>
          <h3 className="appointment-card-title">Reach Out To Us</h3>
          <div className="appointment-card-underline" />

          <form className="appointment-form">
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Enter your name" />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Enter your email" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="4" placeholder="Write your message" />
            </div>

            <button type="submit" className="contact-btn">
              REQUEST A CALL BACK
            </button>
          </form>
        </div>
      </div>
    </section>


     <section className="map-section">
  <div className="map-wrapper">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235013.748423512!2d72.41492510525848!3d23.020474104691324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1763711200094!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Ahmedabad map"
    ></iframe>
  </div>
</section>

       </>
  )
}

export default Contact