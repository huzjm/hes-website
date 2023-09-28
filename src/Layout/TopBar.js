import React  from 'react';
import { NavLink } from 'react-router-dom';
import './TopBar.css';
const TopBar = () => {
 
  return (
    
    <div className="top-bar">
      <div className="logo-container">
        <NavLink to="/">
        
          <img src='/image/logo.jpg' alt="Logo" className={`logo`} />
        </NavLink>
      </div>
      
     
    </div>
    
  );
};

export default TopBar;
