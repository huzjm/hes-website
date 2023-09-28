import React,{useState} from 'react';
import InfoPageTemplateTemp from '../Default Templates/InfoPageTemplateTemp';
import '../App.css'
import {Carousel} from 'react-responsive-carousel';

const BulkMovement = () => {
  document.title="HES | Bulk Movement"
  const images = ['/image/bulk1.jpg','/image/bulk4.jpg','/image/bulk5.jpg','/image/bulk7.jpg'];
  const title = 'Bulk Movement';const [showModal, setShowModal] = useState(false);
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
      <h1>Bulk Movement</h1>
      <p>Efficient Material Transport Solutions</p>
      
      <section id="about">
        <h2>Welcome to our Bulk Movement section</h2>
        <p>where we introduce a range of efficient material transport solutions designed to streamline your processes and enhance productivity.</p>
      </section>
      
      <section id="why-choose">
        <h2>Why Choose Our Bulk Movement Solutions?</h2>
        <ul>
          <li>
            <p><strong>Efficiency:</strong> Our solutions are engineered for seamless material transportation, saving time and resources.</p>
          </li>
          <li>
            <p><strong>Customization:</strong> We offer customization options to tailor our solutions to your specific requirements, ensuring they align perfectly with your operational needs.</p>
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
        <h2>Types of Bulk Movement Solutions:</h2>
        <h3>Conveyors:</h3>
        <ul>
          <li>
            <p><strong>Streamlined Material Flow:</strong> Our conveyor systems provide efficient material transportation for various industries, including assembly lines, warehouses, and production facilities.</p>
          </li>
        </ul>
        <h3>Hoppers:</h3>
        <ul>
          <li>
            <p><strong>Efficient Material Handling:</strong> Our hoppers are designed to store and dispense bulk materials, ensuring consistent material flow while minimizing downtime.</p>
          </li>
        </ul>
        <h3>Bucket Elevators:</h3>
        <ul>
          <li>
            <p><strong>Vertical Material Transport:</strong> Our bucket elevators are perfect for moving bulk materials between different levels, offering efficient and safe vertical transport solutions.</p>
          </li>
        </ul>
      </section>
      
      <section id="applications">
        <h2>Applications:</h2>
        <p>Our bulk movement solutions find applications in a wide range of industries, including:</p>
        <ul>
          <li>
            <p><strong>Manufacturing:</strong> Enhancing material transport in production processes.</p>
          </li>
          <li>
            <p><strong>Construction:</strong> Facilitating the movement of construction materials on-site.</p>
          </li>
          <li>
            <p><strong>Agriculture:</strong> Streamlining grain and bulk material handling.</p>
          </li>
        </ul>
      </section>
      
      <section id="contact">
        <h2>Get in Touch:</h2>
        <p>Ready to streamline your material transport with our Bulk Movement Solutions? <a href="/contactus">Contact us</a> today to discuss your requirements, request a quote, or explore customization options.</p>
      </section>
      
      {/* Add your footer and any additional React components here */}
    </div>
  );
  
  

  return (
   <div className='content'> <InfoPageTemplateTemp title={title} content={content}  mainPath='/bulkmovement'/></div>
  );
};

export default BulkMovement;
