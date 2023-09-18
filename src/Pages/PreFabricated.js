import React,{useState} from 'react';
import InfoPageTemplateTemp from '../Default Templates/InfoPageTemplateTemp';
import '../App.css'
import {Carousel} from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
const PreFabricated = () => {
  document.title = 'HES | Pre-Fabricated Structures';
  const title = 'Pre-Fabricated';const images = ['/image/prefab1.jpg','/image/prefab2.jpg'];
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
    <h1>Pre-fabricated Structures</h1>
    <p>Efficient, Versatile, and Ready-to-Deploy</p>
    
    <section id="about">
      <h2>Welcome to our Pre-fabricated Structures section</h2>
      <p>where we showcase a range of efficient, versatile, and ready-to-deploy solutions designed to meet your structural needs.</p>
    </section>
    
    <section id="why-choose">
      <h2>Why Choose Our Pre-fabricated Structures?</h2>
      <ul>
        <li>
          <p><strong>Efficiency:</strong> Our pre-fabricated structures offer quick installation and cost-effective solutions for a variety of applications.</p>
        </li>
        <li>
          <p><strong>Versatility:</strong> We provide a range of options, including sheds, railings, and monkey ladders, to suit your specific requirements.</p>
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
      <h2>Types of Pre-fabricated Structures:</h2>
      <h3>Sheds:</h3>
      <ul>
        <li>
          <p><strong>Versatile Storage Solutions:</strong> Our pre-fabricated sheds provide versatile storage solutions for equipment, materials, and personnel.</p>
        </li>
      </ul>
      <h3>Railings:</h3>
      <ul>
        <li>
          <p><strong>Safety Meets Aesthetics:</strong> Enhance safety and aesthetics with our pre-fabricated railing solutions for staircases, balconies, and more.</p>
        </li>
      </ul>
      <h3>Monkey Ladders:</h3>
      <ul>
        <li>
          <p><strong>Efficient Vertical Access:</strong> Our monkey ladders are designed for safe and efficient vertical access in various industrial settings.</p>
        </li>
      </ul>
    </section>
    
    <section id="applications">
      <h2>Applications:</h2>
      <p>Our pre-fabricated structures find applications in diverse industries, including:</p>
      <ul>
        <li>
          <p><strong>Construction:</strong> Temporary offices, storage, and workspace solutions.</p>
        </li>
        <li>
          <p><strong>Industrial:</strong> Safety railings, access solutions, and more.</p>
        </li>
        <li>
          <p><strong>Commercial:</strong> Versatile storage and structural solutions.</p>
        </li>
      </ul>
    </section>
    
    <section id="contact">
      <h2>Get in Touch:</h2>
      <p>Ready to deploy our efficient and versatile Pre-fabricated Structures? <a href="/contactus">Contact us</a> today to discuss your requirements, request a quote, or explore customization options.</p>
    </section>
    
    {/* Add your footer and any additional React components here */}
  </div>
  );
  
 

  return ( 
   <div className='content'> <InfoPageTemplateTemp title={title} content={content}   mainPath='/prefab'/></div>
  );
};

export default PreFabricated;
