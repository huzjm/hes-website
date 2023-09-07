
import React,{useState} from 'react';
import './InfoPageTemplate.css';
import { NavLink } from 'react-router-dom';
import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; 
import ImageGallery from "react-image-gallery";
const InfoPageTemplateTemp = ({ title, content, images, subMenus= [],mainPath, subPath='', submenuTitle=''}) => {
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

export default InfoPageTemplateTemp;
