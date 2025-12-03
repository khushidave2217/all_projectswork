import React, { useState } from "react";
import "./Appointment.css";
import all_product from "../../Components/Asstes/all_product";
import axios from "axios";

const Appointment = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    axios.post("http://localhost:5000/appo", { name, email, message })
      .then((result) => {
        console.log("Saved:", result.data)
        alert("Appointment submitted successfully!")
        setName("");
        setEmail("");
        setMessage("")
      })

  }

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

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="3"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
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
