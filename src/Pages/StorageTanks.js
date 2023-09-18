import React,{useState} from 'react';
import InfoPageTemplateTemp from '../Default Templates/InfoPageTemplateTemp';

import {Carousel} from 'react-responsive-carousel';

const StorageTanks = () => {
  document.title = 'HES | Storage Tanks';
  const title = 'Storage Tanks';
  const images = ['/image/storage1.jpg','/image/storage2.jpg','/image/storage3.jpg'];
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
    <h1>Storage Tanks</h1>
    <p>Reliable Solutions for Safe Material Storage</p>
    
    <section id="about">
      <h2>Welcome to our Storage Tanks section</h2>
      <p>where we present our comprehensive range of storage solutions designed to safeguard your liquids and materials efficiently.</p>
    </section>
    
    <section id="why-choose">
      <h2>Why Choose Our Storage Tanks?</h2>
      <ul>
        <li>
          <p><strong>Versatility:</strong> Our tanks are designed to accommodate various liquids and volumes, ensuring safe storage in a range of industries.</p>
        </li>
        <li>
          <p><strong>Customization:</strong> We offer customization options to tailor the tanks to your specific requirements, ensuring they integrate seamlessly into your operations.</p>
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
      <h2>Types of Storage Solutions:</h2>
      <h3>Tanks:</h3>
      <ul>
        <li>
          <p><strong>Optimized for Capacity:</strong> Our tanks are meticulously engineered to handle a wide range of fluids and volumes, providing secure and efficient storage solutions.</p>
        </li>
      </ul>
      <h3>Pressure Vessels:</h3>
      <ul>
        <li>
          <p><strong>Safety Under Pressure:</strong> Our pressure vessels are designed to withstand varying pressure levels, offering unmatched safety and reliability.</p>
        </li>
      </ul>
    </section>
    
    <section id="applications">
      <h2>Applications:</h2>
      <p>Our storage solutions find applications in a variety of industries, including:</p>
      <ul>
        <li>
          <p><strong>Chemical Processing:</strong> Ensuring safe storage and handling of chemicals and liquids.</p>
        </li>
        <li>
          <p><strong>Industrial Operations:</strong> Facilitating the storage of raw materials and finished products.</p>
        </li>
        <li>
          <p><strong>Environmental Protection:</strong> Safeguarding against environmental hazards and ensuring compliance.</p>
        </li>
      </ul>
    </section>
    
    <section id="quality-assurance">
      <h2>Quality Assurance:</h2>
      <p>Quality is our commitment. Our storage tanks and pressure vessels undergo rigorous testing and quality control to ensure they meet and exceed industry standards.</p>
    </section>
    
    <section id="contact">
      <h2>Get in Touch:</h2>
      <p>Ready to safeguard your materials with our Storage Tanks? <a href="/contactus">Contact us</a> today to discuss your requirements, request a quote, or explore customization options.</p>
    </section>
    
    {/* Add your footer and any additional React components here */}
  </div>
  );
 
  const subMenus = [
    { label: 'Tanks', path: '/storage/tanks' },
    { label: 'Pressure Vessels', path: '/storage/pressurevessel' },
    // Add more submenu items if needed
  ];

  return (
   <div className='content'> <InfoPageTemplateTemp title={title} content={content} images={images}  mainPath='/storage'/></div>
  );
};

export default StorageTanks;
