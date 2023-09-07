
import React,{useState} from 'react';
import InfoPageTemplateTemp from './InfoPageTemplateTemp';
import './App.css'
import {Carousel} from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
const Supplies= () => {
  const title = 'General Supplies';
  const images = ['/image/supplies1.jpg','/image/supplies2.jpg','/image/supplies3.jpg'];
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const content = (
    <div>
      <h1>General Supplies</h1>
      <p>Comprehensive Solutions for Your Fabrication Needs</p>
      
      <section id="about">
        <h2>Welcome to our General Supplies section</h2>
        <p>where we offer a comprehensive range of products to support your fabrication and industrial requirements.</p>
      </section>
      
      <section id="why-choose">
        <h2>Why Choose Our General Supplies?</h2>
        <ul>
          <li>
            <p><strong>Diverse Selection:</strong> Our general supplies encompass a wide variety of essential products, making us a one-stop solution for your needs.</p>
          </li>
          <li>
            <p><strong>Quality Assurance:</strong> We ensure that our supplies meet the highest quality standards, guaranteeing their reliability and performance.</p>
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
        <h2>Types of General Supplies:</h2>
        <p>Our general supplies include but are not limited to:</p>
        <ul>
          <li>
            <p><strong>Welding Equipment:</strong> Explore a range of welding machines, torches, and safety gear for your fabrication needs.</p>
          </li>
          <li>
            <p><strong>Industrial Hardware:</strong> Find essential hardware components, fasteners, and tools to keep your operations running smoothly.</p>
          </li>
        </ul>
      </section>
      
      <section id="applications">
        <h2>Applications:</h2>
        <p>Our general supplies find applications across different industries, including:</p>
        <ul>
          <li>
            <p><strong>Manufacturing:</strong> Enhance your manufacturing processes with reliable equipment and hardware.</p>
          </li>
          <li>
            <p><strong>Construction:</strong> Find the necessary tools and hardware for your construction projects.</p>
          </li>
          <li>
            <p><strong>Maintenance:</strong> Keep your equipment and facilities in top condition with our supplies.</p>
          </li>
        </ul>
      </section>
      
      {/* Add your footer and any additional React components here */}
    </div>
  );
  
  

  return (
   <div className='content'> <InfoPageTemplateTemp title={title} content={content}   mainPath='/supplies'/></div>
  );
};

export default Supplies;