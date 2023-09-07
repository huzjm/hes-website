import React from 'react';
import { useParams } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './SubMenuTemplate.css'
import './App.css' // Assuming you have a TopBar component

const SubMenuTemplate = ({ mainHeading,mainPath,subPath, submenuTitle, image, content }) => {
  const { submenu } = useParams(); // Get the submenu parameter from the URL

  return (
    
    
      
    <div className="submenu-template">
      
    <div className="submenu-header">
      <div></div>
    <div className="submenu-title">{submenuTitle}</div>
  <div className="breadcrumbs">
    <NavLink to="/">Home</NavLink> / <NavLink to={mainPath}>{mainHeading}</NavLink> / <NavLink to={subPath}>{submenuTitle}</NavLink>
  </div>
</div>

      <div className="submenu-content">
        
          
        
        <div className="info">
          <p>{content}</p>
        </div><img src={image} className='submenu-image' />
      </div>
    </div>
  );
};

export default SubMenuTemplate;
