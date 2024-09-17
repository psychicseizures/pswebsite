import React, { useState } from 'react';
import './ContactForm.css'; // Import your CSS for styling

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
  
    const result = await response.json();
    if (response.ok) {
      setSubmitted(true);
    } else {
      alert(result.message);
    }
  };
  

  return (
    <div className="contact-form-container">
      
      {submitted ? (
        <p>Thank you for your message! We will get back to you soon.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label htmlFor="name">
            Name:
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="email">
            Email:
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="message">
            Message:
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Send</button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
