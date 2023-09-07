
import React,{useState} from 'react';
import './InfoPageTemplate.css';
import { NavLink } from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import ImageGallery from "react-image-gallery";
const InfoPageTemplate = ({ title, content, images, subMenus= [],mainPath, subPath='', submenuTitle=''}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const isSubPathActive = subPath !== '';
  

  const openModal = (index) => {
    setSelectedImageIndex(index);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className="info-page-container">
      <div className="info-header">
        <div></div>
        {isSubPathActive?(<div className="info-title">{submenuTitle}</div>):(<div className="info-title">{title}</div>)}
         {isSubPathActive ? (
     <div className="breadcrumbs">
     <NavLink to="/">Home</NavLink> / <NavLink to={mainPath}>{title}</NavLink> / <NavLink to={subPath}>{submenuTitle}</NavLink>
    </div>):(<div className="breadcrumbs">
    <NavLink to="/">Home</NavLink> / <NavLink to={mainPath}>{title}</NavLink></div>

    )}
  
      </div>
      <div className="info-content-container">
        
       
      {showModal && (
        <div className="modal" onClick={closeModal}>
          
          <img
            src={images[selectedImageIndex]}
            
            className="enlarged-image"
          />
        </div>
      )}

       {images.length>1 ? (<div className="info-slideshow">
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
                <img src={image} alt="info-image" className="info-image"  />
              </div>
            ))}
          </Carousel>
        </div>):(
        <img src={images} className="info-solo" onClick={() => openModal(0)} />
        

        )}
        <div className="info-content-box">
          <div className="info-content">{content}</div>
         {subMenus.length > 0 && (
  <div className="info-page-submenus">
    {subMenus.map((subMenu) => (
      <NavLink to={subMenu.path}><button key={subMenu.label}>
        
          {subMenu.label}
        
      </button></NavLink>
    ))}
  </div>
)}
        </div>
        
      </div>
      
      
    </div>
  );
};

export default InfoPageTemplate;
