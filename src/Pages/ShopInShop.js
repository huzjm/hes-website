import React,{useState} from 'react';
import InfoPageTemplateTemp from '../Default Templates/InfoPageTemplateTemp';
import '../App.css'
import {Carousel} from 'react-responsive-carousel';

const ShopInShop= () => {
  document.title = 'HES | ShopInShop';
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const images = ['/image/supplies1.jpg','/image/supplies3.jpg','/image/supplies2.jpg'];
  

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const title = 'ShopInShop';
  const content = (
    <div>
      <h1>ShopInShop</h1>

<p><em>Convenience and Efficiency in Your Workplace</em></p>

<p>Welcome to our ShopInShop program, where we offer a unique solution to streamline and simplify the procurement process within your plant or factory.</p>

<h2>About ShopInShop:</h2>

<p>At HES, we understand the challenges of maintaining an efficient supply chain within a busy industrial setting. That's why we've introduced our innovative ShopInShop program, designed to bring convenience and efficiency to your workplace.</p>

<h2>How ShopInShop Works:</h2>

<ul>
  <li>
    <p><strong>On-Site Inventory:</strong> We set up a fully stocked container or shop within your facility, offering a broad range of inventory, including stationary, janitorial, pantry items, general supplies, mechanical items, electrical items, and more.</p>
  </li>
  <li>
    <p><strong>Immediate Access:</strong> Your employees can easily access the shop during designated hours without the need for inquiries, quotes, or delays.</p>
  </li>
  <li>
    <p><strong>Employee Tracking:</strong> Each employee can pick up the items they need and have them billed directly to the company under their name. This allows for efficient tracking of usage.</p>
  </li>
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
        <h2>Benefits of ShopInShop:</h2>

<ul>
  <li>
    <p><strong>Immediate Access:</strong> Eliminate the waiting time for procurement and provide employees with instant access to essential items.</p>
  </li>
  <li>
    <p><strong>Cost-Effective:</strong> Reduce administrative costs and the need for multiple purchase orders.</p>
  </li>
  <li>
    <p><strong>Efficiency:</strong> Streamline your internal procurement process and ensure that necessary supplies are always on hand.</p>
  </li>
  <li>
    <p><strong>Employee Satisfaction:</strong> Enhance the convenience and satisfaction of your workforce by simplifying the process of obtaining supplies.</p>
  </li>
</ul>

<h2>Customized Inventory:</h2>

<p>We work closely with your organization to tailor the inventory offered in the ShopInShop to match your specific needs and requirements.</p>

<h2>Get in Touch:</h2>

<p>Ready to bring the convenience of ShopInShop to your workplace? <a href="/contactus">Contact us</a> today to discuss how our program can benefit your company, customize your inventory, or request a consultation.</p>

      

      {/* Add more content */}
    </div>
  );
  
  // const subMenus = [
  //   { label: 'Shell and Tube', path: '/heatexchanger/shellandtube' },
  //   { label: 'Plate Fin', path: '/heatexchanger/platefin' },
   
    
  //   // Add more submenu items if needed
  // ];

  return (
   <div className='content'> <InfoPageTemplateTemp title={title} content={content} images={images}  mainPath='/shopinshop'/></div>
  );
};

export default ShopInShop;