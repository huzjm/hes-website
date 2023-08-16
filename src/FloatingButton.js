import React from 'react';
import './FloatingButton.css'; // Create a corresponding CSS file

const FloatingButton = () => {
  // Replace the link below with your desired contact link or WhatsApp link
  const contactLink = 'https://wa.me/14034012929';

  return (
    <a href={contactLink} target="_blank" rel="noopener noreferrer" className="floating-button">
     <img src='/image/contactwhatsapp.png' alt="Logo" className="logo" />
    </a>
  );
};

export default FloatingButton;