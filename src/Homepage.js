import React from 'react';
import './Homepage.css';
import './App.css'
const Homepage = () => {
  return (<div className="content">
    <div className="homepage">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to Huzefa Engineering Services</h1>
          <p>Your Trusted Partner in Fabrication and Engineering Solutions</p>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="about-section">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            Huzefa Engineering Services has been a leading provider of fabrication and engineering solutions since 1995. With a commitment to quality and innovation, we specialize in delivering customized products and services to meet our clients' unique needs.
          </p>
        </div>
      </div>
      <div className="services-section">
        <div className="services-content">
          <h2>Our Services</h2>
          <p>Explore our range of fabrication and engineering services:</p>
          <ul>
            <li>Heat Exchangers</li>
            <li>Pressure Vessels</li>
            <li>Industrial Supplies</li>
            {/* Add more services */}
          </ul>
          <button>Learn More</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Homepage;