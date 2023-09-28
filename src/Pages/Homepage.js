import React from 'react';
import './Homepage.css';
import '../App.css'


const Homepage = () => {
  document.title = 'Huzefa Engineering Services';
  
  
  return (
    <div className="homepage">
      <div className="hero-section">
      <img
    class="demo-bg"
    src='./image/homepage.jpg'
    alt=''
  />
        <div className="hero-content">
          <h1>Welcome to <strong>Huzefa Engineering Services</strong></h1>
          <p>Fabricating Excellence for 25 Years</p>
        
        </div>
      </div>
      
<div className="content">
        
        <section id="directors-message">
  
       
</section>


<section id="information-cards">
  
  <div className="info-card">
    <h3>About Us</h3>
    <p>At HES, we're more than just a fabrication company. We're a team of dedicated experts with 25 years of experience in delivering top-notch solutions to meet your industrial needs. Our commitment to excellence drives everything we do.</p>
  </div>
  <div className="info-card">
  <h3>Our Expertise</h3>
  <ul>
          <li>
            <p><strong>Heat Exchangers:</strong> Explore our efficient heat exchanger solutions, including Shell and Tube Heat Exchangers and Plate and Fin Heat Exchangers.</p>
          </li>
          <li>
            <p><strong>Gratings:</strong> Discover our sturdy and secure gratings, available in MS and SS options.</p>
          </li>
          <li>
            <p><strong>Storage Tanks:</strong> Safeguard your materials with our reliable storage tanks and pressure vessels.</p>
          </li>
          <li>
            <p><strong>Bulk Movement:</strong> Streamline material transport with our conveyors, hoppers, and bucket elevators.</p>
          </li>
          <li>
            <p><strong>Pre-fabricated Structures:</strong> Find versatile solutions with our sheds, railings, and monkey ladders.</p>
          </li>
          <li>
            <p><strong>ShopInShop:</strong> Explore our diverse range of industrial supplies, including welding equipment and hardware.</p>
          </li>
        </ul>
  </div> <div className="info-card">
  <h3>Get in Touch:</h3>
        <p>Ready to partner with us? <a href="/contactus">Contact us</a> today to discuss your needs, request a quote, or learn more about how we can help you succeed.</p>
  </div>
  {/* Add more info cards as needed */}
</section>
      
     
   
      <section id="get-in-touch">
       
      </section>

     


      

    
    </div>
    </div>
  );
};

export default Homepage;