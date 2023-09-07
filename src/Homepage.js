import React from 'react';
import './Homepage.css';
import './App.css'
const Homepage = () => {
  return (<div className="content">
    <div className="homepage">
      <div className="hero-section">
      <img
    class="demo-bg"
    src='./image/homepage.jpg'
    alt=''
  />
        <div className="hero-content">
          <h1>Welcome to Huzefa Engineering Services</h1>
          <p>Crafting Excellence for 25 Years</p>
         
        </div>
      </div>
      
      <section id="about-us">
        <h2>About Us:</h2>
        <p>At HES, we're more than just a fabrication company. We're a team of dedicated experts with 25 years of experience in delivering top-notch solutions to meet your industrial needs. Our commitment to excellence drives everything we do.</p>
      </section>

      <section id="our-expertise">
        <h2>Our Expertise:</h2>
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
            <p><strong>General Supplies:</strong> Explore our diverse range of industrial supplies, including welding equipment and hardware.</p>
          </li>
        </ul>
      </section>

      <section id="current-projects">
        <h2>Current Projects:</h2>
        <p>We're proud to be working on cutting-edge projects, including a 9MW solar installation. Our dedication to innovation and sustainability is evident in every endeavor we undertake.</p>
      </section>

      <section id="our-workshop">
        <h2>Our Workshop:</h2>
        <p>Our major workshop is located in Hub, Balochistan, equipped with state-of-the-art facilities to bring your projects to life.</p>
      </section>

      <section id="get-in-touch">
        <h2>Get in Touch:</h2>
        <p>Ready to partner with us? <a href="mailto:contact@yourcompany.com">Contact us</a> today to discuss your needs, request a quote, or learn more about how we can help you succeed.</p>
      </section>

      <section id="testimonials">
        <h2>Testimonials:</h2>
        <p>Don't just take our word for it. Hear from our satisfied clients about the impact of our solutions on their businesses.</p>
      </section>

      <section id="blog">
        <h2>Blog:</h2>
        <p>Stay informed with the latest industry trends, news, and insights through our blog. Explore valuable content to support your decision-making.</p>
      </section>

      <section id="image-gallery">
        <h2>Image Gallery:</h2>
        <p>View stunning images of our projects, products, and team in action. See firsthand the quality and craftsmanship we deliver.</p>
      </section>

      <section id="follow-us">
        <h2>Follow Us:</h2>
        <p>Stay connected with us on social media. Join our community to receive updates, industry news, and exclusive content.</p>
      </section>
    </div>
    </div>
  );
};

export default Homepage;