import React,{useState} from 'react';
import InfoPageTemplateTemp from '../Default Templates/InfoPageTemplateTemp';

import {Carousel} from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
const Gratings = () => {
  document.title = 'HES | Gratings';
  const title = 'Gratings';
  const images = ['/image/gratings1.jpg','/image/gratings2.jpg','/image/gratings3.jpg','/image/gratings4.jpg'];
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
 
  

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const content = (
    <div>
      <header>
        <h1>Gratings</h1>
        <p>Sturdy, Secure, and Customizable</p>
      </header>
      <section id="about">
        <h2>Welcome to our Gratings section</h2>
        <p>where we showcase our range of high-quality gratings designed to enhance safety and functionality across various industries.</p>
      </section>
      <section id="why-choose">
        <h2>Why Choose Our Gratings?</h2>
        <ul>
          <li>
            <p><strong>Sturdiness:</strong> Our gratings are built to withstand heavy loads and provide a secure surface for a variety of applications.</p>
          </li>
          <li>
            <p><strong>Customization:</strong> We offer customizable options to tailor the gratings to your specific requirements, ensuring they meet your operational needs perfectly.</p>
          </li>
        </ul>
      </section>
      {showModal && (
        <div className="modal" onClick={closeModal}>
          
          <img
            src={images[selectedImageIndex]}
            alt=""
            className="enlarged-image"
          />
        </div>
      )}
       <div className="info-slideshow">
          <Carousel showArrows={true}
          showThumbs={true}
          infiniteLoop={true}
          emulateTouch={true}
          selectedItem={selectedImageIndex}
          showStatus={false}
          showIndicators={false}
          dynamicHeight={false} // Set to false to control the height
          centerMode={false}
          >
            {images.map((image, index) => (
              <div key={index} onClick={() => openModal(index)}>
                <img src={image} alt="" className="info-image"  />
              </div>
            ))}
          </Carousel>
        </div>
      <section id="types">
        <h2>Types of Gratings:</h2>
        <h3>MS Gratings:</h3>
        <ul>
          <li>
            <p><strong>Built for Strength:</strong> Our MS gratings are engineered for robustness, making them ideal for industrial flooring, walkways, and platforms.</p>
          </li>
        </ul>
        <h3>SS Gratings:</h3>
        <ul>
          <li>
            <p><strong>Corrosion-Resistant:</strong> SS gratings are designed for environments demanding corrosion resistance and hygiene, such as food processing and marine industries.</p>
          </li>
        </ul>
      </section>
      <section id="applications">
        <h2>Applications:</h2>
        <p>Our gratings find applications in a wide range of industries and scenarios, including:</p>
        <ul>
          <li>
            <p><strong>Industrial Flooring:</strong> Providing a sturdy and secure surface for heavy traffic and equipment.</p>
          </li>
          <li>
            <p><strong>Walkways and Platforms:</strong> Ensuring safe access in various environments.</p>
          </li>
          <li>
            <p><strong>Hygienic Environments:</strong> Ideal for industries where cleanliness is paramount.</p>
          </li>
        </ul>
      </section>
      <section id="contact">
        <h2>Get in Touch:</h2>
        <p>Ready to enhance safety and functionality with our high-quality gratings? <NavLink to="/contactus">Contact us</NavLink> today to discuss your requirements, request a quote, or learn more about how our gratings can benefit your business.</p>
      </section>
      {/* Add your footer and any additional React components here */}
    </div>
  );
  


  return (
   <div className='content'> <InfoPageTemplateTemp title={title} content={content}  mainPath='/gratings' /></div>
  );
};

export default Gratings;
