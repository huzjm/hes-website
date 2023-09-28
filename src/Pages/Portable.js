import React,{useState} from 'react';
import InfoPageTemplateTemp from '../Default Templates/InfoPageTemplateTemp';
import '../App.css'
import {Carousel} from 'react-responsive-carousel';

const Portable = () => {
  document.title = 'HES | Portable Offices';
  const title = 'Portable Offices';
  const images = ['/image/portable1.jpg','/image/portable2.jpg','/image/portable3.jpg'];
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
      <h1>Container Office Rental</h1>
      <p>Flexible, Cost-Effective, and On-Demand Workspaces</p>
      
      <section id="about">
        <h2>Welcome to our Container Office Rental section</h2>
        <p>where we introduce flexible, cost-effective, and on-demand workspace solutions housed within containers.</p>
      </section>
      
      <section id="why-choose">
        <h2>Why Choose Our Container Offices?</h2>
        <ul>
          <li>
            <p><strong>Flexibility:</strong> Our container offices offer a flexible and mobile solution, allowing you to establish workspaces where you need them.</p>
          </li>
          <li>
            <p><strong>Cost-Effectiveness:</strong> Renting a container office eliminates the need for expensive construction projects, saving you both time and resources.</p>
          </li>
          <li>
            <p><strong>Quality:</strong> Our container offices are built with quality materials and craftsmanship, ensuring a comfortable and functional workspace.</p>
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
          dynamicHeight={false} 
          centerMode={false}
          >
            {images.map((image, index) => (
              <div key={index} onClick={() => openModal(index)}>
                <img src={image} alt="" className="info-image"  />
              </div>
            ))}
          </Carousel>
        </div>
      <section id="key-features">
        <h2>Key Features:</h2>
        <ul>
          <li>
            <p><strong>Climate Control:</strong> Keep your workspace comfortable year-round with optional heating and cooling solutions.</p>
          </li>
          <li>
            <p><strong>Security:</strong> Our container offices are secure and can be equipped with locks and other security measures.</p>
          </li>
          <li>
            <p><strong>Electrical and IT Infrastructure:</strong> Wiring and outlets can be installed to support your office equipment and technology needs.</p>
          </li>
          <li>
            <p><strong>Furniture and Layout:</strong> Choose from a variety of furniture and layout options to optimize your workspace.</p>
          </li>
          <li>
            <p><strong>Branding:</strong> Customize the container with your branding and company colors for a professional appearance.</p>
          </li>
        </ul>
      </section>
      
      <section id="applications">
        <h2>Applications:</h2>
        <p>Our container offices are suitable for various industries and scenarios, including:</p>
        <ul>
          <li>
            <p><strong>Construction Sites:</strong> On-site administrative centers, project management offices.</p>
          </li>
          <li>
            <p><strong>Events and Exhibitions:</strong> Ticket booths, registration centers, information kiosks.</p>
          </li>
          <li>
            <p><strong>Remote Locations:</strong> Functional offices in areas where traditional infrastructure may be limited.</p>
          </li>
          <li>
            <p><strong>Temporary Workspaces:</strong> Short-term office solutions during renovations, expansions, or special projects.</p>
          </li>
        </ul>
      </section>
      
      <section id="contact">
        <h2>Get in Touch:</h2>
        <p>Ready to set up your flexible container office rental? <a href="/contactus">Contact us</a> today to discuss your requirements, request a quote, or explore customization options.</p>
      </section>
      
      
    </div>
  );
  
 
  return (
   <div className='content'> <InfoPageTemplateTemp title={title} content={content} images={images}  mainPath='/portable' /></div>
  );
};

export default Portable;