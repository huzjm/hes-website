import React,{useState} from 'react';
import InfoPageTemplateTemp from '../Default Templates/InfoPageTemplateTemp';
import '../App.css'
import {Carousel} from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';
const HeatExchanger= () => {

  
    document.title = 'HES | Heat Exchangers';
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = ['/image/shellandtube.jpeg','/image/heatexchanger1.jpg','/image/heatexchanger2.jpg'];
  

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const title = 'Heat Exchangers';
  const content = (
    <div>
      <p>Welcome to the heart of our fabrication expertise. At HES, we take pride in offering a wide range of heat exchangers designed to meet your unique requirements. Our heat exchangers are engineered for efficiency, reliability, and versatility, making them ideal for various industries and applications.</p>
      <h1>
      Why Choose Our Heat Exchangers?
       </h1>
       <ul>
     <li>  Performance: Our heat exchangers are optimized for maximum heat transfer efficiency, helping you save energy and resources.</li>

     <li>Customization: We work closely with our clients to design and fabricate heat exchangers that precisely match their specifications.</li>

     <li>Quality: With decades of experience, we maintain the highest standards of quality and craftsmanship in every heat exchanger we produce.</li>
       </ul>
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
       <h1>Types of Heat Exchangers:</h1>
       <ul><li> <h2>Shell and Tube Heat Exchangers</h2>
       
       Efficiency in Every Tube: Our shell and tube heat exchangers are engineered for optimal heat exchange between two fluids. They are known for their durability and reliability in various industries, including petrochemical and power generation.</li>
       <li> <h2>Plate Fin Heat Exchangers</h2>
       
       Compact and Effective: If space is limited, our plate and fin heat exchangers offer a solution. These versatile exchangers excel in applications like air conditioning and refrigeration.</li></ul>

       <h1>Applications:</h1>
      <p>Our heat exchangers find applications in a wide range of industries, including:</p>
       <ul><li>Energy Sector: Heat recovery, power plant cooling systems.</li><li>Manufacturing: Industrial process cooling and heating.</li><li>HVAC: Efficient heating and cooling solutions for buildings.</li><li>Chemical Industry: Safe handling of corrosive fluids.</li></ul>
       <h1> Quality Assurance:</h1>

<p>Quality is our commitment. Our heat exchangers undergo rigorous testing and quality control to ensure they meet and exceed industry standards.</p>

<NavLink to= '/contactus'><h1>Contact Us</h1>
       </NavLink>

<p>Ready to optimize your heat exchange processes? Contact us today to discuss your heat exchanger needs, request a quote, or explore customization options. We're here to help you find the perfect heat exchanger solution for your specific requirements.</p>

      

      {/* Add more content */}
    </div>
  );
  
  // const subMenus = [
  //   { label: 'Shell and Tube', path: '/heatexchanger/shellandtube' },
  //   { label: 'Plate Fin', path: '/heatexchanger/platefin' },
   
    
  //   // Add more submenu items if needed
  // ];

  return (
   <div className='content'> <InfoPageTemplateTemp title={title} content={content} images={images}  mainPath='/heatexchanger'/></div>
  );
};

export default HeatExchanger;