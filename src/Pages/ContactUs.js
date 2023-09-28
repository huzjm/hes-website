import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  document.title = 'HES | Contact US';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, phone, subject, message } = formData;
    const encodedMessage = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nPhone: ${phone}\nMessage: ${message}`);
const whatsappLink = `https://wa.me/?text=${encodedMessage}`;
window.open(whatsappLink, "_blank");

    // Send an email using SendGrid
    // const msg = {
    //   to: 'recipient@example.com', // Replace with the recipient's email address
    //   from: email,
    //   subject: subject,
    //   text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    // };

  };
  return (
    <div className="contact-container">
      <div className="contact-form">
        <h1>Contact Us</h1>
        <p>Email: <a href="mailto:info@huzefaengineering.com">info@huzefaengineering.com</a></p>
        <p>Phone: <a href="https://wa.me/923001886226">+92 3001886226</a></p>
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject:</label>
            <select
              id="subject"
              name="subject"
              onChange={handleChange}
            >
              <option value="General Inquiry">General Inquiry</option>
              <option value="Technical Support">Technical Support</option>
              <option value="Sales">Sales</option>
              {/* Add more subject options */}
            </select>
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;