// ContactSupport.jsx
import React from 'react';
import './ContactSupport.css';

function ContactSupport() {
  return (
    <div className="contact-support">
      <h2>Contact Support</h2>
      <p>If you need assistance or have any questions, feel free to reach out to our support team.</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit" className="primary-button">Submit</button>
      </form>
    </div>
  );
}

export default ContactSupport;
