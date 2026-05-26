import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
    emailjs
      .sendForm(
        "service_eq4g7f8",
        "template_7tkjwb1",
        form.current,
        "7qIg75-rnm5DkE5n1"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
        },
        (error) => {
          
          alert("Failed to send message. Please try again.");
          form.current.reset();
        }
      );
      
  };

  return (
    <section className="contact-section">
      <div className="contact-form">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={sendEmail}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
