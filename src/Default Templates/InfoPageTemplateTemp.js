
import React from 'react';
import './InfoPageTemplate.css';
import { NavLink } from 'react-router-dom';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; 

const InfoPageTemplateTemp = ({ title, content, images, subMenus= [],mainPath, subPath='', submenuTitle=''}) => {
 
  const isSubPathActive = subPath !== '';
  

 
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
        
        </div>
        
      </div>
      
      
    </div>
  );
};

export default InfoPageTemplateTemp;
