import React from 'react';
import { NavLink } from 'react-router-dom';
import './TopBar.css';
const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <NavLink to="/">
        
          <img src='/image/Huzefa Engineering-01.png' alt="Logo" className="logo" />
        </NavLink>
      </div>
      <div className="socialbar"><div><NavLink to="/">
        
        <img src='/image/whatsappico.png' alt="" className="social" />
      </NavLink>
      <NavLink to="/">
        
        <img src='/image/twitterico.png' alt="" className="social" />
      </NavLink>
      <NavLink to="/">
            
        <img src='/image/facebookico.png' alt="" className="social" />
      </NavLink>
      <NavLink to="/">
            
        <img src='/image/linkedico.png' alt="" className="social" />
      </NavLink></div></div>
     
    </div>
  );
};

export default TopBar;
